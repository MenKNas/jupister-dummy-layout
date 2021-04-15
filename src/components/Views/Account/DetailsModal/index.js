import * as React from "react";
import { Modal, ModalBody, ModalHeader } from "../../../NewModal";
import { useTranslation } from "react-i18next";
import { Had } from "./HaD";
import { Altenar } from "./Altenar";
import { useClickAway } from "react-use";

const Categories = new Map([
  ["HAD", Had],
  ["ALTENAR", Altenar],
]);

const getComponent = ({ category, provider }) => {
  const keys = [`${category}.${provider}`, provider, category];
  const key = keys.find((key) => Categories.has(key));
  return key ? Categories.get(key) : null;
};

function Component({ value }) {
  const Component = getComponent(value);
  if (!Component) return null;
  const { details: subDetails } = value;
  return (
    <Component {...value} {...(subDetails ? JSON.parse(subDetails) : {})} />
  );
}

export function Details({ value, children, ...rest }) {
  const [visible, setVisible] = React.useState(false);
  const { t } = useTranslation();
  const toggle = React.useCallback(() => setVisible(true), []);
  const ref = React.useRef();
  useClickAway(ref, () => setVisible(false));
  return (
    <>
      {visible && (
        <Modal size="lg" ref={ref}>
          <ModalHeader
            title={t("global.transaction_details")}
            onClose={() => setVisible(false)}
          />
          <ModalBody>
            <Component value={value} />
          </ModalBody>
        </Modal>
      )}
      {typeof children === "function" ? (
        children(toggle)
      ) : (
        <button onClick={toggle} {...rest}>
          {children}
        </button>
      )}
    </>
  );
}
