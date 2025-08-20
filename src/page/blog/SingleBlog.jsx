import SingleBlog from "../../components/blog/single-blog";
import BreadCrumb from "../../components/common/Breadcrumb";

function SingleBlogPage() {
  return (
    <>
      <BreadCrumb title="Blog Details" />
      <SingleBlog />
    </>
  );
}

export default SingleBlogPage;
