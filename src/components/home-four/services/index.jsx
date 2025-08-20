import { Link } from "react-router-dom";
import FadeInStagger from "../../animation/FadeInStagger";
import ServiceCard from "./ServiceCard";

const serviceData = [
  {
    id: crypto.randomUUID(),
    title: "Strategic Planning",
    description:
      "Actionable strategies that align with your business objectives, ensuring you're on the path to success.",
    iconClass: "icon-idea-bulb",
  },
  {
    id: crypto.randomUUID(),
    title: "Operational Excellence",
    description:
      "We optimize your processes & work improve efficiency, and reduce costs to enhance overall performance.",
    iconClass: "icon-project-management",
  },
  {
    id: crypto.randomUUID(),
    title: "Financial Advisory",
    description:
      "Our experts provide financial guide, help manage investments, & risk to ensure your financial health.",
    iconClass: "icon-start-up",
  },
  {
    id: crypto.randomUUID(),
    title: "Technology Solutions",
    description:
      "We offer IT consulting to guide new technology adoption for enhance all cybersecurity for your business.",
    iconClass: "icon-database",
  },
  {
    id: crypto.randomUUID(),
    title: "Marketing and Sales",
    description:
      "We help you develop effective and boost brand visibility to connect with your target audience.",
    iconClass: "icon-data-analysis-1",
  },
  {
    id: crypto.randomUUID(),
    title: "Specialized Expertise",
    description:
      "With industry-specific knowledge, we provide tailored solutions for all sectors like healthcare, finance.",
    iconClass: "icon-client-support",
  },
];

function Services() {
  return (
    <div className="section aximo-section-padding3 position-relative">
      <div className="container">
        <div className="aximo-section-title arimo-font">
          <div className="row">
            <div className="col-lg-7">
              <span className="aximo-subtitle">Our amazing services</span>
              <h2>We provide various essential services</h2>
            </div>
            <div className="col-lg-5 d-flex align-items-end justify-content-end">
              <div className="aximo-title-btn">
                <Link className="aximo-default-btn pill blue-btn" to="/service">
                  View all services
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {serviceData.map((service, index) => (
            <FadeInStagger
              key={service.id}
              index={index}
              className="col-xl-4 col-lg-6"
            >
              <ServiceCard service={service} />
            </FadeInStagger>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
