class TodoCounter {
  constructor(todos, selector) {
    this._element = document.querySelector(selector);
    this._total = todos.length;
    this._completed = todos.filter((item) =>{
        return item.completed === true;
    }).length;
    this._updateText()
  }

    updateCompleted = (increment) => {
      increment ? this._completed += 1 : this._completed -= 1;
      this._updateText();
  };

    updateTotal = (increment) => {
      increment ? this._total += 1 : this._total -= 1;
      this._updateText(); 
  };

    _updateText() {
    this._element.textContent = `Showing ${this._completed} out of ${this._total} completed`;
  }
}

export default TodoCounter;