import * as React from "react";
import useWindowSize from "../../hooks/useWindowSize";
import { ReactComponent as SearchIcon } from "../../icons/search-icon.svg";
import { ReactComponent as ListIcon } from "../../icons/list-icon.svg";
import { ReactComponent as ChevronDown } from "../../icons/chevron-down.svg";

export default function SearchBar() {
  const { width } = useWindowSize();
  const [showSearchIcon, setShowSearchIcon] = React.useState(true);
  return (
    <div className="flex space-x-4" data-component="SearchBar">
      <div
        className="p-2 w-4/5 bg-bg-secondary rounded-md text-text-secondary outline-none flex items-center space-x-2"
        onFocus={() => setShowSearchIcon(false)}
        onBlur={() => setShowSearchIcon(true)}
      >
        {showSearchIcon && (
          <span>
            <SearchIcon />
          </span>
        )}
        <input placeholder="Search" className="bg-transparent" />
      </div>
      {width < 780 ? (
        <button className="w-1/5 bg-bd-focused rounded-md text- flex items-center justify-center text-white">
          <ListIcon />
        </button>
      ) : (
        <button className="w-1/5 bg-bd-focused rounded-md text-md flex items-center justify-between text-white px-4">
          <div className="flex items-center space-x-2">
            <ListIcon />
            <span className="hidden md:block tracking-wide">Providers </span>
          </div>
          <span className="hidden md:block">
            <ChevronDown stroke="#fff" />
          </span>
        </button>
      )}
    </div>
  );
}
