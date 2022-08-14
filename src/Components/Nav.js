import { NavLink as RouterNavLink } from "react-router-dom";
import Login from "./Login";
import Logout from "./Logout";

import { useAuth0 } from "@auth0/auth0-react";

const MainNav = () => {
    return (
    <div className="main-nav">
        <a
           href="/"
        >
            Home
        </a>
    </div>
    );
}

/* Login and Logout buttons for authentication */
const AuthNav = () => {
    const { isAuthenticated } = useAuth0();

    return isAuthenticated ? <Logout /> : <Login />; /* checks isAuthenticated if the user is authenticated the logout button will show if not the login button will show */
}

const NavBar = () => {
    return (
        <nav className="nav">
            <MainNav />
            <AuthNav />
        </nav>
    )

};

export default NavBar;