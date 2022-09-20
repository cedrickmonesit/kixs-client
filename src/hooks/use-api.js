import { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

export const useApi = (url, options = {}) => { // useApi function has two parameters
  const { getAccessTokenSilently } = useAuth0();
  const [state, setState] = useState({
    error: null,
    loading: true,
    data: null,
  });
  const [refreshIndex, setRefreshIndex] = useState(0);

  useEffect(() => {
    (async () => {
      try {
        const { audience, scope, method, headers } = options; // deconstructing options object
        // Auth0 access token with added roles and permissions set in the Auth0 dashboard for API RBAC settings
        const accessToken = await getAccessTokenSilently({ audience, scope });
        const fetchOptions = {
          audience: audience,
          method: method,
          headers: {
            ...headers,
            // Add the Authorization header to the existing headers
            Authorization: `Bearer ${accessToken}`,
          },

        };

        // check if body property exists in options
        if(options.hasOwnProperty('body')) {
          // add body property with options.body as value
          fetchOptions['body'] = options.body
        }
        console.log(fetchOptions);

        
        const res = await fetch(url, fetchOptions);
        setState({
          ...state,
          data: await res.json(),
          error: null,
          loading: false,
        });
      } catch (error) {
        setState({
          ...state,
          error,
          loading: false,
        });
      }
    })();
  }, [refreshIndex]);

  return {
    ...state,
    refresh: () => setRefreshIndex(refreshIndex + 1),
  };
};