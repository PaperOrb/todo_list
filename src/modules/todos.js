export { todos };

const todos = (function () {
  let arr = []; // make this load from localstorage at some point
  let index = 0;

  function createTodoObj(form) {
    obj = {
      id: ++index,
      DescID: taskCheckbox(todoForm).id,
      labelFor: taskLabel(todoForm),
      labelDataContent: "",
      priority: "",
      completion: "",
      dueDate: "",
    };
    arr.push(todo);
    // arr.sort((a, b) => a > b ? 1 : -1)
    return arr;
  }

  function getList() {
    return arr;
  }

  function updateTodo() {}

  function removeTodo() {}

  return { updateTodo, removeTodo, getList, createTodoObj };
})();
