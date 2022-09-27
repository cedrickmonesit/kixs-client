import React from "react";
import "./favorites.scss";
import { useApi } from "../../hooks/useApi";
import List from "../list/List";

const Favorites = () => {
  const { data } = useApi({
    url: process.env.REACT_APP_API_URL_FAVORITES,
    fetchRequest: true,
    method: "GET",
    requestBody: {},
  });

  const renderFavorites = () => {
    return <List items={data.response.products} showButtons={false} isDeletable={true} />;
  };

  if (!data.isFetchingData) {
    return (
      <div className="main favorites">
        <h1 className="title favorites__title">Favorites</h1>
        <div className="favorites__container">{renderFavorites()}</div>
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default Favorites;
