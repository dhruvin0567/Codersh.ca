import HeroThumbImg1 from "/images/homepage/hero/Techless.webp";
import HeroThumbImg2 from "/images/homepage/hero/Cohort.webp";
import HeroThumbImg3 from "/images/homepage/hero/Kinvara.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

function HeroThumbs() {
  return (
    <div className="aximo-hero-thumb jos" data-jos_animation="fade-right">
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        speed={1000}
        modules={[Autoplay]}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          480: {
            slidesPerView: 1,
          },

          768: {
            slidesPerView: 1,
          },

          1024: {
            slidesPerView: 1,
          },
        }}
      >
        <SwiperSlide>
          <img src={HeroThumbImg1} alt="HeroImg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={HeroThumbImg2} alt="HeroImg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={HeroThumbImg3} alt="HeroImg" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default HeroThumbs;
