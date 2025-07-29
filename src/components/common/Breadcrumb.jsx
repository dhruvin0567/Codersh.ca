import { Link, useLocation } from "react-router-dom";
import BreadcrumbBG from "../../assets/images/images2/tinified/angularjs_1.webp";

function BreadCrumb({ title }) {
	const location = useLocation();

	// Extract the last segment of the URL path (e.g., "madame-f")
	const pathSegments = location.pathname.split("/").filter(Boolean);
	const lastSegment = pathSegments[pathSegments.length - 1];

	// Convert slug to readable format: "madame-f" → "Madame F"
	const formattedSlug = lastSegment
		.replace(/-/g, " ")
		.replace(/\b\w/g, (char) => char.toUpperCase());

	// Determine if we should override the title with URL segment
	const finalTitle =
		title === "Case Study Details" ? formattedSlug : title;

	return (
		<div className="aximo-breadcrumb" style={{ backgroundImage: `url(${BreadcrumbBG})` }}>
			<div className="container">
				<h1 className="post__title">{finalTitle}</h1>
				<nav className="breadcrumbs">
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						{title === "Blog Details" && (
							<li>
								<Link to="/ourblog">Blog</Link>
							</li>
						)}
						{title === "Case Study Details" && (
							<li>
								<Link to="/case-studies">Case Studies</Link>
							</li>
						)}
						<li aria-current="page">{finalTitle}</li>
					</ul>
				</nav>
			</div>
		</div>
	);
}

export default BreadCrumb;
