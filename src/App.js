import * as React from "react";
import Layout from "./components/Layout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./index.css";

function App() {
  return (
    <Router>
      <div className="App">
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
