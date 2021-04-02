export { todos };

const todos = (function () {
  function toggleEdit(e) {
    e.preventDefault();
    alert(e.currentTarget.classList);
  }

  return { toggleEdit };
})();
