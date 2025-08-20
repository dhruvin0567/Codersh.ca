import CountUp from "react-countup";
import {
  FadeInStaggerTwo,
  FadeInStaggerTwoChildren,
} from "../../animation/FadeInStaggerTwo";

function Counter() {
  return (
    <div className="aximo-counter-section dark-bg">
      <div className="container">
        <div className="aximo-counter-title">
          <p>Our results speak for our ability to succeed</p>
        </div>

        <FadeInStaggerTwo className="aximo-counter-wrap3">
          <FadeInStaggerTwoChildren className="aximo-counter-data3">
            <h2>
              <em>.</em>
              <span className="aximo-counter">
                <CountUp end={13} duration={3} redraw={true} enableScrollSpy />
              </span>
              +
            </h2>
            <p>Years of experience</p>
          </FadeInStaggerTwoChildren>
          <FadeInStaggerTwoChildren className="aximo-counter-data3">
            <h2>
              <em>.</em>
              <span className="aximo-counter">
                <CountUp end={85} duration={3} redraw={true} enableScrollSpy />
              </span>
              %
            </h2>
            <p>Average Conversion Rate</p>
          </FadeInStaggerTwoChildren>
          <FadeInStaggerTwoChildren className="aximo-counter-data3">
            <h2>
              <em>.</em>
              <span className="aximo-counter">
                <CountUp end={60} duration={3} redraw={true} enableScrollSpy />
              </span>
              m
            </h2>
            <p>Traffic Generated</p>
          </FadeInStaggerTwoChildren>
          <FadeInStaggerTwoChildren className="aximo-counter-data3">
            <h2>
              <em>.</em>
              <span className="aximo-counter">
                <CountUp end={100} duration={3} redraw={true} enableScrollSpy />
              </span>
              %
            </h2>
            <p>Client satisfaction score</p>
          </FadeInStaggerTwoChildren>
        </FadeInStaggerTwo>
      </div>
    </div>
  );
}

export default Counter;
