import { Link } from "react-router-dom";
import Shape4Img from "../../../assets/images/v2/shape4.webp";
import StarImg from "../../../assets/images/v2/star.webp";
import FadeInUp from "../../animation/FadeInUp";

function CallToAction() {
  return (
    <div className="aximo-cta-section aximo-section-padding extra-side-margin position-relative">
      <div className="container">
        <div className="aximo-cta-wrap">
          <h2>Join us on your path to future success</h2>
          <FadeInUp>
            <Link className="aximo-default-btn" to="/contact-us">
              <span className="aximo-label-up">Contact Us</span>
              <span className="aximo-label-up">Contact Us</span>
            </Link>
          </FadeInUp>
        </div>
      </div>
      <div className="aximo-cta-shape1">
        <img src={Shape4Img} alt="Shape4Img" />
      </div>
      <div className="aximo-cta-shape2">
        <img src={StarImg} alt="StarImg" />
      </div>
    </div>
  );
}

export default CallToAction;
