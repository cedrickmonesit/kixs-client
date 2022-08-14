import React from "react";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import { useHandleAccessToken } from "../hooks/use-handle-access-token"
import Unauthorized from "./Unauthorized";


const RoleBasedRoute = ({ component, ...args }) => {
   const Component = withAuthenticationRequired(component, args); /* withAuthenticationRequired() redirects the user to login page if not authenticated and then returns them to the protected route rendering the component */

   //destructure to data and methods
  //please reference use-handle-access-token.js file
  const { opts, loading, error, data, getTokenAndTryAgain } = useHandleAccessToken();

  //handling data from use-handle-access-token hook
  //handle loading
  if (loading) {
    return <div>Loading...</div>;
  }

  //handle error
  if (error) {

    //handle login required
    if (error.error === 'login_required') {
        //runs withAuthenticationRequired and redirects back to frontend page
        return <Component />;
    }

    //handle consent required
    if (error.error === 'consent_required') {
      return (
        <button onClick={getTokenAndTryAgain}>Consent to reading users</button>
      );
    }

    //handle error message
    //user is not authorized to access this route
    return <Unauthorized error={error.message}/>
  }

  //if the user has the proper role/permissions it will mount the component passed through the role-based-route component
// data.authorized tells us if the user has the proper roles/permissions to access the route 
  if(data.authorized){

    // return component to mount 
    return (
        <Component />
      );
  }else {
    
    //user is not authorized to access this route
    return <Unauthorized error={error.message}/>
  }

 };


export default RoleBasedRoute;