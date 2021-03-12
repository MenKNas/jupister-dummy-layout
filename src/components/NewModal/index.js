import * as React from "react";
import ReactDOM from "react-dom";
import styles from "./NewModal.module.css";
import classNames from "classnames";
import { ReactComponent as CloseIcon } from "../../icons/menu_close_box.svg";
import MainButton from "../Buttons/MainButton";

const sizes = {
  sm: styles.sizeSM,
  md: "",
  lg: styles.sizeLG,
  xl: styles.sizeXL,
};

// const fullscreens = {
//   sm: styles.fullscreenSM,
//   md: styles.fullscreenMD,
//   lg: styles.fullscreenLG,
//   xl: styles.fullscreenXL,
// };

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
    <div className="flex justify-between items-center">
      <h3 className="text-bg-secondary text-xl"> {children} </h3>
      <button onClick={onClose}>
        <CloseIcon />
      </button>
    </div>
  );
}

export function ModalBody({ children, onClose, ...rest }) {
  return (
    <div className="flex flex-col" {...rest}>
      {children}
      <div className="w-full text-center">
        <MainButton
          onClick={onClose}
          outline
          className="border-bg-darker text-bg-darker w-1/5 mx-auto"
        >
          Close
        </MainButton>
      </div>
    </div>
  );
}

export const Modal = React.forwardRef(
  (
    { children, animated = false, size = "sm", fullScreen = "sm", ...props },
    ref
  ) => {
    const modalNode = React.useContext(NewModalContext);
    return modalNode
      ? ReactDOM.createPortal(
          <div
            className={`${styles.overlay} ${animated ? styles.fadeIn : null}`}
          >
            <div
              className={classNames(styles.dialog, sizes[size] ?? sizes["md"])}
              {...props}
              ref={ref}
            >
              {children}
            </div>
          </div>,
          modalNode
        )
      : null;
  }
);
