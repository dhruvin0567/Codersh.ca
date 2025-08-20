import { Link } from "react-router-dom";
import StarImg from "../assets/images/v1/icon/star2.webp";
import FadeInUp from "../components/animation/FadeInUp";
import Check from "../assets/images/icon/check.svg";
import ArrowRightImg from "../assets/images/v1/icon/arrow-right.svg";
import ThumbImg1 from "../assets/images/team/team1.webp";

function ThankyouPage() {
  return (
    <>
      <div className="Brand-breadcrumb">
        <div className="container">
          <br />
          <br />
          <br />
        </div>
      </div>
      <div className="section thanku-section-padding">
        <div className="container">
          <div className="aximo-coming-title pb-0">
            <h2>
              <span className="aximo-title-animation">
                Thank You
                <span className="aximo-title-icon">
                  <img src={StarImg} alt="star" />
                </span>
              </span>
              <br /> for Reaching Out!
            </h2>
          </div>
          <p className="text-center fs-5">
            Your message has been successfully received. <br /> We appreciate
            your interest in Codersh Web Services and are excited to learn more
            about how we can help elevate your digital presence.
          </p>

          <div className="section thanku-section-padding2">
            <div className="container">
              <div className="row d-flex">
                <div className="col-lg-5 thanku-thumb-container">
                  <div className="aximo-content-thumb thanku-thumb">
                    <img
                      src={ThumbImg1}
                      alt="Thumb"
                      className="thanku-thumb-img"
                      style={{ border: "5px solid black", borderRadius: "50%" }}
                    />
                  </div>
                </div>
                <div className="col-lg-7  colo-12  shopify-services-data">
                  <div className="aximo-default-content">
                    <h2 style={{ fontSize: "50px" }}>Why Choose Codersh?</h2>
                    <div className="aximo-accordion-normal-item d-flex justify-content-center justify-content-lg-start">
                      <div className="text-start">
                        <ul>
                          <li>
                            <img
                              src={Check}
                              alt="check"
                              className=" text-dark me-3 mb-2"
                            />
                            <span className="fw-bold">Innovative Designs:</span>
                            <p className="ms-5">
                              We craft visually appealing, user-centric websites
                              that resonate with your brand.
                            </p>
                          </li>
                          <li>
                            <img
                              src={Check}
                              alt="check"
                              className=" text-dark me-3 mb-2"
                            />
                            <span className="fw-bold">
                              Comprehensive Services:
                            </span>
                            <p className="ms-5">
                              From Shopify and WordPress to mobile app
                              development, our expertise covers every aspect of
                              your digital needs.
                            </p>
                          </li>
                          <li>
                            <img
                              src={Check}
                              alt="check"
                              className=" text-dark me-3 mb-2"
                            />
                            <span className="fw-bold">
                              Client-First Approach:
                            </span>
                            <p className="ms-5">
                              Your success is our priority. We’re dedicated to
                              delivering high-quality, tailored solutions that
                              drive results.
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <FadeInUp className="thanku-home-navbtn">
            <Link className="aximo-errors-btn" to="/">
              Return to homepage
              <span>
                <img src={ArrowRightImg} alt="arrow" />
              </span>
            </Link>
          </FadeInUp>
        </div>
      </div>
    </>
  );
}

export default ThankyouPage;
