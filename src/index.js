import { todoFormUI } from "./modules/todoFormUI.js";
import { todos } from "./modules/todos.js";
import { projectsFormUI } from "./modules/projectsFormUI.js";
import { projects } from "./modules/projects.js";

const todoForms = document.querySelectorAll(".todo-form");
const todoList = document.querySelector(".todos-page-list");
const addTodoBtn = document.querySelector("#add-todo");
let index = 0;

// module purely for testing load page
(function () {
  localStorage.clear();
  let testTodo = todos.addTodoObj({ labelDataContent: "test todo" });
  projects.addProjectObj({ labelDataContent: "first project", todoList: [testTodo] });
  projects.addProjectsToLS();
  let projectsList = projects.getProjectsFromLS();
  console.log(projectsList);
  // top level objects in LS are projects. Nested arrs inside them are todos

  // localStorage.forEach((project) => {
  //   todos.addTodoObj({ labelDataContent: label });
  // });
  // projectsFormUI.displayList(projects.getList());

  // -------------------------------------------------
  // let localStorage = ["testing", "mah", "storage", "next", "testasdf", "mah", "storage", "next", "testasdf"];
  // localStorage.forEach((label) => {
  //   todos.addTodoObj({ labelDataContent: label });
  // });
  // todoFormUI.displayList(todos.getList());
})();

addTodoBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let todoObj = todos.addTodoObj({});
  let formInsideContainer = todoFormUI.newBlankFormInsideLI();
  let form = formInsideContainer.querySelector(".todo-form");
  todoFormUI.updateTodoForm(form, todoObj);
  todoList.prepend(formInsideContainer);
  todoFormUI.toggleEdit(form, todoObj);
});

todoList.addEventListener("submit", (e) => {
  let todoObj = todos.findTodo(e.target.id);

  switch (e.submitter.id) {
    case "todo-edit":
      e.preventDefault();
      todoFormUI.toggleEdit(e.target);
      getDescInputEle(form).setAttribute("value", data);
      break;
    case "todo-remove":
      e.preventDefault();
      todoFormUI.remove(e.target);
      break;
    case "todo-input-description-btn":
      e.preventDefault();

      // todoObj.priority = todoFormUI.getPriorityInput(e.target);
      // todoObj.labelDataContent = todoFormUI.getDescriptionInput(e.target);
      // todoObj.dueDate = todoFormUI.getDateInput(e.target);
      todoFormUI.toggleEdit(e.target);
      todoObj.labelDataContent = todoFormUI.getDescInputEle(e.target).value;
      todoFormUI.updateTodoForm(e.target, todoObj);

      break;
    // add case "fillPriority"
    // add caes "fillDate"
  }
});
