import Slider from "react-slick";
import React, { useEffect, useState } from "react";
import Card from "../card/Card";
import "./carousel.scss";

const Carousel = ({ items }) => {
  const renderSlider = (products) => {
    if (products) {
      const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
        initialSlide: 0,
        swipeToSlide: true,
        responsive: [
          {
            breakpoint: 1150,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 5,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 980,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
            },
          },
          {
            breakpoint: 850,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            },
          },
          {
            breakpoint: 400,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };

      console.log(products);

      const cards = products.map((product, index) => {
        return (
          <Card
            key={`${product.primaryName}-${index}`}
            item={product}
            name={`${product.primaryName}-${index}`}
          />
        );
      });

      return <Slider {...settings}>{cards}</Slider>;
    }
  };

  return (
    <div className="carousel">
      <div className="carousel__container">
        {renderSlider(items.response.products)}
      </div>
    </div>
  );
};

export default Carousel;
