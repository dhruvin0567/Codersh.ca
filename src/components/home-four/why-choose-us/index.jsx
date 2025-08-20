import Shape2Img from "../../../assets/images/v4/shape2.webp";
import Thumb1Img from "../../../assets/images/v4/thumb1.webp";
import FadeInLeft from "../../animation/FadeInLeft";

function WhyChooseUs() {
  return (
    <div className="section">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <FadeInLeft className="aximo-content-thumb border-radius ">
              <img src={Thumb1Img} alt="Thumb1Img" />
              <div className="aximo-thumb-shape4">
                <img src={Shape2Img} alt="Shape2Img" />
              </div>
            </FadeInLeft>
          </div>
          <div className="col-lg-7">
            <div className="aximo-default-content arimo-font m-left-gap">
              <span className="aximo-subtitle">Why choose us</span>
              <h2>We help companies achieve their goals</h2>
              <p>
                In today's complex and rapidly changing business environment, we
                help businesses adapt, grow & succeed. Our expertise,
                objectivity, and ability to provide customized solutions.
              </p>
              <p>
                <strong>Industry Expertise:</strong> Our team of seasoned
                consultants brings wealth of knowledge and experience across
                various industries.
              </p>
              <p>
                <strong>Results-Driven Approach:</strong> Our proven
                methodologies and data-driven strategies ensure that your
                business reaches.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;
