import Team1Img from "../../assets/images/team/team1.webp";
import Star2Img from "../../assets/images/v1/star2.webp";
import FadeInUp from "../animation/FadeInUp";

function SingleTeamDetails() {
  return (
    <div className="section aximo-section-padding2">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <FadeInUp className="aximo-team-details-thumb">
              <img src={Team1Img} alt="Team" />
            </FadeInUp>
          </div>
          <div className="col-lg-7 d-flex align-items-center">
            <div className="aximo-default-content m-left-gap">
              <h2>
                <span className="aximo-title-animation">
                  Let's introduce
                  <span className="aximo-title-icon">
                    <img src={Star2Img} alt="Star" />
                  </span>
                </span>{" "}
                Mr. Andrew Mark
              </h2>
              <p>
                Andrew Mark is the CEO of our design agency. He plays a key role
                in overseeing the agency's operations, growth and strategic
                direction.
              </p>
              <p>
                As the leader of the organization, he also sets the company's
                vision, mission, and values. He spent 15 years providing
                strategic direction and ensuring the organization's goals and
                objectives were met.
              </p>
              <div className="aximo-social-icon aximo-btn-wrap">
                <ul>
                  <li>
                    <a href="https://twitter.com" target="_blank">
                      <i className="icon-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://facebook.com" target="_blank">
                      <i className="icon-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://instagram.com" target="_blank">
                      <i className="icon-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://linkedin.com" target="_blank">
                      <i className="icon-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleTeamDetails;
