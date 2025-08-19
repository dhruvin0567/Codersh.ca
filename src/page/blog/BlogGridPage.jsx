import GridBlog from "../../components/blog/grid-blog";
import BreadCrumb from "../../components/common/Breadcrumb";
import SEO from "../../components/common/SEO";
function BlogGridPage() {
  return (
    <>
      <SEO
        title="Codersh Web Services Blog | Shopify Tips, Insights & E-commerce Strategies"
        description="Stay updated with the latest e-commerce trends, Shopify tips, and digital marketing strategies on the Codersh Web Services blog. Learn how to optimize your store and drive business growth."
        keywords="Shopify blog, e-commerce tips, Shopify optimization, Shopify marketing strategies, e-commerce blog, digital marketing for Shopify, Codersh Web Services blog"
        canonical="https://react-vite-codersh.vercel.app/ourblog"
      />
      <BreadCrumb title="Our Blog" />
      <GridBlog />
    </>
  );
}

export default BlogGridPage;
