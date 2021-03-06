import * as React from "react";
import { Game } from "../../Game";
import Promotions from "../Promotions";
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
      className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6"
      data-component="GamesGrid"
    >
      {dummyGames.map((game, index) => (
        <Game
          // className="xl:row-span-2"
          key={index}
          className={index === 0 ? `xl:col-span-2 xl:row-span-2 h-full` : ""}
          gameTitle={game.title}
          gameImg={game.src}
        />
      ))}
    </div>
  );
}

export default function LiveCasino() {
  return (
    <div className="space-y-4 p-4 md:p-6 lg:pb-8">
      <div className="lg:w-full mx-auto">
        <Promotions preview />
        <div className="flex justify-between items-center py-4">
          <div className="uppercase font-black text-xl lg:text-2xl text-white ">
            Live Casino
            <div style={{ height: 9, width: "100%", overflow: "hidden" }}>
              <img
                src={underheading}
                alt="red colored border under the section title"
                className="w-7/10 h-4"
              />
            </div>
          </div>
          <ShowAllButton />
        </div>
        <GamesGrid />
      </div>
    </div>
  );
}
