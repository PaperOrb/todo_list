export { todoFormUI };

const todoFormUI = (function () {
  const todoTemplate = document.querySelector("#clone-this-todo-template");
  const todoList = document.querySelector(".todos-page-list");

  function taskDescInput(target) {
    return target.querySelector(".todo-input-description");
  }

  function taskLabel(target) {
    return target.querySelector(".label-faking-as-checkmark");
  }

  function toggleEdit(target) {
    const checkboxContainer = target.querySelector(".checkbox-container");
    const pencilButton = target.querySelector("#todo-edit");

    pencilButton.style.visibility = pencilButton.style.visibility === "hidden" ? "visible" : "hidden";
    pencilButton.toggleAttribute("disabled");
    checkboxContainer.toggleAttribute("hidden");
    taskDescInput(target).toggleAttribute("hidden");
    taskDescInput(target).focus();
  }

  function createBlankForm() {
    let newTodo = todoTemplate.cloneNode(true);
    newTodo.toggleAttribute("hidden");
    return newTodo;
  }

  function displayTodo(todo) {
    todoList.prepend(todo);
    return todo;
  }

  function fillLabel(form, data) {
    taskLabel(form).setAttribute("data-content", data);
  }

  function fillInput(form, data) {
    taskDescInput(form).setAttribute("value", data);
  }

  function displayList(listArr) {
    listArr.forEach((todoData) => {
      let form = createBlankForm();
      fillLabel(form, todoData);
      fillInput(form, todoData);
      todoFormUI.displayTodo(form);
    });
  }

  function remove(currentTarget) {
    currentTarget.remove();
  }

  return { toggleEdit, displayList, remove, createBlankForm, fillLabel, fillInput, displayTodo, taskDescInput, taskLabel };
})();
