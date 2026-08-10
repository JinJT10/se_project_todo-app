import { initialTodos, validationConfig } from "../utils/constants.js";
import Todo from "../components/Todo.js";
import { v4 as uuidv4 } from 'https://jspm.dev/uuid';
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";


const addTodoButton = document.querySelector(".button_action_add");
const addTodoPopup = document.querySelector("#add-todo-popup");
const addTodoForm = document.forms["add-todo-form"];
const addTodoCloseBtn = addTodoPopup.querySelector(".popup__close");
const todosList = document.querySelector(".todos__list");


const generateTodo = (data) => {
  const todo = new Todo(data, "#todo-template");
  return todo.getView();
};

const section = new Section({
  items: initialTodos,
  renderer: (item) => {
    const todo = generateTodo(item);
    section.addItem(todo);
  },
  containerSelector: ".todos__list",
});
section.renderItems();


const formValidator = new FormValidator(validationConfig, addTodoForm);
formValidator.enableValidation();


const openModal = (modal) => {
  modal.classList.add("popup_visible");
};

const closeModal = (modal) => {
  modal.classList.remove("popup_visible");
};


addTodoButton.addEventListener("click", () => {
  openModal(addTodoPopup);
});

addTodoCloseBtn.addEventListener("click", () => {
  closeModal(addTodoPopup);
});




addTodoForm.addEventListener("submit", (evt) => {
  evt.preventDefault()
  if(!addTodoForm.checkValidity()) { 
    return;
  };
  const name = evt.target.name.value;
  const dateInput = evt.target.date.value;

  const date = new Date(dateInput);
  date.setMinutes(date.getMinutes() + date.getTimezoneOffset());
  const values = { name, date, id: uuidv4() };

  const todo = generateTodo(values)
  section.addItem(todo);
  closeModal(addTodoPopup);
  formValidator.resetValidation();
});


