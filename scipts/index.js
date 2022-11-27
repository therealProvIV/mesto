const elements = document.querySelector(".elements");
const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__job");
const editButton = document.querySelector(".profile__edit-button");
const addButton = document.querySelector(".profile__add-button");
const closeButtonProfile = document.querySelector(".popup__close-button_profile");
const closeButtonPlace = document.querySelector(".popup__close-button_place");
const closeButtonImage = document.querySelector(".popup__close-button_image");
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
const sizeSwitch = document.querySelector(".popup__container_image");


//Initial Cards
const initCard = document.querySelector("#first-cards").content;
const likeClick = (e) => {
  e.target.classList.toggle('element__heart_active');
}


const initCard1 = initCard.querySelector(".element").cloneNode(true);
initCard1.querySelector(".element__image").src='https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg';
initCard1.querySelector(".element__text").textContent="Архыз";
initCard1.querySelector(".element__heart").addEventListener('click', likeClick);
initCard1.querySelector(".element__image").addEventListener('click', function() {
  popupImage.classList.add("popup_opened");
  newImage.src='https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg';
  newTitle.textContent="Архыз";
});


const initCard2 = initCard.querySelector(".element").cloneNode(true);
initCard2.querySelector(".element__image").src='https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg';
initCard2.querySelector(".element__text").textContent="Челябинская область";
initCard2.querySelector(".element__heart").addEventListener('click', likeClick);
initCard2.querySelector(".element__image").addEventListener('click', function() {
  popupImage.classList.add("popup_opened");
  newImage.src='https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg';
  newTitle.textContent="Челябинская область";
});

const initCard3 = initCard.querySelector(".element").cloneNode(true);
initCard3.querySelector(".element__image").src='https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg';
initCard3.querySelector(".element__text").textContent="Иваново";
initCard3.querySelector(".element__heart").addEventListener('click', likeClick);
initCard3.querySelector(".element__image").addEventListener('click', function() {
  popupImage.classList.add("popup_opened");
  newImage.src='https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg';
  newTitle.textContent="Иваново";
});

const initCard4 = initCard.querySelector(".element").cloneNode(true);
initCard4.querySelector(".element__image").src='https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg';
initCard4.querySelector(".element__text").textContent="Камчатка";
initCard4.querySelector(".element__heart").addEventListener('click', likeClick);
initCard4.querySelector(".element__image").addEventListener('click', function() {
  popupImage.classList.add("popup_opened");
  newImage.src='https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg';
  newTitle.textContent="Камчатка";
});

const initCard5 = initCard.querySelector(".element").cloneNode(true);
initCard5.querySelector(".element__image").src='https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg';
initCard5.querySelector(".element__text").textContent="Холмогорский район";
initCard5.querySelector(".element__heart").addEventListener('click', likeClick);
initCard5.querySelector(".element__image").addEventListener('click', function() {
  popupImage.classList.add("popup_opened");
  newImage.src='https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg';
  newTitle.textContent="Холмогорский район";
});

const initCard6 = initCard.querySelector(".element").cloneNode(true);
initCard6.querySelector(".element__image").src='https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg';
initCard6.querySelector(".element__text").textContent="Байкал";
initCard6.querySelector(".element__heart").addEventListener('click', likeClick);
initCard6.querySelector(".element__image").addEventListener('click', function() {
  popupImage.classList.add("popup_opened");
  newImage.src='https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg';
  newTitle.textContent="Байкал";
});

const initCard7 = initCard.querySelector(".element").cloneNode(true);
initCard7.querySelector(".element__image").src="./images/1.jpg";
initCard7.querySelector(".element__text").textContent="Владимир";
initCard7.querySelector(".element__heart").addEventListener('click', likeClick);
initCard7.querySelector(".element__image").addEventListener('click', function() {
  popupImage.classList.add("popup_opened");
  sizeSwitch.classList.add("popup__container_image-small");
  newImage.src="./images/1.jpg";
  newTitle.textContent="Владимир";
});

const initCard8 = initCard.querySelector(".element").cloneNode(true);
initCard8.querySelector(".element__image").src="/images/2.jpg";
initCard8.querySelector(".element__text").textContent="Москва";
initCard8.querySelector(".element__heart").addEventListener('click', likeClick);
initCard8.querySelector(".element__image").addEventListener('click', function() {
  popupImage.classList.add("popup_opened");
  sizeSwitch.classList.add("popup__container_image-small");
  newImage.src="/images/2.jpg";
  newTitle.textContent="Москва";
});

const initCard9 = initCard.querySelector(".element").cloneNode(true);
initCard9.querySelector(".element__image").src="/images/3.jpg";
initCard9.querySelector(".element__text").textContent="Санкт-Петербург";
initCard9.querySelector(".element__heart").addEventListener('click', likeClick);
initCard9.querySelector(".element__image").addEventListener('click', function() {
  popupImage.classList.add("popup_opened");
  sizeSwitch.classList.add("popup__container_image-small");
  newImage.src="/images/3.jpg";
  newTitle.textContent="Санкт-Петербург";
});

const initCard10 = initCard.querySelector(".element").cloneNode(true);
initCard10.querySelector(".element__image").src="/images/4.jpg";
initCard10.querySelector(".element__text").textContent="Калининград";
initCard10.querySelector(".element__heart").addEventListener('click', likeClick);
initCard10.querySelector(".element__image").addEventListener('click', function() {
  popupImage.classList.add("popup_opened");
  sizeSwitch.classList.add("popup__container_image-small");
  newImage.src="/images/4.jpg";
  newTitle.textContent="Калининград";
});

const initCard11 = initCard.querySelector(".element").cloneNode(true);
initCard11.querySelector(".element__image").src="/images/5.jpg";
initCard11.querySelector(".element__text").textContent="Челябинск";
initCard11.querySelector(".element__heart").addEventListener('click', likeClick);
initCard11.querySelector(".element__image").addEventListener('click', function() {
  popupImage.classList.add("popup_opened");
  sizeSwitch.classList.add("popup__container_image-small");
  newImage.src="/images/5.jpg";
  newTitle.textContent="Челябинск";
});

const initCard12 = initCard.querySelector(".element").cloneNode(true);
initCard12.querySelector(".element__image").src="/images/6.jpg";
initCard12.querySelector(".element__text").textContent="Казань";
initCard12.querySelector(".element__heart").addEventListener('click', likeClick);
initCard12.querySelector(".element__image").addEventListener('click', function() {
  popupImage.classList.add("popup_opened");
  sizeSwitch.classList.add("popup__container_image-small");
  newImage.src="/images/6.jpg";
  newTitle.textContent="Казань";
});


elements.prepend(initCard1, initCard2, initCard3, initCard4, initCard5, initCard6, initCard7, initCard8, initCard9, initCard10, initCard11, initCard12);
initCard1.querySelector(".element__bin").addEventListener("click", function() {
  elements.removeChild(initCard1);
});
initCard2.querySelector(".element__bin").addEventListener("click", function() {
  elements.removeChild(initCard2);
});
initCard3.querySelector(".element__bin").addEventListener("click", function() {
  elements.removeChild(initCard3);
});
initCard4.querySelector(".element__bin").addEventListener("click", function() {
  elements.removeChild(initCard4);
});
initCard5.querySelector(".element__bin").addEventListener("click", function() {
  elements.removeChild(initCard5);
});
initCard6.querySelector(".element__bin").addEventListener("click", function() {
  elements.removeChild(initCard6);
});
initCard7.querySelector(".element__bin").addEventListener("click", function() {
  elements.removeChild(initCard7);
});
initCard8.querySelector(".element__bin").addEventListener("click", function() {
  elements.removeChild(initCard8);
});
initCard9.querySelector(".element__bin").addEventListener("click", function() {
  elements.removeChild(initCard9);
});
initCard10.querySelector(".element__bin").addEventListener("click", function() {
  elements.removeChild(initCard10);
});
initCard11.querySelector(".element__bin").addEventListener("click", function() {
  elements.removeChild(initCard11);
});
initCard12.querySelector(".element__bin").addEventListener("click", function() {
  elements.removeChild(initCard12);
});



// Profile
function clickOpenProfile() {
    popupProfile.classList.toggle("popup_opened");
    newName.value = profileName.textContent;
    newJob.value = profileJob.textContent;
}

function clickCloseProfile() {
    popupProfile.classList.toggle("popup_opened");
}

function infoChangeProfile(evt) {
    evt.preventDefault()
    profileName.textContent = newName.value;
    profileJob.textContent = newJob.value;
    clickCloseProfile();
}

//Place
function clickOpenPlace() {
  popupPlace.classList.toggle("popup_opened");
}

function clickClosePlace() {
  popupPlace.classList.toggle("popup_opened");
}
function infoAddPlace(evt) {
    evt.preventDefault()
    const newCard = initCard.querySelector(".element").cloneNode(true);
    newCard.querySelector(".element__image").src=NewPlaceUrl.value;
    newCard.querySelector(".element__text").textContent=NewPlaceName.value;
    newCard.querySelector(".element__heart").addEventListener('click', likeClick);
    elements.prepend(newCard);
    newCard.querySelector(".element__bin").addEventListener("click", function() {
      elements.removeChild(newCard);
    });
    newCard.querySelector(".element__image").addEventListener('click', function() {
      popupImage.classList.add("popup_opened");
      newImage.src=NewPlaceUrl.value;
      newTitle.textContent=NewPlaceName.value;
    });
    clickClosePlace();
}

//Image
function ClickCloseImage() {
  popupImage.classList.remove("popup_opened");
  sizeSwitch.classList.remove("popup__container_image-small");
}


editButton.addEventListener('click', clickOpenProfile);
addButton.addEventListener('click', clickOpenPlace);
closeButtonProfile.addEventListener('click', clickCloseProfile);
closeButtonPlace.addEventListener('click', clickClosePlace);
closeButtonImage.addEventListener('click', ClickCloseImage);
formSaveProfile.addEventListener('submit', infoChangeProfile);
formSavePlace.addEventListener('submit', infoAddPlace);
