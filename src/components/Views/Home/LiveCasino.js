import React from "react";
import { Game } from "../../Game";

function GamesGrid() {
  return (
    <div
      className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-4"
      data-component="GamesGrid"
    >
      <Game gameTitle="Dragons" />
      <Game gameTitle="Ninjas" />
      <Game gameTitle="Fairies" />
      <Game gameTitle="Jokers" />
      <Game gameTitle="Dwarfs" />
      <Game gameTitle="Elves" />
    </div>
  );
}

export default function LiveCasino() {
  return (
    <div className="space-y-4 lg:pb-8">
      <div className="lg:w-4/5 mx-auto">
        <div className="flex justify-between items-center py-4">
          <div>Category Title </div>
          <button className="truncate uppercase inline-block">Show All</button>
        </div>
        <GamesGrid />
      </div>
    </div>
  );
}
