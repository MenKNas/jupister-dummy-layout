import * as React from "react";
import { Switch, Route, Redirect } from "react-router";
import { NavLink } from "react-router-dom";
import Deposit from "./Deposit";
import Withdraw from "./Withdraw";
import PendingWithdraws from "./PendingWithdraws";

export default function Financials() {
  return (
    <div>
      <div className="flex flex-col p-4 space-y-4">
        <h2 className="hidden md:block uppercase font-bold text-3xl text-white">
          Financials
        </h2>
        <div className="flex space-x-6 border-b border-bg-secondary text text-white flex-nowrap md:flex-wrap overflow-x-scroll md:overflow-x-hidden">
          <NavLink
            className="py-2 md:py-4 whitespace-nowrap md:whitespace-normal"
            to="/account/financials/deposit"
            activeClassName="text-brand-primary"
          >
            <span className="px-2">Deposit </span>
          </NavLink>
          <NavLink
            className="py-2 md:py-4 whitespace-nowrap md:whitespace-normal"
            to="/account/financials/withdraw"
            activeClassName="text-brand-primary"
          >
            <span className="px-2">Withdraw </span>
          </NavLink>
          <NavLink
            className="py-2 md:py-4 whitespace-nowrap md:whitespace-normal"
            to="/account/financials/pendingwithdraws"
            activeClassName="text-brand-primary"
          >
            <span className="px-2">Pending Withdraws </span>
          </NavLink>
        </div>
        <div>
          <Switch>
            <Route path="/account/financials/deposit" exact>
              <Deposit />
            </Route>
            <Route path="/account/financials/withdraw" exact>
              <Withdraw />
            </Route>
            <Route path="/account/financials/pendingwithdraws" exact>
              <PendingWithdraws />
            </Route>
            <Route path="*">
              <Redirect to="deposit" />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}
