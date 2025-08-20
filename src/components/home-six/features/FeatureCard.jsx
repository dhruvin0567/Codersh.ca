function FeatureCard({ feature: { title, description, img } }) {
  return (
    <div className="aximo-iconbox-wrap7">
      <div className="aximo-iconbox-icon7">
        <img src={img} alt={title} />
      </div>
      <div className="aximo-iconbox-data7">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default FeatureCard;
