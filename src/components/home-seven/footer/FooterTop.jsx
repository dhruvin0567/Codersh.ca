import TitleShapImg from "../../../assets/images/v7/title-shape.webp";
import { Link } from "react-router-dom";

function FooterTop() {
  return (
    <div className="row">
      <div className="col-lg-7">
        <h2>
          Let your brand rise to new heights
          <span className="aximo-title-shape">
            <img src={TitleShapImg} alt="title shape" />
          </span>
        </h2>
      </div>
      <div className="col-lg-5 d-flex align-items-center">
        <div className="aximo-title-btn">
          <Link className="aximo-default-btn blue-btn2" to="/contact-us">
            <span className="aximo-label-up">Explore Our Plans</span>
            <span className="aximo-label-up">Explore Our Plans</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FooterTop;
