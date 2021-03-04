import React from "react";
import { Link } from "react-router-dom";
import MainButton from "../../Buttons/MainButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const links = [
  { name: "Casino", link: "/casino" },
  { name: "Live Casino", link: "/" },
  { name: "Table Games", link: "/" },
  { name: "Sports", link: "/" },
  { name: "Virtual Sports", link: "/" },
  { name: "Promotions", link: "/" },
];

const footerLinks = [
  { name: "About Us", link: "/about" },
  { name: "Contact Us", link: "/" },
  { name: "Terms & Conditions", link: "/" },
  { name: "Responsible Gaming", link: "/" },
  { name: "Privacy Policy", link: "/" },
];

const FooterLinks = React.memo(({ setShowSidebar }) => {
  return (
    <div className="flex flex-col text-xs space-y-4 text-white tracking-wider">
      {footerLinks.map(({ name, link }) => (
        <Link to={link} onClick={() => setShowSidebar(false)}>
          {name}
        </Link>
      ))}
    </div>
  );
});

export const SideBar = ({ showSidebar, setShowSidebar }) => {
  return (
    <>
      <div
        className="flex flex-col fixed left-0 top-0 bottom-0 text-white bg-gray-800 space-y-4 z-10 p-4 transform-gpu"
        style={{
          width: 300,
          transition: "0.35s ease-out",
          transform: `translateX(${showSidebar ? 0 : -300}px)`,
        }}
      >
        <button
          onClick={() => setShowSidebar(false)}
          className="flex text-2xl text-blue-500 w-1/6"
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
              {links.map(({ name, link }) => (
                <Link to={link} onClick={() => setShowSidebar(false)}>
                  {name}
                </Link>
              ))}
            </div>
            {/* <div> Language Selector here </div> */}
            <FooterLinks setShowSidebar={setShowSidebar} />
          </div>
        </div>
      </div>
    </>
  );
};
