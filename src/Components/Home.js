import { useApi } from "../hooks/useApi";
import React, { useState, useEffect } from "react";
import Carousel from "./carousel/Carousel";
import VideoWithProducts from "./video-with-products/VideoWithProducts";
import videoUrl from "../assets/video/jordan1-chicago.mp4";

const Home = () => {
  const { data } = useApi({
    url: process.env.REACT_APP_API_URL_GET_PRODUCTS,
    fetchRequest: true,
    method: "GET",
  });

  const items = useApi({
    url: process.env.REACT_APP_API_URL_GET_PRODUCTS_JORDAN_1,
    fetchRequest: true,
    method: "GET",
  });

  return (
    <div className="main home">
      <VideoWithProducts url={videoUrl} items={items.data} />
      <Carousel items={data} />
    </div>
  );
};

export default Home;
