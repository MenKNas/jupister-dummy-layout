import * as React from "react";
import Layout from "./components/Layout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./index.css";
import useDarkMode from "./hooks/useDarkMode";

function App() {
  useDarkMode();
  return (
    <Router>
      <div className="App bg-white dark:bg-gray-800">
        <Switch>
          <Route path="*">
            <Layout />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
