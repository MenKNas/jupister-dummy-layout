import * as React from "react";
import { Link } from "react-router-dom";
import { useClickAway } from "react-use";

const links = [
  { path: "/account/financials/deposit", label: "Deposit" },
  { path: "/account/financials/withdraw", label: "Withdraw" },
  { path: "/account/financials/pendingwithdraws", label: "Pending Withdraws" },
  { path: "/account/myprofile/bonuses", label: "Bonuses" },
  { path: "/account/history/bets", label: "Betting History" },
];

export default function AccountMenu({ setShowProfileLinks }) {
  const ref = React.useRef(null);
  useClickAway(ref, () => {
    setShowProfileLinks(false);
  });
  return (
    <div>
      <div
        data-component="AccountMenu"
        className="absolute top-11 right-0 bg-bg-secondary z-30 rounded-md origin-top-left w-56 shadow-lg"
        ref={ref}
        onMouseLeave={() => setShowProfileLinks(false)}
      >
        <div className="text-white py-1 px-2">
          {links.map(({ path, label }) => (
            <Link
              to={path}
              className="px-2 py-2 truncate w-full inline-block hover:bg-brand-primary hover:text-bg-darker"
              onClick={() => setShowProfileLinks(false)}
            >
              {label}
            </Link>
          ))}
          <button className="px-2 py-2 truncate w-full inline-block hover:bg-brand-primary hover:text-bg-darker text-left">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
