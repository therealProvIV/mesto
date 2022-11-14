let profileName = document.querySelector(".profile__name");
let profileJob = document.querySelector(".profile__job");
let editButton = document.querySelector(".profile__editButton");
let closeButton = document.querySelector(".popup__closeButton");
let popup = document.querySelector(".popup");
let formsave = document.querySelector(".popup__data");
let saveButton = document.querySelector(".popup__saveButton");
let newName = document.querySelector (".popup__name");
let newJob = document.querySelector (".popup__job");

function clickOpen() {
    popup.classList.add("popup_type_active");
    newName.value = profileName.textContent;
    newJob.value = profileJob.textContent;
}
editButton.addEventListener('click', clickOpen);

function clickClose() {
    popup.classList.remove("popup_type_active");
}
closeButton.addEventListener('click', clickClose);

function infoChange(evt) {
    evt.preventDefault()
    profileName.textContent = newName.value;
    profileJob.textContent = newJob.value;
    popup.classList.remove("popup_type_active");
}
formsave.addEventListener('submit', infoChange);