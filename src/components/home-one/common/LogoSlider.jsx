import { memo } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Star2Img from "../../../assets/images/v1/icon/star2.webp";

/*
 * Reusable logo slider component.
 *
 * @param {Array} logos - Array of logo objects with { id?, image, alt? }
 * @param {String} title - Optional title above the slider
 * @param {Object} sliderOptions - Optional custom slider settings
 */
const LogoSlider = ({ logos = [], title = "", sliderOptions = {} }) => {
  if (!logos || logos.length === 0) return null;

  const defaultSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1500,
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow: 4,
    slidesToScroll: 1,
    pauseOnHover: false,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 4 } },
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 576, settings: { slidesToShow: 2 } },
      { breakpoint: 320, settings: { slidesToShow: 2 } },
    ],
  };

  const settings = { ...defaultSettings, ...sliderOptions };

  return (
    <section
      className="aximo-project-page logo-slider aximo-section-padding"
      aria-label={title || "Brand Logos"}
      style={{ borderBottom: "1px solid #e6e6e6" }}
    >
      <div className="container-fluid">
        {title && (
          // <h3 className=" text-center mb-5 ">
          //     {title}
          // </h3>
          //   <h2 className="mb-5 text-center">
          //     <span className="aximo-title-animation">
          //       {title}
          //       <span className="aximo-title-icon">
          //         <img src={Star2Img} alt="Star Img" />
          //       </span>
          //     </span>
          //   </h2>

          <h2 className="mb-5 text-center">
            <span className="aximo-title-animation">
              Trusted by
              <span className="aximo-title-icon">
                <img src={Star2Img} alt="Star2Img" />
              </span>
            </span>{" "}
            <br />
            Leading Companies
          </h2>
        )}

        <Slider {...settings} className="logo-slider slick-track-centered">
          {logos.map((logo, index) => (
            <div
              key={logo.id || logo.image || index}
              className="logo-img-slider w-100"
            >
              <img
                src={logo.image}
                alt={logo.alt || "Brand logo"}
                className="homepage-logo-slider"
                style={{ objectFit: "contain" }}
                loading="lazy"
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default memo(LogoSlider);
