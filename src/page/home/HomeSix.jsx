import About from "../../components/home-six/about";
import Blogs from "../../components/home-six/blogs";
import Features from "../../components/home-six/features";
import Hero from "../../components/home-six/hero";
import Projects from "../../components/home-six/projects";
import Services from "../../components/home-six/services";
import Testimonials from "../../components/home-six/testimonials";
import Video from "../../components/home-six/video";

function HomeSix() {
  return (
    <>
      <Hero />
      <Video />
      <Features />
      <About />
      <Services />
      <Projects />
      <Testimonials />
      <Blogs />
    </>
  );
}

export default HomeSix;
