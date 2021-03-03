import * as React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { isMobile } from "react-device-detect";
import SideBar from "./SideBar";
import MainButton from "../../Button";

function MobileHeader() {
  const [showSidebar, setShowSidebar] = React.useState(false);
  return (
    <>
      <div className="flex justify-between items-center w-full p-2 bg-gray-800 px-4">
        <div className="space-x-4">
          <button
            className="text-blue-500 text-2xl"
            onClick={() => setShowSidebar((prev) => !prev)}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
          <span className="text-yellow-400 text-2xl tracking-wide">
            Jupiter
          </span>
        </div>
        <div>
          <MainButton secondary> Register </MainButton>
        </div>
      </div>
      {showSidebar && (
        <SideBar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      )}
    </>
  );
}

function DesktopHeader() {
  return (
    <div className="flex justify-between items-center py-4 px-40 bg-gray-800">
      <div className="flex justify-between space-x-4 items-center">
        <div>
          <span className="text-yellow-400 text-2xl tracking-wide">
            Jupiter
          </span>
        </div>
        <div className="hidden lg:flex items-center uppercase px-4 text-white font-bold">
          <span className="px-4">
            <NavLink to="/" activeClassName="text-yellow-300" exact={true}>
              Home
            </NavLink>
          </span>
          <span className="px-4">
            <NavLink
              to="/casino"
              activeClassName="text-yellow-300"
              exact={true}
            >
              Casino
            </NavLink>
          </span>
          <span className="px-4">
            <NavLink
              to="/livecasino"
              activeClassName="text-yellow-300"
              exact={true}
            >
              Live Casino
            </NavLink>
          </span>
          <span className="px-4">
            <NavLink
              to="/sports"
              activeClassName="text-yellow-300"
              exact={true}
            >
              Sports
            </NavLink>
          </span>
          <span className="px-4">
            <NavLink
              to="/livecasino"
              activeClassName="text-yellow-300"
              exact={true}
            >
              More
              <span className="ml-2">
                <FontAwesomeIcon icon={faAngleDown} />
              </span>
            </NavLink>
          </span>
          <span className="px-4">
            <NavLink
              to="/promotions"
              activeClassName="text-yellow-300"
              exact={true}
            >
              Promotions
            </NavLink>
          </span>
        </div>
      </div>
      <div className="space-x-4">
        <MainButton outline> Login </MainButton>
        <MainButton secondary> Register </MainButton>
      </div>
    </div>
  );
}

function Header() {
  return isMobile ? <MobileHeader /> : <DesktopHeader />;
}

export default Header;
