import { useState, useEffect } from "react";

const BRAND_API_URL =
  "https://codersh.com/wp-json/wp/v2/brands?_embed&per_page=20";

function Brand() {
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);

  const decodeHTML = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.documentElement.textContent;
  };

  useEffect(() => {
    fetch(BRAND_API_URL)
      .then((response) => response.json())
      .then((data) => {
        const formattedBrands = data.map((brand) => ({
          id: brand.id,
          title: decodeHTML(brand.title.rendered),
          img:
            brand._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
            "/placeholder.webp",
          link: `/brand/${brand.slug}`,
        }));
        setBrands(formattedBrands);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching brands:", error);
        setLoading(false);
      });
  }, []);
  return { brands, loading, setLoading };
}

export default Brand;
