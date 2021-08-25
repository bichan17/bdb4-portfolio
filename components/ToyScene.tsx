import React, { useEffect, useRef, useState } from "react";
import styles from "./ToyScene.module.css";
import Matter from "matter-js";
import useMousePosition from "../lib/useMousePosition";
import useUpdateEffect from "../lib/useUpdateEffect";

interface ToySceneProps {
  containerRef: any;
}

const ToyScene: React.FC = ({ containerRef }: ToySceneProps) => {
  const canvas = useRef(null);
  const [scene, setScene] = useState();
  const [activeBodies, setActiveBodies] = useState([]);

  const mousePosition = useMousePosition();

  useEffect(() => {
    const Engine = Matter.Engine,
      Events = Matter.Events,
      Runner = Matter.Runner,
      Render = Matter.Render,
      World = Matter.World,
      Body = Matter.Body,
      Bounds = Matter.Bounds,
      Mouse = Matter.Mouse,
      Common = Matter.Common,
      Vector = Matter.Vector,
      Composite = Matter.Composite,
      Bodies = Matter.Bodies;

    // create engine
    const engine = Engine.create();

    const clientWidth = Math.min(document.body.clientWidth);
    const clientHeight = Math.min(document.body.clientHeight);

    // create renderer
    const render = Render.create({
      canvas: canvas.current,
      engine: engine,
      options: {
        width: clientWidth,
        height: clientHeight,
        background: "#000",
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

    const NUM_BODIES = 30;

    for (let i = 0; i < NUM_BODIES; i += 1) {
      const options = {
        friction: 0,
        frictionAir: 0.002,
        render: {
          fillStyle: Common.choose([
            "#0C38E8",
            "#0080FF",
            "#0CBCE8",
            "#0DFFE6",
          ]),
        },
      };
      const Y_START = -1000;

      const rectWidth = Common.random(20, 200);
      const rectangle = Bodies.rectangle(
        Common.random(0, clientWidth),
        Y_START,
        rectWidth,
        rectWidth,
        options
      );
      rectangle.enteredScene = false;

      Body.setVelocity(rectangle, {
        x: Common.random(-3, 3) + 1,
        y: Common.random(-3, 3) + 5,
      });

      World.add(world, [rectangle]);
    }
    const allBodies = Composite.allBodies(world);

    Events.on(engine, "beforeUpdate", function (event) {
      for (let i = 0; i < allBodies.length; i += 1) {
        const body = allBodies[i];
        let x = null,
          y = null;
        let wrapBody = false;

        //check if body entered scene for the first time, start wrapping
        if (Bounds.overlaps(body.bounds, render.bounds)) {
          body.enteredScene = true;
        }
        if (body.bounds.min.x > render.bounds.max.x) {
          x = render.bounds.min.x - body.bounds.max.x;
          wrapBody = true;
        } else if (body.bounds.max.x < render.bounds.min.x) {
          x = render.bounds.max.x - body.bounds.min.x;
          wrapBody = true;
        }
        if (body.bounds.min.y > render.bounds.max.y) {
          y = render.bounds.min.y - body.bounds.max.y;
          wrapBody = true;
        } else if (body.bounds.max.y < render.bounds.min.y) {
          y = render.bounds.max.y - body.bounds.min.y;
          wrapBody = true;
        }
        if (wrapBody) {
          let overlappingBodies = 0;
          const translateVector = Vector.create(x, y);
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

    //mouse dragging control
    // const mouseConstraintOptions = {
    //   mouse: Mouse.create(render.canvas),
    //   constraint: {
    //     stiffness: 0.007,
    //     render: {
    //       visible: false,
    //       lineWidth: 300,
    //     },
    //   },
    // };
    // const mouseConstraint = Matter.MouseConstraint.create(
    //   engine,
    //   mouseConstraintOptions
    // );
    // World.add(world, mouseConstraint);

    //mouse hover events
    const mouseConstraintOptions = {
      mouse: Mouse.create(render.canvas),
      constraint: {
        stiffness: 0.007,
        render: {
          visible: false,
          lineWidth: 300,
        },
      },
    };
    let mConstraint = Matter.MouseConstraint.create(
      engine,
      mouseConstraintOptions
    );
    World.add(world, mConstraint);

    //Add event with 'mousemove'
    //instead of on mouse move, run when new mouse positon occurs
    // Events.on(mConstraint, "mousemove", function (event) {
    //   //For Matter.Query.point pass "array of bodies" and "mouse position"
    //   var foundPhysics = Query.point(allBodies, event.mouse.position);

    //   // console.log("matter", event.mouse.position);

    //   //Your custom code here
    //   // console.log(foundPhysics[0]); //returns a shape corrisponding to the mouse position
    // });

    function getNewBoundsByTranslateVector(bounds, vector) {
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
    }

    setScene(render);
    setActiveBodies(allBodies);
  }, []);

  useEffect(() => {
    if (scene) {
      var foundPhysics = Matter.Query.point(activeBodies, mousePosition);
      console.log(foundPhysics[0]);
    }
  }, [mousePosition]);
  return (
    <div className={styles.root}>
      <canvas className={styles.canvas} ref={canvas}></canvas>
    </div>
  );
};

export default ToyScene;
