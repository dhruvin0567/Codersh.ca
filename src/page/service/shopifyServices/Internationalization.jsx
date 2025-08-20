import BreadCrumb from "../../../components/common/Breadcrumb";
import FadeInLeft from "../../../components/animation/FadeInLeft";
import FadeInRight from "../../../components/animation/FadeInRight";
import FadeInStagger from "../../../components/animation/FadeInStagger";
import FadeInUp from "../../../components/animation/FadeInUp";
import ThumbImg1 from "../../../assets/images/images2/service6-1.webp";
import FeatureImg1 from "../../../assets/images/images2/shopifyplus-300x300.jpg.webp";
import FeatureImg2 from "../../../assets/images/images2/bold-300x300.jpg.webp";
import FeatureImg3 from "../../../assets/images/images2/klarna-300x300.jpg.webp";
import FeatureImg4 from "../../../assets/images/images2/klaviyo-300x300.jpg.webp";
import FeatureImg5 from "../../../assets/images/images2/mailchimp-300x300.jpg.webp";
import FeatureImg6 from "../../../assets/images/images2/applepay-300x300.jpg.webp";
import FeatureImg7 from "../../../assets/images/images2/feefo-300x300.jpg.webp";
import FeatureImg8 from "../../../assets/images/images2/zendesk-300x300.jpg.webp";
import FeatureImg9 from "../../../assets/images/images2/loyaltylion-300x300.jpg.webp";
import Check from "../../../assets/images/icon/check.svg";
import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
  #root {
	 overflow-x: hidden; 
  }
`;
import { Link } from "react-router-dom";
import SEO from "../../../components/common/SEO";

const faqData = {
  faq1: [
    {
      id: crypto.randomUUID(),
      title: "Localized Selling with a Multi-Store Approach on Shopify",
      text1:
        "Selling internationally on Shopify can be done by localizing a single store or creating separate stores for each region. While a single store simplifies management, the multi-store approach offers greater control-enabling tailored products, region-specific marketing, and localized content. This strategy enhances customer connection but requires more oversight and resources.",
      text2:
        "A major advantage of using separate Shopify stores for each region is the ability to fully tailor product catalogs, visuals, and content to local preferences, creating personalized shopping experiences. This targeted approach increases engagement and boosts conversions. With Shopify Plus offering up to nine expansion stores at no extra cost, it’s also a cost-effective way to scale globally.",
    },
    {
      id: crypto.randomUUID(),
      title: "Why Shopify Plus is Ideal for International Expansion?",
      text1:
        "Shopify Plus goes beyond infrastructure, offering powerful features that support marketing and e-commerce teams. Automations like inventory flagging and campaign launches streamline multi-store management, while tools like Shopify’s Geolocation app seamlessly redirect customers to region-specific stores-enhancing user experience and optimizing performance across localized markets.",
    },
  ],

  faq2: [
    {
      id: crypto.randomUUID(),
      title: "Overcoming the Challenges of a Multi-Store Strategy",
      text1:
        "Managing multiple Shopify stores presents challenges such as inventory synchronization, update workloads, and logistical complexity. A centralized inventory management system is key to tracking stock across channels, while a Product Information Management (PIM) tool like Akeneo streamlines product updates. Addressing cross-region purchasing and ensuring smooth currency transitions are also essential for delivering a seamless global shopping experience.",
      text2:
        "Shopify Plus simplifies international operations for high-demand businesses with powerful automation and customization tools. Shopify Flow streamlines tasks like inventory alerts and VIP management, while Launchpad schedules global campaigns across time zones. Advanced checkout scripts enable in-cart promotion customization, reducing complexity and enhancing efficiency across multiple stores.",
    },
    {
      id: crypto.randomUUID(),
      title: "Final Thoughts",
      text1:
        "Selling internationally with Shopify is seamless with the right strategy and tools. At Codersh, we've helped brands like Liberation Cocktails succeed with multi-store setups powered by geolocation. Whether you choose a single or multi-store approach, we’ll craft and implement a global e-commerce strategy that delivers a smooth, optimized experience for customers worldwide.",
    },
  ],
};

const servicesData = [
  {
    id: 1,
    icon: "fa-solid fa-globe",
    title: "Finding Your Global Audience with Shopify",
    description:
      "Expanding your Shopify store globally starts with pinpointing the right international markets to target. By analyzing your store's sessions by location report, you can determine where your visitors are coming from and focus on countries that already show interest in your offerings. If you don’t have international traffic, explore markets with cultural and linguistic similarities or those geographically close to your home base. Such insights help tailor strategies for specific regions, setting the stage for meaningful customer engagement and better conversion rates.",
  },
  {
    id: 2,
    icon: "fa-solid fa-money-bill-wave",
    title: "Enabling Multi-Currency Payments for Seamless Transactions",
    description:
      "One of the key elements of international ecommerce is allowing customers to pay in their local currency. Shopify Payments offers a seamless way to enable multi-currency support, ensuring international shoppers can browse and check out in their preferred currency. This not only builds trust but also minimizes cart abandonment rates. With features like Shopify’s Geolocation app and custom price adjustments for regional markets, merchants can enhance user experience while ensuring profitability.",
  },
  {
    id: 3,
    icon: "fa-solid fa-balance-scale",
    title: "Navigating Taxes and Duties Across Borders",
    description:
      "Selling internationally involves complying with varied tax regulations. Shopify simplifies this by automatically including or excluding taxes based on customer locations, catering to the tax norms of regions like Europe and North America. For additional security, integration with tax compliance solutions like Avalara Avatax ensures accurate calculations and protects against penalties, enabling businesses to focus on growth without worrying about tax complications.",
  },
  {
    id: 4,
    icon: "fa-solid fa-shipping-fast",
    title: "Effortless Worldwide Shipping with Shopify",
    description:
      "Shipping internationally requires a well-thought-out strategy. By configuring shipping zones in Shopify, merchants can create tailored shipping rates for different regions, accounting for size, weight, and potential regulatory restrictions. Partnering with apps like ShipStation ensures smooth global shipping processes, while solutions such as Clicksit can simplify returns, enhancing the post-purchase experience for customers worldwide.",
  },
  {
    id: 5,
    icon: "fa-solid fa-domain",
    title: "Localizing Your Storefront with International Domains",
    description:
      "Offering international domains allows businesses to craft a localized shopping experience for customers in different countries. These domains display prices in local currencies and adjust content language automatically, building confidence among international shoppers. Shopify's built-in SEO optimization ensures that users land on the correct domain for their region, contributing to a seamless browsing and buying experience.",
  },
  {
    id: 6,
    icon: "fa-solid fa-language",
    title: "Speaking the Language of Your Customers",
    description:
      "Language plays a vital role in connecting with international customers. Nearly 80% of online buyers prefer shopping in their native language. Shopify’s multilingual capabilities, enhanced with tools like Weglot, allow businesses to translate store content efficiently. This ensures that customers from diverse regions feel understood and valued, driving higher engagement and conversions.",
  },
  {
    id: 7,
    icon: "fa-solid fa-bullseye",
    title: "Crafting a Tailored Global Marketing Blueprint",
    description:
      "To maximize the reach of your international Shopify store, a region-specific marketing strategy is essential. Focused advertising campaigns and targeted promotions can drive traffic to localized versions of your website. By aligning marketing efforts with the preferences of specific markets, you can significantly accelerate demand and conversions.",
  },
  {
    id: 8,
    icon: "fa-solid fa-rocket",
    title: "Streamlining Global Operations with Shopify Markets",
    description:
      "Shopify Markets is a game-changer for global e-commerce, offering features like duty management, region-specific pricing, and centralized language and currency controls. This all-in-one solution simplifies the complexities of internationalization, empowering merchants to manage global sales seamlessly from a single store. Leverage these features to unlock the full potential of your international e-commerce strategy.",
  },
];

const featuresData = [
  {
    id: crypto.randomUUID(),
    img: FeatureImg1,
  },
  {
    id: crypto.randomUUID(),
    img: FeatureImg2,
  },
  {
    id: crypto.randomUUID(),
    img: FeatureImg3,
  },
  {
    id: crypto.randomUUID(),
    img: FeatureImg4,
  },
  {
    id: crypto.randomUUID(),
    img: FeatureImg5,
  },
  {
    id: crypto.randomUUID(),
    img: FeatureImg6,
  },
  {
    id: crypto.randomUUID(),
    img: FeatureImg7,
  },
  {
    id: crypto.randomUUID(),
    img: FeatureImg8,
  },
  {
    id: crypto.randomUUID(),
    img: FeatureImg9,
  },
];

function Internationalization() {
  const iconboxWrapStyle = {
    minHeight: "370px",
  };
  const iconboxWrapStyleMobile = {
    minHeight: "auto",
  };
  const isMobileOrTablet = window.innerWidth < 992;

  return (
    <div>
      <GlobalStyle />

      <SEO
        title="Selling Internationally on Shopify | Expand Your E-commerce Reach | Codersh Web Services"
        description="Reach global markets with Shopify's international selling capabilities. Codersh Web Services helps you set up multi-currency, multi-language, and cross-border solutions for your Shopify store."
        keywords="selling internationally on Shopify, Shopify international selling, Shopify multi-currency setup, Shopify multi-language store, cross-border Shopify, expand Shopify store internationally, Codersh Web Services"
        canonical="https://react-vite-codersh.vercel.app/selling-internationally-on-shopify"
      />

      <BreadCrumb title="Internationalization With Shopify" />

      <FadeInStagger>
        <div
          className="section aximo-project-page text-center dark-bg"
          style={{ borderTop: "1px solid #fffff5" }}
        >
          <div className="container aximo-section-padding5 shopify-services-data">
            <h3 className="mb-2 light-text">
              Global eCommerce Growth with Shopify Plus
            </h3>
            <p className="section-description light-text">
              Shopify Plus empowers enterprise brands to scale globally with
              multi-currency, multilingual support, dynamic pricing, and up to
              nine expansion stores. Tailor content, pricing, and design for
              each market, and deliver localized shopping experiences that drive
              conversions. Ideal for high-growth businesses, Shopify Plus is
              built for seamless international expansion.
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
                  <h2 className="mb-2">
                    Shopify & Shopify Plus: The Key to Global Expansion
                  </h2>
                  <p className="mb-4">
                    As global traffic grows, adapting to international markets
                    on Shopify is key-35% of visitors are international, and 92%
                    prefer local currency. With 33% abandoning carts when prices
                    are in USD only, a global strategy is essential. Shopify and
                    Shopify Plus simplify international selling with
                    multi-currency support and localized storefronts, helping
                    merchants boost conversions and reach new markets.
                  </p>
                  <FadeInUp className="aximo-btn-wrap2 mt-0 shopify-services-btn">
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

      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 px-3">
              <div className="aximo-accordion-normal-wrap m_top_responsive">
                <div className="aximo-accordion-normal-item">
                  <div className="aximo-accordion-normal-data">
                    <h3>Crafting Exceptional Shopify Ecommerce Stores.</h3>
                    <p>
                      We are a seasoned e-commerce agency dedicated to
                      collaborating with ambitious brands to design, develop,
                      and enhance exceptional Shopify & Shopify Plus websites.
                      Our solutions drive e-commerce growth, helping brands
                      choose the ideal strategy, design, and technology. Reach
                      out to us today!
                    </p>
                  </div>
                </div>
                <div className="aximo-accordion-normal-item">
                  <div className="aximo-accordion-normal-data">
                    <ul>
                      <li>
                        <img
                          src={Check}
                          alt="check"
                          style={{ color: "#000000", marginRight: "20px" }}
                        />
                        Custom Shopify Plus Websites
                      </li>
                      <li>
                        <img
                          src={Check}
                          alt="check"
                          style={{ color: "#000000", marginRight: "20px" }}
                        />
                        Tailored and Captivating Designs
                      </li>
                      <li>
                        <img
                          src={Check}
                          alt="check"
                          style={{ color: "#000000", marginRight: "20px" }}
                        />
                        Advanced Features and Functionalities
                      </li>
                      <li>
                        <img
                          src={Check}
                          alt="check"
                          style={{ color: "#000000", marginRight: "20px" }}
                        />
                        Seamless Platform Migrations
                      </li>
                      <li>
                        <img
                          src={Check}
                          alt="check"
                          style={{ color: "#000000", marginRight: "20px" }}
                        />
                        Strategies to Boost Conversions and Sales
                      </li>
                      <li>
                        <img
                          src={Check}
                          alt="check"
                          style={{ color: "#000000", marginRight: "20px" }}
                        />
                        Trusted Expert Partner for Long-Term Growth
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className=" col-lg-6 px-3 mt-md-5 mt-sm-5 mt-xs-5 mt-5 mt-lg-0 ">
              <div className="row">
                {featuresData.map((feature, index) => (
                  <FadeInStagger
                    key={feature.id}
                    index={index}
                    className="col-sm-6 col-lg-4 col-md-4 col-6"
                  >
                    <div
                      className="aximo-iconbox-wrap2"
                      style={{ padding: "0px" }}
                    >
                      <img src={feature.img} alt="Illustrator1Img" />
                    </div>
                  </FadeInStagger>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section aximo-section-padding2">
        <div className="container">
          <div
            className="aximo-service-wrap pb-0"
            style={{ borderBottom: "none" }}
          >
            <div className="row">
              {servicesData.map((item, index) => (
                <FadeInStagger key={item.id} index={index} className="col-lg-6">
                  <div
                    className="aximo-iconbox-wrap"
                    style={
                      isMobileOrTablet
                        ? iconboxWrapStyleMobile
                        : iconboxWrapStyle
                    }
                  >
                    <div className="aximo-iconbox-data">
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  </div>
                </FadeInStagger>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="section aximo-section-padding6">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="aximo-accordion-normal-wrap responsive-margin">
                {faqData.faq1.map((faq) => (
                  <div key={faq.id} className="aximo-accordion-normal-item">
                    <div className="aximo-accordion-normal-icon">
                      <img src={Check} alt="check" />
                    </div>
                    <div className="aximo-accordion-normal-data">
                      <h3>{faq.title}</h3>
                      <p>{faq.text1}</p>
                      <p>{faq.text2}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="aximo-accordion-normal-wrap">
                {faqData.faq2.map((faq) => (
                  <div key={faq.id} className="aximo-accordion-normal-item">
                    <div className="aximo-accordion-normal-icon">
                      <img src={Check} alt="check" />
                    </div>
                    <div className="aximo-accordion-normal-data">
                      <h3>{faq.title}</h3>
                      <p>{faq.text1}</p>
                      <p>{faq.text2}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Internationalization;
