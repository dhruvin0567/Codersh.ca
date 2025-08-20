import Brand1Img from "../../../assets/images/v2/b_1.webp";
import Brand2Img from "../../../assets/images/v2/b_2.webp";
import Brand3Img from "../../../assets/images/v2/b_3.webp";
import Brand4Img from "../../../assets/images/v2/b_4.webp";
import Brand5Img from "../../../assets/images/v2/b_5.webp";
import Brand6Img from "../../../assets/images/v2/b_6.webp";
import Brand7Img from "../../../assets/images/v2/b_7.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const sliderData = [
  {
    id: crypto.randomUUID(),
    img: Brand1Img,
  },
  {
    id: crypto.randomUUID(),
    img: Brand2Img,
  },
  {
    id: crypto.randomUUID(),
    img: Brand3Img,
  },
  {
    id: crypto.randomUUID(),
    img: Brand4Img,
  },
  {
    id: crypto.randomUUID(),
    img: Brand5Img,
  },
  {
    id: crypto.randomUUID(),
    img: Brand6Img,
  },
  {
    id: crypto.randomUUID(),
    img: Brand7Img,
  },
  {
    id: crypto.randomUUID(),
    img: Brand1Img,
  },
  {
    id: crypto.randomUUID(),
    img: Brand2Img,
  },
  {
    id: crypto.randomUUID(),
    img: Brand3Img,
  },
  {
    id: crypto.randomUUID(),
    img: Brand4Img,
  },
  {
    id: crypto.randomUUID(),
    img: Brand5Img,
  },
  {
    id: crypto.randomUUID(),
    img: Brand6Img,
  },
  {
    id: crypto.randomUUID(),
    img: Brand7Img,
  },
];

const swiperSettings = {
  centeredSlides: true,
  speed: 6000,
  autoplay: {
    delay: 1,
  },
  loop: true,
  allowTouchMove: false,
  modules: [Autoplay],
  slidesPerView: 2,
  breakpoints: {
    768: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 5,
    },
    1400: {
      slidesPerView: 6,
    },
  },
};
function BrandLogo() {
  return (
    <div className="aximo-brandlogo-section extra-side-margin">
      <div className="aximo-brandlogo-title">
        <p>
          We’ve helped over 200+ startups grow their business around the world
        </p>
      </div>
      <div className="swiper aximo-auto-slider">
        {
          <Swiper {...swiperSettings}>
            {sliderData.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="aximo-brandlogo-item">
                  <img src={item.img} alt="brand logo" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        }
      </div>
    </div>
  );
}

export default BrandLogo;
