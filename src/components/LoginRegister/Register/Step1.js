import * as React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useTranslation, Trans } from "react-i18next";
import { Field } from "../../Inputs/Field";
// import { LazyLoadImage } from "../../LazyLoadImage";
// import sideImg from "image-trace-loader!skin/static/register.png";
// import { useSettings } from "../../Settings";
import MainButton from "../../Buttons/MainButton";

const schema = (t, securityCodeRequired) =>
  yup.object().shape({
    email: yup
      .string()
      .email()
      .max(64)
      .label(t("global.your_email_address"))
      .required(),
    password: yup
      .string()
      .label(t("global.password"))
      .min(6)
      .max(32)
      .matches(/[a-z]/, t("validations.password_at_least_one_lowercase_char"))
      .matches(/[A-Z]/, t("validations.password_at_least_one_uppercase_char"))
      .matches(
        /[^a-zA-Z\s]+/,
        t("validations.password_at_least_one_number_or_special_character")
      )
      .required(),
    passwordConfirm: yup
      .string()
      .label(t("global.passwordconfirm"))
      .min(6)
      .max(32)
      .oneOf([yup.ref("password")], t("validations.passwords_do_not_match"))
      .required(),
    securityCode: yup
      .string()
      .label(t("global.securitycode"))
      .max(12)
      .when("isRequired", (_, schema) =>
        securityCodeRequired ? schema.min(4).max(12).required() : schema
      ),
    currency: yup.string().label(t("global.currency")).required(),
    bonusCode: yup.string().label(t("global.registration_bonus_code")),
  });

function FormField({ label, input }) {
  return (
    <div className="flex flex-col w-full">
      <div className="text-text-secondary font-light tracking-wide text-sm py-1 truncate">
        {label}
      </div>
      <div className="w-full">{input}</div>
    </div>
  );
}

export default function Step1({ children, setStep, defaultValues, onSubmit }) {
  const { t } = useTranslation();
  //   const {
  //     SECURITY_CODE: securityCodeIsRequired,
  //     SUPPORTED_CURRENCIES: supportedCurrencies,
  //   } = useSettings();

  //dummy value once again
  const securityCodeIsRequired = false;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues,
    resolver: yupResolver(schema(t, securityCodeIsRequired)),
  });

  return (
    <div className="flex space-x-6">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full lg:w-1/2 space-y-4 py-1 px-4"
      >
        {children}
        <Field invalid={errors.email?.message}>
          <FormField
            label={<Field.Label> Email</Field.Label>}
            input={
              <>
                <Field.Input
                  type="text"
                  name="email"
                  autoComplete="email"
                  {...register("email")}
                />
                <Field.Error>{errors.email?.message} </Field.Error>
              </>
            }
          ></FormField>
        </Field>
        <Field invalid={errors.password?.message}>
          <FormField
            label={<Field.Label> Password</Field.Label>}
            input={
              <>
                <Field.Input
                  type="text"
                  name="password"
                  autoComplete="password"
                  {...register("password")}
                />
                <Field.Error>{errors.password?.message} </Field.Error>
              </>
            }
          ></FormField>
        </Field>
        <Field invalid={errors.passwordConfirm?.message}>
          <FormField
            label={<Field.Label> Confirm Password </Field.Label>}
            input={
              <>
                <Field.Input
                  type="text"
                  name="passwordConfirm"
                  autoComplete="new-password"
                  {...register("passwordConfirm")}
                />
                <Field.Error>{errors.passwordConfirm?.message} </Field.Error>
              </>
            }
          ></FormField>
        </Field>
        {securityCodeIsRequired && (
          <div>
            <Field invalid={errors.securityCode?.message}>
              <Field.Input
                type="text"
                name="securityCode"
                placeholder={t("global.securitycode")}
                {...register("securityCode")}
              />
              <Field.Error>{errors.securityCode?.message}</Field.Error>
            </Field>
          </div>
        )}
        <div className="flex space-x-4">
          <Field invalid={errors.currency?.message}>
            <FormField
              label={<Field.Label> Currency</Field.Label>}
              input={
                <>
                  <Field.Select name="currency" {...register("currency")}>
                    <option value="" disabled>
                      {t("global.currency")}
                    </option>
                    {/* {supportedCurrencies.map((value) => (
                <option value={value} key={value}>
                  {value}
                </option>
              ))} */}
                  </Field.Select>
                  <Field.Error>{errors.currency?.message} </Field.Error>
                </>
              }
            ></FormField>
          </Field>
          <Field invalid={errors.bonusCode?.message}>
            <FormField
              label={<Field.Label> Bonus Code (Optional) </Field.Label>}
              input={
                <>
                  <Field.Input
                    type="text"
                    name="bonusCode"
                    autoComplete="new-password"
                    {...register("bonusCode")}
                  />
                  <Field.Error>{errors.bonusCode?.message} </Field.Error>
                </>
              }
            ></FormField>
          </Field>
        </div>

        <div className="flex flex-col space-y-4 items-center">
          <div className="w-1/2">
            <MainButton
              formBtn
              type="submit"
              className="w-full"
              loading={isSubmitting}
            >
              Continue
            </MainButton>
          </div>
          <Trans i18nKey="global.already_have_an_account_login_here">
            <div className="flex items-center space-x-2">
              <div className="text-white">Already have an account?</div>
              <button
                type="button"
                onClick={() => setStep("login")}
                className="text-brand-primary"
              >
                Login here
              </button>
            </div>
          </Trans>
        </div>
      </form>
      {/* <div className="hidden w-1/2 lg:block">
        <LazyLoadImage
          src={sideImg.src}
          placeHolder={sideImg.trace}
          alt="login"
        />
      </div> */}
    </div>
  );
}
