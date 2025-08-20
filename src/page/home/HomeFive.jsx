import WaveShape from "../../components/home-five/WaveShape";
import About from "../../components/home-five/about";
import Counter from "../../components/home-five/counter";
import Cta from "../../components/home-five/cta";
import Faq from "../../components/home-five/faq";
import Features from "../../components/home-five/features";
import Hero from "../../components/home-five/hero";
import Projects from "../../components/home-five/projects";
import Services from "../../components/home-five/services";
import Testimonials from "../../components/home-five/testimonials";
import Video from "../../components/home-five/video";

function HomeFive() {
  return (
    <div className="aximo-all-section bg-light6">
      <Hero />
      <Video />
      <Features />
      <WaveShape />
      <About />
      <Counter />
      <Services />
      <Projects />
      <WaveShape />
      <Faq />
      <WaveShape />
      <Testimonials />
      <Cta />
    </div>
  );
}

export default HomeFive;
