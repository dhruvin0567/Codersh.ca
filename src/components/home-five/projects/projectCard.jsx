import { Link } from "react-router-dom";

function ProjectCard({ project: { title, img, company, category } }) {
  return (
    <div className="aximo-project-wrap4">
      <div className="aximo-project-thumb4">
        <img src={img} alt="project" />
        <Link className="aximo-project-view" to="single-portfolio">
          View
        </Link>
      </div>
      <div className="aximo-project-data4">
        <Link to="/single-portfolio">
          <h3>{title}</h3>
        </Link>
        <div className="aximo-project-meta">
          <ul>
            <li>
              <a href="#">{company}</a>
            </li>
            <li>
              <a href="#">{category}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
