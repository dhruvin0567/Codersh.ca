import { Link } from "react-router-dom";
import ShapeImg from "../../../assets/images/v1/shape1.webp";
import StarImg from "../../../assets/images/v1/star2.webp";
import User1Img from "/images/clients/client-1.png";
import User2Img from "/images/clients/client-2.png";
import User3Img from "/images/clients/client-3.png";
import { FadeInStaggerTwo, FadeInStaggerTwoChildren } from "../../animation/FadeInStaggerTwo";
function HeroContent() {
	return (
		<div className="aximo-hero-content">
			<FadeInStaggerTwo>
				<FadeInStaggerTwoChildren>
					{/* <h1 style={{ fontSize: '57px' }}> */}
					<h1 className="light-text hero-section-title">
						Trusted Ecommerce
						<span className="aximo-title-animation">
							<img src={StarImg} alt="StarImg" style={{ top: '5px', right: "-80px" }} />

							& Shopify Agency
						</span>{" "}
					</h1>
					<p>
						We're a leading Shopify & Shopify Plus agency who design and develop strategic ecommerce websites, also grown from humble roots and become a versatile digital marketing partner for our clients.
					</p>
				</FadeInStaggerTwoChildren>
				{/* <FadeInStaggerTwoChildren>
					<p>
						We're a leading Shopify & Shopify Plus agency who design and develop strategic ecommerce websites, also grown from humble roots and become a versatile digital marketing partner for our clients.
					</p>
				</FadeInStaggerTwoChildren> */}
				<FadeInStaggerTwoChildren>
					<div className="aximo-hero-user-wrap">
						<div className="aximo-hero-user-thumb">
							<div className="aximo-hero-user-thumb-item">
								<img src={User1Img} alt="User1Img" />
							</div>
							<div className="aximo-hero-user-thumb-item">
								<img src={User3Img} alt="User3Img" />
							</div>
							<div className="aximo-hero-user-thumb-item">
								<img src={User2Img} alt="User2Img" />
							</div>
						</div>
						<div className="aximo-hero-user-data">
							<p>Trusted by 1000+ Clients</p>
						</div>
					</div>
				</FadeInStaggerTwoChildren>
				<FadeInStaggerTwoChildren>
					<Link className="aximo-call-btn" to="/contact-us">
						Let's Talk About Your Project <i className="icon-call"></i>
					</Link>
					<div className="aximo-hero-shape">
						<img src={ShapeImg} alt="ShapeImg" />
					</div>
				</FadeInStaggerTwoChildren>
			</FadeInStaggerTwo>
		</div>
	);
}

export default HeroContent;
