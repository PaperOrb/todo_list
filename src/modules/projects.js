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

  function addIndexToLS() {
    let indexStr = JSON.stringify(projIndex);
    localStorage.setItem("index", indexStr);
  }

  function addLsToIndex() {
    let indexStr = localStorage.getItem("index");
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

  function createTodo({ labelDataContent, priority, completion, dueDate }) {
    let todoObj = {
      id: ++todoIndex,
      descID: `descID: ${todoIndex}`,
      labelFor: `descID: ${todoIndex}`,
      labelDataContent: labelDataContent || "",
      priority: priority || "",
      completion: completion || "",
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

  return {
    findTodo,
    createTodo,
    removeProject,
    addProjToArr,
    setCurrent,
    getCurrent,
    addIndexToLS,
    addLsToIndex,
    addLsToArr,
    addArrToLS,
    arr,
  };
})();
