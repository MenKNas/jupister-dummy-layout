import * as React from "react";
import { Link } from "react-router-dom";
import { useClickAway } from "react-use";

export default function AccountMenu({ setShowProfileLinks }) {
  const ref = React.useRef(null);
  useClickAway(ref, () => {
    setShowProfileLinks(false);
  });
  return (
    <>
      <div
        className="absolute top-10 right-0 pl-2 pr-24 bg-gray-800 z-30 rounded-md origin-top-left w-56  border border-white"
        ref={ref}
      >
        <div className="flex flex-col text-white text-left py-1">
          <Link to="/deposit" className="py-2 truncate">
            Deposit
          </Link>
          <Link to="/deposit" className="py-2 truncate">
            Deposit
          </Link>
          <Link to="/deposit" className="py-2 truncate">
            Deposit
          </Link>
          <Link to="/deposit" className="py-2 truncate">
            Deposit
          </Link>
          <Link to="/deposit" className="py-2 truncate">
            Deposit
          </Link>
          <Link to="/deposit" className="py-2 truncate">
            Deposit
          </Link>
        </div>
      </div>
    </>
  );
}
