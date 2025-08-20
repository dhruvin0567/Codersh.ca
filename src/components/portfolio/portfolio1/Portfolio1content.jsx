import { useState, useMemo, useCallback } from "react";
import FadeInStagger from "../../animation/FadeInStagger";

const cardImages = import.meta.glob("/src/assets/images/images2/*.webp*", {
  eager: true,
});

const getImage = (name) =>
  cardImages[`/src/assets/images/images2/${name}.webp`]?.default ||
  cardImages[`/src/assets/images/images2/${name}.png.webp`]?.default;

const cards = [
  {
    category: "Shopify",
    country: "South Africa",
    industry: "Wine",
    image: "Van-Hunks",
    name: "Vank Hunks",
  },
  {
    category: "Shopify",
    country: "Germany",
    industry: "Travel and Tourist",
    image: "Airpaq-Sustainability-meets-functionality-Airpaq-GmbH",
    name: "Airpaq",
  },
  {
    category: "Shopify",
    country: "Australia",
    industry: "Fashion",
    image: "NEUX-Ethically-Made-Australian-Designed-Quality-Womenswear-",
    name: "Neux",
  },
  {
    category: "Shopify",
    country: "UK",
    industry: "Wine",
    image: "Madame-F",
    name: "Madame F",
  },
  {
    category: "Shopify",
    country: "UK",
    industry: "Wine",
    image: "Liberation-Cocktails",
    name: "Liberation Cocktails",
  },
  {
    category: "Shopify",
    country: "UK",
    industry: "Wine",
    image: "BONE-IDYLL",
    name: "Bone Idyll",
  },
  {
    category: "Shopify",
    country: "UK",
    industry: "Fashion",
    image: "Women-s-Clothing-Store-Clothing-Boutique-CUBIC-Outside-the-Box",
    name: "CUBIC",
  },
  {
    category: "Shopify",
    country: "UK",
    industry: "Food and Beverages",
    image: "thewelshproducestall-the-welsh-produce-stall",
    name: "The Welsh Produce Stall",
  },
  {
    category: "Shopify",
    country: "UK",
    industry: "Food and Beverages",
    image: "fuel",
    name: "Fuel 10k",
  },
  {
    category: "Shopify",
    country: "USA",
    industry: "Online Retail",
    image: "potown-homepage",
    name: "PowTown Store",
  },
  {
    category: "Shopify",
    country: "USA",
    industry: "Health Care",
    image: "Violet-Blanc-Beauty",
    name: "Violet Blanc",
  },
  {
    category: "Shopify",
    country: "USA",
    industry: "Food and Beverages",
    image: "TylersCoffee",
    name: "Tylers Coffee",
  },
  {
    category: "Shopify",
    country: "USA",
    industry: "      ",
    image: "BUY-VAPE-USA",
    name: "Buy Vape USA",
  },
  {
    category: "Shopify",
    country: "USA",
    industry: "Fashion",
    image: "No-Mo-Stache",
    name: "No Mo-Stache",
  },
  {
    category: "Shopify",
    country: "USA",
    industry: "Fashion",
    image: "Infinity-Loops",
    name: "Infinity Loops",
  },
  {
    category: "Shopify",
    country: "USA",
    industry: "Online Retail",
    image: "wallplanks",
    name: "Wallplanks",
  },
  {
    category: "Shopify",
    country: "USA",
    industry: "Fashion",
    image: "Rowan-Oak-Clothing-Co",
    name: "Rowan Oak",
  },
  {
    category: "Shopify",
    country: "USA",
    industry: "Travel and Tourist",
    image: "Aolithium-Professional",
    name: "Aolithium",
  },
  {
    category: "Shopify",
    country: "USA",
    industry: "Fashion",
    image: "Baby-Gold",
    name: "Baby Gold",
  },
  {
    category: "Shopify",
    country: "USA",
    industry: "Food and Beverages",
    image: "Aubi-Ramsa-Ice-Cream-Co-",
    name: "Aubi & Ramsa",
  },
  {
    category: "Shopify",
    country: "USA",
    industry: "Food and Beverages",
    image:
      "Indulge-in-Hudson-Pecan-Natures-Tastiest-Guilt-Free-Snack-Hudson-Pecan-Company",
    name: "Hudson Pecan Company Inc",
  },
  {
    category: "Shopify",
    country: "USA",
    industry: "Fashion",
    image:
      "IKKS-Official-Website-Women-s-Children-s-Men-s-Fashion-Fall-Winter-2023",
    name: "IKKS",
  },
  {
    category: "Shopify",
    country: "USA",
    industry: "Auto Mobile",
    image: "Bumperninja",
    name: "Bumper Ninja",
  },
  {
    category: "Shopify",
    country: "USA",
    industry: "Health Care",
    image: "Biotrust",
    name: "Bio Trust",
  },
  {
    category: "Shopify",
    country: "       ",
    industry: "Media Service",
    image: "vidtre",
    name: "Video Platform",
  },
  {
    category: "Shopify",
    country: "       ",
    industry: "Media Service",
    image: "oceans6media",
    name: "Ocean 6 Media",
  },
].map((card) => ({
  ...card,
  id: crypto.randomUUID(),
  image: getImage(card.image),
}));

// Filter options
const FILTER_OPTIONS = {
  categories: ["Shopify"],
  countries: ["South Africa", "UK", "USA", "Germany", "Australia"],
  industries: [
    "Wine",
    "Food and Beverages",
    "Fashion",
    "Travel and Tourist",
    "Auto Mobile",
    "Health Care",
    "Online Retail",
  ],
};

const Portfolio1content = () => {
  const [filters, setFilters] = useState({
    category: "all",
    country: "all",
    industry: "all",
    activeFacets: {
      countries: [],
      industries: [],
    },
  });

  const toggleFacetFilter = (type, value) => {
    setFilters((prev) => {
      const current = prev.activeFacets[type] || [];
      const updated = current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value];

      return {
        ...prev,
        activeFacets: {
          ...prev.activeFacets,
          [type]: updated,
        },
      };
    });
  };

  const handleFilterChange = useCallback((filterType, value) => {
    setFilters((prev) => ({
      ...prev,
      [filterType]: value,
    }));
  }, []);

  const clearAllFilters = () => {
    setFilters({
      category: "all",
      country: "all",
      industry: "all",
      activeFacets: {
        countries: [],
        industries: [],
      },
    });
  };

  const filteredCards = useMemo(() => {
    return cards.filter((card) => {
      if (filters.category !== "all" && card.category !== filters.category) {
        return false;
      }

      const countryMatch =
        (filters.country === "all" &&
          filters.activeFacets.countries.length === 0) ||
        (filters.country !== "all" && card.country === filters.country) ||
        (filters.activeFacets.countries.length > 0 &&
          filters.activeFacets.countries.includes(card.country));

      const industryMatch =
        (filters.industry === "all" &&
          filters.activeFacets.industries.length === 0) ||
        (filters.industry !== "all" && card.industry === filters.industry) ||
        (filters.activeFacets.industries.length > 0 &&
          filters.activeFacets.industries.includes(card.industry));

      return countryMatch && industryMatch;
    });
  }, [filters]);

  const hasActiveFilters =
    filters.category !== "all" ||
    filters.country !== "all" ||
    filters.industry !== "all" ||
    filters.activeFacets.countries.length > 0 ||
    filters.activeFacets.industries.length > 0;

  return (
    <div>
      <div className="categories-form-wrapper py-5">
        {/* Dropdown Filters */}
        <div className="categories-form container the-main-outerbox">
          {/* Modern Responsive Faceted Filters */}
          <div className="mx-4 mx-md-5">
            <div className="faceted-filters-container">
              {/* Desktop/Tablet View */}
              <div className="faceted-filters-scroll d-none d-md-flex">
                {Object.entries(FILTER_OPTIONS)
                  .filter(([filterType]) => filterType !== "categories")
                  .map(([filterType, values]) => (
                    <div key={filterType} className="filter-group">
                      <div className="filter-group-label">{filterType}:</div>
                      <div className="filter-options">
                        {values.map((value) => (
                          <button
                            key={value}
                            className={`filter-chip ${
                              filters.activeFacets[filterType]?.includes(value)
                                ? "active"
                                : ""
                            }`}
                            onClick={() => toggleFacetFilter(filterType, value)}
                          >
                            {value}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
              </div>

              {/* Mobile View */}
              <div className="faceted-filters-mobile d-flex d-md-none flex-column gap-3">
                {Object.entries(FILTER_OPTIONS)
                  .filter(([filterType]) => filterType !== "categories")
                  .map(([filterType, values]) => (
                    <div key={filterType} className="filter-group-mobile">
                      <details>
                        <summary className="filter-group-label">
                          {filterType}
                          {filters.activeFacets[filterType]?.length > 0 && (
                            <span className="badge   ms-2">
                              {filters.activeFacets[filterType].length}
                            </span>
                          )}
                        </summary>
                        <div className="filter-options mt-2">
                          {values.map((value) => (
                            <button
                              key={value}
                              className={`filter-chip ${
                                filters.activeFacets[filterType]?.includes(
                                  value
                                )
                                  ? "active"
                                  : ""
                              }`}
                              onClick={() =>
                                toggleFacetFilter(filterType, value)
                              }
                            >
                              {value}
                            </button>
                          ))}
                        </div>
                      </details>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Active Filters Display */}
      {hasActiveFilters && (
        <div className="container mb-4">
          <div className="d-flex flex-wrap gap-3 align-items-center">
            {/* clear filter button */}
            {hasActiveFilters && (
              <button
                className="btn btn-outline-secondary clear-all-filter"
                onClick={clearAllFilters}
              >
                Clear All
              </button>
            )}
            <span className="devider"> | </span>
            <span className="me-2">Active filters:</span>
            {filters.category !== "all" && (
              <span className="badge  ">
                Category: {filters.category}
                <button
                  className="btn-close  ms-2"
                  onClick={() => handleFilterChange("category", "all")}
                  aria-label="Remove category filter"
                ></button>
              </span>
            )}
            {filters.country !== "all" && (
              <span className="badge  ">
                Country: {filters.country}
                <button
                  className="btn-close  ms-2"
                  onClick={() => handleFilterChange("country", "all")}
                  aria-label="Remove country filter"
                ></button>
              </span>
            )}
            {filters.industry !== "all" && (
              <span className="badge d-flex justify-content-center align-items-center">
                Industry: {filters.industry}
                <button
                  className="btn-close  ms-2"
                  onClick={() => handleFilterChange("industry", "all")}
                  aria-label="Remove industry filter"
                ></button>
              </span>
            )}
            {filters.activeFacets.countries.map((country) => (
              <span
                key={country}
                className="badge d-flex justify-content-center align-items-center"
              >
                Country: {country}
                <button
                  className="btn-close  ms-2"
                  onClick={() => toggleFacetFilter("countries", country)}
                  aria-label={`Remove ${country} filter`}
                ></button>
              </span>
            ))}
            {filters.activeFacets.industries.map((industry) => (
              <span
                key={industry}
                className="badge d-flex justify-content-center align-items-center"
              >
                Industry: {industry}
                <button
                  className="btn-close  ms-2"
                  onClick={() => toggleFacetFilter("industries", industry)}
                  aria-label={`Remove ${industry} filter`}
                ></button>
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Project Cards Section */}
      <div className="project-cards-section py-5 px-2">
        <div className="container-fluid">
          {filteredCards.length === 0 ? (
            <div className="text-center py-5">
              <h4>No projects match your filters</h4>
            </div>
          ) : (
            <div className="row">
              {filteredCards.map((card) => (
                <FadeInStagger
                  key={card.id}
                  className="col-12 col-md-6 col-lg-4 col-xl-3 project-card"
                  data-category={card.category}
                  data-country={card.country}
                  data-industry={card.industry}
                >
                  <div className="portfolio-image-wrapper">
                    <img
                      src={card.image}
                      alt={card.name}
                      className="image-scrolling"
                      loading="lazy"
                    />
                  </div>
                  <h4 className="py-4 text-center">{card.name}</h4>
                </FadeInStagger>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Modern CSS Styles */}
      <style jsx>{`
        .faceted-filters-container {
          width: 100%;
          overflow-x: auto;
          // padding-bottom: 1rem;
          margin-bottom: 1.5rem;
        }

        .faceted-filters-scroll {
          display: flex;
          gap: 1.5rem;
          padding: 0.5rem 0;
          min-width: max-content;
          // background: #f5f5f5;
          display: flex;
          justify-content: center;
          align-items: center;
          // border-radius: 15px;
          margin: 0px 5px;
          // box-shadow: 0 2px 8px rgba(0,0,0,0.15);
        }

        .filter-group {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background: #fffff5;
          border-radius: 10px;
          padding: 1rem 1rem;
          // box-shadow: 0 2px 8px rgba(0,0,0,0.15);
        }

        .filter-group-label {
          font-weight: 600;
          font-size: 18px;
          color: #495057;
          text-transform: capitalize;
          white-space: nowrap;
        }

        .filter-options {
          display: flex;
          gap: 0.5rem;
        }

        .filter-chip {
          border: none;
          background: rgba(0, 0, 0, 0.05);
          color: #000000;
          padding: 9px 24px;
          border-radius: 25px;
          font-size: 16px;
          cursor: pointer;
          transition: all 0.25s ease-in-out;
          white-space: nowrap;
          // box-shadow: 0 1px 3px rgba(0,0,0,0.25);
        }

        .filter-chip[disabled] {
          opacity: 0.5;
          pointer-events: none;
        }

        .filter-chip:hover {
          background: #bff747;
          transform: translateY(-1px);
        }

        .filter-chip.active {
          background: #bff747;
          color: #000;
          // font-weight: 500;
          transition: all 0.2s ease;
        }

        /* Custom scrollbar */
        .faceted-filters-container::-webkit-scrollbar {
          height: 6px;
        }

        .faceted-filters-container::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }

        .faceted-filters-container::-webkit-scrollbar-thumb {
          background: #ccc;
          border-radius: 10px;
        }

        .faceted-filters-container::-webkit-scrollbar-thumb:hover {
          background: #aaa;
        }

        @media (max-width: 768px) {
          .faceted-filters-mobile details {
            background: #fffff5;
            border-radius: 10px;
            padding: 1rem;
            margin: 3px 3px;
            box-shadow: 0 1px 5px rgba(0, 0, 0, 0.25);
            transition: all 0.3s ease;
            overflow: hidden;
          }

          .faceted-filters-mobile summary {
            cursor: pointer;
            font-weight: 600;
            color: #495057;
            font-size: 1rem;
            list-style: none;
            position: relative;
            padding-right: 20px;
          }

          .faceted-filters-mobile summary::-webkit-details-marker {
            display: none;
          }

          .faceted-filters-mobile summary::after {
            content: "›";
            position: absolute;
            right: 0;
            top: 0;
            transform: rotate(0deg);
            transition: transform 0.3s ease;
          }

          .faceted-filters-mobile details[open] summary::after {
            transform: rotate(90deg);
          }

          .faceted-filters-mobile .filter-options {
            padding-top: 0.75rem;
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
          }

          .faceted-filters-mobile .filter-chip {
            width: 100%;
            justify-content: flex-start;
          }

          .filter-group-mobile {
            width: 100%;
          }

          .badge {
            display: inline-flex;
            align-items: center;
            padding: 0.5rem 0.75rem;
            font-size: 0.85rem;
          }

          .btn-close {
            font-size: 0.6rem;
            padding: 0.25rem;
            opacity: 0.8;
          }

          .btn-close:hover {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default Portfolio1content;
