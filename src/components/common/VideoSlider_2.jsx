import React, { useState, useRef, useEffect, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import FadeInStagger from "../../components/animation/FadeInStagger";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import video1 from "../../assets/images/Videos/Video-1-compressed.mp4";
import video2 from "../../assets/images/Videos/Video-2-compressed.mp4";
import video3 from "../../assets/images/Videos/Video-3-compressed.mp4";
import video4 from "../../assets/images/Videos/Video-4-compressed.mp4";
import video5 from "../../assets/images/Videos/Video-5-compressed.mp4";
import video6 from "../../assets/images/Videos/Video-6-compressed.mp4";

const videoFiles = [video1, video2, video3, video4, video5, video6];

const VideoSlider = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(null);
  const videoRefs = useRef([]);
  const swiperRef = useRef(null);
  const containerRef = useRef(null);

  const handlePlayPause = useCallback(
    (index) => {
      const videoElement = videoRefs.current[index];
      const swiperInstance = swiperRef.current?.swiper;

      if (currentVideoIndex === index) {
        videoElement.pause();
        setCurrentVideoIndex(null);
        if (swiperInstance) {
          swiperInstance.autoplay.start();
        }
      } else {
        videoRefs.current.forEach((video) => {
          if (video) video.pause();
        });
        videoElement
          .play()
          .then(() => {
            setCurrentVideoIndex(index);
            if (swiperInstance) {
              swiperInstance.autoplay.stop();
            }
          })
          .catch((e) => console.error("Video play failed:", e));
      }
    },
    [currentVideoIndex]
  );

  const handleVideoClick = useCallback(
    (index, e) => {
      e.preventDefault();
      const swiperInstance = swiperRef.current?.swiper;

      if (currentVideoIndex === index) {
        videoRefs.current[index].pause();
        setCurrentVideoIndex(null);
        if (swiperInstance) {
          swiperInstance.autoplay.start();
        }
      }
    },
    [currentVideoIndex]
  );

  const handleClickOutside = useCallback(
    (e) => {
      const isVideoClick = e.target.closest(".video-container");
      const isButtonClick = e.target.closest(".video-play-button");
      const swiperInstance = swiperRef.current?.swiper;

      if (!isVideoClick && !isButtonClick && currentVideoIndex !== null) {
        videoRefs.current.forEach((video) => {
          if (video) video.pause();
        });

        setCurrentVideoIndex(null);
        if (swiperInstance) {
          swiperInstance.autoplay.start();
        }
      }
    },
    [currentVideoIndex]
  );

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [handleClickOutside]);

  const goToNextSlide = useCallback(() => {
    swiperRef.current?.swiper.slideNext();
  }, []);

  const goToPrevSlide = useCallback(() => {
    swiperRef.current?.swiper.slidePrev();
  }, []);

  const Arrow = ({ direction }) => (
    <svg
      fill="#000000"
      width="30"
      height="30"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className="icon line"
    >
      <path
        d={
          direction === "prev"
            ? "M21,12H3M6,9,3,12l3,3"
            : "M3,12H21M18,9l3,3-3,3"
        }
        style={{
          fill: "none",
          stroke: "rgb(0, 0, 0)",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
        }}
      />
    </svg>
  );

  return (
    <div ref={containerRef}>
      <FadeInStagger>
        <div className="review-section text-center">
          <div className="container py-5">
            <div>
              <h2 className="mb-4 mb-lg-5">Our Client's Reviews</h2>
              <p className="brand-text mx-lg-5 px-lg-5 pb-4">
                We are very proud of the service we provide and stand by every
                product we carry. See our testimonials from our happy customers.
              </p>
            </div>

            <div className="slider-wrapper">
              <Swiper
                ref={swiperRef}
                spaceBetween={20}
                loop
                slidesPerView={4}
                speed={1000}
                modules={[Navigation, Autoplay]}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: true,
                }}
                breakpoints={{
                  320: { slidesPerView: 2 },
                  480: { slidesPerView: 2 },
                  768: { slidesPerView: 3 },
                  1024: { slidesPerView: 4 },
                }}
              >
                {videoFiles.map((video, index) => (
                  <SwiperSlide key={index}>
                    <div className="video-container">
                      <video
                        className="video-thumbnail"
                        width="100%"
                        height="auto"
                        ref={(el) => (videoRefs.current[index] = el)}
                        playsInline
                        muted
                        onClick={(e) => handleVideoClick(index, e)}
                      >
                        <source src={video} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>

                      {currentVideoIndex !== index && (
                        <button
                          className="video-play-button"
                          aria-label="Play video"
                          onClick={(e) => {
                            e.stopPropagation();
                            handlePlayPause(index);
                          }}
                        >
                          <i className="fa-solid fa-play" />
                        </button>
                      )}
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              <button
                className="swiper-button-prev prevBtn"
                onClick={goToPrevSlide}
                aria-label="Previous slide"
              >
                <Arrow direction="prev" />
              </button>
              <button
                className="swiper-button-next nextBtn"
                onClick={goToNextSlide}
                aria-label="Next slide"
              >
                <Arrow direction="next" />
              </button>
            </div>
          </div>
        </div>
      </FadeInStagger>
    </div>
  );
};

export default React.memo(VideoSlider);
