import Project1Img from "../../../assets/images/v6/p_1.webp";
import Project2Img from "../../../assets/images/v6/p_2.webp";
import Project3Img from "../../../assets/images/v6/p_3.webp";
import Project4Img from "../../../assets/images/v6/p_4.webp";
import Shape2Img from "../../../assets/images/v6/shapes2.webp";
import FadeInStagger from "../../animation/FadeInStagger";
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    id: crypto.randomUUID(),
    title: "Corporate Elegance",
    img: Project1Img,
    colSize: "6",
  },
  {
    id: crypto.randomUUID(),
    title: "Corporate Elegance",
    img: Project2Img,
    colSize: "6",
  },
  {
    id: crypto.randomUUID(),
    title: "Corporate Elegance",
    img: Project3Img,
    colSize: "8",
  },
  {
    id: crypto.randomUUID(),
    title: "Corporate Elegance",
    img: Project4Img,
    colSize: "4",
  },
];

function Projects() {
  return (
    <div className="section aximo-section-padding5 position-relative">
      <div className="container">
        <div className="aximo-section-title playfair center max-width-xl">
          <h2>Explore our latest interior design project</h2>
        </div>
        <div className="row">
          {projectsData.map((project, index) => (
            <FadeInStagger
              className={`col-md-${project.colSize}`}
              index={index}
              key={project.id}
            >
              <ProjectCard project={project} />
            </FadeInStagger>
          ))}
        </div>
      </div>
      <div className="aximo-p-shape">
        <img src={Shape2Img} alt="Shape" />
      </div>
    </div>
  );
}

export default Projects;
