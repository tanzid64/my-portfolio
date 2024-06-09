import { motion } from "framer-motion";

// Variations
const stairAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};

// calculate the reverse index for staggerd delay
const reverseIndex = (index) => {
  const totalSteps = 6; // number of steps
  return totalSteps - index - 1;
};
const Stairs = () => {
  return (
    <>
      {[...Array(6)].map((_, index) => {
        return (
          <motion.div
            key={index}
            variants={stairAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              delay: reverseIndex(index) * 0.1,
              duration: 0.4,
              ease: "easeInOut",
            }}
            className="h-full w-full bg-white relative"
          />
        );
      })}
    </>
  );
};
export default Stairs;
