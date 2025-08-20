import Shape2Img from "../../../assets/images/v6/shapes2.webp";
import NextImg from "../../../assets/images/v6/next.svg";
import NextWhiteImg from "../../../assets/images/v6/next-white.svg";
import TextImg from "../../../assets/images/v6/image.webp";

function Hero() {
  return (
    <div className="aximo-hero-section5 bg-light7 position-relative">
      <div className="container">
        <div className="aximo-hero-content6 overflow-hidden">
          <div className="aximo-hero-title">
            <div className="aximo-hero-text">Tailored interior</div>
            <div className="aximo-marquee-one">
              <div className="aximo-infinite">
                {[...Array(18)].map(() => (
                  <a key={crypto.randomUUID()} href="">
                    <img src={NextImg} alt="next" />
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="aximo-hero-title">
            <div className="aximo-hero-text">design</div>
            <img src={TextImg} alt="TextImg" />
            <div className="aximo-hero-text"> that speaks</div>
          </div>
          <div className="aximo-hero-title">
            <div className="aximo-hero-text">to your style</div>
            <div className="aximo-marquee-two">
              <div className="aximo-infinite two">
                {[...Array(18)].map(() => (
                  <a key={crypto.randomUUID()} href="">
                    to your style <img src={NextWhiteImg} alt="Next" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="aximo-p-shape z-index">
        <img src={Shape2Img} alt="Shape" />
      </div>
    </div>
  );
}

export default Hero;
