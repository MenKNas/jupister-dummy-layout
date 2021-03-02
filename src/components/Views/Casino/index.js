import * as React from "react";
import CasinoGames from "./CasinoGames";
import CasinoHeader from "./CasinoHeader";

export default function Casino() {
  return (
    <div className="bg-blue-900">
      <CasinoHeader />
      <div className="w-full lg:w-4/5 lg:mx-auto">
        <CasinoGames />
      </div>
    </div>
  );
}
