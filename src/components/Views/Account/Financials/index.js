import * as React from "react";
import { Switch, Route, Redirect } from "react-router";
import { NavLink, useLocation } from "react-router-dom";
import Deposit from "./Deposit";
import Withdraw from "./Withdraw";
import PendingWithdraws from "./PendingWithdraws";
import { AnimatePresence } from "framer-motion";

export default function Financials() {
  const location = useLocation();
  return (
    <div>
      <div className="flex flex-col md:px-4 md:py-4 space-y-0 md:space-y-4">
        <h2 className="hidden md:block uppercase font-bold text-3xl text-white">
          Financials
        </h2>
        <div className="flex space-x-6 border-b border-bg-secondary text text-white flex-nowrap md:flex-wrap overflow-x-scroll bg-bg-account-primary md:bg-bg-primary md:overflow-x-hidden px-2 md:px-0">
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
          <AnimatePresence>
            <Switch location={location} key={location.key}>
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
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
