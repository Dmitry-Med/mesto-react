import React, { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isProfileOpen, setIsProfileEditOpen] = useState(false);
  const [isAvatarOpen, setIsAvatarOpen] = useState(false);
  const [isAddCardOpen, setIsAddCardOpen] = useState(false);
  const [isTrashOpen, setIsTrashOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  function handleEditAvatarClick() {
    setIsAvatarOpen(true);
  }
  function handleEditProfileClick() {
    setIsProfileEditOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddCardOpen(true);
  }

  function handleTrashClick() {
    setIsTrashOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsProfileEditOpen(false);
    setIsAddCardOpen(false);
    setIsAvatarOpen(false);
    setIsTrashOpen(false);
    setSelectedCard(null);
  }

  return (
    <div className="page">
      <div className="page__container">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onEditAvatar={handleEditAvatarClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
          onTrashClick={handleTrashClick}
        />
        <Footer />
        <PopupWithForm
          name="edit"
          isOpen={isProfileOpen}
          title="Редактировать профиль"
          buttonText="Сохранить"
          children={
            <>
              <div className="popup__input-field">
                <input
                  type="text"
                  name="username"
                  placeholder="Имя"
                  className="popup__input  popup__input_type_name"
                  required
                  minLength="2"
                  maxLength="20"
                />
                <span className="popup__error" id="username-error"></span>
              </div>
              <div className="popup__input-field">
                <input
                  type="text"
                  name="about"
                  placeholder="Род занятий"
                  className=" popup__input popup__input_type_about"
                  required
                  minLength="2"
                  maxLength="200"
                />
                <span className="popup__error" id="about-error"></span>
              </div>
            </>
          }
          onClose={closeAllPopups}
        />

        <PopupWithForm
          name="add"
          isOpen={isAddCardOpen}
          title="Новое место"
          buttonText="Создать"
          children={
            <>
              <div className="popup__input-field">
                <input
                  type="text"
                  name="name"
                  placeholder="Название"
                  className="popup__input popup__input_type_cardname"
                  required
                  minLength="1"
                  maxLength="30"
                />
                <span className="popup__error" id="name-error"></span>
              </div>
              <div className="popup__input-field">
                <input
                  type="url"
                  name="link"
                  placeholder="Ссылка на картинку"
                  className=" popup__input popup__input_type_link"
                  required
                />
                <span className="popup__error" id="link-error"></span>
              </div>
            </>
          }
          onClose={closeAllPopups}
        />

        <PopupWithForm
          name="update"
          isOpen={isAvatarOpen}
          title="Обновить аватар"
          buttonText="Сохранить"
          children={
            <>
              <div className="popup__input-field">
                <input
                  type="url"
                  name="avatar"
                  placeholder="Ссылка на аватар"
                  className=" popup__input popup__input_type_avatar"
                  required
                />
                <span className="popup__error" id="avatar-error"></span>
              </div>
            </>
          }
          onClose={closeAllPopups}
        />

        <PopupWithForm
          name="confirm"
          isOpen={isTrashOpen}
          title="Вы уверены?"
          buttonText="Да"
          onClose={closeAllPopups}
        />
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </div>
    </div>
  );
}

export default App;
