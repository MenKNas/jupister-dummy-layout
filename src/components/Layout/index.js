import * as React from "react";
import Home from "../Views/Home";
import Header from "./Header";
// import MainSection from "./MainSection";
import { Switch, Route } from "react-router-dom";
import About from "../Views/About";
import Footer from "../Footer";
import Promotions from "../Views/Promotions";
import Casino from "../Views/Casino";

export default function Layout() {
  return (
    <div>
      <div>
        <Header />
        <div
          style={{ minHeight: "calc(100vh - 230px)" }}
          className="bg-gray-100 dark:bg-gray-800"
        >
          <Switch>
            <Route path="/casino" exact>
              <Casino />
            </Route>
            <Route path="/livecasino" exact>
              <div> Live casino </div>
            </Route>
            <Route path="/promotions" exact>
              <Promotions />
            </Route>
            <Route path="/about" exact>
              <About />
            </Route>
            <Route path="*">
              <Home />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </div>
  );
}
