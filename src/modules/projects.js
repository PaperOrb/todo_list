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
    addProjectsToLS();
    // // projectsArr.sort((a, b) => a > b ? 1 : -1)
    return projectObj;
  }

  function getList() {
    getProjectsFromLS();
    if (projectsArr.length === 0) {
      projectsArr = getProjectsFromLS();
    }
    return projectsArr;
  }

  function addProjectsToLS() {
    let projectsListStr = JSON.stringify(projectsArr);
    localStorage.setItem("projectsList", projectsListStr);
  }

  // sets projectsArr from LS contents
  function getProjectsFromLS() {
    let projectsListStr = localStorage.getItem("projectsList");
    projectsArr = JSON.parse(projectsListStr);
    return projectsArr;
  }

  function removeProject() {}

  return { removeProject, getList, addProjectObj, setCurrent, addProjectsToLS, getCurrent };
})();
