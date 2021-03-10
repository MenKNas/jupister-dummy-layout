import * as React from "react";
import CasinoGames from "./CasinoGames";
import CasinoHeader from "./CasinoHeader";

export default function Casino() {
  return (
    <div className="tw:space-y-8 tw:w-full tw:flex tw:flex-col tw:items-stretch bg-main-bg">
      <CasinoHeader />
      <div className="lg:mx-auto">
        <CasinoGames />
      </div>
    </div>
  );
}
