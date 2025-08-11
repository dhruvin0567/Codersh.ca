import { useEffect, useMemo, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import "../../assets/css/WhatsAppButton.css"; // Ensure you have the appropriate CSS for styling

const WhatsAppButton = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(true); // Track visibility

  const phoneNumber = "+919998134094";
  const message = "Hello, I want to inquire about your services.";

  useEffect(() => {
    // Check if the user is on a mobile device
    if (typeof navigator !== "undefined") {
      setIsMobile(/iPhone|Android|iPad/i.test(navigator.userAgent));
    }

    // Function to hide the button after a timeout
    const hideButton = () => setIsVisible(false);

    // Function to reset the timeout when the user interacts
    const resetHideTimeout = () => {
      // Hide the button after 4 seconds of inactivity
      if (timeoutId) clearTimeout(timeoutId); // Clear any existing timeout
      timeoutId = setTimeout(hideButton, 4000); // Reset the timer to 4 seconds
      setIsVisible(true); // Make sure the button is visible when user interacts
    };

    let timeoutId = setTimeout(hideButton, 4000); // Initial timeout to hide the button after 4 seconds

    // Add event listeners for user interactions
    window.addEventListener("scroll", resetHideTimeout);
    window.addEventListener("mousemove", resetHideTimeout);
    window.addEventListener("keydown", resetHideTimeout);

    // Cleanup the event listeners and timeout on unmount
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
      className={`whatsapp-floating-btn ${!isVisible ? "hidden" : ""}`} // Add 'hidden' class for smooth transition
    >
      <FaWhatsapp />
    </a>
  );
};

export default WhatsAppButton;
