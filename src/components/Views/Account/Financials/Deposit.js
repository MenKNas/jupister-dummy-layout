import * as React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/dist/ie11/yup";
import { useTranslation } from "react-i18next";
import * as yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import MainButton from "../../../Buttons/MainButton";
import { Field } from "../../../Inputs/Field";
//payment images
import MasterCardLogo from "../../../../images/payments/mastercard.png";
import NetellerLogo from "../../../../images/payments/neteller.png";
import VisaLogo from "../../../../images/payments/visa.png";
import PaysafeLogo from "../../../../images/payments/paysafe.png";
import NeosurfLogo from "../../../../images/payments/neosurf.png";
import IdealLogo from "../../../../images/payments/ideal.png";
import SofortLogo from "../../../../images/payments/sofort.png";
import GiropayLogo from "../../../../images/payments/giropay.png";

const allPayments = [
  { src: MasterCardLogo, min: 10, max: 1000, method: "Mastercard" },
  { src: VisaLogo, min: 10, max: 1000, method: "Visa" },
  { src: GiropayLogo, min: 10, max: 1000, method: "Giropay" },
  { src: PaysafeLogo, min: 10, max: 1000, method: "Paysafe" },
  { src: NeosurfLogo, min: 10, max: 1000, method: "Neosurf" },
  { src: IdealLogo, min: 10, max: 1000, method: "Ideal" },
  { src: SofortLogo, min: 10, max: 1000, method: "Sofort" },
  { src: NetellerLogo, min: 10, max: 1000, method: "Neteller" },
];

const paymentAmounts = [20, 50, 100, 200];

const schema = (t) =>
  yup.object().shape({
    amount: yup.number().label("Amount").required(),
    cardNumber: yup.string().label("Card number").required(),
    fullName: yup.string().label("Full Name").min(5).required(),
    cardExpiry: yup.date().label("Card Expiry").required(),
    ccv: yup.number().label("CVC/CVV").max(3).min(3).required(),
  });

function FormField({ label, input }) {
  return (
    <div className="flex flex-col w-full">
      <div className="text-text-secondary font-light tracking-wide text-sm py-1">
        {label}
      </div>
      <div className="w-full">{input}</div>
    </div>
  );
}

export default function Deposit() {
  const [selectedPayment, setSelectedPayment] = React.useState();
  return (
    <div className="flex flex-col py-4 space-y-4 text-black">
      {!selectedPayment ? (
        <PaymentsGrid setSelectedPayment={setSelectedPayment} />
      ) : (
        <DepositPage
          selectedPayment={selectedPayment}
          setSelectedPayment={setSelectedPayment}
        />
      )}
    </div>
  );
}

function PaymentMethod({ method, payment, setSelectedPayment }) {
  return (
    <button
      className="border border-bd-primary bg-bg-secondary w-full rounded-md flex flex-col items-center justify-center py-2 space-y-4 hover:border-bd-focused"
      onClick={() => setSelectedPayment(payment)}
    >
      <img src={payment.src} alt={method} className="w-3/5 lg:w-4/5" />
      <span className="text-text-secondary text-sm">
        Min: {payment.min}&euro; | Max: {payment.max}&euro;
      </span>
    </button>
  );
}

function PaymentsGrid({ setSelectedPayment }) {
  return (
    <>
      <h2 className="text-text-secondary tracking-wide">
        Select a payment method
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {allPayments.map((payment) => {
          return (
            <PaymentMethod
              key={payment.method}
              method={payment.method}
              payment={payment}
              setSelectedPayment={setSelectedPayment}
            />
          );
        })}
      </div>
    </>
  );
}

function InfoPanel({ selectedPayment, setSelectedPayment }) {
  return (
    <div>
      <button
        onClick={() => setSelectedPayment(undefined)}
        className="space-x-2 text-gray-400"
      >
        <FontAwesomeIcon icon={faAngleLeft} />
        <span>Back To Payment Methods</span>
      </button>
      <div className="flex space-x-4 items-center">
        <img src={selectedPayment.src} alt="payment method" className="w-40" />
        <div className="text-gray-200 text-xl font-bold uppercase">
          {selectedPayment && <span> {selectedPayment.method} </span>}
        </div>
        <div className="text-gray-400">
          <span> Min: {selectedPayment.min}&euro; | </span>
          <span> Max: {selectedPayment.max}&euro; </span>
        </div>
      </div>
      <div className="border-b border-bg-secondary w-full">
        <p className="text-gray-200  py-4 xl:pr-0 pr-4 break-words text-sm w-7/10">
          If you wish to place a withdrawl before you manage to complete the
          wagering requirement, then you can cancel your bonus but keep in mind
          that bonus amount, the generated winnings and any wagered amount will
          be deducted from your overall balance. Bonus calculates bets with real
          money amount first and then with bonus amount.
        </p>
      </div>
    </div>
  );
}

function DepositPage({ selectedPayment, setSelectedPayment }) {
  return (
    <div className="space-y-4">
      <InfoPanel
        selectedPayment={selectedPayment}
        setSelectedPayment={setSelectedPayment}
      />
      <Form />
    </div>
  );
}

function Form() {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    errors,
    // formState: { isSubmitting },
  } = useForm({
    defaultValues: {
      //   country: user.country,
      //   city: user.city,
      //   houseNumberAndStreetName: user.houseNumberAndStreetName,
      //   postCode: user.postCode,
      //   mobileNumber: user.mobileNumber,
    },
    resolver: yupResolver(schema(t)),
  });
  //   const fieldDisabled = profileChangeDisabled || isSubmitting;
  const onSubmit = (data) => console.log(data);
  console.log(errors);
  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex space-x-8 w-full">
        <div className="space-y-1 w-1/3">
          <Field invalid={errors?.amount?.message}>
            <FormField
              label={<Field.Label htmlFor="amount">{t("Amount")}</Field.Label>}
              input={
                <>
                  <Field.Input
                    type="text"
                    name="amount"
                    ref={register}
                    //   disabled={fieldDisabled}
                  />
                </>
              }
            />
            <Field.Error>{errors?.amount?.message}</Field.Error>
          </Field>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {paymentAmounts.map((amount) => (
            <button
              className="bg-brand-secondary text-sm text-white rounded-sm font-bold h-14 w-14"
              key={amount}
            >
              {amount} &euro;
            </button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 lg:grid-cols-4 lg:space-x-4">
        <div className="space-y-1 lg:w-auto w-full">
          <Field invalid={errors?.cardNumber?.message}>
            <FormField
              label={
                <Field.Label htmlFor="cardNumber">
                  {t("Card number")}
                </Field.Label>
              }
              input={
                <>
                  <Field.Input
                    type="text"
                    name="cardNumber"
                    ref={register}
                    //   disabled={fieldDisabled}
                  />
                  <Field.Error>{errors?.cardNumber?.message}</Field.Error>
                </>
              }
            />
          </Field>
        </div>
        <div className="space-y-1">
          <Field invalid={errors?.fullName?.message}>
            <FormField
              label={
                <Field.Label htmlFor="fullName">{t("Full name")}</Field.Label>
              }
              input={
                <>
                  <Field.Input
                    type="text"
                    name="fullName"
                    ref={register}
                    //   disabled={fieldDisabled}
                  />
                  <Field.Error>{errors?.fullName?.message}</Field.Error>
                </>
              }
            />
          </Field>
        </div>
        <div className="space-y-1">
          <Field invalid={errors?.cardExpiry?.message}>
            <FormField
              label={
                <Field.Label htmlFor="cardExpiry">
                  {t("Card expiry")}
                </Field.Label>
              }
              input={
                <>
                  <Field.Input
                    type="text"
                    name="cardExpiry"
                    ref={register}
                    //   disabled={fieldDisabled}
                  />
                  <Field.Error>{errors?.cardExpiry?.message}</Field.Error>
                </>
              }
            />
          </Field>
        </div>
        <div className="space-y-1">
          <Field invalid={errors?.ccv?.message}>
            <FormField
              label={<Field.Label htmlFor="ccv">{t("CCV/CVV")}</Field.Label>}
              input={
                <>
                  <Field.Input
                    type="text"
                    name="ccv"
                    ref={register}
                    //   disabled={fieldDisabled}
                  />
                  <Field.Error>{errors?.ccv?.message}</Field.Error>
                </>
              }
            />
          </Field>
        </div>
      </div>
      <MainButton type="submit" secondary className="text-lg font-bold">
        Deposit
      </MainButton>
    </form>
  );
}
