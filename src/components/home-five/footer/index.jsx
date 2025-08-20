import FooterAbout from "./FooterAbout";
import FooterContact from "./FooterContact";
import FooterCopyright from "./FooterCopyright";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="aximo-footer-section5 bg-light6">
      <div className="container">
        <div className="aximo-footer-top5 aximo-section-padding">
          <div className="row">
            <div className="col-xl-4 col-lg-12">
              <FooterAbout />
            </div>
            <div className="col-xl-3 col-md-4">
              <div className="aximo-footer-menu extar-margin">
                <div className="aximo-footer-title">
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
              <div className="aximo-footer-menu">
                <div className="aximo-footer-title">
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
              <FooterContact />
            </div>
          </div>
        </div>
        <div className="aximo-footer-bottom five">
          <FooterCopyright />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
