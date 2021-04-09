export const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.25,
      duration: 0.5,
    },
  },
  exit: {
    // x: "100vw",
    opacity: 0,
    transition: { ease: "easeInOut" },
  },
};
