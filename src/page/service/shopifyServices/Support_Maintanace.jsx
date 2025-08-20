import BreadCrumb from "../../../components/common/Breadcrumb";
import FadeInLeft from "../../../components/animation/FadeInLeft";
import FadeInRight from "../../../components/animation/FadeInRight";
import FadeInUp from "../../../components/animation/FadeInUp";
import { Link } from "react-router-dom";
import ThumbImg1 from "../../../assets/images/images2/service12_4.webp";
import ThumbImg2 from "../../../assets/images/images2/patherrimgs/8.webp";
import ThumbImg3 from "../../../assets/images/images2/services12_5.webp";
import ThumbImg4 from "../../../assets/images/images2/patherrimgs/26.webp";
import { createGlobalStyle } from "styled-components";
import SEO from "../../../components/common/SEO";
import FadeInStagger from "../../../components/animation/FadeInStagger";
const GlobalStyle = createGlobalStyle`
  #root {
	 overflow-x: hidden; 
  }
`;

function Support_Maintanace() {
  return (
    <>
      <GlobalStyle />
      <SEO
        title="Shopify Support & Maintenance Services | Codersh Web Services"
        description="Ensure your Shopify store runs smoothly with Codersh Web Services. Our comprehensive support and maintanance services cover updates, troubleshooting, and performance optimization."
        keywords="Shopify support, Shopify maintanance, Shopify store updates, e-commerce troubleshooting, store performance optimization, Shopify experts, Codersh Web Services"
        canonical="https://react-vite-codersh.vercel.app/support-&-maintanance"
      />
      <BreadCrumb title="Support & Maintanance" />

      <FadeInStagger>
        <div
          className="section aximo-project-page text-center dark-bg"
          style={{ borderTop: "1px solid #fffff5" }}
        >
          <div className="container aximo-section-padding5 shopify-services-data">
            <h3 className="mb-2 light-text">
              All-in-One Shopify Experts on Demand — Developers, Designers &
              Growth Strategists
            </h3>
            <p className="section-description light-text">
              Get monthly access to a full suite of Shopify and Shopify Plus
              services with one membership. From design and development to store
              optimization and growth strategy, our team helps your store scale
              faster and smarter.
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
                  <h3 className="mb-2">Shopify Development Retainer</h3>
                  <h2 className="mb-2">
                    Leverage Conversions with Premium, Cutting-Edge Technology.
                  </h2>
                  <p className="mb-4">
                    We provides expert Shopify developers through flexible
                    retainer services, delivering impactful features and
                    seamless integrations. As accredited Shopify experts, we
                    handle everything from bug fixes and custom app development
                    to subscription features and tailored functionality—ensuring
                    your store runs smoothly and is built for success.
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
                  <h3 className="mb-2">Shopify Retainer</h3>
                  <h2 className="mb-2">
                    Captivate Shoppers With Premium Design
                  </h2>
                  <p className="mb-4">
                    Our expert web designers create UI designs that reflect your
                    brand identity while driving conversions and growth. Aligned
                    with your brand guidelines, our designs deliver standout
                    user experiences that engage and captivate. With e-commerce
                    competition rising, leveraging our design expertise through
                    a Shopify retainer gives your store a vital edge.
                  </p>
                  <FadeInUp className="aximo-btn-wrap2 mt-0 shopify-services-btn">
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
                  <h3 className="mb-2">Shopify Optimization Retainer</h3>
                  <h2 className="mb-2">Conversion Rate Optimization</h2>
                  <p className="mb-4">
                    Our CRO agency services help Shopify and Shopify Plus stores
                    achieve sustainable growth by improving conversion rates
                    through expert design, development, technical support, and
                    strategy. Our tailored CRO solutions optimize user behavior,
                    enhance purchasing decisions, and drive long-term business
                    success.
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
                  <h3 className="mb-2">
                    Technical Support & Shopify Support Services
                  </h3>
                  <h2 className="mb-2">
                    Your dedicated support team, ready when needed.
                  </h2>
                  <p className="mb-4">
                    Running an online store is complex, but We provides
                    dedicated support tailored to your needs. Through ongoing
                    communication, we handle store-specific issues and offer
                    expert guidance beyond standard Shopify support. For urgent
                    requests, our "Codersh Response" SLA add-on ensures fast,
                    reliable assistance when you need it most.
                  </p>
                  <FadeInUp className="aximo-btn-wrap2 mt-0 shopify-services-btn">
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
    </>
  );
}

export default Support_Maintanace;
