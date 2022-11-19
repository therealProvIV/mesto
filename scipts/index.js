let profileName = document.querySelector(".profile__name");
let profileJob = document.querySelector(".profile__job");
let editButton = document.querySelector(".profile__edit-button");
let closeButton = document.querySelector(".popup__close-button");
let popup = document.querySelector(".popup");
let formsave = document.querySelector(".popup__data");
let saveButton = document.querySelector(".popup__save-button");
let newName = document.querySelector (".popup__input_form_name");
let newJob = document.querySelector (".popup__input_form_job");

function clickOpen() {
    popup.classList.add("popup_opened");
    newName.value = profileName.textContent;
    newJob.value = profileJob.textContent;
}

function clickClose() {
    popup.classList.remove("popup_opened");
}

function infoChange(evt) {
    evt.preventDefault()
    profileName.textContent = newName.value;
    profileJob.textContent = newJob.value;
    clickClose();
}

editButton.addEventListener('click', clickOpen);
closeButton.addEventListener('click', clickClose);
formsave.addEventListener('submit', infoChange);