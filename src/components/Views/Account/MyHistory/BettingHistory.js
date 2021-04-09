import * as React from "react";
import { motion } from "framer-motion";
import { containerVariants } from "../../../Generic/animationVariants";

export default function BettingHistory() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="text-white"
    >
      Betting history
    </motion.div>
  );
}
