import StarImg from "../../assets/images/v1/star2.webp";
import NotifyForm from "./NotifyForm";

function CountDownRenderer({ days, hours, minutes, seconds }) {
  return (
    <div className="section aximo-section-padding">
      <div className="container">
        <div className="aximo-coming-title">
          <h2>
            Exciting things are
            <span className="aximo-title-animation">
              coming soon!
              <span className="aximo-title-icon">
                <img src={StarImg} alt="star" />
              </span>
            </span>
          </h2>
          <p>
            Get notified when we launch something new for you! Enter your email
            address here and stay tuned with us.
          </p>
        </div>
        <div className="aximo-countdown-wrap">
          <div className="aximo-countdown-item">
            <div className="countdown-days">
              <div className="number">{days}</div>
            </div>
            <p>Days</p>
          </div>
          <div className="aximo-countdown-item">
            <div className="countdown-hours">
              <div className="number">{hours}</div>
            </div>
            <p>Hours</p>
          </div>
          <div className="aximo-countdown-item">
            <div className="countdown-minutes">
              <div className="number">{minutes}</div>
            </div>
            <p>Minutes</p>
          </div>
          <div className="aximo-countdown-item">
            <div className="countdown-seconds">
              <div className="number">{seconds}</div>
            </div>
            <p>Seconds</p>
          </div>
        </div>
        <NotifyForm />
      </div>
    </div>
  );
}

export default CountDownRenderer;
