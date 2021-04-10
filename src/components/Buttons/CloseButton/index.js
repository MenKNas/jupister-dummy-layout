import * as React from "react";
// import styles from "./CloseButton.module.css";
import classNames from "classnames";
import { ReactComponent as ModalCloseIcon } from "../../../icons/small-close-x.svg";

// export function CloseButton({ as = "button", className, children, ...rest }) {
//   return React.createElement(as, {
//     ...rest,
//     className: classNames(styles.button, className),
//     "data-component": "CloseButton",
//   });
// }

export function CloseButton({
  className,
  children,
  stroke = "#A9B7D5",
  ...rest
}) {
  return (
    <button className={classNames(className)} {...rest}>
      <ModalCloseIcon stroke={stroke} />
    </button>
  );
}
