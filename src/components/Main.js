import React, { useState, useEffect } from "react";
import editButton from "../images/pen.svg";
import addButton from "../images/plus.svg";
import Card from "./Card";
import { api } from "../utils/api.js";

function Main({
  onEditProfile,
  onAddPlace,
  onEditAvatar,
  onTrashClick,
  onCardClick,
}) {
  const [userName, setUserName] = useState("Жак-Ив Кусто");
  const [userDescription, setUserDescription] = useState(
    "Исследователь океана"
  );
  const [userAvatar, setUserAvatar] = useState();
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getAppInfo().then((res) => {
      const [cards, info] = res;
      setUserName(info.name);
      setUserDescription(info.about);
      setUserAvatar(info.avatar);
      setCards(cards);
    });
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <button
          type="button"
          className="profile__avatar "
          onClick={onEditAvatar}
          style={{ backgroundImage: ` url(${userAvatar})` }}
        ></button>
        <div className="profile__text-box">
          <div className="profile__name-box">
            <h1 className="profile__name">{userName}</h1>
            <button
              className="edit-button edit-button_opened"
              onClick={onEditProfile}
            >
              <img
                className="edit-button__img"
                src={editButton}
                alt="Кнопка редактирования"
              />
            </button>
          </div>
          <p className="profile__about">{userDescription}</p>
        </div>
        <button className="add-button add-button_opened" onClick={onAddPlace}>
          <img
            className="add-button__img"
            src={addButton}
            alt="Кнопка Добавить"
          />
        </button>
      </section>
      <section className="cards" aria-label="Карточки">
        <ul className="cards__list">
          {cards.map((card, i) => (
            <Card
              key={i}
              card={card}
              onCardClick={onCardClick}
              onTrashClick={onTrashClick}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
