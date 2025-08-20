import { Link } from "react-router-dom";

function ServiceCard({ service: { title, description, img } }) {
  return (
    <div className="aximo-marketing-services-item">
      <div className="aximo-marketing-services-icon">
        <img src={img} alt="icon" />
        <h3>{title}:</h3>
      </div>
      <div className="aximo-marketing-services-data">
        <p>{description}</p>
      </div>
      <div className="aximo-marketing-services-btn">
        <Link
          className="aximo-default-btn aximo-default-btn-outline pill outline-white marketing-services-btn"
          to="/single-service"
        >
          Choose Service
        </Link>
      </div>
    </div>
  );
}

export default ServiceCard;
