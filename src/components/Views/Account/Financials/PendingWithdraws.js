import * as React from "react";
import { motion } from "framer-motion";
import { containerVariants } from "../../../Generic/animationVariants";

export default function PendingWithdraws() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="p-3"
    >
      Pending withdraws here
    </motion.div>
  );
}
