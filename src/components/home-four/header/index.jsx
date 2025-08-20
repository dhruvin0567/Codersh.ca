import { useState } from "react";
import DesktopNav from "../../common/navigation/desktop-nav/DesktopNav";
import Dropdown from "../../common/navigation/desktop-nav/Dropdown";
import DropdownItem from "../../common/navigation/desktop-nav/DropdownItem";
import NavItem from "../../common/navigation/desktop-nav/NavItem";
import MobileNavbar from "../../common/navigation/mobile-nav/MobileNavbar";
import { menuItemsData } from "../../common/navigation/mobile-nav/menuItemsData";
import HeaderButton from "./HeaderButton";
import HeaderLogo from "./HeaderLogo";
import HeaderSideMenu from "./HeaderSideMenu";

function Header() {
  const [showSideMenu, setShowSideMenu] = useState(false);

  return (
    <header
      className="site-header site-header--menu-center aximo-header-section aximo-header4 bg-light4"
      id="sticky-menu"
    >
      <div className="container">
        <nav className="navbar site-navbar">
          <HeaderLogo />
          <div className="menu-block-wrapper">
            <DesktopNav>
              <NavItem dropdown title="Demo">
                <Dropdown>
                  <DropdownItem url="/">Design Agency</DropdownItem>
                  <DropdownItem url="home-two">Startup Agency</DropdownItem>
                  <DropdownItem url="home-three">SEO Agency</DropdownItem>
                  <DropdownItem url="home-four">
                    Business Consultation
                  </DropdownItem>
                  <DropdownItem url="home-five">Digital Marketing</DropdownItem>
                  <DropdownItem url="home-six">
                    Interior Design Agency
                  </DropdownItem>
                  <DropdownItem url="home-seven">
                    Advertising agency
                  </DropdownItem>
                </Dropdown>
              </NavItem>
              <NavItem url="about-us">About Us</NavItem>
              <NavItem dropdown title="Pages">
                <Dropdown>
                  <DropdownItem url="about-us">About Us</DropdownItem>
                  <DropdownItem url="pricing">Pricing</DropdownItem>
                  <DropdownItem dropdown title="Blog">
                    <Dropdown noShape>
                      <DropdownItem url="blog">Our Blog</DropdownItem>
                      <DropdownItem url="blog-grid">Blog Grid</DropdownItem>
                      <DropdownItem url="single-blog">
                        Blog Details
                      </DropdownItem>
                    </Dropdown>
                  </DropdownItem>
                  <DropdownItem dropdown title="Service">
                    <Dropdown noShape>
                      <DropdownItem url="service">Service</DropdownItem>
                      <DropdownItem url="single-service">
                        Service Details
                      </DropdownItem>
                    </Dropdown>
                  </DropdownItem>
                  <DropdownItem dropdown title={"Team"}>
                    <Dropdown noShape>
                      <DropdownItem url="team">Team</DropdownItem>
                      <DropdownItem url="single-team">
                        Team Details
                      </DropdownItem>
                    </Dropdown>
                  </DropdownItem>
                  <DropdownItem dropdown title={"Portfolio"}>
                    <Dropdown noShape>
                      <DropdownItem url="portfolio-one">
                        Portfolio One Column
                      </DropdownItem>
                      <DropdownItem url="portfolio-two">
                        Portfolio Two Column
                      </DropdownItem>
                      <DropdownItem url="single-portfolio">
                        Portfolio Details
                      </DropdownItem>
                    </Dropdown>
                  </DropdownItem>
                  <DropdownItem dropdown title="Utility">
                    <Dropdown noShape>
                      <DropdownItem url="faq">FAQ</DropdownItem>
                      <DropdownItem url="error-page">Error Page</DropdownItem>
                      <DropdownItem url="testimonial">Testimonial</DropdownItem>
                      <DropdownItem url="coming-soon">Coming Soon</DropdownItem>
                    </Dropdown>
                  </DropdownItem>
                  <DropdownItem dropdown title="Account">
                    <Dropdown noShape>
                      <DropdownItem url="sign-up">Sign Up</DropdownItem>
                      <DropdownItem url="sign-in">Sign In</DropdownItem>
                      <DropdownItem url="reset-password">
                        Reset Password
                      </DropdownItem>
                    </Dropdown>
                  </DropdownItem>
                </Dropdown>
              </NavItem>
              <NavItem dropdown title="Blog">
                <Dropdown>
                  <DropdownItem url="blog">Our Blog</DropdownItem>
                  <DropdownItem url="blog-grid">Blog Grid</DropdownItem>
                  <DropdownItem url="single-blog">Blog Details</DropdownItem>
                </Dropdown>
              </NavItem>
              <NavItem url="contact-us">Contact Us</NavItem>
            </DesktopNav>
          </div>
          <HeaderButton setShowSideMenu={setShowSideMenu} />
          <MobileNavbar menuItemsData={menuItemsData} title="Aximo" />
        </nav>
      </div>

      <HeaderSideMenu
        showSideMenu={showSideMenu}
        setShowSideMenu={setShowSideMenu}
      />
    </header>
  );
}

export default Header;
