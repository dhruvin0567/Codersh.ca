import BreadCrumb from "../../components/common/Breadcrumb";
import SEO from "../../components/common/SEO";
import FaqAccordion from "../../components/faq/FaqAccordion";

function Faq() {
  return (
    <>
      <SEO
        title="Frequently Asked Questions | Codersh Web Services"
        description="Find answers to common questions about Codersh Web Services. Learn more about our Shopify development, customization, and e-commerce solutions."
        keywords="Codersh FAQ, Shopify development questions, Shopify customization help, e-commerce support, Shopify migration queries, Codersh Web Services answers"
        canonical="https://react-vite-codersh.vercel.app/faq"
      />
      <BreadCrumb title="FAQ" />
      <FaqAccordion />
    </>
  );
}

export default Faq;
