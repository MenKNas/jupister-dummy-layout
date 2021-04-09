import * as React from "react";
import { motion } from "framer-motion";
import { containerVariants } from "../../../Generic/containerVariants";

function Form() {
  return <div> This will be the bonuses page</div>;
}

export default function Bonuses() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="text-white"
    >
      <Form />
    </motion.div>
  );
}
