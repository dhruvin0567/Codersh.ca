import { Outlet } from "react-router-dom";
import Footer from "../home-two/footer";
import Header from "../home-two/header";

function LayoutTwo() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default LayoutTwo;
