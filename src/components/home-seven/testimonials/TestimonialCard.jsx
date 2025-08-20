import StarImg from "../../../assets/images/v7/star1.webp";

function TestimonialCard({
  testimonial: { text, rating, author, designation },
}) {
  return (
    <div className="aximo-testimonial-slider-wrap2">
      <div className="aximo-testimonial-slider-rating">
        <ul>
          {[...Array(rating)].map(() => (
            <li key={crypto.randomUUID()}>
              <img src={StarImg} alt="star" />
            </li>
          ))}
        </ul>
      </div>
      <div className="aximo-testimonial-slider-description">
        <p>{`"${text}"`}</p>
      </div>
      <div className="aximo-testimonial-slider-author-data">
        <span>{author} </span>
        <p>{designation}</p>
      </div>
    </div>
  );
}

export default TestimonialCard;
