import * as React from "react";
import classNames from "classnames";
import styles from "./Alert.module.css";

const CLASS_NAMES = {
  success: styles.success,
  danger: styles.danger,
  warning: styles.warning,
  info: styles.info,
};

const Ctx = React.createContext(Object.keys(CLASS_NAMES)[0]);

export function Alert({ children, status = "success", className, ...rest }) {
  let statusClassName = CLASS_NAMES[status];
  if (statusClassName === undefined) statusClassName = Object.values()[0];
  return (
    <Ctx.Provider value={{ status }}>
      <div
        data-component="Alert"
        className={classNames(
          statusClassName,
          className,
          `px-4 py-3 space-y-2 relative`
        )}
        {...rest}
      >
        {children}
      </div>
    </Ctx.Provider>
  );
}

export function useAlert() {
  return React.useContext(Ctx);
}

export function AlertTitle({ children, className, ...rest }) {
  return (
    <div className={classNames(className, "text-lg font-medium")} {...rest}>
      {children}
    </div>
  );
}

export function AlertContent({ children, ...rest }) {
  return <div {...rest}>{children}</div>;
}
