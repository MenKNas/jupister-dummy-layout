import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div style={{ maxWidth: 1400, margin: "0 auto" }} data-component="About">
      <div className="grid grid-cols-3 lg:hidden bg-gray-100 p-2 items-center">
        <Link to="/">Back</Link>
        <h2 className="uppercase font-bold text-lg text-center">About Us</h2>
      </div>
      <div className="w-full md:w-4/5 mx-auto p-4 lg:space-y-4 md:p-8 md:rounded-md md:shadow-md md:bg-white">
        <Link to="/" className="text-blue-600 hidden lg:block space-x-2">
          <FontAwesomeIcon icon={faAngleLeft} />
          <span>Back To Home Page </span>
        </Link>
        <h2 className="uppercase border-b border-gray-200 font-bold text-2xl hidden lg:block py-2">
          About Us
        </h2>
        <div className="space-y-4">
          <div>
            <h3 className="uppercase text-lg font-bold"> About us:</h3>
            <p> Text that is going to be saying stuff about us</p>
          </div>
          <div>
            <h3 className="uppercase text-lg font-bold">
              Why Choose jupitercasino24:
            </h3>
            <p> Text that is going to be saying stuff about us</p>
          </div>
        </div>
      </div>
    </div>
  );
}
