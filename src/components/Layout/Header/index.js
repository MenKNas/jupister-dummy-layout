import * as React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faAngleDown, faUser } from "@fortawesome/free-solid-svg-icons";
import { isMobile } from "react-device-detect";
import { SideBar } from "./SideBar";
import MainButton from "../../Buttons/MainButton";

const authenticatedUser = true;

function MobileHeader() {
  const [showSidebar, setShowSidebar] = React.useState(false);
  return (
    <>
      <div className="flex justify-between items-center p-2 bg-gray-800 px-4">
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
        <div
          className="fixed top-0 start-0 end-0 bottom-0 z-10 bg-opacity-50 bg-gray-900 w-screen"
          onClick={() => setShowSidebar(!showSidebar)}
        />
      )}
      <SideBar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
    </>
  );
}

function VisitorHeaderButtons() {
  return (
    <>
      <MainButton outline> Login </MainButton>
      <MainButton secondary> Register </MainButton>
    </>
  );
}

function RegisteredHeaderButtons() {
  return (
    <div className="flex flex-row items-center space-x-4">
      <div className="flex flex-col text-right">
        <h4 className="font-bold text-white text-sm">2,504.24 &euro;</h4>
        <span className="text-blue-600 text-xs">200.00 &euro;</span>
      </div>
      <FontAwesomeIcon
        icon={faUser}
        className="bg-blue-500 p-2 w-full text-4xl rounded-lg text-white"
        size="lg"
      />
      <MainButton secondary> Deposit </MainButton>
    </div>
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
        {authenticatedUser ? (
          <RegisteredHeaderButtons />
        ) : (
          <VisitorHeaderButtons />
        )}
      </div>
    </div>
  );
}

function Header() {
  return isMobile ? <MobileHeader /> : <DesktopHeader />;
}

export default Header;
