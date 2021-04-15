import * as React from "react";
import {
  isSameDay,
  addDays,
  addMonths,
  endOfDay,
  endOfMonth,
  startOfDay,
  startOfMonth,
  startOfWeek,
  isValid,
  parseISO,
  formatISO9075,
} from "date-fns";
import { useTranslation } from "react-i18next";
import { Field } from "../Inputs/Field";

function getDefaultRanges(t) {
  return [
    {
      label: t("range.today"),
      range: {
        from: startOfDay(new Date()),
        to: endOfDay(new Date()),
      },
    },
    {
      label: t("range.yesterday"),
      range: {
        from: startOfDay(addDays(new Date(), -1)),
        to: endOfDay(addDays(new Date(), -1)),
      },
    },
    {
      label: t("range.this_week"),
      range: {
        from: startOfWeek(new Date()),
        to: endOfDay(new Date()),
      },
    },
    {
      label: t("range.this_month"),
      range: {
        from: startOfMonth(new Date()),
        to: endOfDay(new Date()),
      },
    },
    {
      label: t("range.last_month"),
      range: {
        from: startOfMonth(addMonths(new Date(), -1)),
        to: endOfMonth(addMonths(new Date(), -1)),
      },
    },
  ];
}

const Ctx = React.createContext();

export function DateRangePicker({
  defaultValue = { from: "", to: "" },
  onChange,
  children,
}) {
  const { t } = useTranslation();
  const ranges = React.useMemo(() => getDefaultRanges(t), [t]);
  const [value, setValue] = React.useState(() => {
    const defaultFrom = isValid(parseISO(defaultValue.from))
      ? defaultValue.from
      : "";
    const defaultTo = isValid(parseISO(defaultValue.to)) ? defaultValue.to : "";
    const index =
      defaultFrom !== "" && defaultTo !== ""
        ? ranges.findIndex(
            ({ range: { from, to } }) =>
              isSameDay(from, parseISO(defaultFrom)) &&
              isSameDay(to, parseISO(defaultTo))
          )
        : -1;

    const from =
      index >= 0 ? ranges[index].range.from.toISOString() : defaultFrom;
    const to = index >= 0 ? ranges[index].range.to.toISOString() : defaultTo;

    return {
      from: from,
      to: to,
      range: index,
    };
  });

  React.useEffect(() => {
    const { from, to } = value;
    if (isValid(parseISO(from)) && isValid(parseISO(to)))
      onChange({
        from,
        to,
      });
    else
      onChange({
        from: "",
        to: "",
      });
  }, [value, onChange]);

  return (
    <Ctx.Provider value={{ value, setValue, ranges }}> {children}</Ctx.Provider>
  );
}

export function useDateRangePicker() {
  return React.useContext(Ctx);
}

function RangeSelect({ label, labelClasses, ...rest }) {
  const {
    value: { range },
    setValue,
    ranges,
  } = useDateRangePicker();
  const { t } = useTranslation();
  return (
    <div className="flex flex-col">
      <Field>
        {label && <Field.Label className={labelClasses}> {label} </Field.Label>}
        <Field.Select
          {...rest}
          value={range}
          onChange={(e) => {
            const selected = e.target.value;
            let from = "";
            let to = "";
            if (selected >= 0) {
              const range = ranges[selected];
              from = range.range.from.toISOString();
              to = range.range.to.toISOString();
            }
            // if(selected !== -1) {
            //if selection is not "custom" we should hide the other fields
            // }
            setValue({ from, to, range: selected });
          }}
        >
          {ranges.map((range, index) => (
            <option value={index} key={index}>
              {range.label}
            </option>
          ))}
          <option value={-1}>{t("global.custom")}</option>
        </Field.Select>
      </Field>
    </div>
  );
}

function FromInput({ disabled, label, labelClasses, ...rest }) {
  const {
    value: { from, range },
    setValue,
  } = useDateRangePicker();
  return (
    <div className="flex flex-col">
      <Field>
        {label && <Field.Label className={labelClasses}> {label} </Field.Label>}
        <Field.Input
          {...rest}
          type="date"
          disabled={disabled || range >= 0}
          value={
            from === ""
              ? ""
              : formatISO9075(parseISO(from), {
                  representation: "date",
                })
          }
          onChange={(e) => {
            let value = "";
            try {
              value = startOfDay(parseISO(e.target.value)).toISOString();
            } catch (ex) {}
            setValue((prev) => ({ ...prev, from: value }));
          }}
        />
      </Field>
    </div>
  );
}

function ToInput({ disabled, label, labelClasses, ...rest }) {
  const {
    value: { to, range },
    setValue,
  } = useDateRangePicker();
  return (
    <div className="flex flex-col">
      <Field>
        {label && <Field.Label className={labelClasses}> {label} </Field.Label>}
        <Field.Input
          {...rest}
          type="date"
          disabled={disabled || range >= 0}
          value={
            to === ""
              ? ""
              : formatISO9075(parseISO(to), {
                  representation: "date",
                })
          }
          onChange={(e) => {
            let value = "";
            try {
              value = endOfDay(parseISO(e.target.value)).toISOString();
            } catch (ex) {}
            setValue((prev) => ({ ...prev, to: value }));
          }}
        />
      </Field>
    </div>
  );
}

DateRangePicker.RangeSelect = RangeSelect;
DateRangePicker.FromInput = FromInput;
DateRangePicker.ToInput = ToInput;
