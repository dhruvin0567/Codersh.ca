function ServiceCard({ service: { title, description, iconImg } }) {
  const hasDescription = description && description.trim() !== "";
  return (
    <div
      className={
        `aximo-iconbox-wrap4` + (hasDescription ? " servcies-weoffer-box" : "")
      }
    >
      <div className="aximo-iconbox-icon4">
        <img src={iconImg} alt={title} />
      </div>
      <div className="aximo-iconbox-data4">
        {hasDescription && <p>{description}</p>}
      </div>
    </div>
  );
}

export default ServiceCard;
