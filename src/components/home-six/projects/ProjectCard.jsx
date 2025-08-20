import { Link } from "react-router-dom";
import NextWhiteImg from "../../../assets/images/v6/next-white.svg";

function ProjectCard({ project: { title, img } }) {
  return (
    <div className="aximo-project-thumb5">
      <img src={img} alt="project img" />
      <div className="aximo-marquee-two">
        <div className="aximo-infinite two">
          {[...Array(18)].map(() => (
            <Link key={crypto.randomUUID()} to="/single-portfolio">
              {title} <img src={NextWhiteImg} alt="Next" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
