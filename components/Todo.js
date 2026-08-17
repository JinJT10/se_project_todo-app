class Todo {
    constructor (data, selector, handleCheckToggle, handleDelete) {
        this._data = data;
        this._templateElement = document.querySelector(selector);
        this._handleCheckToggle = handleCheckToggle;
        this._handleDelete = handleDelete
    }
    
    _setEventListeners() {
        const todoDeleteBtn = this._todoElement.querySelector(".todo__delete-btn");
        const todoCheckboxEl = this._todoElement.querySelector(".todo__completed");

        todoDeleteBtn.addEventListener("click", () => {
            this._todoElement.remove();
            this._handleDelete(this._data.completed);
         });

        todoCheckboxEl.addEventListener("change", () =>{
            this._data.completed = !this._data.completed;
            this._handleCheckToggle(this._data.completed);
        });



    }

    getView() {
        this._todoElement = this._templateElement
        .content
        .querySelector(".todo")
        .cloneNode(true);
        
        

        const todoNameEl = this._todoElement.querySelector(".todo__name");
        const todoCheckboxEl = this._todoElement.querySelector(".todo__completed");
        const todoLabel = this._todoElement.querySelector(".todo__label");
        const todoDate = this._todoElement.querySelector(".todo__date");
        
        todoLabel.setAttribute("for", this._data.id);
        todoCheckboxEl.id = this._data.id;
        todoNameEl.textContent = this._data.name;
        todoCheckboxEl.checked = this._data.completed;
    

        if (!isNaN(this._data.date)) {
            todoDate.textContent = `Due: ${this._data.date.toLocaleString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
        })}`;
        } else {
            todoDate.style.display = "none";
        }


        this._setEventListeners();
        return this._todoElement;
    }
}

export default Todo;