import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { RiLogoutCircleFill } from "react-icons/ri";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button
      className="logout-btn"
      onClick={() => {
        localStorage.setItem("isLoggedIn", JSON.stringify(false));
        logout({ returnTo: "http://localhost:3000/" });
      }}
    >
      <RiLogoutCircleFill className="icon" />
    </button>
  );
};

export default LogoutButton;
