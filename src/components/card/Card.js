import "./card.scss";
import { useNavigate, Link } from "react-router-dom";
import { TiDelete } from "react-icons/ti";
import { FaEye, FaHeart } from "react-icons/fa";
import { useState } from "react";
import { useApi } from "../../hooks/useApi";

const Card = ({
  item,
  name,
  isDeletable,
  showContent = true,
  showSecondaryName = false,
  showButtons = true,
}) => {
  const [response, setResponse] = useState(false);
  const { data, setRequestState } = useApi({ url: "", fetchRequest: false });

  const navigate = useNavigate();

  const handleDeleteEvent = (event) => {
    event.preventDefault();
    const target = event.target.tagName;
    console.log(target);

    if (target === "path" || target === "svg") {
      setRequestState({
        url: process.env.REACT_APP_API_URL_REMOVE_PRODUCT_FAVORITES,
        fetchRequest: true,
        method: "DELETE",
        requestBody: { id: item.id },
      });
      console.log(name);
      if (name) {
        document.querySelector(`.${name}`).classList.add("hide");
      }
    } else {
      navigate(`/product/${item.id}`);
    }
  };

  const renderDeleteButton = () => {
    if (isDeletable) {
      return (
        <div className="card__icon-delete-container">
          <TiDelete className="card__icon-delete-button" />
        </div>
      );
    }
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

  const renderButtons = () => {
    if (showButtons) {
      return (
        <div className="card__buttons">
          <button className="card__button">
            <FaEye className="icon icon-eye" />
          </button>
          <button className="card__button">
            <FaHeart className="icon icon-heart" />
          </button>
        </div>
      );
    }
  };

  return (
    <div className="card">
      <Link
        className="card__link"
        onClick={(event) => handleDeleteEvent(event)}
        to={`/product/${item.id}`}
      >
        {renderDeleteButton()}
        <img
          className="card__image"
          src={item.images[0]}
          alt={`${item.primaryName} ${item.secondaryName} `}
        />
        {renderCardContent(item)}
      </Link>
      {renderButtons()}
    </div>
  );
};

export default Card;
