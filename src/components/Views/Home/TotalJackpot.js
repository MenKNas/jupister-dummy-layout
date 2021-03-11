import * as React from "react";

export default function TotalJackpot() {
  return (
    <div className="px-4">
      <div className="hidden lg:flex flex-col lg:w-full mx-auto py-4 text-center bg-gray-800 text-white justify-center items-center border border-brand-third space-y-4 uppercase rounded-md">
        <h4 className="text-sm rounded-xl border border-blue-900 tracking-widest px-4 py-1">
          Total Jackpot
        </h4>
        <span className="text-5xl font-bold">&euro; 1,400,400.52</span>
        <span className="text-sm tracking-widest"> waiting to be won</span>
      </div>
    </div>
  );
}
