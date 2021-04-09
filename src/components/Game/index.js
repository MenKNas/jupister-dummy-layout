import * as React from "react";
import MainButton from "../Buttons/MainButton";
import useWindowSize from "../../hooks/useWindowSize";
import { useLoginRegister } from "../LoginRegister";
import openPopup from "../../utils/popup";
// import { useIsAuthenticated } from "../User";

const hash = (value) =>
  value
    .toLowerCase()
    .split("")
    .reduce((a, b) => {
      a = (a << 5) - a + b.charCodeAt(0);
      return a & a;
    }, 0)
    .toString();

function useLaunchActions(id, provider) {
  const showModal = useLoginRegister();
  // const isAuthenticated = useIsAuthenticated();

  //dummy value for now
  const isAuthenticated = false;

  const onClick = React.useCallback(
    (mode) => {
      const url = `/games/play/${mode}/${hash(provider)}/${encodeURIComponent(
        id
      )}`;
      return openPopup(url);
    },
    [provider, id]
  );

  const onClickReal = React.useCallback(() => {
    if (!isAuthenticated) showModal("login");
    else onClick("real");
  }, [isAuthenticated, showModal, onClick]);

  const onClickFun = React.useCallback(() => onClick("demo"), [onClick]);

  return {
    onClickReal,
    onClickFun,
  };
}

export const Game = React.memo(
  ({ gameTitle, gameImg, className, id, provider }) => {
    const { width } = useWindowSize();
    const { onClickReal, onClickFun } = useLaunchActions(id, provider);
    return (
      <div
        className={`block rounded-md relative overflow-hidden ${className}`}
        data-component="Game"
        style={{
          backgroundImage: `url(${gameImg})`,
          backgroundPosition: "center center",
          backgroundSize: "100%",
          backgroundColor: "#464646",
          height: "100%",
          width: "100%",
          maxHeight: "100%",
          maxWidth: "100%",
          paddingTop: "70%",
          opacity: 1,
          transition: "opacity 0.25s ease-in 0s",
          backgroundRepeat: "no-repeat",
        }}
      >
        {
          width > 1024 ? (
            <div className="absolute top-0 left-0 bottom-0 right-0 transform-gpu text-center transition duration-500 ease-in-out flex flex-col items-center justify-evenly opacity-0 hover:opacity-100 hover:bg-gray-500 hover:bg-opacity-50">
              <span className="text-white"> {gameTitle} </span>
              <MainButton secondary onClick={onClickReal}>
                Try it
              </MainButton>
              <MainButton onClick={onClickFun}> Demo </MainButton>
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
  }
);
