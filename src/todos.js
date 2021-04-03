export { todoFormUI };

const todoFormUI = (function () {
  function toggleEdit(e) {
    const checkboxContainer = e.currentTarget.children[1];
    const todoTextInput = e.currentTarget.children[2];
    const pencilButton = e.currentTarget.children[4].children[2];

    pencilButton.style.visibility = pencilButton.style.visibility === "hidden" ? "visible" : "hidden";
    pencilButton.toggleAttribute("disabled");
    checkboxContainer.toggleAttribute("hidden");
    todoTextInput.toggleAttribute("hidden");
    todoTextInput.focus();
  }

  function remove(e) {
    e.currentTarget.remove();
  }

  return { toggleEdit, remove };
})();
