import "./card.scss";
import { useNavigate, Link } from "react-router-dom";
import { TiDelete } from "react-icons/ti";
import { FaEye, FaHeart } from "react-icons/fa";
import React, { useState } from "react";
import { useApi } from "../../hooks/useApi";

const Card = ({ item, name, isDeletable, showContent = true, showSecondaryName = false, showButtons = true }) => {
  const [response, setResponse] = useState(false);
  const deleteFavorite = useApi({ url: null, fetchRequest: false });

  const navigate = useNavigate();

  const handleDeleteEvent = (event) => {
    deleteFavorite.setRequestState({
      url: process.env.REACT_APP_API_URL_REMOVE_PRODUCT_FAVORITES,
      fetchRequest: true,
      method: "DELETE",
      requestBody: { id: item.id },
    });
    if (name) {
      document.getElementById(`${name}`).classList.add("hide");
    }
  };

  const renderDeleteButton = () => {
    if (isDeletable) {
      return (
        <button className="card__icon-delete-container" onClick={(event) => handleDeleteEvent(event)}>
          <TiDelete className="card__icon-delete-button" />
        </button>
      );
    }
  };

  const addFavorite = useApi({ url: null, fetchRequest: false });

  const handleAddEvent = (event, item) => {
    document.querySelector(`.icon-heart-${item.id}`).style.color = "#d2001a";
    addFavorite.setRequestState({
      url: process.env.REACT_APP_API_URL_ADD_PRODUCT_FAVORITES,
      fetchRequest: true,
      method: "POST",
      requestBody: { id: item.id },
    });
  };
  const renderCardContent = (item) => {
    if (showContent) {
      return (
        <div className="card-body">
          <p className="card-body__title card-body__title-primary-name">{`${item.primaryName}`}</p>
          <p className="card-body__title card-body__title-secondary-name">{`${item.secondaryName}`}</p>
          <p className="card-body__msrp">{`$${item.msrp}`}</p>
        </div>
      );
    }

    if (showSecondaryName && !showContent) {
      return (
        <div className="card-body">
          <p className="card-body__title card-body__title-secondary-name">{`${item.secondaryName}`}</p>
        </div>
      );
    }
  };

  const handleShowModal = (event, item) => {
    document.querySelector(`.modal-${item.id}`).classList.remove("hide");
    document.querySelector(`.modal-overlay-${item.id}`).classList.remove("hide");
  };

  const renderButtons = (item) => {
    if (showButtons) {
      return (
        <div className="card__buttons">
          <button className={`card__button card__button-${item.id}`} onClick={(event) => handleShowModal(event, item)}>
            <FaEye className="icon icon-eye" />
          </button>
          <button className="card__button" onClick={(event) => handleAddEvent(event, item)}>
            <FaHeart className={`icon icon-heart icon-heart-${item.id}`} />
          </button>
        </div>
      );
    }
  };

  return (
    <div className="card">
      {renderDeleteButton()}
      <div className="card__link">
        <img className="card__image" src={item.images[0]} alt={`${item.primaryName} ${item.secondaryName} `} />
        {renderCardContent(item)}
      </div>
      {renderButtons(item)}
    </div>
  );
};

export default Card;
