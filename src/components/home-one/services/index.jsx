import Star2Img from "../../../assets/images/v1/star2.webp";
import FadeInStagger from "../../animation/FadeInStagger";
import ServiceCard from "./ServiceCard";

function Services({ services }) {
  return (
    <div className="section aximo-section-padding4">
      <div className="container">
        <div className="aximo-section-title center">
          <h2 className="home-service-header">
            We provide Shopify
            <span className="aximo-title-animation">
              Design & Developmnet
              <span
                className="aximo-title-icon"
                style={{ right: "-30px", position: "relative" }}
              >
                <img src={Star2Img} alt="Star2Img" />
              </span>
            </span>
          </h2>
        </div>
        <div className="aximo-service-wrap">
          <div className="row">
            {services.map((item, index) => (
              <FadeInStagger key={item.id} index={index} className="col-lg-6">
                <ServiceCard service={item} />
              </FadeInStagger>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
