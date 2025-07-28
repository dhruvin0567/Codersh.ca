import Star2Img from "../../assets/images/v1/star2.webp";
import { FadeInStaggerTwo, FadeInStaggerTwoChildren } from "../animation/FadeInStaggerTwo";

const faqItems = [
	{
		id: "One",
		question: "Can you help increase my store’s conversion rate?",
		answer: "Yes! We enhance product pages, streamline checkout, and optimize calls-to-action to turn visitors into buyers.",
		open: true,
	},
	{
		id: "Two",
		question: "Will optimization affect my store’s design?",
		answer: "No, we refine performance without compromising your store’s design. If needed, we make subtle UI improvements for a better user experience.",
	},
	{
		id: "Three",
		question: "How long does Shopify Optimization take?",
		answer: "Depending on the level of optimization needed, it usually takes between 5 to 10 days.",
	},
	{
		id: "Four",
		question: "Do you provide ongoing support after optimization?",
		answer: "Yes! We offer continuous monitoring and updates to ensure long-term store performance.",
	},
];

function FaqAccordion() {
	return (
		<div className="section aximo-section-padding3">
			<div className="container">
				<div className="aximo-section-title center">
					<h2>
						<span className="aximo-title-animation">
							These FAQs help
							<span className="aximo-title-icon">
								<img src={Star2Img} alt="Star" loading="lazy" />
							</span>
						</span>
						<br />
						clients learn about us
					</h2>
				</div>

				<FadeInStaggerTwo className="accordion aximo-accordion-wrap" id="aximo-accordion">
					{faqItems.map(({ id, question, answer, open }) => (
						<FadeInStaggerTwoChildren key={id} className="accordion-item">
							<h3 className="accordion-header">
								<button
									className={`accordion-button ${!open ? "collapsed" : ""}`}
									type="button"
									data-bs-toggle="collapse"
									data-bs-target={`#collapse${id}`}
								>
									{question}
								</button>
							</h3>
							<div
								id={`collapse${id}`}
								className={`accordion-collapse collapse ${open ? "show" : ""}`}
								data-bs-parent="#aximo-accordion"
							>
								<div className="accordion-body">{answer}</div>
							</div>
						</FadeInStaggerTwoChildren>
					))}
				</FadeInStaggerTwo>
			</div>
		</div>
	);
}

export default FaqAccordion;
