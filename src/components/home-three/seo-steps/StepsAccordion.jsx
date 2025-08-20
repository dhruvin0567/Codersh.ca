function StepsAccordion() {
  return (
    <div className="accordion aximo-accordion-wrap3" id="aximo-accordion">
      <div className="accordion-item">
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseOne"
        >
          Keyword Research and On-Page Optimization
        </button>

        <div
          id="collapseOne"
          className="accordion-collapse collapse show"
          data-bs-parent="#aximo-accordion"
        >
          <div className="accordion-body">
            Start by researching and selecting relevant keywords and phrases
            that your target audience is likely to use.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseTwo"
        >
          Off-Page SEO and Link Building
        </button>

        <div
          id="collapseTwo"
          className="accordion-collapse collapse"
          data-bs-parent="#aximo-accordion"
        >
          <div className="accordion-body">
            If your business has a physical presence, optimize your website for
            local search by claiming.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseThree"
        >
          Regular Monitoring and Content Creation
        </button>

        <div
          id="collapseThree"
          className="accordion-collapse collapse"
          data-bs-parent="#aximo-accordion"
        >
          <div className="accordion-body">
            Regularly monitor your websites performance using tools like Google
            Analytics & Google Search Console.
          </div>
        </div>
      </div>
    </div>
  );
}

export default StepsAccordion;
