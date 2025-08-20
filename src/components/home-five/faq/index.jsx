import FadeInUp from "../../animation/FadeInUp";
import FaqAccordion from "./FaqAccordion";

function Faq() {
  return (
    <div className="section aximo-section-padding3">
      <div className="container">
        <div className="aximo-section-title center libre-font">
          <h2>Get answers to all your questions</h2>
        </div>
        <div className="accordion aximo-accordion-wrap5" id="aximo-accordion">
          <FadeInUp>
            <FaqAccordion />
          </FadeInUp>
        </div>
      </div>
    </div>
  );
}

export default Faq;
