import StarShapeHalfImg from "../../../assets/images/v3/star-shape-half2.webp";
import {
  FadeInStaggerTwo,
  FadeInStaggerTwoChildren,
} from "../../animation/FadeInStaggerTwo";
import ContactForm from "./ContactForm";

function Contact() {
  return (
    <div className="section dark-bg aximo-section-padding2 position-relative overflow-hidden">
      <div className="container">
        <FadeInStaggerTwo className="row">
          <FadeInStaggerTwoChildren className="col-lg-7">
            <div className="aximo-default-content familjen-grotesk light m-right-gap">
              <h2>Want to boost your business with our SEO expertise?</h2>
              <p>
                Experienced SEO experts proven strategies & innovative
                techniques to increase your website's visibility, drive organic
                traffic, and improve your digital performance and grow your
                online reach.
              </p>
              <div className="aximo-contact-info">
                <h3>Contact us directly:</h3>
                <ul>
                  <li>
                    <a href="tel:088-234-6849">
                      <i className="icon-phone"></i>
                      +088-234-6849
                    </a>
                  </li>
                  <li>
                    <a href="mailto:example@gmail.com">
                      <i className="icon-message"></i>
                      example@gmail.com
                    </a>
                  </li>
                  <li>
                    <a>
                      <i className="icon-map"></i>
                      Haward Street,10203 USA
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </FadeInStaggerTwoChildren>
          <FadeInStaggerTwoChildren className="col-lg-5">
            <div className="aximo-form-wrap2">
              <h3>Send us a message</h3>
              <p>
                Fill out the form and our expert will get back to you with a
                free analysis and proposal
              </p>
              <ContactForm />
            </div>
          </FadeInStaggerTwoChildren>
        </FadeInStaggerTwo>
      </div>
      <div className="aximo-star-shape-half2">
        <img src={StarShapeHalfImg} alt="StarShapeHalfImg" />
      </div>
    </div>
  );
}

export default Contact;
