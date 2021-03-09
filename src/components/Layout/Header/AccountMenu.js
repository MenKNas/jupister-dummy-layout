import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";
import { Link } from "react-router-dom";
import { useClickAway } from "react-use";
import useDarkMode from "../../../hooks/useDarkMode";

export default function AccountMenu({ setShowProfileLinks }) {
  const [colorTheme, setTheme] = useDarkMode();
  const ref = React.useRef(null);
  useClickAway(ref, () => {
    setShowProfileLinks(false);
  });

  return (
    <>
      <div
        data-component="AccountMenu"
        className="absolute top-10 right-0 bg-white dark:bg-gray-800 z-30 rounded-md origin-top-left w-56  border border-gray-300 dark:border-white transition duration-200 shadow-md"
        ref={ref}
        onMouseLeave={() => setShowProfileLinks(false)}
      >
        <div className="text-gray-700 dark:text-white py-1 px-2 transition duration-200">
          <Link
            to="/deposit"
            className="px-2 py-2 truncate w-full inline-block hover:textw-white hover:bg-yellow-300"
            onClick={() => setShowProfileLinks(false)}
          >
            Deposit
          </Link>
          <Link
            to="/deposit"
            className="px-2 py-2 truncate w-full inline-block hover:textw-white hover:bg-yellow-300"
            onClick={() => setShowProfileLinks(false)}
          >
            Deposit
          </Link>
          <Link
            to="/deposit"
            className="px-2 py-2 truncate w-full inline-block hover:textw-white hover:bg-yellow-300"
            onClick={() => setShowProfileLinks(false)}
          >
            Deposit
          </Link>
          <Link
            to="/deposit"
            className="px-2 py-2 truncate w-full inline-block hover:textw-white hover:bg-yellow-300"
            onClick={() => setShowProfileLinks(false)}
          >
            Deposit
          </Link>
          <Link
            to="/deposit"
            className="px-2 py-2 truncate w-full inline-block hover:textw-white hover:bg-yellow-300"
            onClick={() => setShowProfileLinks(false)}
          >
            Deposit
          </Link>
          <Link
            to="/deposit"
            className="px-2 py-2 truncate w-full inline-block hover:textw-white hover:bg-yellow-300"
            onClick={() => setShowProfileLinks(false)}
          >
            Deposit
          </Link>
          <div className="flex items-center px-2 py-2 truncate w-full ">
            <button onClick={() => setTheme(colorTheme)} className="space-x-2">
              {colorTheme === "light" ? (
                <>
                  <span>Light Mode</span>
                  <FontAwesomeIcon icon={faSun} className="text-yellow-300" />
                </>
              ) : (
                <>
                  <span>Dark Mode </span>
                  <FontAwesomeIcon icon={faMoon} />
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
