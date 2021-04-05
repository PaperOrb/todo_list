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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_UI_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/UI.js */ \"./src/modules/UI.js\");\n\n\nconst todoForms = document.querySelectorAll(\".todo-form\");\nconst todoList = document.querySelector(\".todos-page-list\");\nconst addTodoBtn = document.querySelector(\"#add-todo\");\n\naddTodoBtn.addEventListener(\"click\", (e) => {\n  e.preventDefault();\n  let newTodo = _modules_UI_js__WEBPACK_IMPORTED_MODULE_0__.todoFormUI.add();\n  _modules_UI_js__WEBPACK_IMPORTED_MODULE_0__.todoFormUI.toggleEdit(newTodo);\n});\n\ntodoList.addEventListener(\"submit\", (e) => {\n  switch (e.submitter.id) {\n    case \"todo-edit\":\n      let description2 = \"not testing\";\n      e.preventDefault();\n      _modules_UI_js__WEBPACK_IMPORTED_MODULE_0__.todoFormUI.toggleEdit(e.target);\n      _modules_UI_js__WEBPACK_IMPORTED_MODULE_0__.todoFormUI.inputNode(e.target).value = description2;\n      break;\n    case \"todo-remove\":\n      e.preventDefault();\n      _modules_UI_js__WEBPACK_IMPORTED_MODULE_0__.todoFormUI.remove(e.target);\n      break;\n    case \"todo-input-description-btn\":\n      let description = \"testing\";\n      e.preventDefault();\n      _modules_UI_js__WEBPACK_IMPORTED_MODULE_0__.todoFormUI.toggleEdit(e.target);\n      _modules_UI_js__WEBPACK_IMPORTED_MODULE_0__.todoFormUI.taskLabel(e.target).setAttribute(\"data-content\", description);\n      break;\n  }\n});\n\n\n//# sourceURL=webpack://my-webpack-project/./src/index.js?");

/***/ }),

/***/ "./src/modules/UI.js":
/*!***************************!*\
  !*** ./src/modules/UI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"todoFormUI\": () => (/* binding */ todoFormUI)\n/* harmony export */ });\n\n\nconst todoFormUI = (function () {\n  const todoTemplate = document.querySelector(\"#clone-this-todo-template\");\n  const todoList = document.querySelector(\".todos-page-list\");\n\n  function inputNode(target) {\n    return target.children[2];\n  }\n\n  function taskLabel(target) {\n    // alert(target.children[1].children[1].classList);\n    return target.children[1].children[1];\n  }\n\n  function toggleEdit(target) {\n    const checkboxContainer = target.children[1];\n    const pencilButton = target.children[4].children[2];\n\n    pencilButton.style.visibility = pencilButton.style.visibility === \"hidden\" ? \"visible\" : \"hidden\";\n    pencilButton.toggleAttribute(\"disabled\");\n    checkboxContainer.toggleAttribute(\"hidden\");\n    inputNode(target).toggleAttribute(\"hidden\");\n    inputNode(target).focus();\n  }\n\n  function add() {\n    let newTodo = todoTemplate.cloneNode(true);\n    newTodo.toggleAttribute(\"hidden\");\n    todoList.prepend(newTodo);\n    return newTodo.children[0];\n  }\n\n  function remove(currentTarget) {\n    currentTarget.remove();\n  }\n\n  return { toggleEdit, remove, add, inputNode, taskLabel };\n})();\n\n\n//# sourceURL=webpack://my-webpack-project/./src/modules/UI.js?");

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