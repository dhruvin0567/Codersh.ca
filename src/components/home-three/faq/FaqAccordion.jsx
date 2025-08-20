function FaqAccordion() {
  return (
    <div
      className="accordion aximo-accordion-wrap4 col-12"
      id="aximo-accordion"
    >
      <div className="accordion-item">
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#one"
        >
          What is SEO?
        </button>

        <div
          id="one"
          className="accordion-collapse collapse show"
          data-bs-parent="#aximo-accordion"
        >
          <div className="accordion-body">
            SEO, or Search Engine Optimization, is a set of strategies and
            techniques aimed at improving a website's visibility in search
            engine results pages (SERPs) to increase organic (non-paid) traffic.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#two"
        >
          Why is SEO important for my website?
        </button>

        <div
          id="two"
          className="accordion-collapse collapse"
          data-bs-parent="#aximo-accordion"
        >
          <div className="accordion-body">
            SEO is essential because it helps your website rank higher in search
            results, making it more visible to potential visitors. This can lead
            to increased organic traffic, better brand exposure, and potential
            business growth.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#three"
        >
          How long does it take to see results from SEO?
        </button>

        <div
          id="three"
          className="accordion-collapse collapse"
          data-bs-parent="#aximo-accordion"
        >
          <div className="accordion-body">
            SEO is an ongoing process, and the time it takes to see results can
            vary based on factors like the competitiveness of your industry and
            the specific strategies you use. Generally, it can take several
            months to see significant improvements.
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
          How can I improve my website's load speed for SEO?
        </button>

        <div
          id="four"
          className="accordion-collapse collapse"
          data-bs-parent="#aximo-accordion"
        >
          <div className="accordion-body">
            You can enhance website speed by optimizing images, using content
            delivery networks (CDNs), reducing unnecessary plugins, and enabling
            browser caching, among other techniques.
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
          How can I track the success of my SEO efforts?
        </button>

        <div
          id="five"
          className="accordion-collapse collapse"
          data-bs-parent="#aximo-accordion"
        >
          <div className="accordion-body">
            You can track SEO success by using tools like Google Analytics and
            Google Search Console. Monitor key metrics, such as organic traffic,
            keyword rankings, click-through rates, and conversion rates.
          </div>
        </div>
      </div>
    </div>
  );
}

export default FaqAccordion;
