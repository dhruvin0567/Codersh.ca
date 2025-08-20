import FadeInStagger from "../animation/FadeInStagger";
import PortfolioCard from "../portfolio/two/PortfolioCard";

// Static case study data (manually inserted)
const caseStudies = [
  {
    id: 3,
    title: "Shopify-Based Wine E-Commerce Store",
    img: "/images/case-studies/casestudy-cards/madamef-casestudy.webp",
    link: "/case-studies/madame-f",
  },
  {
    id: 4,
    title: "Cocktail E-Commerce Shop Built with Shopify",
    img: "/images/case-studies/casestudy-cards/liberation-casestudy.webp",
    link: "/case-studies/liberation-cocktails",
  },
  {
    id: 5,
    title: "Shopify-Powered Sparkling Wine Shop",
    img: "/images/case-studies/casestudy-cards/van-hunks-casestudy.webp",
    link: "/case-studies/van-hunks",
  },
  {
    id: 6,
    title: "WooCommerce-Powered Grocery and Remittance Platform",
    img: "/images/case-studies/casestudy-cards/pami-gente-casestudy.webp",
    link: "/case-studies/pa-mi-gente",
  },
  {
    id: 7,
    title: "WordPress-Based Financial Services Platform",
    img: "/images/case-studies/casestudy-cards/stellar-credit-casestudy.webp",
    link: "/case-studies/stellar-credit",
  },
  {
    id: 8,
    title: "Shopify E-Commerce Store for Baseball Bats",
    img: "/images/case-studies/casestudy-cards/bergbat-casestudy.webp",
    link: "/case-studies/bergbat",
  },
];

function CaseStudiesdataStatic() {
  return (
    <div className="section aximo-section-padding2 aximo-project-page">
      <div className="container">
        <div className="row">
          {caseStudies.map((caseStudy, index) => (
            <FadeInStagger
              className="col-lg-6"
              key={caseStudy.id}
              index={index}
            >
              <PortfolioCard blog={caseStudy} />
            </FadeInStagger>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CaseStudiesdataStatic;
