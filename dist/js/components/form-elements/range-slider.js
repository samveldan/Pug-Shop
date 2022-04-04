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

/***/ "./js/components/form-elements/range-slider.js":
/*!*****************************************************!*\
  !*** ./js/components/form-elements/range-slider.js ***!
  \*****************************************************/
/***/ (() => {

eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nvar RangeSlider = /*#__PURE__*/function () {\n  function RangeSlider(slider) {\n    _classCallCheck(this, RangeSlider);\n\n    this.slider = slider;\n    this.inputs = this.slider.querySelectorAll(\"input\");\n    this.first = this.inputs[0];\n    this.second = this.inputs[1];\n    this.stopInputsMoving();\n  }\n\n  _createClass(RangeSlider, [{\n    key: \"stopInputsMoving\",\n    value: function stopInputsMoving() {\n      var _this = this;\n\n      var firstValue = parseInt(this.first.value);\n      var secondValue = parseInt(this.second.value);\n      this.second.addEventListener(\"input\", function () {\n        secondValue = parseInt(_this.second.value);\n\n        if (secondValue - 1000 <= firstValue) {\n          _this.second.value = parseInt(_this.first.value) + 1000;\n        }\n\n        _this.showValues(2, _this.second.value);\n      });\n      this.first.addEventListener(\"input\", function () {\n        firstValue = parseInt(_this.first.value);\n\n        if (firstValue >= secondValue - 1000) {\n          _this.first.value = parseInt(_this.second.value) - 1000;\n        }\n\n        _this.showValues(1, _this.first.value);\n      });\n    }\n  }, {\n    key: \"showValues\",\n    value: function showValues(which, value) {\n      var prices = this.slider.querySelector(\".range-slider__price\");\n      var firstSpan = prices.firstElementChild;\n      var lastSpan = prices.lastElementChild;\n\n      if (which == 1) {\n        firstSpan.innerText = value + \"P\";\n      } else {\n        lastSpan.innerText = value + \"P\";\n      }\n    }\n  }]);\n\n  return RangeSlider;\n}();\n\nvar slider = document.querySelector(\".range-slider\");\nsliderOne = new RangeSlider(slider);\n\n//# sourceURL=webpack:///./js/components/form-elements/range-slider.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./js/components/form-elements/range-slider.js"]();
/******/ 	
/******/ })()
;