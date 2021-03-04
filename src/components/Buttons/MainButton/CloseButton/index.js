import * as React from "react";
import styles from "./CloseButton.module.css";
import classNames from "classnames";

export function CloseButton({ as = "button", className, children, ...rest }) {
  return React.createElement(as, {
    ...rest,
    className: classNames(styles.button, className),
    "data-component": "CloseButton",
  });
}
