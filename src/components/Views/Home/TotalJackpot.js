import * as React from "react";

export default function TotalJackpot() {
  return (
    <div>
      <div className="hidden lg:flex flex-col lg:w-4/5 mx-auto py-4 text-center bg-gray-800 text-white justify-center items-center border border-pink-500 space-y-4 uppercase rounded-sm">
        <h4 className="text-sm rounded-xl border border-blue-900 tracking-widest px-4 py-1">
          Total Jackpot
        </h4>
        <span className="text-5xl font-bold">&euro; 1,400,400.52</span>
        <span className="text-sm tracking-widest"> waiting to be won</span>
      </div>
    </div>
  );
}
