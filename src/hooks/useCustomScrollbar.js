import * as React from "react";

export function useCustomScrollbar() {
  React.useEffect(() => {
    document.body.classList.add(
      "scrollbar",
      "scrollbar-thin",
      "scrollbar-thumb-bd-focused",
      "scrollbar-thumb-rounded-md"
    );
    return () => {
      document.body.className = "";
    };
  });
}
