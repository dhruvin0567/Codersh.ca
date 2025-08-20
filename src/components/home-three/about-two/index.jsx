import CheckImg from "../../../assets/images/v3/check.svg";
import Shape1Img from "../../../assets/images/v3/shape1.webp";
import Thumb2Img from "../../../assets/images/v3/thumb2.webp";
import FadeInRight from "../../animation/FadeInRight";

function AboutTwo() {
  return (
    <div className="section aximo-section-padding6 overflow-hidden">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 order-lg-1 offset-lg-1">
            <FadeInRight className="aximo-content-thumb ">
              <img src={Thumb2Img} alt="Thumb2Img" />
              <div className="aximo-thumb-shape2">
                <img src={Shape1Img} alt="Shape1Img" />
              </div>
            </FadeInRight>
          </div>
          <div className="col-lg-6">
            <div className="aximo-default-content familjen-grotesk">
              <h2>Increase revenue with custom SEO</h2>
              <p>
                Our SEO agency will help you reach new audiences, increase your
                website performance, and accelerate your reputation.
              </p>
              <div className="aximo-list-icon">
                <ul>
                  <li>
                    <img src={CheckImg} alt="CheckImg" /> On-page optimizing
                    your web pages to improve rankings
                  </li>
                  <li>
                    <img src={CheckImg} alt="CheckImg" /> Keyword research to
                    identify relevant search and phrases
                  </li>
                  <li>
                    <img src={CheckImg} alt="CheckImg" /> Continuously monitor
                    search engine algorithm changes
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

export default AboutTwo;
