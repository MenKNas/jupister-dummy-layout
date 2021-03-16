import * as React from "react";
import MainButton from "../../Buttons/MainButton";
import { Game } from "../../Game";

export default function CasinoGames() {
  return (
    <div
      className="lg:px-32 xl:px-4 lg:max-w-1200 xl:max-w-1400 mx-auto"
      data-component="CasinoGames"
    >
      <div className="px-4 lg:px-0 py-4 space-y-4">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {[...Array(52).keys()].map((index) => {
            return <Game gameTitle={`game ${index + 1}`} />;
          })}
        </div>
        <div className="flex justify-center">
          <MainButton secondary> Load More </MainButton>
        </div>
      </div>
    </div>
  );
}
