import * as React from "react";
import { NavLink, useRouteMatch } from "react-router-dom";
// import MainButton from "../../Buttons/MainButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExchangeAlt,
  faHistory,
  faUser,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";
import ActiveSection from "./ActiveSection";
import useWindowSize from "../../../hooks/useWindowSize";

function MobileAccount() {
  return (
    <div>
      <DesktopSideMenu />
      <ActiveSection />
    </div>
  );
}

function DesktopAccount({ windowWidth }) {
  return (
    <div className="bg-gray-800">
      <div style={{ maxWidth: 1400, margin: "0 auto" }} className="p-4">
        <div className="bg-bg-primary flex rounded-lg">
          <div className="w-20 xl:w-1/4" style={{ minWidth: 70 }}>
            {windowWidth < 1280 ? <MobileSideMenu /> : <DesktopSideMenu />}
          </div>
          <div className="w-full xl:w-3/4 pl-4">
            <ActiveSection />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Account() {
  const { width } = useWindowSize();
  return width < 768 ? (
    <MobileAccount />
  ) : (
    <DesktopAccount windowWidth={width} />
  );
}

function DesktopSideMenu() {
  let user = {
    userName: "George Papadopoulos",
    userMail: "papadopoulosg@gmail.com",
    totalBalance: 2500,
    bonusBalance: 200,
  };
  return (
    <div className="bg-bg-darker rounded-t-lg rounded-l-lg text-white">
      <div
        className="flex flex-col space-y-4 p-4"
        data-component="RegisteredTab"
      >
        <div className="flex flex-row justify-between items-center space-x-4">
          <div className="flex flex-row justify-evenly space-x-2 items-center">
            <FontAwesomeIcon
              icon={faUser}
              className="bg-brand-secondary text-white p-2 text-4xl rounded-md"
              size="lg"
              style={{ width: 36, height: 36 }}
            />
            <div className="flex flex-col">
              <h4 className="text-gray-500 text-xs"> User </h4>
              <span className="text-sm font-bold truncate text-white">
                {user.userMail}
              </span>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="w-1/2">
            <div className="flex flex-col">
              <h4 className="text-sm text-gray-400">Real Money</h4>
              <span className="text-white font-bold text-xl">
                {user.totalBalance.toFixed(2)} &euro;
              </span>
            </div>
          </div>
          <div className="w-1/2">
            <h4 className="text-sm text-gray-400">Bonus Money</h4>
            <span className="text-white font-bold text-xl">
              {user.bonusBalance.toFixed(2)} &euro;
            </span>
          </div>
        </div>
      </div>
      <MainNavLinkSection />
    </div>
  );
}

function MobileSideMenu() {
  return (
    <div className="bg-bg-secondary flex flex-col items-center space-y-6 h-full rounded-l-lg py-4">
      <NavLink to="/" className="bg-white p-2 rounded-md text-2xl">
        <button>
          <FontAwesomeIcon icon={faExchangeAlt} />
        </button>
      </NavLink>
      <NavLink
        to="/account/personalinfo"
        className="bg-white p-2 rounded-md text-2xl"
      >
        <button>
          <FontAwesomeIcon icon={faUser} />
        </button>
      </NavLink>
      <NavLink
        to="/account/financials/"
        className="bg-white p-2 rounded-md text-2xl"
        activeClassName="text-white bg-blue-600"
      >
        <button>
          <FontAwesomeIcon icon={faWallet} />
        </button>
      </NavLink>
      <NavLink to="/history" className="bg-white p-2 rounded-md text-2xl">
        <button>
          <FontAwesomeIcon icon={faHistory} />
        </button>
      </NavLink>
    </div>
  );
}

function MainNavLinkSection() {
  let { path } = useRouteMatch();
  return (
    <div className="space-y-2 p-4">
      <div className="flex flex-col space-y-1">
        <h3 className="text-lg font-bold text-gray-300"> My Profile</h3>
        <NavLink
          to={`${path}/personalinfo`}
          activeStyle={{ backgroundColor: "#FDDB4C", color: "#132B4E" }}
          className="bg-bg-secondary p-2 w-full text-left rounded-md"
          exact
        >
          <button>Personal Info</button>
        </NavLink>
        <NavLink
          to={`${path}/changepassword`}
          activeStyle={{ backgroundColor: "#FDDB4C", color: "#132B4E" }}
          className="bg-bg-secondary p-2 w-full text-left rounded-md"
          exact
        >
          <button>Change Password</button>
        </NavLink>
        <NavLink
          to={`${path}/documents`}
          activeStyle={{ backgroundColor: "#FDDB4C", color: "#132B4E" }}
          className="bg-bg-secondary p-2 w-full text-left rounded-md"
        >
          <button>Documents</button>
        </NavLink>
        <NavLink
          to={`${path}/bonuses`}
          activeStyle={{ backgroundColor: "#FDDB4C", color: "#132B4E" }}
          className="bg-bg-secondary p-2 w-full text-left rounded-md"
        >
          <button>Bonuses</button>
        </NavLink>
      </div>
      <div className="flex flex-col space-y-1">
        <h3 className="text-lg font-bold text-gray-300"> Financials</h3>
        <NavLink
          to={`${path}/financials/deposit`}
          activeStyle={{ backgroundColor: "#FDDB4C", color: "#132B4E" }}
          className="bg-bg-secondary p-2 w-full text-left rounded-md"
        >
          <button>Deposit</button>
        </NavLink>
        <NavLink
          to={`${path}/financials/withdraw`}
          activeStyle={{ backgroundColor: "#FDDB4C", color: "#132B4E" }}
          className="bg-bg-secondary p-2 w-full text-left rounded-md"
        >
          <button>Withdraw</button>
        </NavLink>
        <NavLink
          to={`${path}/financials/pendingwithdraws`}
          activeStyle={{ backgroundColor: "#FDDB4C", color: "#132B4E" }}
          className="bg-bg-secondary p-2 w-full text-left rounded-md"
        >
          <button>Pending Withdraws</button>
        </NavLink>
      </div>
      <div className="flex flex-col space-y-1">
        <h3 className="text-lg font-bold text-gray-300"> History </h3>
        <NavLink
          to={`${path}/history`}
          activeStyle={{ backgroundColor: "#FDDB4C", color: "#132B4E" }}
          className="bg-bg-secondary p-2 w-full text-left rounded-md"
        >
          <button>Betting History</button>
        </NavLink>
        <NavLink
          to={`${path}/accountstatement`}
          activeStyle={{ backgroundColor: "#FDDB4C", color: "#132B4E" }}
          className="bg-bg-secondary p-2 w-full text-left rounded-md"
        >
          <button>Account Statement</button>
        </NavLink>
        <NavLink
          to={`${path}/profitandloss`}
          activeStyle={{ backgroundColor: "#FDDB4C", color: "#132B4E" }}
          className="bg-bg-secondary p-2 w-full text-left rounded-md"
        >
          <button>Profit & Loss</button>
        </NavLink>
      </div>
    </div>
  );
}
