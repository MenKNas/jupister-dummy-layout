import * as React from "react";
import { useInterval } from "react-use";

export function useCountdown(endTime, options) {
  const { interval = 1000, onDown, onEnd } = options;
  const [time, setTime] = React.useState(() => new Date());
  const restTime = endTime.getTime() - time.getTime();
  const count = restTime > 0 ? Math.ceil(restTime / interval) : 0;

  function onTick() {
    const newTime = new Date();
    if (newTime > endTime) {
      if (onEnd) onEnd(newTime);

      setTime(endTime);
      return;
    }

    if (onDown) onDown(restTime, newTime);
    setTime(newTime);
  }

  useInterval(onTick, count ? interval : null);
  return count;
}
