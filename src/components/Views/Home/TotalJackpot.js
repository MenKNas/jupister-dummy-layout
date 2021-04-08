import * as React from "react";
import MainButton from "../../Buttons/MainButton";
import styles from "./Homepage.module.css";

export default function TotalJackpot() {
  return (
    <div className="px-4 md:px-6">
      <div className={styles.jackpot}>
        <h4 className="text-3xl rounded-xl tracking-widest px-4 py-1 relative lg:-top-10 -top-7 font-bold italic">
          Total Jackpot
        </h4>
        <span className="text-3xl lg:text-5xl font-bold text-brand-primary">
          &euro; 1,400,400.52
        </span>
        <span className="text-sm tracking-widest"> waiting to be won</span>
        <MainButton
          secondary
          className="relative top-8 w-3/5 md:w-2/5 lg:w-1/5"
        >
          Feeling Lucky
        </MainButton>
      </div>
    </div>
  );
}
