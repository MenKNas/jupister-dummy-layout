import * as React from "react";
import { useTranslation, Trans } from "react-i18next";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { containerVariants } from "../../../Generic/animationVariants";
import { Alert, AlertContent, AlertTitle } from "../../../Generic/Alert";

function Disabled() {
  return (
    <Alert status="info" className="rounded-sm">
      {/* <Trans i18nKey={`global.${type}_disabled`}> */}
      <AlertTitle className="uppercase font-black">
        Withdraw disabled
      </AlertTitle>
      <AlertContent>
        In order to make a withdrawal of your winnings, your gaming account must
        be fully verified. Visit our
        <Link to="/templates/info/help"> Know Your Customer (KYC) </Link>
        section to find out all the necessary information about our verification
        process and when ready
        <Link to="/account/profile/documents"> Click here</Link> to upload your
        documents.
      </AlertContent>
      {/* </Trans> */}
    </Alert>
  );
}

export default function Withdraw() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="p-3"
    >
      <motion.div className="w-9/10 mx-auto my-4">
        <Disabled />
      </motion.div>
    </motion.div>
  );
}
