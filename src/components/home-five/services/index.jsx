import Icon1 from "../../../assets/images/v5/t_icon1.svg";
import Icon2 from "../../../assets/images/v5/t_icon2.svg";
import Icon3 from "../../../assets/images/v5/t_icon3.svg";
import Icon4 from "../../../assets/images/v5/t_icon4.svg";
import Icon5 from "../../../assets/images/v5/t_icon5.svg";
import ServiceCard from "./ServiceCard";

const servicesData = [
  {
    id: crypto.randomUUID(),
    title: "Online Advertising",
    description:
      "This includes pay-per-click (PPC) advertising on platforms like Google Ads and social media.",
    img: Icon1,
  },
  {
    id: crypto.randomUUID(),
    title: "SEO Services",
    description:
      "Driving organic (non-paid) traffic. This involves on-page and off-page SEO techniques.",
    img: Icon2,
  },
  {
    id: crypto.randomUUID(),
    title: "Content Marketing",
    description:
      "Blog posts, articles, videos, and infographics, to engage and educate all target audiences.",
    img: Icon3,
  },
  {
    id: crypto.randomUUID(),
    title: "Email Marketing",
    description:
      "Crafting & executing email campaigns to nurture leads, retain customers, and promote.",
    img: Icon4,
  },
  {
    id: crypto.randomUUID(),
    title: "Data Analysis",
    description:
      "Performance to make data-driven decisions and refine strategies for better results.",
    img: Icon5,
  },
];

function Services() {
  return (
    <div className="aximo-marketing-services-section extra-side-margin green-bg aximo-section-padding2">
      <div className="container">
        <div className="aximo-section-title center light libre-font">
          <h2>Exceptional digital marketing services</h2>
        </div>

        {servicesData.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
}

export default Services;
