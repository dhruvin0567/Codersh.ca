import { Link } from "react-router-dom";
import Shape2Img from "../../../assets/images/v3/shape2.webp";
import Thumb1Img from "../../../assets/images/v3/thumb1.webp";
import FadeInLeft from "../../animation/FadeInLeft";
import FadeInUp from "../../animation/FadeInUp";

function About() {
  return (
    <div className="section aximo-section-padding2">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <FadeInLeft className="aximo-content-thumb">
              <img src={Thumb1Img} alt="Thumb1Img" />
              <div className="aximo-thumb-shape1">
                <img src={Shape2Img} alt="Shape2Img" />
              </div>
            </FadeInLeft>
          </div>
          <div className="col-lg-6 offset-lg-1">
            <div className="aximo-default-content familjen-grotesk">
              <h2>We strive for the best SEO quality</h2>
              <p>
                We are a leading SEO company dedicated to helping brand grow
                their online presence & achieve higher search engine rankings
                and improve digital performance.
              </p>
              <p>
                Whether you re a small local business or a global brand, we
                tailor our SEO services to meet your unique needs & goals.
              </p>
            </div>
            <FadeInUp className="aximo-btn-wrap">
              <Link
                className="aximo-default-btn pill yellow-btn"
                to="/contact-us"
              >
                <span className="aximo-label-up">Explore more</span>
                <span className="aximo-label-up">Explore more</span>
              </Link>
            </FadeInUp>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
