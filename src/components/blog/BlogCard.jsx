import { Link } from "react-router-dom";
import ArrowRight from "../../assets/images/icon/arrow-right.svg";

function BlogCard({ blog: { title, category, content, date, img } }) {
  return (
    <>
      <div className="post-thumbnail">
        <img src={img} alt={title} />
      </div>
      <div className="post-content">
        <div className="post-meta">
          <div className="post-category">
            <Link to="/">{category}</Link>
          </div>
          <div className="post-date">{date}</div>
        </div>
        <Link to="/single-blog">
          <h3 className="entry-title">{title}</h3>
        </Link>
        <p>{content}...</p>
        <Link className="post-read-more" to="/single-blog">
          Read more <img src={ArrowRight} alt="Arrow Right" />
        </Link>
      </div>
    </>
  );
}

export default BlogCard;
