import { motion } from "motion/react";

import React from "react";

const LoadingDot1 = {
  display: "block",
  width: "1rem",
  height: "1rem",
  backgroundColor: "black",
  borderRadius: "50%",
};

const LoadingDot2 = {
    display: "block",
    width: "1rem",
    height: "1rem",
    backgroundColor: 'white',
    borderRadius: "50%",
  };

  const LoadingDot3 = {
    display: "block",
    width: "1rem",
    height: "1rem",
    backgroundColor: '#D9181D',
    borderRadius: "50%",
  };

const LoadingContainer = {
  width: "10rem",
  height: "5rem",
  display: "flex",
  justifyContent: "space-around",
};

const ContainerVariants = {
  initial: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const DotVariants = {
  initial: {
    y: "0%",
  },
  animate: {
    y: "100%",
  },
};

const DotTransition = {
  duration: 0.5,
  yoyo: Infinity,
  ease: "easeInOut",
};

const Loader = () => {
  return (
    <div
      style={{
        paddingTop: "5rem",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <motion.div
        style={LoadingContainer}
        variants={ContainerVariants}
        initial="initial"
        animate="animate"
      >
        <motion.span
          style={LoadingDot1}
          variants={DotVariants}
          transition={DotTransition}
        />
        <motion.span
          style={LoadingDot2}
          variants={DotVariants}
          transition={DotTransition}
        />
        <motion.span
          style={LoadingDot3}
          variants={DotVariants}
          transition={DotTransition}
        />
      </motion.div>
    </div>
  );
}

export default Loader