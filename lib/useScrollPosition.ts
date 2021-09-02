import { useEffect, useState } from "react";
import { fromEvent } from "rxjs";
import { throttleTime } from "rxjs/operators";

function useScrollPosition(throttleRate: number = 50) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const sub = fromEvent<Event>(window, "scroll")
      .pipe(throttleTime(throttleRate))
      .subscribe((event) => {
        setScrollY(event.target.scrollingElement.scrollTop);
      });
    return () => {
      sub.unsubscribe();
    };
  }, []);

  return scrollY;
}

export default useScrollPosition;
