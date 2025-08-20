import Thumb1Img from "../../../assets/images/v2/h-thumb1.webp";
import Thumb2Img from "../../../assets/images/v2/h-thumb2.webp";
import Thumb3Img from "../../../assets/images/v2/h-thumb3.webp";
import Thumb4Img from "../../../assets/images/v2/h-thumb4.webp";
import Thumb5Img from "../../../assets/images/v2/h-thumb5.webp";
import {
  FadeInStaggerTwo,
  FadeInStaggerTwoChildren,
} from "../../animation/FadeInStaggerTwo";

function HeroThumbs() {
  return (
    <FadeInStaggerTwo className="aximo-hero-thumb-wrap">
      <FadeInStaggerTwoChildren className="aximo-hero-thumb-item">
        <img src={Thumb1Img} alt="Thumb images" />
      </FadeInStaggerTwoChildren>
      <FadeInStaggerTwoChildren className="aximo-hero-thumb-item">
        <img src={Thumb2Img} alt="Thumb images" />
      </FadeInStaggerTwoChildren>
      <FadeInStaggerTwoChildren className="aximo-hero-thumb-item">
        <img src={Thumb3Img} alt="Thumb images" />
      </FadeInStaggerTwoChildren>
      <FadeInStaggerTwoChildren className="aximo-hero-thumb-item">
        <img src={Thumb4Img} alt="Thumb images" />
      </FadeInStaggerTwoChildren>
      <FadeInStaggerTwoChildren className="aximo-hero-thumb-item">
        <img src={Thumb5Img} alt="Thumb images" />
      </FadeInStaggerTwoChildren>
    </FadeInStaggerTwo>
  );
}

export default HeroThumbs;
