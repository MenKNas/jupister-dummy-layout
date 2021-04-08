import * as React from "react";
import { useTranslation } from "react-i18next";
import { Field } from "./Field";

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const DateContext = React.createContext({
  day: "",
  month: "",
  year: "",
  onChange: () => {},
});

const currentYear = new Date().getFullYear();
let years = [];
for (let i = 1; i <= 90; i++) {
  years.push(currentYear - 17 - i);
}

const isValidNumber = (number) => /^\d+$/.test(number);

function isValidDate(s) {
  var separators = ["\\.", "\\-", "\\/"];
  var bits = s.split(new RegExp(separators.join("|"), "g"));
  var d = new Date(bits[0], bits[1] - 1, bits[2]);
  return (
    d.getFullYear() === parseInt(bits[0]) &&
    d.getMonth() + 1 === parseInt(bits[1]) &&
    d.getDate() === parseInt(bits[2])
  );
}

export function DateSelector({ defaultValue = "", onChange, children }) {
  const [{ day, month, year }, setDate] = React.useState(() => {
    const value = defaultValue.split("-");
    return {
      day: isValidNumber(value[2]) ? value[2] : "",
      month: isValidNumber(value[1]) ? value[1] : "",
      year: isValidNumber(value[0]) ? value[0] : "",
    };
  });

  React.useEffect(() => {
    if (onChange === undefined) return;
    const foundNonValidNumber =
      [day, month, year].find((v) => !isValidNumber(v)) !== undefined;
    if (foundNonValidNumber) onChange("");
    const value = `${year}-${parseInt(month)
      .toString()
      .padStart(2, "0")}-${parseInt(day).toString().padStart(2, "0")}`;
    onChange(isValidDate(value) ? value : "");
  }, [day, month, year, onChange]);

  return (
    <DateContext.Provider value={{ day, month, year, onChange: setDate }}>
      {children}
    </DateContext.Provider>
  );
}

export function DaySelector(props) {
  const { day, onChange } = React.useContext(DateContext);
  const { t } = useTranslation();
  return (
    <Field.Select
      {...props}
      value={day}
      onChange={(e) => {
        const day = e.target.value;
        onChange((prev) => ({ ...prev, day }));
      }}
    >
      <option value="" disabled>
        {t("Day")}
      </option>
      {[...Array(31).keys()].map((value) => (
        <option value={value + 1} key={value}>
          {value + 1}
        </option>
      ))}
    </Field.Select>
  );
}

export function MonthSelector(props) {
  const { month, onChange } = React.useContext(DateContext);
  const { t } = useTranslation();
  return (
    <Field.Select
      {...props}
      value={month}
      onChange={(e) => {
        const month = e.target.value;
        onChange((prev) => ({ ...prev, month }));
      }}
    >
      <option value="" disabled>
        {t("Month")}
      </option>
      {MONTHS.map((month, index) => {
        return (
          <option key={month} value={index + 1}>
            {t(`month.${month.toLowerCase()}`)}
          </option>
        );
      })}
    </Field.Select>
  );
}

export function YearSelector({ maxYear = new Date().getFullYear(), ...rest }) {
  const { year, onChange } = React.useContext(DateContext);
  const { t } = useTranslation();
  return (
    <Field.Select
      {...rest}
      value={year}
      onChange={(e) => {
        const year = e.target.value;
        onChange((prev) => ({ ...prev, year }));
      }}
    >
      <option value="" disabled>
        {t("Year")}
      </option>
      {[...Array(100).keys()].map((value) => {
        const year = maxYear - value;
        return (
          <option value={year.toString()} key={year}>
            {year}
          </option>
        );
      })}
    </Field.Select>
  );
}
