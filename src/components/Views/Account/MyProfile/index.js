import * as React from "react";
import { Switch, Route, Redirect } from "react-router";
import { NavLink } from "react-router-dom";
import PersonalInfo from "./PersonalInfo";
import Documents from "./Documents";
import Limits from "./Limits";
import ChangePassword from "./ChangePassword";
import Bonuses from "./Bonuses";

export default function MyProfile() {
  return (
    <div>
      <div className="flex flex-col p-4 space-y-4">
        <h2 className="uppercase font-bold text-3xl text-white">My Profile</h2>
        <div className="flex space-x-6 border-b border-bg-secondary text text-white">
          <NavLink
            className="py-4"
            to="/account/myprofile/personalinfo"
            activeClassName="text-brand-primary"
          >
            <span className="px-2">Personal Info </span>
          </NavLink>
          <NavLink
            className="py-4"
            to="/account/myprofile/documents"
            activeClassName="text-brand-primary"
          >
            <span className="px-2">Documents </span>
          </NavLink>
          <NavLink
            className="py-4"
            to="/account/myprofile/limits"
            activeClassName="text-brand-primary"
          >
            <span className="px-2">Limits </span>
          </NavLink>
          <NavLink
            className="py-4"
            to="/account/myprofile/changepassword"
            activeClassName="text-brand-primary"
          >
            <span className="px-2">Change Password </span>
          </NavLink>
          <NavLink
            className="py-4"
            to="/account/myprofile/bonuses"
            activeClassName="text-brand-primary"
          >
            <span className="px-2">Bonuses </span>
          </NavLink>
        </div>
        <div>
          <Switch>
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
        </div>
      </div>
    </div>
  );
}
