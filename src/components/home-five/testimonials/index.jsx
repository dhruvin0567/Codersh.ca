import TestimonialImg from "../../../assets/images/v5/testimonial1.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import TestimonialCard from "./TestimonialCard";

const testimonialsData = [
  {
    id: crypto.randomUUID(),
    author: "William Jack",
    designation: "Creative Director",
    title: "They exceeded our expectations",
    description:
      "As a startup, you need to find a good marketing partner who can help you connect to the right people. They advertise that they can help our company to increase your sales by up to 78% -- they exceeded our expectations.",
    img: TestimonialImg,
  },
  {
    id: crypto.randomUUID(),
    author: "William Jack",
    designation: "Creative Director",
    title: "They exceeded our expectations",
    description:
      "As a startup, you need to find a good marketing partner who can help you connect to the right people. They advertise that they can help our company to increase your sales by up to 78% -- they exceeded our expectations.",
    img: TestimonialImg,
  },
  {
    id: crypto.randomUUID(),
    author: "William Jack",
    designation: "Creative Director",
    title: "They exceeded our expectations",
    description:
      "As a startup, you need to find a good marketing partner who can help you connect to the right people. They advertise that they can help our company to increase your sales by up to 78% -- they exceeded our expectations.",
    img: TestimonialImg,
  },
];

const swiperSettings = {
  slidesPerView: 1,
  pagination: {
    clickable: true,
  },
  modules: [Pagination],
};

function Testimonials() {
  return (
    <div className="section aximo-section-padding2">
      <div className="container">
        <div className="aximo-section-title libre-font">
          <div className="row">
            <div className="col-lg-7">
              <h2>Reviews from our satisfied customers</h2>
            </div>
          </div>
        </div>
        <div className="swiper aximo-testimonial-slider">
          {
            <Swiper {...swiperSettings}>
              {testimonialsData.map((testimonial) => (
                <SwiperSlide key={testimonial.id}>
                  <TestimonialCard testimonial={testimonial} />
                </SwiperSlide>
              ))}
            </Swiper>
          }
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
