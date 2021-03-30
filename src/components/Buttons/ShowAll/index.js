import * as React from "react";
import { ReactComponent as ChevronRight } from "../../../icons/chevron-right.svg";

export function ShowAllButton() {
  return (
    <button className="truncate text-text-secondary flex items-center text-lg">
      <span>Show All</span>
      <ChevronRight />
    </button>
  );
}
