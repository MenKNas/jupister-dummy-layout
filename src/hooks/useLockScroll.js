import * as React from "react";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

export function useLockedScroll(ref, enabled = true) {
  const disabledRef = React.useRef(false);

  React.useEffect(() => {
    const element = ref.current;
    if (enabled && !disabledRef.current) {
      disableBodyScroll(element, { reserveScrollBarGap: true });
      disabledRef.current = true;
    }

    return () => {
      if (disabledRef.current) {
        enableBodyScroll(element);
        disabledRef.current = false;
      }
    };
  }, [ref, enabled]);
}
