import * as React from "react";
import { NavLink, useRouteMatch } from "react-router-dom";
// import MainButton from "../../Buttons/MainButton";
import { Switch, Route, Redirect } from "react-router";
import Financials from "../Financials";
import MyProfile from "../MyProfile";
import MyHistory from "../MyHistory";
//icons
import { ReactComponent as Avatar } from "../../../../icons/avatar.svg";
import { ReactComponent as ProfileIcon } from "../../../../icons/profile.svg";
import { ReactComponent as HistoryIcon } from "../../../../icons/history.svg";
import { ReactComponent as FinancialIcon } from "../../../../icons/financial.svg";
// import { ReactComponent as ExpandIcon } from "../../../../icons/expand.svg";

export function DesktopAccount({ windowWidth }) {
  return (
    <div className="bg-gray-800">
      <div className="lg:max-w-1200 xl:max-w-1400 mx-auto p-4">
        <div className="bg-bg-primary flex rounded-lg">
          <div
            className="w-20 xl:w-1/4 bg-bg-account-primary rounded-md"
            style={{ minWidth: 70 }}
          >
            {windowWidth < 1280 ? <TabletSideMenu /> : <DesktopSideMenu />}
          </div>
          <div className="w-full xl:w-3/4 pl-4">
            <DesktopActiveSection />
          </div>
        </div>
      </div>
    </div>
  );
}

export function DesktopSideMenu() {
  let user = {
    userName: "George Papadopoulos",
    userMail: "papadopoulosg@gmail.com",
    totalBalance: 2500,
    bonusBalance: 200,
  };
  return (
    <div className="bg-bg-account-primary rounded-t-lg rounded-l-lg text-white">
      <div
        className="flex flex-col space-y-4 p-4"
        data-component="RegisteredTab"
      >
        <div className="flex flex-row justify-between items-center space-x-4">
          <div className="flex flex-row justify-evenly space-x-4 items-center">
            <Avatar />
            <div className="flex flex-col">
              <h4 className="text-text-secondary text-xs font-bold"> User </h4>
              <span className="text-sm truncate text-white">
                {user.userMail}
              </span>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="w-1/2">
            <div className="flex flex-col">
              <h4 className="text-sm text-text-secondary font-bold">
                Real Money
              </h4>
              <span className="text-white font-light text-xl">
                {user.totalBalance.toFixed(2)} &euro;
              </span>
            </div>
          </div>
          <div className="w-1/2">
            <h4 className="text-sm text-text-secondary font-bold">
              Bonus Money
            </h4>
            <span className="text-white font-light text-xl">
              {user.bonusBalance.toFixed(2)} &euro;
            </span>
          </div>
        </div>
      </div>
      <MainNavLinkSection />
    </div>
  );
}

function TabletSideMenu() {
  return (
    <div className="bg-bg-secondary flex flex-col items-center space-y-6 h-full rounded-l-lg py-4">
      <NavLink
        to="/account/myprofile/"
        className="bg-bg-primary p-3 rounded-md flex items-center"
        activeStyle={{ border: "1px solid #fddb4c" }}
      >
        <button>
          <ProfileIcon />
        </button>
      </NavLink>
      <NavLink
        to="/account/financials/"
        className="bg-bg-primary p-3 rounded-md flex items-center"
        activeStyle={{ border: "1px solid #fddb4c" }}
      >
        <button>
          <FinancialIcon />
        </button>
      </NavLink>
      <NavLink
        to="/account/history/"
        className="bg-bg-primary p-3 rounded-md flex items-center text-text-secondary"
        activeStyle={{ border: "1px solid #fddb4c" }}
      >
        <button>
          <HistoryIcon />
        </button>
      </NavLink>
      {/* <NavLink to="/history" className="bg-bg-primary p-3 rounded-md">
        <button>
          <ExpandIcon />
        </button>
      </NavLink> */}
    </div>
  );
}

function MainNavLinkSection() {
  let { path } = useRouteMatch();
  return (
    <div className="space-y-2 p-4">
      <div className="flex flex-col space-y-1">
        <h3 className="font-thin text-text-secondary"> My Profile</h3>
        <NavLink
          to={`${path}/myprofile/personalinfo`}
          activeStyle={{ backgroundColor: "#FDDB4C", color: "#132B4E" }}
          className="bg-bg-secondary p-2 w-full text-left rounded-md"
          exact
        >
          <button>Personal Info</button>
        </NavLink>
        <NavLink
          to={`${path}/myprofile/documents`}
          activeStyle={{ backgroundColor: "#FDDB4C", color: "#132B4E" }}
          className="bg-bg-secondary p-2 w-full text-left rounded-md"
        >
          <button>Documents</button>
        </NavLink>
        <NavLink
          to={`${path}/myprofile/limits`}
          activeStyle={{ backgroundColor: "#FDDB4C", color: "#132B4E" }}
          className="bg-bg-secondary p-2 w-full text-left rounded-md"
          exact
        >
          <button>Limits</button>
        </NavLink>
        <NavLink
          to={`${path}/myprofile/changepassword`}
          activeStyle={{ backgroundColor: "#FDDB4C", color: "#132B4E" }}
          className="bg-bg-secondary p-2 w-full text-left rounded-md"
          exact
        >
          <button>Change Password</button>
        </NavLink>
        <NavLink
          to={`${path}/myprofile/bonuses`}
          activeStyle={{ backgroundColor: "#FDDB4C", color: "#132B4E" }}
          className="bg-bg-secondary p-2 w-full text-left rounded-md"
        >
          <button>Bonuses</button>
        </NavLink>
      </div>
      <div className="flex flex-col space-y-1">
        <h3 className="font-thin text-text-secondary"> Financials</h3>
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
        <h3 className="font-thin text-text-secondary"> History </h3>
        <NavLink
          to={`${path}/history/bets`}
          activeStyle={{ backgroundColor: "#FDDB4C", color: "#132B4E" }}
          className="bg-bg-secondary p-2 w-full text-left rounded-md"
        >
          <button>Betting History</button>
        </NavLink>
        <NavLink
          to={`${path}/history/statement`}
          activeStyle={{ backgroundColor: "#FDDB4C", color: "#132B4E" }}
          className="bg-bg-secondary p-2 w-full text-left rounded-md"
        >
          <button>Account Statement</button>
        </NavLink>
        <NavLink
          to={`${path}/history/profitnloss`}
          activeStyle={{ backgroundColor: "#FDDB4C", color: "#132B4E" }}
          className="bg-bg-secondary p-2 w-full text-left rounded-md"
        >
          <button>Profit & Loss</button>
        </NavLink>
      </div>
    </div>
  );
}

export function DesktopActiveSection() {
  let { path } = useRouteMatch();
  return (
    <div>
      <Switch>
        <Route exact path={path}>
          <Redirect to="/" />
        </Route>
        <Route path={`${path}/myprofile`}>
          <MyProfile />
        </Route>
        <Route path={`${path}/financials`}>
          <Financials />
        </Route>
        <Route path={`${path}/history`}>
          <MyHistory />
        </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </div>
  );
}
