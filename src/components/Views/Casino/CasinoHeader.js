import * as React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../../SearchBar";

export default function CasinoHeader() {
  return (
    <div className="px-4 bg-gray-100 dark:bg-blue-400 py-6 lg:px-0 transition duration-200">
      <div
        style={{ maxWidth: 1400, margin: "0 auto" }}
        className="lg:mx-auto lg:px-32 xl:px-36"
      >
        <div>
          <SearchBar />
          <div className="flex md:justify-center space-x-4 pt-4 overflow-x-scroll lg:overflow-x-hidden items-center flex-nowrap whitespace-nowrap dark:text-gray-200">
            <Link to="/" className="uppercase hover:text-yellow-300">
              All Games
            </Link>
            <Link to="/popular" className="uppercase hover:text-yellow-300">
              Popular
            </Link>
            <Link to="/bonus" className="uppercase hover:text-yellow-300">
              Bonus Games
            </Link>
            <Link to="/new" className="uppercase hover:text-yellow-300">
              New Games
            </Link>
            <Link to="/table" className="uppercase hover:text-yellow-300">
              Table Games
            </Link>
            <Link to="/virtual" className="uppercase hover:text-yellow-300">
              Virtual Sports
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
