export { projects };

const projects = (function () {
  let projectsArr = [];
  let index = 0;
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
      id: ++index,
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
    let indexStr = JSON.stringify(index);
    localStorage.setItem("index", indexStr);
  }

  function addLsToIndex() {
    let indexStr = localStorage.getItem("index");
    index = JSON.parse(indexStr) || 0;
    return index;
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
    debugger;
    projectsArr = new_arr;
  }

  function arr() {
    return projectsArr;
  }

  return {
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
