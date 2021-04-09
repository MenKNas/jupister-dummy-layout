import * as React from "react";
import { useTranslation, Trans } from "react-i18next";
// import { LazyLoadImage } from "../LazyLoadImage";
// import sideImg from "image-trace-loader!skin/static/login.png";
import { useForm } from "react-hook-form";
import { Field } from "../Inputs/Field";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/dist/ie11/yup";
// import userInfoFragment from "../../graphql/fragments/userinfo";
// import { GET_CURRENT_USER } from "../../graphql/queries/getCurrentUser";
// import { gql, useMutation } from "@apollo/client";
// import { ErrorsList } from "../ErrorsList";
import MainButton from "../Buttons/MainButton";

// const LOGIN_USER = gql`
//   mutation coreLoginUser($input: LoginInput!) {
//     user: coreLoginUser(input: $input) {
//       ...userInfo
//     }
//   }
//   ${userInfoFragment}
// `;

const schema = (t) =>
  yup.object().shape({
    email: yup
      .string()
      .email()
      .label(t("global.your_email_address"))
      .required(),
    password: yup.string().label(t("global.password")).required(),
  });

export function Login({ close, setStep }) {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    errors,
    formState: { isSubmitting },
  } = useForm({
    resolver: yupResolver(schema(t)),
  });

  //   const [login, { error }] = useMutation(LOGIN_USER, {
  //     update: (cache, { data: { user } }) => {
  //       if (!user) return;
  //       cache.writeQuery({
  //         query: GET_CURRENT_USER,
  //         data: { user },
  //       });
  //     },
  //   });

  const onSubmit = (data) => console.log(data);

  return (
    <div className="flex space-x-6">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full lg:w-1/2 space-y-4"
      >
        <div className="font-bold">{t("global.account_details")}</div>
        {/* <ErrorsList
          errors={error?.graphQLErrors?.map(({ message }) => message) ?? []}
        /> */}
        <div>
          <Field invalid={errors.email?.message}>
            <Field.Input
              type="text"
              name="email"
              disabled={isSubmitting}
              autoComplete="email"
              placeholder={t("global.your_email_address")}
              ref={register}
            />
            <Field.Error> {errors.email?.message}</Field.Error>
          </Field>
        </div>
        <div>
          <Field invalid={errors.password?.message}>
            <Field.Input
              type="password"
              name="password"
              disabled={isSubmitting}
              autoComplete="current-password"
              placeholder={t("global.password")}
              ref={register}
            />
            <Field.Error> {errors.password?.message}</Field.Error>
          </Field>
        </div>
        <div className="flex justify-end">
          <button
            className="font-bold"
            type="button"
            onClick={() => setStep("resetPassword")}
          >
            {t("global.forgot_your_password")}
          </button>
        </div>
        <div className="flex flex-col -my-2 items-center w-100 space-y-4">
          <div className="w-1/2 sm:w-full">
            <MainButton
              type="submit"
              disabled={isSubmitting}
              className="w-full"
              loading={isSubmitting}
            >
              {t("global.login")}
            </MainButton>
          </div>
          <div>
            <Trans i18nKey="global.dont_have_an_account">
              <div className="flex items-center space-s-2">
                <div>Dont have an account?</div>
                <div>
                  <button
                    type="button"
                    className="font-bold"
                    onClick={() => setStep("register")}
                  >
                    Register here
                  </button>
                </div>
              </div>
            </Trans>
          </div>
        </div>
      </form>
      <div className="hidden lg:block w-1/2">
        {/* <LazyLoadImage
          src={sideImg.src}
          placeHolder={sideImg.trace}
          alt="login"
        /> */}
      </div>
    </div>
  );
}
