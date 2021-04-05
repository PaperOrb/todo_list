export { todoFormUI };

const todoFormUI = (function () {
  const todoTemplate = document.querySelector("#clone-this-todo-template");
  const todoList = document.querySelector(".todos-page-list");

  function inputNode(target) {
    return target.children[2];
  }

  function taskLabel(target) {
    // alert(target.children[1].children[1].classList);
    return target.children[1].children[1];
  }

  function toggleEdit(target) {
    const checkboxContainer = target.children[1];
    const pencilButton = target.children[4].children[2];

    pencilButton.style.visibility = pencilButton.style.visibility === "hidden" ? "visible" : "hidden";
    pencilButton.toggleAttribute("disabled");
    checkboxContainer.toggleAttribute("hidden");
    inputNode(target).toggleAttribute("hidden");
    inputNode(target).focus();
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

  return { toggleEdit, remove, add, inputNode, taskLabel };
})();
