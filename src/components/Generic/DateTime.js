import * as React from "react";
import { useDateTimeFormatter } from "../../hooks/useDateTimeFormatter";

const DATE_TIME_OPTIONS = {
  year: "numeric",
  month: "numeric",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
};

const DATE_ONLY_OPTIONS = {
  year: "numeric",
  month: "numeric",
  day: "numeric",
};

export const DateTime = React.memo(({ date, dateOnly = false }) => {
  const finalOptions = dateOnly ? DATE_ONLY_OPTIONS : DATE_TIME_OPTIONS;
  const formatter = useDateTimeFormatter(finalOptions);
  return formatter.format(date instanceof Date ? date : new Date(date));
});
