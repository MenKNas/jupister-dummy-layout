import * as React from "react";
import MainButton from "../Buttons/MainButton";

export const Game = React.memo(({ gameTitle, className }) => {
  return (
    <div
      className={`border-2 border-gray-300 rounded-md p-4 pt-24 relative overflow-hidden ${className}`}
    >
      <div className="opacity-0 absolute top-0 left-0 bottom-0 right-0 transform-gpu text-center transition duration-500 ease-in-out hover:opacity-100 flex flex-col items-center justify-evenly">
        <span> {gameTitle} </span>
        <MainButton secondary> Try it</MainButton>
        <span> DEMO </span>
      </div>
    </div>
  );
});
