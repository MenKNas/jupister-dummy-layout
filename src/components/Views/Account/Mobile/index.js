import * as React from "react";
import { Switch, Route } from "react-router";
// import useWindowSize from "../../../hooks/useWindowSize";
// import Documents from "../Documents";
// import Financials from "../Financials";

export function MobileAccount() {
  return (
    <div>
      <MobileActiveSection />
    </div>
  );
}

// function MobileMenu() {
//   return <div> Yolo !</div>;
// }

// function PersonalInfo() {
//   return <div> yeeees biaaaaatch !!</div>;
// }

// function ChangePassword() {
//   return <div> ChangePassword !</div>;
// }

function MobileActiveSection() {
  //   let { url, path } = useRouteMatch();
  //   console.log(path);
  //   console.log(path);
  return (
    <div>
      <Switch>
        <Route path="/">YOLO MOBILE ONLY</Route>
        {/* <Route exact path={`${path}`}>
          <MobileMenu />
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
        </Route> */}
        {/* <Route path="*">
              <Redirect to={`${path}/personalinfo`} />
            </Route> */}
      </Switch>
    </div>
  );
}
