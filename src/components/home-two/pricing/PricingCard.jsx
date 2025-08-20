import { Link } from "react-router-dom";
import LikeImg from "../../../assets/images/v2/like.svg";

function PricingCard({ pricing: { plan, price, img, services, active } }) {
  return (
    <div className="aximo-pricing-wrap">
      <div className="aximo-pricing-header">
        <img src={img} alt={plan} />
        <h3>{plan}</h3>
      </div>
      <div className="aximo-pricing-price">
        <h2>${price}</h2>
      </div>
      <div className="aximo-pricing-body">
        <ul>
          {services.map((service) => (
            <li key={service}>
              <img src={LikeImg} alt="like" />
              {service}
            </li>
          ))}
        </ul>
      </div>
      <Link
        className={`aximo-default-btn aximo-pricing-btn ${active && "active"}`}
        to="/pricing"
      >
        Purchase It Now
      </Link>
    </div>
  );
}

export default PricingCard;
