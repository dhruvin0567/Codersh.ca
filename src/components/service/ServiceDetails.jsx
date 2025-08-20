import SingleImg from "../../assets/images/service/service-single.webp";
import Star2Img from "../../assets/images/v1/star2.webp";
import FadeInUp from "../animation/FadeInUp";
import WorkingApproach from "./WorkingApproach";

function ServiceDetails() {
  return (
    <div className="section aximo-section-padding2 pb-0">
      <div className="container">
        <div className="aximo-service-details-wrap">
          <FadeInUp className="aximo-service-details-thumb">
            <img src={SingleImg} alt="Single img" />
          </FadeInUp>
          <div className="row">
            <div className="col-lg-8">
              <div className="aximo-default-content">
                <h2>
                  <span className="aximo-title-animation">
                    UI/UX for modern
                    <span className="aximo-title-icon">
                      <img src={Star2Img} alt="star" />
                    </span>
                  </span>
                  product development
                </h2>
                <p>
                  UI/UX, which stands for User Interface (UI) and User
                  Experience (UX), are two critical components of software
                  design and development of websites and applications.{" "}
                </p>
                <p>
                  They are often used interchangeably, but they refer to
                  different aspects of the design and user interaction process.
                  Here's a brief overview of each:
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="aximo-user-interface">
                <h3>1/ User Interface (UI):</h3>
                <ul>
                  <li>
                    UI refers to the visual elements and the overall look and
                    feel of a product. It encompasses the design of screens,
                    pages, buttons, icons, and any other visual elements users
                    interact with.
                  </li>
                  <li>
                    UI designers are responsible for creating a visually
                    appealing and consistent design that aligns with the brand
                    or product's identity.
                  </li>
                  <li>
                    Key aspects of UI design include layout, color schemes,
                    typography, icons, and graphical elements.
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="aximo-user-interface">
                <h3>2/ User Experience (UX):</h3>
                <ul>
                  <li>
                    UX focuses on the overall experience of the user when
                    interacting with a product. It encompasses how users feel
                    when they use the product and how easy or challenging it is
                    to accomplish their goals.
                  </li>
                  <li>
                    UX designers work to understand the user's needs, behaviors,
                    and pain points, and they design the product maximizes user
                    satisfaction.
                  </li>
                  <li>
                    Key aspects of UX design include research, information
                    architecture, wireframing, prototyping, usability testing,
                    and user journey mapping.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="aximo-faq-wrap">
            <WorkingApproach />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceDetails;
