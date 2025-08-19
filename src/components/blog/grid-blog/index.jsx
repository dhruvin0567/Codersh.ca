import { useState, useEffect } from "react";
import FadeInStagger from "../../animation/FadeInStagger";
import PortfolioCardTwo from "../../portfolio/two/PortfolioCardTwo";
import arrowRight from "../../../assets/images/icon/arrow-right8.svg";
import arrowLeft from "../../../assets/images/icon/left-arrow.svg";

const BASE_API_URL =
  "https://codersh.com/wp-json/wp/v2/posts?_embed&per_page=6";

function GridBlog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const decodeHTML = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.documentElement.textContent;
  };

  useEffect(() => {
    setLoading(true);
    fetch(`${BASE_API_URL}&page=${currentPage}`)
      .then((response) => {
        const totalPagesHeader = response.headers.get("X-WP-TotalPages");
        if (totalPagesHeader) {
          setTotalPages(parseInt(totalPagesHeader, 10));
        }
        return response.json();
      })
      .then((data) => {
        const formattedPosts = data.map((post) => ({
          id: post.id,
          title: decodeHTML(post.title.rendered),
          img:
            post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
            "/blog1.webp",
          link: `/blog/${post.slug}`,
        }));
        setPosts(formattedPosts);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
        setLoading(false);
      });
  }, [currentPage]);

  const handlePageClick = (e, page) => {
    e.preventDefault();
    if (page !== currentPage) {
      setCurrentPage(page);
    }
  };

  const generatePageNumbers = () => {
    const delta = 1;
    const pages = [];

    const range = [];
    for (
      let i = Math.max(2, currentPage - delta);
      i <= Math.min(totalPages - 1, currentPage + delta);
      i++
    ) {
      range.push(i);
    }

    if (currentPage - delta > 2) {
      range.unshift("...");
    }

    if (currentPage + delta < totalPages - 1) {
      range.push("...");
    }

    range.unshift(1);
    if (totalPages > 1) range.push(totalPages);

    return range;
  };

  if (loading)
    return (
      <div className="blod-fetch">
        <div className="aximo-preloader">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );

  return (
    <>
      <div className="section aximo-section-padding2 aximo-project-page">
        <div className="container">
          <div className="row">
            {posts.map((blog, index) => (
              <FadeInStagger className="col-lg-6" key={blog.id} index={index}>
                <PortfolioCardTwo blog={blog} />
              </FadeInStagger>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="aximo-navigation">
              <nav className="navigation pagination" aria-label="Posts">
                <div className="nav-links">
                  {/* Previous Page */}
                  {currentPage > 1 && (
                    <a
                      href="#"
                      className="prev page-numbers"
                      onClick={(e) => handlePageClick(e, currentPage - 1)}
                    >
                      <img src={arrowLeft} alt="arrow-img" />
                    </a>
                  )}

                  {/* Dynamic Page Numbers */}
                  {generatePageNumbers().map((page, index) =>
                    page === "..." ? (
                      <span
                        key={`ellipsis-${index}`}
                        className="page-numbers dots"
                      >
                        ...
                      </span>
                    ) : page === currentPage ? (
                      <span
                        key={page}
                        aria-current="page"
                        className="page-numbers current"
                      >
                        {page}
                      </span>
                    ) : (
                      <a
                        key={page}
                        href="#"
                        className="page-numbers"
                        onClick={(e) => handlePageClick(e, page)}
                      >
                        {page}
                      </a>
                    )
                  )}

                  {/* Next Page */}
                  {currentPage < totalPages && (
                    <a
                      href="#"
                      className="next page-numbers"
                      onClick={(e) => handlePageClick(e, currentPage + 1)}
                    >
                      <img src={arrowRight} alt="arrow-img" />
                    </a>
                  )}
                </div>
              </nav>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default GridBlog;
