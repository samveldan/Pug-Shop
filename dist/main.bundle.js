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

/***/ "./scss/style.scss":
/*!*************************!*\
  !*** ./scss/style.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./scss/style.scss?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/style.scss */ \"./scss/style.scss\");\n/* harmony import */ var _js_components_form_elements_dropdown_block_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/components/form-elements/dropdown-block.js */ \"./js/components/form-elements/dropdown-block.js\");\n/* harmony import */ var _js_components_form_elements_dropdown_block_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_components_form_elements_dropdown_block_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _js_components_form_elements_range_slider_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/components/form-elements/range-slider.js */ \"./js/components/form-elements/range-slider.js\");\n/* harmony import */ var _js_components_form_elements_range_slider_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_components_form_elements_range_slider_js__WEBPACK_IMPORTED_MODULE_2__);\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./js/components/form-elements/dropdown-block.js":
/*!*******************************************************!*\
  !*** ./js/components/form-elements/dropdown-block.js ***!
  \*******************************************************/
/***/ (() => {

eval("class Dropdown {\r\n    constructor(blocks) {\r\n        this.blocks = blocks;\r\n\r\n        this.setListener(this.blocks);\r\n        this.setOpenItems(this.blocks);\r\n        this.setBtnListeners(this.blocks);\r\n\r\n        this.blocks.forEach(fullBlock => {\r\n            this.removeCleanBtn(fullBlock, this.checkUseBtn(fullBlock));\r\n        });\r\n\r\n        this.clear();\r\n    }\r\n\r\n    setListener(items) {\r\n        items.forEach(element => {\r\n            let top = this.findTopBlock(element);\r\n\r\n            top.addEventListener(\"click\", (e) => {\r\n                let selectionBlock = element.querySelector(\".selection\");\r\n                let currentHeight = selectionBlock.firstElementChild.clientHeight;\r\n\r\n                if(!element.classList.contains(\"active\")) {\r\n                    selectionBlock.style.height = currentHeight + \"px\";\r\n                }\r\n                else {\r\n                    selectionBlock.style.height = 0 + \"px\";\r\n                }\r\n\r\n                element.classList.toggle(\"active\");\r\n            });\r\n        });\r\n    }\r\n\r\n    setOpenItems(items) {\r\n        items.forEach(element => {\r\n            let selectionBlock = element.querySelector(\".selection\");\r\n            let currentHeight = selectionBlock.firstElementChild.clientHeight;\r\n\r\n            if(element.classList.contains(\"active\")) {\r\n                selectionBlock.style.height = currentHeight + \"px\";\r\n            }\r\n        });\r\n    }\r\n\r\n    findTopBlock(element) {\r\n        for(let i = 0; i < element.children.length; i++) {\r\n            if(element.children[i].className.includes(\"top\")) {\r\n                return element.children[i];\r\n            }\r\n        }\r\n    }\r\n\r\n    setBtnListeners(blocks) {\r\n        blocks.forEach(block => {\r\n            if(block.querySelector(\".dropdown-block__option-nums\")) {\r\n                let nums = block.querySelectorAll(\".dropdown-block__option-nums\");\r\n\r\n                nums.forEach(element => {\r\n                    let minusBtn = element.querySelector(\"div:first-child\");\r\n                    let plusBtn = element.querySelector(\"div:last-child\");\r\n                    \r\n                    minusBtn.addEventListener(\"click\", (e) => {\r\n                        this.changeNums(e.target);\r\n                    });\r\n                    plusBtn.addEventListener(\"click\", (e) => {\r\n                        this.changeNums(e.target);\r\n                        minusBtn.classList.remove(\"dropdown-block__disabled-btn\");\r\n                    });\r\n                });\r\n            }\r\n        });\r\n    }\r\n\r\n    changeNums(item) {\r\n        let parent = item.parentElement;\r\n        let text = parent.querySelector(\"span\");\r\n        let fullBlock = parent.closest(\".dropdown-block__dropdown\");\r\n        let title = fullBlock.querySelector(\".input-dropdown\");\r\n        \r\n        if(item.innerText === \"+\") {\r\n            text.innerText = parseInt(text.innerText) + 1;\r\n        }\r\n        else {\r\n            if(text.innerText != \"0\") text.innerText = parseInt(text.innerText) - 1;\r\n            if(text.innerText == \"0\") item.classList.add(\"dropdown-block__disabled-btn\");\r\n        }\r\n\r\n        this.removeCleanBtn(fullBlock, this.checkUseBtn(fullBlock));\r\n\r\n        title.value = this.getTitles(fullBlock);\r\n    }\r\n\r\n    checkUseBtn(parent) {\r\n        return parent.querySelector(\".dropdown-block__use.use\");\r\n    }\r\n\r\n    getTitles(block) {\r\n        let options = block.querySelectorAll(\".dropdown-block__option\");\r\n        let text = [];\r\n        let guests = 0;\r\n\r\n        options.forEach(element => {\r\n            let guestTitle = element.querySelector(\"h3\").innerText.toLowerCase();\r\n            let guestNum = element.querySelector(\"span\").innerText;\r\n            \r\n            if(guestTitle == \"взрослые\" || guestTitle == \"дети\")  {\r\n                guests += parseInt(guestNum);\r\n            }\r\n        });\r\n\r\n        options.forEach(element => {\r\n            let title = element.querySelector(\"h3\").innerText.toLowerCase();\r\n            let num = element.querySelector(\"span\").innerText;\r\n            \r\n            if(parseInt(num) != 0) {\r\n                if(title == \"взрослые\" || title == \"дети\")  {\r\n                    title = \"гостя\";\r\n                    num = guests;\r\n                }\r\n                text.push(`${num} ${title}`);\r\n            }\r\n        });\r\n        text = text.filter((item, index, array) => {\r\n            return array.indexOf(item) == index;\r\n        }).join(\", \");\r\n\r\n        if(text.length > 20) {\r\n            let newText = \"\";\r\n            for(let i = 0; i < 20; i++) {\r\n                newText += text[i];\r\n            }\r\n            return newText + \"...\";\r\n        }\r\n        else return text;\r\n    }\r\n\r\n    removeCleanBtn(block, hasUseBtn) {\r\n        if(hasUseBtn) {\r\n            let cleanBtn = block.querySelector(\".dropdown-block__use.clean\");\r\n            let nums = block.querySelectorAll(\".dropdown-block__option-nums\");\r\n            let count = 0;\r\n\r\n            nums.forEach(element => {\r\n                let span = element.querySelector(\"span\");\r\n                if(span.innerText == \"0\") count += 1;\r\n            });\r\n            if(count == nums.length) {\r\n                cleanBtn.style.display = \"none\";\r\n            }\r\n            else {\r\n                cleanBtn.style.display = \"block\";\r\n            }\r\n        }\r\n    }\r\n\r\n    clear() {\r\n        let cleanBtns = document.querySelectorAll(\".clean\");\r\n\r\n        cleanBtns.forEach(cleanBtn => {\r\n            cleanBtn.onclick = function(e) {\r\n                let parentBlock = this.closest(\".selection\");\r\n                let input = parentBlock.previousElementSibling.querySelector(\"input\");\r\n                let options = parentBlock.querySelectorAll(\".dropdown-block__option\");\r\n\r\n                options.forEach((option) => {\r\n                    let btnBlock = option.querySelector(\".dropdown-block__option-nums\");\r\n                    let minusBtn = btnBlock.firstElementChild;\r\n\r\n                    option.querySelector(\"span\").innerText = 0;\r\n                    minusBtn.classList.add(\"dropdown-block__disabled-btn\");\r\n                });\r\n                \r\n                cleanBtn.style.display = \"none\";\r\n                input.value = \"Сколько гостей\";\r\n            };\r\n        });\r\n    }\r\n}\r\n\r\nconst dropdownAll = document.querySelectorAll(\".dropdown-block__dropdown\");\r\nnew Dropdown(dropdownAll);\r\n\r\nconst expandchecksAll = document.querySelectorAll(\".expand-checkbox\");\r\nnew Dropdown(expandchecksAll);\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./js/components/form-elements/dropdown-block.js?");

/***/ }),

/***/ "./js/components/form-elements/range-slider.js":
/*!*****************************************************!*\
  !*** ./js/components/form-elements/range-slider.js ***!
  \*****************************************************/
/***/ (() => {

eval("class RangeSlider {\r\n    constructor(slider) {\r\n        this.slider = slider;\r\n        this.inputs = this.slider.querySelectorAll(\"input\");\r\n        this.first = this.inputs[0];\r\n        this.second = this.inputs[1];\r\n\r\n        this.stopInputsMoving();\r\n    }\r\n\r\n    stopInputsMoving() {\r\n        let firstValue = parseInt(this.first.value);\r\n        let secondValue = parseInt(this.second.value);\r\n\r\n        this.second.addEventListener(\"input\", () => {\r\n            secondValue = parseInt(this.second.value);\r\n\r\n            if(secondValue - 1000 <= firstValue) {\r\n                this.second.value = parseInt(this.first.value) + 1000;\r\n            }\r\n            this.showValues(2, this.second.value);\r\n        });\r\n        this.first.addEventListener(\"input\", () => {\r\n            firstValue = parseInt(this.first.value);\r\n\r\n            if(firstValue >= secondValue - 1000) {\r\n                this.first.value = parseInt(this.second.value) - 1000;\r\n            }\r\n            this.showValues(1, this.first.value);\r\n        });\r\n    }\r\n\r\n    showValues(which, value) {\r\n        let prices = this.slider.querySelector(\".range-slider__price\");\r\n        let firstSpan = prices.firstElementChild;        \r\n        let lastSpan = prices.lastElementChild;        \r\n\r\n        if(which == 1) {\r\n            firstSpan.innerText = value + \"P\";\r\n        }\r\n        else {\r\n            lastSpan.innerText = value + \"P\";\r\n        }\r\n    }\r\n}\r\n\r\nlet slider = document.querySelector(\".range-slider\");\r\nsliderOne = new RangeSlider(slider);\n\n//# sourceURL=webpack:///./js/components/form-elements/range-slider.js?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;