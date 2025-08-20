import Story from "../components/about/story";
import BreadCrumb from "../components/common/Breadcrumb";
import SEO from "../components/common/SEO";
import About from "../components/home-one/about";
import AutoSlider from "../components/home-one/auto-slider";

function AboutUs() {
  return (
    <>
      <SEO
        title="About Codersh Web Services | Shopify Development Company"
        description="Learn more about Codersh Web Services, a team of Shopify development experts helping e-commerce brands thrive with custom solutions, seamless migration, and performance optimization."
        keywords="About Codersh, Shopify development experts, e-commerce solutions, Shopify customization, Shopify agency, Shopify web design, Shopify store optimization"
        canonical="https://react-vite-codersh.vercel.app/about-us"
      />
      <BreadCrumb title="About Us" />
      <About />
      <Story />
      <AutoSlider />
      <br />
    </>
  );
}

export default AboutUs;
