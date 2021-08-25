import { useEffect, useState } from "react";
import { fromEvent } from "rxjs";
import { map, throttleTime } from "rxjs/operators";

function useMousePosition(throttleRate = 100) {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  useEffect(() => {
    // Subscribe to the mousemove event
    const sub = fromEvent(document, "mousemove")
      // Extract out current mouse position from the event
      .pipe(
        throttleTime(throttleRate),
        map((event: MouseEvent) => [event.pageX, event.pageY])
      )
      // We have closure over the updater functions for our two state variables
      // Use these updaters to bridge the gap between RxJS and React
      .subscribe(([newX, newY]) => {
        setMouseX(newX);
        setMouseY(newY);
      });

    // When the component unmounts, remove the event listener
    return () => {
      sub.unsubscribe();
    };
    // We use [] here so that this effect fires exactly once.
    // (After the first render)
  }, []);

  return { x: mouseX, y: mouseY };
}

export default useMousePosition;
