import * as React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../../SearchBar";

export default function CasinoHeader() {
  return (
    <div className="bg-blue-500">
      <div className="p-4 w-full lg:w-4/5 lg:mx-auto">
        <SearchBar />
        <div className="flex lg:justify-center space-x-4 pt-4 overflow-x-scroll lg:overflow-x-hidden items-center flex-nowrap whitespace-nowrap">
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
  );
}
