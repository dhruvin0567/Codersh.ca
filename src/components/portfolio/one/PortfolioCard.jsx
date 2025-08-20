import { Link } from "react-router-dom";
import LinkImg from "../../../assets/images/icon/link2.svg";

function PortfolioCard({ portfolio: { title, description, img } }) {
  return (
    <>
      <div className="aximo-project-thumb3">
        <img src={img} alt={title} />

        <Link to="/single-portfolio" className="aximo-project-link">
          <img src={LinkImg} alt="Link" />
        </Link>
      </div>
      <div className="aximo-project-data3">
        <h3>
          <Link to="/single-portfolio">{title}</Link>
        </h3>
        <p>{description}</p>
      </div>
    </>
  );
}

export default PortfolioCard;
