import * as React from "react";
// import { useTranslation } from "react-i18next";
import classNames from "classnames";
import { useClickAway } from "react-use";
import { ReactComponent as ChevronDown } from "../../../icons/chevron-down.svg";
import { motion } from "framer-motion";
import { subMenuVariants } from "../../Generic/animationVariants";
import "flag-icon-css/css/flag-icon.css";

//this will be now used for dummy purposes -> to fully implement check the original LanguageSelector component
const SUPPORTED_LOCALES = [
  { locale: "en", flag: "gb", altenar: "en-GB", rtl: false },
  { locale: "fi", flag: "fi", altenar: "fi-FI", rtl: false },
  { locale: "no", flag: "no", altenar: "no-NO", rtl: false },
  { locale: "de", flag: "de", altenar: "de-DE", rtl: false },
  { locale: "fr", flag: "fr", altenar: "fr-FR", rtl: false },
  { locale: "es", flag: "es", altenar: "es-ES", rtl: false },
  { locale: "pt", flag: "pt", altenar: "pt-PT", rtl: false },
  { locale: "tr", flag: "tr", altenar: "tr-TR", rtl: false },
  { locale: "ru", flag: "ru", altenar: "ru-RU", rtl: false },
  { locale: "sl", flag: "si", altenar: "en-GB", rtl: false },
  { locale: "uk", flag: "ua", altenar: "en-GB", rtl: false },
];

function addUrlToParam(url, param, value) {
  let hash = {};
  let parser = document.createElement("a");

  parser.href = url;

  const parameters = parser.search.split(/[?&]/);

  for (var i = 0; i < parameters.length; i++) {
    if (!parameters[i]) continue;

    const ary = parameters[i].split("=");
    hash[ary[0]] = ary[1];
  }

  hash[param] = value;

  const list = [];
  Object.keys(hash).forEach(function (key) {
    list.push(key + "=" + hash[key]);
  });

  parser.search = "?" + list.join("&");
  return parser.href;
}

//this is for where the dropdown appears and for RTL support (not to implement yet)
// const origins = {
//   "top-start": "origin-top-start start-0",
//   "top-end": "origin-top-end end-0",
// };

function Flag({ locale, className }) {
  return (
    <span
      className={classNames(className, "flag-icon rounded-md", `flag-icon-gb`)}
    />
  );
}

export const LanguageSelector = React.memo(() => {
  const [visible, setVisible] = React.useState(false);
  // const { ENABLED_LOCALES } = useSettings();
  // const { t } = useTranslation();
  const ref = React.useRef();
  useClickAway(ref, () => setVisible(false));
  // const activeLanguage = i18n.languages[0];

  //dummy value
  const activeLanguage = "English";
  return (
    <div
      className="relative bg-bg-secondary border border-bd-primary text-text-secondary font-light py-3 px-4 rounded-md w-2/3"
      data-component="LanguageSelector"
      ref={ref}
    >
      <motion.button
        onClick={() => setVisible((prev) => !prev)}
        className="w-full"
      >
        <div className="flex items-center justify-between">
          <Flag locale={activeLanguage} />
          <div className="-ml-8">{activeLanguage}</div>
          <div>
            <ChevronDown stroke="#A9B7D5" />
          </div>
        </div>
      </motion.button>
      <motion.div
        data-component="DropDown"
        className={classNames(
          `absolute left-0 top-14 z-10 w-full bg-bg-secondary rounded-md border border-bd-primary`
        )}
        variants={subMenuVariants}
        initial="exit"
        animate={visible ? "enter" : "exit"}
        // exit="exit"
      >
        <div className="py-1">
          {SUPPORTED_LOCALES.map((locale) => (
            <button
              type="button"
              key={locale.locale}
              className={classNames("px-4 py-1.5 block w-full text-start", {
                active: locale.locale === activeLanguage,
              })}
              onClick={() =>
                (window.location.href = addUrlToParam(
                  window.location.href,
                  "lng",
                  locale.locale
                ))
              }
            >
              <div className="flex items-center space-x-4">
                <Flag />
                <div className="whitespace-nowrap">{locale.locale}</div>
              </div>
            </button>
          ))}
        </div>
      </motion.div>
    </div>
  );
});
