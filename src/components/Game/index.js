import * as React from "react";
import MainButton from "../Buttons/MainButton";

export const Game = React.memo(({ gameTitle, gameImg, className }) => {
  const [opacity, setOpacity] = React.useState({ main: 1, overlay: 0 });
  return (
    <div
      className={`block border-2 border-gray-300 rounded-md p-8 pt-24 relative overflow-hidden ${className} h-52`}
      data-component="Game"
      onMouseEnter={() => setOpacity({ main: 1, overlay: 1 })}
      onMouseLeave={() => setOpacity({ main: 1, overlay: 0 })}
      style={{
        backgroundImage: `url(${gameImg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundColor: "#464646",
        maxHeight: "100%",
        opacity: opacity.main,
        transition: "opacity 0.25s ease-in 0s",
      }}
    >
      <div
        className="absolute top-0 left-0 bottom-0 right-0 transform-gpu text-center transition duration-500 ease-in-out flex flex-col items-center justify-evenly"
        style={
          opacity.overlay === 1
            ? { background: "rgba(0, 0, 0, 0.5)", opacity: 1 }
            : { background: "none", opacity: 0 }
        }
      >
        <span className="text-white"> {gameTitle} </span>
        <MainButton secondary> Try it</MainButton>
        <span> DEMO </span>
      </div>
    </div>
  );
});
