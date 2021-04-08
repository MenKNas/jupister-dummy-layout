import * as React from "react";
import MainButton from "../../Buttons/MainButton";

export default function PromotionCard({
  title,
  mainText,
  className,
  hasDeposit,
  preview,
  setIsModalOpen,
}) {
  return (
    <div
      data-component="PromotionCard"
      className={`flex flex-col border-gray-400 bg-bg-secondary p-8 space-y-4 rounded-md ${className}`}
    >
      <h3 className="text-lg uppercase font-bold whitespace-nowrap truncate">
        {title}
      </h3>
      <p> {mainText} </p>
      <div className="flex space-x-4">
        {hasDeposit && <MainButton secondary> Deposit </MainButton>}
        {!preview && (
          <MainButton onClick={() => setIsModalOpen(true)}>
            Read more
          </MainButton>
        )}
      </div>
    </div>
  );
}
