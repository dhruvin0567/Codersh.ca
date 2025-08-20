import CountUp from "react-countup";
import { Link } from "react-router-dom";
import ShapeImg from "../../../assets/images/v6/shapes.webp";
import Thumb1Img from "../../../assets/images/v6/thumb-v6-1.webp";
import FadeInUp from "../../animation/FadeInUp";

function About() {
  return (
    <div className="section dark-bg2 aximo-section-padding position-relative">
      <div id="aximo-counter"></div>
      <div className="container">
        <div className="aximo-section-title light playfair center max-width-xl">
          <h2>We are professional interior design experts</h2>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 order-lg-2">
            <FadeInUp className="aximo-v6-thumb1">
              <img src={Thumb1Img} alt="About" />
            </FadeInUp>
          </div>
          <div className="col-lg-6 d-flex align-items-center">
            <div className="aximo-default-content-wrap">
              <div className="aximo-default-content light large">
                <p>
                  We are an experienced interior design firm offering a
                  professional service specializing in creating and also
                  enhancing interior spaces for residential, commercial or other
                  types of buildings.
                </p>
                <p>
                  We are a team of skilled and quality interior designers who
                  are trained and skilled in the art and science of designing
                  spaces to meet the functional and aesthetic needs of our
                  clients.
                </p>
              </div>
              <FadeInUp className="aximo-counter-wrap6">
                <div className="aximo-counter-data6">
                  <h2>
                    <span className="aximo-counter">
                      <CountUp
                        end={15}
                        duration={3}
                        redraw={true}
                        enableScrollSpy
                      />
                    </span>
                    +
                  </h2>
                  <p>
                    Years of work <br /> experience
                  </p>
                </div>
                <div className="aximo-counter-data6">
                  <h2>
                    <span className="aximo-counter">
                      <CountUp
                        end={2}
                        duration={3}
                        redraw={true}
                        enableScrollSpy
                      />
                    </span>
                    k
                  </h2>
                  <p>
                    successful <br /> projects done
                  </p>
                </div>
              </FadeInUp>
              <div className="aximo-extra-mt text-right">
                <Link
                  className="aximo-default-btn green-btn pill shadow-white"
                  to="/contact-us"
                >
                  <span>Read Our Story</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="aximo-footer-shape">
        <img src={ShapeImg} alt="Shape" />
      </div>
    </div>
  );
}

export default About;
