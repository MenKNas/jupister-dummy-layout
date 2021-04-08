import * as React from "react";
import CasinoGames from "./CasinoGames";
import CasinoHeader from "./CasinoHeader";

export default function Casino() {
  return (
    <div className="space-y-4 w-full flex flex-col items-stretch bg-main-bg">
      <CasinoHeader />
      <div>
        <CasinoGames />
      </div>
    </div>
  );
}
