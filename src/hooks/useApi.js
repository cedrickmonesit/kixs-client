import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const useApi = ({ url, fetchRequest = true, method, requestBody }) => {
  const { getAccessTokenSilently, isAuthenticated } = useAuth0();

  // response data and fetching state
  const [data, setData] = useState({
    response: [],
    isFetchingData: true,
  });

  // update endpoint url and enable/disabe request state
  const [requestState, setRequestState] = useState({
    endpoint: url,
    doRequest: fetchRequest,
    requestType: method,
    body: requestBody,
  });

  const [refresh, setRefresh] = useState(false);

  let { endpoint, doRequest, requestType, body } = requestState;

  const requestApi = async () => {
    // invoke endpoint if it is a function
    let endpointUrl = typeof endpoint === "function" ? endpoint() : endpoint;
    console.log(requestType);
    try {
      const audience = process.env.REACT_APP_BACKEND_AUDIENCE;
      const accessToken = await getAccessTokenSilently({ audience });
      const header = {
        Accept: "application/json",
        "Content-Type": "application/json",
        Origin: "http://localhost:3000",
        Authorization: `Bearer ${accessToken}`,
      };

      let headers, request, response;
      switch (requestType) {
        case "GET":
          headers = new Headers(header);

          request = new Request(endpointUrl, {
            audience: audience,
            method: "GET",
            headers: headers,
            mode: "cors",
            credentials: "same-origin", // include, *same-origin, omit
          });

          response = await fetch(request)
            .then((data) => {
              return data.json();
            })
            .catch((error) => {
              console.log(error);
            });

          //set data state as response
          setData({ response: response, isFetchingData: false });

          break;
        case "POST":
          //(`Deleting: ${body.id}`);
          headers = new Headers(header);

          request = {
            audience: audience,
            method: "POST",
            headers: header,
            mode: "cors",
            body: JSON.stringify(body), // body data type must match "Content-Type" header
          };
          console.log(body);
          // Default options are marked with *
          response = await fetch(endpointUrl, request)
            .then((data) => {
              return data.json();
            })
            .catch((error) => {
              console.log(error);
            });

          //set data state as response
          setData({ response: response, isFetchingData: false });

          break;
        case "PUT":
          //(`Deleting: ${body.id}`);
          headers = new Headers(header);

          request = new Request(endpointUrl, {
            audience: audience,
            method: "PUT",
            headers: headers,
            mode: "cors",
            credentials: "same-origin", // include, *same-origin, omit
            body: JSON.stringify(body), // body data type must match "Content-Type" header
          });
          // Default options are marked with *
          response = await fetch(request)
            .then((data) => {
              return data.json();
            })
            .catch((error) => {
              console.log(error);
            });

          //set data state as response
          setData({ response: response, isFetchingData: false });

          break;
        case "DELETE":
          //(`Deleting: ${body.id}`);
          headers = new Headers(header);

          request = new Request(endpointUrl, {
            audience: audience,
            method: "DELETE",
            headers: headers,
            mode: "cors",
            credentials: "same-origin", // include, *same-origin, omit
            body: JSON.stringify(body), // body data type must match "Content-Type" header
          });
          // Default options are marked with *
          response = await fetch(request)
            .then((data) => {
              return data.json();
            })
            .catch((error) => {
              console.log(error);
            });

          //set data state as response
          setData({ response: response, isFetchingData: false });

          break;

        default:
          console.log("Unsupported request type");
          return false;
      }
    } catch (e) {
      console.error(e);
      setData({ ...data, isError: true });
    }
  };

  useEffect(() => {
    if (doRequest) {
      requestApi();
    }
  }, [requestState, refresh]); // Retry request when requestState object changes

  return {
    data,

    // send closure setRequestState to update endpoint url or doRequest state from component
    setRequestState: ({ url = "", fetchRequest = false, method = "", requestBody = {} }) => {
      setRequestState({
        endpoint: url,
        doRequest: true,
        requestType: method,
        body: requestBody,
      });
    },
    setRefresh: (refresh = false) => {
      setRefresh(refresh);
    },
  };
};
