import React from "react";
import { Switch, Route, useRouteMatch, Redirect } from "react-router";
import useWindowSize from "../../../hooks/useWindowSize";
import Documents from "./Documents";
import Financials from "./Financials";

export default function ActiveSection() {
  let { path } = useRouteMatch();
  const { width } = useWindowSize();
  return (
    <div>
      <Switch>
        <Route exact path={path}>
          {width > 768 && <Redirect to={`${path}/personalinfo`} />}
        </Route>
        <Route exact path={`${path}/personalinfo`}>
          <PersonalInfo />
        </Route>
        <Route exact path={`${path}/changepassword`}>
          <ChangePassword />
        </Route>
        <Route exact path={`${path}/documents`}>
          <Documents />
        </Route>
        <Route path={`${path}/financials`}>
          <Financials />
        </Route>
        <Route path="*">
          <Redirect to={`${path}/personalinfo`} />
        </Route>
      </Switch>
    </div>
  );
}

function PersonalInfo() {
  return <div> yeeees biaaaaatch !!</div>;
}

function ChangePassword() {
  return <div> ChangePassword !</div>;
}
