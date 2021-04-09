import * as React from "react";
import { Switch, Route, Redirect } from "react-router";
import { NavLink } from "react-router-dom";
import AccountStatement from "./AccountStatement";
import BettingHistory from "./BettingHistory";
import ProfitLoss from "./ProfitLoss";

export default function History() {
  return (
    <div>
      <div className="flex flex-col p-4 space-y-4">
        <h2 className="hidden md:block uppercase font-bold text-3xl text-white">
          Financials
        </h2>
        <div className="flex space-x-6 border-b border-bg-secondary text text-white flex-nowrap md:flex-wrap overflow-x-scroll md:overflow-x-hidden">
          <NavLink
            className="py-2 md:py-4 whitespace-nowrap md:whitespace-normal"
            to="/account/history/bets"
            activeClassName="text-brand-primary"
          >
            <span className="px-2">Betting History </span>
          </NavLink>
          <NavLink
            className="py-2 md:py-4 whitespace-nowrap md:whitespace-normal"
            to="/account/history/statement"
            activeClassName="text-brand-primary"
          >
            <span className="px-2">Account Statement </span>
          </NavLink>
          <NavLink
            className="py-2 md:py-4 whitespace-nowrap md:whitespace-normal"
            to="/account/history/profitnloss"
            activeClassName="text-brand-primary"
          >
            <span className="px-2">Profit & Loss </span>
          </NavLink>
        </div>
        <div>
          <Switch>
            <Route path="/account/history/bets" exact>
              <BettingHistory />
            </Route>
            <Route path="/account/history/statement" exact>
              <AccountStatement />
            </Route>
            <Route path="/account/history/profitnloss" exact>
              <ProfitLoss />
            </Route>
            <Route path="*">
              <Redirect to="bets" />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}
