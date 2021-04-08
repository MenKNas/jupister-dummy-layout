import * as React from "react";
import { Link, NavLink } from "react-router-dom";
import { SideBar } from "./SideBar";
import MainButton from "../../Buttons/MainButton";
import useWindowSize from "../../../hooks/useWindowSize";
import AccountMenu from "./AccountMenu";
import { ReactComponent as BurgerIcon } from "../../../icons/menu_burger_box.svg";
import { ReactComponent as Avatar } from "../../../icons/avatar.svg";
// import { ReactComponent as ChevronDown } from "../../../icons/chevron-down.svg";
// import { ReactComponent as Logo } from "../../../icons/brand-logo-main.svg";

const authenticatedUser = true;

function MobileHeader() {
  const [showSidebar, setShowSidebar] = React.useState(false);
  return (
    <>
      <div
        className="flex justify-between items-center p-2 bg-header-bg px-2 py-3 md:px-2 sticky top-0 z-10"
        data-component="MobileHeader"
      >
        <div className="space-x-4 flex items-center">
          <button
            className="text-blue-500 text-2xl"
            onClick={() => setShowSidebar((prev) => !prev)}
          >
            <BurgerIcon />
          </button>
          <NavLink to="/">
            <img
              src="/assets/brand-logo-main.svg"
              alt="Logo"
              width={100}
              height={80}
            />
          </NavLink>
        </div>
        <div>
          {authenticatedUser ? (
            <Link to="/account/financials/">
              <MainButton secondary> Deposit </MainButton>
            </Link>
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
        <span className="text-text-secondary text-sm"> Balance </span>
        <h4 className="font-bold text-white truncate">2,504.24 &euro;</h4>
      </div>
      <div className="relative">
        <div
          onMouseEnter={() => setShowProfileLinks(true)}
          onMouseLeave={() => setShowProfileLinks(false)}
        >
          <div className="py-1">
            <button className="flex items-center">
              <Avatar />
            </button>
            {showProfileLinks && (
              <AccountMenu setShowProfileLinks={setShowProfileLinks} />
            )}
          </div>
        </div>
      </div>
      <Link to="/account/financials/">
        <MainButton secondary> Deposit </MainButton>
      </Link>
    </div>
  );
}

function DesktopHeader() {
  return (
    <div
      className="bg-header-bg sticky top-0 z-50"
      data-component="DesktopHeader"
    >
      <div className="flex justify-between items-center py-3 lg:px-10 xl:px-4 max-w-1400 mx-auto">
        <div className="flex justify-between space-x-4 items-center">
          <div>
            <NavLink to="/">
              <img
                src="/assets/brand-logo-main.svg"
                alt="Logo"
                loading="lazy"
                width={120}
                height={50}
              />
            </NavLink>
          </div>
          <div className="hidden xl:flex items-center uppercase px-4 text-white font-bold">
            <span className="px-4 truncate">
              <NavLink to="/" activeClassName="text-brand-primary" exact={true}>
                Home
              </NavLink>
            </span>
            <span className="px-4 truncate">
              <NavLink
                to="/casino"
                activeClassName="text-brand-primary"
                exact={true}
              >
                Casino
              </NavLink>
            </span>
            <span className="px-4 truncate">
              <NavLink
                to="/livecasino"
                activeClassName="text-brand-primary"
                exact={true}
              >
                Live Casino
              </NavLink>
            </span>
            <span className="px-4 truncate">
              <NavLink
                to="/sports"
                activeClassName="text-brand-primary"
                exact={true}
              >
                Sports
              </NavLink>
            </span>
            <span className="px-4 truncate">
              <NavLink
                to="/livecasino"
                activeClassName="text-brand-primary"
                exact={true}
              >
                More
                {/* <span className="ml-2">
                  <FontAwesomeIcon icon={faAngleDown} />
                </span> */}
              </NavLink>
            </span>
            <span className="px-4 truncate">
              <NavLink
                to="/promotions"
                activeClassName="text-brand-primary"
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
