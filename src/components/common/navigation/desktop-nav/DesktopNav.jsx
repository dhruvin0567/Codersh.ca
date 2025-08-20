/* eslint-disable react/prop-types */
function DesktopNav({ children }) {
  return (
    <nav className="menu-block" id="append-menu-header">
      <ul className="site-menu-main">{children}</ul>
    </nav>
  );
}

export default DesktopNav;
