import * as React from "react";
import classNames from "classnames";

const Ctx = React.createContext({ invalid: false, required: false });

export function Field({ children, required = false, invalid = false }) {
  return <Ctx.Provider value={{ invalid, required }}>{children}</Ctx.Provider>;
}

export function useField() {
  return React.useContext(Ctx);
}

function FieldLabel({ children, className, ...rest }) {
  const { required } = useField();
  return (
    <label className={classNames(className)} {...rest}>
      {typeof children === "string" && required ? `${children} *` : children}
    </label>
  );
}

function FieldError({ children }) {
  const { invalid } = useField();
  return invalid ? (
    <div className="block text-red-500 mt-1 text-sm">{children}</div>
  ) : null;
}

const GenericField = React.forwardRef(
  ({ as: Component, className, ...rest }, ref) => {
    const { invalid } = useField();
    return (
      <Component
        ref={ref}
        className={classNames(
          "rounded-sm border  placeholder-gray-400 text-gray-400 disabled:bg-gray-100 bg-bg-secondary p-2 focus:text-white",
          { "border-red-500 focus:border-red-600": invalid },
          { "border-bd-primary focus:border-bd-focused": !invalid },
          className
        )}
        data-component="Field"
        {...rest}
      />
    );
  }
);

const FieldInput = React.forwardRef(({ className, ...rest }, ref) => {
  const { invalid } = useField();
  return (
    <GenericField
      as="input"
      className={classNames(
        { "border-red-500 focus:border-red-600": invalid },
        "block w-full px-3 py-1.5",
        className
      )}
      ref={ref}
      {...rest}
    />
  );
});

const FieldCheckbox = React.forwardRef(({ type, className, ...rest }, ref) => {
  return (
    <GenericField
      as="input"
      type="checkbox"
      className={className}
      ref={ref}
      {...rest}
    />
  );
});

const FieldSelect = React.forwardRef(({ className, ...rest }, ref) => {
  return (
    <GenericField
      as="select"
      className={classNames("block w-full p-2", className)}
      ref={ref}
      {...rest}
    />
  );
});

const FieldTextArea = React.forwardRef(({ className, ...rest }, ref) => {
  return (
    <GenericField
      as="textarea"
      className={classNames("block w-full px-3 py-1.5", className)}
      ref={ref}
      {...rest}
    />
  );
});

Field.Error = FieldError;
Field.Label = FieldLabel;
Field.As = GenericField;
Field.Input = FieldInput;
Field.Select = FieldSelect;
Field.TextArea = FieldTextArea;
Field.Checkbox = FieldCheckbox;
