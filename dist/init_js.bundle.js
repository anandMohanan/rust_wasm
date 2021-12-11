/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkrust_wasm"] = self["webpackChunkrust_wasm"] || []).push([["init_js"],{

/***/ "./init.js":
/*!*****************!*\
  !*** ./init.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pkg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pkg */ \"./pkg/rust_wasm_bg.js\");\n\n\nlet result = _pkg__WEBPACK_IMPORTED_MODULE_0__.add(4,7);\nconsole.log(result);\n\n//# sourceURL=webpack://rust_wasm/./init.js?");

/***/ }),

/***/ "./pkg/rust_wasm_bg.js":
/*!*****************************!*\
  !*** ./pkg/rust_wasm_bg.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"add\": () => (/* binding */ add)\n/* harmony export */ });\n/* harmony import */ var _rust_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rust_wasm_bg.wasm */ \"./pkg/rust_wasm_bg.wasm\");\n/* harmony import */ var _rust_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_rust_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__);\n\n\n/**\n* @param {number} a\n* @param {number} b\n* @returns {number}\n*/\nfunction add(a, b) {\n    var ret = _rust_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.add(a, b);\n    return ret;\n}\n\n\n\n//# sourceURL=webpack://rust_wasm/./pkg/rust_wasm_bg.js?");

/***/ }),

/***/ "./pkg/rust_wasm_bg.wasm":
/*!*******************************!*\
  !*** ./pkg/rust_wasm_bg.wasm ***!
  \*******************************/
/***/ (() => {

eval("throw new Error(\"Module parse failed: Unexpected character '\\u0000' (1:0)\\nThe module seem to be a WebAssembly module, but module is not flagged as WebAssembly module for webpack.\\nBREAKING CHANGE: Since webpack 5 WebAssembly is not enabled by default and flagged as experimental feature.\\nYou need to enable one of the WebAssembly experiments via 'experiments.asyncWebAssembly: true' (based on async modules) or 'experiments.syncWebAssembly: true' (like webpack 4, deprecated).\\nFor files that transpile to WebAssembly, make sure to set the module type in the 'module.rules' section of the config (e. g. 'type: \\\"webassembly/async\\\"').\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack://rust_wasm/./pkg/rust_wasm_bg.wasm?");

/***/ })

}]);