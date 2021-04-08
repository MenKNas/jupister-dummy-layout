import * as React from "react";
import MainButton from "../Buttons/MainButton";
import useWindowSize from "../../hooks/useWindowSize";

export const Game = React.memo(({ gameTitle, gameImg, className }) => {
  const [opacity, setOpacity] = React.useState({ main: 1, overlay: 0 });

  const { width } = useWindowSize();
  return (
    <div
      className={`block rounded-md relative overflow-hidden ${className}`}
      data-component="Game"
      onMouseEnter={() => setOpacity({ main: 1, overlay: 1 })}
      onMouseLeave={() => setOpacity({ main: 1, overlay: 0 })}
      style={{
        backgroundImage: `url(${gameImg})`,
        backgroundPosition: "center center",
        backgroundSize: "100%",
        backgroundColor: "#464646",
        height: "100%",
        width: "100%",
        maxHeight: "100%",
        maxWidth: "100%",
        paddingTop: "67%",
        opacity: opacity.main,
        transition: "opacity 0.25s ease-in 0s",
        backgroundRepeat: "no-repeat",
      }}
    >
      {
        width > 1024 ? (
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
            <MainButton> Demo </MainButton>
          </div>
        ) : (
          <span></span>
        )
        // (
        //   <div className="absolute bottom-0 left-0 grid grid-cols-2">
        //     <div className="w-1/4">
        //       <MainButton secondary>Try</MainButton>
        //     </div>
        //     <div className="w-1/4">
        //       <MainButton secondary>Play</MainButton>
        //     </div>
        //   </div>
        // )
      }
    </div>
  );
});
