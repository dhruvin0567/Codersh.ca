import About from "../../components/home-two/about";
import BrandLogo from "../../components/home-two/brand-logo";
import CallToAction from "../../components/home-two/call-to-action";
import Faq from "../../components/home-two/faq";
import Features from "../../components/home-two/features";
import Hero from "../../components/home-two/hero";
import Pricing from "../../components/home-two/pricing";
import Services from "../../components/home-two/services";
import Testimonials from "../../components/home-two/testimonials";
import Video from "../../components/home-two/video";

function HomeTwo() {
  return (
    <>
      <div className="aximo-all-section bg-light2">
        <Hero />
        <BrandLogo />
        <Features />
        <About />
        <Services />
        <Video />
        <Pricing />
        <Testimonials />
        <Faq />
        <CallToAction />
      </div>
    </>
  );
}

export default HomeTwo;
