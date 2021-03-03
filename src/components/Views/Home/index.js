import * as React from "react";
import Carousel from "../../Carousels";
import Promotions from "../Promotions";
import HomeGames from "./HomeGames";
import LiveCasino from "./LiveCasino";
import TotalJackpot from "./TotalJackpot";

export default function Home() {
  return (
    <div className="tw:space-y-8 tw:w-full tw:flex tw:flex-col tw:items-stretch">
      <Carousel />
      <HomeGames />
      <div className="bg-gray-800 space-y-4 py-8">
        {/* <Promotions preview={true} /> */}
        <LiveCasino />
        <TotalJackpot />
      </div>
    </div>
  );
}
