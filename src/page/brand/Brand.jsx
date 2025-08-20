import FadeInStagger from "../../components/animation/FadeInStagger";
import BreadCrumb from "../../components/common/Breadcrumb";
import { Link } from "react-router-dom";
import useBrands from "../../hooks/useBrands";
import SEO from "../../components/common/SEO";

function Brand() {
  const { brands, loading } = useBrands();

  if (loading)
    return (
      <div className="brand-fetch">
        <div className="aximo-preloader">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );

  return (
    <>
      <SEO
        title="Codersh Web Services | Your Trusted Shopify Development Partner"
        description="Discover the story behind Codersh Web Services. We specialize in Shopify development, custom e-commerce solutions, and helping brands grow through innovative digital strategies."
        keywords="Codersh Web Services, Shopify development, e-commerce solutions, digital agency, Shopify experts, brand story, Shopify partner, custom Shopify solutions"
        canonical="https://react-vite-codersh.vercel.app/brand"
      />
      <BreadCrumb title="Brand" />
      <div className="brands-section py-5 my-sm-5">
        <div className="container-fluid">
          <div className="row">
            {brands.map((brand, index) => (
              <FadeInStagger
                className="col-lg-3 col-sm-4 col-6 mb-3 p-3"
                key={brand.id}
                index={index}
              >
                <Link className="brand-card" to={brand.link}>
                  <img src={brand.img} alt={brand.title} />
                </Link>
              </FadeInStagger>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Brand;
