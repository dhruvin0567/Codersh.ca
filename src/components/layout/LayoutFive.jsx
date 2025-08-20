import { Outlet } from "react-router-dom";
import Footer from "../home-five/footer";
import Header from "../home-five/header";

function LayoutFive() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default LayoutFive;
