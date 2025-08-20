import { Link } from "react-router-dom";
import portfolioImg1 from "../../../assets/images/portfolio/p_12.webp";
import portfolioImg2 from "../../../assets/images/portfolio/p_13.webp";
import portfolioImg3 from "../../../assets/images/portfolio/p_14.webp";
import portfolioImg4 from "../../../assets/images/portfolio/p_15.webp";
import FadeInStagger from "../../animation/FadeInStagger";
import ProjectCard from "./projectCard";

const projectsData = [
  {
    id: crypto.randomUUID(),
    title: "Website Development",
    company: "XYZ Company",
    category: "Web Design",
    img: portfolioImg1,
    column: "5",
  },
  {
    id: crypto.randomUUID(),
    title: "Online Advertising Campaigns",
    company: "J&J Group",
    category: "Marketing",
    img: portfolioImg2,
    column: "7",
  },
  {
    id: crypto.randomUUID(),
    title: "Online Reputation Management",
    company: "MC Company",
    category: "Branding",
    img: portfolioImg3,
    column: "7",
  },
  {
    id: crypto.randomUUID(),
    title: "Affiliate Marketing",
    company: "Walmart",
    category: "Sale Marketing",
    img: portfolioImg4,
    column: "5",
  },
];

function Projects() {
  return (
    <div className="aximo-project-section2">
      <div className="container">
        <div className="aximo-section-title libre-font">
          <div className="row">
            <div className="col-lg-7">
              <h2>Successful projects that represent us</h2>
            </div>
            <div className="col-lg-5 d-flex align-items-end justify-content-end">
              <div className="aximo-title-btn">
                <Link
                  className="aximo-default-btn pill corn-btn"
                  to="/portfolio-one"
                >
                  <span className="aximo-label-up">View All Works</span>
                  <span className="aximo-label-up">View All Works</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {projectsData.map((project, index) => (
            <FadeInStagger
              className={`col-lg-${project.column}`}
              key={project.id}
              index={index}
            >
              <ProjectCard project={project} />
            </FadeInStagger>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
