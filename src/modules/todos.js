export { todos };

const todos = (function () {
  let arr = []; // make this load from localstorage at some point
  let index = 0;

  // there's no named parameters in vanilla JS to set a specific param, so have to supply all args every time
  function addTodoObj({ labelDataContent, priority, completion, dueDate }) {
    let todoObj = {
      id: ++index,
      descID: `descID: ${index}`,
      labelFor: `descID: ${index}`,
      labelDataContent: labelDataContent,
      priority: priority,
      completion: completion,
      dueDate: dueDate,
    };
    arr.push(todoObj);
    // // arr.sort((a, b) => a > b ? 1 : -1)
    return todoObj;
  }

  function getList() {
    return arr;
  }

  function updateTodo() {}

  function removeTodo() {}

  return { updateTodo, removeTodo, getList, addTodoObj };
})();
