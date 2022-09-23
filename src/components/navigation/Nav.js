import "./nav.scss";
import Login from "../Login";
import Logout from "../Logout";
import { NavLink } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { FaUserAlt, FaHeart } from "react-icons/fa";
import logo from "../../assets/images/logo.png";
import { useAuth0 } from "@auth0/auth0-react";
import Searchbar from "../searchbar/Searchbar";

const MainNav = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  return (
    <div className="main-nav">
      <div className="main-nav__logo-container">
        <img className="main-nav__logo" src={logo} alt="Kixs Logo" />
      </div>
      <div className="main-nav__search-bar-container">
        <Searchbar />
      </div>
      <div className="main-nav__links">
        <NavLink to="/">
          <AiFillHome className="icon icon-home animate__animated animate__bounceIn" />
        </NavLink>
        <NavLink to="/profile">
          <FaUserAlt className="icon icon-profile animate__animated animate__bounceIn" />
        </NavLink>
        <NavLink to="/favorites">
          <FaHeart className="icon animate__animated animate__bounceIn" />
        </NavLink>
        <div className="main-nav__login-logout-container">
          {isAuthenticated && !isLoading && <Logout />}
          {/* Shows after login */}
          {!isAuthenticated && !isLoading && <Login />}
          {/* Shows before login where login button is */}
        </div>
      </div>
    </div>
  );
};

const NavBar = () => {
  return (
    <nav className="nav">
      <MainNav />
    </nav>
  );
};

export default NavBar;
