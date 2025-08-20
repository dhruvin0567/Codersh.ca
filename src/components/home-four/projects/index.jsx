import { Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Project1Img from "../../../assets/images/v4/project1.webp";
import Project2Img from "../../../assets/images/v4/project2.webp";
import Project3Img from "../../../assets/images/v4/project3.webp";
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    id: crypto.randomUUID(),
    title: "Market Expansion Blueprint",
    description:
      "Develop a comprehensive strategy to expand your market reach, identify new opportunities, and grow",
    img: Project1Img,
  },
  {
    id: crypto.randomUUID(),
    title: "Financial Health Check",
    description:
      "A thorough financial analysis to assess the financial stability of your business and secure your future.",
    img: Project2Img,
  },
  {
    id: crypto.randomUUID(),
    title: "Strategic Growth Accelerator",
    description:
      "Develop a growth-focused strategy, including market expansion, product development.",
    img: Project3Img,
  },
  {
    id: crypto.randomUUID(),
    title: "Market Expansion Blueprint",
    description:
      "Develop a comprehensive strategy to expand your market reach, identify new opportunities, and grow",
    img: Project1Img,
  },
  {
    id: crypto.randomUUID(),
    title: "Financial Health Check",
    description:
      "A thorough financial analysis to assess the financial stability of your business and secure your future.",
    img: Project2Img,
  },
  {
    id: crypto.randomUUID(),
    title: "Strategic Growth Accelerator",
    description:
      "Develop a growth-focused strategy, including market expansion, product development.",
    img: Project3Img,
  },
  {
    id: crypto.randomUUID(),
    title: "Market Expansion Blueprint",
    description:
      "Develop a comprehensive strategy to expand your market reach, identify new opportunities, and grow",
    img: Project1Img,
  },
  {
    id: crypto.randomUUID(),
    title: "Financial Health Check",
    description:
      "A thorough financial analysis to assess the financial stability of your business and secure your future.",
    img: Project2Img,
  },
  {
    id: crypto.randomUUID(),
    title: "Strategic Growth Accelerator",
    description:
      "Develop a growth-focused strategy, including market expansion, product development.",
    img: Project3Img,
  },
  {
    id: crypto.randomUUID(),
    title: "Market Expansion Blueprint",
    description:
      "Develop a comprehensive strategy to expand your market reach, identify new opportunities, and grow",
    img: Project1Img,
  },
  {
    id: crypto.randomUUID(),
    title: "Financial Health Check",
    description:
      "A thorough financial analysis to assess the financial stability of your business and secure your future.",
    img: Project2Img,
  },
  {
    id: crypto.randomUUID(),
    title: "Strategic Growth Accelerator",
    description:
      "Develop a growth-focused strategy, including market expansion, product development.",
    img: Project3Img,
  },
  {
    id: crypto.randomUUID(),
    title: "Market Expansion Blueprint",
    description:
      "Develop a comprehensive strategy to expand your market reach, identify new opportunities, and grow",
    img: Project1Img,
  },
  {
    id: crypto.randomUUID(),
    title: "Financial Health Check",
    description:
      "A thorough financial analysis to assess the financial stability of your business and secure your future.",
    img: Project2Img,
  },
  {
    id: crypto.randomUUID(),
    title: "Strategic Growth Accelerator",
    description:
      "Develop a growth-focused strategy, including market expansion, product development.",
    img: Project3Img,
  },
  {
    id: crypto.randomUUID(),
    title: "Market Expansion Blueprint",
    description:
      "Develop a comprehensive strategy to expand your market reach, identify new opportunities, and grow",
    img: Project1Img,
  },
  {
    id: crypto.randomUUID(),
    title: "Financial Health Check",
    description:
      "A thorough financial analysis to assess the financial stability of your business and secure your future.",
    img: Project2Img,
  },
  {
    id: crypto.randomUUID(),
    title: "Strategic Growth Accelerator",
    description:
      "Develop a growth-focused strategy, including market expansion, product development.",
    img: Project3Img,
  },
  {
    id: crypto.randomUUID(),
    title: "Market Expansion Blueprint",
    description:
      "Develop a comprehensive strategy to expand your market reach, identify new opportunities, and grow",
    img: Project1Img,
  },
  {
    id: crypto.randomUUID(),
    title: "Financial Health Check",
    description:
      "A thorough financial analysis to assess the financial stability of your business and secure your future.",
    img: Project2Img,
  },
  {
    id: crypto.randomUUID(),
    title: "Strategic Growth Accelerator",
    description:
      "Develop a growth-focused strategy, including market expansion, product development.",
    img: Project3Img,
  },
  {
    id: crypto.randomUUID(),
    title: "Market Expansion Blueprint",
    description:
      "Develop a comprehensive strategy to expand your market reach, identify new opportunities, and grow",
    img: Project1Img,
  },
  {
    id: crypto.randomUUID(),
    title: "Financial Health Check",
    description:
      "A thorough financial analysis to assess the financial stability of your business and secure your future.",
    img: Project2Img,
  },
  {
    id: crypto.randomUUID(),
    title: "Strategic Growth Accelerator",
    description:
      "Develop a growth-focused strategy, including market expansion, product development.",
    img: Project3Img,
  },
  {
    id: crypto.randomUUID(),
    title: "Market Expansion Blueprint",
    description:
      "Develop a comprehensive strategy to expand your market reach, identify new opportunities, and grow",
    img: Project1Img,
  },
  {
    id: crypto.randomUUID(),
    title: "Financial Health Check",
    description:
      "A thorough financial analysis to assess the financial stability of your business and secure your future.",
    img: Project2Img,
  },
  {
    id: crypto.randomUUID(),
    title: "Strategic Growth Accelerator",
    description:
      "Develop a growth-focused strategy, including market expansion, product development.",
    img: Project3Img,
  },
  {
    id: crypto.randomUUID(),
    title: "Market Expansion Blueprint",
    description:
      "Develop a comprehensive strategy to expand your market reach, identify new opportunities, and grow",
    img: Project1Img,
  },
  {
    id: crypto.randomUUID(),
    title: "Financial Health Check",
    description:
      "A thorough financial analysis to assess the financial stability of your business and secure your future.",
    img: Project2Img,
  },
  {
    id: crypto.randomUUID(),
    title: "Strategic Growth Accelerator",
    description:
      "Develop a growth-focused strategy, including market expansion, product development.",
    img: Project3Img,
  },
];

const swiperSettings = {
  spaceBetween: 24,
  scrollbar: {
    draggable: true,
  },
  modules: [Scrollbar],

  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    900: {
      slidesPerView: 2,
    },
    1600: {
      slidesPerView: 3,
    },
  },
};

function Projects() {
  return (
    <div className="aximo-project-section aximo-section-padding extra-side-margin">
      <div className="container">
        <div className="aximo-section-title center light arimo-font">
          <span className="aximo-subtitle">Our stunning creation</span>
          <h2>Our dedication shines through our work</h2>
        </div>
      </div>
      <div className="swiper aximo-project-slider2">
        <Swiper {...swiperSettings}>
          {projectsData.map((project) => (
            <SwiperSlide key={project.id}>
              <ProjectCard project={project} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Projects;
