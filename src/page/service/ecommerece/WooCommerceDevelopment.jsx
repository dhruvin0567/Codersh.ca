import { Link } from "react-router-dom";
import FadeInStagger from "../../../components/animation/FadeInStagger";
import FadeInLeft from "../../../components/animation/FadeInLeft";
import FadeInRight from "../../../components/animation/FadeInRight";
import FadeInUp from "../../../components/animation/FadeInUp";
import ServiceCard from "../../../components/home-four/services/ServiceCard";
import BlogCard from "../../../components/home-six/blogs/BlogCard";
import BreadCrumb from "../../../components/common/Breadcrumb";
import Clutch from "../../../assets/images/images2/clutch.svg";
import StarImg from "../../../assets/images/images2/star.webp";

import ServiceIcon1 from "../../../assets/images/images2/cms-setup.webp";
import ServiceIcon2 from "../../../assets/images/images2/psd-to-wordpress.webp";
import ServiceIcon3 from "../../../assets/images/images2/web-custom-development.webp";
import ServiceIcon4 from "../../../assets/images/images2/web-development.webp";
import ServiceIcon5 from "../../../assets/images/images2/plugin.webp";
import ServiceIcon6 from "../../../assets/images/images2/maintenance.webp";
import ServiceIcon7 from "../../../assets/images/images2/woo-commerce.webp";
import ServiceIcon8 from "../../../assets/images/images2/blog.webp";
import ServiceIcon9 from "../../../assets/images/images2/api.webp";

import Thumb1Img from "../../../assets/images/images2/Woocommerce-image.webp";
import Thumb2Img from "../../../assets/images/images2/Woocommerce-image-Project.webp";

import ProcessImg1 from "../../../assets/images/images2/reauirement-gathering.webp";
import ProcessImg2 from "../../../assets/images/images2/uiux.webp";
import ProcessImg3 from "../../../assets/images/images2/prototype.webp";
import ProcessImg4 from "../../../assets/images/images2/dynamic-development.webp";
import ProcessImg5 from "../../../assets/images/images2/testing.webp";
import ProcessImg6 from "../../../assets/images/images2/live-development.webp";
import ProcessImg7 from "../../../assets/images/images2/question.webp";

import Workcard1 from "../../../assets/images/ourwork/New-Project-1-1024x1024.webp";
import Workcard2 from "../../../assets/images/ourwork/New-Project-3-1024x1024.webp";
import Workcard3 from "../../../assets/images/ourwork/New-Project-1024x1024.webp";

const serviceData = [
  {
    id: crypto.randomUUID(),
    title: "WooCommerce Store Setup and Configuration",
    iconImg: ServiceIcon1,
  },
  {
    id: crypto.randomUUID(),
    title: "Conversion of Designs to Pixel-Perfect WooCommerce Websites",
    iconImg: ServiceIcon2,
  },
  {
    id: crypto.randomUUID(),
    title: "Custom WooCommerce Website Development",
    iconImg: ServiceIcon3,
  },
  {
    id: crypto.randomUUID(),
    title: "WooCommerce Theme Development & Customization",
    iconImg: ServiceIcon4,
  },
  {
    id: crypto.randomUUID(),
    title: "WooCommerce Plugin Development Service",
    iconImg: ServiceIcon5,
  },
  {
    id: crypto.randomUUID(),
    title: "WooCommerce Migration and Maintenance Services",
    iconImg: ServiceIcon6,
  },
  {
    id: crypto.randomUUID(),
    title: "WooCommerce Development Service",
    iconImg: ServiceIcon7,
  },
  {
    id: crypto.randomUUID(),
    title: "WooCommerce Blog Development Service",
    iconImg: ServiceIcon8,
  },
  {
    id: crypto.randomUUID(),
    title: "WooCommerce API Integration Service",
    iconImg: ServiceIcon9,
  },
];

const featuresData = [
  {
    id: crypto.randomUUID(),
    iconImg: ProcessImg1,
    title: "1. Gathering requirements",
  },
  {
    id: crypto.randomUUID(),
    iconImg: ProcessImg2,
    title: "2. UI/UX Design",
  },
  {
    id: crypto.randomUUID(),
    iconImg: ProcessImg3,
    title: "3. Static Prototype",
  },
  {
    id: crypto.randomUUID(),
    iconImg: ProcessImg4,
    title: "4. Dynamic Development",
  },
  {
    id: crypto.randomUUID(),
    iconImg: ProcessImg5,
    title: "5. Quality Assurance",
  },
  {
    id: crypto.randomUUID(),
    iconImg: ProcessImg6,
    title: "6. Live Deployment",
  },
  {
    id: crypto.randomUUID(),
    iconImg: ProcessImg7,
    title: "7. Support and Upkeep",
  },
];

const blogsData = [
  {
    id: crypto.randomUUID(),
    title: "Online Book Store",
    content: "Shift4shop | React | Styled Components",
    img: Workcard1,
  },
  {
    id: crypto.randomUUID(),
    title: "Texas Fowlers",
    content: "Shift4shop | Bootstrap | JavaScript",
    img: Workcard2,
  },
  {
    id: crypto.randomUUID(),
    title: "Redesign Hub",
    content: "Wordpress | Elementor Pro | Calendly",
    img: Workcard3,
  },
];

function WooCommerceDevelopment() {
  return (
    <>
      <BreadCrumb title="Woo Commerce" />

      <div className="top-rated">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <Link
                to="/contact-us"
                className="clutch-widget d-flex mb-4 mb-lg-0"
              >
                <span className="me-2">
                  <p className="mb-0">Reviewed On</p>
                  <img src={Clutch} alt width={82} />
                </span>
                <span className="d-flex flex-column justify-content-between">
                  <img src={StarImg} alt width={90} />
                  <p className="review-amount mb-0">16 Reviews</p>
                </span>
              </Link>
            </div>
            <div className="col-lg-9 d-flex align-items-center">
              <p className="top-rated-text ms-lg-4">
                Top Rated 5.0 out of 5.0 for Codersh by 120+ clients on more
                than 1200+ projects. <Link to="/ourwork2">View Work</Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="section aximo-section-padding3 position-relative">
        <div className="container">
          <div className="mb-5 text-center">
            <div className="row">
              <div className="col">
                <h3 style={{ fontSize: "2.5rem" }} className="mb-3">
                  {" "}
                  WooCommerce Development Services We Offer
                </h3>
                <p>
                  We are dedicated to aiding our clients in opening the doors to
                  the virtual world by offering a diverse range of WooCommerce
                  solutions that enable the next-generation user experience for
                  your target audience.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            {serviceData.map((service, index) => (
              <FadeInStagger
                key={service.id}
                index={index}
                className="col-xl-4 col-md-6 col-lg-6"
              >
                <ServiceCard service={service} />
              </FadeInStagger>
            ))}
          </div>
        </div>
      </div>

      <div className="section ">
        <div className="container">
          <div className="row pb-5">
            <div className="col-lg-6">
              <FadeInLeft className="aximo-content-thumb3">
                <img src={Thumb1Img} alt="Thumb" />
              </FadeInLeft>
            </div>
            <div className="col-lg-6 d-flex align-items-center">
              <div className="aximo-default-content2 libre-font m-left-gap-small">
                <h3 className="mb-4">Hire Dedicated WooCommerce Developer</h3>
                <p className="fs-18 mb-4">
                  Elevate your online store with our WooCommerce Custom
                  Development options. Our dedicated infrastructure and expert
                  WooCommerce developers work exclusively on your project,
                  offering complete control and transparency.
                </p>

                <ul className="mb-4">
                  <li>
                    <i
                      className="fa-solid fa-check"
                      style={{ color: "#000000", marginRight: "20px" }}
                    />
                    Monthly Payment
                  </li>
                  <li>
                    <i
                      className="fa-solid fa-check"
                      style={{ color: "#000000", marginRight: "20px" }}
                    />
                    No Setup Expenses
                  </li>
                  <li>
                    <i
                      className="fa-solid fa-check"
                      style={{ color: "#000000", marginRight: "20px" }}
                    />
                    Transparent Billing with Tracked Hours
                  </li>
                  <li>
                    <i
                      className="fa-solid fa-check"
                      style={{ color: "#000000", marginRight: "20px" }}
                    />
                    Assurance of No Hidden Fees
                  </li>
                </ul>

                <FadeInUp className="aximo-btn-wrap2">
                  <Link to="/contact-us" className="iwt-button">
                    Hire Us Now
                  </Link>
                </FadeInUp>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 mt-sm-5 d-flex align-items-center order-lg-1 order-2">
              <div className="aximo-default-content2 libre-font m-left-gap-small">
                <h3 className="mb-4">
                  Why Choose WooCommerce <br /> for Your Online Store
                </h3>
                <p className="fs-18 mb-4">
                  Your business deserves a dynamic online presence. Choose our
                  custom WooCommerce Development Services to revolutionize your
                  e-commerce venture, ensuring a robust and scalable platform.
                </p>

                <ul className="mb-4">
                  <li>
                    <i
                      className="fa-solid fa-check"
                      style={{ color: "#000000", marginRight: "20px" }}
                    />
                    Free to Use and Setup
                  </li>
                  <li>
                    <i
                      className="fa-solid fa-check"
                      style={{ color: "#000000", marginRight: "20px" }}
                    />
                    Extensive Plugin Library
                  </li>
                  <li>
                    <i
                      className="fa-solid fa-check"
                      style={{ color: "#000000", marginRight: "20px" }}
                    />
                    Flexibility and Adaptability
                  </li>
                  <li>
                    <i
                      className="fa-solid fa-check"
                      style={{ color: "#000000", marginRight: "20px" }}
                    />
                    Diverse Range of Themes
                  </li>
                  <li>
                    <i
                      className="fa-solid fa-check"
                      style={{ color: "#000000", marginRight: "20px" }}
                    />
                    Active Community Support
                  </li>
                </ul>

                <FadeInUp className="aximo-btn-wrap2">
                  <Link to="/contact-us" className="iwt-button">
                    Get Free Quotes Now!
                  </Link>
                </FadeInUp>
              </div>
            </div>
            <div className="col-lg-6 mt-sm-5 order-lg-2 order-1">
              <FadeInRight className="aximo-content-thumb3">
                <img src={Thumb2Img} alt="Thumb" />
              </FadeInRight>
            </div>
          </div>
        </div>
      </div>

      <div className="section aximo-section-padding3">
        <div className="container">
          <div className="aximo-section-title">
            <div className="row text-center">
              <div className="col">
                <h3 style={{ fontSize: "2.5rem" }}>Process We Follow</h3>
                <p>
                  We design, build and support websites and apps for clients
                  worldwide. <br />
                  We make your business stand out. Interested? Let's chat.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="row">
              {featuresData.map((service, index) => (
                <FadeInStagger
                  key={service.id}
                  index={index}
                  className="col-xl-4 col-md-6 col-lg-6"
                >
                  <ServiceCard service={service} />
                </FadeInStagger>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="section aximo-section-padding32">
        <div className="container">
          <div className="aximo-section-title playfair">
            <div className="row">
              <div className="col text-center">
                <h3 style={{ fontSize: "2.5rem" }}>Our Recent Work</h3>
                <p>
                  Our portfolio speaks loudly that we are giving best solutions
                  for every ideas.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            {blogsData.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default WooCommerceDevelopment;
