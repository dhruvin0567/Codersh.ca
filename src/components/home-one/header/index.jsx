/* eslint-disable for-direction */
import DesktopNav from "../../common/navigation/desktop-nav/DesktopNav";
import Dropdown from "../../common/navigation/desktop-nav/Dropdown";
import DropdownItem from "../../common/navigation/desktop-nav/DropdownItem";
import NavItem from "../../common/navigation/desktop-nav/NavItem";
import { menuItemsData } from "../../common/navigation/mobile-nav/menuItemsData";
import MobileNavbar from "../../common/navigation/mobile-nav/MobileNavbar";
import HeaderButton from "./HeaderButton";
import HeaderLogo from "./HeaderLogo";
import Mega_Menu from "./Mega_Menu";
import brandLogo from "../../../assets/images/logo/codersh-horizontal-logo-black.webp";
// import Mega_Menu_Services from "./Mega_Menu_2";


function Header() {
	return (
		<header className="site-header aximo-header-section aximo-header1 dark-bg" id="sticky-menu">
			<div className="container header-container-div">
				<nav className="navbar site-navbar">
					<HeaderLogo />
					<div className="menu-block-wrapper">
						<DesktopNav>
							<NavItem dropdown title="Company">
								<Dropdown>
									<DropdownItem url="about-us">About Us</DropdownItem>
									<DropdownItem url="team">Team</DropdownItem>
									<DropdownItem url="testimonial">Testimonial</DropdownItem>
									<DropdownItem url="faq">FAQ</DropdownItem>
								</Dropdown>
							</NavItem>
							{/* <NavItem dropdown title="services">
								<Dropdown>
									<Mega_Menu_Services />
								</Dropdown>
							</NavItem> */}
							<NavItem dropdown title="Shopify">
								<Dropdown>
									<Mega_Menu />
								</Dropdown>
							</NavItem>
							<NavItem dropdown title="Work">
								<Dropdown>
									<DropdownItem url="case-studies">Case Studies</DropdownItem>
									<DropdownItem url="portfolio">Portfolio</DropdownItem>
									<DropdownItem url="brand">brand</DropdownItem>
									{/* <DropdownItem url="ourblog">Our Blog</DropdownItem> */}

								</Dropdown>
							</NavItem>
							{/* <NavItem dropdown title="Pages">
								<Dropdown>	
									<DropdownItem url="pricing">Pricing</DropdownItem>	
								</Dropdown>
							</NavItem> */}
							<NavItem dropdown title="Solutions">
								<Dropdown>
									<DropdownItem url="creditrepair">Credit Repair</DropdownItem>
									<DropdownItem url="itdigitalagency">It Digital Agency</DropdownItem>
									<DropdownItem url="winestore">Wine store</DropdownItem>
									<DropdownItem url="businessdirectory">Business Directory</DropdownItem>
								</Dropdown>
							</NavItem>
							{/* <NavItem url="ourblog">Our Blog</NavItem> */}
							<NavItem url="contact-us">Contact Us</NavItem>
						</DesktopNav>
					</div>
					<HeaderButton />
					<MobileNavbar menuItemsData={menuItemsData} title={
						<img
							src={brandLogo}
							alt="CODERSH Logo"
							style={{ height: '30px', cursor: 'pointer' }}
						/>
					} />
				</nav>
			</div>
		</header>
	);
}

export default Header;
