import { useEffect, useRef } from "react";
import Star3Img from "../../../assets/images/v1/star3.webp";

const sliderItems = Array(7).fill({
  title: "Let's create new experiences",
  img: Star3Img,
});

function AutoSlider() {
  const trackRef = useRef(null);
  const requestRef = useRef();
  const speed = 2;

  useEffect(() => {
    const track = trackRef.current;
    let position = 0;

    const animate = () => {
      position -= speed;
      if (position <= -track.scrollWidth / 2) {
        position = 0; // Reset to loop seamlessly
      }
      track.style.transform = `translateX(${position}px)`;
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  // Rotate animation keyframes
  const rotateAnimation = {
    "@keyframes rotate": {
      "0%": {
        transform: "rotate(0deg)",
      },
      "50%": {
        transform: "rotate(180deg)",
      },
      "100%": {
        transform: "rotate(360deg)",
      },
    },
  };

  // Styles
  const styles = {
    container: {
      padding: "20px 0",
      overflow: "hidden",
      backgroundColor: "var(--dark-bg)",
    },
    track: {
      display: "flex",
      width: "max-content",
      willChange: "transform",
      transitionTimingFunction: "linear",
      position: "relative",
    },
    slide: {
      display: "flex",
      margin: "-1px",
      alignItems: "center",
      width: "auto",
      position: "relative",
      overflow: "hidden",
    },
    title: {
      fontSize: "35px",
      whiteSpace: "nowrap",
      padding: "0 24px",
      textTransform: "uppercase",
      color: "var(--accent-color)",
      margin: 0,
    },
    image: {
      animation: "rotate 7s infinite linear",
      WebkitAnimation: "rotate 7s infinite linear",
      MozAnimation: "rotate 7s infinite linear",
      OAnimation: "rotate 7s infinite linear",
    },
    // Media query for mobile
    "@media (max-width: 767px)": {
      title: {
        fontSize: "28px",
      },
    },
  };

  return (
    <div style={styles.container}>
      {/* Inject the rotate animation */}
      <style>
        {`
          @keyframes rotate {
            0% { transform: rotate(0deg); }
            50% { transform: rotate(180deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>

      <div ref={trackRef} style={styles.track}>
        {/* Original Slides */}
        {sliderItems.map((item, index) => (
          <div key={`slider-${index}`} style={styles.slide}>
            <h3 style={styles.title}>{item.title}</h3>
            <img
              src={item.img}
              alt={item.title}
              loading="lazy"
              style={styles.image}
            />
          </div>
        ))}
        {/* Duplicate Slides (for seamless looping) */}
        {sliderItems.map((item, index) => (
          <div key={`slider-duplicate-${index}`} style={styles.slide}>
            <h3 style={styles.title}>{item.title}</h3>
            <img
              src={item.img}
              alt={item.title}
              loading="lazy"
              style={styles.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default AutoSlider;
