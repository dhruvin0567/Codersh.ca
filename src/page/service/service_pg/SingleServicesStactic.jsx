import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ServiceCard from "../../../components/home-four/services/ServiceCard";
import BreadCrumb from "../../../components/common/Breadcrumb";
import FadeInStagger from "../../../components/animation/FadeInStagger";
import FadeInLeft from "../../../components/animation/FadeInLeft";
import FadeInUp from "../../../components/animation/FadeInUp";

function SingleServicesStactic() {
  const { slug } = useParams();
  const [serviceData, setServiceData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadService = async () => {
      try {
        const response = await fetch(`/data/services/${slug}.json`);
        if (!response.ok) throw new Error("Service not found");
        const json = await response.json();
        setServiceData(json);
      } catch (error) {
        setServiceData(null);
      } finally {
        setLoading(false);
      }
    };

    loadService();
  }, [slug]);

  if (loading) return <div>Loading...</div>;
  if (!serviceData) return <div>Service Not Found</div>;

  return (
    <div>
      <BreadCrumb title={serviceData.breadcrumbTitle} />

      {/* Top Rated Section */}
      <div className="top-rated text-light" style={{ background: "#000000" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <a
                href="https://clutch.co/profile/codersh-web-services"
                target="_blank"
                rel="noopener noreferrer"
                className="clutch-widget d-flex mb-4 mb-lg-0"
              >
                <span className="me-2">
                  <p className="mb-0 text-light">Reviewed On</p>
                  <img
                    src={serviceData.topRated.reviewedOn.image}
                    alt={serviceData.topRated.reviewedOn.alt}
                    width={serviceData.topRated.reviewedOn.width}
                  />
                </span>
                <span className="d-flex flex-column justify-content-between text-light">
                  <img
                    src={serviceData.topRated.rating.starsImage}
                    alt="rating"
                    width={serviceData.topRated.rating.width}
                  />
                  <p className="review-amount mb-0">
                    {serviceData.topRated.rating.reviewCount}
                  </p>
                </span>
              </a>
            </div>
            <div className="col-lg-9 d-flex align-items-center">
              <p className="top-rated-text ms-lg-4 ">
                {serviceData.topRated.text}
                <Link
                  to={serviceData.topRated.workLink}
                  className="text-light ms-2"
                  style={{
                    textDecoration: "underline",
                    textUnderlineOffset: "4px",
                    textDecorationThickness: "1px",
                  }}
                >
                  View Our Work
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="section aximo-section-padding3 position-relative">
        <div className="container">
          <div className="mb-5 text-center">
            <h3 className="mb-3" style={{ fontSize: "2.5rem" }}>
              {serviceData.servicesSection.title}
            </h3>
            <p>{serviceData.servicesSection.description}</p>
          </div>
          <div className="row text-center">
            {serviceData.services.map((item, index) => (
              <FadeInStagger
                key={index}
                index={index}
                className="col-xl-4 col-md-6 col-lg-6"
              >
                <ServiceCard
                  service={{
                    title: item.title,
                    description: item.description,
                    iconImg: item.iconImg,
                  }}
                />
              </FadeInStagger>
            ))}
          </div>
        </div>
      </div>

      {/* Hire Developer Section */}
      <div className="section">
        <div className="container">
          <div className="row pb-5">
            <div className="col-lg-6">
              <FadeInLeft className="aximo-content-thumb3">
                <img
                  src={serviceData.hireDeveloper.image}
                  alt="Hire Developer"
                />
              </FadeInLeft>
            </div>
            <div className="col-lg-6 d-flex align-items-center">
              <div className="aximo-default-content2 libre-font m-left-gap-small">
                <h3 className="mb-4">{serviceData.hireDeveloper.heading}</h3>
                <p className="fs-18 mb-4">
                  {serviceData.hireDeveloper.description}
                </p>
                <ul className="mb-4">
                  {serviceData.hireDeveloper.features.map((feature, i) => (
                    <li key={i}>
                      <i
                        className="fa-solid fa-check"
                        style={{ color: "#000", marginRight: "20px" }}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
                <FadeInUp className="aximo-btn-wrap2">
                  <Link
                    to={serviceData.hireDeveloper.cta.link}
                    className="iwt-button"
                  >
                    {serviceData.hireDeveloper.cta.text}
                  </Link>
                </FadeInUp>
              </div>
            </div>
          </div>

          {/* Why Choose Section */}
          <div className="row">
            <div className="col-lg-6 mt-sm-5 d-flex align-items-center order-lg-1 order-2">
              <div className="aximo-default-content2 libre-font m-left-gap-small">
                <h3 className="mb-4">{serviceData.whyChoose.heading}</h3>
                <p className="fs-18 mb-4">
                  {serviceData.whyChoose.description}
                </p>
                <ul className="mb-4">
                  {serviceData.whyChoose.features.map((feature, i) => (
                    <li key={i}>
                      <i
                        className="fa-solid fa-check"
                        style={{ color: "#000", marginRight: "20px" }}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
                <FadeInUp className="aximo-btn-wrap2">
                  <Link
                    to={serviceData.whyChoose.cta.link}
                    className="iwt-button"
                  >
                    {serviceData.whyChoose.cta.text}
                  </Link>
                </FadeInUp>
              </div>
            </div>
            <div className="col-lg-6 mt-sm-5 order-lg-2 order-1">
              <FadeInLeft className="aximo-content-thumb3">
                <img src={serviceData.whyChoose.image} alt="Why Choose" />
              </FadeInLeft>
            </div>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="section aximo-section-padding3">
        <div className="container">
          <div className="aximo-section-title">
            <div className="row text-center">
              <div className="col">
                <h3 style={{ fontSize: "2.5rem" }}>
                  {serviceData.process.heading}
                </h3>
                <p>{serviceData.process.description}</p>
              </div>
            </div>
          </div>
          <div className="row text-center">
            {serviceData.process.steps.map((step, index) => (
              <FadeInStagger
                key={index}
                index={index}
                className="col-xl-4 col-md-6 col-lg-6"
              >
                <ServiceCard
                  service={{
                    title: step.title,
                    iconImg: step.iconImg,
                  }}
                />
              </FadeInStagger>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleServicesStactic;
