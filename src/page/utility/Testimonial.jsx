import BreadCrumb from "../../components/common/Breadcrumb";
import SEO from "../../components/common/SEO";
import Testimonial from "../../components/home-one/testimonial";

import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
  #root {
	 overflow-x: hidden; 
  }
`;

function TestimonialPage() {
  return (
    <>
      <SEO
        title="Client Testimonials | Codersh Web Services Reviews"
        description="Read what our clients say about Codersh Web Services. Discover how our expert Shopify development solutions have helped businesses achieve e-commerce success."
        keywords="Codersh testimonials, client reviews, Shopify agency reviews, Shopify development feedback, e-commerce success stories, Codersh Web Services ratings"
        canonical="https://react-vite-codersh.vercel.app/testimonial"
      />
      <GlobalStyle />
      <BreadCrumb title="Testimonial" />
      <Testimonial />
    </>
  );
}

export default TestimonialPage;
