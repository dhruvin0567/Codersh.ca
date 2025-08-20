import BreadCrumb from "../../components/common/Breadcrumb";
import SEO from "../../components/common/SEO";
import CaseStudiesdataStatic from "../../components/projects/CaseStudiesdataStatic";

function CaseStudiesStatic() {
  return (
    <>
      <SEO
        title="Shopify Case Studies | Successful E-commerce Solutions | Codersh Web Services"
        description="Explore our portfolio of successful Shopify projects. Codersh Web Services showcases case studies of custom solutions, store optimizations, and growth-driven results for e-commerce businesses."
        keywords="Shopify case studies, e-commerce success stories, Shopify solutions, Shopify store optimization, e-commerce growth, Codersh Web Services portfolio"
        canonical="https://react-vite-codersh.vercel.app/case-studies"
      />
      <BreadCrumb title="Case Studies" />
      <CaseStudiesdataStatic />
    </>
  );
}

export default CaseStudiesStatic;
