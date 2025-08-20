import { LazyLoadImage } from "react-lazy-load-image-component";
import ThumbImg from "../../../assets/images/v3/hero-thumb.webp";
import ShapeAynaImg from "../../../assets/images/v3/shape-ayna.webp";
import ShapeMonitorImg from "../../../assets/images/v3/shape-monitor.webp";
import StarShapeImg from "../../../assets/images/v3/star-shape.webp";
import FadeInRight from "../../animation/FadeInRight";

function HeroThumb() {
  return (
    <div className="aximo-hero-thumb3-wrap">
      <div className="aximo-hero-thumb3">
        <LazyLoadImage src={ThumbImg} alt=" Thumb" effect="blur" />
        <div className="aximo-hero-thumb-shape2">
          <img src={ShapeMonitorImg} alt="ShapeMonitorImg" />
        </div>
        <div className="aximo-hero-thumb-shape3">
          <img src={ShapeAynaImg} alt="ShapeAynaImg" />
        </div>
      </div>
      <div className="aximo-hero-thumb-shape1">
        <FadeInRight>
          <img src={StarShapeImg} alt="StarShapeImg" />
        </FadeInRight>
      </div>
    </div>
  );
}

export default HeroThumb;
