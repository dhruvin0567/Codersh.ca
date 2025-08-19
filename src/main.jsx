import React from "react";
import ReactDOM from "react-dom/client";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// react modal video css
import "react-modal-video/css/modal-video.css";

// blur css
import "react-lazy-load-image-component/src/effects/blur.css";

// fonts
import "./assets/css/fontawesome.css";
import "./assets/css/icomoon.css";
import "./font.js";

//  Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/mousewheel";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// main css
import "./assets/css/app.css";
import "./assets/css/main.css";
import "./assets/css/mobile-nav.css";
import "./assets/css/pagination.css";

// React Router Dom
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { PasswordProvider } from "./context/authContext/PasswordContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PasswordProvider>
      <RouterProvider router={router} />
    </PasswordProvider>
  </React.StrictMode>
);
