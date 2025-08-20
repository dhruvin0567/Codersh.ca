import { Link } from "react-router-dom";
import Blog1Img from "/src/assets/images/images2/lcp-issue-768x404.webp";
import Blog2Img from "/src/assets/images/images2/1-768x403.webp";
import Blog3Img from "/src/assets/images/images2/step-by-step-guide-768x404.webp";
import Blog4Img from "/src/assets/images/images2/3-768x403.webp";
import Blog5Img from "/src/assets/images/images2/4-768x403.webp";
import Blog6Img from "/src/assets/images/images2/2-768x403.webp";
import Blog7Img from "/src/assets/images/images2/3-768x403 (1).webp";
import Blog8Img from "/src/assets/images/images2/4-1-768x403.webp";
import Blog9Img from "/src/assets/images/images2/5-768x403.webp";
import Blog10Img from "/src/assets/images/images2/6-768x403.webp";
import Blog11Img from "/src/assets/images/images2/7-768x403.webp";
import Blog12Img from "/src/assets/images/images2/8-768x403.webp";
import Blog13Img from "/src/assets/images/images2/Blog-Post-Thumbnail-Codersh-768x403.webp";
import Blog14Img from "/src/assets/images/images2/how-to-find-and-hire-the-best-shopify-developers-in-2023-768x403.webp";
import Blog15Img from "/src/assets/images/images2/Blog-Post-Thumbnail-Codersh-768x403 (1).webp";
import Blog16Img from "/src/assets/images/images2/The-Top-5-Shopify-Trends-768x403.webp";
import Blog17Img from "/src/assets/images/images2/Why-Choose-Shopify-768x403.webp";
import Blog18Img from "/src/assets/images/images2/shopify-intro-768x403.webp";
import Blog19Img from "/src/assets/images/images2/Blog-Post-Thumbnail-Codersh-768x403 (2).webp";
import Blog20Img from "/src/assets/images/images2/clay-banks-Ox6SW103KtM-unsplash-1024x683.webp";
import Blog21Img from "/src/assets/images/images2/Why-does-business-need-a-website-redesign-768x403.webp";
import Blog22Img from "/src/assets/images/images2/codersh-banner-1-768x403.jpeg";
import Blog23Img from "/src/assets/images/images2/Choose-the-Best-Shopify-Development-Compnay-768x403.webp";
import Blog24Img from "/src/assets/images/images2/ISCC-Event-768x403.webp";
import Blog25Img from "/src/assets/images/images2/image_2021_12_27T12_30_06_074Z-1-768x403.webp";
import Blog26Img from "/src/assets/images/images2/Unleashing-the-Power-of-Shopify-768x404.webp";
import Blog27Img from "/src/assets/images/images2/Optimizing-Shopify-Store-Performance-A-Technical-Guide-768x404.webp";
import Blog28Img from "/src/assets/images/images2/codersh-1-768x512.webp";
import ArrowImg from "../../../assets/images/images2/arrow-right.svg";

const blogListData = [
  {
    id: crypto.randomUUID(),
    title:
      "Unleashing the Power of Shopify: A Phenomenal $9.3 Billion BFCM Triumph!",
    img: Blog26Img,
    link: "/blog/Unleashing the Power of Shopify: A Phenomenal $9.3 Billion BFCM Triumph!",
  },
  {
    id: crypto.randomUUID(),
    title: "Optimizing Shopify Store Performance: A Technical Guide",
    img: Blog27Img,
    link: "/blog/Optimizing Shopify Store Performance: A Technical Guide",
  },
  {
    id: crypto.randomUUID(),
    title: "Codersh Web Services Takes Center Stage at WordCamp Ahmedabad",
    img: Blog28Img,
    link: "/blog/Codersh Web Services Takes Center Stage at WordCamp Ahmedabad",
  },
  {
    id: crypto.randomUUID(),
    title: "LCP issue Technical Details",
    img: Blog1Img,
    link: "/blog/lcp-issue-technical-details",
  },
  {
    id: crypto.randomUUID(),
    title: "10 Proven Strategies to Speed Up Your Shopify Store",
    img: Blog2Img,
    link: "/blog/10-proven-strategies-to-speed-up-your-shopify-store",
  },
  {
    id: crypto.randomUUID(),
    title: "A Step-by-Step Guide to Auditing Your Shopify Store’s Performance",
    img: Blog3Img,
    link: "/blog/step-by-step-guide-to-auditing-your-shopify-stores-performance",
  },
  {
    id: crypto.randomUUID(),
    title: "Why Shopify Speed Optimization Isn’t Just $50.",
    img: Blog4Img,
    link: "/blog/why-shopify-speed-optimization-isnt-just-50",
  },
  {
    id: crypto.randomUUID(),
    title:
      "How Does Codersh Enhance Shopify Potential Through Core Web Vitals?",
    img: Blog5Img,
    link: "/blog/how-does-codersh-enhance-shopify-potential-through-core-web-vitals",
  },
  {
    id: crypto.randomUUID(),
    title: "The Power of Site Speed in Boosting Sales",
    img: Blog6Img,
    link: "/blog/the-power-of-site-speed-in-boosting-sales",
  },
  {
    id: crypto.randomUUID(),
    title: "Why is Mobile Loading Speed Important?",
    img: Blog7Img,
    link: "/blog/why-is-mobile-loading-speed-important",
  },
  {
    id: crypto.randomUUID(),
    title: "What Are Core Web Vitals and Why Do They Matter for Your Store?",
    img: Blog8Img,
    link: "/blog/what-are-core-web-vitals-and-why-do-they-matter-for-your-store",
  },
  {
    id: crypto.randomUUID(),
    title: "How To Optimize Your Shopify Store for Maximum Performance?",
    img: Blog9Img,
    link: "/blog/how-to-optimize-your-shopify-store-for-maximum-performance",
  },
  {
    id: crypto.randomUUID(),
    title:
      "Why Cutting-Edge Speed Optimization Is Vital for Your Shopify Store in 2023",
    img: Blog10Img,
    link: "/blog/why-cutting-edge-speed-optimization-is-vital-for-your-shopify-store-in-2023",
  },
  {
    id: crypto.randomUUID(),
    title: "How Do Core Web Vitals Impact User Experience and SEO?",
    img: Blog11Img,
    link: "/blog/how-do-core-web-vitals-impact-user-experience-and-seo",
  },
  {
    id: crypto.randomUUID(),
    title: "Why Your Shopify Store Loading Speed Is Important?",
    img: Blog12Img,
    link: "/blog/why-your-shopify-store-loading-speed-is-important",
  },
  {
    id: crypto.randomUUID(),
    title:
      "Unlocking Business Success: The Importance of Conversion Rate Optimization",
    img: Blog13Img,
    link: "/blog/unlocking-business-success-the-importance-of-conversion-rate-optimization",
  },
  {
    id: crypto.randomUUID(),
    title: "How to Find and Hire the Best Shopify Developers in 2023?",
    img: Blog14Img,
    link: "/blog/how-to-find-and-hire-the-best-shopify-developers-in-2023",
  },
  {
    id: crypto.randomUUID(),
    title:
      "Maximizing Your Shopify Store Performance: The Impact of JS Execution Order",
    img: Blog15Img,
    link: "/blog/maximizing-your-shopify-store-performance-the-impact-of-js-execution-order",
  },
  {
    id: crypto.randomUUID(),
    title:
      "The Top 5 Shopify Trends to Watch in 2023 for Small Business Owners",
    img: Blog16Img,
    link: "/blog/the-top-5-shopify-trends-to-watch-in-2023-for-small-business-owners",
  },
  {
    id: crypto.randomUUID(),
    title:
      "Why Choose Shopify for Your E-commerce Website: The Benefits of the Shopify Platform",
    img: Blog17Img,
    link: "/blog/why-choose-shopify-for-your-e-commerce-website-the-benefits-of-the-shopify-platform",
  },
  {
    id: crypto.randomUUID(),
    title: "The Ultimate E-commerce Platform for Your Online Store",
    img: Blog18Img,
    link: "/blog/the-ultimate-e-commerce-platform-for-your-online-store",
  },
  {
    id: crypto.randomUUID(),
    title: "Shopify Store UX Best Practices to Follow in 2023!",
    img: Blog19Img,
    link: "/blog/shopify-store-ux-best-practices-to-follow-in-2023",
  },
  {
    id: crypto.randomUUID(),
    title: "How New Ecommerce Entrepreneurs Can Attract and Keep New Customers",
    img: Blog20Img,
    link: "/blog/how-new-ecommerce-entrepreneurs-can-attract-and-keep-new-customers",
  },
  {
    id: crypto.randomUUID(),
    title: "Why does business need a website redesign?",
    img: Blog21Img,
    link: "/blog/why-does-business-need-a-website-redesign",
  },
  {
    id: crypto.randomUUID(),
    title:
      "Clutch Names Codersh as a Leading Top Web Development Company in 2022",
    img: Blog22Img,
    link: "/blog/clutch-names-codersh-as-a-leading-top-web-development-company-in-2022",
  },
  {
    id: crypto.randomUUID(),
    title: "How to Choose a Shopify Development Company?",
    img: Blog23Img,
    link: "/blog/how-to-choose-a-shopify-development-company",
  },
  {
    id: crypto.randomUUID(),
    title: "IT Sales Conference Event 2022 #isc2022",
    img: Blog24Img,
    link: "/blog/it-sales-conference-event-2022-isc2022",
  },
  {
    id: crypto.randomUUID(),
    title: "Announcements",
    img: Blog25Img,
    link: "/blog/announcements",
  },
];

import { motion } from "framer-motion";

function Blog1data() {
  return (
    <div>
      <div className="blogs">
        <div className="container">
          <div className="row">
            {blogListData.map((blog, index) => (
              <motion.div
                key={blog.id}
                className="col-lg-4 col-sm-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  delay: index * 0.2,
                  duration: 0.6,
                }}
              >
                <div className="blog-card">
                  {/* Blog Image */}
                  <img className="blog-image" src={blog.img} alt={blog.title} />
                  <div className="blog-content">
                    {/* Blog Title Link */}
                    <Link to={blog.link}>
                      <h6 className="blog-title">{blog.title}</h6>
                    </Link>
                    {/* Read more link */}
                    <Link to={blog.link} className="blog-link">
                      Read more
                      <img
                        src={ArrowImg}
                        alt="arrow"
                        className="readMore-btn"
                        height="17px"
                        style={{ marginLeft: "5px" }}
                      />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog1data;
