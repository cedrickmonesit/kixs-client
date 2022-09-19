import React from "react";
import { useApi } from "../hooks/use-api";

const Favorites = () => {

    // resource url the endpoint
    const url = process.env.REACT_APP_API_URL_FAVORITES;

    // options for fetch method
    const opts = {
        audience: process.env.REACT_APP_BACKEND_AUDIENCE,
        method: 'GET',
        audience: process.env.REACT_APP_BACKEND_AUDIENCE,
        headers: {
            contentType: "'Content-Type:' 'application/json'",
        },
    }
    const { data } = useApi(url, opts);
    console.log(data);

    

  return (
  <div>
    <p>
        Favorites
    </p>
</div>);
};

export default Favorites;