import { useAuth0 } from "@auth0/auth0-react"; //auth0-react SDK
import React from "react";
import { RiLoginCircleFill } from "react-icons/ri";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button
      className="login-btn"
      onClick={async () => {
        localStorage.setItem("isLoggedIn", JSON.parse(true));
        loginWithRedirect({ redirect: "http://localhost:3000/profile" });
      }}
    >
      <RiLoginCircleFill className="icon" />
    </button>
  );
};

export default LoginButton;
