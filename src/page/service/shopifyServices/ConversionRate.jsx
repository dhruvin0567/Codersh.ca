import BreadCrumb from "../../../components/common/Breadcrumb";
import FadeInLeft from "../../../components/animation/FadeInLeft";
import FadeInRight from "../../../components/animation/FadeInRight";
import FadeInUp from "../../../components/animation/FadeInUp";
import { Link } from "react-router-dom";
import ThumbImg1 from "../../../assets/images/images2/service5_1_2.webp";
import ThumbImg2 from "../../../assets/images/images2/service5_2.webp";
import ThumbImg5 from "../../../assets/images/images2/srvice10_2.webp";
import ThumbImg3 from "../../../assets/images/images2/Services4_3.webp";
import ThumbImg4 from "../../../assets/images/images2/service8_3.webp";
import { createGlobalStyle } from "styled-components";
import SEO from "../../../components/common/SEO";
import FadeInStagger from "../../../components/animation/FadeInStagger";
const GlobalStyle = createGlobalStyle`
  #root {
	 overflow-x: hidden; 
  }
`;

function ConversionRate() {
  return (
    <div>
      <GlobalStyle />
      <SEO
        title="Conversion Rate Optimization for Shopify | Boost E-commerce Sales | Codersh Web Services"
        description="Maximize your Shopify store’s potential with expert Conversion Rate Optimization (CRO) services from Codersh Web Services. Increase sales and improve customer engagement with data-driven strategies."
        keywords="Conversion rate optimization, Shopify CRO, e-commerce sales optimization, Shopify store conversion, improve store sales, increase Shopify conversions, Shopify experts, Codersh Web Services"
        canonical="https://react-vite-codersh.vercel.app/conversion-rate"
      />
      <BreadCrumb title="Conversion Rate Optimization" />

      <FadeInStagger>
        <div
          className="section aximo-project-page text-center dark-bg"
          style={{ borderTop: "1px solid #fffff5" }}
        >
          <div className="container aximo-section-padding5 shopify-services-data">
            <h3 className="mb-2 light-text">
              Your Trusted Shopify CRO Partner for Higher Conversions and
              Scalable Growth
            </h3>
            <p className="section-description light-text">
              Codersh helps Shopify and Shopify Plus stores achieve sustainable
              growth with expert CRO services. We optimize user experience and
              increase sales potential, delivering powerful results for brands
              across industries, ensuring your store’s long-term success.
            </p>
          </div>
        </div>
      </FadeInStagger>

      <div className="section aximo-section-padding2">
        <div className="container">
          <div className="row d-flex">
            <div className="col-lg-5">
              <FadeInLeft className="aximo-content-thumb shopify-services-img">
                <img src={ThumbImg1} alt="Thumb" />
              </FadeInLeft>
            </div>
            <div className="col-lg-7  colo-12  shopify-services-data">
              <FadeInRight>
                <div className="aximo-default-content">
                  <h3 className="mb-2">
                    Shopify CRO Agency - Shopify developer
                  </h3>
                  <h2 className="mb-2">
                    Combining Technical Expertise with Growth Strategies to Turn
                    Visitors into Loyal Customers.
                  </h2>
                  <p className="mb-4">
                    As an accredited Shopify expert, We offers a team of skilled
                    developers who create custom features tailored to your
                    business needs. We integrate top-tier Shopify app
                    technologies to enhance performance and collaborate with you
                    to develop a strategic roadmap focused on on-site
                    performance and customer satisfaction, delivering
                    results-driven features that boost your store’s success.
                  </p>

                  <FadeInUp className="aximo-btn-wrap2 mt-0  shopify-services-btn">
                    <Link to="/contact-us" className="iwt-button">
                      Get Started Today
                    </Link>
                  </FadeInUp>
                </div>
              </FadeInRight>
            </div>
          </div>
        </div>
      </div>

      <div className="section aximo-section-padding6">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 order-lg-2">
              <FadeInRight className="aximo-content-thumb shopify-services-img">
                <img src={ThumbImg2} alt="thumb" />
              </FadeInRight>
            </div>
            <div className="col-lg-7 shopify-services-data">
              <FadeInLeft>
                <div className="aximo-default-content">
                  <h3 className="mb-2">
                    Shopify conversion rate optimization (CRO) - Design
                  </h3>
                  <h2 className="mb-2">
                    Design Impactful Shopify Experiences that Engage and
                    Resonate with Customers.
                  </h2>
                  <p className="mb-4">
                    At Codersh, we create visually appealing, brand-aligned, and
                    user-friendly designs that boost customer retention and
                    drive conversions. By presenting information clearly and
                    optimizing the design for seamless navigation, we enhance
                    the customer journey, keeping users engaged and motivated to
                    make purchases.
                  </p>
                  <FadeInUp className="aximo-btn-wrap2 mt-0  shopify-services-btn">
                    <Link to="/contact-us" className="iwt-button">
                      Get Started Today
                    </Link>
                  </FadeInUp>
                </div>
              </FadeInLeft>
            </div>
          </div>
        </div>
      </div>

      <div className="section aximo-section-padding6">
        <div className="container">
          <div className="row d-flex">
            <div className="col-lg-5">
              <FadeInLeft className="aximo-content-thumb shopify-services-img">
                <img src={ThumbImg3} alt="Thumb" />
              </FadeInLeft>
            </div>
            <div className="col-lg-7  colo-12  shopify-services-data">
              <FadeInRight>
                <div className="aximo-default-content">
                  <h3 className="mb-2">
                    CRO agency - Split testing & reporting
                  </h3>
                  <h2 className="mb-2">Let data power your decisions.</h2>
                  <p className="mb-4">
                    At Codersh, we believe data is key to successful e-commerce
                    strategies. Using tools like A/B testing, feature reporting,
                    and monthly analytics, our team tracks performance and
                    uncovers opportunities for improvement. This data-driven
                    approach ensures every decision drives continuous
                    enhancement of your store’s metrics.
                  </p>

                  <FadeInUp className="aximo-btn-wrap2 mt-0 shopify-services-btn">
                    <Link to="/contact-us" className="iwt-button">
                      Contact Us Now!
                    </Link>
                  </FadeInUp>
                </div>
              </FadeInRight>
            </div>
          </div>
        </div>
      </div>

      <div className="section aximo-section-padding6">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 order-lg-2">
              <FadeInRight className="aximo-content-thumb shopify-services-img">
                <img src={ThumbImg4} alt="thumb" />
              </FadeInRight>
            </div>
            <div className="col-lg-7 shopify-services-data">
              <FadeInLeft>
                <div className="aximo-default-content">
                  <h3 className="mb-2">CRO - AOV, LTV & Engagement</h3>
                  <h2 className="mb-2">
                    Building success through essential metrics for sustainable
                    growth.
                  </h2>
                  <p className="mb-4">
                    We takes a holistic approach to CRO, focusing on key
                    performance indicators like average order value (AOV),
                    lifetime value (LTV), and engagement metrics such as session
                    duration and bounce rates. By enhancing customer
                    experiences, we drive sales and foster long-term loyalty,
                    ensuring sustainable growth.
                  </p>
                  <FadeInUp className="aximo-btn-wrap2 mt-0  shopify-services-btn">
                    <Link to="/contact-us" className="iwt-button">
                      Contact Us Now
                    </Link>
                  </FadeInUp>
                </div>
              </FadeInLeft>
            </div>
          </div>
        </div>
      </div>

      <div className="section aximo-section-padding6">
        <div className="container">
          <div className="row d-flex">
            <div className="col-lg-5">
              <FadeInLeft className="aximo-content-thumb shopify-services-img">
                <img src={ThumbImg5} alt="Thumb" />
              </FadeInLeft>
            </div>
            <div className="col-lg-7  colo-12  shopify-services-data">
              <FadeInRight>
                <div className="aximo-default-content">
                  <h3 className="mb-2">Growth & Strategy.</h3>
                  <h2 className="mb-2">
                    Merging knowledge and skill with tested strategies for
                    consistent growth.
                  </h2>
                  <p className="mb-4">
                    Our membership plans offer the perfect solution for
                    businesses seeking a dedicated e-commerce growth partner.
                    Our team focuses on improving conversion rates through
                    custom design, feature development, and detailed audits,
                    alongside ongoing support. These plans are built to ensure
                    long-term success and KPI-driven optimization for Shopify
                    and Shopify Plus stores.
                  </p>

                  <FadeInUp className="aximo-btn-wrap2 mt-0 shopify-services-btn">
                    <Link to="/contact-us" className="iwt-button">
                      Contact Us Now!
                    </Link>
                  </FadeInUp>
                </div>
              </FadeInRight>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConversionRate;
