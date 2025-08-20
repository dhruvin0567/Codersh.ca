import { Link } from "react-router-dom";
import LogoWhiteImg from "../../../assets/images/logo/logo-white.svg";

function FooterBottom() {
  return (
    <>
      <div className="col-lg-6">
        <div className="aximo-footer-logo">
          <Link to="/">
            <img src={LogoWhiteImg} alt="Logo" />
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
    </>
  );
}

export default FooterBottom;
