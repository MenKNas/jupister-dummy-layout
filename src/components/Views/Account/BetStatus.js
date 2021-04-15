import * as React from "react";
import { useTranslation } from "react-i18next";
import classNames from "classnames";

const getStatusClass = (status) => {
  switch (status) {
    case "PENDING":
      return "bg-blue-500 text-white";
    case "WIN":
      return "bg-green-500 text-white";
    case "LOSE":
      return "bg-red-500 text-white";
    case "CANCEL":
      return "bg-orange-500 text-white";
    default:
      return "bg-blue-500 text-white";
  }
};

export function BetStatus({ status, short = false }) {
  const { t } = useTranslation();
  return (
    <span className={classNames("px-1.5 rounded", getStatusClass(status))}>
      {t(
        !short
          ? `bet_status.long_${status.toLowerCase()}`
          : `bet_status.short_${status.toLowerCase()}`
      )}
    </span>
  );
}
