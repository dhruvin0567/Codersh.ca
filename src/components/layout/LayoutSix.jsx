import { Outlet } from "react-router-dom";
import Footer from "../home-six/footer";
import Header from "../home-six/header";

function LayoutSix() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default LayoutSix;
