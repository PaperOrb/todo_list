import { todoFormUI } from "./modules/UI.js";

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
      let description2 = "not testing";
      e.preventDefault();
      todoFormUI.toggleEdit(e.target);
      todoFormUI.inputNode(e.target).value = description2;
      break;
    case "todo-remove":
      e.preventDefault();
      todoFormUI.remove(e.target);
      break;
    case "todo-input-description-btn":
      let description = "testing";
      e.preventDefault();
      todoFormUI.toggleEdit(e.target);
      todoFormUI.taskLabel(e.target).setAttribute("data-content", description);
      break;
  }
});
