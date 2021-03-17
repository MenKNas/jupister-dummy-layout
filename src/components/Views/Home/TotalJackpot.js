import * as React from "react";
import styles from "./Homepage.module.css";

export default function TotalJackpot() {
  return (
    <div className="px-4 md:px-6">
      <div className={styles.jackpot}>
        <h4 className="text-sm rounded-xl border border-blue-900 tracking-widest px-4 py-1">
          Total Jackpot
        </h4>
        <span className="text-xl lg:text-5xl font-bold">
          &euro; 1,400,400.52
        </span>
        <span className="text-sm tracking-widest"> waiting to be won</span>
      </div>
    </div>
  );
}
