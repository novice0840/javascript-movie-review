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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/common.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/common.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../templates/search_button.png */ \"./templates/search_button.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  box-sizing: border-box !important;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  font-size: 14px;\\r\\n  background-color: #222222;\\r\\n  color: #fff;\\r\\n}\\r\\n\\r\\na {\\r\\n  color: inherit;\\r\\n  text-decoration: none;\\r\\n}\\r\\n\\r\\nbutton {\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n#app {\\r\\n  padding-bottom: 48px;\\r\\n}\\r\\n\\r\\n*:focus {\\r\\n  outline: none;\\r\\n}\\r\\n.item-view,\\r\\n.item-test {\\r\\n  width: 100%;\\r\\n  max-width: 1200px;\\r\\n}\\r\\n\\r\\n.item-view {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: center;\\r\\n  margin: 0 auto;\\r\\n}\\r\\n\\r\\n.item-view h2 {\\r\\n  font-size: 2rem;\\r\\n  font-weight: bold;\\r\\n  user-select: none;\\r\\n}\\r\\n\\r\\n/* https://andrew.hedges.name/experiments/aspect_ratio/ */\\r\\n\\r\\n.item-list {\\r\\n  display: grid;\\r\\n  margin: 48px 0;\\r\\n  grid-template-columns: repeat(4, 1fr);\\r\\n  grid-row-gap: 48px;\\r\\n\\r\\n  /* 태블릿 크기 */\\r\\n  @media (max-width: 1250px) {\\r\\n    grid-template-columns: repeat(3, 1fr);\\r\\n  }\\r\\n\\r\\n  /* 모바일 크기 */\\r\\n  @media (max-width: 850px) {\\r\\n    grid-template-columns: repeat(2, 1fr);\\r\\n  }\\r\\n}\\r\\n\\r\\n.item-card {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n}\\r\\n\\r\\n.item-thumbnail {\\r\\n  border-radius: 8px;\\r\\n  width: 180px;\\r\\n  height: 270px;\\r\\n  background-size: contain;\\r\\n}\\r\\n\\r\\n.item-title {\\r\\n  margin-top: 16px;\\r\\n  font-size: 1.2rem;\\r\\n  font-weight: bold;\\r\\n}\\r\\n\\r\\n.item-score {\\r\\n  margin-top: 16px;\\r\\n  font-size: 1.2rem;\\r\\n}\\r\\n\\r\\n.item-score::after {\\r\\n  margin-left: 8px;\\r\\n}\\r\\n\\r\\n.item-title.skeleton::after,\\r\\n.item-score.skeleton::after {\\r\\n  font-size: 0;\\r\\n  content: \\\"loading\\\";\\r\\n}\\r\\n\\r\\n.full-width {\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.last-item {\\r\\n  margin-top: 48px;\\r\\n}\\r\\n\\r\\nbutton.btn {\\r\\n  border: 0;\\r\\n  border-radius: 8px;\\r\\n  height: 30px;\\r\\n  color: #fff;\\r\\n}\\r\\n\\r\\nbutton.primary {\\r\\n  background: #f33f3f;\\r\\n}\\r\\n\\r\\n.item-card .skeleton {\\r\\n  background: linear-gradient(-90deg, #aaa, #f0f0f0, #aaa, #f0f0f0);\\r\\n  background-size: 400%;\\r\\n  animation: skeleton-animation 5s infinite ease-out;\\r\\n  border-radius: 8px;\\r\\n}\\r\\n\\r\\n@keyframes skeleton-animation {\\r\\n  0% {\\r\\n    background-position: 0% 50%;\\r\\n  }\\r\\n  50% {\\r\\n    background-position: 100% 50%;\\r\\n  }\\r\\n  100% {\\r\\n    background-position: 0% 50%;\\r\\n  }\\r\\n}\\r\\nheader {\\r\\n  width: 100%;\\r\\n  height: 72px;\\r\\n  background-color: #222;\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  padding: 0 20px;\\r\\n  border-bottom: 1px solid white;\\r\\n  margin-bottom: 48px;\\r\\n}\\r\\n\\r\\nheader h1 {\\r\\n  cursor: pointer;\\r\\n  user-select: none;\\r\\n  font-size: 2rem;\\r\\n  font-weight: bold;\\r\\n  letter-spacing: -0.1rem;\\r\\n  color: #f33f3f;\\r\\n}\\r\\n\\r\\nheader > .search-box {\\r\\n  background: #fff;\\r\\n  padding: 8px;\\r\\n  border-radius: 4px;\\r\\n}\\r\\n\\r\\nheader .search-box > .search-form > #search-input {\\r\\n  border: 0;\\r\\n}\\r\\n\\r\\nheader .search-box > form > .search-button {\\r\\n  width: 14px;\\r\\n  border: 0;\\r\\n  text-indent: -1000rem;\\r\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") transparent no-repeat 0 1px;\\r\\n  background-size: contain;\\r\\n}\\r\\n\\r\\n.empty-result {\\r\\n  width: 100%;\\r\\n  height: 50vh;\\r\\n\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  text-align: center;\\r\\n  font-size: 1.2rem;\\r\\n  line-height: 24px;\\r\\n}\\r\\n\\r\\n.hidden {\\r\\n  display: none;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/styles/common.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/modal.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/modal.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".modal {\\r\\n  width: 826px;\\r\\n  height: 577px;\\r\\n  min-width: 400px;\\r\\n  background-color: #212122;\\r\\n  border: 0;\\r\\n  padding: 0;\\r\\n  border-radius: 8px;\\r\\n  color: white;\\r\\n  line-height: 24px;\\r\\n  z-index: 1;\\r\\n  /* 모바일 크기 */\\r\\n  @media (max-width: 800px) {\\r\\n    max-width: 800px;\\r\\n    width: 100%;\\r\\n    margin-bottom: 0;\\r\\n    .star-score-description {\\r\\n      display: none;\\r\\n    }\\r\\n  }\\r\\n}\\r\\n\\r\\n.modal::backdrop {\\r\\n  position: fixed;\\r\\n  top: 0;\\r\\n  right: 0;\\r\\n  left: 0;\\r\\n  bottom: 0;\\r\\n  background: rgba(0, 0, 0, 0.35);\\r\\n}\\r\\n\\r\\n.modal > h3.movie-title {\\r\\n  text-align: center;\\r\\n  font-size: 20px;\\r\\n  padding: 10px;\\r\\n  border-bottom: 1px solid rgba(128, 128, 128, 0.75);\\r\\n}\\r\\n\\r\\n.modal > section {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  padding: 20px;\\r\\n  & .movie-thumbnail {\\r\\n    margin: 10px;\\r\\n  }\\r\\n}\\r\\n\\r\\n.modal > section > .movie-info {\\r\\n  width: 450px;\\r\\n  display: flex;\\r\\n  flex: 1;\\r\\n  flex-direction: column;\\r\\n  justify-content: space-between;\\r\\n  & .movie-genres {\\r\\n    display: flex;\\r\\n  }\\r\\n}\\r\\n\\r\\n.movie-thumbnail {\\r\\n  width: 292px;\\r\\n  height: 433px;\\r\\n  /* 모바일 크기 */\\r\\n  @media (max-width: 800px) {\\r\\n    display: none;\\r\\n  }\\r\\n}\\r\\n\\r\\n.movie-overview {\\r\\n  height: 300px;\\r\\n}\\r\\n\\r\\n.my-vote-average {\\r\\n  height: 64px;\\r\\n  background-color: #383839;\\r\\n  border-radius: 16px;\\r\\n  padding: 0 20px;\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n  & .star-score-images {\\r\\n    width: 150px;\\r\\n    display: flex;\\r\\n    justify-content: space-evenly;\\r\\n    & img:hover {\\r\\n      transform: scale(1.2);\\r\\n    }\\r\\n  }\\r\\n  & .star-score {\\r\\n    margin: 0 10px;\\r\\n    width: 10px;\\r\\n  }\\r\\n  & .star-score-description {\\r\\n    width: 80px;\\r\\n  }\\r\\n}\\r\\n\\r\\n.modal-close-button {\\r\\n  position: absolute;\\r\\n  width: 30px;\\r\\n  height: 30px;\\r\\n  color: white;\\r\\n  font-size: 14px;\\r\\n  top: 0px;\\r\\n  right: 10px;\\r\\n  border: 0;\\r\\n  border-radius: 50%;\\r\\n  background-color: #383839;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/styles/modal.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/reset.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/reset.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* http://meyerweb.com/eric/tools/css/reset/\\r\\n   v2.0 | 20110126\\r\\n   License: none (public domain)\\r\\n*/\\r\\n\\r\\nhtml,\\r\\nbody,\\r\\ndiv,\\r\\nspan,\\r\\napplet,\\r\\nobject,\\r\\niframe,\\r\\nh1,\\r\\nh2,\\r\\nh3,\\r\\nh4,\\r\\nh5,\\r\\nh6,\\r\\np,\\r\\nblockquote,\\r\\npre,\\r\\na,\\r\\nabbr,\\r\\nacronym,\\r\\naddress,\\r\\nbig,\\r\\ncite,\\r\\ncode,\\r\\ndel,\\r\\ndfn,\\r\\nem,\\r\\nimg,\\r\\nins,\\r\\nkbd,\\r\\nq,\\r\\ns,\\r\\nsamp,\\r\\nsmall,\\r\\nstrike,\\r\\nstrong,\\r\\nsub,\\r\\nsup,\\r\\ntt,\\r\\nvar,\\r\\nb,\\r\\nu,\\r\\ni,\\r\\ncenter,\\r\\ndl,\\r\\ndt,\\r\\ndd,\\r\\nol,\\r\\nul,\\r\\nli,\\r\\nfieldset,\\r\\nform,\\r\\nlabel,\\r\\nlegend,\\r\\ntable,\\r\\ncaption,\\r\\ntbody,\\r\\ntfoot,\\r\\nthead,\\r\\ntr,\\r\\nth,\\r\\ntd,\\r\\narticle,\\r\\naside,\\r\\ncanvas,\\r\\ndetails,\\r\\nembed,\\r\\nfigure,\\r\\nfigcaption,\\r\\nfooter,\\r\\nheader,\\r\\nhgroup,\\r\\nmenu,\\r\\nnav,\\r\\noutput,\\r\\nruby,\\r\\nsection,\\r\\nsummary,\\r\\ntime,\\r\\nmark,\\r\\naudio,\\r\\nvideo {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  border: 0;\\r\\n  font-size: 100%;\\r\\n  font: inherit;\\r\\n  vertical-align: baseline;\\r\\n}\\r\\n/* HTML5 display-role reset for older browsers */\\r\\narticle,\\r\\naside,\\r\\ndetails,\\r\\nfigcaption,\\r\\nfigure,\\r\\nfooter,\\r\\nheader,\\r\\nhgroup,\\r\\nmenu,\\r\\nnav,\\r\\nsection {\\r\\n  display: block;\\r\\n}\\r\\nbody {\\r\\n  line-height: 1;\\r\\n}\\r\\nol,\\r\\nul {\\r\\n  list-style: none;\\r\\n}\\r\\nblockquote,\\r\\nq {\\r\\n  quotes: none;\\r\\n}\\r\\nblockquote:before,\\r\\nblockquote:after,\\r\\nq:before,\\r\\nq:after {\\r\\n  content: \\\"\\\";\\r\\n  content: none;\\r\\n}\\r\\ntable {\\r\\n  border-collapse: collapse;\\r\\n  border-spacing: 0;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/styles/reset.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/common.css":
/*!*******************************!*\
  !*** ./src/styles/common.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_common_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./common.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/common.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_common_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_common_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_common_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_common_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/styles/common.css?");

/***/ }),

/***/ "./src/styles/modal.css":
/*!******************************!*\
  !*** ./src/styles/modal.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./modal.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/modal.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/styles/modal.css?");

/***/ }),

/***/ "./src/styles/reset.css":
/*!******************************!*\
  !*** ./src/styles/reset.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./reset.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/reset.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/styles/reset.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/App.ts":
/*!********************!*\
  !*** ./src/App.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var _common_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common/Component */ \"./src/common/Component.ts\");\n/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/dom */ \"./src/utils/dom.ts\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Header */ \"./src/components/Header.ts\");\n/* harmony import */ var _components_MovieList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/MovieList */ \"./src/components/MovieList.ts\");\n\r\n\r\n\r\n\r\nclass App extends _common_Component__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n    getTemplate() {\r\n        return `\r\n      <header></header>\r\n      <main>\r\n        <section class=\"item-view\">\r\n        </section>\r\n      </main>\r\n      <dialog class=\"modal\">\r\n      </dialog>\r\n    `;\r\n    }\r\n    createChild() {\r\n        const header = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.$)(\"header\");\r\n        const section = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.$)(\".item-view\");\r\n        if (section) {\r\n            const movieList = new _components_MovieList__WEBPACK_IMPORTED_MODULE_3__[\"default\"](section);\r\n            header &&\r\n                new _components_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"](header, {\r\n                    onLogoClick: movieList.handleResetMovieList.bind(movieList),\r\n                    onSearchKeywordSubmit: movieList.handleSearchMovie.bind(movieList),\r\n                });\r\n        }\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/App.ts?");

/***/ }),

/***/ "./src/assets/image.ts":
/*!*****************************!*\
  !*** ./src/assets/image.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"logo\": () => (/* reexport default export from named module */ _templates_logo_png__WEBPACK_IMPORTED_MODULE_3__),\n/* harmony export */   \"searchButton\": () => (/* reexport default export from named module */ _templates_search_button_png__WEBPACK_IMPORTED_MODULE_2__),\n/* harmony export */   \"starEmpty\": () => (/* reexport default export from named module */ _templates_star_empty_png__WEBPACK_IMPORTED_MODULE_1__),\n/* harmony export */   \"starImage\": () => (/* reexport default export from named module */ _templates_star_filled_png__WEBPACK_IMPORTED_MODULE_0__)\n/* harmony export */ });\n/* harmony import */ var _templates_star_filled_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../templates/star_filled.png */ \"./templates/star_filled.png\");\n/* harmony import */ var _templates_star_empty_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../templates/star_empty.png */ \"./templates/star_empty.png\");\n/* harmony import */ var _templates_search_button_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../templates/search_button.png */ \"./templates/search_button.png\");\n/* harmony import */ var _templates_logo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../templates/logo.png */ \"./templates/logo.png\");\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/assets/image.ts?");

/***/ }),

/***/ "./src/common/Component.ts":
/*!*********************************!*\
  !*** ./src/common/Component.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Component)\n/* harmony export */ });\nclass Component {\r\n    constructor($target, props) {\r\n        this.$target = $target;\r\n        this.props = props;\r\n        this.render();\r\n        this.setEvent();\r\n    }\r\n    getTemplate() {\r\n        return ``;\r\n    }\r\n    setEvent() { }\r\n    createChild() { }\r\n    render() {\r\n        this.$target.innerHTML = this.getTemplate();\r\n        this.createChild();\r\n    }\r\n    setState(newState) {\r\n        this.state = newState;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/common/Component.ts?");

/***/ }),

/***/ "./src/components/Header.ts":
/*!**********************************!*\
  !*** ./src/components/Header.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _common_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/Component */ \"./src/common/Component.ts\");\n/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/dom */ \"./src/utils/dom.ts\");\n/* harmony import */ var _assets_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/image */ \"./src/assets/image.ts\");\n\r\n\r\n\r\nclass Header extends _common_Component__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n    constructor() {\r\n        super(...arguments);\r\n        this.formElement = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.$)(\"#search-form\");\r\n    }\r\n    getTemplate() {\r\n        return `\r\n      <h1 id=\"logo\"><img src=\"${_assets_image__WEBPACK_IMPORTED_MODULE_2__.logo}\" alt=\"MovieList 로고\" /></h1>\r\n      <div class=\"search-box\">\r\n          <form class=\"search-form\">\r\n            <input id=\"search-input\" type=\"text\" name=\"search-input\" placeholder=\"검색\"/>\r\n            <button id=\"search-button\" type=\"submit\" class=\"search-button\">검색</button>\r\n          </form>\r\n      </div>\r\n    `;\r\n    }\r\n    resetSearchForm() {\r\n        this.formElement && this.formElement.reset();\r\n    }\r\n    setEvent() {\r\n        var _a;\r\n        if (!this.props)\r\n            return;\r\n        const { onLogoClick, onSearchKeywordSubmit } = this.props;\r\n        (_a = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.$)(\"#logo\")) === null || _a === void 0 ? void 0 : _a.addEventListener(\"click\", () => {\r\n            onLogoClick();\r\n            this.resetSearchForm();\r\n        });\r\n        const inputElment = document.querySelector(\"#search-input\");\r\n        const searchForm = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.$)(\".search-form\");\r\n        const $logo = document.querySelector(\"#logo\");\r\n        if (!inputElment || !searchForm || !$logo)\r\n            return;\r\n        searchForm.addEventListener(\"submit\", (e) => {\r\n            e.preventDefault();\r\n            const inputDisplay = getComputedStyle(inputElment).display;\r\n            if (inputDisplay === \"inline-block\") {\r\n                onSearchKeywordSubmit(inputElment.value);\r\n            }\r\n            else if (inputDisplay === \"none\") {\r\n                $logo.style.display = \"none\";\r\n                inputElment.style.display = \"inline-block\";\r\n            }\r\n        });\r\n        window.addEventListener(\"resize\", () => {\r\n            if (window.innerWidth < 500) {\r\n                inputElment.style.display = \"none\";\r\n            }\r\n            else {\r\n                $logo.style.display = \"inline-block\";\r\n                inputElment.style.display = \"inline-block\";\r\n            }\r\n        });\r\n    }\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);\r\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/Header.ts?");

/***/ }),

/***/ "./src/components/Movie.ts":
/*!*********************************!*\
  !*** ./src/components/Movie.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createMovieElement\": () => (/* binding */ createMovieElement)\n/* harmony export */ });\n/* harmony import */ var _assets_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/image */ \"./src/assets/image.ts\");\n/* harmony import */ var _http_MovieClient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http/MovieClient */ \"./src/http/MovieClient.ts\");\n/* harmony import */ var _utils_localStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/localStorage */ \"./src/utils/localStorage.ts\");\n/* harmony import */ var _constants_movies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/movies */ \"./src/constants/movies.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\n\r\n\r\n\r\n\r\nconst drawStarScore = (movieId) => {\r\n    const myVoteAverage = (0,_utils_localStorage__WEBPACK_IMPORTED_MODULE_2__.getMyVoteAverage)(movieId);\r\n    const $starScoreImages = document.querySelector(\".star-score-images\");\r\n    const $starScore = document.querySelector(\".star-score\");\r\n    const $starScoreDescription = document.querySelector(\".star-score-description\");\r\n    if (!$starScoreImages || !$starScoreDescription || !$starScore)\r\n        return;\r\n    $starScoreImages.innerHTML = `\r\n    ${`<img src=\"${_assets_image__WEBPACK_IMPORTED_MODULE_0__.starImage}\" alt=\"별점\" class=\"star\" />`.repeat(myVoteAverage / 2)}\r\n    ${`<img src=\"${_assets_image__WEBPACK_IMPORTED_MODULE_0__.starEmpty}\" alt=\"별점\" class=\"star\" />`.repeat(5 - myVoteAverage / 2)}\r\n  `;\r\n    $starScore.innerText = myVoteAverage.toString();\r\n    $starScoreDescription.innerText = `${_constants_movies__WEBPACK_IMPORTED_MODULE_3__.STAR_SCORE_DESCRIPTION[myVoteAverage]}`;\r\n    const $stars = document.querySelectorAll(\".star\");\r\n    $stars.forEach(($star) => {\r\n        $star.addEventListener(\"click\", (e) => {\r\n            e.preventDefault();\r\n            const starIndex = Array.from($stars).indexOf($star);\r\n            (0,_utils_localStorage__WEBPACK_IMPORTED_MODULE_2__.setMyVoteAverage)(movieId, (starIndex + 1) * 2);\r\n            drawStarScore(movieId);\r\n        });\r\n    });\r\n};\r\nconst createMovieElement = ({ id, title, thumbnail, voteAverage }) => {\r\n    const listItem = document.createElement(\"li\");\r\n    listItem.id = String(id);\r\n    listItem.classList.add(\"movie\");\r\n    listItem.innerHTML = `\r\n    <a href=\"#\">\r\n      <div class=\"item-card\">\r\n        <img\r\n        class=\"item-thumbnail\"\r\n        src=\"${thumbnail}\"\r\n        loading=\"lazy\"\r\n        alt=\"${title}\"\r\n        />\r\n        <p class=\"item-title\">${title}</p>\r\n        <p class=\"item-score\">\r\n        <img src=\"${_assets_image__WEBPACK_IMPORTED_MODULE_0__.starImage}\" alt=\"별점\" /> ${voteAverage.toFixed(1)}\r\n        </p>\r\n      </div>\r\n    </a> \r\n  `;\r\n    listItem.addEventListener(\"click\", (e) => __awaiter(void 0, void 0, void 0, function* () {\r\n        e.preventDefault();\r\n        const $modal = document.querySelector(\".modal\");\r\n        if (!$modal)\r\n            return;\r\n        const movieDetail = yield _http_MovieClient__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getMovieDetail(Number(listItem.id));\r\n        $modal.innerHTML = `\r\n     <div class=\"modal-background\"></div>\r\n     <h3 class=\"movie-title\">${movieDetail.title}</h3>\r\n     <section>\r\n        <img\r\n        class=\"movie-thumbnail\"\r\n        src=\"${movieDetail.thumbnail}\"\r\n        loading=\"lazy\"\r\n        alt=\"${movieDetail.title}\"\r\n        />\r\n        <div class=\"movie-info\">\r\n          <div class=\"movie-genres\">${movieDetail.genres.join(\", \")} <img src=\"${_assets_image__WEBPACK_IMPORTED_MODULE_0__.starImage}\" alt=\"별점\" /> ${movieDetail.voteAverage}</div>\r\n          <div class=\"movie-overview\"> ${movieDetail.overview}</div>\r\n          <div class=\"my-vote-average\">\r\n            <span>내 별점 </span> \r\n            <span class=\"star-score-images\"></span> \r\n            <span class=\"star-score\"></span>\r\n            <span class=\"star-score-description\"></span> \r\n          </div>\r\n        </div>\r\n     </section>\r\n      <button class=\"modal-close-button\">X</button>\r\n    `;\r\n        $modal.showModal();\r\n        drawStarScore(id);\r\n        const $modalCloseButton = document.querySelector(\".modal-close-button\");\r\n        $modalCloseButton === null || $modalCloseButton === void 0 ? void 0 : $modalCloseButton.addEventListener(\"click\", (e) => {\r\n            e.preventDefault();\r\n            $modal.close();\r\n        });\r\n        $modal.addEventListener(\"click\", (e) => {\r\n            if (e.target === $modal) {\r\n                $modal.close();\r\n            }\r\n        });\r\n    }));\r\n    return listItem;\r\n};\r\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/Movie.ts?");

/***/ }),

/***/ "./src/components/MovieList.ts":
/*!*************************************!*\
  !*** ./src/components/MovieList.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MovieList)\n/* harmony export */ });\n/* harmony import */ var _common_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/Component */ \"./src/common/Component.ts\");\n/* harmony import */ var _Movie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Movie */ \"./src/components/Movie.ts\");\n/* harmony import */ var _Skeleton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Skeleton */ \"./src/components/Skeleton.ts\");\n/* harmony import */ var _http_MovieClient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../http/MovieClient */ \"./src/http/MovieClient.ts\");\n/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/dom */ \"./src/utils/dom.ts\");\n/* harmony import */ var _utils_UI__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/UI */ \"./src/utils/UI.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\n\r\n\r\n\r\n\r\n\r\n\r\nclass MovieList extends _common_Component__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n    constructor($target) {\r\n        super($target);\r\n    }\r\n    getTemplate() {\r\n        return `\r\n      <h2 id=\"main-text\">지금 인기 있는 영화</h2>\r\n      <div id=\"movie-list\">\r\n        <ul id=\"movie-list-container\" class=\"item-list\">\r\n        </ul>\r\n      </div>\r\n      <div id=\"empty-result\" class=\"empty-result hidden\"></div>\r\n      \r\n    `;\r\n    }\r\n    render() {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            this.state = { currentPage: 0, searchKeyword: \"\" };\r\n            this.$target.innerHTML = this.getTemplate();\r\n            this.handleRenderMovieList();\r\n        });\r\n    }\r\n    renderMovies(movies) {\r\n        const movieList = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_4__.$)(\"#movie-list-container\");\r\n        if (!movieList)\r\n            return;\r\n        (0,_utils_UI__WEBPACK_IMPORTED_MODULE_5__.hideEmptyResult)();\r\n        movies.forEach((movie) => {\r\n            const movieItem = (0,_Movie__WEBPACK_IMPORTED_MODULE_1__.createMovieElement)(movie);\r\n            movieList.append(movieItem);\r\n        });\r\n    }\r\n    toggleMainText(text = \"\") {\r\n        const mainText = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_4__.$)(\"#main-text\");\r\n        if (!mainText)\r\n            return;\r\n        if (text === \"\") {\r\n            mainText.innerText = `지금 인기 있는 영화`;\r\n        }\r\n        else {\r\n            mainText.innerText = `\"${text}\" 검색 결과`;\r\n        }\r\n    }\r\n    resetCurrentMovieList() {\r\n        const movieList = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_4__.$)(\"#movie-list-container\");\r\n        if (!movieList)\r\n            return;\r\n        movieList.innerHTML = \"\";\r\n    }\r\n    handleRenderMovieList() {\r\n        (0,_Skeleton__WEBPACK_IMPORTED_MODULE_2__.renderSkeleton)();\r\n        this.getNextPage()\r\n            .then((data) => {\r\n            var _a;\r\n            if (!data || data.length < 20) {\r\n                if (((_a = this.state) === null || _a === void 0 ? void 0 : _a.currentPage) === 1) {\r\n                    (0,_utils_UI__WEBPACK_IMPORTED_MODULE_5__.renderEmptyResult)(this.state.searchKeyword);\r\n                }\r\n                return;\r\n            }\r\n            this.renderMovies(data);\r\n            const $movies = document.querySelectorAll(\"#movie-list-container li\");\r\n            const observer = new IntersectionObserver((entries) => {\r\n                entries.forEach((entry) => {\r\n                    if (entry.isIntersecting && entry.target === $movies[$movies.length - 1]) {\r\n                        observer.unobserve(entry.target);\r\n                        this.handleRenderMovieList();\r\n                    }\r\n                });\r\n            });\r\n            observer.observe($movies[$movies.length - 1]);\r\n        })\r\n            .catch((error) => {\r\n            if (error instanceof Error) {\r\n                alert(error.message);\r\n            }\r\n        })\r\n            .finally(() => {\r\n            (0,_Skeleton__WEBPACK_IMPORTED_MODULE_2__.hideSkeleton)();\r\n        });\r\n    }\r\n    updateCurrentPage() {\r\n        if (!this.state)\r\n            return;\r\n        this.setState(Object.assign(Object.assign({}, this.state), { currentPage: this.state.currentPage + 1 }));\r\n    }\r\n    getNextPage() {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            this.updateCurrentPage();\r\n            if (!this.state)\r\n                return;\r\n            const { currentPage, searchKeyword } = this.state;\r\n            if (searchKeyword === \"\")\r\n                return _http_MovieClient__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getPopularMovies(currentPage);\r\n            return _http_MovieClient__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getSearchMovies(currentPage, searchKeyword);\r\n        });\r\n    }\r\n    handleSearchMovie(searchKeyword) {\r\n        this.toggleMainText(searchKeyword);\r\n        this.setState({ currentPage: 0, searchKeyword: searchKeyword });\r\n        this.resetCurrentMovieList();\r\n        this.handleRenderMovieList();\r\n    }\r\n    handleResetMovieList() {\r\n        this.toggleMainText();\r\n        this.setState({ currentPage: 0, searchKeyword: \"\" });\r\n        this.resetCurrentMovieList();\r\n        this.handleRenderMovieList();\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/MovieList.ts?");

/***/ }),

/***/ "./src/components/Skeleton.ts":
/*!************************************!*\
  !*** ./src/components/Skeleton.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getSkeletonUI\": () => (/* binding */ getSkeletonUI),\n/* harmony export */   \"hideSkeleton\": () => (/* binding */ hideSkeleton),\n/* harmony export */   \"renderSkeleton\": () => (/* binding */ renderSkeleton)\n/* harmony export */ });\n/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/dom */ \"./src/utils/dom.ts\");\n\r\nconst hideSkeleton = () => {\r\n    var _a;\r\n    const skeletonList = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.$)(\"#skeleton-list\");\r\n    skeletonList && ((_a = skeletonList.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(skeletonList));\r\n};\r\nconst renderSkeleton = () => {\r\n    const movieList = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.$)(\"#movie-list\");\r\n    const skeletonList = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"ul\");\r\n    skeletonList.id = \"skeleton-list\";\r\n    skeletonList.className = \"item-list\";\r\n    skeletonList.innerHTML = getSkeletonUI();\r\n    movieList && movieList.appendChild(skeletonList);\r\n};\r\nconst getSkeletonUI = (length = 20) => {\r\n    return `\r\n    <li class=\"item-skeleton\">\r\n      <a href=\"#\">\r\n        <div class=\"item-card\">\r\n          <div class=\"item-thumbnail skeleton\"></div>\r\n          <div class=\"item-title skeleton\"></div>\r\n          <div class=\"item-score skeleton\"></div>\r\n        </div>\r\n      </a>\r\n    </li>`.repeat(length);\r\n};\r\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/Skeleton.ts?");

/***/ }),

/***/ "./src/constants/movies.ts":
/*!*********************************!*\
  !*** ./src/constants/movies.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BASE_URL\": () => (/* binding */ BASE_URL),\n/* harmony export */   \"MAX_PAGE\": () => (/* binding */ MAX_PAGE),\n/* harmony export */   \"STAR_SCORE_DESCRIPTION\": () => (/* binding */ STAR_SCORE_DESCRIPTION)\n/* harmony export */ });\nconst BASE_URL = \"https://api.themoviedb.org/3\";\r\nconst MAX_PAGE = 10;\r\nconst STAR_SCORE_DESCRIPTION = {\r\n    0: \"평점 없음\",\r\n    2: \"최악이예요\",\r\n    4: \"별로예요\",\r\n    6: \"보통이에요\",\r\n    8: \"재미있어요\",\r\n    10: \"명작이에요\",\r\n};\r\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/constants/movies.ts?");

/***/ }),

/***/ "./src/http/MovieClient.ts":
/*!*********************************!*\
  !*** ./src/http/MovieClient.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _constants_movies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/movies */ \"./src/constants/movies.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\n\r\nclass MovieClient {\r\n    handleResponseStatus(status) {\r\n        if (status === 200)\r\n            return;\r\n        switch (status) {\r\n            case 401:\r\n                throw new Error(\"유효하지 않은 access_token 입니다. 재설정 후, 다시 요청해주세요.\");\r\n            case 403:\r\n                throw new Error(\"해당 컨텐츠에 대한 접근 권한이 없습니다.\");\r\n            case 404:\r\n                throw new Error(\"요청한 컨텐츠를 찾을 수 없습니다. 요청 URL을 다시 확인해주세요.\");\r\n            case 500:\r\n                throw new Error(\"서버에서 알 수 없는 문제가 발생했습니다.\");\r\n            case 503:\r\n                throw new Error(\"서버가 컨텐츠를 보여줄 준비가 되지 않았습니다.\");\r\n            default:\r\n                throw new Error(\"알 수 없는 에러가 발생하였습니다\");\r\n        }\r\n    }\r\n    fetch(url, params) {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            const response = yield fetch(`${url}?${params.toString()}`, {\r\n                method: \"GET\",\r\n                headers: {\r\n                    Authorization: `Bearer ${\"eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOGJiZmJiMmJkM2RhYzVmNzUwMzM4ZWJkYzExMzk2OCIsInN1YiI6IjY1ZjgzNTc3ZTIxMDIzMDE3ZWVmZmUxNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JXS5CUlLDrvIO0gE6ltYYHxKSVQs3A4_NgKCUzPQtu0\"}`,\r\n                },\r\n            });\r\n            this.handleResponseStatus(response.status);\r\n            return response.json();\r\n        });\r\n    }\r\n    getPopularMovies(page) {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            const params = new URLSearchParams({ language: \"ko-KR\", page: page.toString() });\r\n            const url = `${_constants_movies__WEBPACK_IMPORTED_MODULE_0__.BASE_URL}/movie/popular`;\r\n            const data = yield this.fetch(url, params);\r\n            return data.results.map((result) => ({\r\n                id: result.id,\r\n                title: result.title,\r\n                voteAverage: result.vote_average,\r\n                thumbnail: `https://image.tmdb.org/t/p/w220_and_h330_face/${result.poster_path}`,\r\n            }));\r\n        });\r\n    }\r\n    getSearchMovies(page, searchKeyword) {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            const params = new URLSearchParams({ language: \"ko-KR\", include_adult: \"false\", page: page.toString(), query: searchKeyword });\r\n            const url = `${_constants_movies__WEBPACK_IMPORTED_MODULE_0__.BASE_URL}/search/movie`;\r\n            const data = yield this.fetch(url, params);\r\n            return data.results.map((result) => ({\r\n                id: result.id,\r\n                title: result.title,\r\n                voteAverage: result.vote_average,\r\n                thumbnail: `https://image.tmdb.org/t/p/w220_and_h330_face/${result.poster_path}`,\r\n            }));\r\n        });\r\n    }\r\n    getMovieDetail(movieId = 1011985) {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            const params = new URLSearchParams({ language: \"ko-KR\" });\r\n            const url = `${_constants_movies__WEBPACK_IMPORTED_MODULE_0__.BASE_URL}/movie/${movieId}`;\r\n            const data = yield this.fetch(url, params);\r\n            return {\r\n                id: data.id,\r\n                title: data.title,\r\n                overview: data.overview,\r\n                genres: data.genres.map((genre) => genre.name),\r\n                voteAverage: data.vote_average,\r\n                thumbnail: `https://image.tmdb.org/t/p/w220_and_h330_face/${data.poster_path}`,\r\n            };\r\n        });\r\n    }\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new MovieClient());\r\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/http/MovieClient.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_reset_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/reset.css */ \"./src/styles/reset.css\");\n/* harmony import */ var _styles_common_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/common.css */ \"./src/styles/common.css\");\n/* harmony import */ var _styles_modal_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/modal.css */ \"./src/styles/modal.css\");\n/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/dom */ \"./src/utils/dom.ts\");\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./App */ \"./src/App.ts\");\n\r\n\r\n\r\n\r\n\r\nconst root = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.$)(\"#app\");\r\nroot && new _App__WEBPACK_IMPORTED_MODULE_4__[\"default\"](root);\r\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/index.ts?");

/***/ }),

/***/ "./src/utils/UI.ts":
/*!*************************!*\
  !*** ./src/utils/UI.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"hideEmptyResult\": () => (/* binding */ hideEmptyResult),\n/* harmony export */   \"renderEmptyResult\": () => (/* binding */ renderEmptyResult)\n/* harmony export */ });\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/utils/dom.ts\");\n\r\nconst hideEmptyResult = () => {\r\n    const emptyResultContainer = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.$)(\"#empty-result\");\r\n    if (!emptyResultContainer)\r\n        return;\r\n    emptyResultContainer.classList.add(\"hidden\");\r\n    emptyResultContainer.innerText = \"\";\r\n};\r\nconst renderEmptyResult = (searchKeyword) => {\r\n    const emptyResultContainer = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.$)(\"#empty-result\");\r\n    if (!emptyResultContainer)\r\n        return;\r\n    emptyResultContainer === null || emptyResultContainer === void 0 ? void 0 : emptyResultContainer.classList.remove(\"hidden\");\r\n    const emptyText = `${searchKeyword} 에 대한 검색 결과가 존재하지 않아요..😅\\n정확한 검색어를 다시 입력해주세요`;\r\n    emptyResultContainer.innerText = emptyText;\r\n};\r\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/utils/UI.ts?");

/***/ }),

/***/ "./src/utils/dom.ts":
/*!**************************!*\
  !*** ./src/utils/dom.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"$\": () => (/* binding */ $),\n/* harmony export */   \"createElement\": () => (/* binding */ createElement)\n/* harmony export */ });\nconst createElement = (selector) => document.createElement(selector);\r\nconst $ = (selector) => {\r\n    return document.querySelector(selector);\r\n};\r\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/utils/dom.ts?");

/***/ }),

/***/ "./src/utils/localStorage.ts":
/*!***********************************!*\
  !*** ./src/utils/localStorage.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getMyVoteAverage\": () => (/* binding */ getMyVoteAverage),\n/* harmony export */   \"setMyVoteAverage\": () => (/* binding */ setMyVoteAverage)\n/* harmony export */ });\nconst getMyVoteAverage = (movieId) => {\r\n    const myVoteAverages = JSON.parse(localStorage.getItem(\"myVoteAverages\") || \"[]\");\r\n    if (!myVoteAverages || !myVoteAverages.some((myVoteAverage) => myVoteAverage.movieId === movieId)) {\r\n        localStorage.setItem(\"myVoteAverages\", JSON.stringify([...myVoteAverages, { movieId, voteAverage: 0 }]));\r\n        return 0;\r\n    }\r\n    return myVoteAverages.filter((myVoteAverage) => movieId === myVoteAverage.movieId)[0].voteAverage;\r\n};\r\nconst setMyVoteAverage = (movieId, voteAverage) => {\r\n    const myVoteAverages = localStorage.getItem(\"myVoteAverages\");\r\n    if (!myVoteAverages) {\r\n        localStorage.setItem(\"myVoteAverages\", `[]`);\r\n        return;\r\n    }\r\n    const newMyVoteAverages = JSON.parse(myVoteAverages);\r\n    newMyVoteAverages.forEach((myVoteAverage) => {\r\n        if (movieId === myVoteAverage.movieId) {\r\n            myVoteAverage.voteAverage = voteAverage;\r\n        }\r\n    });\r\n    localStorage.setItem(\"myVoteAverages\", JSON.stringify(newMyVoteAverages));\r\n};\r\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/utils/localStorage.ts?");

/***/ }),

/***/ "./templates/logo.png":
/*!****************************!*\
  !*** ./templates/logo.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2e162b4fefb34cd7ed8d.png\";\n\n//# sourceURL=webpack://javascript-movie-review/./templates/logo.png?");

/***/ }),

/***/ "./templates/search_button.png":
/*!*************************************!*\
  !*** ./templates/search_button.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f1bd4269f4446ceae306.png\";\n\n//# sourceURL=webpack://javascript-movie-review/./templates/search_button.png?");

/***/ }),

/***/ "./templates/star_empty.png":
/*!**********************************!*\
  !*** ./templates/star_empty.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6c9611deedf4b85849c9.png\";\n\n//# sourceURL=webpack://javascript-movie-review/./templates/star_empty.png?");

/***/ }),

/***/ "./templates/star_filled.png":
/*!***********************************!*\
  !*** ./templates/star_filled.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6328741810b732410eec.png\";\n\n//# sourceURL=webpack://javascript-movie-review/./templates/star_filled.png?");

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/javascript-movie-review/dist/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;