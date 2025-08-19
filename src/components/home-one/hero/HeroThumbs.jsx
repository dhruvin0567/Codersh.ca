import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

function HeroThumbs() {
  const images = [
    {
      src: "https://res.cloudinary.com/dftnq7fna/image/upload/q_auto,f_auto,w_800/Kinvara_mudijz.webp",
      alt: "Kinvara",
      width: 800,
      height: 600,
    },
    {
      src: "https://res.cloudinary.com/dftnq7fna/image/upload/q_auto,f_auto,w_800/Techless_f1vg5r.webp",
      alt: "Techless",
      width: 800,
      height: 600,
    },
    {
      src: "https://res.cloudinary.com/dftnq7fna/image/upload/q_auto,f_auto,w_800/Cohort_bh864t.webp",
      alt: "Cohort",
      width: 800,
      height: 600,
    },
  ];

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
          320: { slidesPerView: 1 },
          480: { slidesPerView: 1 },
          768: { slidesPerView: 1 },
          1024: { slidesPerView: 1 },
        }}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img.src}
              alt={img.alt}
              width={img.width}
              height={img.height}
              loading="lazy"
              style={{ maxWidth: "100%", height: "auto", display: "block" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default HeroThumbs;
