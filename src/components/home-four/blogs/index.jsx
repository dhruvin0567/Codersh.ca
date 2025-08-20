import Blog1Img from "../../../assets/images/blog/blog1.webp";
import Blog2Img from "../../../assets/images/blog/blog2.webp";
import Shape5Img from "../../../assets/images/v4/shape5.webp";
import FadeInStagger from "../../animation/FadeInStagger";
import BlogCard from "./BlogCard";

const blogsData = [
  {
    id: crypto.randomUUID(),
    title: "How does business intelligence help companies change strategy?",
    category: "Marketing",
    date: "June 18, 2024",
    img: Blog1Img,
  },
  {
    id: crypto.randomUUID(),
    title:
      "Maximizing profits - the small business guide to Artificial Intelligence",
    category: "Technology",
    date: "June 18, 2024",
    img: Blog2Img,
  },
];

function Blogs() {
  return (
    <div className="aximo-blog-section aximo-section-padding position-relative">
      <div className="container">
        <div className="aximo-section-title center arimo-font">
          <span className="aximo-subtitle">Read our blog</span>
          <h2>We're passionate about knowledge sharing</h2>
        </div>
        <div className="row">
          {blogsData.map((blog, index) => (
            <FadeInStagger key={blog.id} index={index} className="col-lg-6">
              <BlogCard blog={blog} />
            </FadeInStagger>
          ))}
        </div>
      </div>

      <div className="aximo-v4-shape3">
        <img src={Shape5Img} alt="Shape5Img" />
      </div>
    </div>
  );
}

export default Blogs;
