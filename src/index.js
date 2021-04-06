import { todoFormUI } from "./modules/todoFormUI.js";
import { todos } from "./modules/todos.js";

const todoForms = document.querySelectorAll(".todo-form");
const todoList = document.querySelector(".todos-page-list");
const addTodoBtn = document.querySelector("#add-todo");

// module purely for testing load page
(function () {
  let localStorage = ["testing", "mah", "storage", "next", "testasdf", "mah", "storage", "next", "testasdf"];

  todoFormUI.displayList(localStorage);
})();

addTodoBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let todoObj = todos.createTodoObj();
  let form = todoFormUI.attachBlankForm(todoObj);
  todoFormUI.populateTodo(form);
  todoFormUI.toggleEdit(form);
});

todoList.addEventListener("submit", (e) => {
  switch (e.submitter.id) {
    case "todo-edit":
      e.preventDefault();
      todoFormUI.toggleEdit(e.target);
      break;
    case "todo-remove":
      e.preventDefault();
      todoFormUI.remove(e.target);
      break;
    case "todo-input-description-btn":
      e.preventDefault();
      todoFormUI.toggleEdit(e.target);

      let todoObj = todos.findTodo(e.target.id);

      
      todoObj.priority = todoFormUI.getPriorityInput(e.target);
      todoObj.labelDataContent = todoFormUI.getDescriptionInput(e.target);
      getDescriptionInputEle.value = descriptionInputEle.value
      todoObj.dueDate = todoFormUI.getDateInput(e.target);

      
      todoObj.labelDataContent = input;

      todoObj.desc = input;
      todoFormUI.fillLabel(e.target, todoObj.desc);
      break;
    // add case "fillPriority"
    // add caes "fillDate"
  }
});
