import { Link } from "react-router-dom";

function HeaderButton() {
  return (
    <div className="header-btn header-btn-l1 ms-auto d-none d-xs-inline-flex">
      <div className="aximo-header-wrap">
        <div className="aximo-social-icon header-social">
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
        <Link
          className="aximo-default-btn pill aximo-header-btn yellow-btn"
          to="/contact-us"
        >
          <span className="aximo-label-up">Talk to an expert</span>
          <span className="aximo-label-up">Talk to an expert</span>
        </Link>
      </div>
    </div>
  );
}

export default HeaderButton;
