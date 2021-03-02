import * as React from "react";
import { NavLink } from "react-router-dom";
import Button from "../../Button";

function Header() {
  return (
    <div className="flex justify-between items-center w-full lg:w-4/5 lg:mx-auto p-2">
      <div className="flex justify-between space-x-4 items-center">
        <button> Icon </button>
        <div> Logo </div>
        <div className="flex items-center px-4">
          <span className="border-r-2 border-gray-200 px-4">
            <NavLink
              to="/"
              className="uppercase border-b-4 border-transparent"
              activeClassName="border-yellow-300 rounded-sm"
              exact={true}
            >
              Home
            </NavLink>
          </span>
          <span className="border-r-2 border-gray-200 px-4">
            <NavLink
              to="/casino"
              className="uppercase border-b-4 border-transparent "
              activeClassName="border-yellow-300 rounded-sm"
              exact={true}
            >
              Casino
            </NavLink>
          </span>
          <span className="border-r-2 border-gray-200 px-4">
            <NavLink
              to="/livecasino"
              className="uppercase border-b-4 border-transparent "
              activeClassName="border-yellow-300 rounded-sm"
              exact={true}
            >
              Live Casino
            </NavLink>
          </span>
          <span className="border-r-2 border-gray-200 px-4">
            <NavLink
              to="/sports"
              className="uppercase border-b-4 border-transparent "
              activeClassName="border-yellow-300 rounded-sm"
              exact={true}
            >
              Sports
            </NavLink>
          </span>
          <span className="border-r-2 border-gray-200 px-4">
            <NavLink
              to="/livecasino"
              className="uppercase border-b-4 border-transparent "
              activeClassName="border-yellow-300 rounded-sm"
              exact={true}
            >
              More
            </NavLink>
          </span>
          <span className="px-4">
            <NavLink
              to="/promotions"
              className="uppercase border-b-4 border-transparent "
              activeClassName="border-yellow-300 rounded-sm"
              exact={true}
            >
              Promotions
            </NavLink>
          </span>
        </div>
      </div>
      <div>
        <Button> Register </Button>
      </div>
    </div>
  );
}

export default Header;
