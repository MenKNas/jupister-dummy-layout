import React from "react";
import { Link } from "react-router-dom";
import MainButton from "../../Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
// import { motion } from "framer-motion";

function FooterLinks() {
  return (
    <div className="flex flex-col text-xs space-y-4 text-white tracking-wider">
      <Link to="/about"> About Us </Link>
      <Link to="/"> Contact Us</Link>
      <Link to="/"> Terms & Conditions </Link>
      <Link to="/"> Responsible Gaming</Link>
      <Link to="/"> Privacy Policy </Link>
    </div>
  );
}

export default function SideBar({ showSidebar, setShowSidebar }) {
  return (
    <div
      className="flex flex-col fixed left-0 top-0 bottom-0 text-white bg-gray-800 space-y-4 z-20 p-4 transform-gpu"
      style={{
        width: 300,
        transition: "0.2s ease-in-out",
        transform: `translateX(${showSidebar ? 0 : -300}px)`,
      }}
    >
      <button
        onClick={() => setShowSidebar(false)}
        className="flex text-2xl text-blue-500"
      >
        <FontAwesomeIcon icon={faTimes} />
      </button>
      <div className="w-5/6 mx-auto">
        <div className="flex justify-between space-x-4">
          <MainButton outline className="w-1/2">
            Login
          </MainButton>
          <MainButton secondary className="w-1/2">
            Register
          </MainButton>
        </div>
        <div className="space-y-4">
          <div className="flex flex-col space-y-4 uppercase tracking-wider font-bold border-b border-gray-600 py-4">
            <Link to="/"> Casino</Link>
            <Link to="/"> Live Casino</Link>
            <Link to="/"> Table Games</Link>
            <Link to="/"> Sports</Link>
            <Link to="/"> Virtual Sports </Link>
            <Link to="/"> Promotions </Link>
          </div>
          {/* <div> Language Selector here </div> */}
          <FooterLinks />
        </div>
      </div>
    </div>
  );
}
