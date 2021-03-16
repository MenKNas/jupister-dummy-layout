import * as React from "react";
import Carousel from "../../Carousels";
// import Promotions from "../Promotions";
import PopularGames from "./PopularGames";
import NewGames from "./NewGames";
import LiveCasino from "./LiveCasino";
import TotalJackpot from "./TotalJackpot";
import styles from "./Homepage.module.css";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-stretch">
      <Carousel />
      <PopularGames />
      <NewGames />
      <div className={`${styles.mainSection} ${styles.clippedTop}`}>
        <div className="space-y-4 py-8 max-w-1400 mx-auto my-0">
          <LiveCasino />
          <TotalJackpot />
        </div>
        {/* <Promotions preview={true} /> */}
      </div>
    </div>
  );
}
