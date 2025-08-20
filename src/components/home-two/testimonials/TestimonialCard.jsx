import StarImg from "../../../assets/images/v2/star.svg";

function TestimonialCard({
  testimonial: { rating, content, author, designation, img },
}) {
  return (
    <div className="aximo-testimonial-wrap aximo-testimonial-wrap2">
      <div className="aximo-testimonial-rating">
        <ul>
          {[...Array(rating)].map(() => (
            <li key={crypto.randomUUID()}>
              <img src={StarImg} alt="StarImg" />
            </li>
          ))}
        </ul>
      </div>
      <div className="aximo-testimonial-data">
        <p>{`"${content}"`}</p>
      </div>
      <div className="aximo-testimonial-author">
        <div className="aximo-testimonial-author-thumb">
          <img src={img} alt="author" />
        </div>
        <div className="aximo-testimonial-author-data">
          <p>
            {author} <span>{designation}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
