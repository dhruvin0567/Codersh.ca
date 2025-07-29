
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import React from "react";

const SolutionProjectSlider = React.memo(function SolutionProjectSlider({ slides }) {
    return (
        <div className="section aximo-project-page aximo-section-padding5">
            <div className="container-fluid">
                <Swiper
                    spaceBetween={30}
                    slidesPerView={3}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    speed={1000}
                    modules={[Autoplay]}
                    breakpoints={{
                        320: { slidesPerView: 1 },
                        480: { slidesPerView: 2 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 4 },
                    }}
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={slide.id || index}>
                            <div
                                className="aximo-project-thumb Solution-slider"
                                style={{ cursor: "grab" }}
                            >
                                <img src={slide.image} alt={slide.alt} loading={index < 4 ? "eager" : "lazy"} />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
});

// Set the display name explicitly for React DevTools and linters
SolutionProjectSlider.displayName = "SolutionProjectSlider";

export default SolutionProjectSlider;
