import { Link } from "react-router-dom";
import ArrayRightImg from "../../../assets/images/icon/arrow-right.svg";

function GridBlogCard({ blog: { img, title, link } }) {
  return (
    <div className="single-post-item">
      <div className="post-thumbnail">
        <img src={img} alt={title} />
      </div>
      <div className="post-content">
        <Link to={link}>
          <h3 className="entry-title">{title}</h3>
        </Link>
        <Link className="post-read-more" to={link}>
          Read more <img src={ArrayRightImg} alt="Arrow" />
        </Link>
      </div>
    </div>
  );
}

export default GridBlogCard;
