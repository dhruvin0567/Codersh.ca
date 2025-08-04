import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  #root {
	 overflow-x: hidden; 
  }
`;

const SolutionProjectSlider = React.memo(function SolutionProjectSlider({
  slides = [],
}) {
  const [loadState, setLoadState] = useState({});

  useEffect(() => {
    slides.forEach((_, index) => {
      setTimeout(() => {
        setLoadState((prev) => ({
          ...prev,
          [index]: {
            ...(prev[index] || {}),
            delayPassed: true,
          },
        }));
      }, 1500);
    });
  }, [slides]);

  const handleImageLoad = (index) => {
    setLoadState((prev) => ({
      ...prev,
      [index]: {
        ...(prev[index] || {}),
        loaded: true,
      },
    }));
  };

  const sliderSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1500,
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow: 4,
    slidesToScroll: 1,
    pauseOnHover: false,
    focusOnSelect: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <GlobalStyle />
      <section className="section aximo-project-page aximo-section-padding5">
        <div className="container-fluid">
          <Slider {...sliderSettings} className="custom-slider">
            {slides.map((slide, index) => {
              const state = loadState[index] || {};
              const showImage = state.loaded && state.delayPassed;
              return (
                <div className="slide-item" key={slide.id || index}>
                  <div
                    className="aximo-project-thumb Solution-slider mb-0"
                    style={{
                      cursor: "grab",
                      position: "relative",
                      minHeight: "250px",
                    }}
                  >
                    {!showImage && (
                      <div className="image-loader">
                        <div className="aximo-preloader">
                          <div></div>
                          <div></div>
                          <div></div>
                        </div>
                      </div>
                    )}
                    <img
                      src={slide.image}
                      alt={slide.alt || "Project Image"}
                      loading="lazy"
                      onLoad={() => handleImageLoad(index)}
                    />
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </section>
    </>
  );
});

SolutionProjectSlider.displayName = "SolutionProjectSlider";

export default SolutionProjectSlider;
