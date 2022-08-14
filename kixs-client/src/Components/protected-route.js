import React from "react";
import { withAuthenticationRequired } from "@auth0/auth0-react";

const ProtectedRoute = ({ component, ...args }) => {
   const Component = withAuthenticationRequired(component, args); /* withAuthenticationRequired() redirects the user to login page if not authenticated and then returns them to the protected route rendering the component */
   return <Component />;
 };


export default ProtectedRoute;