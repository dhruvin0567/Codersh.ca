import BreadCrumb from "../../../components/common/Breadcrumb";
import FadeInLeft from "../../../components/animation/FadeInLeft";
import FadeInRight from "../../../components/animation/FadeInRight";
import FadeInUp from "../../../components/animation/FadeInUp";
import { Link } from "react-router-dom";
import Check from "../../../assets/images/icon/check.svg";
import question from "../../../assets/images/icon/question.svg";
import ThumbImg1 from "../../../assets/images/images2/b2bpic1.webp";
import ThumbImg2 from "../../../assets/images/images2/Shopify_connect.webp";
import ThumbImg3 from "../../../assets/images/images2/service12_3.webp";
import ThumbImg4 from "../../../assets/images/images2/service12_4.webp";
import ThumbImg5 from "../../../assets/images/images2/services12_5.webp";
// import Shape4Img from "../../../assets/images/v5/shape4.webp";
import { createGlobalStyle } from "styled-components";
import SEO from "../../../components/common/SEO";
const GlobalStyle = createGlobalStyle`
  #root {
     overflow-x: hidden; 
  }
`;

const faqData = {
  faq1: [
    {
      id: 1,
      title: "Why Choose Shopify and Shopify Plus for B2B and Wholesale?",
      text1:
        "Shopify and Shopify Plus offer a powerful, integrated solution for B2B and wholesale businesses, streamlining operations and enhancing efficiency. By consolidating inventory, orders, and customer data in one location, Shopify makes it easy to manage retail and wholesale clients alongside your direct-to-consumer (DTC) customers. B2B features like custom pricing, volume-based discounts, and tailored customer experiences allow businesses to operate from a single platform while offering flexible billing options, including pricing in multiple currencies and custom price lists.",
      text2:
        "Shopify’s wholesale functionality includes a dedicated order center, enabling clients to place orders at their convenience, eliminating manual order forms and lengthy processes. This feature is particularly valuable for businesses expanding globally or serving diverse markets, making wholesale orders as seamless as DTC transactions. Ready to elevate your wholesale business with Shopify? Contact Codersh Web Services today!",
    },
    {
      id: 2,
      title: "What Are the Challenges of Using Shopify for B2B?",
      text1:
        "Before integrating B2B functionality into your Shopify store, consider these key factors to ensure the best experience for both your business and customers:",
      span1: "Customer Accounts:",
      li1: "You'll need to create separate customer accounts for B2B transactions to utilize Shopify’s B2B features.",
      span2: "Third-Party App Compatibility: ",
      li2: "Since Shopify B2B is a newer feature, some third-party apps may not yet be compatible. Check compatibility before integrating.",
      span3: "Subscription Limitations:",
      li3: "B2B functionality does not currently support subscription models. If your business relies on subscriptions, alternative solutions may be needed.",
      span4: "Order Limits:",
      li4: "The B2B system limits orders to 500 line items. Orders exceeding this will be rejected, so plan accordingly for large bulk orders.",
      text2:
        "Additionally, decide whether you need a dedicated storefront for wholesale customers or if managing pricing and product changes within your existing store will suffice.",
    },
  ],
};

function B2BWholsales() {
  return (
    <div>
      <GlobalStyle />
      <SEO
        title="Shopify B2B Wholesale Solutions | Expand Your Business Reach | Codersh Web Services"
        description="Transform your Shopify store into a powerful B2B wholesale platform. Codersh Web Services offers custom solutions for wholesale pricing, bulk orders, and seamless B2B integrations."
        keywords="Shopify B2B wholesale, wholesale Shopify solutions, B2B e-commerce, Shopify bulk orders, wholesale pricing on Shopify, Shopify B2B integrations, Codersh Web Services"
        canonical="https://react-vite-codersh.vercel.app/shopify-b2b-wholesale"
      />
      <BreadCrumb title="Shopify B2B & Wholesale" />

      <div className="section aximo-project-page text-center dark-bg border-top">
        <div className="container aximo-section-padding5 shopify-services-data">
          <h3 className="mb-2 light-text">
            Build a Powerful B2B & Wholesale Channel with Shopify Plus
          </h3>
          <p className="section-description light-text">
            We specializes in designing, developing, and optimizing Shopify B2B
            and Wholesale stores. We create seamless, high-performance eCommerce
            solutions with advanced shipping, integrations, and intuitive
            navigation to help businesses achieve strategic growth and stand out
            in competitive markets.
          </p>
        </div>
      </div>

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
                  {/* <h3 style={{ marginBottom: '16px' }}>Shopify CRO Agency - Shopify developer</h3> */}
                  <h2 className="mb-2">What is Shopify B2B and Wholesale?</h2>
                  <p className=" text-start mb-4">
                    As businesses expand globally on Shopify, adapting to
                    international markets is crucial. Going global enables
                    merchants to access a broader customer base, increase
                    transactions, and boost revenue. Recent data shows that 35%
                    of Shopify traffic is international, emphasizing the need
                    for a global ecommerce strategy. Additionally, 92% of these
                    visitors prefer shopping in their local currency, with 33%
                    likely to abandon purchases if prices are only in US
                    dollars.
                  </p>
                  <div className="aximo-accordion-normal-item d-flex justify-content-center justify-content-lg-start">
                    <div className="text-start">
                      <ul>
                        <li>
                          <img
                            src={Check}
                            alt="check"
                            className=" text-dark me-3 mb-2"
                          />
                          <span className="fw-bold">
                            Password-Protected Storefront
                          </span>
                        </li>
                        <li>
                          <img
                            src={Check}
                            alt="check"
                            className=" text-dark me-3 mb-2"
                          />
                          <span className="fw-bold">
                            Shopify’s B2B Ecommerce Channel
                          </span>
                        </li>
                        <li>
                          <img
                            src={Check}
                            alt="check"
                            className=" text-dark me-3 mb-2"
                          />
                          <span className="fw-bold">
                            Shopify Plus for Advanced B2B Solutions
                          </span>
                        </li>
                        <li>
                          <img
                            src={Check}
                            alt="check"
                            className=" text-dark me-3 mb-2"
                          />
                          <span className="fw-bold">
                            B2B Solutions Without Shopify Plus
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </FadeInRight>
            </div>
          </div>
        </div>
      </div>

      <div className="section aximo-section-padding pt-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="aximo-accordion-normal-wrap responsive-margin">
                {faqData.faq1.map((faq) => (
                  <div key={faq.id} className="aximo-accordion-normal-item">
                    <div className="aximo-accordion-normal-icon">
                      <img src={question} alt="check" />
                    </div>
                    <div className="aximo-accordion-normal-data">
                      <h3>{faq.title}</h3>
                      <p>{faq.text1}</p>
                      {faq.id === 2 && (
                        <div
                          className="aximo-team-setails"
                          style={{ fontSize: "21px" }}
                        >
                          <ul>
                            <li className="mb-2">
                              <span>{faq.span1}</span>
                              <br />
                              {faq.li1}
                            </li>
                            <li className="mb-2">
                              <span>{faq.span2}</span>
                              <br />
                              {faq.li2}
                            </li>
                            <li className="mb-2">
                              <span>{faq.span3}</span>
                              <br />
                              {faq.li3}
                            </li>
                            <li className="mb-2">
                              <span>{faq.span4}</span>
                              <br />
                              {faq.li4}
                            </li>
                          </ul>
                        </div>
                      )}
                      <p>{faq.text2}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="aximo-accordion-normal-wrap">
                <div className="aximo-accordion-normal-item">
                  <div className="aximo-accordion-normal-icon">
                    <img src={question} alt="check" />
                  </div>
                  <div className="aximo-accordion-normal-data">
                    <h3>
                      What Features Does Shopify Offer for B2B and Wholesale?
                    </h3>
                    <p>
                      At Codersh, we specialize in tailored Shopify Wholesale
                      and B2B solutions designed to help merchants grow their
                      business. Whether you're starting to sell to businesses or
                      looking for cost-effective alternatives to the
                      $2,000/month Shopify Plus plan, we’ve got you covered.
                    </p>

                    <div
                      className="aximo-team-setails "
                      style={{ fontSize: "21px" }}
                    >
                      <span className="fw-bold">
                        Explore key Shopify B2B and Wholesale features:
                      </span>
                      <ul>
                        <li className="mb-2">
                          <span>Unified Store Management:</span>
                          <br />
                          Manage pricing, products, customer lists, and profiles
                          all from one store with Shopify B2B.
                        </li>
                        <li className="mb-2">
                          <span>Dedicated Wholesale Storefront:</span>
                          <br />
                          Create a separate storefront for wholesale while
                          maintaining your DTC operations.
                        </li>
                        <li className="mb-2">
                          <span>Exclusive Discounts:</span>
                          <br />
                          Offer custom discount codes for wholesale customers or
                          targeted clientele.
                        </li>
                        <li className="mb-2">
                          <span>Volume-Based Pricing:</span>
                          <br />
                          Implement discount tiers to reward B2B customers for
                          larger purchases.
                        </li>
                        <li className="mb-2">
                          <span>Custom Price Lists:</span>
                          <br />
                          Provide personalized prices and lists for different
                          customers, ensuring tailored experiences.
                        </li>
                        <li className="mb-2">
                          <span>Flexible Payment Terms:</span>
                          <br />
                          Offer net payment terms to simplify transactions for
                          your clients.
                        </li>
                        <li className="mb-2">
                          <span>Handshake Integration:</span>
                          <br />
                          Connect seamlessly with the Handshake marketplace for
                          broader reach.
                        </li>
                        <li className="mb-2">
                          <span>Streamlined Checkout:</span>
                          <br />
                          Provide a customized checkout experience with credit
                          limits and NET payment terms.
                        </li>
                        <li className="mb-2">
                          <span>Scalable Hosting & Security:</span>
                          <br />
                          Benefit from Shopify’s reliable infrastructure for
                          both DTC and B2B customers.
                        </li>
                        <li className="mb-2">
                          <span>Wholesale-Ready Storefronts:</span>
                          <br />
                          Enhance the buying experience with B2B apps designed
                          for wholesale needs.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
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
                    Create a Custom Domain and B2B Storefront on Shopify
                  </h2>
                  {/* <h3 style={{ marginBottom: '16px' }}>Custom Shopify themes tailored to your brand needs.</h3> */}
                  <p className="mb-2">
                    Shopify’s B2B features integrate seamlessly with Shopify
                    Plus, letting you manage retail and wholesale customers in
                    one storefront. Pricing and checkout adjust automatically
                    based on the logged-in customer. For a fully customized B2B
                    experience with dynamic content, custom coding may be
                    needed.
                  </p>
                  <p className="mb-4">
                    Shopify Plus offers a dedicated Wholesale Channel with a
                    password-protected storefront for wholesale customers,
                    keeping B2B pricing hidden from retail clients. Pricing
                    adjusts automatically, and you can customize the domain for
                    a branded B2B experience. For advanced features and deeper
                    customization, We can help enhance your B2B operations.
                  </p>
                  <FadeInUp className="aximo-btn-wrap2 mt-0  shopify-services-btn">
                    <Link to="/contact-us" className="iwt-button">
                      Let's Connect
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
                  {/* <h3 style={{ marginBottom: '16px' }}>Shopify CRO Agency - Shopify developer</h3> */}
                  <h2 className="mb-2">
                    Custom Pricing, Order Limits & Flexible Payment Terms on
                    Shopify
                  </h2>
                  <p className="mb-2 text-start">
                    Custom pricing, volume discounts, and payment terms are
                    powerful features that help B2B merchants streamline their
                    wholesale operations. With Shopify’s B2B and Wholesale
                    features, you can:
                  </p>
                  <div className="aximo-accordion-normal-item d-flex justify-content-center justify-content-lg-start mb-2">
                    <div className="text-start">
                      <ul>
                        <li>
                          <img
                            src={Check}
                            alt="check"
                            className=" text-dark me-3 mb-2"
                          />
                          <span className="fw-bold">
                            Offer volume-based or percentage discounts
                          </span>
                        </li>
                        <li>
                          <img
                            src={Check}
                            alt="check"
                            className=" text-dark me-3 mb-2"
                          />
                          <span className="fw-bold">
                            Set fixed wholesale prices for products
                          </span>
                        </li>
                        <li>
                          <img
                            src={Check}
                            alt="check"
                            className=" text-dark me-3 mb-2"
                          />
                          <span className="fw-bold">
                            Apply minimum and maximum order quantity limits
                          </span>
                        </li>
                        <li>
                          <img
                            src={Check}
                            alt="check"
                            className=" text-dark me-3 mb-2"
                          />
                          <span className="fw-bold">
                            Create custom pricing lists for different customer
                            groups or business types
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-start mb-2">
                    Shopify B2B and Wholesale let merchants automate payment
                    terms like Net 7, Net 15, Net 30, Net 60, Net 90, or “Due on
                    Fulfillment.” This flexibility streamlines payment
                    processes, supports efficient order tracking, and delivers a
                    smooth, personalized experience for B2B customers.
                  </p>
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
                  <h2 className="mb-2">Streamlining Your B2B Account Area</h2>
                  {/* <h3 style={{ marginBottom: '16px' }}>Custom Shopify themes tailored to your brand needs.</h3> */}
                  <p className="mb-2">
                    Shopify’s B2B channel provides a dedicated account area for
                    wholesale clients with personalized logins and dashboards.
                    This self-service feature lets clients place orders, view
                    order history, track purchases, and access order status and
                    shipping details directly from their accounts.
                  </p>
                  <p className="mb-4">
                    By enabling clients to manage orders independently,
                    Shopify’s B2B features reduce manual support needs, saving
                    time and lowering admin costs. This efficiency lets your
                    team focus on strategy and growth, streamlining operations
                    and boosting profitability. The result is a stronger ROI
                    through time savings and improved customer experience.
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
                <img src={ThumbImg5} alt="Thumb" />
              </FadeInLeft>
            </div>
            <div className="col-lg-7  colo-12  shopify-services-data">
              <FadeInRight>
                <div className="aximo-default-content">
                  {/* <h3 style={{ marginBottom: '16px' }}>Shopify CRO Agency - Shopify developer</h3> */}
                  <h2 style={{ fontSize: "50px" }}>
                    Processing B2B Orders on Shopify
                  </h2>
                  <p className=" mb-2 text-start">
                    Managing B2B and wholesale orders is simple with Shopify
                    Wholesale’s advanced order processing features. Orders
                    placed through your wholesale store appear as draft orders
                    in your Shopify admin, allowing easy review and invoice
                    creation with payment instructions.
                  </p>
                  <div className="aximo-accordion-normal-item d-flex justify-content-center justify-content-lg-start mb-2">
                    <div className="text-start">
                      <p className="fw-bold fs-5 mb-2">
                        Here’s how you can process orders:
                      </p>
                      <ul>
                        <li className="fw-bold">
                          <img
                            src={Check}
                            alt="check"
                            className=" text-dark me-3 mb-2"
                          />
                          <span className="fw-bold">
                            {" "}
                            invoices with payment requests by Shopify’s
                            integrated payment provider.
                          </span>
                        </li>
                        <li>
                          <img
                            src={Check}
                            alt="check"
                            className=" text-dark me-3 mb-2"
                          />
                          <span className="fw-bold">
                            Customize invoices and offer payment via methods
                            like bank wire transfers.
                          </span>
                        </li>
                        <li>
                          <img
                            src={Check}
                            alt="check"
                            className=" text-dark me-3 mb-2"
                          />
                          <span className="fw-bold">
                            Accept upfront payments through credit cards,
                            checks, and other options.
                          </span>
                        </li>
                        <li>
                          <img
                            src={Check}
                            alt="check"
                            className=" text-dark me-3 mb-2"
                          />
                          <span className="fw-bold">
                            Provide flexible payment terms with gateways.
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <p className=" mb-2 text-start">
                    While setting up a B2B or wholesale store on Shopify may
                    seem complex, Codersh Web Services is here to simplify the
                    process. Whether optimizing an existing store or launching a
                    new one, our expert team can help streamline your wholesale
                    operations and maximize efficiency.
                  </p>
                </div>
              </FadeInRight>
            </div>
          </div>
        </div>
      </div>

      <div
        className="aximo-cta2-section aximo-section-padding extra-side-margin dark-bg mb-5"
        style={{ padding: "30px 0px" }}
      >
        <div className="container">
          <div
            className="aximo-cta2-wrap shopify-services-data"
            style={{ maxWidth: "1100px" }}
          >
            <h2 className="mb-4">
              How Codersh Helps You Launch or Migrate Your Shopify B2B Store
            </h2>
            <p className="mb-3">
              We simplifies your B2B eCommerce journey with expert data
              migration, custom design, and advanced Shopify Plus features.
              Whether you're launching or switching from platforms like Magento
              or BigCommerce, we build tailored B2B solutions that scale with
              your business and drive long-term success.
            </p>
            <FadeInUp>
              <Link
                to="/contact-us"
                className="aximo-default-btn pill aximo-header-btn"
              >
                Contact Us
              </Link>
            </FadeInUp>
          </div>
        </div>
        {/* <div className="aximo-cta-shape3">
                    <img src={Shape4Img} alt="shape" />
                </div> */}
      </div>
    </div>
  );
}

export default B2BWholsales;
