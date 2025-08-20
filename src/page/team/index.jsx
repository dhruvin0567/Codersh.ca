import BreadCrumb from "../../components/common/Breadcrumb";
import Teams from "../../components/home-one/teams";
import SEO from "../../components/common/SEO";
import Team1Img from "../../assets/images/team/team1.webp";
import Team2Img from "../../assets/images/team/team2.webp";
import Team3Img from "../../assets/images/team/team3.webp";
import Team4Img from "../../assets/images/team/team4.webp";
import Team5Img from "../../assets/images/team/team5.webp";
import Team6Img from "../../assets/images/team/team6.webp";
import Team8Img from "../../assets/images/team/team8.webp";

const teamsData = [
  {
    id: crypto.randomUUID(),
    name: "Harsh Shah",
    designation: "CEO & Founder",
    img: Team1Img,
  },
  {
    id: crypto.randomUUID(),
    name: "Kinjal Shah",
    designation: "HR Manager",
    img: Team2Img,
  },
  {
    id: crypto.randomUUID(),
    name: "Vishwas Shah",
    designation: "QA",
    img: Team3Img,
  },
  {
    id: crypto.randomUUID(),
    name: "Sweta Parmar",
    designation: "Sr. Wordpress Developer",
    img: Team8Img,
  },
  {
    id: crypto.randomUUID(),
    name: "Neer Lashkari",
    designation: "Wordpress Developer",
    img: Team5Img,
  },
  {
    id: crypto.randomUUID(),
    name: "Maitri Gandhi",
    designation: "Frontend Developer",
    img: Team4Img,
  },
  {
    id: crypto.randomUUID(),
    name: "Bhavik Hadiyal",
    designation: "Frontend Developer",
    img: Team6Img,
  },
];
function Team() {
  return (
    <>
      <SEO
        title="Meet the Codersh Team | Shopify Development Experts"
        description="Get to know the expert team behind Codersh Web Services. Our Shopify developers, designers, and strategists are dedicated to building high-performing e-commerce solutions."
        keywords="Codersh team, Shopify experts, Shopify developers, Shopify designers, e-commerce professionals, Shopify agency team, Shopify customization specialists"
        canonical="https://react-vite-codersh.vercel.app/team"
      />
      <BreadCrumb title="Our Team" />
      <Teams teams={teamsData} />
    </>
  );
}

export default Team;
