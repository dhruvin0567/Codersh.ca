import FadeInUp from "../../animation/FadeInUp";
import FaqAccordion from "./FaqAccordion";

function Faq() {
  return (
    <div className="section aximo-section-padding6">
      <div className="container">
        <div className="aximo-section-title center familjen-grotesk">
          <h2>Increase revenue with custom SEO</h2>
        </div>
        <div className="row">
          <FadeInUp>
            <FaqAccordion />
          </FadeInUp>
        </div>
      </div>
    </div>
  );
}

export default Faq;
