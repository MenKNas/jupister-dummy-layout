import * as React from "react";
import CasinoGames from "./CasinoGames";
import CasinoHeader from "./CasinoHeader";

export default function Casino() {
  return (
    <div className="tw:space-y-8 tw:w-full tw:flex tw:flex-col tw:items-stretch bg-gray-200 dark:bg-gray-800 transition duration-200">
      <CasinoHeader />
      <div className="lg:mx-auto">
        <CasinoGames />
      </div>
    </div>
  );
}
