import { motion } from "framer-motion";
import { useState } from "react";
import NavItem from "./NavItem";

const MobileNavbar = ({ menuItemsData, title }) => {
  const depthLevel = 0;
  const [showMenu, setShowMenu] = useState(false);

  function handleOpenMobileMenu() {
    setShowMenu((prev) => !prev);
  }

  const animationVariants = {
    initial: {
      x: "-100%",
    },
    animate: () => {
      if (showMenu) {
        return {
          x: 0,
        };
      }
    },
  };
  const overlayAnimationVariants = {
    initial: {
      opacity: 0,
      visibility: "hidden",
    },
    animate: () => {
      if (showMenu) {
        return {
          opacity: 1,
          visibility: "visible",
        };
      }
    },
  };

  return (
    <div className="mobile-nav-wrap">
      <div className="mobile-menu-trigger" onClick={handleOpenMobileMenu}>
        <span></span>
      </div>
      {showMenu && (
        <motion.nav
          className="mobile-navbar"
          variants={animationVariants}
          initial="initial"
          animate="animate"
        >
          <div className="mobile-menu-head">
            <div
              className="mobile-menu-head--title"
              onClick={() => (window.location.href = "/")}
            >
              {title}
            </div>
            <div
              className="mobile-menu-head--close"
              onClick={() => setShowMenu(false)}
            >
              &times;
            </div>
          </div>

          <ul>
            {menuItemsData.map((menu, index) => {
              return (
                <NavItem
                  items={menu}
                  key={index}
                  depthLevel={depthLevel}
                  showMenu={showMenu}
                  setShowMenu={setShowMenu}
                />
              );
            })}

            {/* External link added here */}
            <li className="nav-item d-block d-sm-none calendly-nav-item">
              <a
                href="https://calendly.com/codersh-web-services/15min"
                target="_blank"
                rel="noopener noreferrer"
              >
                Free Consultation
              </a>
            </li>
          </ul>
        </motion.nav>
      )}

      <motion.div
        initial="initial"
        animate="animate"
        variants={overlayAnimationVariants}
        className="mobile-nav--overlay"
        onClick={handleOpenMobileMenu}
      ></motion.div>
    </div>
  );
};

export default MobileNavbar;
