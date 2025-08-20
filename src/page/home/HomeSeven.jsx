import AboutOne from "../../components/home-seven/about-one";
import AboutTwo from "../../components/home-seven/about-two";
import BrandLogo from "../../components/home-seven/brand-logo";
import Hero from "../../components/home-seven/hero";
import Projects from "../../components/home-seven/projects";
import Services from "../../components/home-seven/services";
import Teams from "../../components/home-seven/teams";
import Testimonials from "../../components/home-seven/testimonials";
import Video from "../../components/home-seven/video";

function HomeSeven() {
  return (
    <div className="bg-light8">
      <Hero />
      <BrandLogo />
      <AboutOne />
      <AboutTwo />
      <Video />
      <Services />
      <Projects />
      <Teams />
      <Testimonials />
    </div>
  );
}

export default HomeSeven;
