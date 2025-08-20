import { Outlet } from "react-router-dom";
import Footer from "../home-seven/footer";
import Header from "../home-seven/header";

function LayoutSeven() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default LayoutSeven;
