export { todoFormUI };

const todoFormUI = (function () {
  const todoTemplate = document.querySelector("#clone-this-todo-template");
  const todoList = document.querySelector(".todos-page-list");
  let index = 0;

  function taskDescInput(target) {
    return target.querySelector(".todo-input-description");
  }

  function taskCheckbox(target) {
    return target.querySelector(".checkbox");
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
    addUniqueID(newTodo);
    addUniqueDescIDAndLabel(newTodo);
    return newTodo;
  }

  function displayTodo(todoForm, todoObj) {
    // [id, DescID, labelFor, priority, completion, dueDate]
    obj = {
      id: todoForm.id,
      DescID: taskCheckbox(todoForm).id,
      labelFor: taskLabel(todoForm),
    };
    alert(todoObj);
    fillLabel(todoForm, todoObj);
    fillInput(todoForm, todoObj);
    // add function to fillPriority
    // add function to fillDate
    todoList.prepend(todoForm);
    return todoForm;
  }

  function fillLabel(form, todoObj) {
    taskLabel(form).setAttribute("data-content", todoObj);
  }

  function fillInput(form, todoObj) {
    taskDescInput(form).setAttribute("value", todoObj);
  }

  function addUniqueID(form) {
    form.id = ++index;
  }

  function addUniqueDescIDAndLabel(form) {
    taskCheckbox(form).id = `checkbox: ${form.id}`;
    taskLabel(form).setAttribute("for", taskCheckbox(form).id);
  }

  function displayList(listArr) {
    listArr.forEach((todoObj) => {
      let form = createBlankForm();
      todoFormUI.displayTodo(form, todoObj);
    });
  }

  function remove(currentTarget) {
    currentTarget.remove();
  }

  return {
    toggleEdit,
    displayList,
    remove,
    createBlankForm,
    fillLabel,
    fillInput,
    displayTodo,
    taskDescInput,
    taskLabel,
  };
})();
