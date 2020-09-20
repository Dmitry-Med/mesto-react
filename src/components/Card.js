import React from "react";

function Card({ card, onCardClick, onTrashClick }) {
  return (
    <li className="card">
      <img
        src={card.link}
        alt={card.name}
        className="card__image"
        onClick={(_) => onCardClick(card)}
      />
      <button
        type="button"
        className="card__trash"
        onClick={onTrashClick}
      ></button>
      <div className="card__text-box">
        <h3 className="card__title">{card.name}</h3>
        <div className="card__like-box">
          <button type="button" className="card__like"></button>
          <p className="card__like-counter">{card.likes.length}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;
