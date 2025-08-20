import Star2Img from "../../../assets/images/v1/star2.webp";

function Content() {
  return (
    <div className="aximo-default-content">
      <h2>
        <span className="aximo-title-animation">
          Our high-quality
          <span className="aximo-title-icon">
            <img src={Star2Img} alt="Star2Img" />
          </span>
        </span>{" "}
        working processes
      </h2>
      <p>
        We specialize in creating custom Shopify stores that combine stunning
        design with powerful functionality. Our team delivers end-to-end
        solutions from initial concept to final launch, ensuring your e-commerce
        vision comes to life.
      </p>
      <p>
        With years of experience in e-commerce development, we understand what
        drives online sales and customer engagement.
      </p>
    </div>
  );
}

export default Content;
