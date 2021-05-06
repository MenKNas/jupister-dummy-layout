import * as React from "react";
import MainButton from "../../Buttons/MainButton";
import styles from "./Homepage.module.css";
import underheading from "../../../icons/under-heading.svg";

export default function TotalJackpot() {
  return (
    <div className="px-4 md:px-6 space-y-4">
      <div className="inline-block">
        <div className="flex flex-col uppercase font-bold text-xl lg:text-2xl ">
          Total Jackpot
          <div style={{ height: 9, width: "100%", overflow: "hidden" }}>
            <img
              src={underheading}
              alt="red colored border under the section title"
              className="w-7/10 h-4"
            />
          </div>
        </div>
      </div>
      <div className={styles.jackpot}>
        <span className="text-3xl lg:text-5xl font-black text-brand-primary">
          &euro; 1,400,400.52
        </span>
        <span className="uppercase font-black text-white italic">
          waiting to be won
        </span>
        <MainButton formBtn className="w-3/5 md:w-2/5 lg:w-1/5">
          Feeling Lucky ?
        </MainButton>
      </div>
    </div>
  );
}
