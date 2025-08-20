function TestimonialCard({
  testimonial: { rating, title, description, author, designation, img },
}) {
  return (
    <div className="aximo-testimonial-wrap">
      <div className="aximo-testimonial-rating">
        <ul>
          {[...Array(rating)].map(() => (
            <li key={crypto.randomUUID()}>
              <i className="icon-star"></i>
            </li>
          ))}
        </ul>
      </div>
      <div className="aximo-testimonial-data">
        <h3>{title}</h3>
        <p className="aximo-p-second">{description}</p>
      </div>
      <div className="aximo-testimonial-author">
        <div className="aximo-testimonial-author-thumb">
          <img src={img} alt={title} />
        </div>
        <div className="aximo-testimonial-author-data">
          <h5>
            {author}
            <br />
            <span
              style={{
                fontWeight: "400",
                fontFamily: "inter",
                fontSize: "18px",
              }}
            >
              {designation}
            </span>
          </h5>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
