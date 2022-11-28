//Constants
const cardSection = document.querySelector(".elements");
const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__job");
const buttonEdit = document.querySelector(".profile__edit-button");
const buttonAdd = document.querySelector(".profile__add-button");
const buttonCloseProfile = document.querySelector(".popup__close-button_profile");
const buttonClosePlace = document.querySelector(".popup__close-button_place");
const buttonCloseImage = document.querySelector(".popup__close-button_image");
const popupProfile = document.querySelector(".popup_profile");
const popupPlace = document.querySelector(".popup_place");
const formSaveProfile = document.querySelector(".popup__data_profile");
const formSavePlace = document.querySelector(".popup__data_place");
const newName = document.querySelector(".popup__input_form_name");
const newJob = document.querySelector(".popup__input_form_job");
const NewPlaceName = document.querySelector(".popup__input_form_place-name");
const NewPlaceUrl = document.querySelector(".popup__input_form_url");
const popupImage = document.querySelector(".popup_image");
const newImage = document.querySelector(".popup__image");
const newTitle = document.querySelector(".popup__image-title");
const initCard = document.querySelector("#first-cards").content;
const likeClick = (e) => {
  e.target.classList.toggle('element__heart_active');
}
//


//Initial Cards Creation
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  },
  {
    name: 'Владимир',
    link: 'https://images.unsplash.com/photo-1589018943871-1cfb223dc7c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  },
  {
    name: 'Москва',
    link: 'https://images.unsplash.com/photo-1578632220633-824351c0b694?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  },
  {
    name: 'Санкт-Петербург',
    link: 'https://images.unsplash.com/photo-1625564634286-69db27862769?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80'
  },
  {
    name: 'Калининград',
    link: 'https://images.unsplash.com/photo-1622903741069-e1411285c9fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  },
  {
    name: 'Челябинск',
    link: 'https://images.unsplash.com/photo-1589793242094-496c3f75bcea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80'
  },
  {
    name: 'Казань',
    link: 'https://images.unsplash.com/photo-1592434101771-225a55c5b664?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80' 
  }
];

function createCard (name, link) {
  let Card = initCard.querySelector(".element").cloneNode(true);
  Card.querySelector(".element__image").src=link;
  Card.querySelector(".element__text").textContent=name;
  Card.querySelector(".element__image").alt=name;
  Card.querySelector(".element__heart").addEventListener('click', likeClick);
  Card.querySelector(".element__image").addEventListener('click', function() {
    popupImage.classList.add("popup_opened");
    newImage.src=link;
    newImage.alt=name;
    newTitle.textContent=name; 
})
  Card.querySelector(".element__bin").addEventListener("click", function() {
  cardSection.removeChild(Card);
});
  return Card;
};

for (let i=0; i<initialCards.length; i++) {
  cardSection.append(createCard(initialCards[i].name,initialCards[i].link));
};
//

//Open-close functions
function openPopup (popup) {
  popup.classList.toggle("popup_opened");
};
function closePopup (popup) {
  popup.classList.toggle("popup_opened");
};

//

//Saving functions

function infoChangeProfile(evt) {
    evt.preventDefault()
    profileName.textContent = newName.value;
    profileJob.textContent = newJob.value;
    closePopup(popupProfile);
}


function infoAddPlace(evt) {
    evt.preventDefault()
    cardSection.prepend(createCard(NewPlaceName.value, NewPlaceUrl.value));
    closePopup(popupPlace);
}
//

//Buttons
buttonEdit.addEventListener('click', () => {
  openPopup(popupProfile);
  newName.value = profileName.textContent;
  newJob.value = profileJob.textContent;
});
buttonCloseProfile.addEventListener('click', () => {
  closePopup(popupProfile);
});

buttonAdd.addEventListener('click', () => {
  openPopup(popupPlace);
});

buttonClosePlace.addEventListener('click', () => {
  closePopup(popupPlace);
});

buttonCloseImage.addEventListener('click', () => {
  closePopup(popupImage);
}); 

formSaveProfile.addEventListener('submit', infoChangeProfile);
formSavePlace.addEventListener('submit', infoAddPlace);