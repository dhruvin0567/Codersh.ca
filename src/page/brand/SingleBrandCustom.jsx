import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import Star2Img from "../../assets/images/v1/icon/star2.webp";
import useIsMobile from "./useIsMobile";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SingleBrandCustom() {
  const { brandId } = useParams();
  const [brandData, setBrandData] = useState(null);
  const isMobile = useIsMobile();

  const sliderSettings = {
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    dots: true,
  };

  useEffect(() => {
    fetch(`/data/brands-details/${brandId}.json`)
      .then((res) => res.json())
      .then((data) => setBrandData(data))
      .catch((err) => console.error("Error loading brand data:", err));
  }, [brandId]);

  if (!brandData) return <div>Loading...</div>;

  const {
    heroImage,
    brief,
    details,
    images,
    challenge,
    solution,
    relatedBrands,
  } = brandData;

  return (
    <div style={{ overflowX: "hidden" }}>
      <div className="Brand-breadcrumb">
        <div className="container">
          <br />
          <br />
          <br />
        </div>
      </div>

      <div className="case-study-hero-section">
        <img src={heroImage} alt="Company_Site" />
      </div>

      <div className="cs-text">
        <div className="container-lg">
          <div className="row">
            <div className="col-md-6 text-start">
              <div className="p-3 p-md-4 p-lg-5">
                <h2 className="pt-3 pb-3 pt-md-0 pb-md-4">{brief.title}</h2>
                <p className="brand-text">{brief.description}</p>
              </div>
            </div>
            <div className="col-md-6 brand-info-container">
              <div className="px-2 py-4 px-md-4 px-lg-5 py-md-5 h-100">
                <ul>
                  <li className="brand-info-li">
                    <p>Industry</p>
                    <p className="brand-text-2">{details.industry}</p>
                  </li>
                  <li className="brand-info-li">
                    <p>Project</p>
                    <p className="brand-text-2">{details.project}</p>
                  </li>
                  <li className="brand-info-li">
                    <p>Technology</p>
                    <p className="brand-text-2">{details.technology}</p>
                  </li>
                  <li className="brand-info-li">
                    <p>Visit</p>
                    <p className="brand-text-2">
                      <a
                        href={details.visit}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ fontStyle: "none", color: "black" }}
                      >
                        {new URL(details.visit).hostname}
                      </a>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="image-section">
        <div className="case-study-section-img">
          <img src={images.laptop} alt="Laptop View" />
        </div>
      </div>

      <div className="cs-richtext text-center">
        <div className="container-lg p-4 py-md-5 px-md-4 px-lg-0">
          <h2 className="my-3">
            <span className="aximo-title-animation">
              {challenge.title}
              <span className="aximo-title-icon">
                <img src={Star2Img} alt="star icon" />
              </span>
            </span>
          </h2>
          <p className="brand-text">{challenge.description}</p>
        </div>
      </div>

      <div className="cs-images-section">
        <div className="container-lg">
          <div className="row">
            {images.other.map((img, idx) => (
              <div className="col-md-6 mt-4 mt-md-0" key={idx}>
                <div className="cs-img">
                  <img src={img} alt={`View_${idx}`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="cs-richtext text-center">
        <div className="container-lg p-4 py-md-5 px-md-4 px-lg-0">
          <h2 className="my-3">
            <span className="aximo-title-animation">
              {solution.title}
              <span className="aximo-title-icon">
                <img src={Star2Img} alt="star icon" />
              </span>
            </span>
          </h2>
          <p className="brand-text">{solution.description}</p>
        </div>
      </div>

      <div className="container-lg cs-images-section-container px-lg-0">
        <div className="cs-image-section d-flex justify-content-center">
          <img src={images.laptop} alt="brand img" />
        </div>
      </div>

      <div className="image-cards-section py-5">
        <div className="container text-center">
          <h2 className="mb-3 mb-lg-4">
            Related Brands
            <span className="aximo-title-animation">
              <span className="aximo-title-icon">
                <img src={Star2Img} alt="star icon" />
              </span>
            </span>
          </h2>
        </div>
        <div className="container">
          <div className="row">
            {isMobile ? (
              <Slider {...sliderSettings}>
                {relatedBrands.map((brand) => (
                  <div key={brand.id}>
                    <Link className="brand-card" to={brand.link}>
                      <img
                        src={brand.img}
                        alt={brand.title}
                        style={{ width: "100%" }}
                      />
                    </Link>
                  </div>
                ))}
              </Slider>
            ) : (
              relatedBrands.map((brand) => (
                <div className="col-md-4 p-4 p-md-3" key={brand.id}>
                  <Link className="brand-card" to={brand.link}>
                    <img src={brand.img} alt={brand.title} />
                  </Link>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleBrandCustom;
