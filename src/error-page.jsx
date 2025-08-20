import { Link } from "react-router-dom";
import FadeInUp from "./components/animation/FadeInUp";
import ErrorImg from "/src/assets/images/about/404.webp";
import ArrowRightImg from "/src/assets/images/icon/arrow-right.svg";
import Star2Img from "/src/assets/images/v1/star2.webp";

export default function ErrorPage() {
  return (
    <div className="section">
      <div className="container">
        <div className="aximo-errors-wrap">
          <div className="aximo-errors-thumb">
            <img src={ErrorImg} alt="Error" />
          </div>
          <div className="aximo-errors-title">
            <h2>
              We can’t find the page
              <span className="aximo-title-animation">
                you are looking for
                <span className="aximo-title-icon">
                  <img src={Star2Img} alt="StarImg" />
                </span>
              </span>
            </h2>
          </div>
          <FadeInUp>
            <Link className="aximo-errors-btn" to="/">
              Return to homepage
              <span>
                <img src={ArrowRightImg} alt="arrow" />
              </span>
            </Link>
          </FadeInUp>
        </div>
      </div>
    </div>
  );
}
