export { todoFormUI };

const todoFormUI = (function () {
  const todoTemplate = document.querySelector("#clone-this-todo-template");
  const todoListUL = document.querySelector(".todos-page-list");
  const todosPage = document.querySelector(".todos-page");

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
    // alert(pencilButton);
    pencilButton.toggleAttribute("disabled");
    checkboxContainer.toggleAttribute("hidden");
    getDescInputEle(target).toggleAttribute("hidden");
    getDescInputEle(target).focus();
  }

  function updateTodoForm(todoForm, todoObj) {
    todoForm.id = todoObj.id; // set form id

    todoForm.querySelector(".checkbox").id = todoObj.descID; // set checkbox ID
    taskLabel(todoForm).setAttribute("for", todoObj.labelFor); // set label for attribute
    taskLabel(todoForm).setAttribute("data-content", todoObj.labelDataContent); // set label content
    // add function to fillPriority
    // add function to fillDate
  }

  function newBlankFormInsideLI() {
    let newTodo = todoTemplate.cloneNode(true);
    newTodo.toggleAttribute("hidden");
    return newTodo;
  }

  function displayList(listArr) {
    listArr.forEach((todoObj) => {
      let formInsideContainer = todoFormUI.newBlankFormInsideLI();
      let form = formInsideContainer.querySelector(".todo-form");
      todoFormUI.updateTodoForm(form, todoObj);
      todoListUL.prepend(formInsideContainer);
    });
  }

  function clearList() {
    while (todoListUL.firstChild) {
      todoListUL.lastChild.remove();
    }
    todosPage.append(todoListUL); //this appends old todoList with all its todos. fix it
  }

  function remove(currentTarget) {
    currentTarget.remove();
  }

  return {
    toggleEdit,
    displayList,
    clearList,
    remove,
    newBlankFormInsideLI,
    // getPriorityInput
    getDescInputEle,
    // getDateInput
    // getCompletionStatusInput
    updateTodoForm,
  };
})();
