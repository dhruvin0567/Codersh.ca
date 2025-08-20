import ArrowDarkImg from "../../../assets/images/v6/arrow-dark.svg";
import { Link } from "react-router-dom";

function ServiceCard({ service: { title, description, img, bgColor } }) {
  return (
    <div className={`aximo-iconbox-wrap8 ${bgColor}`}>
      <div className="aximo-iconbox-icon8">
        <img src={img} alt="icon" />
      </div>
      <div className="aximo-iconbox-data8">
        <h3>{title}</h3>
        <p>{description}</p>
        <Link to="/single-service">
          <img src={ArrowDarkImg} alt="Arrow" />
        </Link>
      </div>
    </div>
  );
}

export default ServiceCard;
