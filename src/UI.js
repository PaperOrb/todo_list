export { todoFormUI };

const todoFormUI = (function () {
  const todoTemplate = document.querySelector("#clone-this-todo-template");
  const todoList = document.querySelector(".todos-page-list");

  function toggleEdit(currentTarget) {
    const checkboxContainer = currentTarget.children[1];
    const todoTextInput = currentTarget.children[2];
    const pencilButton = currentTarget.children[4].children[2];

    pencilButton.style.visibility = pencilButton.style.visibility === "hidden" ? "visible" : "hidden";
    pencilButton.toggleAttribute("disabled");
    checkboxContainer.toggleAttribute("hidden");
    todoTextInput.toggleAttribute("hidden");
    todoTextInput.focus();
  }

  function add() {
    let newTodo = todoTemplate.cloneNode(true);
    newTodo.toggleAttribute("hidden");
    todoList.prepend(newTodo);
    return newTodo.children[0];
  }

  function remove(currentTarget) {
    currentTarget.remove();
  }

  return { toggleEdit, remove, add };
})();
