import * as React from "react";
import MainButton from "../../Button";

export default function PromotionCard({
  title,
  mainText,
  className,
  hasDeposit,
  preview,
}) {
  return (
    <div
      className={`flex flex-col border-gray-400 bg-white p-8 space-y-4 rounded-md ${className}`}
    >
      <h3 className="text-lg uppercase font-bold"> {title} </h3>
      <p> {mainText} </p>
      <div className="flex space-x-4">
        {hasDeposit && <MainButton secondary> Deposit </MainButton>}
        {!preview && <MainButton> Read more </MainButton>}
      </div>
    </div>
  );
}
