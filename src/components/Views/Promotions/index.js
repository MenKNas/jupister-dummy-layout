import * as React from "react";
import PromotionCard from "./PromotionCard";

export default function Promotions({ preview = false }) {
  return (
    <div className="bg-gray-800" style={{ maxWidth: 1400, margin: "0 auto" }}>
      {preview ? (
        <div className="flex flex-col justify-center items-center space-y-6 md:py-3 lg:space-x-6 lg:flex-row lg:justify-between lg:space-y-0">
          {/* Promotions will probably be two images in flex-col for mobile and flex-row for desktop */}
          <PromotionCard preview={preview} className="w-1/2" />
          <PromotionCard preview={preview} className="w-1/2" />
        </div>
      ) : (
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:flex-rows-2 items-center gap-8 lg:w-4/5 lg:mx-auto h-full py-10 px-4 lg:px-0">
          <PromotionCard
            className="md:row-span-2 h-full justify-end"
            mainText="Get 750% Welcome Casino Package Bonus"
            title="Welcome Casino Package"
            hasDeposit
          />
          <PromotionCard
            className="h-full"
            title="Weekend Madness 75% Bonus"
            mainText="Get 750% Welcome Casino Package Bonus"
          />
          <PromotionCard
            className="h-full"
            title="Welcome Sports Bonus"
            mainText="Get 750% Welcome Casino Package Bonus"
          />
          <PromotionCard
            className="h-full"
            title="Cashback Bonus"
            mainText="Get 750% Welcome Casino Package Bonus"
          />
          <PromotionCard
            className="h-full"
            title="Magic Monday 50% Bonus"
            mainText="Get 750% Welcome Casino Package Bonus"
          />
        </div>
      )}
    </div>
  );
}
