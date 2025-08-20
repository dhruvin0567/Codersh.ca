import { Outlet } from "react-router-dom";
import Footer from "../home-four/footer";
import Header from "../home-four/header";

function LayoutFour() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default LayoutFour;
