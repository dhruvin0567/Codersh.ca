import Star2Img from "../../assets/images/v1/star2.webp";
import QuestionImg from "../../assets/images/icon/question.svg";

const faqData = {
  faq1: [
    {
      id: crypto.randomUUID(),
      title: "What Shopify services you offer?",
      text: "We provide Shopify setup, theme customization, app integrations, and store optimization for a seamless shopping experience.",
    },
    {
      id: crypto.randomUUID(),
      title: "Can you customize themes?",
      text: "Yes, we can tailor Shopify themes to fit your brand identity and create a unique store design.",
    },
    {
      id: crypto.randomUUID(),
      title: "Do you optimize store performance?",
      text: "Absolutely! We focus on faster loading times, smooth navigation, and improved user experience.",
    },
  ],
  faq2: [
    {
      id: crypto.randomUUID(),
      title: "What payment gateways do you integrate?",
      text: "We integrate popular gateways like PayPal, Stripe, and Shopify Payments for secure transactions.",
    },
    {
      id: crypto.randomUUID(),
      title: "How much do Shopify services cost?",
      text: "Pricing depends on your needs. We’ll provide a custom quote after discussing your project.",
    },
    {
      id: crypto.randomUUID(),
      title: "Can you share examples of Shopify stores?",
      text: "Yes, we have a portfolio of Shopify projects that showcase our work.",
    },
  ],
};

function TwoColumnFaq() {
  return (
    <div className="section aximo-section-padding">
      <div className="container">
        <div className="aximo-section-title center">
          <h2>
            These FAQs help
            <span className="aximo-title-animation">
              clients learn about us
              <span className="aximo-title-icon">
                <img src={Star2Img} alt="Star" />
              </span>
            </span>
          </h2>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="aximo-accordion-normal-wrap responsive-margin">
              {faqData.faq1.map((faq) => (
                <div key={faq.id} className="aximo-accordion-normal-item">
                  <div className="aximo-accordion-normal-icon">
                    <img src={QuestionImg} alt="QuestionImg" />
                  </div>
                  <div className="aximo-accordion-normal-data">
                    <h3>{faq.title}</h3>
                    <p>{faq.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="aximo-accordion-normal-wrap">
              {faqData.faq2.map((faq) => (
                <div key={faq.id} className="aximo-accordion-normal-item">
                  <div className="aximo-accordion-normal-icon">
                    <img src={QuestionImg} alt="QuestionImg" />
                  </div>
                  <div className="aximo-accordion-normal-data">
                    <h3>{faq.title}</h3>
                    <p>{faq.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TwoColumnFaq;
