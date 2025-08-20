import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import useBrands from "../../hooks/useBrands";
import VideoSlider from "../../components/common/VideoSlider";
import FadeInStagger from "../../components/animation/FadeInStagger";
import Star2Img from "../../assets/images/v1/icon/star2.webp";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useIsMobile from "./useIsMobile";
import Slider from "react-slick";

const SINGLE_BRAND_API_URL =
  "https://codersh.com/wp-json/wp/v2/brands?_embed&slug=";
const MEDIA_API_URL = "https://codersh.com/wp-json/wp/v2/media/";

function SingleBrand() {
  const sliderSettings = {
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    dots: true,
  };

  const { brands, loading } = useBrands();
  const isMobile = useIsMobile();
  const { slug } = useParams();
  const [brand, setBrand] = useState(null);

  const brandItems = (brands || []).slice(-3).reverse();

  const processImageFields = async (brandData) => {
    if (!brandData || !brandData.acf) return brandData;

    const processedAcf = { ...brandData.acf };
    const imageFields = ["main-image", "image2", "image3", "image4", "image5"];

    for (const field of imageFields) {
      if (processedAcf[field] && typeof processedAcf[field] === "number") {
        try {
          const response = await fetch(
            `${MEDIA_API_URL}${processedAcf[field]}`
          );
          const mediaData = await response.json();

          if (mediaData && mediaData.source_url) {
            processedAcf[field] = mediaData.source_url;
          }
        } catch (error) {
          console.error(`Error fetching image for ${field}:`, error);
        }
      }
    }

    return {
      ...brandData,
      acf: processedAcf,
    };
  };

  useEffect(() => {
    fetch(`${SINGLE_BRAND_API_URL}${slug}`)
      .then((response) => response.json())
      .then(async (data) => {
        if (data.length > 0) {
          const processedBrand = await processImageFields(data[0]);
          setBrand(processedBrand);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching brand:", error);
        setLoading(false);
      });
  }, [slug]);

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
    <div style={{ overflowX: "hidden" }}>
      <div className="Brand-breadcrumb">
        <div className="container">
          <br />
          <br />
          <br />
        </div>
      </div>
      <div className="case-study-hero-section">
        <img src={brand?.["main-image"]} alt={brand.title.rendered} />
      </div>

      <div className="cs-text">
        <div className="container-lg ">
          <div className="row">
            <div className=" col-md-6 text-start">
              <div className="p-5">
                <h2 className="pb-3">The Brief</h2>
                <p
                  className="brand-text"
                  dangerouslySetInnerHTML={{ __html: brand?.brief_data }}
                ></p>
              </div>
            </div>
            <div className="col-md-6 px-5 brand-info-container">
              <ul className="py-5">
                <li className="brand-info-li ">
                  <h5>Industry</h5>
                  <p
                    className="brand-text-2"
                    dangerouslySetInnerHTML={{ __html: brand?.industry }}
                  ></p>
                </li>
                <li className="brand-info-li">
                  <h5>Project</h5>
                  <p
                    className="brand-text-2"
                    dangerouslySetInnerHTML={{ __html: brand?.project }}
                  ></p>
                </li>
                <li className="brand-info-li">
                  <h5>Technology</h5>
                  <p
                    className="brand-text-2"
                    dangerouslySetInnerHTML={{ __html: brand?.technology }}
                  ></p>
                </li>
                <li className="brand-info-li">
                  <h5>Visit</h5>
                  <p className="brand-text-2">
                    <a
                      rel="noopener noreferrer"
                      href={brand?.site_url}
                      target="_blank"
                      style={{ fontStyle: "none", color: "black" }}
                    >
                      {brand?.site_url_text}
                    </a>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="image-section">
        <div className="case-study-section-img">
          <img src={brand?.image2} alt={brand.title.rendered} />
        </div>
      </div>

      <div className="cs-richtext text-center">
        <div className="container-lg  p-5">
          <h2 className="mb-5">
            <span className="aximo-title-animation">
              Challange
              <span className="aximo-title-icon">
                <img src={Star2Img} alt="starimg" />
              </span>
            </span>
          </h2>
          <div className="cs-richtext-paragraph mx-lg-5 px-lg-5 pb-5">
            <p
              className="brand-text"
              dangerouslySetInnerHTML={{ __html: brand?.challenge }}
            ></p>
          </div>
        </div>
      </div>

      <div className="cs-images-section ">
        <div className="container-lg p-4 p-md-5">
          <div className="row">
            <div className="col-md-6 ">
              <div className="cs-img">
                <img src={brand?.image3} alt />
              </div>
            </div>
            <div className="col-md-6 mt-4 mt-md-0">
              <div className="cs-img">
                <img src={brand?.image4} alt />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="cs-richtext text-center">
        <div className="container-lg  p-5">
          <h2 className="mb-5">
            <span className="aximo-title-animation">
              Solution & Results
              <span className="aximo-title-icon">
                <img src={Star2Img} alt="starimg" />
              </span>
            </span>
          </h2>
          <div className="cs-richtext-paragraph mx-lg-5">
            <p
              className="mb-3 brand-text"
              dangerouslySetInnerHTML={{ __html: brand?.solution_and_results }}
            ></p>
          </div>
        </div>
      </div>

      <div>
        <div className="container-lg cs-images-section-container px-lg-0">
          <div className="cs-image-section d-flex justify-content-center">
            <img src={brand?.image5} alt />
          </div>
        </div>
        {/* End */}
        <div className="cs-video-section">
          <div className="cs-video">
            <FadeInStagger>
              <div className="review-section text-center">
                <div className="container py-5">
                  <div className="py-3">
                    <div className="aximo-section-title center pb-2">
                      <h2>
                        Clients are always
                        <span className="aximo-title-animation">
                          satisfied with us
                          <span className="aximo-title-icon">
                            <img src={Star2Img} alt="Star2Img" />
                          </span>
                        </span>
                      </h2>
                    </div>
                    <p className="brand-text mx-lg-5 px-lg-5 mb-4 text-center">
                      We are very proud of the service we provide and stand by
                      every product we carry.
                      <br /> See our testimonials from our happy customers.
                    </p>
                  </div>
                  <VideoSlider />
                </div>
              </div>
            </FadeInStagger>
          </div>
        </div>
      </div>

      <div className="image-cards-section py-5">
        <div className="container text-center pb-5">
          <h2>
            Related Brands
            <span className="aximo-title-animation">
              We Support
              <span className="aximo-title-icon">
                <img src={Star2Img} alt="Star2Img" />
              </span>
            </span>
          </h2>
        </div>
        <div className="container">
          <div className="row">
            {isMobile ? (
              <Slider {...sliderSettings}>
                {brandItems.map((brand) => (
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
              brandItems.map((brand) => (
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

export default SingleBrand;
