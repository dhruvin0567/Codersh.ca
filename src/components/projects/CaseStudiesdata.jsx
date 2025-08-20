import { useState, useEffect } from "react";
import FadeInStagger from "../animation/FadeInStagger";
import PortfolioCard from "../portfolio/two/PortfolioCard";

const WP_API_URL = "https://codersh.com/wp-json/wp/v2/case-studies?_embed";

function GridBlog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const decodeHTML = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.documentElement.textContent;
  };

  useEffect(() => {
    fetch(WP_API_URL)
      .then((response) => response.json())
      .then((data) => {
        const formattedPosts = data.map((post) => ({
          id: post.id,
          title: decodeHTML(post.title.rendered),
          img:
            post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
            "/blog1.webp",
          link: `/case-studies/${post.slug}`,
        }));
        setPosts(formattedPosts);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
        setLoading(false);
      });
  }, []);

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
            {posts.map((caseStudy, index) => (
              <FadeInStagger
                className="col-lg-6"
                key={caseStudy.id}
                index={index}
              >
                <PortfolioCard blog={caseStudy} />
              </FadeInStagger>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default GridBlog;
