import Shape3Img from "../../../assets/images/v3/shape3.webp";
import Thumb3Img from "../../../assets/images/v3/thumb3.webp";
import FadeInUp from "../../animation/FadeInUp";
import StepsAccordion from "./StepsAccordion";

function SeoSteps() {
  return (
    <div className="section aximo-section-padding2">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="aximo-content-thumb-wrap">
              <FadeInUp className="aximo-content-thumb2">
                <img src={Thumb3Img} alt="Thumb3Img" />
              </FadeInUp>
              <div className="aximo-thumb-shape1">
                <img src={Shape3Img} alt="Shape3Img" />
              </div>
            </div>
          </div>
          <div className="col-lg-6 offset-lg-1">
            <div className="aximo-default-content familjen-grotesk">
              <h2>Our simplified & impactful steps</h2>
              <p>
                We will work to understand more about user s business and goals
                & create a simple step-by-step SEO plan to help them.
              </p>

              <StepsAccordion />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SeoSteps;
