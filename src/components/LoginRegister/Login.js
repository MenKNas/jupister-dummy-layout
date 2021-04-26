import * as React from "react";
import { useTranslation, Trans } from "react-i18next";
// import { LazyLoadImage } from "../LazyLoadImage";
// import sideImg from "image-trace-loader!skin/static/login.png";
import { useForm } from "react-hook-form";
import { Field } from "../Inputs/Field";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
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

export function Login({ close, setStep }) {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
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
        className="w-full lg:w-1/2 space-y-4 py-1 px-4"
      >
        <div className="flex flex-col items-center space-y-1">
          <span className="text-text-secondary text-sm"> Welcome Back</span>
          <h1 className="text-white text-xl font-bold uppercase italic">
            Login to your Account
          </h1>
        </div>
        {/* <ErrorsList
          errors={error?.graphQLErrors?.map(({ message }) => message) ?? []}
        /> */}
        <Field invalid={errors?.email?.message}>
          <FormField
            label={<Field.Label> Email </Field.Label>}
            input={
              <>
                <Field.Input
                  type="text"
                  name="email"
                  disabled={isSubmitting}
                  autoComplete="email"
                  {...register("email")}
                />
                <Field.Error> {errors?.email?.message}</Field.Error>
              </>
            }
          ></FormField>
        </Field>
        <Field invalid={errors?.password?.message}>
          <FormField
            label={<Field.Label> Password </Field.Label>}
            input={
              <>
                <Field.Input
                  type="text"
                  name="password"
                  disabled={isSubmitting}
                  autoComplete="password"
                  {...register("password")}
                />
                <Field.Error> {errors?.password?.message}</Field.Error>
              </>
            }
          ></FormField>
        </Field>
        <div className="flex justify-end">
          <button
            className="text-text-secondary text-sm -mt-2"
            type="button"
            onClick={() => setStep("resetPassword")}
          >
            Forgot Password?
          </button>
        </div>
        <div className="flex flex-col -my-2 items-center w-100 space-y-4">
          <div className="w-2/5 sm:w-full">
            <MainButton
              type="submit"
              disabled={isSubmitting}
              className="w-full"
              loading={isSubmitting}
              formBtn
            >
              LOG IN
            </MainButton>
          </div>
          <div>
            <Trans i18nKey="global.dont_have_an_account">
              <div className="flex items-center space-x-1">
                <div className="text-white">Dont have an account?</div>
                <div>
                  <button
                    type="button"
                    className="text-brand-primary"
                    onClick={() => setStep("register")}
                  >
                    Register Now
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
