import { Outlet } from "react-router-dom";
import Footer from "../coming-soon/Footer";
import Header from "../coming-soon/Header";

function LayoutEight() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default LayoutEight;
