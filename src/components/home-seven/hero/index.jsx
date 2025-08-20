import { LazyLoadImage } from "react-lazy-load-image-component";
import HeroShape from "../../../assets/images/v7/hero-shape.webp";
import HeroThumbImg from "../../../assets/images/v7/hero-thumb.webp";
import HeroContent from "./HeroContent";

function Hero() {
  return (
    <div className="aximo-hero-section7">
      <div className="container">
        <div className="row aximo_screenfix_right">
          <div className="col-lg-6 d-flex align-items-center">
            <HeroContent />
          </div>
          <div className="col-lg-6">
            <div className="aximo-hero-thumb7">
              <LazyLoadImage src={HeroThumbImg} alt=" Thumb" effect="blur" />
            </div>
          </div>
        </div>
      </div>
      <div className="aximo-hero-shapev7">
        <img src={HeroShape} alt="Hero Shape" />
      </div>
    </div>
  );
}

export default Hero;
