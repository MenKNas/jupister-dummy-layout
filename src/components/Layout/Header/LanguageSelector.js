import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const supportedLanguages = ["EN", "DE", "ES"];

export default function LanguageSelector() {
  return (
    <div className="relative" data-component="LanguageSelector">
      <button>
        <span>
          Initial Language <FontAwesomeIcon icon={faCaretDown} />
        </span>
      </button>
      <div>
        {supportedLanguages.map((lang) => (
          <button className="text-white"> {lang} </button>
        ))}
      </div>
    </div>
  );
}
