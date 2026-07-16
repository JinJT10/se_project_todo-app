class FormValidator {
    constructor( settings, formElement) {
        this._settings = settings
        this._formElement = formElement
    }




    enableValidation() {
       const formInput = this._formElement.querySelectorAll(this._settings.inputSelector)

        formInput.forEach((input) => {
            if (input.validity.valid) {

            } else {
                
            }
        });
    }
    
}