import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import MainButton from "../../../Buttons/MainButton";

export default function Deposit() {
  const [selectedPayment, setSelectedPayment] = React.useState();
  return (
    <div className="flex flex-col py-4 space-y-4 text-black">
      {!selectedPayment ? (
        <PaymentsGrid setSelectedPayment={setSelectedPayment} />
      ) : (
        <DepositForm setSelectedPayment={setSelectedPayment} />
      )}
    </div>
  );
}

function PaymentMethod({ method, setSelectedPayment }) {
  return (
    <button
      className="border border-gray-400 bg-gray-100 w-full h-20 rounded-md flex items-center justify-center"
      onClick={() => setSelectedPayment(method)}
    >
      <span> payment-{method} </span>
    </button>
  );
}

function PaymentsGrid({ setSelectedPayment }) {
  return (
    <>
      <h2 className="text-gray-200 text-lg"> Select a payment method</h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {[...Array(25).keys()].map((index) => {
          return (
            <PaymentMethod
              key={index}
              method={index + 1}
              setSelectedPayment={setSelectedPayment}
            />
          );
        })}
      </div>
    </>
  );
}

function DepositForm({ setSelectedPayment }) {
  return (
    <div className="space-y-4">
      <button
        onClick={() => setSelectedPayment(undefined)}
        className="space-x-2 text-gray-400"
      >
        <FontAwesomeIcon icon={faAngleLeft} />
        <span>Back To Payment Methods</span>
      </button>
      <div className="flex space-x-4 items-center">
        <img src="" alt="payment method" />
        <div className="text-gray-200 text-xl font-bold uppercase">
          Mastercard
        </div>
        <div className="text-gray-400">
          <span> Min: &euro; 5 |</span>
          <span> Max: &euro; 1000</span>
        </div>
      </div>
      <p className="text-gray-200 border-b border-bg-secondary py-4 xl:pr-0 pr-4 break-words">
        If you wish to place a withdrawl before you manage to complete the
        wagering requirement, then you can cancel your bonus but keep in mind
        that bonus amount, the generated winnings and any wagered amount will be
        deducted from your overall balance. Bonus calculates bets with real
        money amount first and then with bonus amount.
      </p>
      <form className="space-y-8">
        <div className="flex space-x-8 items-end">
          <div className="space-y-1">
            <label htmlFor="amount" className="block text-gray-400">
              Amount
            </label>
            <input
              id="amount"
              className="p-4 border border-gray-600 rounded-sm bg-bg-secondary h-12 text-gray-400"
            />
          </div>
          {/* block lg:grid grid-cols-2 gap-4 lg:space-x-0 */}
          <div className="space-x-4">
            <button className="p-2 bg-brand-secondary text-lg text-white rounded-sm w-16 h-12 font-bold">
              20 &euro;
            </button>
            <button className="p-2 bg-brand-secondary text-lg text-white rounded-sm w-16 h-12 font-bold">
              50 &euro;
            </button>
            <button className="p-2 bg-brand-secondary text-lg text-white rounded-sm w-16 h-12 font-bold">
              100 &euro;
            </button>
            <button className="p-2 bg-brand-secondary text-lg text-white rounded-sm w-16 h-12 font-bold">
              200 &euro;
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 lg:flex lg:space-x-4">
          <div className="space-y-1 lg:w-auto w-full">
            <label htmlFor="amount" className="block text-gray-400">
              Card Number
            </label>
            <input
              id="amount"
              className="p-4 border border-gray-600 rounded-sm bg-bg-secondary h-12 text-gray-400 w-3/4 lg:w-auto"
            />
          </div>
          <div className="space-y-1">
            <label htmlFor="fullName" className="block text-gray-400">
              Full name
            </label>
            <input
              id="fullName"
              className="p-4 border border-gray-600 rounded-sm bg-bg-secondary h-12 text-gray-400 w-3/4 lg:w-auto"
            />
          </div>
          <div className="space-y-1">
            <label htmlFor="cardExpiry" className="block text-gray-400">
              Card expiry
            </label>
            <input
              id="cardExpiry"
              className="p-4 border border-gray-600 rounded-sm bg-bg-secondary h-12 text-gray-400 w-3/4 lg:w-auto"
            />
          </div>
          <div className="space-y-1">
            <label htmlFor="ccv" className="block text-gray-400">
              CVC/CVV
            </label>
            <input
              id="ccv"
              className="p-4 border border-gray-600 rounded-sm bg-bg-secondary h-12 text-gray-400 w-3/4 lg:w-auto"
            />
          </div>
        </div>
        <MainButton type="submit" secondary className="text-lg font-bold">
          Deposit
        </MainButton>
      </form>
    </div>
  );
}
