import CountUp from "react-countup";
import Thumb1Img from "../../../assets/images/v1/t_thumb1.webp";
import Thumb2Img from "../../../assets/images/v1/t_thumb2.webp";
import QuoteImg from "../../../assets/images/v4/quote.webp";
import {
  FadeInStaggerTwo,
  FadeInStaggerTwoChildren,
} from "../../animation/FadeInStaggerTwo";

function TestimonialsCard() {
  return (
    <FadeInStaggerTwo>
      <FadeInStaggerTwoChildren className="row">
        <div className="col-lg-4">
          <div className="aximo-counter-wrap4">
            <div className="aximo-counter-data4">
              <h2>
                <span className="aximo-counter">
                  <CountUp
                    end={80}
                    duration={3}
                    redraw={true}
                    enableScrollSpy
                  />
                </span>
                k+
              </h2>
              <p>Years of experience</p>
            </div>
          </div>
        </div>
        <div className="col-lg-8">
          <div className="aximo-testimonial-wrap aximo-testimonial-wrap3">
            <div className="aximo-testimonial-quote">
              <img src={QuoteImg} alt="QuoteImg" />
            </div>
            <div className="aximo-testimonial-data">
              <p>
                Excellent customer service and I was really impressed and happy
                with my purchase especially as it was a last minute order which
                got to me in time, and when it arrived I was very happy with the
                design and size and so was the recipient.
              </p>
            </div>
            <div className="aximo-testimonial-author">
              <div className="aximo-testimonial-author-thumb">
                <img src={Thumb1Img} alt="Thumb1Img" />
              </div>
              <div className="aximo-testimonial-author-data">
                <span>William Jack </span>
                <p>CEO & Founder @XYZ</p>
              </div>
            </div>
          </div>
        </div>
      </FadeInStaggerTwoChildren>
      <FadeInStaggerTwoChildren className="row">
        <div className="col-lg-4 order-lg-2">
          <div className="aximo-counter-wrap4">
            <div className="aximo-counter-data4">
              <h2>
                <span className="aximo-counter">
                  <CountUp
                    end={200}
                    duration={3}
                    redraw={true}
                    enableScrollSpy
                  />
                </span>
                +
              </h2>
              <p>Successfully finished projects</p>
            </div>
          </div>
        </div>
        <div className="col-lg-8">
          <div className="aximo-testimonial-wrap aximo-testimonial-wrap3">
            <div className="aximo-testimonial-quote">
              <img src={QuoteImg} alt="QuoteImg" />
            </div>
            <div className="aximo-testimonial-data">
              <p>
                "Working with Mthemeus has been a game-changer for our company.
                Their tailored solutions & hands-on approach have not only
                boosted our efficiency but have also opened up new avenues for
                growth. They are an invaluable partner in our journey to
                success."
              </p>
            </div>
            <div className="aximo-testimonial-author">
              <div className="aximo-testimonial-author-thumb">
                <img src={Thumb2Img} alt="Thumb2Img" />
              </div>
              <div className="aximo-testimonial-author-data">
                <span>Andrew Smith </span>
                <p>Businessman</p>
              </div>
            </div>
          </div>
        </div>
      </FadeInStaggerTwoChildren>
    </FadeInStaggerTwo>
  );
}

export default TestimonialsCard;
