import * as React from "react";
import Carousel from "../../Carousels";
// import Promotions from "../Promotions";
import HomeGames from "./HomeGames";
import LiveCasino from "./LiveCasino";
import TotalJackpot from "./TotalJackpot";
import styles from "./Homepage.module.css";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-stretch">
      <Carousel />
      <HomeGames />
      <div className={styles["main-section"]}>
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
