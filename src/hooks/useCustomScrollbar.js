import * as React from "react";

const scrollbarClasses = [
  "scrollbar",
  "scrollbar-thin",
  "scrollbar-thumb-bd-focused",
  "scrollbar-thumb-rounded-md",
];

export function useCustomScrollbar() {
  React.useEffect(() => {
    document.body.classList.add(...scrollbarClasses);
    return () => {
      document.body.classList.remove(...scrollbarClasses);
    };
  });
}
