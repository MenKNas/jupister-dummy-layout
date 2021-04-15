import * as React from "react";
import classNames from "classnames";
import { useClickAway } from "react-use";
import { Link } from "react-router-dom";
import MainButton from "../../Buttons/MainButton";
import { LanguageSelector } from "./LanguageSelector";
import { ReactComponent as CloseIcon } from "../../../icons/menu_close_box.svg";
import { ReactComponent as Avatar } from "../../../icons/avatar.svg";
import { ReactComponent as ChevronDown } from "../../../icons/chevron-down.svg";
import { ReactComponent as ChevronUp } from "../../../icons/chevron-up.svg";
import { useLockedScroll } from "../../../hooks/useLockedScroll";
import { useLoginRegister } from "../../LoginRegister";
import { motion } from "framer-motion";
import { subMenuVariants } from "../../Generic/animationVariants";

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

const accountLinks = [
  { name: "Deposit", link: "/account/financials/deposit" },
  { name: "Withdraw", link: "/account/financials/Withdraw" },
  { name: "Pending Withdraws", link: "/account/financials/pendingwithdraws" },
  { name: "Bonuses", link: "/account/profile/bonuses" },
  { name: "Betting History", link: "/account/history/bets" },
];

const authenticatedUser = true;

function RegisteredUserTab({ showSidebar, setShowSidebar, user }) {
  const [showAccountMenu, setShowAccountMenu] = React.useState(false);
  const ref = React.useRef();
  useClickAway(ref, () => setShowAccountMenu(false));
  return (
    <div className="flex flex-col space-y-6" data-component="RegisteredTab">
      <div
        className="relative flex flex-row justify-between items-center"
        ref={ref}
      >
        <div className="flex flex-row justify-evenly space-x-4 items-center">
          <Avatar />
          <div className="flex flex-col">
            <h4 className="text-gray-300 text-xs"> User </h4>
            <span className="text-sm truncate">{user.userMail}</span>
          </div>
          <button onClick={() => setShowAccountMenu((prev) => !prev)}>
            {showAccountMenu ? (
              <ChevronUp stroke="#A9B7D5" />
            ) : (
              <ChevronDown stroke="#A9B7D5" />
            )}
          </button>
        </div>
      </div>
      <motion.div
        data-component="DropDown"
        className={classNames(
          `absolute right-5 top-24 z-10 w-3/5 p-4 bg-bg-secondary rounded-md border border-bd-primary`
        )}
        variants={subMenuVariants}
        initial="exit"
        animate={showAccountMenu ? "enter" : "exit"}
        // exit="exit"
      >
        <div className="flex flex-col space-y-2">
          {accountLinks.map(({ name, link }) => (
            <button
              onClick={() => setShowSidebar((prev) => !prev)}
              className="w-full text-left"
            >
              <Link key={link} to={link}>
                {name}
              </Link>
            </button>
          ))}
          <button
            onClick={() => setShowSidebar((prev) => !prev)}
            className="w-full text-left"
          >
            Log out
          </button>
        </div>
      </motion.div>
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
      className="flex flex-col text-sm space-y-4 text-text-secondary tracking-wider"
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
        className="flex flex-col fixed left-0 top-0 bottom-0 text-white bg-gradient-to-t from-lower-grad to-bg-primary space-y-4 z-10 p-4 transform-gpu"
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
            <div className="-ml-2">
              <LanguageSelector />
            </div>
            <FooterLinks setShowSidebar={setShowSidebar} />
          </div>
        </div>
      </div>
    </>
  );
};
