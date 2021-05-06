export const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0,
      duration: 0,
    },
  },
  exit: {
    // x: "100vw",
    opacity: 0,
    // transition: { ease: "easeInOut" },
  },
};

export const accountMenuVariants = {
  hidden: {
    x: "100vw",
  },
  visible: {
    x: 0,
    transition: {
      // delay: 0.1,
      duration: 0,
    },
  },
  exit: {
    // x: "100vw",
    opacity: 0,
    // transition: { ease: "easeInOut" },
  },
};

// export const slideContainerVariant = {
//   hidden: {
//     x: "-100vw",
//   },
//   visible: {
//     x: 0,
//     transition: {
//       // delay: 0.25,
//       duration: 0.5,
//     },
//   },
//   exit: {
//     x: "-100vw",
//     opacity: 0,
//     transition: { ease: "easeInOut" },
//   },
// };

export const subMenuVariants = {
  enter: {
    opacity: 1,
    rotateX: 0,
    transition: {
      duration: 0,
    },
    display: "block",
  },
  exit: {
    opacity: 0,
    rotateX: -15,
    transition: {
      duration: 0,
      delay: 0,
    },
    transitionEnd: {
      display: "none",
    },
  },
};

// export const containerVariants = {
//   hidden: {
//     opacity: 0,
//   },
//   visible: {
//     opacity: 1,
//     transition: {
//       delay: 0.25,
//       duration: 0.5,
//     },
//   },
//   exit: {
//     // x: "100vw",
//     opacity: 0,
//     transition: { ease: "easeInOut" },
//   },
// };

// export const accountMenuVariants = {
//   hidden: {
//     x: "100vw",
//   },
//   visible: {
//     x: 0,
//     transition: {
//       // delay: 0.1,
//       duration: 0.5,
//     },
//   },
//   exit: {
//     // x: "100vw",
//     opacity: 0,
//     transition: { ease: "easeInOut" },
//   },
// };

// // export const slideContainerVariant = {
// //   hidden: {
// //     x: "-100vw",
// //   },
// //   visible: {
// //     x: 0,
// //     transition: {
// //       // delay: 0.25,
// //       duration: 0.5,
// //     },
// //   },
// //   exit: {
// //     x: "-100vw",
// //     opacity: 0,
// //     transition: { ease: "easeInOut" },
// //   },
// // };

// export const subMenuVariants = {
//   enter: {
//     opacity: 1,
//     rotateX: 0,
//     transition: {
//       duration: 0.45,
//     },
//     display: "block",
//   },
//   exit: {
//     opacity: 0,
//     rotateX: -15,
//     transition: {
//       duration: 0.45,
//       delay: 0.1,
//     },
//     transitionEnd: {
//       display: "none",
//     },
//   },
// };
