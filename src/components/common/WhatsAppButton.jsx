import { useEffect, useMemo, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import "../../assets/css/WhatsAppButton.css";

const WhatsAppButton = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const phoneNumber = "+919998134094";
  const message = "Hello, I want to inquire about your services.";

  useEffect(() => {
    if (typeof navigator !== "undefined") {
      setIsMobile(/iPhone|Android|iPad/i.test(navigator.userAgent));
    }

    const hideButton = () => setIsVisible(false);

    const resetHideTimeout = () => {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(hideButton, 3000);
      setIsVisible(true);
    };

    let timeoutId = setTimeout(hideButton, 3000);

    window.addEventListener("scroll", resetHideTimeout);
    window.addEventListener("mousemove", resetHideTimeout);
    window.addEventListener("keydown", resetHideTimeout);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("scroll", resetHideTimeout);
      window.removeEventListener("mousemove", resetHideTimeout);
      window.removeEventListener("keydown", resetHideTimeout);
    };
  }, []);

  const baseURL = useMemo(() => {
    const encodedMsg = encodeURIComponent(message);
    return isMobile
      ? `https://wa.me/${phoneNumber}?text=${encodedMsg}`
      : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMsg}`;
  }, [isMobile, phoneNumber, message]);

  return (
    <a
      href={baseURL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className={`whatsapp-floating-btn ${!isVisible ? "hidden" : ""}`}
    >
      <FaWhatsapp />
    </a>
  );
};

export default WhatsAppButton;
