import * as React from "react";
import { Link } from "react-router-dom";
import MainButton from "../../Buttons/MainButton";
import { ReactComponent as CloseIcon } from "../../../icons/menu_close_box.svg";
import { ReactComponent as Avatar } from "../../../icons/avatar.svg";
import { useLockedScroll } from "../../../hooks/useLockedScroll";
import { useLoginRegister } from "../../LoginRegister";

const links = [
  { name: "Casino", link: "/casino" },
  { name: "Live Casino", link: "/livecasino" },
  { name: "Table Games", link: "/tablegames" },
  { name: "Sports", link: "/sports" },
  { name: "Virtual Sports", link: "/virtualsports" },
  { name: "Promotions", link: "/promotions" },
];

const footerLinks = [
  { name: "About Us", link: "/about" },
  { name: "Contact Us", link: "/contact" },
  { name: "Terms & Conditions", link: "/terms" },
  { name: "Responsible Gaming", link: "/" },
  { name: "Privacy Policy", link: "/" },
];

const authenticatedUser = false;

function RegisteredUserTab({ showSidebar, setShowSidebar, user }) {
  return (
    <div className="flex flex-col space-y-6" data-component="RegisteredTab">
      <Link to="/financials" onClick={() => setShowSidebar(!showSidebar)}>
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row justify-evenly space-x-4 items-center">
            <Avatar />
            <div className="flex flex-col">
              <h4 className="text-gray-300 text-xs"> User </h4>
              <span className="text-sm truncate">{user.userMail}</span>
            </div>
          </div>
        </div>
      </Link>
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

function VisitorUserTab({ setShowSidebar }) {
  const showModal = useLoginRegister();
  return (
    <div
      className="flex flex-col justify-between items-center border-b border-bd-primary pb-4 space-y-8"
      data-component="VisitorTab"
    >
      <img
        src="/assets/brand-logo-main.svg"
        alt="Logo"
        width={130}
        height={80}
      />
      <div className="flex flex-row w-full space-x-4">
        <MainButton
          outline
          className="w-1/2"
          onClick={() => {
            setShowSidebar((prev) => !prev);
            showModal("login");
          }}
        >
          Login
        </MainButton>
        <MainButton
          secondary
          className="w-1/2"
          onClick={() => showModal("register")}
        >
          Register
        </MainButton>
      </div>
    </div>
  );
}

const FooterLinks = React.memo(({ setShowSidebar }) => {
  return (
    <div
      className="flex flex-col text-xs space-y-4 text-text-secondary tracking-wider"
      data-component="FooterLinks"
    >
      {footerLinks.map(({ name, link }) => (
        <Link to={link} key={name} onClick={() => setShowSidebar(false)}>
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
  const ref = React.useRef();
  useLockedScroll(ref, showSidebar);
  return (
    <>
      <div
        data-component="SideBar"
        className="flex flex-col fixed left-0 top-0 bottom-0 text-white bg-bg-primary space-y-4 z-10 p-4 transform-gpu"
        style={{
          width: 320,
          transition: "0.35s ease-out",
          transform: `translateX(${showSidebar ? 0 : -320}px)`,
        }}
        ref={ref}
      >
        <button
          onClick={() => setShowSidebar(false)}
          className="flex text-2xl text-blue-500 w-1/6"
        >
          <CloseIcon />
        </button>
        <div className="px-2">
          {authenticatedUser ? (
            <RegisteredUserTab
              setShowSidebar={setShowSidebar}
              showSidebar={showSidebar}
              user={user}
            />
          ) : (
            <VisitorUserTab setShowSidebar={setShowSidebar} />
          )}
          <div className="space-y-4">
            <div className="flex flex-col space-y-4 uppercase tracking-wider border-b border-bd-primary py-4 font-black italic text-lg">
              {links.map(({ name, link }) => (
                <Link
                  key={name}
                  to={link}
                  onClick={() => setShowSidebar(false)}
                >
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
