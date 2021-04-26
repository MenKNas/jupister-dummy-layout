import * as React from "react";
import styles from "./MainButton.module.css";

export default function MainButton({
  loading = false,
  children,
  secondary = false,
  className,
  outline,
  formBtn,
  ...rest
}) {
  function finalClasses() {
    return outline
      ? "bg-transparent text-white rounded-lg italic font-black text-lg font-bold "
      : secondary
      ? styles.secondary
      : formBtn
      ? styles.formBtn
      : "bg-bd-focused text-white";
  }

  return (
    <button
      data-component="MainButton"
      className={`${finalClasses()} py-2.5 px-4 outline-none uppercase text-sm tracking-wide truncate ${
        className ? className : ""
      }`}
      {...rest}
    >
      {children}
    </button>
  );
}
