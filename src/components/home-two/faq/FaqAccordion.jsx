import {
  FadeInStaggerTwo,
  FadeInStaggerTwoChildren,
} from "../../animation/FadeInStaggerTwo";

function FaqAccordion() {
  return (
    <FadeInStaggerTwo className="row">
      <FadeInStaggerTwoChildren className="col-lg-6">
        <div
          className="accordion aximo-accordion-wrap2"
          id="aximo-accordion-col1"
        >
          <div className="accordion-item ">
            <h3 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
              >
                What is vision for the future?
              </button>
            </h3>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#aximo-accordion-col1"
            >
              <div className="accordion-body">
                Our vision is describe your long-term vision or goals. Were
                committed to explain how your company plans.
              </div>
            </div>
          </div>
          <div className="accordion-item ">
            <h3 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
              >
                Do you offer free resources?
              </button>
            </h3>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#aximo-accordion-col1"
            >
              <div className="accordion-body">
                Yes, we offer a range of free resources. Check out our resources
                page for more information.
              </div>
            </div>
          </div>
          <div className="accordion-item ">
            <h3 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
              >
                Can help to find investors?
              </button>
            </h3>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#aximo-accordion-col1"
            >
              <div className="accordion-body">
                Yes, we have a strong network of investors and can facilitate
                introductions. Our expertise in fundraising.
              </div>
            </div>
          </div>
        </div>
      </FadeInStaggerTwoChildren>
      <FadeInStaggerTwoChildren className="col-lg-6">
        <div
          className="accordion aximo-accordion-wrap2"
          id="aximo-accordion-col2"
        >
          <div className="accordion-item ">
            <h3 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
              >
                What is vision for the future?
              </button>
            </h3>
            <div
              id="collapseFour"
              className="accordion-collapse collapse"
              data-bs-parent="#aximo-accordion-col2"
            >
              <div className="accordion-body">
                Our vision is describe your long-term vision or goals. Were
                committed to explain how your company plans.
              </div>
            </div>
          </div>
          <div className="accordion-item ">
            <h3 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFive"
              >
                Do you offer free resources?
              </button>
            </h3>
            <div
              id="collapseFive"
              className="accordion-collapse collapse"
              data-bs-parent="#aximo-accordion-col2"
            >
              <div className="accordion-body">
                Yes, we offer a range of free resources. Check out our resources
                page for more information.
              </div>
            </div>
          </div>
          <div className="accordion-item ">
            <h3 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseSix"
              >
                Can help to find investors?
              </button>
            </h3>
            <div
              id="collapseSix"
              className="accordion-collapse collapse"
              data-bs-parent="#aximo-accordion-col2"
            >
              <div className="accordion-body">
                Yes, we have a strong network of investors and can facilitate
                introductions. Our expertise in fundraising.
              </div>
            </div>
          </div>
        </div>
      </FadeInStaggerTwoChildren>
    </FadeInStaggerTwo>
  );
}

export default FaqAccordion;
