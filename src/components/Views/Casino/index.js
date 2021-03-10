import * as React from "react";
import CasinoGames from "./CasinoGames";
import CasinoHeader from "./CasinoHeader";

export default function Casino() {
  return (
    <div className="space-y-8 w-full flex flex-col items-stretch bg-main-bg">
      <CasinoHeader />
      <div className="lg:mx-auto">
        <CasinoGames />
      </div>
    </div>
  );
}
