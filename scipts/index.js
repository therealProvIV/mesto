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
const newPlaceName = document.querySelector(".popup__input_form_place-name");
const newPlaceUrl = document.querySelector(".popup__input_form_url");
const popupImage = document.querySelector(".popup_image");
const newImage = document.querySelector(".popup__image");
const newTitle = document.querySelector(".popup__image-title");
const initCard = document.querySelector("#first-cards").content;
const popupsAll= Array.from(document.querySelectorAll(".popup"));
//


//Initial Cards Creation
function createCard (name, link) {
  const card = initCard.querySelector(".element").cloneNode(true);
  card.querySelector(".element__image").src=link;
  card.querySelector(".element__text").textContent=name;
  card.querySelector(".element__image").alt=name;
  card.querySelector(".element__heart").addEventListener('click', handleLikeClick);
  card.querySelector(".element__image").addEventListener('click', function() {
    newImage.src=link;
    newImage.alt=name;
    newTitle.textContent=name; 
    openPopup(popupImage);
});
  card.querySelector(".element__bin").addEventListener("click", function() {
  cardSection.removeChild(card);
});
  return card;
};


//Open-close functions
function closePopup (popup) {
  popup.classList.toggle("popup_opened");
};
function closeOnEsc(e) {
  if (e.key === 'Escape') {
    closePopup(document.querySelector('.popup_opened'));
  }
};
function openPopup (popup) {
  popup.classList.toggle("popup_opened");
  document.addEventListener('keydown', closeOnEsc);
};

//

//Like function
function handleLikeClick(e){
  e.target.classList.toggle('element__heart_active');
}

//Saving functions
function changeProfileInfo(evt) {
    evt.preventDefault()
    profileName.textContent = newName.value;
    profileJob.textContent = newJob.value;
    closePopup(popupProfile);
}


function addPlaceInfo(evt) {
    evt.preventDefault()
    cardSection.prepend(createCard(newPlaceName.value, newPlaceUrl.value));
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
  newPlaceName.value = '';
  newPlaceUrl.value = '';
});

buttonClosePlace.addEventListener('click', () => {
  closePopup(popupPlace);
});

buttonCloseImage.addEventListener('click', () => {
  closePopup(popupImage);
}); 

formSaveProfile.addEventListener('submit', changeProfileInfo);
formSavePlace.addEventListener('submit', addPlaceInfo);

for (let i=0; i<initialCards.length; i++) {
  cardSection.append(createCard(initialCards[i].name,initialCards[i].link));
};

popupsAll.forEach(function(e) {
  e.addEventListener('mousedown', (evt) => {
    if (evt.target === evt.currentTarget) {
      closePopup(e);
    };
  });
});