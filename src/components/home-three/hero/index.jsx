import HeroContent from "./HeroContent";
import HeroThumb from "./HeroThumb";

function Hero() {
  return (
    <div className="aximo-hero-section3">
      <div className="container">
        <div className="row aximo_screenfix_right">
          <div className="col-lg-6 d-flex align-items-center">
            <HeroContent />
          </div>
          <div className="col-lg-6">
            <HeroThumb />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
