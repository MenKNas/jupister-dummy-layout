import * as React from "react";
import Layout from "./components/Layout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./index.css";
// import { PortalManager } from "./components/Portal";
import { ModalManager } from "./components/NewModal";

function App() {
  return (
    <Router>
      <ModalManager>
        <div className="App">
          <Switch>
            <Route path="*">
              <Layout />
            </Route>
          </Switch>
        </div>
      </ModalManager>
    </Router>
  );
}

export default App;
