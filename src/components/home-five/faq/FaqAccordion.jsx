function FaqAccordion() {
  return (
    <>
      <div className="accordion-item">
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseOne"
        >
          What is a digital marketing agency?
        </button>

        <div
          id="collapseOne"
          className="accordion-collapse collapse show"
          data-bs-parent="#aximo-accordion"
        >
          <div className="accordion-body">
            A digital marketing agency is a professional organization that
            specializes in providing online marketing services to businesses and
            individuals to promote their products..
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseTwo"
        >
          Why do I need a digital marketing agency?
        </button>

        <div
          id="collapseTwo"
          className="accordion-collapse collapse"
          data-bs-parent="#aximo-accordion"
        >
          <div className="accordion-body">
            Digital marketing agencies have expertise in various online channels
            and strategies, helping businesses reach their target audience,
            increase online visibility.
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
          What is the cost of digital marketing services?
        </button>

        <div
          id="collapseThree"
          className="accordion-collapse collapse"
          data-bs-parent="#aximo-accordion"
        >
          <div className="accordion-body">
            The cost of digital marketing services varies widely depending on
            the scope of work the our pricing structure. It's essential to
            discuss your budget and expectations.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#four"
        >
          What is our work process?
        </button>

        <div
          id="four"
          className="accordion-collapse collapse"
          data-bs-parent="#aximo-accordion"
        >
          <div className="accordion-body">
            Our work process will typically involve several key steps to ensure
            the successful planning, execution, and management of digital
            marketing campaigns.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#five"
        >
          How to increase social media presence?
        </button>

        <div
          id="five"
          className="accordion-collapse collapse"
          data-bs-parent="#aximo-accordion"
        >
          <div className="accordion-body">
            Increasing your social media presence requires a strategic approach
            and consistent effort. Some effective strategies to help you boost
            your social media presence.
          </div>
        </div>
      </div>
    </>
  );
}

export default FaqAccordion;
