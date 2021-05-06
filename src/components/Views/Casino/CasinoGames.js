import * as React from "react";
import MainButton from "../../Buttons/MainButton";
import { Game } from "../../Game";

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
  { src: Casino2, title: "Game 9" },
  { src: Casino2, title: "Game 10" },
  { src: Casino2, title: "Game 11" },
];

export default function CasinoGames() {
  return (
    <div
      className="lg:px-32 xl:px-4 lg:max-w-1200 xl:max-w-1400 mx-auto"
      data-component="CasinoGames"
    >
      <div className="px-4 lg:px-0 py-2 space-y-4">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {dummyGames.map((game) => {
            return (
              <div key={game.title}>
                <Game gameTitle={game.title} gameImg={game.src} />{" "}
              </div>
            );
          })}
        </div>
        <div className="flex justify-center py-2">
          <MainButton outline> Load More </MainButton>
        </div>
      </div>
    </div>
  );
}
