import * as React from "react";
import MainButton from "../../Buttons/MainButton";

export default function PromotionCard({
  title,
  mainText,
  className,
  hasDeposit,
  preview,
}) {
  return (
    <div
      data-component="PromotionCard"
      className={`flex flex-col border border-gray-300 bg-white p-8 space-y-4 rounded-md ${
        className ? className : ""
      }`}
    >
      <h3 className="text-lg uppercase font-bold whitespace-nowrap truncate">
        {title}
      </h3>
      <p> {mainText} </p>
      <div className="flex space-x-4">
        {hasDeposit && <MainButton secondary> Deposit </MainButton>}
        {!preview && <MainButton> Read more </MainButton>}
      </div>
    </div>
  );
}
