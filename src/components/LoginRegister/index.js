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
    name: "Login",
    title: t("global.login"),
    clockOnClickAway: true,
  },
  register: {
    component: Register,
    size: "lg",
    name: "Register",
    title: t("global.register"),
    clockOnClickAway: false,
  },
  resetPassword: {
    component: ResetPasswordLink,
    size: "md",
    name: "ResetPasswordLink",
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
  const { component: Body, size, clockOnClickAway, name } =
    MODALS(t)[step] ?? {};
  const ref = React.useRef();
  useClickAway(ref, () => clockOnClickAway && close());

  return (
    <LoginRegistrationContext.Provider value={setStep}>
      {children}
      {step !== undefined && (
        <Modal size={size} animated ref={ref}>
          {name !== "Register" && (
            <ModalHeader
              onClose={close}
              className="bg-bg-primary p-2 border-b-bg-primary"
            ></ModalHeader>
          )}
          <ModalBody
            onClose={close}
            className="space-y-4 lg:py-4 bg-bg-primary"
            hideCloseBtn
          >
            <Body onClose={close} step={step} setStep={setStep} />
          </ModalBody>
        </Modal>
      )}
    </LoginRegistrationContext.Provider>
  );
}

export function useLoginRegister() {
  return React.useContext(LoginRegistrationContext);
}
