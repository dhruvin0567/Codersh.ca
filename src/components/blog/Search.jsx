import SearchIcon from "../../assets/images/icon/search.svg";

function Search() {
  return (
    <div className="widget">
      <div className="wp-block-search__inside-wrapper">
        <input
          type="search"
          placeholder="Type keyword here"
          className="wp-block-search__input"
        />
        <button id="wp-block-search__button" type="submit">
          <img src={SearchIcon} alt="search" />
        </button>
      </div>
    </div>
  );
}

export default Search;
