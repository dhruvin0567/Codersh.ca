import { createBrowserRouter } from "react-router-dom";
import LayoutOne from "../components/layout/LayoutOne.jsx";
import Layout from "../components/layout/index.jsx";
import AboutUs from "../page/AboutUs";
import ContactUs from "../page/ContactUs";
import Faq from "../page/utility/Faq.jsx";
import TestimonialPage from "../page/utility/Testimonial.jsx";
import HomeOne from "../page/home/HomeOne.jsx";
import Team from "../page/team";
import ErrorPage from "../error-page";
import BlogGridPage from "../page/blog/BlogGridPage.jsx";
// import Pricing from "../page/Pricing";
// import SignIn from "../page/auth/SignIn";
// import SignUp from "../page/auth/SignUp";
// import PortfolioTwoColumn from "../page/portfolio/PortfolioTwoColumn";
// import Service from "../page/service"
// import Reset from "../page/auth/ResetPassword.jsx";
// import CommingSoon from "../page/utility/CommingSoon.jsx";
// import LayoutTwo from "../components/layout/LayoutTwo.jsx";
// import LayoutThree from "../components/layout/LayoutThree.jsx";
// import LayoutFour from "../components/layout/LayoutFour.jsx";
// import LayoutFive from "../components/layout/LayoutFive.jsx";
// import LayoutSix from "../components/layout/LayoutSix.jsx";
// import LayoutSeven from "../components/layout/LayoutSeven.jsx";
// import LayoutEight from "../components/layout/LayoutEight.jsx";
// import BlogPage from "../page/blog/BlogPage.jsx";
// import SingleBlogPage from "../page/blog/SingleBlog.jsx";
// import HomeFive from "../page/home/HomeFive.jsx";
// import HomeFour from "../page/home/HomeFour.jsx";
// import HomeSeven from "../page/home/HomeSeven.jsx";
// import HomeSix from "../page/home/HomeSix.jsx";
// import HomeThree from "../page/home/HomeThree.jsx";
// import HomeTwo from "../page/home/HomeTwo.jsx";
// import PortfolioOneColumn from "../page/portfolio/PortfolioOneColoum";
// import SinglePortfolio from "../page/portfolio/SinglePortfolio";
// import SingleService from "../page/service/service_pg/SingleService.jsx";
// import SingleTeam from "../page/team/SingleTeam.jsx";

// extrapages implimented
import Portfolio from "../page/portfolio/Portfolio.jsx";
import Winestore from "../page/solutions/Winestore.jsx";
import Businessdirectory from "../page/solutions/Businessdirectory.jsx";
import Creditrepair from "../page/solutions/Creditrepair.jsx";
import Itdigitalagency from "../page/solutions/Itdigitalagency.jsx";
import SingleBlogPage from "../page/blog/SingleBlog.jsx";
import CustomStore from "../page/service/shopifyServices/CustomStore.jsx";
import ShopifyMigrations from "../page/service/shopifyServices/ShopifyMigrations.jsx";
import ShopifyPlus from "../page/service/shopifyServices/ShopifyPlus.jsx";
import Headless from "../page/service/shopifyServices/Headless.jsx";
import Support_Maintanace from "../page/service/shopifyServices/Support_Maintanace.jsx";
import ConversionRate from "../page/service/shopifyServices/ConversionRate.jsx";
import Internationalization from "../page/service/shopifyServices/Internationalization.jsx";
import EmailSmsMarketing from "../page/service/shopifyServices/EmailSmsMarketing.jsx";
import ShopifyAppDev from "../page/service/shopifyServices/ShopifyAppDev.jsx";
import EcommerceSeo from "../page/service/shopifyServices/EcommerceSeo.jsx";
import B2BWholsales from "../page/service/shopifyServices/B2BWholsales.jsx";
import Subscriptions from "../page/service/shopifyServices/Subscriptions.jsx";
import ThankyouPage from "../page/ThankyouPage.jsx";
// import LandingPage from "../page/projects/LandingPage.jsx";
// import SingleCaseStudyPage from "../page/projects/SingleCaseStudyPage.jsx";
// import CaseStudies from "../page/projects/CaseStudies.jsx";
// import Brand from "../page/brand/Brand.jsx";
// import SingleBrand from "../page/brand/SingleBrand.jsx";
// import Logoslider from "../page/utility/Logoslider.jsx";
// import LayoutEight from "../components/layout/LayoutEight.jsx";
// import Portfolio2 from "../page/portfolio/Portfolio2.jsx";
// import SingleBrandCustom from "../page/brand/SingleBrandCustom.jsx";
// import BrandCustom from "../page/brand/BrandCustom.jsx";
// import Pestrashop from "../page/service/ecommerece/Pestrashop.jsx";
// import Shift4shop from "../page/service/ecommerece/Shift4shop.jsx";
// import BigCommerce from "../page/service/ecommerece/BigCommerce.jsx";
// import WooCommerceDevelopment from "../page/service/ecommerece/WooCommerceDevelopment.jsx";
// import AndroidAppDev from "../page/service/mobileapp/AndroidAppDev.jsx";
// import IosAppDev from "../page/service/mobileapp/IosAppDev.jsx";
// import Blog1 from "../page/blog/Blog.jsx";
// import SingleBlog2 from "../page/blog/SingleBlog2.jsx";
// import OurWork from "../page/projects/OurWork.jsx";
// import OurWork2 from "../page/projects/OurWork2.jsx";
// import Portfolio2 from "../page/portfolio/Portfolio2.jsx";
// import Categories from "../page/portfolio/Categories.jsx";
// import Countries from "../page/portfolio/Countries.jsx";
// import Industries from "../page/portfolio/Industries.jsx";
import ProtectedRoute from "../components/protectedroutes/ProtectedRoute.jsx";
import Brand from "../page/brand/BrandCustom.jsx";
import SingleBrandCustom from "../page/brand/SingleBrandCustom.jsx";
import CaseStudiesStatic from "../page/projects/CaseStudiesStatic.jsx";
import SingleCaseStudyStatic from "../page/projects/SingleCaseStudyStatic.jsx";
// import SingleServicesStactic from "../page/service/service_pg/SingleServicesStactic.jsx";


export const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <LayoutOne />,
				children: [
					{
						path: "/",
						element: <HomeOne />,
					},
					{
						path: "/about-us",
						element: <AboutUs />,
					},
					{
						path: "/contact-us",
						element: <ContactUs />,
					},
					{
						path: "/faq",
						element: <Faq />,
					},
					{
						path: "/testimonial",
						element: <TestimonialPage />,
					},
					// {
					// 	path: "/pricing",
					// 	element: <Pricing />,
					// },
					{
						path: "/brand",
						element: (
							<ProtectedRoute>
								{/* <Brand /> */}
								<Brand />
							</ProtectedRoute>
						),
					},
					{
						path: "/brand/:brandId",
						element: (
							<ProtectedRoute>
								{/* <SingleBrand /> */}
								<SingleBrandCustom />
							</ProtectedRoute>
						),
					},
					{
						path: "/case-studies",
						element: (
							<ProtectedRoute>
								{/* <CaseStudies /> */}
								<CaseStudiesStatic />
							</ProtectedRoute>
						),
					},
					{
						path: "/case-studies/:slug",
						element: (
							<ProtectedRoute>
								{/* <SingleCaseStudyPage /> */}
								<SingleCaseStudyStatic />
							</ProtectedRoute>
						),
					},
					{
						path: "/portfolio",
						element: (
							<ProtectedRoute>
								<Portfolio />
							</ProtectedRoute>
						),
					},
					// {
					// 	path: "/portfolio-two",
					// 	element: <PortfolioTwoColumn />,
					// },
					// {
					// 	path: "/landingpage",
					// 	element: <LandingPage />,
					// },
					{
						path: "/ourblog",
						element: <BlogGridPage />,
					},
					{
						path: "/blog/:slug",
						element: <SingleBlogPage />,
					},
					{
						path: "/Businessdirectory",
						element: <Businessdirectory />,
					},
					{
						path: "/creditrepair",
						element: <Creditrepair />,
					},
					{
						path: "/itdigitalagency",
						element: <Itdigitalagency />,
					},
					{
						path: "/winestore",
						element: <Winestore />,
					},
					{
						path: "/team",
						element: <Team />,
					},
					// {
					// 	path: "/services/:slug",
					// 	element: <SingleServicesStactic />,
					// },
					{
						path: "/customStore",
						element: <CustomStore />,
					},
					{
						path: "/shopify-migrations",
						element: <ShopifyMigrations />,
					},
					{
						path: "/headless-shopify",
						element: <Headless />,
					},
					{
						path: "/shopify-plus",
						element: <ShopifyPlus />,
					},
					{
						path: "/support-&-maintanance",
						element: <Support_Maintanace />,
					},
					{
						path: "/conversion-rate",
						element: <ConversionRate />,
					},
					{
						path: "/selling-internationally-on-shopify",
						element: <Internationalization />,
					},
					{
						path: "/subscriptions-on-shopify",
						element: <Subscriptions />,
					},
					{
						path: "/email-marketing-agency",
						element: <EmailSmsMarketing />,
					},
					{
						path: "/shopify-app-development",
						element: <ShopifyAppDev />,
					},
					{
						path: "/seo-agency",
						element: <EcommerceSeo />,
					},
					{
						path: "/shopify-b2b-wholesale",
						element: <B2BWholsales />,
					},
					{
						path: "/thank-you",
						element: <ThankyouPage />,
					},
					{
						path: "*",
						element: <ErrorPage />,
					},
					// {
					// 	path: "/logo-slider",
					// 	element: <Logoslider />,
					// },
					// {
					// 	path: "/singleblog2",
					// 	element: <SingleBlog2 />,
					// },
					// {
					// 	path: "/service",
					// 	element: <Service />,
					// },
					// {
					// 	path: "/single-service",
					// 	element: <SingleService />,
					// },
					// {
					// 	path: "/blog",
					// 	element: <BlogPage />,
					// },
					// {
					// 	path: "/blog1",
					// 	element: <Blog1 />,
					// },
					// {
					// 	path: "/single-team",
					// 	element: <SingleTeam />,
					// },
					// {
					// 	path: "/portfolio-one",
					// 	element: <PortfolioOneColumn />,
					// },

					// {
					// 	path: "/single-portfolio",
					// 	element: <SinglePortfolio />,
					// },
					// {
					// 	path: "/portfolio2",
					// 	element: <Portfolio2 />,
					// },
					// {
					// 	path: "/categories",
					// 	element: <Categories />,
					// },
					// {
					// 	path: "/countries",
					// 	element: <Countries />,
					// },
					// {
					// 	path: "/industries",
					// 	element: <Industries />,
					// },
					// {
					// 	path: "/ourwork",
					// 	element: <OurWork />,
					// },
					// {
					// 	path: "/ourwork2",
					// 	element: <OurWork2 />,
					// },
					// {
					// 	path: "/pestrashop",
					// 	element: <Pestrashop />,
					// },
					// {
					// 	path: "/shift4shop",
					// 	element: <Shift4shop />,
					// },
					// {
					// 	path: "/bigcommerce",
					// 	element: <BigCommerce />,
					// },
					// {
					// 	path: "/woocommercedevelopment",
					// 	element: <WooCommerceDevelopment />,
					// },
					// {
					// 	path: "/androidappdev",
					// 	element: <AndroidAppDev />,
					// },
					// {
					// 	path: "/iosappdev",
					// 	element: <IosAppDev />,
					// },
				],
			},
			// {
			// 	path: "/",
			// 	element: <LayoutTwo />,
			// 	children: [
			// 		{
			// 			path: "/home-two",
			// 			element: <HomeTwo />,
			// 		},
			// 	],
			// },
			// {
			// 	path: "/",
			// 	element: <LayoutThree />,
			// 	children: [
			// 		{
			// 			path: "/home-three",
			// 			element: <HomeThree />,
			// 		},
			// 	],
			// },
			// {
			// 	path: "/",
			// 	element: <LayoutFour />,
			// 	children: [
			// 		{
			// 			path: "/home-four",
			// 			element: <HomeFour />,
			// 		},
			// 	],
			// },
			// {
			// 	path: "/",
			// 	element: <LayoutFive />,
			// 	children: [
			// 		{
			// 			path: "/home-five",
			// 			element: <HomeFive />,
			// 		},
			// 	],
			// },
			// {
			// 	path: "/",
			// 	element: <LayoutSix />,
			// 	children: [
			// 		{
			// 			path: "/home-six",
			// 			element: <HomeSix />,
			// 		},
			// 	],
			// },
			// {
			// 	path: "/",
			// 	element: <LayoutSeven />,
			// 	children: [
			// 		{
			// 			path: "/home-seven",
			// 			element: <HomeSeven />,
			// 		},
			// 	],
			// },
			// {
			// 	path: "/",
			// 	element: <LayoutEight />,
			// 	children: [
			// 		{
			// 			path: "/thank-you",
			// 			element: <ThankyouPage />,
			// 		},
			// 		{
			// 			path: "/coming-soon",
			// 			element: <CommingSoon />,
			// 		},
			// 		{
			// 			path: "/reset-password",
			// 			element: <Reset />,
			// 		},
			// {
			// 	path: "/sign-up",
			// 	element: <SignUp />,
			// },
			// {
			// 	path: "/sign-in",
			// 	element: <SignIn />,
			// },
			// 	],
			// },
		],
	},
]);
