import StarImg from "../../../assets/images/v2/shape-star.webp";
import Thumb1Img from "../../../assets/images/v2/h-thumb1.webp";
import Thumb2Img from "../../../assets/images/v2/h-thumb2.webp";
import Thumb3Img from "../../../assets/images/v2/h-thumb3.webp";
import Thumb4Img from "../../../assets/images/v2/h-thumb4.webp";
import Thumb5Img from "../../../assets/images/v2/h-thumb5.webp";
import ServiceCard from "./ServiceCard";

const servicesData = [
  {
    id: crypto.randomUUID(),
    title: "Product Development",
    description:
      "We are focused on developing innovative products services. We research and development to create new solutions.",
    img: Thumb1Img,
  },
  {
    id: crypto.randomUUID(),
    title: "Consulting & Advisory",
    description:
      "Our expertise in various fields, such as management, finance, marketing, or technology, to help businesses solve problems.",
    img: Thumb2Img,
  },
  {
    id: crypto.randomUUID(),
    title: "Investment and Equity",
    description:
      "We invest in startups or take an equity stake in exchange or direct investment or have their own seed funds to support.",
    img: Thumb3Img,
  },
  {
    id: crypto.randomUUID(),
    title: "Co-Working Spaces",
    description:
      "We provide co-working spaces or office facilities for startups can work, collaborate, and access essential resources.",
    img: Thumb4Img,
  },
  {
    id: crypto.randomUUID(),
    title: "Legal & Administrative",
    description:
      "Offer legal and administrative assistance, helping startups with tasks like business registration, intellectual property etc.",
    img: Thumb5Img,
  },
];

function Services() {
  return (
    <div className="section aximo-section-padding position-relative">
      <div className="container">
        <div className="aximo-section-title center clash-grotesk">
          <h2>Services to increase chances of success</h2>
        </div>
      </div>
      <div className="aximo-increase-shape">
        <img src={StarImg} alt="StarImg" />
      </div>
      <div className="aximo-service-increase-wrap">
        {servicesData.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
}

export default Services;
