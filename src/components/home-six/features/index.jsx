import { Link } from "react-router-dom";
import Box1Img from "../../../assets/images/v6/imagebox1.webp";
import FadeInStagger from "../../animation/FadeInStagger";
import FeatureCard from "./FeatureCard";

const featuresData = [
  {
    id: crypto.randomUUID(),
    title: "Aesthetic Design",
    description:
      "Demonstrates a keen eye for design, ensuring each project reflects a high level of aesthetic appeal.",
    img: Box1Img,
  },
  {
    id: crypto.randomUUID(),
    title: "Affordable Pricing",
    description:
      "We always ensure a balance between affordability and also delivering a high-quality end product.",
    img: Box1Img,
  },
  {
    id: crypto.randomUUID(),
    title: "Professional Team",
    description:
      "We boast of a team of skilled interior designers, architects & support staff with functional experience",
    img: Box1Img,
  },
];

function Features() {
  return (
    <div className="section aximo-section-padding2">
      <div className="container">
        <div className="row">
          {featuresData.map((feature, index) => (
            <FadeInStagger
              className="col-lg-4 col-md-6"
              index={index}
              key={feature.id}
            >
              <FeatureCard feature={feature} />
            </FadeInStagger>
          ))}
        </div>
        <div className="aximo-bottom-center">
          <Link className="aximo-default-btn green-btn pill" to="/service">
            <span>Explore More Features</span>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Features;
