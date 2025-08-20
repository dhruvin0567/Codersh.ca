import FadeInStagger from "../animation/FadeInStagger";
import VideoSlider from "../common/VideoSlider";
import Star2Img from "../../assets/images/v1/icon/star2.webp";

function SolutionTestimonialSlider() {
  return (
    <>
      <FadeInStagger>
        <div className="review-section text-center pb-5">
          <div className="container border-top py-5">
            <div className="aximo-section-title center pb-4">
              <h2>
                Clients are always
                <span className="aximo-title-animation">
                  satisfied with us
                  <span className="aximo-title-icon">
                    <img src={Star2Img} alt="Star2Img" />
                  </span>
                </span>
              </h2>
            </div>
            <div>
              <p className=" mx-lg-5 px-lg-5 pb-4 text-center">
                We are very proud of the service we provide and stand by every
                product we carry.
                <br /> See our testimonials from our happy customers.
              </p>
            </div>
            <VideoSlider />
          </div>
        </div>
      </FadeInStagger>
    </>
  );
}

export default SolutionTestimonialSlider;
