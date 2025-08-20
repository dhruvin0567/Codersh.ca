import { Link } from "react-router-dom";
import RoundShapeImg from "../../../assets/images/v4/round-shape.webp";
import {
  FadeInStaggerTwo,
  FadeInStaggerTwoChildren,
} from "../../animation/FadeInStaggerTwo";

function HeroContent() {
  return (
    <FadeInStaggerTwo className="aximo-hero-content4">
      <FadeInStaggerTwoChildren>
        <p>
          <span>Your trusted business consultants</span>
        </p>
      </FadeInStaggerTwoChildren>
      <FadeInStaggerTwoChildren>
        <h1>
          Transforming your ideas into
          <span className="aximo-hero-shape-title">
            experiences
            <span className="aximo-hero-round-shape">
              <img src={RoundShapeImg} alt="RoundShapeImg" />
            </span>
          </span>
        </h1>
      </FadeInStaggerTwoChildren>
      <FadeInStaggerTwoChildren>
        <p>
          We're dedicated to helping businesses grow and succeed. With years of
          industry experience and a passion for problem-solving, we offer
          top-level consulting services tailored to your unique needs.
        </p>
      </FadeInStaggerTwoChildren>
      <FadeInStaggerTwoChildren className="aximo-hero-btn-wrap">
        <Link className="aximo-default-btn pill blue-btn" to="/contact-us">
          Schedule a meeting
        </Link>

        <Link
          className="aximo-default-btn aximo-default-btn-outline pill outline-white"
          to="/portfolio-one"
        >
          <span className="aximo-label-up">View all projects</span>
          <span className="aximo-label-up">View all projects</span>
        </Link>
      </FadeInStaggerTwoChildren>
    </FadeInStaggerTwo>
  );
}

export default HeroContent;
