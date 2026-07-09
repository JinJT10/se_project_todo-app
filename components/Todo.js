class Todo {
    constructor (data, selector) {
        this._id = data.id;
        this._name = data.name;
        this._completed = data.completed;
        this._date = data.date;
        this._selector = selector;

    }
    
    _setEventListener() {
        const todoDeleteBtn = this._element.querySelector(".todo__delete-btn");
        
        todoDeleteBtn.addEventListener("click", () => {
        this._element.remove();
         });



    }

    getView() {
        const todoElement = document
        .querySelector(this._selector)
        .content
        .querySelector(".todo")
        .cloneNode(true);
        
        const todoNameEl = todoElement.querySelector(".todo__name");
        const todoCheckboxEl = todoElement.querySelector(".todo__completed");
        const todoLabel = todoElement.querySelector(".todo__label");
        const todoDate = todoElement.querySelector(".todo__date");
        
        
        todoNameEl.textContent = this._name;
        todoCheckboxEl.checked = this._completed;
        todoDate.textContent = this._date;
        this._element = todoElement;
    

        
        return this._element;
    }
}

export default Todo;