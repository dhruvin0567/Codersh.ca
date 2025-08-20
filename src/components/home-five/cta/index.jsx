import { Link } from "react-router-dom";
import Shape4Img from "../../../assets/images/v5/shape4.webp";
import FadeInUp from "../../animation/FadeInUp";

function Cta() {
  return (
    <div className="aximo-cta2-section aximo-section-padding extra-side-margin green-bg">
      <div className="container">
        <div className="aximo-cta2-wrap">
          <h2>Have a project in mind? Let's work together!</h2>
          <p>
            We provides exceptional digital marketing services to help
            businesses grow our clients online presence. We guarantee top-notch
            quality.
          </p>
          <FadeInUp>
            <Link className="aximo-default-btn corn-btn pill" to="/contact-us">
              <span className="aximo-label-up">Get In Touch</span>
              <span className="aximo-label-up">Get In Touch</span>
            </Link>
          </FadeInUp>
        </div>
      </div>
      <div className="aximo-cta-shape3">
        <img src={Shape4Img} alt="shape" />
      </div>
    </div>
  );
}

export default Cta;
