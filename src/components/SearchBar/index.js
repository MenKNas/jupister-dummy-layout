import { faList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";
import { isMobile } from "react-device-detect";

export default function SearchBar() {
  return (
    <div className="flex space-x-4">
      <input
        placeholder={"search game".toUpperCase()}
        className="p-2 w-4/5 bg-blue-800 border border-gray-500 rounded-md text-white outline-none"
      />
      <button className="w-1/5 bg-blue-800 rounded-md space-x-2 text-md flex items-center justify-center">
        <FontAwesomeIcon icon={faList} size={isMobile ? "lg" : "md"} />
        <span className="hidden md:block">Providers </span>
      </button>
    </div>
  );
}
