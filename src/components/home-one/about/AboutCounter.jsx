import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

function AboutCounter() {
  const [key, setKey] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      setKey((prevKey) => prevKey + 1);
    }
  }, [inView]);

  return (
    <div className="aximo-counter-wrap row mx-1 mx-md-0" ref={ref} key={key}>
      <div className="aximo-counter-data col-lg-12 col-md-6 col-12">
        <h2 className="aximo-counter-number">
          <span className="aximo-counter">
            {inView && <CountUp end={100} duration={3} />}
          </span>
          %
        </h2>
        <p>Success Ratio</p>
      </div>
      <div className="aximo-counter-data col-lg-12 col-md-6 col-12">
        <h2 className="aximo-counter-number">
          <span className="aximo-counter">
            {inView && <CountUp end={92} duration={3} />}
          </span>
          %
        </h2>
        <p>Recurring Clients</p>
      </div>
      <div className="aximo-counter-data col-lg-12 col-md-6 col-12">
        <h2 className="aximo-counter-number">
          <span className="aximo-counter">
            {inView && <CountUp end={5} duration={3} />}
          </span>
          .0
        </h2>
        <p>Ratings On Clutch.co</p>
      </div>
      <div className="aximo-counter-data col-lg-12 col-md-6 col-12 aboutcoutner-bottom ">
        <h2 className="aximo-counter-number">
          <span className="aximo-counter">
            {inView && <CountUp end={1000} duration={3} />}
          </span>
          +
        </h2>
        <p>Projects Delivered</p>
      </div>
    </div>
  );
}

export default AboutCounter;
