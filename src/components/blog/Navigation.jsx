import ArrowRightImg from "../../assets/images/icon/arrow-right8.svg";

function Navigation() {
  return (
    <div className="aximo-navigation">
      <nav className="navigation pagination" aria-label="Posts">
        <div className="nav-links">
          <span aria-current="page" className="page-numbers current">
            1
          </span>
          <a className="page-numbers" href="#">
            2
          </a>
          <a className="next page-numbers" href="">
            <img src={ArrowRightImg} alt="Arrow Right" />
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
