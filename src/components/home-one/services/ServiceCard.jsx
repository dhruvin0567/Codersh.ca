function ServiceCard({ service: { title, description, icon } }) {
  return (
    <div className="aximo-iconbox-wrap">
      <div className="aximo-iconbox-icon">
        <i className={`${icon}`}></i>
      </div>
      <div className="aximo-iconbox-data">
        <h3>{title}</h3>
        <p className="aximo-p-second">{description}</p>
      </div>
    </div>
  );
}

export default ServiceCard;
