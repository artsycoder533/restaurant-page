/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/taco.png */ "./src/images/taco.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n    padding: 0;\r\n    margin: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    min-height: 100vh;\r\n    width: 100vw;\r\n    background: rgba(0,0,0,0.8) url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") center/cover no-repeat;\r\n    background-blend-mode: multiply;\r\n    color: white;\r\n    line-height: 1.25;\r\n}\r\n\r\nul {\r\n    list-style-type: none;\r\n}\r\n\r\na {\r\n    text-decoration: none;\r\n    color: white;\r\n    display: block;\r\n    letter-spacing: 0.125rem;\r\n}\r\n\r\na:hover{\r\n    color: red;\r\n}\r\n\r\n\r\n::placeholder {\r\n    color: snow;\r\n}\r\n\r\n/**********\r\nNAVBAR\r\n**********/\r\n\r\n.nav{\r\n    display: grid;\r\n    grid-template-rows: 1fr;\r\n    place-items: center;\r\n    height: 150px;\r\n    align-items: center;\r\n}\r\n\r\n.nav__header {\r\n    text-align: center;\r\n    padding: 1rem;\r\n    font-size: 2rem;\r\n}\r\n\r\n.nav__links {\r\n    display: grid;\r\n    grid-template-columns: 8rem 8rem 8rem;\r\n    justify-content: center;\r\n    gap: 2rem;\r\n    text-align: center;\r\n    height: 100%;\r\n    align-items: center;\r\n}\r\n\r\nli {\r\n    height: 100%;\r\n    align-items: center;\r\n    display: grid;\r\n}\r\n\r\n.active {\r\n    text-decoration: overline;\r\n    text-decoration-color: gold;\r\n}\r\n\r\n.nav__link {\r\n    display: block;\r\n    font-size: 1.25rem;\r\n    cursor: pointer;\r\n    letter-spacing: 0.1rem;\r\n    text-transform: uppercase;\r\n    \r\n}\r\n\r\n#content{\r\n    height: calc(100vh - 150px - 4rem); \r\n    max-width: 1400px;\r\n    width: 90vw;\r\n    margin: auto;\r\n}\r\n\r\n.img {\r\n    object-fit: cover;\r\n    width: 100%;\r\n}\r\n\r\n@media screen and (max-width: 1200px){\r\n    #content {\r\n        max-width: 90vw;\r\n        height: auto;\r\n    }\r\n\r\n    .nav {\r\n        max-width: 90vw;\r\n        margin: auto;\r\n    }\r\n\r\n    .nav__links {\r\n        height: 100%;\r\n        width: 100%;\r\n        padding: 1rem;\r\n        display:inline-flex\r\n    }\r\n}\r\n\r\n/**********\r\nHERO\r\n**********/\r\n.hero {\r\n    height: calc(100vh - 150px - 4rem); \r\n    text-align: left;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n}\r\n\r\n.hero__header {\r\n    font-size: 2rem;\r\n    padding-bottom: 2rem;\r\n}\r\n\r\n.hero__description  {\r\n    font-size: 1.5rem;\r\n}\r\n\r\n/**********\r\nMENU\r\n**********/\r\n.menu {\r\n    /* height: calc(100vh - 150px - 4rem); */\r\n    height: 100%;\r\n    display: grid; \r\n    grid-template-columns: 1fr 1fr; \r\n    place-items: center;\r\n    gap: 2rem;\r\n    padding: 2rem 0;\r\n}\r\n\r\n.menu__title {\r\n    font-size: 4rem;\r\n    text-transform: uppercase;\r\n    letter-spacing: .125rem;\r\n}\r\n.menu__item {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n}\r\n\r\n.menu__description {\r\n    width: 100%;\r\n    display: grid;\r\n    place-items: center;\r\n    font-size: 1.3rem;\r\n}\r\n.menu__img {\r\n    width: 100%;\r\n}\r\n\r\n.menu__img img {\r\n    object-fit: cover;\r\n    width: 100%;\r\n    display: block;\r\n    width: 300px;\r\n    height: 200px;\r\n    border-radius: 0.5rem;\r\n}\r\n\r\n@media screen and (max-width: 768px){\r\n    .menu {\r\n        grid-template-columns: 1fr;\r\n        height: 100%;\r\n        margin-top: 2rem;\r\n    }\r\n    .menu__item {\r\n        grid-template-columns: 1fr;\r\n    }\r\n\r\n    .menu__description {\r\n        padding: 1rem;\r\n    }\r\n}\r\n\r\n@media screen and (min-width: 769px){\r\n    .menu {\r\n        grid-template-columns: 1fr;\r\n        height: 100%;\r\n        margin-top: 2rem;\r\n    }\r\n    .menu__item {\r\n        grid-template-columns: 1fr 1fr;\r\n    }\r\n\r\n    .menu__description {\r\n        padding: 1rem;\r\n    }\r\n}\r\n\r\n@media screen and (min-width: 1200px){\r\n    .menu {\r\n        grid-template-columns: 1fr 1fr;\r\n        height: 100%;\r\n        margin-top: 2rem;\r\n    }\r\n    .menu__item {\r\n        grid-template-columns: 1fr 1fr;\r\n    }\r\n\r\n    .menu__description {\r\n        padding: 1rem;\r\n    }\r\n}\r\n\r\n/**********\r\nCONTACT\r\n**********/\r\n\r\n.contact {\r\n    height: calc(100vh - 150px - 4rem);\r\n    display: grid;\r\n    place-items: center;\r\n    grid-template-columns: 1fr 1fr;\r\n    gap: 1rem;\r\n    width: 100%;\r\n}\r\n\r\n.contact__address,\r\n.contact__hours,\r\n.contact__phone {\r\n    width: 100%;\r\n    text-align: center;\r\n    padding: 2rem;\r\n    font-size: 1.5rem;\r\n}\r\n\r\n.contact__details p {\r\n    padding: 0.5rem;\r\n}\r\n\r\n@media screen and (max-width: 992px){\r\n    .contact {\r\n        grid-template-columns: 1fr;\r\n        height: auto;\r\n    }\r\n\r\n    .contact__details p {\r\n        text-align: left;\r\n    }\r\n\r\n    .contact__address,\r\n    .contact__hours,\r\n    .contact__phone {\r\n        padding: 2rem 0;\r\n    }\r\n}\r\n\r\n/**********\r\nFORM\r\n**********/\r\n.form {\r\n    display: grid;\r\n    place-items: center;\r\n    width: 500px;\r\n}\r\n\r\n.form__name,\r\n.form__email,\r\n.form__message {\r\n    width: 100%;\r\n    padding: 1rem;\r\n    margin: 1rem;\r\n    background: rgba(0,0,0,0.5);\r\n    backdrop-filter: blur(10px);\r\n    border: 1px solid snow;\r\n    border-radius: 0.5rem;\r\n    font-size: 1rem;\r\n    color: snow;\r\n}\r\n\r\n.form__message {\r\n    height: 200px;\r\n}\r\n\r\n.btn {\r\n    padding: 1rem 2rem;\r\n    border-radius: 0.5rem;\r\n    background: transparent;\r\n    color: snow;\r\n    border: 1px solid white;\r\n    letter-spacing: .125rem;\r\n    cursor: pointer;\r\n}\r\n\r\n.btn:hover {\r\n    background: snow;\r\n    color: black;\r\n}\r\n\r\n@media screen and (max-width: 768px){\r\n    .form {\r\n        width: 320px;\r\n        margin-top: 2rem;\r\n    }\r\n\r\n    .form__name,\r\n    .form__email,\r\n    .form__message {\r\n        margin: 1rem 0;\r\n    }\r\n}\r\n\r\n/**********\r\nFOOTER\r\n**********/\r\n.footer {\r\n    display: grid;\r\n    place-items: center;\r\n    height: 4rem;\r\n    text-align: center;\r\n    background: black;\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\r\n    padding: 0;\r\n    margin: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    min-height: 100vh;\r\n    width: 100vw;\r\n    background: rgba(0,0,0,0.8) url(./images/taco.png) center/cover no-repeat;\r\n    background-blend-mode: multiply;\r\n    color: white;\r\n    line-height: 1.25;\r\n}\r\n\r\nul {\r\n    list-style-type: none;\r\n}\r\n\r\na {\r\n    text-decoration: none;\r\n    color: white;\r\n    display: block;\r\n    letter-spacing: 0.125rem;\r\n}\r\n\r\na:hover{\r\n    color: red;\r\n}\r\n\r\n\r\n::placeholder {\r\n    color: snow;\r\n}\r\n\r\n/**********\r\nNAVBAR\r\n**********/\r\n\r\n.nav{\r\n    display: grid;\r\n    grid-template-rows: 1fr;\r\n    place-items: center;\r\n    height: 150px;\r\n    align-items: center;\r\n}\r\n\r\n.nav__header {\r\n    text-align: center;\r\n    padding: 1rem;\r\n    font-size: 2rem;\r\n}\r\n\r\n.nav__links {\r\n    display: grid;\r\n    grid-template-columns: 8rem 8rem 8rem;\r\n    justify-content: center;\r\n    gap: 2rem;\r\n    text-align: center;\r\n    height: 100%;\r\n    align-items: center;\r\n}\r\n\r\nli {\r\n    height: 100%;\r\n    align-items: center;\r\n    display: grid;\r\n}\r\n\r\n.active {\r\n    text-decoration: overline;\r\n    text-decoration-color: gold;\r\n}\r\n\r\n.nav__link {\r\n    display: block;\r\n    font-size: 1.25rem;\r\n    cursor: pointer;\r\n    letter-spacing: 0.1rem;\r\n    text-transform: uppercase;\r\n    \r\n}\r\n\r\n#content{\r\n    height: calc(100vh - 150px - 4rem); \r\n    max-width: 1400px;\r\n    width: 90vw;\r\n    margin: auto;\r\n}\r\n\r\n.img {\r\n    object-fit: cover;\r\n    width: 100%;\r\n}\r\n\r\n@media screen and (max-width: 1200px){\r\n    #content {\r\n        max-width: 90vw;\r\n        height: auto;\r\n    }\r\n\r\n    .nav {\r\n        max-width: 90vw;\r\n        margin: auto;\r\n    }\r\n\r\n    .nav__links {\r\n        height: 100%;\r\n        width: 100%;\r\n        padding: 1rem;\r\n        display:inline-flex\r\n    }\r\n}\r\n\r\n/**********\r\nHERO\r\n**********/\r\n.hero {\r\n    height: calc(100vh - 150px - 4rem); \r\n    text-align: left;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n}\r\n\r\n.hero__header {\r\n    font-size: 2rem;\r\n    padding-bottom: 2rem;\r\n}\r\n\r\n.hero__description  {\r\n    font-size: 1.5rem;\r\n}\r\n\r\n/**********\r\nMENU\r\n**********/\r\n.menu {\r\n    /* height: calc(100vh - 150px - 4rem); */\r\n    height: 100%;\r\n    display: grid; \r\n    grid-template-columns: 1fr 1fr; \r\n    place-items: center;\r\n    gap: 2rem;\r\n    padding: 2rem 0;\r\n}\r\n\r\n.menu__title {\r\n    font-size: 4rem;\r\n    text-transform: uppercase;\r\n    letter-spacing: .125rem;\r\n}\r\n.menu__item {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n}\r\n\r\n.menu__description {\r\n    width: 100%;\r\n    display: grid;\r\n    place-items: center;\r\n    font-size: 1.3rem;\r\n}\r\n.menu__img {\r\n    width: 100%;\r\n}\r\n\r\n.menu__img img {\r\n    object-fit: cover;\r\n    width: 100%;\r\n    display: block;\r\n    width: 300px;\r\n    height: 200px;\r\n    border-radius: 0.5rem;\r\n}\r\n\r\n@media screen and (max-width: 768px){\r\n    .menu {\r\n        grid-template-columns: 1fr;\r\n        height: 100%;\r\n        margin-top: 2rem;\r\n    }\r\n    .menu__item {\r\n        grid-template-columns: 1fr;\r\n    }\r\n\r\n    .menu__description {\r\n        padding: 1rem;\r\n    }\r\n}\r\n\r\n@media screen and (min-width: 769px){\r\n    .menu {\r\n        grid-template-columns: 1fr;\r\n        height: 100%;\r\n        margin-top: 2rem;\r\n    }\r\n    .menu__item {\r\n        grid-template-columns: 1fr 1fr;\r\n    }\r\n\r\n    .menu__description {\r\n        padding: 1rem;\r\n    }\r\n}\r\n\r\n@media screen and (min-width: 1200px){\r\n    .menu {\r\n        grid-template-columns: 1fr 1fr;\r\n        height: 100%;\r\n        margin-top: 2rem;\r\n    }\r\n    .menu__item {\r\n        grid-template-columns: 1fr 1fr;\r\n    }\r\n\r\n    .menu__description {\r\n        padding: 1rem;\r\n    }\r\n}\r\n\r\n/**********\r\nCONTACT\r\n**********/\r\n\r\n.contact {\r\n    height: calc(100vh - 150px - 4rem);\r\n    display: grid;\r\n    place-items: center;\r\n    grid-template-columns: 1fr 1fr;\r\n    gap: 1rem;\r\n    width: 100%;\r\n}\r\n\r\n.contact__address,\r\n.contact__hours,\r\n.contact__phone {\r\n    width: 100%;\r\n    text-align: center;\r\n    padding: 2rem;\r\n    font-size: 1.5rem;\r\n}\r\n\r\n.contact__details p {\r\n    padding: 0.5rem;\r\n}\r\n\r\n@media screen and (max-width: 992px){\r\n    .contact {\r\n        grid-template-columns: 1fr;\r\n        height: auto;\r\n    }\r\n\r\n    .contact__details p {\r\n        text-align: left;\r\n    }\r\n\r\n    .contact__address,\r\n    .contact__hours,\r\n    .contact__phone {\r\n        padding: 2rem 0;\r\n    }\r\n}\r\n\r\n/**********\r\nFORM\r\n**********/\r\n.form {\r\n    display: grid;\r\n    place-items: center;\r\n    width: 500px;\r\n}\r\n\r\n.form__name,\r\n.form__email,\r\n.form__message {\r\n    width: 100%;\r\n    padding: 1rem;\r\n    margin: 1rem;\r\n    background: rgba(0,0,0,0.5);\r\n    backdrop-filter: blur(10px);\r\n    border: 1px solid snow;\r\n    border-radius: 0.5rem;\r\n    font-size: 1rem;\r\n    color: snow;\r\n}\r\n\r\n.form__message {\r\n    height: 200px;\r\n}\r\n\r\n.btn {\r\n    padding: 1rem 2rem;\r\n    border-radius: 0.5rem;\r\n    background: transparent;\r\n    color: snow;\r\n    border: 1px solid white;\r\n    letter-spacing: .125rem;\r\n    cursor: pointer;\r\n}\r\n\r\n.btn:hover {\r\n    background: snow;\r\n    color: black;\r\n}\r\n\r\n@media screen and (max-width: 768px){\r\n    .form {\r\n        width: 320px;\r\n        margin-top: 2rem;\r\n    }\r\n\r\n    .form__name,\r\n    .form__email,\r\n    .form__message {\r\n        margin: 1rem 0;\r\n    }\r\n}\r\n\r\n/**********\r\nFOOTER\r\n**********/\r\n.footer {\r\n    display: grid;\r\n    place-items: center;\r\n    height: 4rem;\r\n    text-align: center;\r\n    background: black;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(style) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    style.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, style) {
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contact": () => (/* binding */ contact)
/* harmony export */ });
function contact() {
    const contact = document.createElement("section");
    contact.classList.add("contact");
    const details = document.createElement("article");
    details.classList.add("contact__details");
    const address = document.createElement("div");
    address.classList.add("contact__address");
    const p1 = document.createElement("p");
    p1.textContent = "The Taco Spot";
    const p2 = document.createElement("p");
    p2.textContent = "137 W 39th Street";
    const p3 = document.createElement("p");
    p3.textContent = "Tacoville, TO 64551";
    address.append(p1, p2, p3);
    const hours = document.createElement("div");
    hours.classList.add("contact__hours");
    const p4 = document.createElement("p");
    p4.textContent = "Mon - Thurs: 11:00AM - 10:00PM";
    const p5 = document.createElement("p");
    p5.textContent = "Fri - Sat: 11:00AM - 12:00AM";
    const p6 = document.createElement("p");
    p6.textContent = "Sun - CLOSED";
    hours.append(p4, p5, p6);
    const phone = document.createElement("div");
    phone.classList.add("contact__phone");
    const p7 = document.createElement("p");
	p7.textContent = "281-330-8004";
    phone.appendChild(p7);
    const contactForm = document.createElement("article");
    contactForm.append(createForm());
    contactForm.classList.add("contact__form");
    details.append(address, hours, phone);
    contact.append(contactForm, details);
    return contact;
}

function createForm() {
    const form = document.createElement("form");
    form.classList.add("form");
    const name = document.createElement("input");
    name.classList.add("form__name");
    name.setAttribute("type", "text");
    name.setAttribute("placeholder", "Name");
    const email = document.createElement("input");
    email.classList.add("form__email");
    email.setAttribute("type", "email");
    email.setAttribute("placeholder", "Email");
    const message = document.createElement("textarea");
    message.classList.add("form__message");
    message.setAttribute("type", "email");
    message.setAttribute("placeholder", "Message");
    const sendBtn = document.createElement("button");
    sendBtn.classList.add("btn");
    sendBtn.textContent = "SEND";
    form.append(name, email, message, sendBtn);
    return form;
}





/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menu": () => (/* binding */ menu)
/* harmony export */ });
/* harmony import */ var _images_avocado_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/avocado.jpg */ "./src/images/avocado.jpg");
/* harmony import */ var _images_carneasada_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/carneasada.jpg */ "./src/images/carneasada.jpg");
/* harmony import */ var _images_chips_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/chips.jpg */ "./src/images/chips.jpg");
/* harmony import */ var _images_fish_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/fish.jpg */ "./src/images/fish.jpg");
/* harmony import */ var _images_vegetarian_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/vegetarian.jpg */ "./src/images/vegetarian.jpg");






function menu() {
    const menu = document.createElement("section");
    menu.classList.add("menu");
    const title = document.createElement("h2");
    title.classList.add("menu__title");
    title.textContent = "Menu";
    menu.appendChild(title);
    const avocadoImg = img(_images_avocado_jpg__WEBPACK_IMPORTED_MODULE_0__);
    const carneasadaImg = img(_images_carneasada_jpg__WEBPACK_IMPORTED_MODULE_1__);
    const chipsImg = img(_images_chips_jpg__WEBPACK_IMPORTED_MODULE_2__);
    const fishImg = img(_images_fish_jpg__WEBPACK_IMPORTED_MODULE_3__);
    const vegetarianImg = img(_images_vegetarian_jpg__WEBPACK_IMPORTED_MODULE_4__);
    const menuItemImgs = [avocadoImg, carneasadaImg, chipsImg, fishImg, vegetarianImg];
    const menuItemDescriptions = ["Avocado Dip $6.99", "Carne Asada Tacos $10.99", "3 Chip Sampler Platter  $7.99", "Fried Fish Tacos  $9.99", "Vegetarian Tacos $8.99"];
    menuItemImgs.forEach(function (menuItem, index) {
			menu.appendChild(
				createMenuItem(
					menuItemDescriptions[index],
					"menu__item",
					"menu__description",
					"menu__img",
					menuItem
				)
			);
		});
    return menu;
}

function img(src) {
    const img = new Image();
    img.src = src;
    return img;
}

function createMenuItem(description, className1, className2, className3, img) {
    const menuItem = document.createElement("section");
    menuItem.classList.add(className1);
    const menuDescription = document.createElement("article");
    menuDescription.classList.add(className2);
    menuDescription.textContent = description;
    const menuImg = document.createElement("article");
    menuImg.classList.add(className3);
    menuImg.appendChild(img);
    menuItem.append(menuImg, menuDescription);
    return menuItem;
}



/***/ }),

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderHome": () => (/* binding */ renderHome),
/* harmony export */   "renderNav": () => (/* binding */ renderNav),
/* harmony export */   "renderContent": () => (/* binding */ renderContent)
/* harmony export */ });

function renderHome() {
    document.body.append(renderNav());
    document.body.append(renderContent());
    document.body.append(renderFooter());
}

function renderNav() {
    let nav = document.createElement("nav");
    nav.classList.add("nav");
    let navHeader = document.createElement("div");
    navHeader.classList.add("nav__header");
    let navHeading = document.createElement("h2");
    navHeading.classList.add("nav__logo");
    navHeading.textContent = "The Taco Spot";
    navHeader.appendChild(navHeading);
    let navLinks = document.createElement("ul");
    navLinks.classList.add("nav__links");
    let li = document.createElement("li");
    let homeLink = document.createElement("a");
    homeLink.classList.add("nav__link");
    homeLink.classList.add("active");
    homeLink.id = "home";
    homeLink.href = "#";
    homeLink.textContent = "Home";
    li.appendChild(homeLink);
    let li1 = document.createElement("li");
    let menuLink = document.createElement("a");
    menuLink.classList.add("nav__link");
    menuLink.id = "menu";
    menuLink.href = "#";
    menuLink.textContent = "Menu";
    li1.appendChild(menuLink);
    let li2 = document.createElement("li");
    let contactLink = document.createElement("a");
    contactLink.classList.add("nav__link");
    contactLink.id = "contact";
    contactLink.href = "#";
    contactLink.textContent = "Contact";
    li2.appendChild(contactLink);
    navLinks.appendChild(li);
    navLinks.appendChild(li1);
    navLinks.appendChild(li2);
    nav.append(navHeader, navLinks);
    return nav;
}

function renderContent() {
    let container = document.createElement("div");
    container.id = "content";
    let hero = document.createElement("section");
    hero.classList.add("hero");
    let heroHeader = document.createElement("section");
    heroHeader.classList.add("hero__header");
    let h2 = document.createElement("h2");
    h2.classList.add("hero__heading");
    h2.textContent = "Everyday is for Tacos, not just Tuesday!";
    heroHeader.appendChild(h2);
    let heroDescription = document.createElement("article");
    heroDescription.classList.add("hero__description");
    let p = document.createElement("p");
    p.classList.add("hero__text");
    p.textContent = `Serving up the best tacos on the East Coast since 2017.  
    Creativity and attention to detail help craft our mouth-watering recipes.
    Dont hesitate, stop by and let one of our tacos "hit the spot!"`;
    heroDescription.appendChild(p);
    hero.appendChild(heroHeader);
    hero.appendChild(heroDescription);
    container.append(hero);
    return container;
}

function renderFooter() {
    let footer = document.createElement("footer");
    footer.classList.add("footer");
    let small = document.createElement("small");
    const date = new Date().getFullYear();
    small.innerHTML = `&copy; ${date} Coded & Created By Natasha Johnson`;
    footer.appendChild(small);
    return footer;
}




/***/ }),

/***/ "./src/images/avocado.jpg":
/*!********************************!*\
  !*** ./src/images/avocado.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8e229e1c77c0e208042a.jpg";

/***/ }),

/***/ "./src/images/carneasada.jpg":
/*!***********************************!*\
  !*** ./src/images/carneasada.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "476efdf0c853c0f714da.jpg";

/***/ }),

/***/ "./src/images/chips.jpg":
/*!******************************!*\
  !*** ./src/images/chips.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "62dc9be87cb199907748.jpg";

/***/ }),

/***/ "./src/images/fish.jpg":
/*!*****************************!*\
  !*** ./src/images/fish.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "62102abb3352fd977d91.jpg";

/***/ }),

/***/ "./src/images/taco.png":
/*!*****************************!*\
  !*** ./src/images/taco.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7f8cf2c772ee1ac45094.png";

/***/ }),

/***/ "./src/images/vegetarian.jpg":
/*!***********************************!*\
  !*** ./src/images/vegetarian.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8b07f71122f03c3fe8b0.jpg";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render.js */ "./src/render.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ "./src/contact.js");






window.addEventListener("DOMContentLoaded", (0,_render_js__WEBPACK_IMPORTED_MODULE_1__.renderHome)());
const homeTab = document.getElementById("home");
const menuTab = document.getElementById("menu");
const contactTab = document.getElementById("contact");

homeTab.addEventListener("click", switchTab);
menuTab.addEventListener("click", switchTab);
contactTab.addEventListener("click", switchTab);

function switchTab(e) {
    const oldContent = document.getElementById("content");
    const tabs = document.querySelectorAll(".nav__link");
    if (e.target.id === "home") {
        oldContent.firstChild.remove();
        oldContent.append((0,_render_js__WEBPACK_IMPORTED_MODULE_1__.renderContent)());
        addActive(e.target, tabs);
    }
    else if (e.target.id === "menu") {
        oldContent.firstChild.remove();
        oldContent.append((0,_menu_js__WEBPACK_IMPORTED_MODULE_2__.menu)());
        addActive(e.target, tabs);
    }
    else if (e.target.id === "contact") {
        oldContent.firstChild.remove();
        oldContent.append((0,_contact__WEBPACK_IMPORTED_MODULE_3__.contact)());
        addActive(e.target, tabs);
    }
}

function addActive(target, tabs) {
    const tabLinks = Array.from(tabs);
    tabLinks.forEach(function (link) {
        console.log(link.id, target.id);
        if (link.id == target.id) {
            console.log("active");
            link.classList.add("active");
        } else {
            link.classList.remove("active");
            console.log("not active");
        }
    });
}




})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cUJBQXFCLDJCQUEyQiwwQkFBMEIsS0FBSyxPQUFPLGdGQUFnRixVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxNQUFNLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGNBQWMsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsS0FBSyxLQUFLLE1BQU0sTUFBTSxLQUFLLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLEtBQUssS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssS0FBSyxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLE1BQU0sS0FBSyxLQUFLLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sTUFBTSxLQUFLLEtB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QztBQUNBLDRDQUE0QyxzREFBVTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQix5REFBYTtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQiw4Q0FBSTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixpREFBTztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9yZW5kZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy90YWNvLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuOCkgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBjZW50ZXIvY292ZXIgbm8tcmVwZWF0O1xcclxcbiAgICBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IG11bHRpcGx5O1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjI1O1xcclxcbn1cXHJcXG5cXHJcXG51bCB7XFxyXFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuYSB7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMTI1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5hOmhvdmVye1xcclxcbiAgICBjb2xvcjogcmVkO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG46OnBsYWNlaG9sZGVyIHtcXHJcXG4gICAgY29sb3I6IHNub3c7XFxyXFxufVxcclxcblxcclxcbi8qKioqKioqKioqXFxyXFxuTkFWQkFSXFxyXFxuKioqKioqKioqKi9cXHJcXG5cXHJcXG4ubmF2e1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXHJcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgaGVpZ2h0OiAxNTBweDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdl9faGVhZGVyIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgICBmb250LXNpemU6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5uYXZfX2xpbmtzIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA4cmVtIDhyZW0gOHJlbTtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMnJlbTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmxpIHtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbn1cXHJcXG5cXHJcXG4uYWN0aXZlIHtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBvdmVybGluZTtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiBnb2xkO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2X19saW5rIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRlbnR7XFxyXFxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDE1MHB4IC0gNHJlbSk7IFxcclxcbiAgICBtYXgtd2lkdGg6IDE0MDBweDtcXHJcXG4gICAgd2lkdGg6IDkwdnc7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmltZyB7XFxyXFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KXtcXHJcXG4gICAgI2NvbnRlbnQge1xcclxcbiAgICAgICAgbWF4LXdpZHRoOiA5MHZ3O1xcclxcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5uYXYge1xcclxcbiAgICAgICAgbWF4LXdpZHRoOiA5MHZ3O1xcclxcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5uYXZfX2xpbmtzIHtcXHJcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgcGFkZGluZzogMXJlbTtcXHJcXG4gICAgICAgIGRpc3BsYXk6aW5saW5lLWZsZXhcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4vKioqKioqKioqKlxcclxcbkhFUk9cXHJcXG4qKioqKioqKioqL1xcclxcbi5oZXJvIHtcXHJcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTUwcHggLSA0cmVtKTsgXFxyXFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVyb19faGVhZGVyIHtcXHJcXG4gICAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlcm9fX2Rlc2NyaXB0aW9uICB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKioqKioqKioqKlxcclxcbk1FTlVcXHJcXG4qKioqKioqKioqL1xcclxcbi5tZW51IHtcXHJcXG4gICAgLyogaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTUwcHggLSA0cmVtKTsgKi9cXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBncmlkOyBcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyOyBcXHJcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAycmVtO1xcclxcbiAgICBwYWRkaW5nOiAycmVtIDA7XFxyXFxufVxcclxcblxcclxcbi5tZW51X190aXRsZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogNHJlbTtcXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IC4xMjVyZW07XFxyXFxufVxcclxcbi5tZW51X19pdGVtIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudV9fZGVzY3JpcHRpb24ge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxufVxcclxcbi5tZW51X19pbWcge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVfX2ltZyBpbWcge1xcclxcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICB3aWR0aDogMzAwcHg7XFxyXFxuICAgIGhlaWdodDogMjAwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpe1xcclxcbiAgICAubWVudSB7XFxyXFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXHJcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IDJyZW07XFxyXFxuICAgIH1cXHJcXG4gICAgLm1lbnVfX2l0ZW0ge1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLm1lbnVfX2Rlc2NyaXB0aW9uIHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY5cHgpe1xcclxcbiAgICAubWVudSB7XFxyXFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXHJcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IDJyZW07XFxyXFxuICAgIH1cXHJcXG4gICAgLm1lbnVfX2l0ZW0ge1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5tZW51X19kZXNjcmlwdGlvbiB7XFxyXFxuICAgICAgICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCl7XFxyXFxuICAgIC5tZW51IHtcXHJcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXHJcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IDJyZW07XFxyXFxuICAgIH1cXHJcXG4gICAgLm1lbnVfX2l0ZW0ge1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5tZW51X19kZXNjcmlwdGlvbiB7XFxyXFxuICAgICAgICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi8qKioqKioqKioqXFxyXFxuQ09OVEFDVFxcclxcbioqKioqKioqKiovXFxyXFxuXFxyXFxuLmNvbnRhY3Qge1xcclxcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxNTBweCAtIDRyZW0pO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0X19hZGRyZXNzLFxcclxcbi5jb250YWN0X19ob3VycyxcXHJcXG4uY29udGFjdF9fcGhvbmUge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAycmVtO1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3RfX2RldGFpbHMgcCB7XFxyXFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpe1xcclxcbiAgICAuY29udGFjdCB7XFxyXFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXHJcXG4gICAgICAgIGhlaWdodDogYXV0bztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuY29udGFjdF9fZGV0YWlscyBwIHtcXHJcXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmNvbnRhY3RfX2FkZHJlc3MsXFxyXFxuICAgIC5jb250YWN0X19ob3VycyxcXHJcXG4gICAgLmNvbnRhY3RfX3Bob25lIHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDJyZW0gMDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4vKioqKioqKioqKlxcclxcbkZPUk1cXHJcXG4qKioqKioqKioqL1xcclxcbi5mb3JtIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6IDUwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybV9fbmFtZSxcXHJcXG4uZm9ybV9fZW1haWwsXFxyXFxuLmZvcm1fX21lc3NhZ2Uge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG4gICAgbWFyZ2luOiAxcmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuNSk7XFxyXFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgc25vdztcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIGNvbG9yOiBzbm93O1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybV9fbWVzc2FnZSB7XFxyXFxuICAgIGhlaWdodDogMjAwcHg7XFxyXFxufVxcclxcblxcclxcbi5idG4ge1xcclxcbiAgICBwYWRkaW5nOiAxcmVtIDJyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXHJcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxyXFxuICAgIGNvbG9yOiBzbm93O1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IC4xMjVyZW07XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHNub3c7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpe1xcclxcbiAgICAuZm9ybSB7XFxyXFxuICAgICAgICB3aWR0aDogMzIwcHg7XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOiAycmVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5mb3JtX19uYW1lLFxcclxcbiAgICAuZm9ybV9fZW1haWwsXFxyXFxuICAgIC5mb3JtX19tZXNzYWdlIHtcXHJcXG4gICAgICAgIG1hcmdpbjogMXJlbSAwO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi8qKioqKioqKioqXFxyXFxuRk9PVEVSXFxyXFxuKioqKioqKioqKi9cXHJcXG4uZm9vdGVyIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgaGVpZ2h0OiA0cmVtO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksVUFBVTtJQUNWLFNBQVM7SUFDVCxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLDBGQUF5RTtJQUN6RSwrQkFBK0I7SUFDL0IsWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osY0FBYztJQUNkLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7O0FBR0E7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7O1VBRVU7O0FBRVY7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLHFDQUFxQztJQUNyQyx1QkFBdUI7SUFDdkIsU0FBUztJQUNULGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ks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WTtJQUNaLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgICB3aWR0aDogMTAwdnc7XFxyXFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC44KSB1cmwoLi9pbWFnZXMvdGFjby5wbmcpIGNlbnRlci9jb3ZlciBuby1yZXBlYXQ7XFxyXFxuICAgIGJhY2tncm91bmQtYmxlbmQtbW9kZTogbXVsdGlwbHk7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDEuMjU7XFxyXFxufVxcclxcblxcclxcbnVsIHtcXHJcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5hIHtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogMC4xMjVyZW07XFxyXFxufVxcclxcblxcclxcbmE6aG92ZXJ7XFxyXFxuICAgIGNvbG9yOiByZWQ7XFxyXFxufVxcclxcblxcclxcblxcclxcbjo6cGxhY2Vob2xkZXIge1xcclxcbiAgICBjb2xvcjogc25vdztcXHJcXG59XFxyXFxuXFxyXFxuLyoqKioqKioqKipcXHJcXG5OQVZCQVJcXHJcXG4qKioqKioqKioqL1xcclxcblxcclxcbi5uYXZ7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcclxcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcclxcbiAgICBoZWlnaHQ6IDE1MHB4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2X19oZWFkZXIge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdl9fbGlua3Mge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDhyZW0gOHJlbSA4cmVtO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAycmVtO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxubGkge1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxufVxcclxcblxcclxcbi5hY3RpdmUge1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG92ZXJsaW5lO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb24tY29sb3I6IGdvbGQ7XFxyXFxufVxcclxcblxcclxcbi5uYXZfX2xpbmsge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG4jY29udGVudHtcXHJcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTUwcHggLSA0cmVtKTsgXFxyXFxuICAgIG1heC13aWR0aDogMTQwMHB4O1xcclxcbiAgICB3aWR0aDogOTB2dztcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uaW1nIHtcXHJcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpe1xcclxcbiAgICAjY29udGVudCB7XFxyXFxuICAgICAgICBtYXgtd2lkdGg6IDkwdnc7XFxyXFxuICAgICAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLm5hdiB7XFxyXFxuICAgICAgICBtYXgtd2lkdGg6IDkwdnc7XFxyXFxuICAgICAgICBtYXJnaW46IGF1dG87XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLm5hdl9fbGlua3Mge1xcclxcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgICAgICAgZGlzcGxheTppbmxpbmUtZmxleFxcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi8qKioqKioqKioqXFxyXFxuSEVST1xcclxcbioqKioqKioqKiovXFxyXFxuLmhlcm8ge1xcclxcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxNTBweCAtIDRyZW0pOyBcXHJcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5oZXJvX19oZWFkZXIge1xcclxcbiAgICBmb250LXNpemU6IDJyZW07XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVyb19fZGVzY3JpcHRpb24gIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbi8qKioqKioqKioqXFxyXFxuTUVOVVxcclxcbioqKioqKioqKiovXFxyXFxuLm1lbnUge1xcclxcbiAgICAvKiBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxNTBweCAtIDRyZW0pOyAqL1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7IFxcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7IFxcclxcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDJyZW07XFxyXFxuICAgIHBhZGRpbmc6IDJyZW0gMDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVfX3RpdGxlIHtcXHJcXG4gICAgZm9udC1zaXplOiA0cmVtO1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogLjEyNXJlbTtcXHJcXG59XFxyXFxuLm1lbnVfX2l0ZW0ge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxyXFxufVxcclxcblxcclxcbi5tZW51X19kZXNjcmlwdGlvbiB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXHJcXG59XFxyXFxuLm1lbnVfX2ltZyB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudV9faW1nIGltZyB7XFxyXFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIHdpZHRoOiAzMDBweDtcXHJcXG4gICAgaGVpZ2h0OiAyMDBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCl7XFxyXFxuICAgIC5tZW51IHtcXHJcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcclxcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogMnJlbTtcXHJcXG4gICAgfVxcclxcbiAgICAubWVudV9faXRlbSB7XFxyXFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubWVudV9fZGVzY3JpcHRpb24ge1xcclxcbiAgICAgICAgcGFkZGluZzogMXJlbTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjlweCl7XFxyXFxuICAgIC5tZW51IHtcXHJcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcclxcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogMnJlbTtcXHJcXG4gICAgfVxcclxcbiAgICAubWVudV9faXRlbSB7XFxyXFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLm1lbnVfX2Rlc2NyaXB0aW9uIHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KXtcXHJcXG4gICAgLm1lbnUge1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcclxcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogMnJlbTtcXHJcXG4gICAgfVxcclxcbiAgICAubWVudV9faXRlbSB7XFxyXFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLm1lbnVfX2Rlc2NyaXB0aW9uIHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLyoqKioqKioqKipcXHJcXG5DT05UQUNUXFxyXFxuKioqKioqKioqKi9cXHJcXG5cXHJcXG4uY29udGFjdCB7XFxyXFxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDE1MHB4IC0gNHJlbSk7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3RfX2FkZHJlc3MsXFxyXFxuLmNvbnRhY3RfX2hvdXJzLFxcclxcbi5jb250YWN0X19waG9uZSB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDJyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdF9fZGV0YWlscyBwIHtcXHJcXG4gICAgcGFkZGluZzogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCl7XFxyXFxuICAgIC5jb250YWN0IHtcXHJcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcclxcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5jb250YWN0X19kZXRhaWxzIHAge1xcclxcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuY29udGFjdF9fYWRkcmVzcyxcXHJcXG4gICAgLmNvbnRhY3RfX2hvdXJzLFxcclxcbiAgICAuY29udGFjdF9fcGhvbmUge1xcclxcbiAgICAgICAgcGFkZGluZzogMnJlbSAwO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi8qKioqKioqKioqXFxyXFxuRk9STVxcclxcbioqKioqKioqKiovXFxyXFxuLmZvcm0ge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcclxcbiAgICB3aWR0aDogNTAwcHg7XFxyXFxufVxcclxcblxcclxcbi5mb3JtX19uYW1lLFxcclxcbi5mb3JtX19lbWFpbCxcXHJcXG4uZm9ybV9fbWVzc2FnZSB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgICBtYXJnaW46IDFyZW07XFxyXFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC41KTtcXHJcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBzbm93O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgY29sb3I6IHNub3c7XFxyXFxufVxcclxcblxcclxcbi5mb3JtX19tZXNzYWdlIHtcXHJcXG4gICAgaGVpZ2h0OiAyMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0biB7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW0gMnJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgY29sb3I6IHNub3c7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogLjEyNXJlbTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZDogc25vdztcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCl7XFxyXFxuICAgIC5mb3JtIHtcXHJcXG4gICAgICAgIHdpZHRoOiAzMjBweDtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IDJyZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmZvcm1fX25hbWUsXFxyXFxuICAgIC5mb3JtX19lbWFpbCxcXHJcXG4gICAgLmZvcm1fX21lc3NhZ2Uge1xcclxcbiAgICAgICAgbWFyZ2luOiAxcmVtIDA7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLyoqKioqKioqKipcXHJcXG5GT09URVJcXHJcXG4qKioqKioqKioqL1xcclxcbi5mb290ZXIge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcclxcbiAgICBoZWlnaHQ6IDRyZW07XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZDogYmxhY2s7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgPT0gbnVsbCA/IG51bGwgOiB0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl07IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlLCBuby1wYXJhbS1yZWFzc2lnblxuXG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhzdHlsZSwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICByZXR1cm4gc3R5bGU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZSkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZShcIm1lZGlhXCIpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSkge1xuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJmdW5jdGlvbiBjb250YWN0KCkge1xyXG4gICAgY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xyXG4gICAgY29udGFjdC5jbGFzc0xpc3QuYWRkKFwiY29udGFjdFwiKTtcclxuICAgIGNvbnN0IGRldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYXJ0aWNsZVwiKTtcclxuICAgIGRldGFpbHMuY2xhc3NMaXN0LmFkZChcImNvbnRhY3RfX2RldGFpbHNcIik7XHJcbiAgICBjb25zdCBhZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGFkZHJlc3MuY2xhc3NMaXN0LmFkZChcImNvbnRhY3RfX2FkZHJlc3NcIik7XHJcbiAgICBjb25zdCBwMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgcDEudGV4dENvbnRlbnQgPSBcIlRoZSBUYWNvIFNwb3RcIjtcclxuICAgIGNvbnN0IHAyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBwMi50ZXh0Q29udGVudCA9IFwiMTM3IFcgMzl0aCBTdHJlZXRcIjtcclxuICAgIGNvbnN0IHAzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBwMy50ZXh0Q29udGVudCA9IFwiVGFjb3ZpbGxlLCBUTyA2NDU1MVwiO1xyXG4gICAgYWRkcmVzcy5hcHBlbmQocDEsIHAyLCBwMyk7XHJcbiAgICBjb25zdCBob3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBob3Vycy5jbGFzc0xpc3QuYWRkKFwiY29udGFjdF9faG91cnNcIik7XHJcbiAgICBjb25zdCBwNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgcDQudGV4dENvbnRlbnQgPSBcIk1vbiAtIFRodXJzOiAxMTowMEFNIC0gMTA6MDBQTVwiO1xyXG4gICAgY29uc3QgcDUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIHA1LnRleHRDb250ZW50ID0gXCJGcmkgLSBTYXQ6IDExOjAwQU0gLSAxMjowMEFNXCI7XHJcbiAgICBjb25zdCBwNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgcDYudGV4dENvbnRlbnQgPSBcIlN1biAtIENMT1NFRFwiO1xyXG4gICAgaG91cnMuYXBwZW5kKHA0LCBwNSwgcDYpO1xyXG4gICAgY29uc3QgcGhvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgcGhvbmUuY2xhc3NMaXN0LmFkZChcImNvbnRhY3RfX3Bob25lXCIpO1xyXG4gICAgY29uc3QgcDcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuXHRwNy50ZXh0Q29udGVudCA9IFwiMjgxLTMzMC04MDA0XCI7XHJcbiAgICBwaG9uZS5hcHBlbmRDaGlsZChwNyk7XHJcbiAgICBjb25zdCBjb250YWN0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhcnRpY2xlXCIpO1xyXG4gICAgY29udGFjdEZvcm0uYXBwZW5kKGNyZWF0ZUZvcm0oKSk7XHJcbiAgICBjb250YWN0Rm9ybS5jbGFzc0xpc3QuYWRkKFwiY29udGFjdF9fZm9ybVwiKTtcclxuICAgIGRldGFpbHMuYXBwZW5kKGFkZHJlc3MsIGhvdXJzLCBwaG9uZSk7XHJcbiAgICBjb250YWN0LmFwcGVuZChjb250YWN0Rm9ybSwgZGV0YWlscyk7XHJcbiAgICByZXR1cm4gY29udGFjdDtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlRm9ybSgpIHtcclxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcclxuICAgIGZvcm0uY2xhc3NMaXN0LmFkZChcImZvcm1cIik7XHJcbiAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgbmFtZS5jbGFzc0xpc3QuYWRkKFwiZm9ybV9fbmFtZVwiKTtcclxuICAgIG5hbWUuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XHJcbiAgICBuYW1lLnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiTmFtZVwiKTtcclxuICAgIGNvbnN0IGVtYWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgZW1haWwuY2xhc3NMaXN0LmFkZChcImZvcm1fX2VtYWlsXCIpO1xyXG4gICAgZW1haWwuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImVtYWlsXCIpO1xyXG4gICAgZW1haWwuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJFbWFpbFwiKTtcclxuICAgIGNvbnN0IG1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XHJcbiAgICBtZXNzYWdlLmNsYXNzTGlzdC5hZGQoXCJmb3JtX19tZXNzYWdlXCIpO1xyXG4gICAgbWVzc2FnZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiZW1haWxcIik7XHJcbiAgICBtZXNzYWdlLnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiTWVzc2FnZVwiKTtcclxuICAgIGNvbnN0IHNlbmRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgc2VuZEJ0bi5jbGFzc0xpc3QuYWRkKFwiYnRuXCIpO1xyXG4gICAgc2VuZEJ0bi50ZXh0Q29udGVudCA9IFwiU0VORFwiO1xyXG4gICAgZm9ybS5hcHBlbmQobmFtZSwgZW1haWwsIG1lc3NhZ2UsIHNlbmRCdG4pO1xyXG4gICAgcmV0dXJuIGZvcm07XHJcbn1cclxuXHJcbmV4cG9ydCB7IGNvbnRhY3QgfTtcclxuXHJcbiIsImltcG9ydCBhdm9jYWRvIGZyb20gXCIuL2ltYWdlcy9hdm9jYWRvLmpwZ1wiO1xyXG5pbXBvcnQgY2FybmVhc2FkYSBmcm9tIFwiLi9pbWFnZXMvY2FybmVhc2FkYS5qcGdcIjtcclxuaW1wb3J0IGNoaXBzIGZyb20gXCIuL2ltYWdlcy9jaGlwcy5qcGdcIjtcclxuaW1wb3J0IGZpc2ggZnJvbSBcIi4vaW1hZ2VzL2Zpc2guanBnXCI7XHJcbmltcG9ydCB2ZWdldGFyaWFuIGZyb20gXCIuL2ltYWdlcy92ZWdldGFyaWFuLmpwZ1wiO1xyXG5cclxuZnVuY3Rpb24gbWVudSgpIHtcclxuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcclxuICAgIG1lbnUuY2xhc3NMaXN0LmFkZChcIm1lbnVcIik7XHJcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJtZW51X190aXRsZVwiKTtcclxuICAgIHRpdGxlLnRleHRDb250ZW50ID0gXCJNZW51XCI7XHJcbiAgICBtZW51LmFwcGVuZENoaWxkKHRpdGxlKTtcclxuICAgIGNvbnN0IGF2b2NhZG9JbWcgPSBpbWcoYXZvY2Fkbyk7XHJcbiAgICBjb25zdCBjYXJuZWFzYWRhSW1nID0gaW1nKGNhcm5lYXNhZGEpO1xyXG4gICAgY29uc3QgY2hpcHNJbWcgPSBpbWcoY2hpcHMpO1xyXG4gICAgY29uc3QgZmlzaEltZyA9IGltZyhmaXNoKTtcclxuICAgIGNvbnN0IHZlZ2V0YXJpYW5JbWcgPSBpbWcodmVnZXRhcmlhbik7XHJcbiAgICBjb25zdCBtZW51SXRlbUltZ3MgPSBbYXZvY2Fkb0ltZywgY2FybmVhc2FkYUltZywgY2hpcHNJbWcsIGZpc2hJbWcsIHZlZ2V0YXJpYW5JbWddO1xyXG4gICAgY29uc3QgbWVudUl0ZW1EZXNjcmlwdGlvbnMgPSBbXCJBdm9jYWRvIERpcCAkNi45OVwiLCBcIkNhcm5lIEFzYWRhIFRhY29zICQxMC45OVwiLCBcIjMgQ2hpcCBTYW1wbGVyIFBsYXR0ZXIgICQ3Ljk5XCIsIFwiRnJpZWQgRmlzaCBUYWNvcyAgJDkuOTlcIiwgXCJWZWdldGFyaWFuIFRhY29zICQ4Ljk5XCJdO1xyXG4gICAgbWVudUl0ZW1JbWdzLmZvckVhY2goZnVuY3Rpb24gKG1lbnVJdGVtLCBpbmRleCkge1xyXG5cdFx0XHRtZW51LmFwcGVuZENoaWxkKFxyXG5cdFx0XHRcdGNyZWF0ZU1lbnVJdGVtKFxyXG5cdFx0XHRcdFx0bWVudUl0ZW1EZXNjcmlwdGlvbnNbaW5kZXhdLFxyXG5cdFx0XHRcdFx0XCJtZW51X19pdGVtXCIsXHJcblx0XHRcdFx0XHRcIm1lbnVfX2Rlc2NyaXB0aW9uXCIsXHJcblx0XHRcdFx0XHRcIm1lbnVfX2ltZ1wiLFxyXG5cdFx0XHRcdFx0bWVudUl0ZW1cclxuXHRcdFx0XHQpXHJcblx0XHRcdCk7XHJcblx0XHR9KTtcclxuICAgIHJldHVybiBtZW51O1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbWcoc3JjKSB7XHJcbiAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGltZy5zcmMgPSBzcmM7XHJcbiAgICByZXR1cm4gaW1nO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVNZW51SXRlbShkZXNjcmlwdGlvbiwgY2xhc3NOYW1lMSwgY2xhc3NOYW1lMiwgY2xhc3NOYW1lMywgaW1nKSB7XHJcbiAgICBjb25zdCBtZW51SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xyXG4gICAgbWVudUl0ZW0uY2xhc3NMaXN0LmFkZChjbGFzc05hbWUxKTtcclxuICAgIGNvbnN0IG1lbnVEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhcnRpY2xlXCIpO1xyXG4gICAgbWVudURlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lMik7XHJcbiAgICBtZW51RGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBkZXNjcmlwdGlvbjtcclxuICAgIGNvbnN0IG1lbnVJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYXJ0aWNsZVwiKTtcclxuICAgIG1lbnVJbWcuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUzKTtcclxuICAgIG1lbnVJbWcuYXBwZW5kQ2hpbGQoaW1nKTtcclxuICAgIG1lbnVJdGVtLmFwcGVuZChtZW51SW1nLCBtZW51RGVzY3JpcHRpb24pO1xyXG4gICAgcmV0dXJuIG1lbnVJdGVtO1xyXG59XHJcblxyXG5leHBvcnQge21lbnV9OyIsIlxyXG5mdW5jdGlvbiByZW5kZXJIb21lKCkge1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmQocmVuZGVyTmF2KCkpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmQocmVuZGVyQ29udGVudCgpKTtcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKHJlbmRlckZvb3RlcigpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVuZGVyTmF2KCkge1xyXG4gICAgbGV0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XHJcbiAgICBuYXYuY2xhc3NMaXN0LmFkZChcIm5hdlwiKTtcclxuICAgIGxldCBuYXZIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbmF2SGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJuYXZfX2hlYWRlclwiKTtcclxuICAgIGxldCBuYXZIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG4gICAgbmF2SGVhZGluZy5jbGFzc0xpc3QuYWRkKFwibmF2X19sb2dvXCIpO1xyXG4gICAgbmF2SGVhZGluZy50ZXh0Q29udGVudCA9IFwiVGhlIFRhY28gU3BvdFwiO1xyXG4gICAgbmF2SGVhZGVyLmFwcGVuZENoaWxkKG5hdkhlYWRpbmcpO1xyXG4gICAgbGV0IG5hdkxpbmtzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xyXG4gICAgbmF2TGlua3MuY2xhc3NMaXN0LmFkZChcIm5hdl9fbGlua3NcIik7XHJcbiAgICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICBsZXQgaG9tZUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICAgIGhvbWVMaW5rLmNsYXNzTGlzdC5hZGQoXCJuYXZfX2xpbmtcIik7XHJcbiAgICBob21lTGluay5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gICAgaG9tZUxpbmsuaWQgPSBcImhvbWVcIjtcclxuICAgIGhvbWVMaW5rLmhyZWYgPSBcIiNcIjtcclxuICAgIGhvbWVMaW5rLnRleHRDb250ZW50ID0gXCJIb21lXCI7XHJcbiAgICBsaS5hcHBlbmRDaGlsZChob21lTGluayk7XHJcbiAgICBsZXQgbGkxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgbGV0IG1lbnVMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICBtZW51TGluay5jbGFzc0xpc3QuYWRkKFwibmF2X19saW5rXCIpO1xyXG4gICAgbWVudUxpbmsuaWQgPSBcIm1lbnVcIjtcclxuICAgIG1lbnVMaW5rLmhyZWYgPSBcIiNcIjtcclxuICAgIG1lbnVMaW5rLnRleHRDb250ZW50ID0gXCJNZW51XCI7XHJcbiAgICBsaTEuYXBwZW5kQ2hpbGQobWVudUxpbmspO1xyXG4gICAgbGV0IGxpMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgIGxldCBjb250YWN0TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gICAgY29udGFjdExpbmsuY2xhc3NMaXN0LmFkZChcIm5hdl9fbGlua1wiKTtcclxuICAgIGNvbnRhY3RMaW5rLmlkID0gXCJjb250YWN0XCI7XHJcbiAgICBjb250YWN0TGluay5ocmVmID0gXCIjXCI7XHJcbiAgICBjb250YWN0TGluay50ZXh0Q29udGVudCA9IFwiQ29udGFjdFwiO1xyXG4gICAgbGkyLmFwcGVuZENoaWxkKGNvbnRhY3RMaW5rKTtcclxuICAgIG5hdkxpbmtzLmFwcGVuZENoaWxkKGxpKTtcclxuICAgIG5hdkxpbmtzLmFwcGVuZENoaWxkKGxpMSk7XHJcbiAgICBuYXZMaW5rcy5hcHBlbmRDaGlsZChsaTIpO1xyXG4gICAgbmF2LmFwcGVuZChuYXZIZWFkZXIsIG5hdkxpbmtzKTtcclxuICAgIHJldHVybiBuYXY7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlckNvbnRlbnQoKSB7XHJcbiAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnRhaW5lci5pZCA9IFwiY29udGVudFwiO1xyXG4gICAgbGV0IGhlcm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcclxuICAgIGhlcm8uY2xhc3NMaXN0LmFkZChcImhlcm9cIik7XHJcbiAgICBsZXQgaGVyb0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xyXG4gICAgaGVyb0hlYWRlci5jbGFzc0xpc3QuYWRkKFwiaGVyb19faGVhZGVyXCIpO1xyXG4gICAgbGV0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG4gICAgaDIuY2xhc3NMaXN0LmFkZChcImhlcm9fX2hlYWRpbmdcIik7XHJcbiAgICBoMi50ZXh0Q29udGVudCA9IFwiRXZlcnlkYXkgaXMgZm9yIFRhY29zLCBub3QganVzdCBUdWVzZGF5IVwiO1xyXG4gICAgaGVyb0hlYWRlci5hcHBlbmRDaGlsZChoMik7XHJcbiAgICBsZXQgaGVyb0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFydGljbGVcIik7XHJcbiAgICBoZXJvRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcImhlcm9fX2Rlc2NyaXB0aW9uXCIpO1xyXG4gICAgbGV0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIHAuY2xhc3NMaXN0LmFkZChcImhlcm9fX3RleHRcIik7XHJcbiAgICBwLnRleHRDb250ZW50ID0gYFNlcnZpbmcgdXAgdGhlIGJlc3QgdGFjb3Mgb24gdGhlIEVhc3QgQ29hc3Qgc2luY2UgMjAxNy4gIFxyXG4gICAgQ3JlYXRpdml0eSBhbmQgYXR0ZW50aW9uIHRvIGRldGFpbCBoZWxwIGNyYWZ0IG91ciBtb3V0aC13YXRlcmluZyByZWNpcGVzLlxyXG4gICAgRG9udCBoZXNpdGF0ZSwgc3RvcCBieSBhbmQgbGV0IG9uZSBvZiBvdXIgdGFjb3MgXCJoaXQgdGhlIHNwb3QhXCJgO1xyXG4gICAgaGVyb0Rlc2NyaXB0aW9uLmFwcGVuZENoaWxkKHApO1xyXG4gICAgaGVyby5hcHBlbmRDaGlsZChoZXJvSGVhZGVyKTtcclxuICAgIGhlcm8uYXBwZW5kQ2hpbGQoaGVyb0Rlc2NyaXB0aW9uKTtcclxuICAgIGNvbnRhaW5lci5hcHBlbmQoaGVybyk7XHJcbiAgICByZXR1cm4gY29udGFpbmVyO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW5kZXJGb290ZXIoKSB7XHJcbiAgICBsZXQgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtcclxuICAgIGZvb3Rlci5jbGFzc0xpc3QuYWRkKFwiZm9vdGVyXCIpO1xyXG4gICAgbGV0IHNtYWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNtYWxsXCIpO1xyXG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKTtcclxuICAgIHNtYWxsLmlubmVySFRNTCA9IGAmY29weTsgJHtkYXRlfSBDb2RlZCAmIENyZWF0ZWQgQnkgTmF0YXNoYSBKb2huc29uYDtcclxuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChzbWFsbCk7XHJcbiAgICByZXR1cm4gZm9vdGVyO1xyXG59XHJcblxyXG5leHBvcnQge3JlbmRlckhvbWUsIHJlbmRlck5hdiwgcmVuZGVyQ29udGVudH07XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcclxuXHJcbmltcG9ydCB7cmVuZGVySG9tZSwgcmVuZGVyQ29udGVudH0gZnJvbSBcIi4vcmVuZGVyLmpzXCI7XHJcbmltcG9ydCB7IG1lbnUgfSBmcm9tIFwiLi9tZW51LmpzXCI7XHJcbmltcG9ydCB7IGNvbnRhY3QgfSBmcm9tIFwiLi9jb250YWN0XCI7XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgcmVuZGVySG9tZSgpKTtcclxuY29uc3QgaG9tZVRhYiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaG9tZVwiKTtcclxuY29uc3QgbWVudVRhYiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVudVwiKTtcclxuY29uc3QgY29udGFjdFRhYiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGFjdFwiKTtcclxuXHJcbmhvbWVUYWIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHN3aXRjaFRhYik7XHJcbm1lbnVUYWIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHN3aXRjaFRhYik7XHJcbmNvbnRhY3RUYWIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHN3aXRjaFRhYik7XHJcblxyXG5mdW5jdGlvbiBzd2l0Y2hUYWIoZSkge1xyXG4gICAgY29uc3Qgb2xkQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcclxuICAgIGNvbnN0IHRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5hdl9fbGlua1wiKTtcclxuICAgIGlmIChlLnRhcmdldC5pZCA9PT0gXCJob21lXCIpIHtcclxuICAgICAgICBvbGRDb250ZW50LmZpcnN0Q2hpbGQucmVtb3ZlKCk7XHJcbiAgICAgICAgb2xkQ29udGVudC5hcHBlbmQocmVuZGVyQ29udGVudCgpKTtcclxuICAgICAgICBhZGRBY3RpdmUoZS50YXJnZXQsIHRhYnMpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoZS50YXJnZXQuaWQgPT09IFwibWVudVwiKSB7XHJcbiAgICAgICAgb2xkQ29udGVudC5maXJzdENoaWxkLnJlbW92ZSgpO1xyXG4gICAgICAgIG9sZENvbnRlbnQuYXBwZW5kKG1lbnUoKSk7XHJcbiAgICAgICAgYWRkQWN0aXZlKGUudGFyZ2V0LCB0YWJzKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGUudGFyZ2V0LmlkID09PSBcImNvbnRhY3RcIikge1xyXG4gICAgICAgIG9sZENvbnRlbnQuZmlyc3RDaGlsZC5yZW1vdmUoKTtcclxuICAgICAgICBvbGRDb250ZW50LmFwcGVuZChjb250YWN0KCkpO1xyXG4gICAgICAgIGFkZEFjdGl2ZShlLnRhcmdldCwgdGFicyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZEFjdGl2ZSh0YXJnZXQsIHRhYnMpIHtcclxuICAgIGNvbnN0IHRhYkxpbmtzID0gQXJyYXkuZnJvbSh0YWJzKTtcclxuICAgIHRhYkxpbmtzLmZvckVhY2goZnVuY3Rpb24gKGxpbmspIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhsaW5rLmlkLCB0YXJnZXQuaWQpO1xyXG4gICAgICAgIGlmIChsaW5rLmlkID09IHRhcmdldC5pZCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgbGluay5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxpbmsuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJub3QgYWN0aXZlXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==