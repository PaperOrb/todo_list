export { projectsFormUI };

const projectsFormUI = (function () {
  const projectTemplate = document.querySelector("#clone-this-project-template");
  const projectList = document.querySelector(".projects-page-list");
  const todosPageHeading = document.querySelector(".todos-heading-content");

  function getDescInputEle(target) {
    return target.querySelector(".project-input-description");
  }

  function selectProjectBtn(target) {
    return target.querySelector(".select-project-btn");
  }

  function toggleEdit(target) {
    const pencilButton = target.querySelector("#project-edit");
    const projectTitleBtn = target.querySelector(".select-project-btn");

    pencilButton.style.visibility = pencilButton.style.visibility === "hidden" ? "visible" : "hidden";
    pencilButton.toggleAttribute("disabled");
    projectTitleBtn.toggleAttribute("hidden");
    projectTitleBtn.toggleAttribute("disabled");
    // alert(getDescInputEle(target));
    // getDescInputEle(target).value = projectTitleBtn.textContent || "";
    getDescInputEle(target).toggleAttribute("hidden");
    getDescInputEle(target).focus();
  }

  function updateProjectForm(projectForm, projectObj) {
    projectForm.id = projectObj.id; // set project form id
    selectProjectBtn(projectForm).textContent = projectObj.title; // set project form button title
  }

  function newBlankFormInsideLI() {
    let newproject = projectTemplate.cloneNode(true);
    newproject.toggleAttribute("hidden");
    return newproject;
  }

  function displayList(listArr) {
    console.log(listArr);
    listArr.forEach((projectObj) => {
      let formInsideContainer = newBlankFormInsideLI();
      let form = formInsideContainer.querySelector(".project-form");
      updateProjectForm(form, projectObj);
      projectList.prepend(formInsideContainer);
    });
  }

  function setHeading(title) {
    todosPageHeading.textContent = title;
  }

  function remove(currentTarget) {
    console.log(currentTarget);
    currentTarget.remove();
  }

  return {
    toggleEdit,
    displayList,
    remove,
    newBlankFormInsideLI,
    getDescInputEle,
    updateProjectForm,
    setHeading,
  };
})();
