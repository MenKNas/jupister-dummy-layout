import * as React from "react";
import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import { gql, useQuery, useMutation } from "@apollo/client";
import { useTranslation, Trans } from "react-i18next";
import { ErrorsList } from "../../../Generic/ErrorsList";
import { containerVariants } from "../../../Generic/animationVariants";
import { Alert, AlertContent } from "../../../Generic/Alert";

// const GET_PENDING_WITHDRAWS = gql`
//   query coreGetPendingWithdraws {
//     user: coreGetCurrentUser {
//       id
//       pendingWithdraws {
//         id
//         created
//         category
//         provider
//         brand
//         amount
//         currency
//       }
//     }
//   }
// `;

// const CANCEL_WITHDRAW = gql`
//   mutation coreCancelWithdraw($id: ID!) {
//     response: coreCancelWithdraw(id: $id)
//   }
// `;

export default function PendingWithdraws() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="p-3"
    >
      <div className="w-7/10 mx-auto my-10">
        <Alert status="info">
          <AlertContent className="text-center">
            {/* <Trans i18nKey="global.no_pending_withdraws_found"> */}
            No pending withdraws
            {/* <Link to="/account/financials/withdraw">
              Click here to request a withdraw.
            </Link> */}
            {/* </Trans> */}
          </AlertContent>
        </Alert>
      </div>
    </motion.div>
  );
}
