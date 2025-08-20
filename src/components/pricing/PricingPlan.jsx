import { useState } from "react";
import StarImg from "../../assets/images/v1/star2.webp";
import FadeInStagger from "../animation/FadeInStagger";
import PricingCard from "./PricingCard";

const pricingPlanData = [
  {
    id: crypto.randomUUID(),
    title: "Web Design Package",
    price: [
      { id: 1, value: 299 },
      {
        id: 2,
        value: 399,
      },
    ],
    description:
      "Web design packages offered a range of services and features to create websites",
    features: [
      "Consultation & Discovery",
      "Responsive Design",
      "E-commerce Integration",
      "Custom Web Design",
      "Testing and Quality Assurance",
    ],
    highlighted: false,
  },
  {
    id: crypto.randomUUID(),
    title: "UX/UI Package",
    price: [
      { id: 1, value: 499 },
      {
        id: 2,
        value: 599,
      },
    ],
    description:
      "UX/UI package offered a set of services aimed at designing user-friendly UI/UX",
    features: [
      "Information Architecture",
      "Wireframing & Prototyping",
      "Usability Testing",
      "Visual Design &",
      "User Interface (UI) Design",
    ],
    highlighted: true,
  },
  {
    id: crypto.randomUUID(),
    title: "Branding Package",
    price: [
      { id: 1, value: 299 },
      {
        id: 2,
        value: 399,
      },
    ],
    description:
      "Branding package typically includes a comprehensive set of brand's identity",
    features: [
      "Brand Guidelines",
      "Stationery & Website Design",
      "Social Media Assets",
      "Signage & Packaging Design",
      "Brand Launch Support",
    ],
    highlighted: false,
  },
];

function PricingPlan() {
  const frequencies = [
    { id: 2, label: "Annually" },
    { id: 1, label: "Monthly" },
  ];

  const [frequency, setFrequency] = useState(frequencies[1]);

  function handleChange(e) {
    if (e.target.checked) {
      setFrequency(frequencies[1]);
    } else {
      setFrequency(frequencies[0]);
    }
  }

  return (
    <div className="section aximo-section-padding3">
      <div className="container">
        <div className="aximo-pricing-title">
          <h2>
            Pick from one of our
            <span className="aximo-title-animation">
              ready packages
              <span className="aximo-title-icon">
                <img src={StarImg} alt="star" />
              </span>
            </span>
          </h2>
        </div>
        <div className="pricing-btn">
          <label>Billed monthly</label>
          <div className="toggle-btn">
            <input
              className="form-check-input btn-toggle price-deck-trigger"
              type="checkbox"
              checked={frequency.id === 1}
              onChange={handleChange}
            />
          </div>
          <label>Billed annually</label>
        </div>
        <div className="row" id="table-price-value">
          {pricingPlanData.map((plan, index) => (
            <FadeInStagger
              className="col-xl-4 col-md-6"
              key={plan.id}
              index={index}
            >
              <PricingCard plan={plan} frequency={frequency} />
            </FadeInStagger>
          ))}
        </div>
      </div>
    </div>
  );
}
export default PricingPlan;
