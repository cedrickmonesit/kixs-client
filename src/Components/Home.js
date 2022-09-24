import { useApi } from "../hooks/useApi";
import React, { useEffect } from "react";
import Carousel from "./carousel/Carousel";

const Home = () => {
  const { data } = useApi({
    url: process.env.REACT_APP_API_URL_GET_PRODUCTS,
    fetchRequest: true,
    method: "GET",
  });

  return (
    <div className="main home">
      <h1 className="title">Home</h1>
      <Carousel items={data} />
    </div>
  );
};

export default Home;
