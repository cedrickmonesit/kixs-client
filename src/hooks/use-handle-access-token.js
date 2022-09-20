import { useAuth0 } from '@auth0/auth0-react';
import { useApi } from '../hooks/use-api';

export const useHandleAccessToken = () => {

    // only use scope if making a request to the Auth0 endpoints
    // only use scope if you plan on using the default scope key for the express-jwt-scope package Default: "scope"
    // current configuration checks the permissions property in the access token provided by Auth0
    /* scope: process.env.REACT_APP_USER_SCOPE, */
  const opts = {
    audience: process.env.REACT_APP_BACKEND_AUDIENCE,
    method: 'GET',
    headers: {
      contentType: "'Content-Type:' 'application/json'",
    },
    
  };
  const { getAccessTokenWithPopup } = useAuth0();

  // the response from the backend is stored in data
  // data.authorized tells us if the user has the proper roles/permissions to access the route
  const {
    data,
    loading,
    error,
    refresh
  } = useApi(process.env.REACT_APP_API_URL, opts); // useApi hook
  console.log(data);

  //Unlike getTokenSilently used in the use-api.js hook file getAccessTokenWithPopup() let's us retrieve an access token will work in browsers where third-party cookies are blocked by default. 
  const getTokenAndTryAgain = async () => {
    await getAccessTokenWithPopup(opts);
    refresh();
  };

  //return destructured object values from useApi hook
  //return getTokenAndTryAgain function as a method to use
  return ({
    opts: opts,
    data: data,
    loading: loading,
    error: error,
    refresh: refresh,
    getTokenAndTryAgain: getTokenAndTryAgain
  })
  
}