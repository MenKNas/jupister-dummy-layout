import * as React from "react";

export default function MainButton({ children, secondary = false }) {
  return (
    <button
      className={`${
        secondary ? "bg-yellow-300 text-yellow-800" : "bg-blue-800 text-white"
      }  font-bold py-2 px-4 rounded-lg outline-none uppercase text-sm tracking-wide truncate`}
    >
      {children}
    </button>
  );
}
