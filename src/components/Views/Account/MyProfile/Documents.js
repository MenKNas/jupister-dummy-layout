import * as React from "react";
import { containerVariants } from "../../../Generic/animationVariants";
import { motion } from "framer-motion";

function Form() {
  return (
    <div className="text-white"> This is going to be the documents form !!</div>
  );
}

export default function Documents() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Form />
    </motion.div>
  );
}
