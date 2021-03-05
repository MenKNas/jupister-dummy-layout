import {
  faAngleDown,
  faCaretDown,
  faList,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";
import { isMobile } from "react-device-detect";
import useWindowSize from "../../hooks/useWindowSize";

export default function SearchBar() {
  const { width } = useWindowSize();
  return (
    <div className="flex space-x-4">
      <input
        placeholder={"search game".toUpperCase()}
        className="p-2 w-4/5 bg-blue-800 border border-gray-500 rounded-md text-white outline-none"
      />
      {width < 780 ? (
        <button className="w-1/5 bg-blue-800 rounded-md text-md flex items-center justify-center text-white">
          <div className="flex items-center text-xl">
            <FontAwesomeIcon icon={faList} size={isMobile ? "lg" : "md"} />
          </div>
        </button>
      ) : (
        <button className="w-1/5 bg-blue-800 rounded-md text-md flex items-center justify-between text-white px-4">
          <div className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faList} size={isMobile ? "lg" : "md"} />
            <span className="hidden md:block">Providers </span>
          </div>
          <span className="hidden md:block">
            <FontAwesomeIcon icon={faAngleDown} size={isMobile ? "lg" : "md"} />
          </span>
        </button>
      )}
    </div>
  );
}
