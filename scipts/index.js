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
const handleLikeClick = (e) => {
  e.target.classList.toggle('element__heart_active');
}
//


//Initial Cards Creation
function createCard (name, link) {
  const card = initCard.querySelector(".element").cloneNode(true);
  card.querySelector(".element__image").src=link;
  card.querySelector(".element__text").textContent=name;
  card.querySelector(".element__image").alt=name;
  card.querySelector(".element__heart").addEventListener('click', handleLikeClick);
  card.querySelector(".element__image").addEventListener('click', function() {
    popupImage.classList.add("popup_opened");
    newImage.src=link;
    newImage.alt=name;
    newTitle.textContent=name; 
})
  card.querySelector(".element__bin").addEventListener("click", function() {
  cardSection.removeChild(card);
});
  return card;
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