import { useState } from "react";
import { motion } from "framer-motion";
import Background1Image from "../../assets/images/ourwork/Background-5.webp";
import Background2Image from "../../assets/images/ourwork/New-Project-5.webp";
import Background3Image from "../../assets/images/ourwork/New-Project-4.webp";
import Background4Image from "../../assets/images/ourwork/m-1024x1024.webp";
import Background5Image from "../../assets/images/ourwork/IKKS.webp";
import Background11Image from "../../assets/images/ourwork/Background-3-1.webp";
import Background6Image from "../../assets/images/ourwork/Background-6.webp";
import Background7Image from "../../assets/images/ourwork/New-Project-2-1024x1024.webp";
import Background8Image from "../../assets/images/ourwork/New-Project-1024x1024.webp";
import Background9Image from "../../assets/images/ourwork/New-Project-3-1024x1024.webp";
import Background10Image from "../../assets/images/ourwork/New-Project-1-1024x1024.webp";

const projectData = [
  {
    id: crypto.randomUUID(),
    category: "ecommerce-development",
    img: Background1Image,
    name: "Premium Supplements Brand",
    technology: "Shopify | Bootstrap v5 | JavaScript",
  },
  {
    id: crypto.randomUUID(),
    category: "web-development",
    img: Background2Image,
    name: "Digital Agency | USA",
    technology: "Wordpress | Bootstrap | Stripe",
  },
  {
    id: crypto.randomUUID(),
    category: "ecommerce-development",
    img: Background11Image,
    name: "Kids Primium Clothing Store",
    technology: "Shopify | Liquid | CSS3",
  },
  {
    id: crypto.randomUUID(),
    category: "ecommerce-development",
    img: Background3Image,
    name: "Online Kitchen Accessories",
    technology: "Shopify | CSS3 | JavaScript",
  },
  {
    id: crypto.randomUUID(),
    category: "web-development",
    img: Background4Image,
    name: "Luxury Resort Website",
    technology: "Wordpress | Elementor Pro | Calendly",
  },
  {
    id: crypto.randomUUID(),
    category: "ecommerce-development",
    img: Background5Image,
    name: "Luxury Clothing Brand",
    technology: "PHP | Heroku | Sass",
  },
  {
    id: crypto.randomUUID(),
    category: "ecommerce-development",
    img: Background6Image,
    name: "Clean Water Store",
    technology: "Wordpress + MIVA",
  },
  {
    id: crypto.randomUUID(),
    category: "ecommerce-development",
    img: Background7Image,
    name: "Take Flight",
    technology: "Wordpress | Elementor Pro | Woocommerce",
  },
  {
    id: crypto.randomUUID(),
    category: "web-development",
    img: Background8Image,
    name: "Redesign Hub",
    technology: "Wordpress | Elementor Pro | Calendly",
  },
  {
    id: crypto.randomUUID(),
    category: "web-development",
    img: Background9Image,
    name: "Texas Fowlers",
    technology: "Shift4shop | Bootstrap | JavaScript",
  },
  {
    id: crypto.randomUUID(),
    category: "web-development",
    img: Background10Image,
    name: "Online Book Store",
    technology: "Shift4shop | React | Styled Components",
  },
];

function OurWorkdata() {
  const [activeFilter, setActiveFilter] = useState("all");

  const handleTabClick = (filter) => {
    setActiveFilter(filter);
  };

  const buttonStyle = {
    padding: "9px 24px",
    marginRight: "6px",
    marginBottom: "10px",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "23px",
    display: "inline-block",
    borderRadius: "50px",
    letterSpacing: "0.5px",
    color: "black",
    backgroundColor: "rgba(0, 0, 0, 0.05)",
  };

  const activeButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#bff747",
    color: "black",
  };

  return (
    <>
      <div className="our-work-section">
        <div className="tab-container">
          <button
            style={activeFilter === "all" ? activeButtonStyle : buttonStyle}
            onClick={() => handleTabClick("all")}
            data-filter="all"
          >
            All Projects
          </button>
          <button
            style={
              activeFilter === "ecommerce-development"
                ? activeButtonStyle
                : buttonStyle
            }
            onClick={() => handleTabClick("ecommerce-development")}
            data-filter="ecommerce-development"
          >
            Ecommerce Development
          </button>
          <button
            style={
              activeFilter === "web-development"
                ? activeButtonStyle
                : buttonStyle
            }
            onClick={() => handleTabClick("web-development")}
            data-filter="web-development"
          >
            Web Development
          </button>
        </div>

        <div className="container-fluid pb-5">
          <div className="row">
            {projectData.map(
              (project) =>
                (activeFilter === "all" ||
                  activeFilter === project.category) && (
                  <div
                    className="col-lg-3 project"
                    data-category={project.category}
                    key={project.id}
                  >
                    <motion.div
                      className="work-card"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <img
                        src={project.img}
                        alt={project.name}
                        className="work-image"
                      />
                      <div className="about-work">
                        <h5 className="work-name">{project.name}</h5>
                        <p className="work-technology">{project.technology}</p>
                      </div>
                    </motion.div>
                  </div>
                )
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default OurWorkdata;
