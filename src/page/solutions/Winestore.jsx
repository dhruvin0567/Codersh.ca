import BreadCrumb from "../../components/common/Breadcrumb";
import SEO from "../../components/common/SEO";
import Winestoredata from "../../components/solutions/Winestoredata";

function Winestore() {
  return (
    <>
      <SEO
        title="Online Wine Store | Premium Wines & Exclusive Collections"
        description="Explore a curated selection of premium wines at Codersh Wine Store. Shop exclusive collections, rare vintages, and enjoy seamless online ordering."
        keywords="online wine store, buy premium wine, exclusive wine collections, rare wines, wine delivery, best wines online, Codersh wine shop"
        canonical="https://react-vite-codersh.vercel.app/winestore"
      />

      <BreadCrumb title="Winestore" />
      <Winestoredata />
    </>
  );
}

export default Winestore;
