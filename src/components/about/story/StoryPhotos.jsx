import Story1Img from "../../../assets/images/about/story1-1.webp";
import Story2Img from "../../../assets/images/about/story2-1.webp";
import Story3Img from "../../../assets/images/about/story3-1.webp";
import Story4Img from "../../../assets/images/about/story4-1.webp";
import Story5Img from "../../../assets/images/about/story5-1.webp";
import Story6Img from "../../../assets/images/about/story6-1.webp";
import {
  FadeInStaggerTwo,
  FadeInStaggerTwoChildren,
} from "../../animation/FadeInStaggerTwo";

function StoryPhotos() {
  return (
    <FadeInStaggerTwo className="row">
      <FadeInStaggerTwoChildren className="col-lg-8">
        <div className="aximo-story-thumb">
          <img src={Story1Img} alt="Story1Img" />
        </div>
      </FadeInStaggerTwoChildren>
      <FadeInStaggerTwoChildren className="col-lg-4">
        <div className="aximo-story-thumb">
          <img src={Story2Img} alt="StroryIMg 2" />
        </div>
      </FadeInStaggerTwoChildren>
      <FadeInStaggerTwoChildren className="col-lg-4">
        <div className="aximo-story-thumb">
          <img src={Story3Img} alt="StoryImg 3" />
        </div>
      </FadeInStaggerTwoChildren>
      <FadeInStaggerTwoChildren className="col-lg-8">
        <div className="aximo-story-thumb">
          <img src={Story4Img} alt="StoryImg 4" />
        </div>
      </FadeInStaggerTwoChildren>
      <FadeInStaggerTwoChildren className="col-lg-8">
        <div className="aximo-story-thumb">
          <img src={Story5Img} alt="StoryImg 5" />
        </div>
      </FadeInStaggerTwoChildren>
      <FadeInStaggerTwoChildren className="col-lg-4">
        <div className="aximo-story-thumb">
          <img src={Story6Img} alt="StroryIMg 6" />
        </div>
      </FadeInStaggerTwoChildren>
    </FadeInStaggerTwo>
  );
}

export default StoryPhotos;
