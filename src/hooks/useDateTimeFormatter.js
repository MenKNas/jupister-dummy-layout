import memoizeFormatConstructor from "intl-format-cache";
import { useTranslation } from "react-i18next";

const getDateTimeFormat = memoizeFormatConstructor(Intl.DateTimeFormat);

export const useDateTimeFormatter = (options) => {
  const { i18n } = useTranslation();
  return getDateTimeFormat(i18n.language, options);
};
