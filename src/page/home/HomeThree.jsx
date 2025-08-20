import About from "../../components/home-three/about";
import AboutTwo from "../../components/home-three/about-two";
import AutoSlider from "../../components/home-three/auto-slider";
import Contact from "../../components/home-three/contact";
import Counter from "../../components/home-three/counter";
import Faq from "../../components/home-three/faq";
import Hero from "../../components/home-three/hero";
import SeoSteps from "../../components/home-three/seo-steps";
import Services from "../../components/home-three/services";
import Teams from "../../components/home-three/teams";

function HomeThree() {
  return (
    <div className="aximo-all-section bg-light3">
      <Hero />
      <Counter />
      <About />
      <AboutTwo />
      <Services />
      <SeoSteps />
      <AutoSlider />
      <Teams />
      <Faq />
      <Contact />
    </div>
  );
}

export default HomeThree;
