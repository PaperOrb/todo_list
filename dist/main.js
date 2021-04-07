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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_todoFormUI_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/todoFormUI.js */ \"./src/modules/todoFormUI.js\");\n/* harmony import */ var _modules_todos_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/todos.js */ \"./src/modules/todos.js\");\n\n\n\nconst todoForms = document.querySelectorAll(\".todo-form\");\nconst todoList = document.querySelector(\".todos-page-list\");\nconst addTodoBtn = document.querySelector(\"#add-todo\");\nlet index = 0;\n\n// module purely for testing load page\n// (function () {\n// redo this to use todoObj\n//   let localStorage = [\"testing\", \"mah\", \"storage\", \"next\", \"testasdf\", \"mah\", \"storage\", \"next\", \"testasdf\"];\n//   todoFormUI.displayList(localStorage);\n// })();\n\naddTodoBtn.addEventListener(\"click\", (e) => {\n  e.preventDefault();\n  let todoObj = _modules_todos_js__WEBPACK_IMPORTED_MODULE_1__.todos.addTodoObj({});\n  let form = _modules_todoFormUI_js__WEBPACK_IMPORTED_MODULE_0__.todoFormUI.attachBlankForm();\n  _modules_todoFormUI_js__WEBPACK_IMPORTED_MODULE_0__.todoFormUI.updateTodoForm(form, todoObj);\n  // todoFormUI.toggleEdit(form, todoObj);\n});\n\n// todoList.addEventListener(\"submit\", (e) => {\n//   switch (e.submitter.id) {\n//     case \"todo-edit\":\n//       e.preventDefault();\n//       todoFormUI.toggleEdit(e.target);\n//       getDescInputEle(form).setAttribute(\"value\", data);\n//       break;\n//     case \"todo-remove\":\n//       e.preventDefault();\n//       todoFormUI.remove(e.target);\n//       break;\n//     case \"todo-input-description-btn\":\n//       e.preventDefault();\n\n//       let todoObj = todos.findTodo(e.target.id);\n//       todoObj.priority = todoFormUI.getPriorityInput(e.target);\n//       todoObj.labelDataContent = todoFormUI.getDescriptionInput(e.target);\n//       todoObj.dueDate = todoFormUI.getDateInput(e.target);\n\n//       todoFormUI.populateTodo(e.target, todoObj);\n//       todoFormUI.toggleEdit(e.target);\n//       break;\n//     // add case \"fillPriority\"\n//     // add caes \"fillDate\"\n//   }\n// });\n\n\n//# sourceURL=webpack://my-webpack-project/./src/index.js?");

/***/ }),

/***/ "./src/modules/todoFormUI.js":
/*!***********************************!*\
  !*** ./src/modules/todoFormUI.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"todoFormUI\": () => (/* binding */ todoFormUI)\n/* harmony export */ });\n\n\nconst todoFormUI = (function () {\n  const todoTemplate = document.querySelector(\"#clone-this-todo-template\");\n  const todoList = document.querySelector(\".todos-page-list\");\n\n  function getDescInputEle(target) {\n    return target.querySelector(\".todo-input-description\");\n  }\n\n  function taskLabel(target) {\n    return target.querySelector(\".label-faking-as-checkmark\");\n  }\n\n  function toggleEdit(target) {\n    const checkboxContainer = target.querySelector(\".checkbox-container\");\n    const pencilButton = target.querySelector(\"#todo-edit\");\n\n    pencilButton.style.visibility = pencilButton.style.visibility === \"hidden\" ? \"visible\" : \"hidden\";\n    pencilButton.toggleAttribute(\"disabled\");\n    checkboxContainer.toggleAttribute(\"hidden\");\n    descriptionInputEle(target).toggleAttribute(\"hidden\");\n    descriptionInputEle(target).focus();\n  }\n\n  function updateTodoForm(todoForm, todoObj) {\n    todoForm.id = todoObj.id; // set form id\n    todoForm.querySelector(\".checkbox\").id = `checkbox: ${todoObj.id}`; // set checkbox ID\n    taskLabel(todoForm).setAttribute(\"for\", taskCheckbox(todoForm).id); // set label for attribute\n    taskLabel(form).setAttribute(\"data-content\", todoObj.labelDataContent); // set label content\n    descriptionInputEle(form).setAttribute(\"value\", todoObj.labelDataContent); // set input value from label content\n    // add function to fillPriority\n    // add function to fillDate\n  }\n\n  function attachBlankForm() {\n    let newTodo = todoTemplate.cloneNode(true);\n    newTodo.toggleAttribute(\"hidden\");\n    return newTodo;\n  }\n\n  function displayList(listArr) {\n    listArr.forEach((todoObj) => {\n      let form = createBlankForm();\n      todoFormUI.attachBlankForm(form, todoObj);\n      todoFormUI.populateTodo(todoForm, todoObj);\n    });\n  }\n\n  function remove(currentTarget) {\n    currentTarget.remove();\n  }\n\n  return {\n    toggleEdit,\n    displayList,\n    remove,\n    attachBlankForm,\n    // getPriorityInput\n    getDescInputEle,\n    // getDateInput\n    // getCompletionStatusInput\n    updateTodoForm,\n  };\n})();\n\n\n//# sourceURL=webpack://my-webpack-project/./src/modules/todoFormUI.js?");

/***/ }),

/***/ "./src/modules/todos.js":
/*!******************************!*\
  !*** ./src/modules/todos.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"todos\": () => (/* binding */ todos)\n/* harmony export */ });\n\n\nconst todos = (function () {\n  let arr = []; // make this load from localstorage at some point\n  let index = 0;\n\n  // there's no named parameters in vanilla JS to set a specific param, so have to supply all args every time\n  function addTodoObj({ labelDataContent, priority, completion, dueDate }) {\n    let todoObj = {\n      id: ++index,\n      descID: `descID: ${index}`,\n      labelFor: `descID: ${index}`,\n      labelDataContent: labelDataContent,\n      priority: priority,\n      completion: completion,\n      dueDate: dueDate,\n    };\n    arr.push(todoObj);\n    // // arr.sort((a, b) => a > b ? 1 : -1)\n    return todoObj;\n  }\n\n  function getList() {\n    return arr;\n  }\n\n  function updateTodo() {}\n\n  function removeTodo() {}\n\n  return { updateTodo, removeTodo, getList, addTodoObj };\n})();\n\n\n//# sourceURL=webpack://my-webpack-project/./src/modules/todos.js?");

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