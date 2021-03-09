import * as React from "react";

function Carousel() {
  return (
    <div
      data-component="Carousel"
      className="border border-blue-900 flex justify-center p-4 h-40 items-center bg-white w-full"
    >
      This is going to be the actual carousel
    </div>
  );
}

export default function Carousels() {
  return (
    <div
      className="bg-white dark:bg-gray-800 transition duration-200"
      data-component="CarouselSection"
    >
      <div
        className="flex flex-col justify-center items-center mx-auto xl:px-36"
        style={{ maxWidth: 1400, margin: "0 auto" }}
      >
        <Carousel />
        <div className="hidden md:flex justify-center text-gray-800 dark:text-white w-full space-x-20 mx-auto p-4 transition duration-200">
          <div> Fast Sign Up </div>
          <div> Instant Deposit </div>
          <div> Fastest Payouts </div>
        </div>
      </div>
    </div>
  );
}
