import { todoFormUI } from "./todos.js";

const todoForms = document.querySelectorAll(".todo-form");
const todoFormInputLeft = document.querySelectorAll(".todo-input-description");

todoForms.forEach((todoForm) => {
  todoForm.addEventListener("submit", (e) => {
    e.preventDefault();

    alert(e.submitter.id);
    switch (e.submitter.id) {
      case "todo-edit":
        todoFormUI.toggleEdit(e);
        // todoFormUI.populateInput();
        break;
      case "todo-remove":
        alert("ifired");
        todoFormUI.remove(e);
        break;
      case "todo-input-description":
        todoItemUI.toggleEdit(e);
        break;
    }
  });
});
// how to attach eventlistener and get at its parent form? above doesn't work
