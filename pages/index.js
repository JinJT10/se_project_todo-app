import { initialTodos, validationConfig } from "../utils/constants.js";
import Todo from "../components/Todo.js";
import { v4 as uuidv4 } from 'https://jspm.dev/uuid';
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import TodoCounter from "../components/TodoCounter.js";


const addTodoButton = document.querySelector(".button_action_add");
const addTodoForm = document.forms["add-todo-form"];




const todoCounter = new TodoCounter(initialTodos, ".counter__text");

const generateTodo = (data) => {
  const todo = new Todo(data, "#todo-template", handleCheckToggle, handleDelete);
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


const addPopupTodo = new PopupWithForm("#add-todo-popup", (values) => {
  const name = values.name;
  const dateInput = values.date;

  const date = new Date(dateInput);
  date.setMinutes(date.getMinutes() + date.getTimezoneOffset());
  const inputValues = { name, date, id: uuidv4() };

  const todo = generateTodo(inputValues);
  section.addItem(todo);
  todoCounter.updateTotal(true);
  addPopupTodo.close();
  formValidator.resetValidation();
});
addPopupTodo.setEventListeners();


const formValidator = new FormValidator(validationConfig, addTodoForm);
formValidator.enableValidation();




addTodoButton.addEventListener("click", () => {
  addPopupTodo.open();
});


function handleCheckToggle(completed) {
  todoCounter.updateCompleted(completed);
}

function handleDelete(completed) {
if(completed) {
  todoCounter.updateCompleted(false);
}
  todoCounter.updateTotal(false);
  
}