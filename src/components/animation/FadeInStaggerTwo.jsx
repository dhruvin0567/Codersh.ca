import { motion } from "framer-motion";

const animationVariants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
      duration: 0.7,
    },
  },
};

function FadeInStaggerTwo({ children, className = "", id = "" }) {
  return (
    <motion.div
      variants={animationVariants}
      initial="initial"
      whileInView="animate"
      className={className}
      id={id}
    >
      {children}
    </motion.div>
  );
}

function FadeInStaggerTwoChildren({ children, className = "", id = "" }) {
  return (
    <motion.div className={className} id={id} variants={animationVariants}>
      {children}
    </motion.div>
  );
}

export { FadeInStaggerTwo, FadeInStaggerTwoChildren };
