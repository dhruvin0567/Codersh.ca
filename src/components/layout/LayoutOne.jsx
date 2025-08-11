import { Outlet } from "react-router-dom";
import Footer from "../home-one/footer";
import Header from "../home-one/header";
import WhatsAppButton from "../common/WhatsAppButton";
// import TidioChat from "../tidiobot/TidioChat";
function LayoutOne() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <WhatsAppButton />
      {/* <TidioChat /> */}
    </>
  );
}

export default LayoutOne;
