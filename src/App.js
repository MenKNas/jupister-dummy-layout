import * as React from "react";
import Layout from "./components/Layout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./index.css";
import { PortalManager } from "./components/Portal";

function App() {
  return (
    <Router>
      <PortalManager>
        <div className="App">
          <Switch>
            <Route path="*">
              <Layout />
            </Route>
          </Switch>
        </div>
      </PortalManager>
    </Router>
  );
}

export default App;
