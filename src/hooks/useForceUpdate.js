import * as React from "react";
export function useForceUpdate() {
  const unloadingRef = React.useRef(false);
  const [, setForcedRenderCount] = React.useState(0);

  React.useEffect(() => {
    return () => {
      unloadingRef.current = true;
    };
  });

  return React.useCallback(() => {
    !unloadingRef.current && setForcedRenderCount((prev) => prev + 1);
  }, []);
}
