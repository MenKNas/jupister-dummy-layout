import * as React from "react";
import styles from "./MainButton.module.css";

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
      ? styles.secondary
      : "bg-blue-800 text-white";
  }

  return (
    <button
      data-component="MainButton"
      className={`${finalClasses()} font-bold py-2 px-4 rounded-lg outline-none uppercase text-sm tracking-wide truncate ${
        className ? className : ""
      }`}
      {...rest}
    >
      {children}
    </button>
  );
}
