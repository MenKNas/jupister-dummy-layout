import * as React from "react";
import classNames from "classnames";
import { Game } from "../../Game";
import ChoosePlanet from "./ChoosePlanet";
import styles from "./Homepage.module.css";
import underheading from "../../../icons/under-heading.svg";
import { ShowAllButton } from "../../Buttons/ShowAll";

//casino images
import Casino1 from "../../../images/casinos/casino1.jpeg";
import Casino2 from "../../../images/casinos/casino2.jpeg";
import Casino3 from "../../../images/casinos/casino3.jpg";
import Casino4 from "../../../images/casinos/casino4.jpeg";
import Casino5 from "../../../images/casinos/casino9.jpeg";
import Casino6 from "../../../images/casinos/casino6.jpeg";
import Casino7 from "../../../images/casinos/casino7.jpeg";
import casino8 from "../../../images/casinos/casino8.jpeg";

const dummyGames = [
  { src: Casino1, title: "Game 1" },
  { src: Casino3, title: "Game 2" },
  { src: casino8, title: "Game 3" },
  { src: Casino4, title: "Game 4" },
  { src: Casino5, title: "Game 5" },
  { src: Casino6, title: "Game 6" },
  { src: Casino7, title: "Game 7" },
  { src: Casino2, title: "Game 8" },
  { src: Casino2, title: "Game 8" },
  { src: Casino2, title: "Game 8" },
  { src: Casino2, title: "Game 8" },
];

function GamesGrid() {
  return (
    <div
      className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
      data-component="GamesGrid"
    >
      {dummyGames.map((game, index) => (
        <Game
          // className="xl:row-span-2"
          className={index === 0 ? `xl:row-span-2 h-full` : "null"}
          gameTitle={game.title}
          gameImg={game.src}
        />
      ))}
    </div>
  );
}

export default function PopularGames() {
  return (
    <div className={classNames(styles.mainSection, styles.clippedBottom)}>
      <div className="space-y-4 p-4 md:p-6 lg:pb-8 lg:max-w-1200 xl:max-w-1400 mx-auto">
        <div className="lg:w-full mx-auto">
          <div className="flex justify-between items-center py-4">
            <div className="uppercase font-black text-xl lg:text-2xl tracking-wide">
              Top games
              <img
                src={underheading}
                alt="red colored border under the section title"
                className="w-7/10"
              />
            </div>
            <ShowAllButton />
          </div>
          <GamesGrid />
          <ChoosePlanet />
        </div>
      </div>
    </div>
  );
}
