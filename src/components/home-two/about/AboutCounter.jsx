import CountUp from "react-countup";

function AboutCounter() {
  return (
    <div className="aximo-counter-wrap2">
      <div className="aximo-counter-data2">
        <h2>
          <span className="aximo-counter">
            <CountUp end={35} duration={5} redraw={true} enableScrollSpy />
          </span>
          +
        </h2>
        <p>Years of experience</p>
      </div>
      <div className="aximo-counter-data2">
        <h2>
          <span className="aximo-counter">
            <CountUp end={84} duration={5} redraw={true} enableScrollSpy />
          </span>
          k
        </h2>
        <p>Active monthly users</p>
      </div>
      <div className="aximo-counter-data2">
        <h2>
          <span className="aximo-counter">
            <CountUp end={20} duration={5} redraw={true} enableScrollSpy />
          </span>
          k
        </h2>
        <p>Project completed</p>
      </div>
    </div>
  );
}

export default AboutCounter;
