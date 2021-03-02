import * as React from "react";
import PromotionCard from "./PromotionCard";

export default function Promotions({ preview = false }) {
  return (
    <div className="bg-blue-900 p-8">
      {preview ? (
        <div className="flex flex-col items-center space-y-6 py-3 lg:w-4/5 lg:mx-auto lg:flex-row lg:justify-evenly lg:space-y-0">
          {/* Promotions will probably be two images in flex-col for mobile and flex-row for desktop */}
          <div> Promotion 1 </div>
          <div> Promotion 2 </div>
        </div>
      ) : (
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:flex-rows-2 items-center gap-8 lg:w-4/5 lg:mx-auto h-full">
          <PromotionCard
            className="md:row-span-2 h-full justify-end"
            mainText="Get 750% Welcome Casino Package Bonus"
            title="Welcome Casino Package"
            hasDeposit
          />
          <PromotionCard
            title="Weekend Madness 75% Bonus"
            mainText="Get 750% Welcome Casino Package Bonus"
          />
          <PromotionCard
            title="Welcome Sports Bonus"
            mainText="Get 750% Welcome Casino Package Bonus"
          />
          <PromotionCard
            title="Cashback Bonus"
            mainText="Get 750% Welcome Casino Package Bonus"
          />
          <PromotionCard
            title="Magic Monday 50% Bonus"
            mainText="Get 750% Welcome Casino Package Bonus"
          />
        </div>
      )}
    </div>
  );
}
