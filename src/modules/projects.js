export { projects };

const projects = (function () {
  let projectsArr = [
    {
      id: 1,
      label: "Proj1",
      todoList: [
        {
          id: 1,
          label: "Proj1 Todo000",
        },
      ],
    },
    {
      id: 2,
      label: "Proj2",
      todoList: [
        {
          id: 1,
          label: "Proj2 Todo111",
        },
        {
          id: 2,
          label: "Proj2 Todo222",
        },
      ],
    },
  ]; // make this load from localstorage at some point
  let index = 0;

  function addProjectObj({ labelDataContent, todoList }) {
    let projectObj = {
      id: ++index,
      descID: `descID: ${index}`,
      labelFor: `descID: ${index}`,
      labelDataContent: labelDataContent || "",
      todoList: todoList || [],
    };
    projectsArr.push(projectObj);
    // // projectsArr.sort((a, b) => a > b ? 1 : -1)
    return projectObj;
  }

  function findProject(targetID) {
    return projectsArr.find((element) => {
      return `${element.id}` === `${targetID}`;
    });
  }

  function getList() {
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
    return JSON.parse(projectsListStr);
  }

  function removeProject() {}

  return { removeProject, getList, addProjectObj, findProject, addProjectsToLS, getProjectsFromLS };
})();
