import { motion } from "framer-motion";

const animationVariants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: 0.03 * index,
    },
  }),
};

function FadeInStagger({ children, className = "", index, style }) {
  return (
    <motion.div
      className={className}
      variants={animationVariants}
      initial="initial"
      whileInView="animate"
      custom={index + 1}
      style={style}
    >
      {children}
    </motion.div>
  );
}

export default FadeInStagger;
