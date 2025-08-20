import BreadCrumb from "../../components/common/Breadcrumb";
import SEO from "../../components/common/SEO";
import Bussinessdirectorydata from "../../components/solutions/Bussinessdirectorydata";

function Businessdirectory() {
  return (
    <>
      <SEO
        title="Business Directory | Discover & Connect with Top Businesses"
        description="Find trusted businesses across various industries in our comprehensive business directory. Connect with verified companies and grow your network with ease."
        keywords="business directory, find businesses online, company listings, verified business directory, local businesses, Codersh directory"
        canonical="https://react-vite-codersh.vercel.app/businessdirectory"
      />
      <BreadCrumb title="Business Directory" />
      <Bussinessdirectorydata />
    </>
  );
}

export default Businessdirectory;
