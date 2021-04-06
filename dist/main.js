/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_todoFormUI_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/todoFormUI.js */ \"./src/modules/todoFormUI.js\");\n/* harmony import */ var _modules_todos_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/todos.js */ \"./src/modules/todos.js\");\n\n\n\nconst todoForms = document.querySelectorAll(\".todo-form\");\nconst todoList = document.querySelector(\".todos-page-list\");\nconst addTodoBtn = document.querySelector(\"#add-todo\");\n\n// module purely for testing load page\n(function () {\n  let localStorage = [\"testing\", \"mah\", \"storage\", \"next\", \"testasdf\", \"mah\", \"storage\", \"next\", \"testasdf\"];\n\n  _modules_todoFormUI_js__WEBPACK_IMPORTED_MODULE_0__.todoFormUI.displayList(localStorage);\n})();\n\naddTodoBtn.addEventListener(\"click\", (e) => {\n  e.preventDefault();\n  let blankTodo = _modules_todoFormUI_js__WEBPACK_IMPORTED_MODULE_0__.todoFormUI.displayTodo(_modules_todoFormUI_js__WEBPACK_IMPORTED_MODULE_0__.todoFormUI.createBlankForm());\n  _modules_todoFormUI_js__WEBPACK_IMPORTED_MODULE_0__.todoFormUI.toggleEdit(blankTodo);\n});\n\ntodoList.addEventListener(\"submit\", (e) => {\n  switch (e.submitter.id) {\n    case \"todo-edit\":\n      e.preventDefault();\n      _modules_todoFormUI_js__WEBPACK_IMPORTED_MODULE_0__.todoFormUI.toggleEdit(e.target);\n\n      let label = _modules_todoFormUI_js__WEBPACK_IMPORTED_MODULE_0__.todoFormUI.taskLabel(e.target);\n      _modules_todoFormUI_js__WEBPACK_IMPORTED_MODULE_0__.todoFormUI.fillInput(e.target, label.getAttribute(\"data-content\"));\n      break;\n    case \"todo-remove\":\n      e.preventDefault();\n      _modules_todoFormUI_js__WEBPACK_IMPORTED_MODULE_0__.todoFormUI.remove(e.target);\n      break;\n    case \"todo-input-description-btn\":\n      e.preventDefault();\n      _modules_todoFormUI_js__WEBPACK_IMPORTED_MODULE_0__.todoFormUI.toggleEdit(e.target);\n\n      let input = _modules_todoFormUI_js__WEBPACK_IMPORTED_MODULE_0__.todoFormUI.taskDescInput(e.target);\n      _modules_todoFormUI_js__WEBPACK_IMPORTED_MODULE_0__.todoFormUI.fillLabel(e.target, input.value);\n      break;\n      // add case \"fillPriority\"\n      // add caes \"fillDate\"\n  }\n});\n\n\n//# sourceURL=webpack://my-webpack-project/./src/index.js?");

/***/ }),

/***/ "./src/modules/todoFormUI.js":
/*!***********************************!*\
  !*** ./src/modules/todoFormUI.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"todoFormUI\": () => (/* binding */ todoFormUI)\n/* harmony export */ });\n\n\nconst todoFormUI = (function () {\n  const todoTemplate = document.querySelector(\"#clone-this-todo-template\");\n  const todoList = document.querySelector(\".todos-page-list\");\n  let index = 0;\n\n  function taskDescInput(target) {\n    return target.querySelector(\".todo-input-description\");\n  }\n\n  function taskCheckbox(target) {\n    return target.querySelector(\".checkbox\");\n  }\n\n  function taskLabel(target) {\n    return target.querySelector(\".label-faking-as-checkmark\");\n  }\n\n  function toggleEdit(target) {\n    const checkboxContainer = target.querySelector(\".checkbox-container\");\n    const pencilButton = target.querySelector(\"#todo-edit\");\n\n    pencilButton.style.visibility = pencilButton.style.visibility === \"hidden\" ? \"visible\" : \"hidden\";\n    pencilButton.toggleAttribute(\"disabled\");\n    checkboxContainer.toggleAttribute(\"hidden\");\n    taskDescInput(target).toggleAttribute(\"hidden\");\n    taskDescInput(target).focus();\n  }\n\n  function createBlankForm() {\n    let newTodo = todoTemplate.cloneNode(true);\n    newTodo.toggleAttribute(\"hidden\");\n    addUniqueID(newTodo);\n    addUniqueDescIDAndLabel(newTodo);\n    return newTodo;\n  }\n\n  function displayTodo(todoForm, todoObj) {\n    // [id, DescID, labelFor, priority, completion, dueDate]\n    obj = {\n      id: todoForm.id,\n      DescID: taskCheckbox(todoForm).id,\n      labelFor: taskLabel(todoForm),\n    };\n    alert(todoObj);\n    fillLabel(todoForm, todoObj);\n    fillInput(todoForm, todoObj);\n    // add function to fillPriority\n    // add function to fillDate\n    todoList.prepend(todoForm);\n    return todoForm;\n  }\n\n  function fillLabel(form, todoObj) {\n    taskLabel(form).setAttribute(\"data-content\", todoObj);\n  }\n\n  function fillInput(form, todoObj) {\n    taskDescInput(form).setAttribute(\"value\", todoObj);\n  }\n\n  function addUniqueID(form) {\n    form.id = ++index;\n  }\n\n  function addUniqueDescIDAndLabel(form) {\n    taskCheckbox(form).id = `checkbox: ${form.id}`;\n    taskLabel(form).setAttribute(\"for\", taskCheckbox(form).id);\n  }\n\n  function displayList(listArr) {\n    listArr.forEach((todoObj) => {\n      let form = createBlankForm();\n      todoFormUI.displayTodo(form, todoObj);\n    });\n  }\n\n  function remove(currentTarget) {\n    currentTarget.remove();\n  }\n\n  return {\n    toggleEdit,\n    displayList,\n    remove,\n    createBlankForm,\n    fillLabel,\n    fillInput,\n    displayTodo,\n    taskDescInput,\n    taskLabel,\n  };\n})();\n\n\n//# sourceURL=webpack://my-webpack-project/./src/modules/todoFormUI.js?");

/***/ }),

/***/ "./src/modules/todos.js":
/*!******************************!*\
  !*** ./src/modules/todos.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"todos\": () => (/* binding */ todos)\n/* harmony export */ });\n\n\nconst todos = (function () {\n  let arr = []; // make this load from localstorage at some point\n\n  function add(todo) {\n    arr.push(todo);\n    // arr.sort((a, b) => a > b ? 1 : -1)\n    return arr;\n  }\n\n  function get() {\n    return arr;\n  }\n\n  function remove() {}\n\n  return { add, remove, get };\n})();\n\n\n//# sourceURL=webpack://my-webpack-project/./src/modules/todos.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;