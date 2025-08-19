import { Link } from "react-router-dom";
function PortfolioCardTwo({ blog: { img, title, link } }) {
  return (
    <div className="aximo-project-thumb casestudy-blog-card-container">
      <img src={img} alt={title} />
      <div className="aximo-project-wrap  home-proj-wrap">
        <div className="aximo-project-data">
          <Link to={link}>
            <h3>Learn More</h3>
          </Link>
          {/* <p>{description}</p> */}
        </div>
        <Link
          className="aximo-project-icon home-proj-icon"
          to={link}
          aria-label="View single-portfolio"
        >
          <svg
            width="34"
            height="28"
            viewBox="0 0 34 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.9795 2C19.9795 2 20.5 8 25.9795 11.2C28.4887 12.6653 31.9795 14 31.9795 14M31.9795 14H2M31.9795 14C31.9795 14 28.5339 15.415 25.9795 16.8C19.9795 20.0533 19.9795 26 19.9795 26"
              stroke="#FDFDE1"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default PortfolioCardTwo;
