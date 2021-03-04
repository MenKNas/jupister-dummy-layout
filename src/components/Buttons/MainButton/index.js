import * as React from "react";

export default function MainButton({
  children,
  secondary = false,
  className,
  outline,
  ...rest
}) {
  function finalClasses() {
    return outline
      ? "bg-transparent border border-yellow-300 text-white"
      : secondary
      ? "bg-yellow-300 text-yellow-800"
      : "bg-blue-800 text-white";
  }

  return (
    <button
      className={`${finalClasses()} font-bold py-2 px-4 rounded-lg outline-none uppercase text-sm tracking-wide truncate ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
