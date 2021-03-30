import * as React from "react";
import { Game } from "../../Game";
import Promotions from "../Promotions";
import underheading from "../../../icons/under-heading.svg";
import { ShowAllButton } from "../../Buttons/ShowAll";

function GamesGrid() {
  return (
    <div
      className="grid grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-4"
      data-component="GamesGrid"
    >
      <Game gameTitle="Dragons" className="lg:row-span-2" />
      <Game gameTitle="Ninjas" />
      <Game gameTitle="Fairies" />
      <Game gameTitle="Jokers" />
      <Game gameTitle="Dwarfs" />
      <Game gameTitle="Elves" />
      <Game gameTitle="Elves" />
    </div>
  );
}

export default function LiveCasino() {
  return (
    <div className="space-y-4 p-4 md:p-6 lg:pb-8">
      <div className="lg:w-full mx-auto">
        <Promotions preview={true} />
        <div className="flex justify-between items-center py-4">
          <div className="uppercase font-black text-xl lg:text-2xl text-white">
            Live Casino
            <img
              src={underheading}
              alt="red colored border under the section title"
              className="w-7/10"
            />
          </div>
          <ShowAllButton />
        </div>
        <GamesGrid />
      </div>
    </div>
  );
}
