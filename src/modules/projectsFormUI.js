export { projectsFormUI };

const projectsFormUI = (function () {
  const projectTemplate = document.querySelector("#clone-this-project-template");
  const projectList = document.querySelector(".projects-page-list");

  function getDescInputEle(target) {
    return target.querySelector(".project-input-description");
  }

  function selectProjectBtn(target) {
    return target.querySelector(".select-project-btn");
  }

  function toggleEdit(target) {
    const checkboxContainer = target.querySelector(".checkbox-container");
    const pencilButton = target.querySelector("#project-edit");

    pencilButton.style.visibility = pencilButton.style.visibility === "hidden" ? "visible" : "hidden";
    // alert(pencilButton);
    pencilButton.toggleAttribute("disabled");
    checkboxContainer.toggleAttribute("hidden");
    getDescInputEle(target).toggleAttribute("hidden");
    getDescInputEle(target).focus();
  }

  function updateprojectForm(projectForm, projectObj) {
    projectForm.id = projectObj.id; // set project form id
    selectProjectBtn(projectForm).textContent = projectObj.title; // set project form button title
  }

  function newBlankFormInsideLI() {
    let newproject = projectTemplate.cloneNode(true);
    newproject.toggleAttribute("hidden");
    return newproject;
  }

  function displayList(listArr) {
    listArr.forEach((projectObj) => {
      let formInsideContainer = newBlankFormInsideLI();
      let form = formInsideContainer.querySelector(".project-form");
      updateprojectForm(form, projectObj);
      projectList.prepend(formInsideContainer);
    });
  }

  function remove(currentTarget) {
    currentTarget.remove();
  }

  return {
    toggleEdit,
    displayList,
    remove,
    newBlankFormInsideLI,
    // getPriorityInput
    getDescInputEle,
    // getDateInput
    // getCompletionStatusInput
    updateprojectForm,
  };
})();
