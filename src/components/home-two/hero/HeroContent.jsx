import { Link } from "react-router-dom";
import {
  FadeInStaggerTwo,
  FadeInStaggerTwoChildren,
} from "../../animation/FadeInStaggerTwo";

function HeroContent() {
  return (
    <div className="aximo-hero-content2">
      <h1>Start your business growth journey with us</h1>
      <p>
        We believe in the power of innovation and are passionate about helping
        startups thrive. As a startup company, we are a dynamic and innovative
        organization that provides comprehensive support, guidance and resources
        to early stage startups.
      </p>
      <FadeInStaggerTwo className="aximo-hero-btn-wrap center">
        <FadeInStaggerTwoChildren>
          <Link className="aximo-default-btn" to="/contact-us">
            <span className="aximo-label-up">Get In Touch</span>
            <span className="aximo-label-up">Get In Touch</span>
          </Link>
        </FadeInStaggerTwoChildren>
        <FadeInStaggerTwoChildren>
          <Link
            className="aximo-default-btn aximo-default-btn-outline"
            to="/service"
          >
            <span className="aximo-label-up">Explore Our Services</span>
            <span className="aximo-label-up">Explore Our Services</span>
          </Link>
        </FadeInStaggerTwoChildren>
      </FadeInStaggerTwo>
    </div>
  );
}

export default HeroContent;
