import { useEffect, useState } from "react";

export default function Preloader() {
  const [showLoader, setShowLoader] = useState(true);
  const [isLoded, setIsLoded] = useState(false);

  useEffect(() => {
    window.addEventListener("load", () => {
      setIsLoded(false);
    });

    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 700);

    return () => clearTimeout(timer);
  });

  return (
    showLoader && (
      <div
        className={`aximo-preloader-wrap ${isLoded === true ? "loaded" : ""}`}
      >
        <div className="aximo-preloader">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    )
  );
}
