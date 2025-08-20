import { motion } from "framer-motion";
import DropdownItem from "./DropdownItem";

const Dropdown = ({
  submenus,
  dropdown,
  depthLevel,
  showMenu,
  setShowMenu,
}) => {
  depthLevel = depthLevel + 1;

  const dropdownAnimationVariants = {
    initial: {
      opacity: 0,
      height: 0,
      visibility: "hidden",
    },
    animate: () => {
      if (dropdown) {
        return {
          opacity: 1,
          height: "auto",
          visibility: "visible",
          transition: {
            duration: 0.25,
            type: "spring",
          },
        };
      }
    },
  };

  return (
    <motion.ul
      className={`sub-menu level-${depthLevel}`}
      variants={dropdownAnimationVariants}
      initial="initial"
      animate="animate"
    >
      {submenus.map((submenu, index) => (
        <DropdownItem
          items={submenu}
          key={index}
          depthLevel={depthLevel}
          showMenu={showMenu}
          setShowMenu={setShowMenu}
        />
      ))}
    </motion.ul>
  );
};

export default Dropdown;
