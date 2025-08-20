import BreadCrumb from "../../components/common/Breadcrumb";
import TwoColumnFaq from "../../components/contact/TwoColumnFaq";
import AutoSlider from "../../components/home-one/auto-slider";
import Services from "../../components/home-one/services";
import WhyChooseUs from "../../components/home-one/why-choose-us";

const services = [
  {
    id: crypto.randomUUID(),
    title: "New Shopify Stores",
    description:
      "We specialize in designing and developing bespoke Shopify and Shopify Plus themes that reflect your brand’s unique identity.",
    icon: "icon-design-tools",
  },
  {
    id: crypto.randomUUID(),
    title: "Existing Shopify Stores",
    description:
      "Partner with a specialized Shopify team focused on your store's success, ensuring continuous growth and innovation.",
    icon: "icon-branding",
  },
  {
    id: crypto.randomUUID(),
    title: "Shopify Plus",
    description:
      "Trusted Shopify Plus agency specializing in helping e-commerce brands launch new stores and scale existing ones.s",
    icon: "icon-web",
  },
  {
    id: crypto.randomUUID(),
    title: "Other Services",
    description:
      "Shopify-accredited SEO agency, offering expert SEO services for ambitious Shopify & Shopify Plus brands.",
    icon: "icon-design-thinking",
  },
  {
    id: crypto.randomUUID(),
    title: "Packaging Design",
    description:
      "Creating packaging solutions for products that not only protect them but also attract customers on store shelves.",
    icon: "icon-layers",
  },
  {
    id: crypto.randomUUID(),
    title: "Logo and Branding",
    description:
      "Creating animate graphics, videos for various purposes, including marketing and entertainment. To help sell a product or service.",
    icon: "icon-rating-stars-1",
  },
  {
    id: crypto.randomUUID(),
    title: "Illustration",
    description:
      "Producing custom illustrations for editorial content, books, websites, marketing materials, magazines and more.",
    icon: "icon-chef",
  },
  {
    id: crypto.randomUUID(),
    title: "Product Design",
    description:
      "Developing the look and feel of physical products, considering ergonomics, aesthetics, and functionality.",
    icon: "icon-target-1",
  },
];

function ServicePage() {
  return (
    <>
      <BreadCrumb title="Service" />
      <Services services={services} />
      <AutoSlider />
      <WhyChooseUs />
      <TwoColumnFaq />
    </>
  );
}

export default ServicePage;
