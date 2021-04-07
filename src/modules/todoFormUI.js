export { todoFormUI };

const todoFormUI = (function () {
  const todoTemplate = document.querySelector("#clone-this-todo-template");
  const todoList = document.querySelector(".todos-page-list");

  function getDescInputEle(target) {
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
    descriptionInputEle(target).toggleAttribute("hidden");
    descriptionInputEle(target).focus();
  }

  function updateTodoForm(todoForm, todoObj) {
    todoForm.id = todoObj.id; // set form id
    todoForm.querySelector(".checkbox").id = `checkbox: ${todoObj.id}`; // set checkbox ID
    taskLabel(todoForm).setAttribute("for", taskCheckbox(todoForm).id); // set label for attribute
    taskLabel(form).setAttribute("data-content", todoObj.labelDataContent); // set label content
    descriptionInputEle(form).setAttribute("value", todoObj.labelDataContent); // set input value from label content
    // add function to fillPriority
    // add function to fillDate
  }

  function attachBlankForm() {
    let newTodo = todoTemplate.cloneNode(true);
    newTodo.toggleAttribute("hidden");
    return newTodo;
  }

  function displayList(listArr) {
    listArr.forEach((todoObj) => {
      let form = createBlankForm();
      todoFormUI.attachBlankForm(form, todoObj);
      todoFormUI.populateTodo(todoForm, todoObj);
    });
  }

  function remove(currentTarget) {
    currentTarget.remove();
  }

  return {
    toggleEdit,
    displayList,
    remove,
    attachBlankForm,
    // getPriorityInput
    getDescInputEle,
    // getDateInput
    // getCompletionStatusInput
    updateTodoForm,
  };
})();
