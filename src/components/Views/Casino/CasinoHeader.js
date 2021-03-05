import * as React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../../SearchBar";

export default function CasinoHeader() {
  return (
    <div className="px-4 bg-blue-400 py-6 lg:px-0">
      <div
        style={{ maxWidth: 1400, margin: "0 auto" }}
        className="lg:mx-auto lg:px-32 xl:px-36"
      >
        <div>
          <SearchBar />
          <div className="flex md:justify-center space-x-4 pt-4 overflow-x-scroll lg:overflow-x-hidden items-center flex-nowrap whitespace-nowrap">
            <Link to="/" className="uppercase">
              All Games
            </Link>
            <Link to="/popular" className="uppercase">
              Popular
            </Link>
            <Link to="/bonus" className="uppercase">
              Bonus Games
            </Link>
            <Link to="/new" className="uppercase">
              New Games
            </Link>
            <Link to="/table" className="uppercase">
              Table Games
            </Link>
            <Link to="/virtual" className="uppercase">
              Virtual Sports
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
