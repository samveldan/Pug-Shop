/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/components/burger-menu/burger-menu.js":
/*!**************************************************!*\
  !*** ./js/components/burger-menu/burger-menu.js ***!
  \**************************************************/
/***/ (() => {

eval("var burger = document.querySelector(\".burger\");\nvar menu = document.querySelector(\".burger-menu\");\nwindow.addEventListener(\"click\", function (e) {\n  if (e.target.closest(\".burger\")) {\n    burger.classList.toggle(\"active\");\n    menu.classList.toggle(\"active\");\n  } else if (!e.target.closest(\".burger-menu\")) {\n    burger.classList.remove(\"active\");\n    menu.classList.remove(\"active\");\n  }\n});\n\n//# sourceURL=webpack:///./js/components/burger-menu/burger-menu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./js/components/burger-menu/burger-menu.js"]();
/******/ 	
/******/ })()
;