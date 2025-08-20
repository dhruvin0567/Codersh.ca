import BreadCrumb from "../components/common/Breadcrumb";
import SEO from "../components/common/SEO";
import ContactForm from "../components/contact/ContactForm";
import ContactInfo from "../components/contact/ContactInfo";
import TwoColumnFaq from "../components/contact/TwoColumnFaq";

import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
  #root {
	 overflow-x: hidden; 
  }
`;

function ContactUs() {
  return (
    <>
      <SEO
        title="Contact Codersh Web Services | Get in Touch for Shopify Solutions"
        description="Need expert Shopify development? Contact Codersh Web Services for custom store design, migration, and performance optimization. Let's build your success!"
        keywords="Contact Codersh, Shopify experts, Shopify development consultation, Shopify customization help, e-commerce support, hire Shopify developers"
        canonical="https://react-vite-codersh.vercel.app/contact-us"
      />
      <GlobalStyle />
      <BreadCrumb title="Contact Us" />
      <ContactForm />
      <ContactInfo />
      <TwoColumnFaq />
    </>
  );
}

export default ContactUs;
