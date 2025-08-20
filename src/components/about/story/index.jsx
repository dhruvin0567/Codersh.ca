import Star2Img from "../../../assets/images/v1/star2.webp";
import StoryContent from "./StoryContent";
import StoryPhotos from "./StoryPhotos";

function Story() {
  return (
    <div className="section aximo-section-padding6">
      <div className="container">
        <div className="aximo-section-title center title-description">
          <h2>
            <span className="aximo-title-animation">
              We think our story is
              <span className="aximo-title-icon">
                <img src={Star2Img} alt="star" />
              </span>
            </span>
            <br />
            worth sharing with you
          </h2>
          <p>
            Founded in 2019, Codersh Web Services is a global leader in website
            design, development, and digital marketing, helping businesses
            across the US, UK, Asia, and the Netherlands to achieve their goals.
          </p>
        </div>

        <StoryPhotos />

        <div className="aximo-story-content">
          <StoryContent />
        </div>
      </div>
    </div>
  );
}

export default Story;
