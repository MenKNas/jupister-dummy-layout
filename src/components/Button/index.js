import * as React from "react";

export default function MainButton({ children, secondary = false }) {
  return (
    <button
      className={`${
        secondary ? "bg-yellow-300" : "bg-blue-800"
      } text-white py-2 px-4 rounded-lg outline-none uppercase text-sm tracking-wide truncate`}
    >
      {children}
    </button>
  );
}
