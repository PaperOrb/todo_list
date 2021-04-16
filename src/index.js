import { todoFormUI } from "./modules/todoFormUI.js";
import { projectsFormUI } from "./modules/projectsFormUI.js";
import { projects } from "./modules/projects.js";
import { compareAsc, format } from "date-fns";


// todo elements
const todoForms = document.querySelectorAll(".todo-form");
const todoList = document.querySelector(".todos-page-list");
const addTodoBtn = document.querySelector("#add-todo");
// project elements
const projectsList = document.querySelector(".projects-page-list");
const addProjectBtn = document.querySelector("#add-project");

// page load
(function () {
  if (localStorage.getItem("projectsList") !== null) {
    projects.addLsToArr();
    projects.addLsToProjIndex();
    projects.addLsToTodoIndex();
  } else {
    let defaultTodo = projects.createTodo({ labelDataContent: "Default Todo" });
    projects.addProjToArr({ title: "Default Project", todoList: [defaultTodo] });
    projects.addArrToLS();
    projects.addProjIndexToLS();
    projects.addTodoIndexToLS();
  }

  if (projects.arr().length === 0) {
    return;
  }
  let firstProjID = projects.arr()[0].id;
  projects.setCurrent(firstProjID);

  todoFormUI.clearList();
  todoFormUI.displayList(projects.getCurrent().todoList);
  projectsFormUI.setHeading(projects.getCurrent().title);
  projectsFormUI.displayList(projects.arr());
})();

// projects
addProjectBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let projObj = projects.addProjToArr({});
  let projFormInsideLI = projectsFormUI.newBlankFormInsideLI();
  let projForm = projFormInsideLI.querySelector(".project-form");
  projects.addProjIndexToLS();
  projects.setCurrent(projObj.id);

  projectsFormUI.updateProjectForm(projForm, projObj);
  projectsList.prepend(projFormInsideLI);
  projectsFormUI.toggleEdit(projForm, projObj);
});

projectsList.addEventListener("submit", (e) => {
  projects.setCurrent(e.target.id);
  let projectFormElement = e.target;
  let buttonElementID = e.submitter.id;

  switch (buttonElementID) {
    case "view-project-todos":
      e.preventDefault();
      todoFormUI.clearList();
      todoFormUI.displayList(projects.getCurrent().todoList);
      projectsFormUI.setHeading(projects.getCurrent().title);
      break;
    case "project-edit":
      e.preventDefault();
      projectsFormUI.toggleEdit(projectFormElement);
      projectsFormUI.getDescInputEle(projectFormElement).setAttribute("value", projects.getCurrent().title);
      break;
    case "project-remove":
      e.preventDefault();
      projects.removeProject(projectFormElement.id);
      projects.addArrToLS();
      projectsFormUI.remove(projectFormElement);
      break;
    case "project-input-description-btn":
      e.preventDefault();
      projectsFormUI.toggleEdit(projectFormElement);
      projects.getCurrent().title = projectsFormUI.getDescInputEle(projectFormElement).value;
      projects.addArrToLS();
      // console.log(projects.getCurrent().title);
      // projects.addArrToLS;
      projectsFormUI.updateProjectForm(projectFormElement, projects.getCurrent());
      break;
  }
});

// todos
addTodoBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let todoObj = projects.createTodo({});
  let formInsideContainer = todoFormUI.newBlankFormInsideLI();
  let form = formInsideContainer.querySelector(".todo-form");
  projects.addTodoIndexToLS();
  projects.getCurrent().todoList.unshift(todoObj);
  todoFormUI.updateTodoForm(form, todoObj);
  todoList.prepend(formInsideContainer);
  todoFormUI.toggleEdit(form, todoObj);
});

todoList.addEventListener("submit", (e) => {
  let todoObj = projects.findTodo(e.target.id, projects.getCurrent().todoList);
  let todoFormElement = e.target;
  let buttonElementID = e.submitter.id;
  let todoId = e.target.id;

  switch (buttonElementID) {
    case "todo-edit":
      e.preventDefault();
      todoFormUI.getDescInputEle(todoFormElement).setAttribute("value", todoObj.labelDataContent);
      todoFormUI.toggleEdit(todoFormElement);
      break;
    case "todo-remove":
      e.preventDefault();
      projects.removeTodo(todoId, projects.getCurrent());
      projects.addArrToLS();
      todoFormUI.remove(todoFormElement);
      break;
    case "todo-input-description-btn":
      e.preventDefault();

      // todoObj.priority = todoFormUI.getPriorityInput(todoFormElement);
      // todoObj.labelDataContent = todoFormUI.getDescriptionInput(todoFormElement);
      // todoObj.dueDate = todoFormUI.getDateInput(todoFormElement);
      todoFormUI.toggleEdit(todoFormElement);
      todoObj.labelDataContent = todoFormUI.getDescInputEle(todoFormElement).value;
      todoFormUI.updateTodoForm(todoFormElement, todoObj);
      projects.addArrToLS();
      break;
    // add case "fillPriority"
    // add caes "fillDate"
  }
});
