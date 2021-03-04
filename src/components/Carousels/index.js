import * as React from "react";

function Carousel() {
  return (
    <div className="border border-blue-900 w-4/5 mx-auto flex justify-center p-4 h-40 items-center">
      This is going to be the actual carousel
    </div>
  );
}

export default function Carousels() {
  return (
    <div className="flex flex-col justify-center items-center mx-auto">
      <Carousel />
      <div className="hidden md:flex justify-center bg-gray-800 text-white w-full space-x-20 mx-auto p-4">
        <div> Fast Sign Up </div>
        <div> Instant Deposit </div>
        <div> Fastest Payouts </div>
      </div>
    </div>
  );
}
