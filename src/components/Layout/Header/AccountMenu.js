import * as React from "react";
import { Link } from "react-router-dom";
import { useClickAway } from "react-use";

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
          <Link
            to="/deposit"
            className="px-2 py-2 truncate w-full inline-block hover:textw-white hover:bg-brand-primary hover:text-bg-darker"
            onClick={() => setShowProfileLinks(false)}
          >
            Deposit
          </Link>
          <Link
            to="/deposit"
            className="px-2 py-2 truncate w-full inline-block hover:textw-white hover:bg-brand-primary hover:text-bg-darker"
            onClick={() => setShowProfileLinks(false)}
          >
            Deposit
          </Link>
          <Link
            to="/deposit"
            className="px-2 py-2 truncate w-full inline-block hover:textw-white hover:bg-brand-primary hover:text-bg-darker"
            onClick={() => setShowProfileLinks(false)}
          >
            Deposit
          </Link>
          <Link
            to="/deposit"
            className="px-2 py-2 truncate w-full inline-block hover:textw-white hover:bg-brand-primary hover:text-bg-darker"
            onClick={() => setShowProfileLinks(false)}
          >
            Deposit
          </Link>
          <Link
            to="/deposit"
            className="px-2 py-2 truncate w-full inline-block hover:textw-white hover:bg-brand-primary hover:text-bg-darker"
            onClick={() => setShowProfileLinks(false)}
          >
            Deposit
          </Link>
          <Link
            to="/deposit"
            className="px-2 py-2 truncate w-full inline-block hover:textw-white hover:bg-brand-primary hover:text-bg-darker"
            onClick={() => setShowProfileLinks(false)}
          >
            Deposit
          </Link>
        </div>
      </div>
    </div>
  );
}
