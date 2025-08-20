import { Link } from "react-router-dom";

function BlogCard({ blog: { title, category, date, img } }) {
  return (
    <div className="aximo-blog-wrap">
      <div className="aximo-blog-thumb">
        <Link to="/single-blog">
          <img src={img} alt={title} />
        </Link>
      </div>
      <div className="aximo-blog-content">
        <div className="aximo-blog-meta">
          <ul>
            <li>
              <a href="">{category}</a>
            </li>
            <li>{date}</li>
          </ul>
        </div>
        <Link to="/single-blog">
          <h3>{title}</h3>
        </Link>
        <Link className="aximo-blog-btn" to="/single-blog">
          Read more
          <svg
            width="20"
            height="16"
            viewBox="0 0 20 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 1L19 8M19 8L12 15M19 8L1 8"
              stroke="#191931"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default BlogCard;
