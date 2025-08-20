import { motion } from "framer-motion";

const animationVariants = {
  initial: {
    opacity: 0,
    x: -50,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
    },
  },
};

function FadeInLeft({ children, className = "" }) {
  return (
    <motion.div
      variants={animationVariants}
      initial="initial"
      whileInView="animate"
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default FadeInLeft;
