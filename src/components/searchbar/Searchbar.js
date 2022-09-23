import "./searchbar.scss";
import { FaSearch } from "react-icons/fa";

const Searchbar = () => {
  return (
    <form className="searchbar main-nav__search-bar animated fadeInDown">
      <input
        className="searchbar-input main-nav__searchbar-input "
        placeholder="search..."
        type="text"
        value=""
        onChange={() => {}}
      />
      <button type="submit">
        <FaSearch className="icon icon-search" />
      </button>
    </form>
  );
};

export default Searchbar;
