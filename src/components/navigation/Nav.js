import "./nav.scss";
import React from "react";
import Login from "../Login";
import Logout from "../Logout";
import { NavLink } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { FaUserAlt, FaHeart } from "react-icons/fa";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import { useAuth0 } from "@auth0/auth0-react";
import Searchbar from "../searchbar/Searchbar";

const MainNav = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  return (
    <div className="main-nav">
      <div className="main-nav__logo-container">
        <Logo />
      </div>
      <div className="main-nav__links">
        <NavLink to="/">
          <AiFillHome className="icon icon-home animate__animated animate__bounceIn" />
        </NavLink>
        <NavLink to="/favorites">
          <FaHeart className="icon animate__animated animate__bounceIn" />
        </NavLink>
        <div className="main-nav__login-logout-container">
          {JSON.parse(localStorage.getItem("isLoggedIn")) && <Logout />}
          {/* Shows after login */}
          {!JSON.parse(localStorage.getItem("isLoggedIn")) && !isLoading && <Login />}
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
