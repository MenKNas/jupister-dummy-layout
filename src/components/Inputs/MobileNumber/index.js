import * as React from "react";
import { useTranslation } from "react-i18next";
import { PHONES } from "./phones.js";
import { Field } from "../Field";

const UNIQUE_PREFIXES = [...new Set(Object.values(PHONES))].sort((a, b) => {
  return parseInt(a.substr(1)) - parseInt(b.substr(1));
});
const MobileNumberContext = React.createContext({
  prefix: "",
  number: "",
  onChange: () => {},
});

export function MobileNumber({ defaultValue = "", onChange, children }) {
  const [{ prefix, number }, setValue] = React.useState(() => {
    let prefix = "";
    let number = "";
    const foundPrefix = UNIQUE_PREFIXES.find(
      (prefix) =>
        defaultValue.startsWith(prefix) && defaultValue.length >= prefix.length
    );

    if (foundPrefix) {
      prefix = defaultValue.substr(0, foundPrefix.length);
      number = defaultValue.substr(foundPrefix.length);
    }

    return { prefix, number };
  });

  React.useEffect(() => {
    const isValidNumber = /^\d+$/.test(number);
    if (prefix !== "" && isValidNumber) onChange(`${prefix}${number}`);
    else onChange("");
  }, [prefix, number, onChange]);

  return (
    <MobileNumberContext.Provider
      value={{ prefix, number, onChange: setValue }}
    >
      {children}
    </MobileNumberContext.Provider>
  );
}

export function MobileNumberPrefix(props) {
  const { prefix, onChange } = React.useContext(MobileNumberContext);
  const { t } = useTranslation();
  return (
    <Field.Select
      {...props}
      value={prefix}
      onChange={(e) => {
        const prefix = e.target.value;
        onChange((prev) => ({ ...prev, prefix }));
      }}
    >
      <option value="" disabled>
        {t("Prefix")}
      </option>
      {UNIQUE_PREFIXES.map((prefix) => (
        <option value={prefix} key={prefix}>
          {prefix}
        </option>
      ))}
    </Field.Select>
  );
}

export function MobileNumberValue(props) {
  const { number, onChange } = React.useContext(MobileNumberContext);
  const { t } = useTranslation();
  return (
    <Field.Input
      {...props}
      placeholder={t("Mobile number")}
      type="text"
      value={number}
      onChange={(e) => {
        const number = e.target.value;
        onChange((prev) => ({
          ...prev,
          number,
        }));
      }}
    />
  );
}
