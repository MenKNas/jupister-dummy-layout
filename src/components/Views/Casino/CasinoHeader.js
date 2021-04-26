import * as React from "react";
import { NavLink } from "react-router-dom";
import SearchBar from "../../SearchBar";

const gameLinks = [
  { to: "/", name: "All Games", icon: "" },
  { to: "/popular", name: "Popular", icon: "" },
  { to: "/bonus", name: "All Bonus", icon: "" },
  { to: "/new", name: "New Games", icon: "" },
  { to: "/table", name: "Table Games", icon: "" },
  { to: "/virtual", name: "Virtual Games", icon: "" },
];

export default function CasinoHeader() {
  return (
    <div className="px-4 bg-bg-primary py-6 lg:px-0 border-b border-bd-primary">
      <div className="lg:mx-auto lg:px-32 xl:px-4 lg:max-w-1200 xl:max-w-1400 mx-auto">
        <div>
          <SearchBar />
          <div className="flex md:justify-center space-x-4 pt-6 overflow-x-scroll lg:overflow-x-hidden items-center flex-nowrap whitespace-nowrap">
            {gameLinks.map((link) => (
              <NavLink
                key={link}
                to={link.to}
                className="text-white font-light  text-sm"
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
