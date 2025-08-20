import FadeInStagger from "../../animation/FadeInStagger";
import VideoSlider from "../../common/VideoSlider";
import TestimonialSwiper from "./TestimonialSwiper";
import Star2Img from "../../../assets/images/v1/icon/star2.webp";

function Testimonial() {
  return (
    <div>
      <TestimonialSwiper />
      <FadeInStagger>
        <div className="review-section text-center  aximo-section-padding6">
          <div className="container">
            <div className="pb-5">
              <h2 className="mb-4">
                <span className="aximo-title-animation">
                  Our Client's Reviews
                  <span className="aximo-title-icon">
                    <img src={Star2Img} alt="Star Img" />
                  </span>
                </span>
              </h2>
              <p className="mb-4">
                We are very proud of the service we provide and stand by every
                product we carry.
                <br />
                See our testimonials from our happy customers.
              </p>
            </div>
            <VideoSlider />
          </div>
        </div>
      </FadeInStagger>
    </div>
  );
}

export default Testimonial;
