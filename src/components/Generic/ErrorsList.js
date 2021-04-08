import * as React from "react";
import { useTranslation } from "react-i18next";
import { Alert, AlertTitle, AlertContent } from "./Alert";

export function ErrorsList({ errors = [] }) {
  const { t } = useTranslation();
  return (
    errors.length > 0 && (
      <Alert status="danger">
        <AlertTitle>{t("global.error")}</AlertTitle>
        <AlertContent>
          {errors.length > 1 ? (
            <ul className="list-disc ps-5 space-y-1">
              {errors.map((e) => (
                <li>{e}</li>
              ))}
            </ul>
          ) : (
            errors
          )}
        </AlertContent>
      </Alert>
    )
  );
}
