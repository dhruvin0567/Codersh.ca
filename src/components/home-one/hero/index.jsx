// import FadeInRight from "../../animation/FadeInRight";
import FadeInRight from "../../animation/FadeInRight";
import HeroContent from "./HeroContent";
import HeroThumbs from "./HeroThumbs";

function HeroSection() {
  return (
    <div className="aximo-hero-section dark-bg">
      <div className="container position-relative">
        <div className="row">
          <div className="col-lg-8 order-2 order-lg-1 hero-adjsutment mt-5 mt-lg-0">
            <HeroContent />
          </div>
          <div className="col-lg-4 order-1 order-lg-2">
            <FadeInRight>
              <HeroThumbs />
            </FadeInRight>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
