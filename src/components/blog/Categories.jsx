import { Link } from "react-router-dom";

function Categories() {
  return (
    <div className="widget">
      <h3 className="wp-block-heading">Categories:</h3>
      <ul>
        <li>
          <Link to="/">Business</Link>
        </li>
        <li>
          <Link to="/">Development</Link>
        </li>
        <li>
          <Link to="/">Technology</Link>
        </li>
        <li>
          <Link to="/">Creative Director</Link>
        </li>
        <li>
          <Link to="/">Uncategorized</Link>
        </li>
      </ul>
    </div>
  );
}

export default Categories;
