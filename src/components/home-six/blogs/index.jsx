import { Link } from "react-router-dom";
import Blog1Img from "../../../assets/images/v6/blog-v6-1.webp";
import Blog2Img from "../../../assets/images/v6/blog-v6-2.webp";
import BlogCard from "./BlogCard";

const blogsData = [
  {
    id: crypto.randomUUID(),
    title: "How to create a dramatic paint color for the home",
    content:
      "At the beginning of a home redesign, the client said she found herself making much safer choices…",
    category: "Home Decoration",
    date: "June 15, 2024",
    img: Blog1Img,
  },
  {
    id: crypto.randomUUID(),
    title: "The smartest way to create an office in a small space",
    content:
      "Of course, having a dedicated home office with ample storage, room for supplies, and a proper desk setup...",
    category: "Office Interior",
    date: "June 10, 2024",
    img: Blog2Img,
  },
];

function Blogs() {
  return (
    <div className="section aximo-section-padding3">
      <div className="container">
        <div className="aximo-section-title playfair">
          <div className="row">
            <div className="col-lg-8">
              <h2>Check out our latest articles and news</h2>
            </div>
            <div className="col-lg-4 d-flex align-items-center">
              <div className="aximo-title-btn">
                <Link className="aximo-default-btn green-btn pill" to="/blog">
                  <span>Explore All Blogs</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {blogsData.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blogs;
