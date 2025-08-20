import { Helmet } from "react-helmet";
import Favicon from "../../assets/images/images2/patherrimgs/favicon-latest.ico";

function SEO({ title, description, keywords, canonical }) {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content="Codersh Web Services" />
        <link rel="canonical" href={canonical} />
        <link rel="icon" href={Favicon} type="image/x-icon" />
      </Helmet>
    </>
  );
}

export default SEO;
