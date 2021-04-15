import * as React from "react";
import { Switch, Route, Redirect, useHistory } from "react-router";
import { NavLink, useRouteMatch } from "react-router-dom";
import Financials from "../Financials";
import MyProfile from "../MyProfile";
import MyHistory from "../MyHistory";
import { UserInfo } from "../UserInfo";
import { ReactComponent as ChevronRight } from "../../../../icons/chevron-right.svg";
import { ReactComponent as ChevronLeft } from "../../../../icons/chevron-left.svg";
import { Modal, ModalBody, ModalHeader } from "../../../NewModal";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-use";
import { accountMenuVariants } from "../../../Generic/animationVariants";
import { CloseButton } from "../../../Buttons/CloseButton";
// import useWindowSize from "../../../hooks/useWindowSize";
// import Documents from "../Documents";
// import Financials from "../Financials";

const menuSections = [
  {
    title: "My Profile",
    links: [
      { url: "myprofile/personalinfo", name: "Personal Info" },
      { url: "myprofile/documents", name: "Documents" },
      { url: "myprofile/limits", name: "Limits" },
      { url: "myprofile/changepassword", name: "Change Password" },
      { url: "myprofile/bonuses", name: "Bonuses" },
    ],
  },
  {
    title: "Financials",
    links: [
      { url: "financials/deposit", name: "Deposit" },
      { url: "financials/withdraw", name: "Withdraw" },
      { url: "financials/pendingwithdraws", name: "Pending Withdraws" },
    ],
  },
  {
    title: "History",
    links: [
      { url: "history/bets", name: "Betting History" },
      { url: "history/statement", name: "Account Statement" },
      { url: "history/profitnloss", name: "Profit & Loss" },
    ],
  },
];

function MobileAccountMenu({ onClose }) {
  let { path } = useRouteMatch();
  let user = {
    userName: "George Papadopoulos",
    userMail: "papadopoulosg@gmail.com",
    totalBalance: 2500,
    bonusBalance: 200,
  };
  return (
    <motion.div
      variants={accountMenuVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="bg-bg-account-primary py-3 px-4 flex justify-between items-center">
        <div className="text-white font-black uppercase text-2xl">
          My Account
        </div>
        <CloseButton onClick={() => onClose()} />
      </div>
      <div className="space-y-2 p-2.5 md:p-4 pt-0">
        <UserInfo user={user} />
        {menuSections.map((section) => (
          <div className="flex flex-col space-y-1" key={section.title}>
            <h3 className="font-thin text-text-secondary"> {section.title}</h3>
            {section.links.map((link) => (
              <NavLink
                key={link.name}
                to={`${path}/${link.url}`}
                className="bg-bg-secondary pl-3 p-2 w-full rounded-md text-white"
                exact
              >
                <div className="flex justify-between">
                  <span>{link.name} </span>
                  <span>
                    <ChevronRight stroke="#fff" />
                  </span>
                </div>
              </NavLink>
            ))}
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export function MobileAccount() {
  return (
    <div className="bg-bg-primary">
      <MobileActiveSection />
    </div>
  );
}

function HeaderForPage({ title }) {
  return (
    <div className="grid grid-cols-3 items-center py-2 bg-bg-account-primary">
      <div>
        <NavLink
          to="/account"
          className="text-sm text-text-secondary flex items-center "
        >
          <ChevronLeft stroke="#A9B7D5" /> <span> Back </span>
        </NavLink>
      </div>
      <div>
        <h2 className="uppercase text-2xl font-black text-white whitespace-nowrap">
          {title}
        </h2>
      </div>
    </div>
  );
}

function MobileActiveSection() {
  let { path } = useRouteMatch();
  let history = useHistory();
  let location = useLocation();
  const close = () => history.push("/");
  const ref = React.useRef();
  return (
    <div>
      <Modal animated ref={ref}>
        <ModalBody onClose={close} className="bg-bg-primary" hideCloseBtn>
          <AnimatePresence>
            <Switch location={location} key={location.key}>
              <Route exact path={path}>
                <MobileAccountMenu onClose={close} />
              </Route>
              <Route path={`${path}/myprofile`}>
                <ModalHeader onClose={close} overide>
                  <HeaderForPage title="My Profile"></HeaderForPage>
                </ModalHeader>
                <MyProfile />
              </Route>
              <Route path={`${path}/financials`}>
                <ModalHeader onClose={close} overide>
                  <HeaderForPage title="Financials"></HeaderForPage>
                </ModalHeader>
                <Financials />
              </Route>
              <Route path={`${path}/history`}>
                <ModalHeader onClose={close} overide>
                  <HeaderForPage title="History"></HeaderForPage>
                </ModalHeader>
                <MyHistory />
              </Route>
              <Route path="*">
                <Redirect to="/" />
              </Route>
            </Switch>
          </AnimatePresence>
        </ModalBody>
      </Modal>
    </div>
  );
}
