import { useApi } from "../hooks/useApi";
import React, { useState, useEffect } from "react";
import Carousel from "./carousel/Carousel";
import VideoWithProducts from "./video-with-products/VideoWithProducts";
import videoUrl from "../assets/video/jordan1-chicago.mp4";
import HeroVideo from "./hero-video/HeroVideo";

const Home = () => {
  const { data } = useApi({
    url: process.env.REACT_APP_API_URL_GET_PRODUCTS,
    fetchRequest: true,
    method: "GET",
  });

  const jordan1 = useApi({
    url: process.env.REACT_APP_API_URL_GET_PRODUCTS_JORDAN_1,
    fetchRequest: true,
    method: "GET",
  });

  const jordan4 = useApi({
    url: process.env.REACT_APP_API_URL_GET_PRODUCTS_JORDAN_4,
    fetchRequest: true,
    method: "GET",
  });

  const jordan11 = useApi({
    url: process.env.REACT_APP_API_URL_GET_PRODUCTS_JORDAN_11,
    fetchRequest: true,
    method: "GET",
  });

  return (
    <div className="main home">
      <HeroVideo />
      <VideoWithProducts url={videoUrl} items={jordan1.data} title={"Jordan 1 Retro"} />
      <Carousel items={jordan4.data} title={"Jordan 4 Retro"} />
      <Carousel items={jordan11.data} title={"Jordan 11 Retro"} />
    </div>
  );
};

export default Home;
