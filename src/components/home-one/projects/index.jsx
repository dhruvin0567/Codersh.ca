import Star2Img from "../../../assets/images/v1/star2.webp";
import Project1Img from "/images/case-studies/casestudy-cards/madamef-casestudy.webp";
import Project2Img from "/images/case-studies/casestudy-cards/liberation-casestudy.webp";
import Project3Img from "/images/case-studies/casestudy-cards/van-hunks-casestudy.webp";
import Project4Img from "/images/case-studies/casestudy-cards/pami-gente-casestudy.webp";
import Project5Img from "/images/case-studies/casestudy-cards/stellar-credit-casestudy.webp";
import Project6Img from "/images/case-studies/casestudy-cards/bergbat-casestudy.webp";
import ProjectCard from "./ProjectCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel } from "swiper/modules";

const projectsData = [
  {
    id: crypto.randomUUID(),
    title: "Madame F",
    img: Project1Img,
    link: "/case-studies/madame-f",
  },
  {
    id: crypto.randomUUID(),
    title: "Van Hunks",
    img: Project2Img,
    link: "/case-studies/van-hunks",
  },
  {
    id: crypto.randomUUID(),
    title: "Liberation Cocktails",
    img: Project3Img,
    link: "/case-studies/liberation-cocktails",
  },
  {
    id: crypto.randomUUID(),
    title: "PaMi Gente",
    img: Project4Img,
    link: "/case-studies/pa-mi-gente",
  },
  {
    id: crypto.randomUUID(),
    title: "Stellar Credit",
    img: Project5Img,
    link: "/case-studies/stellar-credit",
  },
  {
    id: crypto.randomUUID(),
    title: "BergBat",
    img: Project6Img,
    link: "/case-studies/bergbat",
  },
];

const swiperSettings = {
  spaceBetween: 20,
  direction: "horizontal",
  pagination: {
    clickable: true,
  },
  modules: [Pagination, Mousewheel],
  mousewheel: true,
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    900: {
      slidesPerView: 3,
    },
    1600: {
      slidesPerView: 3.5,
    },
  },
};

function Projects() {
  return (
    <div className="section dark-bg aximo-section-padding">
      <div className="container">
        <div className="aximo-section-title center light">
          <h2>
            Have a wide range of
            <span className="aximo-title-animation">
              creative projects
              <span className="aximo-title-icon">
                <img src={Star2Img} alt="Star2Img" />
              </span>
            </span>
          </h2>
        </div>
      </div>
      <div className="swiper aximo-project-slider px-3">
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
