import React from "react";
import { Link } from "react-router-dom";

const ArrowIcon = React.memo(function ArrowIcon() {
  return (
    <svg
      width="34"
      height="28"
      viewBox="0 0 34 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M19.9795 2C19.9795 2 20.5 8 25.9795 11.2C28.4887 12.6653 31.9795 14 31.9795 14M31.9795 14H2M31.9795 14C31.9795 14 28.5339 15.415 25.9795 16.8C19.9795 20.0533 19.9795 26 19.9795 26"
        stroke="#FDFDE1"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

const PortfolioCard = React.memo(function PortfolioCard({ blog }) {
  if (!blog) return null;

  const { img = "", title = "Untitled", link = "#" } = blog;

  return (
    <div className="aximo-project-thumb casestudy-blog-card-container">
      <img
        src={img}
        alt={title || "Portfolio image"}
        loading="lazy"
        decoding="async"
        width={400}
        height={300}
      />

      <div className="aximo-project-wrap">
        <div className="aximo-project-data">
          {link ? (
            <Link to={link}>
              <h3>{title}</h3>
            </Link>
          ) : (
            <h3>{title}</h3>
          )}
        </div>

        {link && (
          <Link
            className="aximo-project-icon d-none d-md-block"
            to={link}
            aria-label={`View ${title}`}
          >
            <ArrowIcon />
          </Link>
        )}
      </div>
    </div>
  );
});

export default PortfolioCard;
