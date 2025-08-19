import React, { RefObject, useEffect, useRef, useState } from "react";
import styles from "./ToyScene.module.scss";
import Matter from "matter-js";
import useMousePosition from "../lib/useMousePosition";

interface ToySceneProps {}

interface CustomBody extends Matter.Body {
  enteredScene?: boolean;
}
interface CanvasSize {
  width: number;
  height: number;
}

const ToyScene: React.FC<ToySceneProps> = () => {
  const canvas: RefObject<HTMLCanvasElement | undefined> = useRef();
  const [scene, setScene] = useState<Matter.Render>();
  const [activeBodies, setActiveBodies] = useState<CustomBody[]>([]);
  const [canvasSize, setCanvasSize] = useState<CanvasSize>();

  const mousePosition = useMousePosition();

  //Matter.js namespace variables
  const Engine = Matter.Engine,
    Events = Matter.Events,
    Runner = Matter.Runner,
    Render = Matter.Render,
    World = Matter.World,
    Body = Matter.Body,
    Bounds = Matter.Bounds,
    Common = Matter.Common,
    Vector = Matter.Vector,
    Query = Matter.Query,
    Composite = Matter.Composite,
    Bodies = Matter.Bodies;

  const handleResize = () => {
    setCanvasSize({
      width: Math.min(document.body.clientWidth),
      height: Math.min(document.body.clientHeight),
    });
  };

  //set up physics scene on first render
  useEffect(() => {
    // create engine
    const engine = Engine.create();

    const clientWidth = Math.min(document.body.clientWidth);
    const clientHeight = Math.min(document.body.clientHeight);

    const bgColor = getComputedStyle(document.documentElement).getPropertyValue(
      "--color-black"
    );
    const shapeColor = getComputedStyle(
      document.documentElement
    ).getPropertyValue("--color-offblack");

    // create renderer
    const render = Render.create({
      canvas: canvas.current,
      engine: engine,
      options: {
        width: clientWidth,
        height: clientHeight,
        background: bgColor,
        wireframes: false,
      },
    });

    Render.run(render);

    // create runner
    const runner = Runner.create();
    Runner.run(runner, engine);

    // create demo scene
    const world = engine.world;
    world.gravity.scale = 0;

    //scene parameters
    const NUM_BODIES = 30;
    const Y_START = -1200;
    const FRICTION_AIR = 0.001;
    const MIN_CIRCLE_WIDTH = 40;
    const MAX_CIRCLE_WIDTH = 300;

    for (let i = 0; i < NUM_BODIES; i += 1) {
      const options = {
        friction: 0,
        frictionAir: FRICTION_AIR,
        render: {
          fillStyle: Common.choose([shapeColor]),
        },
      };

      const circleWidth = Common.random(MIN_CIRCLE_WIDTH, MAX_CIRCLE_WIDTH);
      const circle: CustomBody = Bodies.circle(
        Common.random(0, clientWidth),
        Y_START,
        circleWidth,
        options
      );
      circle.enteredScene = false;

      Body.setVelocity(circle, {
        x: Common.random(-3, 3) + 1,
        y: Common.random(-3, 3) + 5,
      });

      World.add(world, [circle]);
    }
    const allBodies: CustomBody[] = Composite.allBodies(world);

    Events.on(engine, "beforeUpdate", function (event) {
      for (let i = 0; i < allBodies.length; i += 1) {
        const body = allBodies[i];
        let translateX = undefined,
          translateY = undefined;
        let wrapBody = false;

        //check if body entered scene for the first time, start wrapping
        if (Bounds.overlaps(body.bounds, render.bounds)) {
          body.enteredScene = true;
        }
        if (body.bounds.min.x > render.bounds.max.x) {
          translateX = render.bounds.min.x - body.bounds.max.x;
          wrapBody = true;
        } else if (body.bounds.max.x < render.bounds.min.x) {
          translateX = render.bounds.max.x - body.bounds.min.x;
          wrapBody = true;
        }
        if (body.bounds.min.y > render.bounds.max.y) {
          translateY = render.bounds.min.y - body.bounds.max.y;
          wrapBody = true;
        } else if (body.bounds.max.y < render.bounds.min.y) {
          translateY = render.bounds.max.y - body.bounds.min.y;
          wrapBody = true;
        }
        if (wrapBody) {
          let overlappingBodies = 0;
          const translateVector = Vector.create(translateX, translateY);
          const futureBounds = getNewBoundsByTranslateVector(
            body.bounds,
            translateVector
          );

          for (let j = 0; j < allBodies.length; j += 1) {
            const comparedBody = allBodies[j];
            if (comparedBody.id !== body.id) {
              if (Bounds.overlaps(comparedBody.bounds, futureBounds)) {
                overlappingBodies += 1;
              }
            }
          }
          if (overlappingBodies == 0 && body.enteredScene) {
            Body.translate(body, translateVector);
          }
        }
      }
    });

    const getNewBoundsByTranslateVector = (
      bounds: Matter.Bounds,
      vector: Matter.Vector
    ) => {
      const newBounds = {
        min: {
          x: bounds.min.x + vector.x,
          y: bounds.min.y + vector.y,
        },
        max: {
          x: bounds.max.x + vector.x,
          y: bounds.max.y + vector.y,
        },
      };

      return newBounds;
    };

    setScene(render);
    setActiveBodies(allBodies);
    window.addEventListener("resize", handleResize);
  }, []);

  //check for mouse position over bodies, apply opposite force to move body away.
  useEffect(() => {
    if (scene) {
      var foundPhysics = Query.point(activeBodies, mousePosition);
      const foundBody = foundPhysics[0];

      if (foundBody) {
        var force = 1;
        var deltaVector = Vector.sub(mousePosition, foundBody.position);
        var normalizedDelta = Vector.normalise(deltaVector);
        var negDelta = Vector.neg(normalizedDelta);

        var forceVector = Vector.mult(negDelta, force);

        // Body.applyForce(foundBody, foundBody.position, forceVector);
        Body.applyForce(foundBody, mousePosition, forceVector);
      }
    }
  }, [mousePosition]);

  //remove resize listener
  useEffect(() => {
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (canvasSize && scene) {
      let { width, height } = canvasSize;

      // Dynamically update canvas and bounds
      scene.bounds.max.x = width;
      scene.bounds.max.y = height;
      scene.options.width = width;
      scene.options.height = height;
      scene.canvas.width = width;
      scene.canvas.height = height;
    }
  }, [scene, canvasSize]);
  return (
    <div className={styles.root}>
      <canvas className={styles.canvas} ref={canvas}></canvas>
    </div>
  );
};

export default ToyScene;
