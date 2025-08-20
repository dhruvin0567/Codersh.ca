import Blogs from "../../components/home-four/blogs";
import BrandLogo from "../../components/home-four/brand-logo";
import Hero from "../../components/home-four/hero";
import Instagrams from "../../components/home-four/instagrams";
import MissionVision from "../../components/home-four/mission-vission";
import NumberBox from "../../components/home-four/number-box";
import Projects from "../../components/home-four/projects";
import Services from "../../components/home-four/services";
import Testimonials from "../../components/home-four/testimonials";
import WhyChooseUs from "../../components/home-four/why-choose-us";

function HomeFour() {
  return (
    <div className="aximo-all-section bg-light4">
      <Hero />
      <MissionVision />
      <BrandLogo />
      <Services />
      <WhyChooseUs />
      <NumberBox />
      <Projects />
      <Testimonials />
      <Blogs />
      <Instagrams />
    </div>
  );
}

export default HomeFour;
