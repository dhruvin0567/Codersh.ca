import { memo } from "react";
import BreadCrumb from "../../../components/common/Breadcrumb";
import FadeInLeft from "../../../components/animation/FadeInLeft";
import FadeInRight from "../../../components/animation/FadeInRight";
import FadeInUp from "../../../components/animation/FadeInUp";
import ThumbImg1 from "../../../assets/images/images2/h2.webp";
import ThumbImg2 from "../../../assets/images/images2/h1.webp";
import ThumbImg3 from "../../../assets/images/images2/h3.webp";
import ThumbImg4 from "../../../assets/images/images2/h4.webp";
import { Link } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import SEO from "../../../components/common/SEO";
import FadeInStagger from "../../../components/animation/FadeInStagger";

const GlobalStyle = createGlobalStyle`
  #root {
    overflow-x: hidden; 
  }
`;

const Section = memo(function Section({
  img,
  alt,
  title,
  text,
  reverse,
  btnText,
  btnLink,
  isFirst,
}) {
  return (
    <div
      className={`section ${
        isFirst ? "aximo-section-padding2" : "aximo-section-padding6"
      }`}
    >
      <div className="container">
        <div
          className={`row d-flex ${reverse ? "flex-row-reverse" : ""}`.trim()}
        >
          <div className="col-lg-5">
            <FadeInLeft className="aximo-content-thumb shopify-services-img">
              <img src={img} alt={alt || "Thumb"} loading="lazy" />
            </FadeInLeft>
          </div>
          <div className="col-lg-7 shopify-services-data">
            <FadeInRight>
              <div className="aximo-default-content">
                <h2 className="mb-2">{title}</h2>
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
});

Section.displayName = "Section";

function Headless() {
  return (
    <div>
      <SEO
        title="Headless Shopify Development | Custom Solutions for E-commerce | Codersh Web Services"
        description="Unlock the full potential of Shopify with headless development. Codersh Web Services offers flexible, scalable, and performance-driven headless Shopify solutions tailored for your business needs."
        keywords="Headless Shopify, Shopify headless development, headless e-commerce, Shopify custom solutions, headless architecture, scalable Shopify store, Codersh Web Services"
        canonical="https://react-vite-codersh.vercel.app/headless-shopify"
      />
      <GlobalStyle />
      <BreadCrumb title="Headless & Shopify" />

      <FadeInStagger>
        <div
          className="section aximo-project-page text-center dark-bg"
          style={{ borderTop: "1px solid #fffff5" }}
        >
          <div className="container aximo-section-padding5 shopify-services-data">
            <h3 className="mb-2 light-text">
              Crafting Fast, Sales-Driven Headless Storefronts on Shopify Plus
            </h3>
            <p className="section-description light-text">
              We are a leading Shopify and Shopify Plus agency specializing in
              high-performance, headless e-commerce solutions. Partnering with
              top brands, we design, develop, and support conversion-driven
              stores using best-in-class tools and Shopify Plus. Our expert team
              delivers fast, scalable, and future-ready experiences tailored to
              your business goals—pushing the boundaries of what’s possible in
              modern e-commerce.
            </p>
          </div>
        </div>
      </FadeInStagger>

      <Section
        img={ThumbImg2}
        alt="Speed Optimized"
        title="Speed-Optimized Headless Shopify Plus Digital Stores"
        text="Headless Shopify Plus stores, built with modern JavaScript frameworks, deliver speed, high Google Lighthouse scores, and improved conversions. Their API-first architecture offers performance control and advanced optimizations. While perfect for scalability and flexibility, headless solutions require technical expertise, ongoing development, and may complicate content management. Businesses should evaluate goals, resources, and long-term needs before adopting headless to ensure it aligns with performance, SEO, and operational goals."
        btnText="Learn More"
        btnLink="/contact-us"
        isFirst
      />

      <Section
        img={ThumbImg1}
        alt="Content Control"
        title="Total Content Control with Advanced Tools"
        text="Headless eCommerce stores on Shopify Plus decouple the front end, enabling flexible use of modern CMS tools like Contentful and Hydrogen. This boosts performance, supports dynamic content, and allows full API control for custom user experiences. Merchants gain creative freedom while leveraging Shopify Plus’s robust back-end, resulting in a scalable, high-performing solution ideal for modern eCommerce demands."
        btnText="Get in touch today!"
        btnLink="/contact-us"
        reverse
      />

      <Section
        img={ThumbImg3}
        alt="Future Ready"
        title="Future-Ready Commerce Backend with Shopify Plus"
        text="Shopify’s API and third-party integrations enable secure, seamless communication between a headless store’s front end and Shopify Plus’s powerful backend. Using frameworks like Hydrogen, our headless solutions support complex business needs, custom storefronts, and enterprise-grade security—while maintaining full front-end control and leveraging the latest technologies."
        btnText="Learn More"
        btnLink="/contact-us"
      />

      <Section
        img={ThumbImg4}
        alt="Trusted Partners"
        title="Trusted Partners in Headless Solutions"
        text="Implementing headless eCommerce adds complexity, but partnering with providers like Netlify and Klevu ensures peak performance and reliable integrations. While some tools lack open API support, reviewing headless case studies helps assess compatibility. For a seamless transformation, consult experienced agencies to align technology with your business goals."
        btnText="Get in touch today!"
        btnLink="/contact-us"
        reverse
      />
    </div>
  );
}

export default Headless;
