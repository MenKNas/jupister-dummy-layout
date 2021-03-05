import * as React from "react";
import Carousel from "../../Carousels";
// import Promotions from "../Promotions";
import HomeGames from "./HomeGames";
import LiveCasino from "./LiveCasino";
import TotalJackpot from "./TotalJackpot";

export default function Home() {
  return (
    <div className="tw:space-y-8 tw:w-full tw:flex tw:flex-col tw:items-stretch">
      <Carousel />
      <HomeGames />
      <div className="bg-gray-800 ">
        <div
          className="space-y-4 py-8"
          style={{ maxWidth: 1400, margin: "0 auto" }}
        >
          <LiveCasino />
          <TotalJackpot />
        </div>
        {/* <Promotions preview={true} /> */}
      </div>
    </div>
  );
}
