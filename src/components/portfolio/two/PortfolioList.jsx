import { useState } from "react";
import Portfolio1Img from "../../../assets/images/portfolio/p_1.webp";
import Portfolio2Img from "../../../assets/images/portfolio/p_2.webp";
import Portfolio3Img from "../../../assets/images/portfolio/p_3.webp";
import Portfolio4Img from "../../../assets/images/portfolio/p_4.webp";
import Portfolio5Img from "../../../assets/images/portfolio/p_5.webp";
import Portfolio6Img from "../../../assets/images/portfolio/p_6.webp";
import Portfolio7Img from "../../../assets/images/portfolio/p_7.webp";
import Portfolio8Img from "../../../assets/images/portfolio/p_8.webp";
import Portfolio9Img from "../../../assets/images/portfolio/p_9.webp";
import Portfolio10Img from "../../../assets/images/portfolio/p_10.webp";
import Portfolio11Img from "../../../assets/images/portfolio/p_11.webp";
import Portfolio12Img from "../../../assets/images/portfolio/p_12.webp";
import FadeInStagger from "../../animation/FadeInStagger";
import PortfolioCard from "./PortfolioCard";

const portfolioListData = [
  {
    id: crypto.randomUUID(),
    title: "Asterley Bros",
    description: "Shopify Plus Ecommerce Design & Development Project.",
    img: Portfolio1Img,
    category: "shopify",
    country: "uk",
    industry: "wine",
  },
  {
    id: crypto.randomUUID(),
    title: "Tylers Coffees",
    description:
      "Our Acid-Free Coffee Range Offers a Symphony of Flavor, Minus the Sour Aftertaste.",
    img: Portfolio11Img,
    category: "shopify",
    country: "usa",
    industry: "beverages",
  },
  {
    id: crypto.randomUUID(),
    title: "Madame F",
    description: "Queer Owned Wine Brand Supporting UK’s first LGBTQ+ Museum.",
    img: Portfolio2Img,
    category: "shopify",
    country: "uk",
    industry: "wine",
  },
  {
    id: crypto.randomUUID(),
    title: "Buy Vapes USA",
    description:
      "We're your ultimate destination for premium Disposable Vapes, directly from the biggest brands in the industry.",
    img: Portfolio9Img,
    category: "shopify",
    country: "usa",
    industry: "vaping",
  },
  {
    id: crypto.randomUUID(),
    title: "Van Hunks",
    description:
      "Van Hunks Sparkling Wine is a captivating drink that delights and surprises.",
    img: Portfolio3Img,
    category: "shopify",
    country: "south africa",
    industry: "wine",
  },
  {
    id: crypto.randomUUID(),
    title: "Double Dutch Drinks",
    description:
      "Dive into our World of Flavourful Drink Mixers to Treat your Tastebuds.",
    img: Portfolio6Img,
    category: "shopify",
    country: "uk",
    industry: "beverages",
  },
  {
    id: crypto.randomUUID(),
    title: "Liberation Cocktails",
    description:
      "We’ve Created and Crafted our Classic Range to be on-tap and in Cans and Bottles, Free Flowing.",
    img: Portfolio4Img,
    category: "shopify",
    country: "uk",
    industry: "wine",
  },
  {
    id: crypto.randomUUID(),
    title: "Humphry The Butler",
    description:
      "Here you can purchase Delicious Recipes, Electronic Stickers, an Etiquette Book and Children’s Audio.",
    img: Portfolio7Img,
    category: "shopify",
    country: "uk",
    industry: "lifestyle",
  },
  {
    id: crypto.randomUUID(),
    title: "Bone Idyl",
    description: "An Urban Distillery + Bar on the Banks of the River Thames.",
    img: Portfolio5Img,
    category: "shopify",
    country: "uk",
    industry: "wine",
  },
  {
    id: crypto.randomUUID(),
    title: "Violet Blanc Beauty",
    description:
      "Our exclusive line of color correcting products is meticulously designed to ensure you flaunt a radiant.",
    img: Portfolio8Img,
    category: "shopify",
    country: "usa",
    industry: "personal-care",
  },
  {
    id: crypto.randomUUID(),
    title: "Gattertop Drinks",
    description:
      "Britain’s finest collection of Award-winning Vodkas, Spirits that capture the Natural Beauty of every Season.",
    img: Portfolio12Img,
    category: "shopify",
    country: "uk",
    industry: "wine",
  },
  {
    id: crypto.randomUUID(),
    title: "Hao Bao Bao Coffee",
    description:
      "Inspired by a late-night college revelation and a passion for the Unique Flavors of Coffees.",
    img: Portfolio10Img,
    category: "shopify",
    country: "usa",
    industry: "beverages",
  },
];

const FILTER_OPTIONS = {
  countries: ["all", "uk", "usa", "south africa"],
  industries: [
    "all",
    "wine",
    "beverages",
    "vaping",
    "lifestyle",
    "personal-care",
  ],
};

function PortfolioList() {
  const [selectedCountry, setSelectedCountry] = useState("all");
  const [selectedIndustry, setSelectedIndustry] = useState("all");

  const filteredPortfolioData = portfolioListData.filter((portfolio) => {
    const matchesCountry =
      selectedCountry === "all" || portfolio.country === selectedCountry;
    const matchesIndustry =
      selectedIndustry === "all" || portfolio.industry === selectedIndustry;
    return matchesCountry && matchesIndustry;
  });

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
  };

  const handleIndustryChange = (e) => {
    setSelectedIndustry(e.target.value);
  };

  return (
    <>
      <div className="categories-form-wrapper py-5">
        <div className="categories-form container">
          <div className="filter-container d-flex align-items-center">
            {/* Country Filter */}
            <select
              className="form-select"
              value={selectedCountry}
              onChange={handleCountryChange}
            >
              {FILTER_OPTIONS.countries.map((option) => (
                <option key={option} value={option}>
                  {option === "all"
                    ? "All Countries"
                    : option.charAt(0).toUpperCase() + option.slice(1)}
                </option>
              ))}
            </select>

            {/* Industry Filter */}
            <select
              className="form-select"
              value={selectedIndustry}
              onChange={handleIndustryChange}
            >
              {FILTER_OPTIONS.industries.map((option) => (
                <option key={option} value={option}>
                  {option === "all"
                    ? "All Industries"
                    : option
                        .split(" & ")
                        .map(
                          (part) => part.charAt(0).toUpperCase() + part.slice(1)
                        )
                        .join(" & ")}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className="section aximo-project-page aximo-section-padding5">
        <div className="container-fluid">
          <div className="row">
            {filteredPortfolioData.map((portfolio, index) => (
              <FadeInStagger
                className="col-lg-4"
                key={portfolio.id}
                index={index}
              >
                <PortfolioCard portfolio={portfolio} />
              </FadeInStagger>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default PortfolioList;
