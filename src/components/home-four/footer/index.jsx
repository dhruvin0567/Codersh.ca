import { Link } from "react-router-dom";
import LogoWhiteImg from "../../../assets/images/logo/logo-white.svg";
import FooterCopyright from "./FooterCopyright";
import FooterSubscription from "./FooterSubscription";
function Footer() {
  return (
    <footer className="aximo-footer-section4">
      <div className="aximo-subscription-wrap extra-side-margin">
        <div className="container">
          <FooterSubscription />
        </div>
      </div>

      <div className="container">
        <div className="aximo-footer-top4">
          <div className="row">
            <div className="col-xl-4 col-lg-12">
              <div className="aximo-footer-textarea light-one">
                <Link to="/">
                  <img src={LogoWhiteImg} alt="Logo" />
                </Link>
                <p>
                  We are a branding agency that digitally works to help
                  companies grow. We have a successful track record of working
                  with various organizations.
                </p>
                <div className="aximo-social-icon aximo-social-icon3">
                  <ul>
                    <li>
                      <a href="https://twitter.com/" target="_blank">
                        <i className="icon-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://facebook.com/" target="_blank">
                        <i className="icon-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/" target="_blank">
                        <i className="icon-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/" target="_blank">
                        <i className="icon-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-4">
              <div className="aximo-footer-menu extar-margin light-one">
                <div className="aximo-footer-title light-one">
                  <p>Special Links</p>
                </div>
                <ul>
                  <li>
                    <Link to="/about">About us</Link>
                  </li>
                  <li>
                    <Link to="/service">Our services</Link>
                  </li>
                  <li>
                    <Link to="/portfolio-one">Portfolio</Link>
                  </li>
                  <li>
                    <Link to="/blog">Blogs</Link>
                  </li>
                  <li>
                    <Link to="/">Premium member</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-2 col-md-4">
              <div className="aximo-footer-menu light-one">
                <div className="aximo-footer-title light-one">
                  <p>Utility pages</p>
                </div>
                <ul>
                  <li>
                    <Link to="/about">About us</Link>
                  </li>
                  <li>
                    <Link to="/service">Our services</Link>
                  </li>
                  <li>
                    <Link to="/portfolio-one">Portfolio</Link>
                  </li>
                  <li>
                    <Link to="/blog">Blogs</Link>
                  </li>
                  <li>
                    <Link to="/">Premium member</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-md-4">
              <div className="aximo-footer-menu light-one m-0">
                <div className="aximo-footer-title light-one">
                  <p>Contact us</p>
                </div>
                <div className="aximo-contact-info2">
                  <ul>
                    <li>
                      <a href="tel: +088-234-6849">
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
                      <a href="">
                        <i className="icon-map"></i>
                        Haward Street,10203 USA
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="aximo-footer-bottom four">
          <FooterCopyright />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
