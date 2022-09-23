import React from "react";
import { withAuthenticationRequired } from "@auth0/auth0-react";

const ProtectedRoute = ({ component, ...args }) => {
  localStorage.setItem("isLoggedIn", JSON.stringify(false));
  const Component = withAuthenticationRequired(
    component,
    args,
  ); /* withAuthenticationRequired() redirects the user to login page if not authenticated and then returns them to the protected route rendering the component */
  localStorage.setItem("isLoggedIn", JSON.stringify(true));
  return <Component />;
};

export default ProtectedRoute;
