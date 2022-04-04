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

/***/ "./js/components/filter/filter.js":
/*!****************************************!*\
  !*** ./js/components/filter/filter.js ***!
  \****************************************/
/***/ (() => {

eval("var filterBtn = document.querySelector(\".filter-sign\");\nvar filterMenu = document.querySelector(\".search-room__filters\");\nwindow.addEventListener(\"click\", function (e) {\n  if (e.target.closest(\".filter-sign\")) {\n    filterBtn.classList.toggle(\"active\");\n    filterMenu.classList.toggle(\"active\");\n  } else if (!e.target.closest(\".search-room__filters\") && !e.target.closest(\".air-datepicker\")) {\n    filterBtn.classList.remove(\"active\");\n    filterMenu.classList.remove(\"active\");\n  }\n});\n\n//# sourceURL=webpack:///./js/components/filter/filter.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./js/components/filter/filter.js"]();
/******/ 	
/******/ })()
;