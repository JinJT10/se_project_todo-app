class FormValidator {
    constructor(settings, formElement) {
        this._settings = settings
        this._formElement = formElement
    }
    
    _setEventListeners() {
        this._inputList = Array.from(this._formElement.querySelectorAll(this._settings.inputSelector));
        this._formSubmitBtn = this._formElement.querySelector(this._settings.submitButtonSelector);
        this._toggleButtonState();
        this._inputList.forEach((input) => {
            input.addEventListener("input", () => {
                this._checkInputValidity(input);
                this._toggleButtonState();
            });
            
        });
    }

    _checkInputValidity(input) {
        const errorElement = this._formElement.querySelector(`#${input.id}-error`);
            
        if (!input.validity.valid) {
            errorElement.textContent = input.validationMessage;
            errorElement.classList.add(this._settings.errorClass);
            errorElement.classList.add(this._settings.inputErrorClass);
        } else {
            errorElement.textContent = "";
            errorElement.classList.remove(this._settings.errorClass);
            errorElement.classList.remove(this._settings.inputErrorClass);
        }
        
    }

    _toggleButtonState() {
       
        if (this._inputList.some(input => !input.validity.valid)) {
            this._formSubmitBtn.classList.add(this._settings.inactiveButtonClass);
            this._formSubmitBtn.disabled = true;     
        } else {
            this._formSubmitBtn.classList.remove(this._settings.inactiveButtonClass);
            this._formSubmitBtn.disabled = false;     
        }
    }



    resetValidation() {
        this._formElement.reset();
        this._toggleButtonState();
    }


    enableValidation() {
     this._setEventListeners();
    }
    
}


export default FormValidator;