import * as React from "react";
import styles from "./MainButton.module.css";

export default function MainButton({
  loading = false,
  children,
  secondary = false,
  className,
  outline,
  ...rest
}) {
  function finalClasses() {
    return outline
      ? "bg-transparent text-white rounded-lg italic font-black text-lg"
      : secondary
      ? styles.secondary
      : "bg-blue-800 text-white";
  }

  return (
    <button
      data-component="MainButton"
      className={`${finalClasses()} font-bold py-2 px-4 outline-none uppercase text-sm tracking-wide truncate ${
        className ? className : ""
      }`}
      {...rest}
    >
      {children}
    </button>
  );
}
