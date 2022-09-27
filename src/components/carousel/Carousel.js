import "./carousel.scss";
import Slider from "react-slick";
import React from "react";
import Card from "../card/Card";
import Modal from "../modal/modal";

const Carousel = ({ items, title }) => {
  const renderSlider = (products) => {
    if (products) {
      const settings = {
        dots: false,
        infinite: true,
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
      const cards = products.map((product, index) => {
        return <Card key={`${product.primaryName}-${index}`} item={product} name={`${product.primaryName}-${index}`} />;
      });

      return <Slider {...settings}>{cards}</Slider>;
    }
  };

  const renderModals = (products) => {
    if (products) {
      const modals = products.map((product, index) => {
        return <Modal key={`${product.showSecondaryName}-${index}`} item={product} />;
      });

      return modals;
    }
  };

  return (
    <React.Fragment>
      <div className="carousel__title-container">
        <p className="carousel__title">{title}</p>
      </div>
      <div className="carousel">
        <div className="carousel__container">
          {renderModals(items.response.products)}
          {renderSlider(items.response.products)}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Carousel;
