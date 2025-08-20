import { Link } from "react-router-dom";
import FadeInStagger from "../../animation/FadeInStagger";
import TestimonialCard from "./TestimonialCard";

const testimonialsData = [
  {
    id: 1,
    title: "Highly recommended!",
    text: "“I recently used their luxury tile flooring services and I was extremely impressed with the quality of their work and the professionalism of their team.”",
    rating: 5,
    author: {
      name: "William Jack",
      designation: "Creative Director",
    },
  },
  {
    id: 2,
    title: "Amazing experience!",
    text: "“I spoke with them to decorate my new home and I am very happy that they did as promised. They made my dream home a reality! I am very satisfied.”",
    rating: 5,
    author: {
      name: "Mark Jones",
      designation: "Businessman",
    },
  },
  {
    id: 3,
    title: "Fantastic service!",
    text: "“Professional service for New Yorker wall installation, flexibility in timelines, & great prices with wonderful results can't be found anywhere else.”",
    rating: 5,
    author: {
      name: "Pitter Hoark",
      designation: "Teacher",
    },
  },
];

function Testimonials() {
  return (
    <div className="section bg-light7 aximo-section-padding5">
      <div className="container">
        <div className="aximo-section-title playfair center">
          <h2>Expressions of our satisfied customers</h2>
        </div>
        <div className="row">
          {testimonialsData.map((testimonial, index) => (
            <FadeInStagger
              className="col-xl-4 col-md-6"
              index={index}
              key={testimonial.id}
            >
              <TestimonialCard testimonial={testimonial} />
            </FadeInStagger>
          ))}
        </div>
        <div className="aximo-bottom-center">
          <Link className="aximo-default-btn green-btn pill" to="/testimonial">
            <span>Explore All Reviews</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
