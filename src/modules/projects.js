export { projects };

const projects = (function () {
  let projectsArr = [];
  let projIndex = 0;
  let todoIndex = 0;
  let current = {};

  function setCurrent(targetID) {
    current = projectsArr.find((element) => {
      return `${element.id}` === `${targetID}`;
    });
  }

  function getCurrent() {
    return current;
  }

  function addProjToArr({ title, todoList }) {
    let projectObj = {
      id: ++projIndex,
      title: title || "",
      todoList: todoList || [],
    };

    projectsArr.push(projectObj);
    // // projectsArr.sort((a, b) => a > b ? 1 : -1)
    return projectObj;
  }

  function addArrToLS() {
    let projectsListStr = JSON.stringify(projectsArr);
    localStorage.setItem("projectsList", projectsListStr);
  }

  function addProjIndexToLS() {
    let indexStr = JSON.stringify(projIndex);
    localStorage.setItem("projIndex", indexStr);
  }

  function addLsToProjIndex() {
    let indexStr = localStorage.getItem("projIndex");
    projIndex = JSON.parse(indexStr) || 0;
    return projIndex;
  }

  // sets projectsArr from LS contents
  function addLsToArr() {
    let projectsListStr = localStorage.getItem("projectsList");
    projectsArr = JSON.parse(projectsListStr) || [];
    return projectsArr;
    // JSON.parse(localStorage.getItem("projectsList"))
  }

  function removeProject(id) {
    let new_arr = arr().filter((ele) => {
      return Number(ele.id) !== Number(id);
    });
    projectsArr = new_arr;
  }

  function arr() {
    return projectsArr;
  }

  function createTodo({ labelDataContent, priority, checked, dueDate }) {
    let todoObj = {
      id: ++todoIndex,
      descID: `descID: ${todoIndex}`,
      labelFor: `descID: ${todoIndex}`,
      labelDataContent: labelDataContent || "",
      priority: priority || "",
      checked: checked || "",
      dueDate: dueDate || "",
    };
    // todosArr.sort((a, b) => a > b ? 1 : -1)
    return todoObj;
  }

  function findTodo(targetID, todoList) {
    return todoList.find((element) => {
      return `${element.id}` === `${targetID}`;
    });
  }

  function addTodoIndexToLS() {
    let indexStr = JSON.stringify(todoIndex);
    localStorage.setItem("todoIndex", indexStr);
  }

  function addLsToTodoIndex() {
    let indexStr = localStorage.getItem("todoIndex");
    todoIndex = JSON.parse(indexStr) || 0;
    return todoIndex;
  }

  function removeTodo(todoId, project) {
    project.todoList = project.todoList.filter((todo) => {
      return Number(todo.id) !== Number(todoId);
    });
  }

  return {
    findTodo,
    createTodo,
    removeProject,
    removeTodo,
    addProjToArr,
    setCurrent,
    getCurrent,
    addProjIndexToLS,
    addLsToProjIndex,
    addTodoIndexToLS,
    addLsToTodoIndex,
    addLsToArr,
    addArrToLS,
    arr,
  };
})();
