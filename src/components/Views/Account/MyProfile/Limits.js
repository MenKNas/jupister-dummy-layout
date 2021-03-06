import * as React from "react";
import { motion } from "framer-motion";
import { containerVariants } from "../../../Generic/animationVariants";

function Form() {
  return <div> This will be the limits page</div>;
}

export default function Limits() {
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
