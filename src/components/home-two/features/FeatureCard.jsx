function FeatureCard({ feature: { title, description, img } }) {
  return (
    <div className="aximo-iconbox-wrap2" style={{ padding: "0px" }}>
      <div className="aximo-iconbox-icon2">
        <img src={img} alt="Illustrator1Img" />
      </div>
      <div className="aximo-iconbox-data2">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default FeatureCard;
