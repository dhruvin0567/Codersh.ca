import React from "react";
import BreadCrumb from "../../../components/common/Breadcrumb";
import FadeInLeft from "../../../components/animation/FadeInLeft";
import FadeInRight from "../../../components/animation/FadeInRight";
import FadeInUp from "../../../components/animation/FadeInUp";
import { Link } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import SEO from "../../../components/common/SEO";
import ThumbImg1 from "../../../assets/images/images2/2.webp";
import ThumbImg2 from "../../../assets/images/images2/4.webp";
import ThumbImg3 from "../../../assets/images/images2/7.webp";
import ThumbImg4 from "../../../assets/images/images2/8.webp";
import ThumbImg6 from "../../../assets/images/images2/10.webp";
import ThumbImg7 from "../../../assets/images/images2/11.webp";

const GlobalStyle = createGlobalStyle`
  #root {
    overflow-x: hidden; 
  }
`;

const ServiceSectionComponent = ({
  img,
  title,
  subtitle,
  text,
  btnText,
  btnLink,
  reverse,
  index,
}) => (
  <div
    className={`section ${
      index === 0 ? "aximo-section-padding2" : "aximo-section-padding6"
    }`}
  >
    <div className="container">
      <div className={`row d-flex ${reverse ? "flex-row-reverse" : ""}`}>
        <div className="col-lg-5">
          <FadeInLeft className="aximo-content-thumb shopify-services-img">
            <img src={img} alt={title} loading="lazy" />
          </FadeInLeft>
        </div>
        <div className="col-lg-7 shopify-services-data">
          <FadeInRight>
            <div className="aximo-default-content">
              <h2 className="mb-2">{title}</h2>
              <h3 className="mb-2">{subtitle}</h3>
              <p className="mb-4">{text}</p>
              <FadeInUp className="aximo-btn-wrap2 mt-0 shopify-services-btn">
                <Link to={btnLink} className="iwt-button">
                  {btnText}
                </Link>
              </FadeInUp>
            </div>
          </FadeInRight>
        </div>
      </div>
    </div>
  </div>
);

const ServiceSection = React.memo(ServiceSectionComponent);
ServiceSection.displayName = "ServiceSection";

const sections = [
  {
    img: ThumbImg1,
    title: "Built for Your Revenue Goals, Powered by Expertise",
    subtitle: "Custom Shopify themes tailored to your brand needs.",
    text: `Whether you're a budding startup or an established brand, we craft Shopify themes 
    that align with your business objectives and support sustainable growth. Our team focuses 
    on maximizing your store’s potential by designing themes optimized for engagement, 
    speed, and long-term success.`,
    btnText: "Get Started Today",
    btnLink: "/contact-us",
    reverse: false,
  },
  {
    img: ThumbImg3,
    title: "Discovery, Strategy & Planning",
    subtitle: "Every successful store starts with a solid foundation.",
    text: `Our process begins with an in-depth understanding of your brand, audience, and 
    industry. We analyze competitors, map out user journeys, and create sitemaps to ensure an 
    efficient and conversion-focused website structure.This stage lays the groundwork for a
    Shopify store that speaks to your audience and drives results.`,
    btnText: "Contact Us Now!",
    btnLink: "/contact-us",
    reverse: true,
  },
  {
    img: ThumbImg4,
    title: "CRO Optimized Design That Captivates & Converts",
    subtitle: "Stand out with designs as unique as your brand.",
    text: `Using insights from our discovery phase, we craft bespoke designs that resonate
    with your audience and amplify your brand’s personality. From wireframes to high-fidelity
    visuals, every element is carefully designed to boost engagement, increase sales, and
    leave a lasting impression on your customers.`,
    btnText: "Let's Built It",
    btnLink: "/contact-us",
    reverse: false,
  },
  {
    img: ThumbImg2,
    title: "Shopify Development Optimized for Results",
    subtitle: "Where design meets powerful functionality.",
    text: `Our experienced Shopify developers turn designs into pixel-perfect, high-performing
    themes. We ensure that your store is fully optimized for all devices and browsers, with fast
    loading times and built-in SEO best practices. Need custom integrations or private Shopify apps?
    We’ve got you covered.`,
    btnText: "Get Started Today",
    btnLink: "/contact-us",
    reverse: true,
  },
  {
    img: ThumbImg6,
    title: "Seamless Testing & Launch",
    subtitle: "Flawless execution for a stress-free launch.",
    text: `Before your store goes live, we conduct rigorous testing to eliminate bugs and ensure 
    a smooth experience for your customers. Our team handles every detail, so your launch day is as
    seamless as possible.`,
    btnText: "Contact Us Now!",
    btnLink: "/contact-us",
    reverse: false,
  },
  {
    img: ThumbImg7,
    title: "Beyond Launch: Optimization & Support",
    subtitle: "Your growth partner for the long haul.",
    text: `Our commitment doesn’t end at launch. We offer ongoing optimization and support to
    ensure your store evolves to meet your customers’ needs. From performance enhancements to
    feature updates, we’re here to help your business thrive long-term.`,
    btnText: "Let's Built It",
    btnLink: "/contact-us",
    reverse: true,
  },
];

function CustomStore() {
  return (
    <div>
      <GlobalStyle />
      <SEO
        title="Custom Shopify Store Development | Codersh Web Services"
        description="Create a unique, high-performance Shopify store with Codersh Web Services."
        keywords="Custom Shopify store, Shopify store development, Shopify design, custom store design, e-commerce solutions, Shopify experts, advanced Shopify features, Codersh Web Services"
        canonical="https://react-vite-codersh.vercel.app/customStore"
      />
      <BreadCrumb title="Custom Store Projects" />

      {sections.map((section, index) => (
        <ServiceSection key={index} {...section} index={index} />
      ))}
    </div>
  );
}

export default CustomStore;
