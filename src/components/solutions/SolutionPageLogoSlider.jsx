import { memo } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SolutionPageLogoSlider = ({ logos = [], title = "" }) => {
    if (!logos || logos.length === 0) return null;

    const sliderSettings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 1500,
        autoplay: true,
        autoplaySpeed: 2500,
        slidesToShow: 5,
        slidesToScroll: 1,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 5,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
    };

    return (
        <section
            className="aximo-project-page logo-slider dark-bg border-top"
            aria-label={title || "Brand Logos"}
        >
            <div className="container py-5">
                {title && (
                    <h3 className="light-text text-center mb-5 font-semibold text-xl">
                        {title}
                    </h3>
                )}

                <Slider {...sliderSettings} className="logo-slider slick-track-centered">
                    {logos.map((logo) => (
                        <div
                            key={logo.id || logo.image}
                            className="logo-img-slider flex justify-center items-center"
                        >
                            <img
                                src={logo.image}
                                alt={logo.alt || "Brand logo"}
                                className="max-h-16 mx-auto object-contain"
                                width={120}
                                height={80}
                            />
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default memo(SolutionPageLogoSlider);
