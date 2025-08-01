import { Link, useLocation } from 'react-router-dom';

function Mega_Menu() {
    const location = useLocation();

    return (
        <div className="mega-menu p-4">
            <div className="row">
                <div className="col-12 col-md-6 col-lg-4">
                    <p className="mega-menu-title">New Shopify Stores</p>
                    <ul className="list-unstyled">
                        <li className="mega-menu-item">
                            <Link to="/customStore" className={location.pathname === "/customStore" ? "active-link" : ""}>
                                <span className="menu-item-text">Custom Store Project</span>
                            </Link>
                        </li>
                        <li className="mega-menu-item">
                            <Link to="/shopify-migrations" className={location.pathname === "/shopify-migrations" ? "active-link" : ""}>
                                <span className="menu-item-text">Shopify Migrations</span>
                            </Link>
                        </li>
                        <li className="mega-menu-item">
                            <Link to="/headless-shopify" className={location.pathname === "/headless-shopify" ? "active-link" : ""}>
                                <span className="menu-item-text">Headless & Shopify</span>
                            </Link>
                        </li>
                        <li className="mega-menu-item">
                            <Link to="/shopify-plus" className={location.pathname === "/shopify-plus" ? "active-link" : ""}>
                                <span className="menu-item-text">Shopify Plus</span>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <p className="mega-menu-title">Existing Shopify Stores</p>
                    <ul className="list-unstyled">
                        <li className="mega-menu-item">
                            <Link to="/support-&-maintanance" className={location.pathname === "/support-&-maintanance" ? "active-link" : ""}>
                                <span className="menu-item-text">Support & Maintanance</span>
                            </Link>
                        </li>
                        <li className="mega-menu-item">
                            <Link to="/conversion-rate" className={location.pathname === "/conversion-rate" ? "active-link" : ""}>
                                <span className="menu-item-text">Shopify CRO Agency</span>
                            </Link>
                        </li>
                        <li className="mega-menu-item">
                            <Link to="/selling-internationally-on-shopify" className={location.pathname === "/selling-internationally-on-shopify" ? "active-link" : ""}>
                                <span className="menu-item-text">Internationalization</span>
                            </Link>
                        </li>
                        <li className="mega-menu-item">
                            <Link to="/subscriptions-on-shopify" className={location.pathname === "/subscriptions-on-shopify" ? "active-link" : ""}>
                                <span className="menu-item-text">Subscriptions</span>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <p className="mega-menu-title">Other Services</p>
                    <ul className="list-unstyled">
                        <li className="mega-menu-item">
                            <Link to="/email-marketing-agency" className={location.pathname === "/email-marketing-agency" ? "active-link" : ""}>
                                <span className="menu-item-text">Email & SMS Marketing</span>
                            </Link>
                        </li>
                        <li className="mega-menu-item">
                            <Link to="/shopify-app-development" className={location.pathname === "/shopify-app-development" ? "active-link" : ""}>
                                <span className="menu-item-text">Shopify App Development</span>
                            </Link>
                        </li>
                        <li className="mega-menu-item">
                            <Link to="/seo-agency" className={location.pathname === "/seo-agency" ? "active-link" : ""}>
                                <span className="menu-item-text">Commerce SEO</span>
                            </Link>
                        </li>
                        <li className="mega-menu-item">
                            <Link to="/shopify-b2b-wholesale" className={location.pathname === "/shopify-b2b-wholesale" ? "active-link" : ""}>
                                <span className="menu-item-text">Shopify B2B & Wholesale</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Mega_Menu;
