import Star2Img from "../../assets/images/v1/icon/star2.webp";
import CheckIcon from "../../assets/images/icon/check.svg";
import {
  FadeInStaggerTwo,
  FadeInStaggerTwoChildren,
} from "../animation/FadeInStaggerTwo";
import SolutionProjectSlider from "./SolutionProjectSlider";
import SolutionPageLogoSlider from "./SolutionPageLogoSlider";
import SolutionTestimonialSlider from "./SolutionTestimonialSlider";
import SolutionDynamicInfo from "./SolutionDynamicInfo";
import projImg1 from "/images/solutions/business-directory/hpn-global.webp";
import projImg2 from "/images/solutions/business-directory/tyrepages.webp";
import projImg3 from "/images/solutions/business-directory/redesign-hub.webp";
import Logo1Img from "/images/solutions/business-directory/tyrepage.webp";
import Logo2Img from "/images/solutions/business-directory/hpn-logo-1.webp";
import Logo3Img from "/images/solutions/business-directory/redesign-hub-logo.webp";

const logosData = [
  { image: Logo1Img, alt: "Tyrepage Logo" },
  { image: Logo2Img, alt: "HPN Logo 1" },
  { image: Logo3Img, alt: "Redesign Hub Logo" },
  { image: Logo1Img, alt: "Tyrepage Logo" },
  { image: Logo2Img, alt: "HPN Logo 1" },
  { image: Logo3Img, alt: "Redesign Hub Logo" },
];

const featuresList = [
  { text: "Advanced Search and Filter Functionality", icon: CheckIcon },
  { text: "User-Friendly Business Listings", icon: CheckIcon },
  { text: "Mobile and SEO-Optimized Design", icon: CheckIcon },
  { text: "Reviews and Ratings Integration", icon: CheckIcon },
  { text: "Easy Admin Panel for Updates", icon: CheckIcon },
  {
    text: "Monetization Features (e.g., paid listings, advertisements)",
    icon: CheckIcon,
  },
];

const slidesData = [
  { image: projImg1, alt: "HPN Global Front Page" },
  { image: projImg2, alt: "Tyrepages Front Page" },
  { image: projImg3, alt: "Redesign Hub Front Page" },
  { image: projImg1, alt: "HPN Global Front Page" },
  { image: projImg2, alt: "Tyrepages Front Page" },
  { image: projImg3, alt: "Redesign Hub Front Page" },
];

function Bussinessdirectorydata() {
  return (
    <>
      <FadeInStaggerTwo>
        <FadeInStaggerTwoChildren>
          <SolutionPageLogoSlider
            logos={logosData}
            title="Partnering with Leading Bussiness Leaders Worldwide."
          />
        </FadeInStaggerTwoChildren>
        <FadeInStaggerTwoChildren>
          <SolutionProjectSlider slides={slidesData} />
        </FadeInStaggerTwoChildren>
      </FadeInStaggerTwo>

      <SolutionDynamicInfo
        title="Professional Business"
        subtitle=" Directory Website Solutions"
        description=" In today’s fast-paced digital world, having a professional and user-friendly business directory website
                            is essential for standing out and thriving. Whether you’re looking to create a local business directory,
                            a niche industry listing, or a comprehensive nationwide platform, we’re here to make it happen. With our
                            experience in building successful directory websites, we design platforms that are not only visually
                            appealing but also highly functional and scalable. Our solutions help you connect businesses with their
                            target audience, drive user engagement, and generate revenue through smart monetization options. Partner
                            with us to bring your vision to life and create a directory website that truly delivers results."
        ctaText="Get In Touch"
        ctaLink="/contact-us"
        iconImage={Star2Img}
        features={featuresList}
      />

      <SolutionTestimonialSlider />
    </>
  );
}

export default Bussinessdirectorydata;
