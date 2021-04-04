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

/***/ "./src/UI.js":
/*!*******************!*\
  !*** ./src/UI.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"todoFormUI\": () => (/* binding */ todoFormUI)\n/* harmony export */ });\n\n\nconst todoFormUI = (function () {\n  const todoTemplate = document.querySelector(\"#clone-this-todo-template\");\n  const todoList = document.querySelector(\".todos-page-list\");\n\n  function toggleEdit(currentTarget) {\n    const checkboxContainer = currentTarget.children[1];\n    const todoTextInput = currentTarget.children[2];\n    const pencilButton = currentTarget.children[4].children[2];\n\n    pencilButton.style.visibility = pencilButton.style.visibility === \"hidden\" ? \"visible\" : \"hidden\";\n    pencilButton.toggleAttribute(\"disabled\");\n    checkboxContainer.toggleAttribute(\"hidden\");\n    todoTextInput.toggleAttribute(\"hidden\");\n    todoTextInput.focus();\n  }\n\n  function add() {\n    let newTodo = todoTemplate.cloneNode(true);\n    newTodo.toggleAttribute(\"hidden\");\n    todoList.prepend(newTodo);\n    return newTodo.children[0];\n  }\n\n  function remove(currentTarget) {\n    currentTarget.remove();\n  }\n\n  return { toggleEdit, remove, add };\n})();\n\n\n//# sourceURL=webpack://my-webpack-project/./src/UI.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _UI_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI.js */ \"./src/UI.js\");\n\n\nconst todoForms = document.querySelectorAll(\".todo-form\");\nconst addTodoBtn = document.querySelector(\"#add-todo\");\n\naddTodoBtn.addEventListener(\"click\", (e) => {\n  e.preventDefault();\n  let newTodo = _UI_js__WEBPACK_IMPORTED_MODULE_0__.todoFormUI.add();\n  _UI_js__WEBPACK_IMPORTED_MODULE_0__.todoFormUI.toggleEdit(newTodo);\n  // pressing enter on form refreshes page. can you put preventdefault directly on an element?\n});\n\ntodoForms.forEach((todoForm) => {\n  todoForm.addEventListener(\"submit\", (e) => {\n    switch (e.submitter.id) {\n      case \"todo-edit\":\n        e.preventDefault();\n        _UI_js__WEBPACK_IMPORTED_MODULE_0__.todoFormUI.toggleEdit(e.currentTarget);\n        // todoFormUI.populateInput();\n        break;\n      case \"todo-remove\":\n        e.preventDefault();\n        _UI_js__WEBPACK_IMPORTED_MODULE_0__.todoFormUI.remove(e.currentTarget);\n        break;\n      case \"todo-input-description-btn\":\n        e.preventDefault();\n        _UI_js__WEBPACK_IMPORTED_MODULE_0__.todoFormUI.toggleEdit(e.currentTarget);\n        break;\n    }\n  });\n});\n\n\n//# sourceURL=webpack://my-webpack-project/./src/index.js?");

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