// import { useEffect, useState } from "react";
// import "../../assets/assets/css"; // Ensure you have the appropriate CSS for styling

// export default function TidioChat() {
//   const [isVisible, setIsVisible] = useState(true); // State to track visibility

//   useEffect(() => {
//     // Ensure the Tidio script and API are accessible
//     if (typeof window !== "undefined" && window.tidioChatApi) {
//       // Show chat initially
//       window.tidioChatApi.show();
//     }

//     // Function to handle scroll and show/hide Tidio chatbot
//     const handleScroll = () => {
//       const scrollTop = window.scrollY;
//       const windowHeight = window.innerHeight;
//       const documentHeight = document.documentElement.scrollHeight;

//       const scrollPosition = scrollTop + windowHeight;
//       const scrollPercentage = scrollPosition / documentHeight;

//       // Show the chat when user has scrolled past 80% of the page
//       if (scrollPercentage >= 0.8) {
//         setIsVisible(true);
//         if (window.tidioChatApi) window.tidioChatApi.show(); // Show chat
//       } else {
//         setIsVisible(false);
//         if (window.tidioChatApi) window.tidioChatApi.hide(); // Hide chat
//       }
//     };

//     // Listen for scroll events
//     window.addEventListener("scroll", handleScroll);

//     // Cleanup on component unmount
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <div
//       className={`tidio-chat-widget ${!isVisible ? "hidden" : ""}`} // Add class to hide when not visible
//     >
//       {/* The Tidio widget will automatically be handled by Tidio's API */}
//     </div>
//   );
// }
