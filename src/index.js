import { todoFormUI } from "./modules/todoFormUI.js";
import { todos } from "./modules/todos.js";

const todoForms = document.querySelectorAll(".todo-form");
const todoList = document.querySelector(".todos-page-list");
const addTodoBtn = document.querySelector("#add-todo");

// load page
(function () {
  let localStorage = ["testing", "mah", "storage", "next", "testasdf", "mah", "storage", "next", "testasdf"];

  todoFormUI.displayList(localStorage);
})();

addTodoBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let blankTodo = todoFormUI.displayTodo(todoFormUI.createBlankForm());
  todoFormUI.toggleEdit(blankTodo);
});

todoList.addEventListener("submit", (e) => {
  switch (e.submitter.id) {
    case "todo-edit":
      e.preventDefault();
      todoFormUI.toggleEdit(e.target);
      let label = todoFormUI.taskLabel(e.target);
      todoFormUI.fillInput(e.target, label.getAttribute("data-content"));
      break;
    case "todo-remove":
      e.preventDefault();
      todoFormUI.remove(e.target);
      break;
    case "todo-input-description-btn":
      // let description = "testing";
      e.preventDefault();
      todoFormUI.toggleEdit(e.target);
      let input = todoFormUI.taskDescInput(e.target);
      todoFormUI.fillLabel(e.target, input.value);
      // todoFormUI.taskLabel(e.target).setAttribute("data-content", description);
      break;
  }
});
