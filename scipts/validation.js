//Constants
const validationList = {
    formSelector: '.popup__data',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save-button',
    inactiveButtonClass: 'popup__save-button_closed',
    inputErrorClass: 'popup__input_error',
    errorClass: 'popup__input-error_active'
  };
//

//Functions (Errors)
function showInputError(formElement, inputElement, errorMessage, validationList) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(validationList.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(validationList.errorClass);
  };

  function hideInputError(formElement, inputElement, validationList){
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(validationList.inputErrorClass);
    errorElement.classList.remove(validationList.errorClass);
    errorElement.textContent = '';
  };

  //Functions (Validity)
  function checkValidity(formElement, inputElement, validationList){
    if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage, validationList);
    } else {
      hideInputError(formElement, inputElement, validationList);
    }
  };

  function hasInvalidInput(inputList){
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }
  //

  //Functions (Button)
  function buttonState(inputList, buttonElement, validationList){
    if (hasInvalidInput(inputList)) {
      buttonElement.classList.add(validationList.inactiveButtonClass);
      buttonElement.setAttribute('disabled', 'true');
    } else {
      buttonElement.classList.remove(validationList.inactiveButtonClass);
      buttonElement.removeAttribute('disabled');
    }
  }

  //Functions (Listeners)
  function setEventListeners(formElement, validationList){
    const inputList = Array.from(formElement.querySelectorAll(validationList.inputSelector));
    const buttonElement = formElement.querySelector(validationList.submitButtonSelector);
    buttonState(inputList, buttonElement, validationList);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        checkValidity(formElement, inputElement, validationList);
        buttonState(inputList, buttonElement, validationList);
      });
    });
  };

    function enableValidation(validationList){
    formList = Array.from(document.querySelectorAll(validationList.formSelector));
    formList.forEach((formElement) => {
      setEventListeners(formElement, validationList);
    });
  };

  enableValidation(validationList);