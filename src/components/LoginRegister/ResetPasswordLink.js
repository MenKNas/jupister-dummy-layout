import * as React from "react";
import { useTranslation } from "react-i18next";
import { useForm, Controller } from "react-hook-form";
import { Field } from "../Inputs/Field";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/dist/ie11/yup";
import {
  DaySelector,
  MonthSelector,
  YearSelector,
  DateSelector,
} from "../Inputs/DateSelector";
// import { useSettings } from "../Settings";
// import { useMutation, gql } from "@apollo/client";
// import { ErrorsList } from "../ErrorsList";
// import { Alert, AlertContent } from "../Generic/Alert";
import MainButton from "../Buttons/MainButton";

// const GET_RESET_PASSWORD_LINK = gql`
//   mutation resetPasswordLink($input: ResetPasswordLinkInput!) {
//     response: resetPasswordLink(input: $input)
//   }
// `;

const schema = (t, dateOfBirthRequired, securityCodeRequired) =>
  yup.object().shape({
    email: yup
      .string()
      .email()
      .label(t("global.your_email_address"))
      .required(),
    dateOfBirth: yup
      .string()
      .label(t("global.dateofbirth"))
      .when("isRequired", (_, schema) =>
        dateOfBirthRequired ? schema.required() : schema
      ),
    securityCode: yup
      .string()
      .label(t("global.securitycode"))
      .trim()
      .when("isRequired", (_, schema) =>
        securityCodeRequired ? schema.required() : schema
      ),
  });

//dummy consts

const dateOfBirthIsRequired = false;
const securityCodeIsRequired = false;

export function ResetPasswordLink({ setStep }) {
  const { t } = useTranslation();
  //   let {
  //     DATE_OF_BIRTH_ON_RESET_PASSWORD: dateOfBirthIsRequired,
  //     SECURITY_CODE: securityCodeIsRequired,
  //   } = useSettings();

  //   const [getResetPasswordLink, { data, error }] = useMutation(
  //     GET_RESET_PASSWORD_LINK
  //   );

  const {
    register,
    handleSubmit,
    errors,
    control,
    formState: { isSubmitting },
  } = useForm({
    resolver: yupResolver(
      schema(t, dateOfBirthIsRequired, securityCodeIsRequired)
    ),
  });

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {(dateOfBirthIsRequired || securityCodeIsRequired) && (
        <div className="font-bold">{t("global.account_details")}</div>
      )}
      {/* <ErrorsList
        errors={error?.graphQLErrors?.map(({ message }) => message) ?? []}
      /> */}
      <div>
        <Field invalid={errors.email?.message}>
          <Field.Input
            type="text"
            name="email"
            disabled={isSubmitting}
            placeholder={t("global.your_email_address")}
            ref={register}
          />
          <Field.Error>{errors.email?.message}</Field.Error>
        </Field>
      </div>
      {dateOfBirthIsRequired && (
        <div>
          <Field invalid={errors.dateOfBirth?.message}>
            <Controller
              control={control}
              name="dateOfBirth"
              render={(props) => (
                <div className="flex space-s-2">
                  <DateSelector
                    defaultValue={props.value}
                    onChange={props.onChange}
                    error={errors.dateOfBirth?.message}
                  >
                    <div className="w-1/3">
                      <DaySelector disabled={isSubmitting} />
                    </div>
                    <div className="w-1/3">
                      <MonthSelector disabled={isSubmitting} />
                    </div>
                    <div className="w-1/3">
                      <YearSelector
                        disabled={isSubmitting}
                        maxYear={new Date().getFullYear() - 18}
                      />
                    </div>
                  </DateSelector>
                </div>
              )}
            />
            <Field.Error>{errors.dateOfBirth?.message}</Field.Error>
          </Field>
        </div>
      )}
      {securityCodeIsRequired && (
        <div>
          <Field invalid={errors.securityCode?.message}>
            <Field.Input
              type="text"
              name="securityCode"
              disabled={isSubmitting}
              placeholder={t("global.securitycode")}
              ref={register}
            />
            <Field.Error>{errors.securityCode?.message}</Field.Error>
          </Field>
        </div>
      )}
      <div className="flex flex-col items-center space-y-4">
        <div className="w-1/2">
          <MainButton
            disabled={isSubmitting}
            loading={isSubmitting}
            type="submit"
            className="w-full"
          >
            {t("global.submit")}
          </MainButton>
        </div>
        <div>
          <button type="button" onClick={() => setStep("login")}>
            {t("global.back")}
          </button>
        </div>
      </div>
    </form>
  );
}
