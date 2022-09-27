import "./modal.scss";
import { TiDelete } from "react-icons/ti";
import { FaProductHunt } from "react-icons/fa";
import React from "react";

const Modal = ({ item }) => {
  const handleHideModal = (event) => {
    document.querySelector(`.modal-${item.id}`).classList.add("hide");
    document.querySelector(`.modal-overlay-${item.id}`).classList.add("hide");
  };

  return (
    <React.Fragment>
      <div className={`modal modal-${item.id} hide`}>
        <button className={`modal-delete-btn modal-delete-btn-${item.id}`} onClick={(event) => handleHideModal(event)}>
          <TiDelete className="modal__delete-icon" />
        </button>
        <div className="modal-container">
          <div className="modal-image__container">
            <img className="modal-image" src={item.images[2]} alt={`${item.primaryName} ${item.secondaryName} image`} />
          </div>
          <div className="modal-content__container">
            <p className="modal-content__title">{item.primaryName}</p>
            <p className="modal-content__subtitle">{item.secondaryName}</p>
            <p className="modal-content__msrp">{`$${item.msrp}`}</p>
            <p className="modal-content__text">{item.description}</p>
          </div>
        </div>
      </div>
      <div className={`modal-overlay modal-overlay-${item.id} hide`} onClick={(event) => handleHideModal(event)}></div>
    </React.Fragment>
  );
};

export default Modal;
