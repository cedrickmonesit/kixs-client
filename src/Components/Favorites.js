import React from "react";
import { useApi } from "../hooks/use-api";

const Favorites = () => {
    const url = process.env.REACT_APP_API_URL_FAVORITES;
    const opts = {
        audience: process.env.REACT_APP_BACKEND_AUDIENCE
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