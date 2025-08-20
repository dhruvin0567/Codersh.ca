import BreadCrumb from "../../components/common/Breadcrumb";
import SEO from "../../components/common/SEO";
import Portfolio1content from "../../components/portfolio/portfolio1/Portfolio1content";

function Portfolio() {
  return (
    <>
      <SEO
        title="Shopify Portfolio | Custom E-commerce Solutions | Codersh Web Services"
        description="Explore Codersh Web Services’ portfolio of custom Shopify solutions. Our portfolio highlights innovative designs, successful store launches, and tailored e-commerce solutions for a diverse range of businesses."
        keywords="Shopify portfolio, e-commerce solutions portfolio, custom Shopify designs, Shopify store development, successful Shopify projects, Codersh Web Services portfolio"
        canonical="https://react-vite-codersh.vercel.app/portfolio"
      />
      <BreadCrumb title="Portfolio" />
      <Portfolio1content />
    </>
  );
}

export default Portfolio;
