import { motion } from "framer-motion";
import ThumbImg from "../../../assets/images/v2/thumb.webp";
import AboutCounter from "./AboutCounter";

function About() {
  return (
    <div className="aximo-about-section bg-orange extra-side-margin">
      <div id="aximo-counter"></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <motion.div
              initial={{
                opacity: 0,
                rotate: 135,
              }}
              whileInView={{
                opacity: 1,

                rotate: -5,

                transition: {
                  duration: 1,
                  type: "spring",
                  stiffness: 70,
                },
              }}
              className="aximo-thumb"
              id="rotatetwo"
            >
              <img src={ThumbImg} alt="ThumbImg" />
            </motion.div>
          </div>
          <div className="col-lg-7">
            <div className="aximo-default-content clash-grotesk">
              <h2>We help empower visionary founders</h2>
              <p>
                We provide comprehensive support, guidance to early stage
                startups & entrepreneurs. Our mission is to help transform
                breakthrough ideas into successful and sustainable businesses.
              </p>
            </div>
            <AboutCounter />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
