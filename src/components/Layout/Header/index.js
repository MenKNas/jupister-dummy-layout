import * as React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faAngleDown, faUser } from "@fortawesome/free-solid-svg-icons";
import { SideBar } from "./SideBar";
import MainButton from "../../Buttons/MainButton";
import useWindowSize from "../../../hooks/useWindowSize";
import AccountMenu from "./AccountMenu";

const authenticatedUser = true;

function MobileHeader() {
  const [showSidebar, setShowSidebar] = React.useState(false);
  return (
    <>
      <div
        className="flex justify-between items-center p-2 bg-white dark:bg-gray-800 px-4 lg:px-32"
        data-component="MobileHeader"
      >
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
          {authenticatedUser ? (
            <MainButton secondary> Deposit </MainButton>
          ) : (
            <MainButton secondary> Register </MainButton>
          )}
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
  const [showProfileLinks, setShowProfileLinks] = React.useState(false);
  return (
    <div
      className="flex flex-row items-center space-x-4"
      data-component="RegisteredHeaderButtons"
    >
      <div className="flex flex-col text-right">
        <h4 className="font-bold dark:text-white text-sm truncate transition duration-200">
          2,504.24 &euro;
        </h4>
        <span className="text-blue-600 text-xs">200.00 &euro;</span>
      </div>
      <div className="relative">
        <button onMouseOver={() => setShowProfileLinks(true)}>
          <FontAwesomeIcon
            icon={faUser}
            className="bg-blue-500 p-2 w-full text-4xl rounded-lg text-white"
            size="lg"
          />
        </button>
        {showProfileLinks && (
          <AccountMenu setShowProfileLinks={setShowProfileLinks} />
        )}
      </div>
      <MainButton secondary> Deposit </MainButton>
    </div>
  );
}

function DesktopHeader() {
  return (
    <div
      className="dark:bg-gray-800 transition duration-200"
      data-component="DesktopHeader"
    >
      <div
        className="flex justify-between items-center py-4 lg:px-10 xl:px-36"
        style={{ maxWidth: 1400, margin: "0 auto" }}
      >
        <div className="flex justify-between space-x-4 items-center">
          <div>
            <span className="text-yellow-400 text-2xl tracking-wide">
              Jupiter
            </span>
          </div>
          <div className="hidden lg:flex items-center uppercase px-4 dark:text-white font-bold transition duration-200">
            <span className="px-4 truncate">
              <NavLink to="/" activeClassName="text-yellow-300" exact={true}>
                Home
              </NavLink>
            </span>
            <span className="px-4 truncate">
              <NavLink
                to="/casino"
                activeClassName="text-yellow-300"
                exact={true}
              >
                Casino
              </NavLink>
            </span>
            <span className="px-4 truncate">
              <NavLink
                to="/livecasino"
                activeClassName="text-yellow-300"
                exact={true}
              >
                Live Casino
              </NavLink>
            </span>
            <span className="px-4 truncate">
              <NavLink
                to="/sports"
                activeClassName="text-yellow-300"
                exact={true}
              >
                Sports
              </NavLink>
            </span>
            <span className="px-4 truncate">
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
            <span className="px-4 truncate">
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
    </div>
  );
}

function Header() {
  const { width } = useWindowSize();

  return width < 1366 ? <MobileHeader /> : <DesktopHeader />;
}

export default Header;
