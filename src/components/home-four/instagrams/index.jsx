import InstaThumb1Img from "../../../assets/images/v4/instagram-thumb1.webp";
import InstaThumb2Img from "../../../assets/images/v4/instagram-thumb2.webp";
import InstaThumb3Img from "../../../assets/images/v4/instagram-thumb3.webp";
import InstaThumb4Img from "../../../assets/images/v4/instagram-thumb4.webp";
import InstaThumb5Img from "../../../assets/images/v4/instagram-thumb5.webp";
import { Swiper, SwiperSlide } from "swiper/react";

const instagramsData = [
  {
    id: crypto.randomUUID(),
    handle: "@mthemeus",
    img: InstaThumb1Img,
  },
  {
    id: crypto.randomUUID(),
    handle: "@mthemeus",
    img: InstaThumb2Img,
  },
  {
    id: crypto.randomUUID(),
    handle: "@mthemeus",
    img: InstaThumb3Img,
  },
  {
    id: crypto.randomUUID(),
    handle: "@mthemeus",
    img: InstaThumb4Img,
  },
  {
    id: crypto.randomUUID(),
    handle: "@mthemeus",
    img: InstaThumb5Img,
  },
  {
    id: crypto.randomUUID(),
    handle: "@mthemeus",
    img: InstaThumb1Img,
  },
  {
    id: crypto.randomUUID(),
    handle: "@mthemeus",
    img: InstaThumb2Img,
  },
  {
    id: crypto.randomUUID(),
    handle: "@mthemeus",
    img: InstaThumb3Img,
  },
  {
    id: crypto.randomUUID(),
    handle: "@mthemeus",
    img: InstaThumb4Img,
  },
  {
    id: crypto.randomUUID(),
    handle: "@mthemeus",
    img: InstaThumb5Img,
  },
];

const swiperSettings = {
  loop: true,
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    900: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
      autoplay: {
        delay: 1,
      },
    },
    1400: {
      slidesPerView: 5,
    },
  },
};

function Instagrams() {
  return (
    <div className="aximo-instagram-section">
      <div className="swiper aximo-instagram-slider">
        <Swiper {...swiperSettings}>
          {instagramsData.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="aximo-instagram-thumb">
                <img src={item.img} alt={item.handle} />
                <div className="aximo-instagram-data">
                  <a href="https://www.instagram.com/">
                    <i className="icon-instagram"></i>
                  </a>
                  <h3>
                    <a href="https://mthemeus.com/" target="_blank">
                      {item.handle}
                    </a>
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Instagrams;
