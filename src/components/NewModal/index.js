import * as React from "react";
import ReactDOM from "react-dom";
import styles from "./NewModal.module.css";
import classNames from "classnames";
import MainButton from "../Buttons/MainButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useLockedScroll } from "../../hooks/useLockedScroll";
import { useMergedRef } from "../../hooks/useMergedRef";

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

const NewModalContext = React.createContext();

export function ModalManager({ children }) {
  const modalRef = React.useRef();
  const [modalContext, setModalContext] = React.useState();

  React.useEffect(() => {
    setModalContext(modalRef.current);
  }, []);

  return (
    <div className={styles.container}>
      <NewModalContext.Provider value={modalContext}>
        {children}
      </NewModalContext.Provider>
      <div ref={modalRef} />
    </div>
  );
}

export function ModalHeader({ children, onClose }) {
  return (
    <div className={styles.header}>
      <h3 className={styles.title}> {children} </h3>
      <button
        onClick={onClose}
        className="-mt-2 text-bg-darker"
        aria-label="Close"
      >
        <FontAwesomeIcon icon={faTimes} size="lg" />
      </button>
    </div>
  );
}

export const ModalBody = React.forwardRef(
  ({ children, onClose, className, ...rest }, ref) => {
    const innerRef = React.useRef();
    const [toggled, toggle] = React.useState(false);
    useLockedScroll(innerRef, toggled);
    React.useEffect(() => toggle(true), []);
    return (
      <div
        className={classNames("flex flex-col", className, styles.body)}
        {...rest}
        ref={useMergedRef(innerRef, ref)}
      >
        {children}
        <div className="w-full text-center">
          <MainButton
            onClick={onClose}
            outline
            className="border-bg-darker text-bg-darker w-4/5 xl:w-1/5 mx-auto"
          >
            Close
          </MainButton>
        </div>
      </div>
    );
  }
);

export const Modal = React.forwardRef(
  (
    {
      children,
      className,
      centered = true,
      scrollable = true,
      animated = false,
      size = "md",
      fullScreen = "sm",
      ...rest
    },
    ref
  ) => {
    console.log(size);
    const modalNode = React.useContext(NewModalContext);
    return modalNode
      ? ReactDOM.createPortal(
          <div className={`${styles.overlay} ${animated ? styles.fadeIn : ""}`}>
            <div
              className={classNames(
                styles.dialog,
                centered && styles.centered,
                scrollable && styles.scrollable,
                sizes[size] ?? sizes["md"],
                fullscreens[fullScreen] ?? fullscreens["sm"]
              )}
              {...rest}
              ref={ref}
            >
              <div className={styles.content}> {children} </div>
            </div>
          </div>,
          modalNode
        )
      : null;
  }
);
