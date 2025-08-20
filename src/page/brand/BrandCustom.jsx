import { useMemo } from "react";
import { Link } from "react-router-dom";
import FadeInStagger from "../../components/animation/FadeInStagger";
import BreadCrumb from "../../components/common/Breadcrumb";

const Brand = () => {
  const brandImages = useMemo(
    () => [
      { id: "rd-homes", image: "1.webp" },
      { id: "elevation-107", image: "2.webp" },
      { id: "kick-ash-basket", image: "4.webp" },
      { id: "texas-fowlers", image: "6.webp" },
      { id: "aubi-and-ramsa", image: "7.webp" },
      { id: "cool-out", image: "8.webp" },
      { id: "obvi-protien", image: "10.webp" },
      { id: "liberation-cocktails", image: "11.webp" },
      { id: "bone-idyll", image: "12.webp" },
      { id: "moth-drinks", image: "13.webp" },
      { id: "artisan-drink", image: "14.webp" },
      { id: "fuel-10k", image: "15.webp" },
      { id: "queen-v", image: "17.webp" },
      { id: "vidl-life", image: "19.webp" },
      { id: "geon-alps", image: "20.webp" },
    ],
    []
  );

  return (
    <>
      <BreadCrumb title="Brand" />
      <section className="brands-section py-5 my-sm-5">
        <div className="container-fluid">
          <div className="row">
            {brandImages.map((brand, index) => (
              <div className="col-6 col-md-4 col-xl-3 mb-3 p-3" key={brand.id}>
                <FadeInStagger>
                  <Link
                    to={`/brand/${brand.id}`}
                    className="brand-card"
                    aria-label={`Brand ${index + 1}`}
                  >
                    <img
                      src={`/images/brands/brands-cards/${brand.image}`}
                      alt={`Brand logo ${index + 1}`}
                      loading="lazy"
                      className="img-fluid"
                    />
                  </Link>
                </FadeInStagger>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Brand;
