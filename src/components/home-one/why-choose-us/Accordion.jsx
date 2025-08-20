import {
  FadeInStaggerTwo,
  FadeInStaggerTwoChildren,
} from "../../animation/FadeInStaggerTwo";

function Accordion() {
  return (
    <FadeInStaggerTwo
      className="accordion aximo-accordion-wrap"
      id="aximo-accordion"
    >
      <FadeInStaggerTwoChildren className="accordion-item">
        <h3 className="accordion-header">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
          >
            01/ Design & Layout
          </button>
        </h3>
        <div
          id="collapseOne"
          className="accordion-collapse collapse show"
          data-bs-parent="#aximo-accordion"
        >
          <div className="accordion-body">
            Our design process begins with understanding your brand identity and
            target audience.
          </div>
        </div>
      </FadeInStaggerTwoChildren>

      <FadeInStaggerTwoChildren className="accordion-item">
        <h3 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
          >
            02/ Development
          </button>
        </h3>
        <div
          id="collapseTwo"
          className="accordion-collapse collapse"
          data-bs-parent="#aximo-accordion"
        >
          <div className="accordion-body">
            We transform designs into fully functional Shopify stores using
            clean, efficient code.
          </div>
        </div>
      </FadeInStaggerTwoChildren>
      <FadeInStaggerTwoChildren className="accordion-item">
        <h3 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
          >
            03/ Testing & Review
          </button>
        </h3>
        <div
          id="collapseThree"
          className="accordion-collapse collapse"
          data-bs-parent="#aximo-accordion"
        >
          <div className="accordion-body">
            Before launch, we conduct thorough testing across multiple devices
            and browsers to ensure everything works perfectly.
          </div>
        </div>
      </FadeInStaggerTwoChildren>
      <FadeInStaggerTwoChildren className="accordion-item">
        <h3 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseFour"
          >
            04/ Maintenance & Updates
          </button>
        </h3>
        <div
          id="collapseFour"
          className="accordion-collapse collapse"
          data-bs-parent="#aximo-accordion"
        >
          <div className="accordion-body">
            We provide ongoing Support, Updates, and implementing new Features
            as per Requirements.
          </div>
        </div>
      </FadeInStaggerTwoChildren>
    </FadeInStaggerTwo>
  );
}

export default Accordion;
