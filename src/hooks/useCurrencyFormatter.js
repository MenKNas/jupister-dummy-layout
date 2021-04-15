import { useNumberFormatter } from "./useNumberFormatter";

export const useCurrencyFormatter = (options = {}) => {
  return useNumberFormatter({
    ...options,
    style: "currency",
  });
};
