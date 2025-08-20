import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo/logo-white.svg";

function Footer() {
  return (
    <footer className="aximo-footer-section dark-bg">
      <div className="container">
        <div className="aximo-footer-bottom">
          <div className="row">
            <div className="col-lg-6">
              <div className="aximo-footer-logo">
                <Link to="/">
                  <img src={Logo} alt="logo" style={{ maxWidth: "200px" }} />
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="aximo-copywright one">
                <p>
                  {" "}
                  &copy; All Rights Reserved 2025. | Powered by{" "}
                  <a
                    href="https://codersh.com/"
                    style={{ fontSize: "18px", color: "white" }}
                  >
                    Codersh.
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
