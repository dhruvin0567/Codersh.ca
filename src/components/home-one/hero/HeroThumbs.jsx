// import { useState, useEffect } from 'react';
// import HeroThumbImg1 from "/images/homepage/hero/Techless.webp";
// import HeroThumbImg2 from "/images/homepage/hero/Cohort.webp";
// import HeroThumbImg3 from "/images/homepage/hero/Kinvara.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

function HeroThumbs() {
  return (
    <div className="aximo-hero-thumb jos" data-jos_animation="fade-right">
      <Swiper
        spaceBetween={30} // Space between slides
        slidesPerView={1} // Number of slides visible at once
        loop={true} // Infinite loop of the slides
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }} // Autoplay settings
        speed={1000} // Transition speed in ms (1000ms = 1 second)
        modules={[Autoplay]} // Adding the Autoplay module
        breakpoints={{
          // When window width is >= 320px
          320: {
            slidesPerView: 1, // 1 slide per view
          },
          // When window width is >= 480px
          480: {
            slidesPerView: 1, // 2 slides per view
          },
          // When window width is >= 768px
          768: {
            slidesPerView: 1, // 3 slides per view
          },
          // When window width is >= 1024px
          1024: {
            slidesPerView: 1, // 4 slides per view
          },
        }}
      >
        <SwiperSlide>
          <img
            src="https://res.cloudinary.com/dftnq7fna/image/upload/v1755587527/Kinvara_mudijz.webp"
            alt="HeroImg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://res.cloudinary.com/dftnq7fna/image/upload/v1755587527/Techless_f1vg5r.webp"
            alt="HeroImg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://res.cloudinary.com/dftnq7fna/image/upload/v1755587526/Cohort_bh864t.webp"
            alt="HeroImg"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default HeroThumbs;
