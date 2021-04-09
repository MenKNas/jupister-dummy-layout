import * as React from "react";
import { Modal, ModalBody, ModalHeader } from "../NewModal";
import { useTranslation } from "react-i18next";
import { Login } from "./Login";
import { Register } from "./Register";
import { ResetPasswordLink } from "./ResetPasswordLink";
import { useClickAway } from "react-use";

const MODALS = (t) => ({
  login: {
    component: Login,
    size: "lg",
    title: t("global.login"),
    clockOnClickAway: true,
  },
  register: {
    component: Register,
    size: "lg",
    title: t("global.register"),
    clockOnClickAway: false,
  },
  resetPassword: {
    component: ResetPasswordLink,
    size: "md",
    title: t("global.forgot_your_password"),
    clockOnClickAway: true,
  },
});

const LoginRegistrationContext = React.createContext(() => {
  throw new Error("Context is not binded");
});

export function LoginRegisterProvider({ children }) {
  const [step, setStep] = React.useState();
  const close = React.useCallback(() => setStep(undefined), []);
  const { t } = useTranslation();
  const { component: Body, size, title, clockOnClickAway } =
    MODALS(t)[step] ?? {};
  const ref = React.useRef();
  useClickAway(ref, () => clockOnClickAway && close());

  return (
    <LoginRegistrationContext.Provider value={setStep}>
      {children}
      {step !== undefined && (
        <Modal size={size} animated ref={ref}>
          <ModalHeader onClose={close}>{title}</ModalHeader>
          <ModalBody onClose={close} className="space-y-4 py-4">
            <Body onClose={close} setStep={setStep} />
          </ModalBody>
        </Modal>
      )}
    </LoginRegistrationContext.Provider>
  );
}

export function useLoginRegister() {
  return React.useContext(LoginRegistrationContext);
}
