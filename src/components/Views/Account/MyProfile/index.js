import * as React from "react";
import { Switch, Route, Redirect } from "react-router";
import { NavLink, useLocation } from "react-router-dom";
import PersonalInfo from "./PersonalInfo";
import Documents from "./Documents";
import Limits from "./Limits";
import ChangePassword from "./ChangePassword";
import Bonuses from "./Bonuses";
import { AnimatePresence } from "framer-motion";

export default function MyProfile() {
  const location = useLocation();
  return (
    <div>
      <div className="flex flex-col px-2 md:px-4 md:py-4 space-y-4">
        <h2 className="hidden md:block uppercase font-bold text-3xl text-white">
          My Profile
        </h2>
        <div className="flex space-x-6 border-b border-bg-secondary text text-white flex-nowrap md:flex-wrap overflow-x-scroll md:overflow-x-hidden">
          <NavLink
            className="py-2 md:py-4 whitespace-nowrap md:whitespace-normal"
            to="/account/myprofile/personalinfo"
            activeClassName="text-brand-primary"
          >
            <span className="px-2 whitespace-nowrap md:whitespace-normal">
              Personal Info
            </span>
          </NavLink>
          <NavLink
            className="py-2 md:py-4 whitespace-nowrap md:whitespace-normal"
            to="/account/myprofile/documents"
            activeClassName="text-brand-primary"
          >
            <span className="px-2">Documents </span>
          </NavLink>
          <NavLink
            className="py-2 md:py-4 whitespace-nowrap md:whitespace-normal"
            to="/account/myprofile/limits"
            activeClassName="text-brand-primary"
          >
            <span className="px-2">Limits </span>
          </NavLink>
          <NavLink
            className="py-2 md:py-4 whitespace-nowrap md:whitespace-normal"
            to="/account/myprofile/changepassword"
            activeClassName="text-brand-primary"
          >
            <span className="px-2">Change Password </span>
          </NavLink>
          <NavLink
            className="py-2 md:py-4 whitespace-nowrap md:whitespace-normal"
            to="/account/myprofile/bonuses"
            activeClassName="text-brand-primary"
          >
            <span className="px-2">Bonuses </span>
          </NavLink>
        </div>
        <div>
          <AnimatePresence>
            <Switch location={location} key={location.key}>
              <Route path="/account/myprofile/personalinfo" exact>
                <PersonalInfo />
              </Route>
              <Route path="/account/myprofile/documents" exact>
                <Documents />
              </Route>
              <Route path="/account/myprofile/limits" exact>
                <Limits />
              </Route>
              <Route path="/account/myprofile/changepassword" exact>
                <ChangePassword />
              </Route>
              <Route path="/account/myprofile/bonuses" exact>
                <Bonuses />
              </Route>
              <Route path="*">
                <Redirect to="personalinfo" />
              </Route>
            </Switch>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
