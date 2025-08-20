function Dropdown({ children, noShape }) {
  return <ul className={`sub-menu ${noShape && "shape-none"}`}>{children}</ul>;
}

export default Dropdown;
