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

  function addProjectObj({ title, todoList }) {
    let projectObj = {
      id: ++index,
      title: title || "",
      todoList: todoList || [],
    };
    projectsArr.push(projectObj);
    // // projectsArr.sort((a, b) => a > b ? 1 : -1)
    return projectObj;
  }

  // can't do these operations reversed, so decided to make a wrapper
  function updateArrThenLS() {
    setArrFromLS();
    setLsFromArr();
  }

  function setLsFromArr() {
    let projectsListStr = JSON.stringify(projectsArr);
    localStorage.setItem("projectsList", projectsListStr);
  }

  // sets projectsArr from LS contents
  function setArrFromLS() {
    let projectsListStr = localStorage.getItem("projectsList");
    projectsArr = JSON.parse(projectsListStr) || [];
    return projectsArr;
  }

  function removeProject() {}

  function arr() {
    return projectsArr;
  }

  return { removeProject, addProjectObj, setCurrent, getCurrent, updateArrThenLS, arr };
})();
