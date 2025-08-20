import {
  FadeInStaggerTwo,
  FadeInStaggerTwoChildren,
} from "../../animation/FadeInStaggerTwo";

function NumberBox() {
  return (
    <div className="aximo-numberbox-section">
      <div className="container">
        <FadeInStaggerTwo className="row">
          <FadeInStaggerTwoChildren className="col-xl-4 col-lg-6">
            <div className="aximo-numberbox-wrap">
              <div className="aximo-numberbox-number">1</div>
              <div className="aximo-numberbox-data">
                <p>
                  <span>Initial Contact</span>
                </p>
                <p>
                  Contact us & we’ll listen carefully to understand your unique
                  needs & goals.
                </p>
              </div>
            </div>
          </FadeInStaggerTwoChildren>
          <FadeInStaggerTwoChildren className="col-xl-4 col-lg-6">
            <div className="aximo-numberbox-wrap">
              <div className="aximo-numberbox-number">2</div>
              <div className="aximo-numberbox-data">
                <p>
                  <span>Solutions & Collaboration</span>
                </p>
                <p>
                  We become your partners in progress, collaborating to
                  implement solutions.
                </p>
              </div>
            </div>
          </FadeInStaggerTwoChildren>
          <FadeInStaggerTwoChildren className="col-xl-4 col-lg-6">
            <div className="aximo-numberbox-wrap">
              <div className="aximo-numberbox-number">3</div>
              <div className="aximo-numberbox-data">
                <p>
                  <span>Monitoring & Results</span>
                </p>
                <p>
                  We continuously monitoring and leads to your business
                  achieving its goals.
                </p>
              </div>
            </div>
          </FadeInStaggerTwoChildren>
        </FadeInStaggerTwo>
      </div>
    </div>
  );
}

export default NumberBox;
