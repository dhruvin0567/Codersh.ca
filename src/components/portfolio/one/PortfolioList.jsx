import Portfolio1Img from "../../../assets/images/portfolio/p_1.webp";
import Portfolio2Img from "../../../assets/images/portfolio/p_2.webp";
import Portfolio3Img from "../../../assets/images/portfolio/p_3.webp";
import Star2Img from "../../../assets/images/v1/star2.webp";
import FadeInStagger from "../../animation/FadeInStagger";
import PortfolioCard from "./PortfolioCard";

const portfolioListData = [
  {
    id: crypto.randomUUID(),
    title: "Product Design",
    description:
      "Developing the look and feel of physical products, aesthetics, and functionality.",
    img: Portfolio1Img,
  },
  {
    id: crypto.randomUUID(),
    title: "Logo and Branding",
    description:
      "Creating or refreshing a companys logo and developing a cohesive visual identity.",
    img: Portfolio2Img,
  },
  {
    id: crypto.randomUUID(),
    title: "App UI/UX Design",
    description:
      "Designing the UI/UXe for mobile apps and web applications to ensure usability & engagement.",
    img: Portfolio3Img,
  },
];

function PortfolioList() {
  return (
    <div className="aximo-project-one-column">
      <div className="container">
        <div className="aximo-section-title center">
          <h2>
            Have a wide range of
            <span className="aximo-title-animation">
              creative projects
              <span className="aximo-title-icon">
                <img src={Star2Img} alt="star" />
              </span>
            </span>
          </h2>
        </div>
        {portfolioListData.map((portfolio, index) => (
          <FadeInStagger
            className="aximo-project-wrap3"
            key={portfolio.id}
            index={index}
          >
            <PortfolioCard portfolio={portfolio} />
          </FadeInStagger>
        ))}
      </div>
    </div>
  );
}

export default PortfolioList;
