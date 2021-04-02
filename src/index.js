import { todos } from "./todos.js";
// add todoItem module with a toggleEdit function

const todoEdit = document.querySelector(".todo-edit");
const todoList = document.querySelectorAll(".todo-item");

todoList.forEach((todoItem) => {
  todoItem.addEventListener("click", todos.toggleEdit);
});
// how to attach eventlistener and get at its parent form? above doesn't work
