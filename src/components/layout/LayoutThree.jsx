import { Outlet } from "react-router-dom";
import Footer from "../home-three/footer";
import Header from "../home-three/header";

function LayoutThree() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default LayoutThree;
