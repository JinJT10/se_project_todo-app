class FormValidator {
    constructor(settings, formElement) {
        this._settings = settings
        this._formElement = formElement
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
       const formSubmitBtn = this._formElement.querySelector(this._settings.submitButtonSelector)
        if (this._inputList.every(input => input.validity.valid)) {
            formSubmitBtn.classList.remove(this._settings.inactiveButtonClass);     
        } else {
            formSubmitBtn.classList.add(this._settings.inactiveButtonClass);
        }
    }



    enableValidation() {
       this._inputList = this._formElement.querySelectorAll(this._settings.inputSelector)
       
        this._inputList.forEach((input) => {
            this._checkInputValidity(input);
        });
    }
    
}


export default FormValidator;