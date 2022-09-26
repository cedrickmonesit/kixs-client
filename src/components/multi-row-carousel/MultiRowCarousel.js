import Slider from "react-slick";
import React from "react";
import Card from "../card/Card";
import "../carousel/carousel.scss";
import "./multrowcarousel.scss";

const MultiRowCarousel = ({ items, showContent }) => {
  const renderSlider = (products) => {
    if (products) {
      const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        rows: 2,
        initialSlide: 0,
        swipeToSlide: true,
        responsive: [
          {
            breakpoint: 1650,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
            },
          },
          {
            breakpoint: 1350,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 850,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
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
            showContent={false}
            showSecondaryName={true}
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

export default MultiRowCarousel;
