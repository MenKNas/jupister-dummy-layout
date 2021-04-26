import * as React from "react";
// import MainButton from "../Buttons/MainButton";
import useWindowSize from "../../hooks/useWindowSize";
import { useLoginRegister } from "../LoginRegister";
import openPopup from "../../utils/popup";
import { ReactComponent as PlayBtn } from "../../icons/play-button.svg";
import { useClickAway } from "react-use";
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
    const [showGameInfo, setShowGameInfo] = React.useState(false);
    const { onClickReal, onClickFun } = useLaunchActions(id, provider);
    const ref = React.useRef(null);
    useClickAway(ref, () => {
      console.log(setShowGameInfo(false));
    });

    return (
      <div
        className={`block rounded-md relative overflow-hidden ${className}`}
        data-component="Game"
        ref={ref}
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
        {width > 1024 ? (
          <div className="absolute top-0 left-0 bottom-0 right-0 transform-gpu text-center transition duration-500 ease-in-out flex flex-col items-center justify-evenly opacity-0 hover:opacity-100 hover:bg-bg-primary hover:bg-opacity-75">
            <span className="text-text-secondary"> {gameTitle} </span>
            <button onClick={onClickReal}>
              <PlayBtn />
            </button>
            <button onClick={onClickFun} className="text-white">
              Try for Free
            </button>
          </div>
        ) : (
          <div
            className={`absolute top-0 left-0 bottom-0 right-0 transform-gpu text-center transition duration-500 ease-in-out flex flex-col items-center justify-evenly opacity-0 ${
              showGameInfo && "opacity-100 bg-bg-primary bg-opacity-75"
            }`}
            onClick={() => setShowGameInfo(true)}
            onBlur={() => setShowGameInfo(false)}
          >
            {showGameInfo && (
              <>
                <span className="text-text-secondary"> {gameTitle} </span>
                <button onClick={onClickReal}>
                  <PlayBtn />
                </button>
                <button onClick={onClickFun} className="text-white">
                  Try for Free
                </button>
              </>
            )}
          </div>
        )}
      </div>
    );
  }
);
