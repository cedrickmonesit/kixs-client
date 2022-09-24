import Slider from "react-slick";
import { useEffect, useState } from "react";
import Card from "../card/Card";
import { render } from "@testing-library/react";

const Carousel = ({ items }) => {
  const renderSlider = (products) => {
    if (products) {
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
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
