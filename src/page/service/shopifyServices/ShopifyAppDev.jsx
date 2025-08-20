import BreadCrumb from "../../../components/common/Breadcrumb";
import ThumbImg1 from "../../../assets/images/images2/srvice10_2.webp";
import ThumbImg2 from "../../../assets/images/images2/h4.webp";
import ThumbImg3 from "../../../assets/images/images2/srvice10_3.webp";
import FadeInLeft from "../../../components/animation/FadeInLeft";
import FadeInRight from "../../../components/animation/FadeInRight";
import FadeInUp from "../../../components/animation/FadeInUp";
import { Link } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import SEO from "../../../components/common/SEO";
const GlobalStyle = createGlobalStyle`
  #root {
	 overflow-x: hidden; 
  }
`;

function ShopifyAppDev() {
  return (
    <div>
      <GlobalStyle />
      <SEO
        title="Shopify App Development | Custom Apps for Your E-commerce Needs | Codersh Web Services"
        description="Enhance your Shopify store with custom app development by Codersh Web Services. We create tailor-made apps to boost functionality, streamline operations, and provide unique solutions for your business."
        keywords="Shopify app development, custom Shopify apps, e-commerce app solutions, Shopify app development services, Shopify functionality, Shopify app experts, Codersh Web Services"
        canonical="https://react-vite-codersh.vercel.app/shopify-app-development"
      />
      <BreadCrumb title="Shopify App Development" />

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
                  <h2 className="mb-2">
                    Transform Your Store’s Functionality and User Experience
                    with Custom Shopify Apps.
                  </h2>
                  <p className="mb-4">
                    Codersh is a Shopify agency with extensive expertise in
                    creating, developing, and launching custom Shopify apps.
                    From tailored back-end features and custom API integrations
                    to enhanced front-end functionality, our team is here to
                    help you successfully launch your custom Shopify app.
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
                  <h2 className="mb-2">
                    Shopify app development partnerships.
                  </h2>
                  <p className="mb-4">
                    As experts in Shopify integrations, we work closely with
                    leading apps like ReCharge, Yotpo, Klaviyo, and Klevu to
                    build seamless integrations that enhance your store’s
                    capabilities. These integrations enable us to provide a
                    highly customized experience, all while keeping your brand’s
                    vision at the forefront of the solution.
                  </p>
                  <FadeInUp className="aximo-btn-wrap2 mt-0 shopify-services-btn">
                    <Link to="/contact-us" className="iwt-button">
                      Get in Touch
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
                  <h2 className="mb-2">
                    Case Study: Madame F Design & Development
                  </h2>
                  <h3 className="mb-2">
                    Every successful store starts with a solid foundation.
                  </h3>
                  <p className="mb-4">
                    We created the design in Canva and then implemented it in
                    Shopify. User experience improvements included larger header
                    navigation text, an enhanced logo, and a new "10% off your
                    first order" CTA button. The "Who is Madame F?" section
                    gained better readability with a black background, while the
                    "Our Wines" section was refined by removing empty image
                    boxes. Product pages were upgraded with a slider feature,
                    and a Social Proof section was added to enhance customer
                    trust.
                  </p>

                  <FadeInUp className="aximo-btn-wrap2 mt-0  shopify-services-btn">
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

export default ShopifyAppDev;
