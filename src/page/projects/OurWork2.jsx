import { useState } from "react";
import FadeInStagger from "../../components/animation/FadeInStagger";
import PortfolioCard from "../../components/portfolio/two/PortfolioCard";
import BreadCrumb from "../../components/common/Breadcrumb";
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

const portfolioListData = [
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
    name: "Kids Premium Clothing Store",
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

const buttonStyle = {
  padding: "10px 25px",
  marginRight: "10px",
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

const tabContainerStyle = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
};

function OurWork2() {
  const [filter, setFilter] = useState("all-projects");
  const handleFilterChange = (category) => setFilter(category);

  const filteredPortfolio =
    filter === "all-projects"
      ? portfolioListData
      : portfolioListData.filter((portfolio) => portfolio.category === filter);

  const categories = [
    "all-projects",
    "web-development",
    "ecommerce-development",
  ];

  return (
    <>
      <BreadCrumb title="Our Work" />
      <div className="tab-container" style={tabContainerStyle}>
        {categories.map((category) => (
          <button
            key={category}
            style={filter === category ? activeButtonStyle : buttonStyle}
            onClick={() => handleFilterChange(category)}
          >
            {category
              .split("-")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ")}
          </button>
        ))}
      </div>

      <div className="section aximo-project-page aximo-section-padding5 py-5">
        <div className="container-fluid">
          <div className="row">
            {filteredPortfolio.map((portfolio, index) => (
              <FadeInStagger
                className="col-lg-4"
                key={portfolio.id}
                index={index}
              >
                <PortfolioCard portfolio={portfolio} />
              </FadeInStagger>
            ))}
          </div>
        </div>
      </div>

      <style>{`
                @media (max-width: 768px) {
                    .tab-container {
                        flex-direction: column;
                        align-items: center;
                    }
                }
            `}</style>
    </>
  );
}

export default OurWork2;
