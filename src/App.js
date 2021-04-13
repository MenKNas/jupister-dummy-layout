import * as React from "react";
import Layout from "./components/Layout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./index.css";
// import { PortalManager } from "./components/Portal";
import { ModalManager } from "./components/NewModal";
import { LoginRegisterProvider } from "./components/LoginRegister";
import { useCustomScrollbar } from "./hooks/useCustomScrollbar";

function App() {
  useCustomScrollbar();
  return (
    <Router>
      <ModalManager>
        <LoginRegisterProvider>
          <div className="App">
            <Switch>
              <Route path="*">
                <Layout />
              </Route>
            </Switch>
          </div>
        </LoginRegisterProvider>
      </ModalManager>
    </Router>
  );
}

export default App;
