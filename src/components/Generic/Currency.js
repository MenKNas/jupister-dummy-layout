import * as React from "react";
// import { useSettings } from "./Settings";
// import { useUser } from "./User";
import { useCurrencyFormatter } from "../../hooks/useCurrencyFormatter";

export const Currency = React.memo(({ value, currency }) => {
  //   const { SUPPORTED_CURRENCIES } = useSettings();
  //   const user = useUser();

  //  DUMMY USER CURRENCY and SUPPORTED CURRENCIES
  const user = { currency: "EUR" };
  const SUPPORTED_CURRENCIES = ["EUR", "USD", "GBP"];

  const finalCurrency = currency ?? user?.currency ?? SUPPORTED_CURRENCIES[0];
  const formatter = useCurrencyFormatter({ currency: finalCurrency });
  return formatter.format(value);
});
