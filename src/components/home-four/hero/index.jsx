import HeroBg from "../../../assets/images/v4/hero-bg.webp";
import HeroContent from "./HeroContent";
import HeroVideo from "./HeroVideo";

function Hero() {
  return (
    <div
      className="aximo-hero-section4"
      style={{ backgroundImage: `url(${HeroBg})` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <HeroContent />
          </div>
          <div className="col-lg-4 d-flex align-items-end justify-content-center">
            <HeroVideo />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
