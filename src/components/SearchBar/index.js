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
        style={width < 460 ? { width: 280 } : { width: "80%" }}
        className="p-2 bg-bg-secondary rounded-md text-text-secondary outline-none flex items-center space-x-2 border border-bd-primary"
        onFocus={() => setShowSearchIcon(false)}
        onBlur={() => setShowSearchIcon(true)}
      >
        {showSearchIcon && (
          <span>
            <SearchIcon stroke="#A9B7D5" />
          </span>
        )}
        <input placeholder="Search" className="bg-transparent" />
      </div>
      {width < 780 ? (
        <button className="w-1/5 bg-bg-secondary rounded-md text- flex items-center justify-center text-white border border-bd-primary">
          <ListIcon />
        </button>
      ) : (
        <button className="w-1/5 bg-bg-secondary  rounded-md text-md flex items-center justify-between text-text-secondary px-4 border border-bd-primary">
          <div className="flex items-center space-x-2">
            <ListIcon stroke="#A9B7D5" />
            <span className="hidden md:block uppercase font-black">
              Providers
            </span>
          </div>
          <span className="hidden md:block">
            <ChevronDown stroke="#A9B7D5" />
          </span>
        </button>
      )}
    </div>
  );
}
