import React from "react";
import { Link } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import SEO from "../../../components/common/SEO";
import BreadCrumb from "../../../components/common/Breadcrumb"
import FadeInStagger from "../../../components/animation/FadeInStagger";
import FadeInLeft from "../../../components/animation/FadeInLeft";
import FadeInRight from "../../../components/animation/FadeInRight";
import FadeInUp from "../../../components/animation/FadeInUp";
import ThumbImg1 from "../../../assets/images/images2/Services4_1.webp";
import ThumbImg2 from "../../../assets/images/images2/patherrimgs/service8_3.webp";
import ThumbImg3 from "../../../assets/images/images2/Services4_3.webp";
import ThumbImg4 from "../../../assets/images/images2/service4_card1.webp";
import ThumbImg5 from "../../../assets/images/images2/service4_card2.webp";
const GlobalStyle = createGlobalStyle`
  #root {
	 overflow-x: hidden; 
  }
`;


/**
 * Reusable Section Component
 */
const ServiceSectionComponent = ({ img, title, subtitle, text, btnText, btnLink, reverse, index }) => (
    <div className={`section ${index === 0 ? 'aximo-section-padding2' : 'aximo-section-padding6'}`}>
        <div className="container">
            <div className={`row d-flex ${reverse ? 'flex-row-reverse' : ''}`}>
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
                                <Link to={btnLink} className="iwt-button">{btnText}</Link>
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


/**
 * Content Data
 */
const sections = [
    {
        img: ThumbImg1,
        title: "Trusted by Merchants for Expertise, Growth, and Data-Driven Innovation",
        text: `Codersh is a trusted Shopify Plus partner, delivering expert e-commerce solutions since 2015. We work with global brands and startups, offering custom UI/UX design, Shopify Plus development, and data-driven solutions. Beyond store optimization, we empower growth with in-house CRO, email marketing, and SEO services. Partner with Codersh for e-commerce solutions that drive success and fuel growth.`,
        btnText: "Get Started Today",
        btnLink: "/contact-us",
        reverse: false
    },
    {
        img: ThumbImg2,
        title: "Unlock Your Business Potential with Advanced Shopify Plus Solutions",
        text: `Shopify Plus is an enterprise-level e-commerce platform built for high-volume merchants, offering robust servers, top-tier security, and scalable tools for efficient customer service. Key benefits include customizable checkout, up to 9 expansion stores, advanced B2B features, detailed reporting, and unlimited staff accounts. Shopify Plus enables fast-growing brands to focus on customer experiences while the platform effortlessly scales with their growth, eliminating the need for constant infrastructure maintenance.`,
        btnText: "Contact Us Now!",
        btnLink: "/contact-us",
        reverse: true
    },
    {
        img: ThumbImg3,
        title: "Drive Sustainable Growth with Data-Driven Codersh Partnership Programs on Shopify Plus",
        text: `Our Memberships unite designers, developers, and strategists to deliver more than just technical skills—they provide KPI-driven roadmaps aligned with your growth goals. Trusted by leading Shopify Plus brands, our services are delivered exclusively by our in-house experts.Learn more about Codersh Memberships and see how we can accelerate your e-commerce success.`,
        btnText: "Let's Built It",
        btnLink: "/contact-us",
        reverse: false
    },
    {
        img: ThumbImg4,
        title: "Analytics-powered growth strategies for Shopify Plus businesses",
        text: `We uses the latest frameworks and tools to deliver high-quality, custom e-commerce solutions. Our experts in HTML, CSS, JavaScript, and Liquid build or optimize themes with tailored functionality and user-friendly design. We prioritize speed, technical SEO, and compliance to ensure seamless performance and easy content management for your team.`,
        btnText: "Get Started Today",
        btnLink: "/contact-us",
        reverse: true
    },
    {
        img: ThumbImg5,
        title: "Creating future- ready Shopify stores with scalability in mind",
        subtitle: "Where design meets powerful functionality.",
        text: `As Shopify Plus specialists, We helps brands launch new stores or enhance existing ones with custom themes and tailored features. We prioritize performance, speed, and commercial goals, whether building from scratch or optimizing templates. Our expert migration services ensure smooth transitions from other platforms, making Shopify Plus easy for both teams and customers. Expect visually stunning, high-performing stores designed to drive growth.`,
        btnText: "Get Started Today",
        btnLink: "/contact-us",
        reverse: false
    }
];

const services = [

    {
        id: crypto.randomUUID(),
        meta: 'Shopify Plus Agency - SEO',
        title: "Boost your store's visibility with expert e-commerce SEO.",
        description: 'We offer data-driven e-commerce SEO strategies tailored for ambitious brands, combining technical SEO, content marketing, and backlink analysis to boost search engine visibility and user experience. Using advanced tools and data insights, we uncover growth opportunities, outperform competitors, and drive sustainable, organic traffic-ensuring long-term success beyond paid advertising.',
    },
    {
        id: crypto.randomUUID(),
        meta: 'E-commerce Marketing Agencies',
        title: "Drive repeat business through strategic email campaigns.",
        description: "At Codersh, retention drives our email marketing and loyalty strategies. We craft tailored campaigns using email, SMS, loyalty programs, and subscriptions to boost customer lifetime value and ROI. By integrating advanced tools and refining tactics, we help turn first-time shoppers into loyal, repeat customers-maximizing your e-commerce platform’s potential.",
    },
];

function ShopifyPlus() {

    return (
        <div>
            <GlobalStyle />
            <SEO
                title="Shopify Plus Development | Enterprise E-commerce Solutions | Codersh Web Services"
                description="Elevate your business with Shopify Plus. Codersh Web Services specializes in custom Shopify Plus development, offering advanced features and scalability for enterprise-level stores."
                keywords="Shopify Plus, Shopify Plus development, enterprise e-commerce, Shopify Plus custom solutions, scalable Shopify store, Shopify Plus experts, Codersh Web Services"
                canonical="https://react-vite-codersh.vercel.app/shopify-plus"
            />
            <BreadCrumb title="Shopify Plus" />
            <FadeInStagger>
                <div className="section aximo-project-page text-center dark-bg" style={{ borderTop: "1px solid #fffff5" }}>
                    <div className="container aximo-section-padding5 shopify-services-data">
                        <h3 className="mb-2 light-text">
                            Your Trusted Shopify Plus Experts: <br />
                        </h3>
                        <p className="light-text">
                            Empowering  E-Commerce Growth from Concept to Expansion.
                            As a Certified Shopify Plus Partner We Build, Develop, and Scale Digital Retail Brands.
                        </p>
                    </div>
                </div>
            </FadeInStagger>

            {sections.map((section, index) => (
                <ServiceSection key={index} {...section} index={index} />
            ))}

            <div className="section aximo-section-padding4 pt-0">
                <div className="container">
                    <div className="aximo-service-wrap">
                        <div className="row">
                            {services.map((item, index) => (
                                <FadeInStagger
                                    key={item.id}
                                    index={index}
                                    className="col-12"
                                >
                                    <div className="aximo-iconbox-wrap">
                                        <div className="aximo-iconbox-icon mb-2">
                                            <strong>{item.meta}</strong>
                                        </div>
                                        <div className="aximo-iconbox-data">
                                            <h3 className="mb-2">{item.title}</h3>
                                            <p>{item.description}</p>
                                        </div>
                                    </div>
                                </FadeInStagger>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShopifyPlus;