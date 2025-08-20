import Icon1Img from "../../../assets/images/v3/icon1.svg";
import Icon2Img from "../../../assets/images/v3/icon2.svg";
import Icon3Img from "../../../assets/images/v3/icon3.svg";
import Icon4Img from "../../../assets/images/v3/icon4.svg";
import StarShapeHalfImg from "../../../assets/images/v3/star-shape-half.webp";
import FadeInStagger from "../../animation/FadeInStagger";
import ServiceCard from "./ServiceCard";

const servicesData = [
  {
    id: crypto.randomUUID(),
    title: "On-Page SEO",
    description:
      "On-page SEO aims to improve users website content and structure to improve its ranking on search engine results pages.",
    img: Icon1Img,
  },
  {
    id: crypto.randomUUID(),
    title: "Technical SEO",
    description:
      "Technical SEO helps search engines crawl & index a site more effectively. Its performance and accessibility to search engines.",
    img: Icon2Img,
  },
  {
    id: crypto.randomUUID(),
    title: "Keyword Research",
    description:
      "We perform keyword research to identify the most relevant and high-traffic keywords and phrases for a client's industry.",
    img: Icon3Img,
  },
  {
    id: crypto.randomUUID(),
    title: "Content Creation",
    description:
      "Content can take many forms, including blog posts, articles, videos, infographics & high-quality and informative content.",
    img: Icon4Img,
  },
];

function Services() {
  return (
    <div className="section aximo-section-padding dark-bg overflow-hidden position-relative">
      <div className="container">
        <div className="aximo-section-title center familjen-grotesk light">
          <h2>Our professional SEO services for you</h2>
        </div>
        <div className="aximo-iconbox-column">
          {servicesData.map((service, index) => (
            <FadeInStagger key={service.id} index={index}>
              <ServiceCard service={service} />
            </FadeInStagger>
          ))}
        </div>
      </div>

      <div className="aximo-iconbox-shape">
        <img src={StarShapeHalfImg} alt="StarShapeHalfImg" />
      </div>
    </div>
  );
}

export default Services;
