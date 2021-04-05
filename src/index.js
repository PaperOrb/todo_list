import { todoFormUI } from "./UI.js";

const todoForms = document.querySelectorAll(".todo-form");
const todoList = document.querySelector(".todos-page-list");
const addTodoBtn = document.querySelector("#add-todo");

addTodoBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let newTodo = todoFormUI.add();
  todoFormUI.toggleEdit(newTodo);
});

todoList.addEventListener("submit", (e) => {
  switch (e.submitter.id) {
    case "todo-edit":
      e.preventDefault();
      todoFormUI.toggleEdit(e.target);
      // todoFormUI.populateInput();
      break;
    case "todo-remove":
      e.preventDefault();
      todoFormUI.remove(e.target);
      break;
    case "todo-input-description-btn":
      e.preventDefault();
      todoFormUI.toggleEdit(e.target);
      break;
  }
});
