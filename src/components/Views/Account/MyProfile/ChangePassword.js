import * as React from "react";
// import { gql, useMutation, useApolloClient } from "@apollo/client";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/dist/ie11/yup";
import * as yup from "yup";
// import { ErrorsList } from "../../ErrorsList";
import { Field } from "../../../Inputs/Field";
// import { GET_CURRENT_USER } from "../../../graphql/queries/getCurrentUser";
// import { useCountdown } from "../../../hooks/useCountDown";
// import { Alert, AlertContent, AlertTitle } from "../../Alert";
import MainButton from "../../../Buttons/MainButton";

const schema = (t) =>
  yup.object().shape({
    oldPassword: yup.string().label(t("global.oldpassword")).trim().required(),
    newPassword: yup
      .string()
      .label(t("global.newpassword"))
      .trim()
      .min(6)
      .matches(/[a-z]/, t("validations.password_at_least_one_lowercase_char"))
      .matches(/[A-Z]/, t("validations.password_at_least_one_uppercase_char"))
      .matches(
        /[^a-zA-Z\s]+/,
        t("validations.password_at_least_one_number_or_special_character")
      )
      .required(),
    newPasswordConfirm: yup
      .string()
      .label(t("global.newpasswordconfirm"))
      .oneOf([yup.ref("newPassword")], t("validations.passwords_do_not_match"))
      .required(),
  });

function FormField({ label, input }) {
  return (
    <div className="flex flex-col w-full space-y-2">
      <div className="lg:w-1/3">{label}</div>
      <div className="lg:w-2/3">{input}</div>
    </div>
  );
}

export function Form() {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    errors,
    formState: { isSubmitting },
  } = useForm({
    resolver: yupResolver(schema(t)),
  });
  const onSubmit = (data) => console.log(data);

  return (
    <form className="space-y-4 w-full" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col space-y-4 w-7/10">
        <Field invalid={errors.oldPassword?.message}>
          <FormField
            label={
              <Field.Label className="text-text-secondary">
                {t("Old Password")}
              </Field.Label>
            }
            input={
              <>
                <Field.Input
                  name="oldPassword"
                  type="password"
                  autoComplete="current-password"
                  disabled={isSubmitting}
                  ref={register}
                />
                <Field.Error>{errors.oldPassword?.message}</Field.Error>
              </>
            }
          />
        </Field>
        <Field invalid={errors.newPassword?.message}>
          <FormField
            label={
              <Field.Label className="text-text-secondary">
                {t("New Password")}
              </Field.Label>
            }
            input={
              <>
                <Field.Input
                  name="newPassword"
                  type="password"
                  autoComplete="new-password"
                  disabled={isSubmitting}
                  ref={register}
                />
                <Field.Error>{errors.newPassword?.message}</Field.Error>
              </>
            }
          />
        </Field>
        <Field invalid={errors.newPasswordConfirm?.message}>
          <FormField
            label={
              <Field.Label className="text-text-secondary">
                {t("New password Confirm")}
              </Field.Label>
            }
            input={
              <>
                <Field.Input
                  name="newPasswordConfirm"
                  type="password"
                  autoComplete="new-password"
                  disabled={isSubmitting}
                  ref={register}
                />
                <Field.Error>{errors.newPasswordConfirm?.message}</Field.Error>
              </>
            }
          />
        </Field>
      </div>
      <FormField
        input={
          <MainButton
            secondary
            type="submit"
            className="md:w-1/4 w-1/2"
            // disabled={isSubmitting}
            // loading={isSubmitting}
          >
            {t("Submit")}
          </MainButton>
        }
      />
    </form>
  );
}

export default function ChangePassword() {
  return <Form />;
}
