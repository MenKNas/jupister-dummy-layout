import memoizeFormatConstructor from "intl-format-cache";
import { useTranslation } from "react-i18next";

const getNumberFormat = memoizeFormatConstructor(Intl.NumberFormat);

export const useNumberFormatter = (options) => {
  const { i18n } = useTranslation();
  return getNumberFormat(i18n.language, options);
};
