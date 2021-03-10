import * as React from "react";
import classNames from "classnames";
import { Portal } from "../Portal";
import { useMergedRef } from "../../hooks/useMergedRef";
import { useLockedScroll } from "../../hooks/useLockScroll";
import styles from "./ModalContainer.module.css";
import { CloseButton } from "../Buttons/CloseButton";

const sizes = {
  sm: styles.sizeSM,
  md: "",
  lg: styles.sizeLG,
  xl: styles.sizeXL,
};

const fullscreens = {
  sm: styles.fullscreenSM,
  md: styles.fullscreenMD,
  lg: styles.fullscreenLG,
  xl: styles.fullscreenXL,
};

export const ModalContainer = React.forwardRef(
  (
    {
      children,
      className,
      containerRef,
      size = "md",
      fullScreen = "sm",
      centered = true,
      scrollable = true,
      ...rest
    },
    ref
  ) => {
    return (
      <Portal containerRef={containerRef}>
        <div className="fixed start-0 end-0 top-0 bottom-0 bg-black bg-opacity-75 z-50 overflow-x-hidden overflow-y-auto w-full">
          <div
            className={classNames(
              styles.dialog,
              centered && styles.centered,
              scrollable && styles.scrollable,
              fullscreens[fullScreen] ?? fullscreens["sm"],
              sizes[size] ?? sizes["md"]
            )}
            {...rest}
            ref={ref}
            data-component="Dialog"
          >
            <div className={styles.content}>{children}</div>
          </div>
        </div>
      </Portal>
    );
  }
);

export const ModalHeader = React.forwardRef(({ title, onClose }, ref) => {
  return (
    <div className={styles.header} ref={ref}>
      <div className={styles.title}>{title}</div>
      <CloseButton onClick={onClose} aria-label="Close" />
    </div>
  );
});

export const ModalBody = React.forwardRef(
  ({ children, className, ...rest }, ref) => {
    const innerRef = React.useRef();
    const [toggled, toggle] = React.useState(false);
    useLockedScroll(innerRef, toggled);
    React.useEffect(() => toggle(true), []);
    return (
      <div
        className={classNames(className, styles.body)}
        {...rest}
        ref={useMergedRef(innerRef, ref)}
      >
        {children}
      </div>
    );
  }
);
