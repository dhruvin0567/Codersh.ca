import Categories from "./Categories";
import RecentPosts from "./RecentPosts";
import Search from "./Search";
import Tags from "./Tags";
import Blog1Img from "../../assets/images/blog/blog3.webp";
import Blog2Img from "../../assets/images/blog/blog4.webp";
import Blog3Img from "../../assets/images/blog/blog5.webp";
import FadeInStagger from "../animation/FadeInStagger";
import BlogCard from "./BlogCard";
import Navigation from "./Navigation";

const blogData = [
  {
    id: crypto.randomUUID(),
    title:
      "Learn these five high-income skills to build your one-person business and get rich",
    content:
      "As a first-generation immigrant, money and networks weren’t given to me. So instead of going through the front door, I tried a back door approach",
    category: "Marketing",
    date: "June 18, 2024",
    img: Blog1Img,
  },
  {
    id: crypto.randomUUID(),
    title:
      "I run a $10,000/month business with 0 employees, here's how I use AI tools",
    content:
      "Making more money with the help of AI tools. — Up until now, I’ve shared two posts discussing the AI tools I’ve incorporated into my",
    category: "Business",
    date: "June 18, 2024",
    img: Blog2Img,
  },
  {
    id: crypto.randomUUID(),
    title:
      "Technical loan, product loan or business loan: different types and how to deal withit",
    content:
      "Tech debt part two — a deeper dive into product and business debt and the ripple effect on organizations — in part one",
    category: "Technology",
    date: "June 18, 2024",
    img: Blog3Img,
  },
];
function Blog() {
  return (
    <div className="section aximo-section-padding2">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            {blogData.map((blog, index) => (
              <FadeInStagger
                className="single-post-item"
                key={blog.id}
                index={index}
              >
                <BlogCard key={blog.id} blog={blog} />
              </FadeInStagger>
            ))}
            <Navigation />
          </div>
          <div className="col-lg-4">
            <div className="right-sidebar">
              <Search />
              <Categories />
              <RecentPosts />
              <Tags />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
