import * as React from "react";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import { Game } from "../../Game";
import ChoosePlanet from "./ChoosePlanet";
import styles from "./Homepage.module.css";

function GamesGrid() {
  return (
    <div
      className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4"
      data-component="GamesGrid"
    >
      <Game gameTitle="Dragons" className="lg:row-span-2" />
      <Game gameTitle="Ninjas" />
      <Game gameTitle="Fairies" />
      <Game gameTitle="Jokers" />
      <Game gameTitle="Dwarfs" />
      <Game gameTitle="Elves" />
      <Game gameTitle="Elves" />
      <Game gameTitle="Elves" />
      <Game gameTitle="Elves" />
      <Game gameTitle="Elves" />
      <Game gameTitle="Elves" />
    </div>
  );
}

export default function PopularGames() {
  return (
    <div className={classNames(styles.mainSection, styles.clippedBottom)}>
      <div
        className="space-y-4 p-4 lg:pb-8"
        style={{
          maxWidth: 1400,
          margin: "0 auto",
        }}
      >
        <div className="lg:w-full mx-auto">
          <div className="flex justify-between items-center py-4">
            <div>Category Title </div>
            <button className="truncate uppercase inline-block">
              <span>
                Show All <FontAwesomeIcon icon={faAngleRight} />
              </span>
            </button>
          </div>
          <GamesGrid />
          <ChoosePlanet />
        </div>
      </div>
    </div>
  );
}