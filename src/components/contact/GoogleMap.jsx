function GoogleMap() {
  return (
    <div className="section">
      <div className="container">
        <div className="aximo-map-wrap">
          <div id="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.654129433055!2d72.5106517747717!3d23.073138514440288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e81f21c5da795%3A0x8c70d1b4999d0473!2sCodersh%20Web%20Services!5e0!3m2!1sen!2sin!4v1741601065176!5m2!1sen!2sin"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ borderRadius: "25px", height: "580px", width: "100%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GoogleMap;
