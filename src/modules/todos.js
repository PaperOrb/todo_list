export { todos };

const todos = (function () {
  let arr = []; // make this load from localstorage at some point

  function add(todo) {
    arr.push(todo);
    // arr.sort((a, b) => a > b ? 1 : -1)
    return arr;
  }

  function get() {
    return arr;
  }

  function remove() {}

  return { add, remove, get };
})();
