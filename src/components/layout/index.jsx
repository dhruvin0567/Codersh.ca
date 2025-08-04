import { Outlet } from "react-router-dom";
import useScrollTop from "../../hooks/useScrollTop";
import Preloader from "../common/Preloader";
import ScrollToTop from "../common/ScrollToTop";
import WhatsAppButton from "../common/WhatsAppButton";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Layout() {
  useScrollTop();
  return (
    <>
      <Preloader />
      <ToastContainer position="top-right" autoClose={3000} />
      <Outlet />
      <ScrollToTop />
      <WhatsAppButton />
    </>
  );
}

export default Layout;
