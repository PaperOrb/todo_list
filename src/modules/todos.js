export { todos };

const todos = (function () {
  let todosArr = []; // make this load from localstorage at some point
  let index = 0;

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
      return `${element.id}` === `${targetID}`;
    });
  }

  function getList() {
    return todosArr;
  }

  function removeTodo() {}

  return { removeTodo, getList, addTodoObj, findTodo };
})();
