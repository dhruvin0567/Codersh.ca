import { Link } from "react-router-dom";
import Thumb1Img from "../../../assets/images/v5/thumb1.webp";
import FadeInLeft from "../../animation/FadeInLeft";
import FadeInUp from "../../animation/FadeInUp";

function About() {
  return (
    <div className="section aximo-section-padding4">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <FadeInLeft className="aximo-content-thumb3 ">
              <img src={Thumb1Img} alt="Thumb" />
            </FadeInLeft>
          </div>
          <div className="col-lg-7 d-flex align-items-center">
            <div className="aximo-default-content libre-font m-left-gap-small">
              <h2>Making your brand bigger than ever</h2>
              <p>
                We help businesses & organizations promote their products,
                services or brands in the online world with 12 years of
                experience. We have become a leader in digital experiences, web
                design, and branding.{" "}
              </p>
              <p>
                We love what we do with our clients to ensure their positioning
                and digital transformation ensure the business meets every
                standard.
              </p>
              <FadeInUp className="aximo-btn-wrap">
                <Link
                  className="aximo-default-btn pill corn-btn"
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
    </div>
  );
}

export default About;
