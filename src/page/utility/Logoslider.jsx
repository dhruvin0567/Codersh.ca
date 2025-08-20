import Brand1Img from "../../assets/images/images2/shopifyplus-300x300.jpg.webp";
import Brand2Img from "../../assets/images/images2/bold-300x300.jpg.webp";
import Brand3Img from "../../assets/images/images2/klarna-300x300.jpg.webp";
import Brand4Img from "../../assets/images/images2/klaviyo-300x300.jpg.webp";
import Brand5Img from "../../assets/images/images2/mailchimp-300x300.jpg.webp";
import Brand6Img from "../../assets/images/images2/applepay-300x300.jpg.webp";
import Brand7Img from "../../assets/images/images2/feefo-300x300.jpg.webp";
import Brand8Img from "../../assets/images/images2/zendesk-300x300.jpg.webp";
import Brand9Img from "../../assets/images/images2/loyaltylion-300x300.jpg.webp";
import BreadCrumb from "../../components/common/Breadcrumb";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const sliderData = [
  { id: crypto.randomUUID(), img: Brand1Img },
  { id: crypto.randomUUID(), img: Brand2Img },
  { id: crypto.randomUUID(), img: Brand3Img },
  { id: crypto.randomUUID(), img: Brand4Img },
  { id: crypto.randomUUID(), img: Brand5Img },
  { id: crypto.randomUUID(), img: Brand6Img },
  { id: crypto.randomUUID(), img: Brand7Img },
  { id: crypto.randomUUID(), img: Brand1Img },
  { id: crypto.randomUUID(), img: Brand2Img },
  { id: crypto.randomUUID(), img: Brand3Img },
  { id: crypto.randomUUID(), img: Brand4Img },
  { id: crypto.randomUUID(), img: Brand5Img },
  { id: crypto.randomUUID(), img: Brand6Img },
  { id: crypto.randomUUID(), img: Brand7Img },
  { id: crypto.randomUUID(), img: Brand8Img },
  { id: crypto.randomUUID(), img: Brand9Img },
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
    768: { slidesPerView: 3 },
    992: { slidesPerView: 4 },
    1200: { slidesPerView: 5 },
    1400: { slidesPerView: 8 },
  },
};

const Logoslider = () => {
  return (
    <div>
      <BreadCrumb title="Logo Slider" />
      <div className="aximo-brandlogo-section">
        <div className="aximo-brandlogo-title">
          <p>
            We’ve helped over 200+ startups grow their business around the world
          </p>
        </div>
        <div className="swiper-container">
          {/* First slider moving left */}
          <Swiper
            {...swiperSettings}
            direction="horizontal"
            autoplay={{ ...swiperSettings.autoplay, reverseDirection: true }}
            className="aximo-brandlogo-slider left-slider"
          >
            {sliderData.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="aximo-brandlogo-item">
                  <img
                    src={item.img}
                    className="aximo-brandlogo-item"
                    alt="brand logo"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="m-5"></div>
          {/* Second slider moving right */}
          <Swiper
            {...swiperSettings}
            direction="horizontal"
            className="aximo-brandlogo-slider right-slider"
          >
            {sliderData.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="aximo-brandlogo-item">
                  <img
                    src={item.img}
                    className="aximo-brandlogo-item"
                    alt="brand logo"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Logoslider;
