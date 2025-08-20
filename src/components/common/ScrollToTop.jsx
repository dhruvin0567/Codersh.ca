import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      const scrollPosition = scrollTop + windowHeight;
      const scrollPercentage = scrollPosition / documentHeight;

      if (scrollPercentage >= 0.5 && scrollPercentage <= 0.97) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    showTopBtn && (
      <div className="aximo-go-top" onClick={goToTop}>
        <i className="fas fa-arrow-up"></i>
      </div>
    )
  );
}
