export { todos };

const todos = (function () {
  let todosArr = []; // make this load from localstorage at some point
  let index = 0;

  // there's no named parameters in vanilla JS to set a specific param, so have to supply all args every time
  function addTodoObj({ labelDataContent, priority, completion, dueDate }) {
    let todoObj = {
      id: ++index,
      descID: `descID: ${index}`,
      labelFor: `descID: ${index}`,
      labelDataContent: labelDataContent || "",
      priority: priority || "",
      completion: completion || "",
      dueDate: dueDate || "",
    };
    todosArr.push(todoObj);
    // // todosArr.sort((a, b) => a > b ? 1 : -1)
    return todoObj;
  }

  function findTodo(targetID) {
    return todosArr.find((element) => {
      element.id === targetID;
    });
  }

  function getList() {
    return todosArr;
  }

  function updateTodo() {}

  function removeTodo() {}

  return { updateTodo, removeTodo, getList, addTodoObj, findTodo };
})();
