import { Link } from "react-router-dom";

function BlogCard({ blog: { title, content, img } }) {
  return (
    <div className="col-lg-4">
      <div className="aximo-blog-wrap2">
        <div className="aximo-blog-thumb2">
          <Link to="#">
            <img src={img} alt={title} />
          </Link>
        </div>
        <div className="aximo-blog-content3">
          <Link to="#">
            <h3>{title}</h3>
          </Link>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
