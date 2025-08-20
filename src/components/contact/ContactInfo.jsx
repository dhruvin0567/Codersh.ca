import Call2Img from "../../assets/images/icon/call2.svg";
import EmailImg from "../../assets/images/icon/email.svg";
import Star2Img from "../../assets/images/v1/star2.webp";
import {
  FadeInStaggerTwo,
  FadeInStaggerTwoChildren,
} from "../animation/FadeInStaggerTwo";

function ContactInfo() {
  return (
    <div className="aximo-contact-info-section">
      <div className="container">
        <div className="aximo-contact-info-title">
          <h2>
            <span className="aximo-title-animation">
              Contact Information
              <span className="aximo-title-icon">
                <img src={Star2Img} alt="Star" />
              </span>
            </span>
          </h2>
        </div>
        <FadeInStaggerTwo className="row d-flex justify-content-center">
          <FadeInStaggerTwoChildren className="col-xl-4 col-md-6">
            <div className="aximo-contact-info-box">
              <div className="aximo-contact-info-icon">
                <img src={Call2Img} alt="Call Img" />
              </div>
              <div className="aximo-contact-info-data">
                <span>Call us</span>

                <a
                  href="tel:+15197293709"
                  style={{ color: "white", fontSize: "21px" }}
                >
                  {" "}
                  +1 519 729 3709
                </a>
              </div>
            </div>
          </FadeInStaggerTwoChildren>
          <FadeInStaggerTwoChildren className="col-xl-4 col-md-6">
            <div className="aximo-contact-info-box">
              <div className="aximo-contact-info-icon">
                <img src={EmailImg} alt="Email" />
              </div>
              <div className="aximo-contact-info-data">
                <span>Email us</span>
                <a
                  href="mailto:arvind@codersh.com"
                  style={{ color: "white", fontSize: "21px" }}
                >
                  arvind@codersh.com
                </a>
              </div>
            </div>
          </FadeInStaggerTwoChildren>
        </FadeInStaggerTwo>
      </div>
    </div>
  );
}

export default ContactInfo;
