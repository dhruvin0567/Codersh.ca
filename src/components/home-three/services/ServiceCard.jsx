import { Link } from "react-router-dom";
import ArrowRight4Img from "../../../assets/images/icon/arrow-right4.svg";

function ServiceCard({ service: { title, description, img } }) {
  return (
    <div className="aximo-iconbox-wrap3">
      <div className="aximo-iconbox-icon3">
        <img src={img} alt="Icon" />
      </div>
      <div className="aximo-iconbox-data3">
        <h3>{title}</h3>
        <p>{description}</p>
        <Link className="aximo-service-icon" to="/single-service">
          <img src={ArrowRight4Img} alt="ArrowRight4Img" />
        </Link>
      </div>
    </div>
  );
}

export default ServiceCard;
