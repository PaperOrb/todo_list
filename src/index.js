import { todoFormUI } from "./todos.js";

const todoForms = document.querySelectorAll(".todo-form");
const todoFormInputLeft = document.querySelectorAll(".todo-input-description");

todoForms.forEach((todoForm) => {
  todoForm.addEventListener("submit", (e) => {
    // i think submit is the wrong event to use for input type=text because e.submitter is incorrect when pressing enter inside the input field
    // write pseudocode for eventlisteners on individual buttons on click instead of on submit

    switch (e.submitter.id) {
      case "todo-edit":
        e.preventDefault();
        todoFormUI.toggleEdit(e);
        // todoFormUI.populateInput();
        break;
      case "todo-remove":
        e.preventDefault();
        todoFormUI.remove(e);
        break;
      case "todo-input-description-btn":
        e.preventDefault();
        todoFormUI.toggleEdit(e);
        break;
    }
  });
});
