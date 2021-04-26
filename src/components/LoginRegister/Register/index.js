import * as React from "react";
// import { useSettings } from "../../Settings";
import { Alert, AlertTitle, AlertContent } from "../../Generic/Alert";
import { useTranslation, Trans } from "react-i18next";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
// import { ErrorsList } from "../../Generic/ErrorsList";
import { PHONES } from "../../Inputs/MobileNumber/phones";
import { useHistory } from "react-router-dom";
import { useCountdown } from "../../../hooks/useCountDown";

const TOTAL_STEPS = 3;

const getCookieValue = (a) => {
  const b = document.cookie.match("(^|;)\\s*" + a + "\\s*=\\s*([^;]+)");
  return b ? b.pop() : "";
};

// const CREATE_USER = gql`
//   mutation coreCreateUser($input: UserInput!) {
//     user: coreCreateUser(input: $input) {
//       ...userInfo
//     }
//   }
//   ${userInfoFragment}
// `;

const COUNTDOWN = 5;

function SuccessState({ close }) {
  const endTime = React.useRef(new Date(Date.now() + COUNTDOWN * 1000));
  useCountdown(endTime.current, {
    onEnd: close,
  });

  return (
    <Alert status="success">
      <Trans i18nKey="global.account_verification_pending">
        <AlertTitle>
          A verification link has been sent to your email account
        </AlertTitle>
        <AlertContent>
          Please follow the instructions that have been sent to your email
          account to complete the registration process
        </AlertContent>
      </Trans>
    </Alert>
  );
}

export function Register({ close, setStep }) {
  const { t } = useTranslation();
  // const history = useHistory();
  // const { COUNTRY } = useSettings();

  //dummy value for now
  const COUNTRY = "Greece";
  const [formStep, setFormStep] = React.useState(1);
  const [created, setCreated] = React.useState(false);
  const [state, setState] = React.useState(() => ({
    mobileNumber: (COUNTRY && PHONES[COUNTRY.toLowerCase()]) ?? "",
    country: COUNTRY ?? "",
    gender: "",
    currency: "",
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    email: "",
    password: "",
    passwordConfirm: "",
    newsletter: true,
    accept: false,
    autoBonus: true,
    affiliateCode: getCookieValue("affiliate_code"),
    houseNumberAndStreetName: "",
    city: "",
    postCode: "",
    securityCode: "",
    bonusCode: "",
    //we will have to talk about that and how it will be implemented -> also got to discuss how we will pass this piece of data to the server
    bonusPlanet: null,
  }));

  // const [createUser, { error }] = useMutation(CREATE_USER);

  return created ? (
    <SuccessState close={close} />
  ) : formStep === 0 ? (
    <Step1
      setStep={setStep}
      defaultValues={state}
      onSubmit={(data) => {
        setState((prev) => ({ ...prev, ...data }));
        setFormStep(1);
      }}
    >
      <div className="flex flex-col space-y-6 items-center">
        <img
          src="/assets/brand-logo-main.svg"
          alt="Logo"
          width={130}
          height={80}
          loading="lazy"
        />
        <div className="text-center space-y-1">
          <h1 className="text-white text-xl font-bold uppercase italic">
            Register New Account
          </h1>
          <div className="whitespace-nowrap text-text-secondary text-sm space-x-2">
            <span> Account Details |</span>
            <span>
              Step {formStep + 1}/{TOTAL_STEPS}
            </span>
          </div>
        </div>
      </div>
    </Step1>
  ) : formStep === 1 ? (
    <Step2
      defaultValues={state}
      onSubmit={(data) => {
        setState((prev) => ({ ...prev, ...data }));
        setFormStep(2);
      }}
      onBack={() => setFormStep(0)}
    >
      <div className="flex flex-col space-y-6 items-center">
        <div className="text-center space-y-1">
          <h1 className="text-white text-xl font-bold uppercase italic">
            Register New Account
          </h1>
          <div className="whitespace-nowrap text-text-secondary text-sm space-x-2">
            <span> Personal Details |</span>
            <span>
              Step {formStep + 1}/{TOTAL_STEPS}
            </span>
          </div>
        </div>
      </div>
      {/* <ErrorsList
        errors={error?.graphQLErrors?.map(({ message }) => message) ?? []}
      /> */}
    </Step2>
  ) : (
    <Step3
    // onSubmit={(data) => {
    //   const completedData = { ...state, ...data };
    //   setState(completedData);
    //   const { passwordConfirm, accept, ...rest } = completedData;
    //   return createUser({
    //     variables: {
    //       input: { ...rest, activationPath: "/activate" },
    //     },
    //     update: (cache, { data: { user } }) => {
    //       if (user === null) return;
    //       cache.writeQuery({
    //         query: GET_CURRENT_USER,
    //         data: { user },
    //       });
    //     },
    //   }).then(({ data: { user } }) => {
    //     if (user === null) {
    //       setCreated(true);
    //     } else {
    //       close();
    //       history.push("/account/financials/deposit");
    //     }
    //     return user;
    //   });
    // }}
    >
      <div className="flex justify-between space-x-4">
        <div className="font-bold text-truncate">
          {t("global.personal_details")}
        </div>
        <div className="whitespace-nowrap">
          {t("global.step", { step: formStep + 1, max: TOTAL_STEPS })}
        </div>
      </div>
    </Step3>
  );
}
