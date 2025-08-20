import { useState } from "react";
import BreadCrumb from "../../components/common/Breadcrumb";

const projects = [
  {
    id: crypto.randomUUID(),
    category: "shopify",
    country: "south africa",
    industry: "wine",
    imgSrc: "/src/assets/assets/Images/Van-Hunks.png.webp",
    name: "Vank Hunks",
  },
  {
    id: crypto.randomUUID(),
    category: "shopify",
    country: "uk",
    industry: "wine",
    imgSrc: "/src/assets/assets/Images/Madame-F.png.webp",
    name: "Madame F",
  },
  {
    id: crypto.randomUUID(),
    category: "shopify",
    country: "uk",
    industry: "wine",
    imgSrc: "/src/assets/assets/Images/Liberation-Cocktails.png.webp",
    name: "Liberation Cocktails",
  },
  {
    id: crypto.randomUUID(),
    category: "shopify",
    country: "uk",
    industry: "wine",
    imgSrc: "/src/assets/assets/Images/BONE-IDYLL.png.webp",
    name: "Bone Idyll",
  },
  {
    id: crypto.randomUUID(),
    category: "shopify",
    country: "usa",
    imgSrc: "/src/assets/assets/Images/potown-homepage.png.webp",
    name: "PowTown Store",
  },
  {
    id: crypto.randomUUID(),
    category: "shopify",
    country: "usa",
    industry: "health",
    imgSrc: "/src/assets/assets/Images/Violet-Blanc-Beauty.png.webp",
    name: "Violet Blanc",
  },
  {
    id: crypto.randomUUID(),
    category: "shopify",
    country: "usa",
    industry: "food & beverages",
    imgSrc: "/src/assets/assets/Images/TylersCoffee.png.webp",
    name: "Tylers Coffee",
  },
  {
    id: crypto.randomUUID(),
    category: "shopify",
    country: "usa",
    imgSrc: "/src/assets/assets/Images/BUY-VAPE-USA.png.webp",
    name: "Buy Vape USA",
  },
  {
    id: crypto.randomUUID(),
    category: "shopify",
    country: "usa",
    imgSrc: "/src/assets/assets/Images/No-Mo-Stache.png.webp",
    name: "No Mo-Stache",
  },
  {
    id: crypto.randomUUID(),
    category: "wordpress",
    country: "usa",
    industry: "sports",
    imgSrc: "/src/assets/assets/Images/SplitGrip.png.webp",
    name: "Split Grip",
  },
  {
    id: crypto.randomUUID(),
    category: "shopify",
    country: "usa",
    imgSrc: "/src/assets/assets/Images/Infinity-Loops.png.webp",
    name: "Infinity Loops",
  },
  {
    id: crypto.randomUUID(),
    category: "shopify",
    country: "usa",
    imgSrc: "/src/assets/assets/Images/wallplanks.png.webp",
    name: "Wallplanks",
  },
  {
    id: crypto.randomUUID(),
    category: "shopify",
    country: "usa",
    industry: "fashion",
    imgSrc: "/src/assets/assets/Images/Rowan-Oak-Clothing-Co.png.webp",
    name: "Rowan Oak",
  },
  {
    id: crypto.randomUUID(),
    category: "shopify",
    country: "usa",
    imgSrc: "/src/assets/assets/Images/Aolithium-Professional.webp",
    name: "Aolithium",
  },
  {
    id: crypto.randomUUID(),
    category: "shopify",
    country: "usa",
    industry: "fashion",
    imgSrc: "/src/assets/assets/Images/Baby-Gold.webp",
    name: "Baby Gold",
  },
  {
    id: crypto.randomUUID(),
    category: "shopify",
    country: "usa",
    industry: "food & beverages",
    imgSrc: "/src/assets/assets/Images/Aubi-Ramsa-Ice-Cream-Co-.png.webp",
    name: "Aubi & Ramsa",
  },
  {
    id: crypto.randomUUID(),
    category: "shopify",
    country: "germany",
    industry: "travel and tourist",
    imgSrc:
      "/src/assets/assets/Images/Airpaq-Sustainability-meets-functionality-Airpaq-GmbH.png.webp",
    name: "Airpaq",
  },
  {
    id: crypto.randomUUID(),
    category: "shopify",
    country: "uk",
    industry: "fashion",
    imgSrc:
      "/src/assets/assets/Images/Women-s-Clothing-Store-Clothing-Boutique-CUBIC-Outside-the-Box.png.webp",
    name: "CUBIC",
  },
  {
    id: crypto.randomUUID(),
    category: "shopify",
    country: "uk",
    industry: "food & beverages",
    imgSrc:
      "/src/assets/assets/Images/thewelshproducestall-the-welsh-produce-stall.png.webp",
    name: "The Welsh Produce Stall",
  },
  {
    id: crypto.randomUUID(),
    category: "shopify",
    country: "uk",
    industry: "food & beverages",
    imgSrc: "/src/assets/assets/Images/fuel.webp",
    name: "Fuel",
  },
  {
    id: crypto.randomUUID(),
    category: "shopify",
    imgSrc: "/src/assets/assets/Images/oceans6media.webp",
    name: "Ocean 6 Media",
  },
  {
    id: crypto.randomUUID(),
    category: "shopify",
    country: "australia",
    industry: "fashion",
    imgSrc:
      "/src/assets/assets/Images/NEUX-Ethically-Made-Australian-Designed-Quality-Womenswear-.png.webp",
    name: "Neux",
  },
  {
    id: crypto.randomUUID(),
    category: "wordpress",
    country: "usa",
    imgSrc: "/src/assets/assets/Images/jojosdogwalking.png.webp",
    name: "jojos Dog Walking",
  },
  {
    id: crypto.randomUUID(),
    category: "shopify",
    country: "usa",
    industry: "food & beverages",
    imgSrc:
      "/src/assets/assets/Images/Indulge-in-Hudson-Pecan-Natures-Tastiest-Guilt-Free-Snack-Hudson-Pecan-Company.png.webp",
    name: "Hudson Pecan Company Inc",
  },
  {
    id: crypto.randomUUID(),
    category: "shopify",
    country: "usa",
    industry: "fashion",
    imgSrc:
      "/src/assets/assets/Images/IKKS-Official-Website-Women-s-Children-s-Men-s-Fashion-Fall-Winter-2023.png.webp",
    name: "IKKS",
  },
  {
    id: crypto.randomUUID(),
    category: "wordpress",
    country: "usa",
    industry: "food & beverages",
    imgSrc: "/src/assets/assets/Images/IFC-Ideal-Food-Corp-.png.webp",
    name: "IFC",
  },
  {
    id: crypto.randomUUID(),
    category: "shopify",
    country: "usa",
    industry: "auto mobile",
    imgSrc: "/src/assets/assets/Images/Bumperninja.png.webp",
    name: "Bumper Ninja",
  },
  {
    id: crypto.randomUUID(),
    category: "shopify",
    country: "usa",
    industry: "health care",
    imgSrc: "/src/assets/assets/Images/Biotrust.webp",
    name: "Bio Trust",
  },
  {
    id: crypto.randomUUID(),
    category: "shopify",
    imgSrc: "/src/assets/assets/Images/vidtre.png.webp",
    name: "Video Platform",
  },
];

const projectCategories = [
  { label: "All Categories", filter: "all" },
  { label: "Shopify", filter: "shopify" },
  { label: "Wordpress", filter: "wordpress" },
];

const ProjectCard = ({ project }) => (
  <div
    className="col-lg-3 col-sm-6 project-card"
    data-category={project.category}
  >
    <div className="imagescrolling-wrapper portfolio-image-wrapper">
      <img
        src={project.imgSrc}
        alt="ProjectsImg"
        className="image-scrolling portfolio-image"
      />
    </div>
    <h3 className="project-name py-3 text-center">{project.name}</h3>
  </div>
);

const ProjectCardsSection = ({ activeFilter }) => (
  <div className="project-cards-section">
    <div className="container-fluid">
      <div className="row">
        {projects
          .filter(
            (project) =>
              activeFilter === "all" || project.category === activeFilter
          )
          .map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
      </div>
    </div>
  </div>
);

function Categories() {
  const [activeFilter, setActiveFilter] = useState("all");

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <div>
      <BreadCrumb title="Categories" />

      <div className="categories-form-wrapper py-sm-5 py-3">
        <div className="categories-form container">
          <div className="filter-container d-flex align-items-center">
            {projectCategories.map((category, index) => (
              <button
                key={index}
                className={`filter-btn tab-btn ${
                  activeFilter === category.filter ? "active" : ""
                }`}
                onClick={() => handleFilterClick(category.filter)}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
        <ProjectCardsSection activeFilter={activeFilter} />
      </div>
    </div>
  );
}

export default Categories;
