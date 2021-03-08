import React from "react";
import { Link } from "react-router-dom";
import MainButton from "../../Buttons/MainButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faTimes,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

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

const authenticatedUser = true;

function RegisteredUserTab({ showSidebar, setShowSidebar, user }) {
  return (
    <div className="flex flex-col space-y-4" data-component="RegisteredTab">
      <div className="flex flex-row justify-between items-center space-x-4">
        <div>
          <div className="flex flex-row justify-evenly space-x-2 items-center">
            <FontAwesomeIcon
              icon={faUser}
              className="bg-blue-500 p-2 w-1/2 text-4xl rounded-lg"
              size="lg"
            />
            <div className="flex flex-col">
              <h4 className="text-gray-300 text-xs"> User </h4>
              <span className="text-sm font-bold truncate">
                {user.userMail}
              </span>
            </div>
          </div>
        </div>
        <div>
          <Link to="/financials" onClick={() => setShowSidebar(!showSidebar)}>
            <button>
              <FontAwesomeIcon icon={faAngleRight} />
            </button>
          </Link>
        </div>
      </div>
      <div className="flex justify-between items-center border-b border-gray-600 pb-4">
        <div>
          <div className="flex flex-col">
            <h4 className="font-bold text-lg">
              {user.totalBalance.toFixed(2)} &euro;
            </h4>
            <span className="text-yellow-300">
              {user.bonusBalance.toFixed(2)} &euro;
            </span>
          </div>
        </div>
        <div>
          <MainButton secondary> Deposit </MainButton>
        </div>
      </div>
    </div>
  );
}

function VisitorUserTab() {
  return (
    <div className="flex justify-between space-x-4" data-component="VisitorTab">
      <MainButton outline className="w-1/2">
        Login
      </MainButton>
      <MainButton secondary className="w-1/2">
        Register
      </MainButton>
    </div>
  );
}

const FooterLinks = React.memo(({ setShowSidebar }) => {
  return (
    <div
      className="flex flex-col text-xs space-y-4 text-white tracking-wider"
      data-component="FooterLinks"
    >
      {footerLinks.map(({ name, link }) => (
        <Link to={link} onClick={() => setShowSidebar(false)}>
          {name}
        </Link>
      ))}
    </div>
  );
});

export const SideBar = ({ showSidebar, setShowSidebar }) => {
  let user = {
    userName: "George Papadopoulos",
    userMail: "papadopoulosg@gmail.com",
    totalBalance: 2500,
    bonusBalance: 200,
  };
  return (
    <>
      <div
        data-component="SideBar"
        className="flex flex-col fixed left-0 top-0 bottom-0 text-white bg-gray-800 space-y-4 z-10 p-4 transform-gpu"
        style={{
          width: 320,
          transition: "0.35s ease-out",
          transform: `translateX(${showSidebar ? 0 : -320}px)`,
        }}
      >
        <button
          onClick={() => setShowSidebar(false)}
          className="flex text-2xl text-blue-500 w-1/6"
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <div className="px-2">
          {authenticatedUser ? (
            <RegisteredUserTab
              setShowSidebar={setShowSidebar}
              showSidebar={showSidebar}
              user={user}
            />
          ) : (
            <VisitorUserTab />
          )}
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
