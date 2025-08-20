import { Link } from "react-router-dom";

function ServiceCard({ service: { title, description }, index }) {
  return (
    <div className="aximo-service7-wrap">
      <div className="aximo-service7-title">
        <h3>{`${index + 1}. ${title}:`}</h3>
      </div>
      <div className="aximo-service7-description">
        <p>{description}</p>
      </div>
      <Link className="aximo-service7-btn" to="/single-service">
        <svg
          width="50"
          height="49"
          viewBox="0 0 50 49"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M38.0375 27.4312L0 27.4312V21.1812L38.0375 21.1812L21.275 4.41875L25.6938 0L50 24.3062L25.6938 48.6125L21.275 44.1937L38.0375 27.4312Z"
            fill="#F8FCDD"
          />
        </svg>
      </Link>
    </div>
  );
}

export default ServiceCard;
