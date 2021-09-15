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
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n    padding: 0;\r\n    margin: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    min-height: 100vh;\r\n    width: 100vw;\r\n    background: rgba(0,0,0,0.8) url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") center/cover no-repeat;\r\n    background-blend-mode: multiply;\r\n    color: white;\r\n    line-height: 1.25;\r\n}\r\n\r\nul {\r\n    list-style-type: none;\r\n}\r\n\r\na {\r\n    text-decoration: none;\r\n    color: white;\r\n    display: block;\r\n    letter-spacing: 0.125rem;\r\n}\r\n\r\na:hover{\r\n    color: red;\r\n}\r\n\r\n\r\n::placeholder {\r\n    color: snow;\r\n}\r\n\r\n/**********\r\nNAVBAR\r\n**********/\r\n\r\n.nav{\r\n    display: grid;\r\n    grid-template-rows: 1fr;\r\n    place-items: center;\r\n    height: 150px;\r\n    align-items: center;\r\n}\r\n\r\n.nav__header {\r\n    text-align: center;\r\n    padding: 1rem;\r\n    font-size: 2rem;\r\n}\r\n\r\n.nav__links {\r\n    display: grid;\r\n    grid-template-columns: 8rem 8rem 8rem;\r\n    justify-content: center;\r\n    gap: 2rem;\r\n    text-align: center;\r\n    height: 100%;\r\n    align-items: center;\r\n}\r\n\r\nli {\r\n    height: 100%;\r\n    align-items: center;\r\n    display: grid;\r\n}\r\n\r\n.active {\r\n    text-decoration: overline;\r\n    text-decoration-color: gold;\r\n}\r\n\r\n.nav__link {\r\n    display: block;\r\n    font-size: 1.25rem;\r\n    cursor: pointer;\r\n    letter-spacing: 0.1rem;\r\n    text-transform: uppercase;\r\n    \r\n}\r\n\r\n#content{\r\n    min-height: calc(100vh - 150px - 4rem); \r\n    max-width: 1400px;\r\n    width: 90vw;\r\n    margin: auto;\r\n    /* display: grid;\r\n    place-items: center; */\r\n}\r\n\r\n.img {\r\n    object-fit: cover;\r\n    width: 100%;\r\n}\r\n\r\n@media screen and (max-width: 1200px){\r\n    #content {\r\n        max-width: 90vw;\r\n        height: auto;\r\n    }\r\n\r\n    .nav {\r\n        max-width: 90vw;\r\n        margin: auto;\r\n    }\r\n\r\n    .nav__links {\r\n        height: 100%;\r\n        width: 100%;\r\n        padding: 1rem;\r\n        display:inline-flex\r\n    }\r\n}\r\n\r\n/**********\r\nHERO\r\n**********/\r\n.hero {\r\n    height: calc(100vh - 150px - 4rem); \r\n    text-align: left;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n}\r\n\r\n.hero__header {\r\n    font-size: 2rem;\r\n    padding-bottom: 2rem;\r\n}\r\n\r\n.hero__description  {\r\n    font-size: 1.5rem;\r\n}\r\n\r\n/**********\r\nMENU\r\n**********/\r\n.menu {\r\n    /* height: calc(100vh - 150px - 4rem); */\r\n    /* height: 100%; */\r\n    display: grid; \r\n    grid-template-columns: 1fr 1fr; \r\n    place-items: center;\r\n    gap: 2rem;\r\n    padding: 2rem 0;\r\n}\r\n\r\n.menu__title {\r\n    font-size: 4rem;\r\n    text-transform: uppercase;\r\n    letter-spacing: .125rem;\r\n}\r\n.menu__item {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n}\r\n\r\n.menu__description {\r\n    width: 100%;\r\n    display: grid;\r\n    place-items: center;\r\n    font-size: 1.3rem;\r\n}\r\n.menu__img {\r\n    width: 100%;\r\n}\r\n\r\n.menu__img img {\r\n    object-fit: cover;\r\n    width: 100%;\r\n    display: block;\r\n    width: 300px;\r\n    height: 200px;\r\n    border-radius: 0.5rem;\r\n}\r\n\r\n@media screen and (max-width: 768px){\r\n    .menu {\r\n        grid-template-columns: 1fr;\r\n        height: 100%;\r\n        margin-top: 2rem;\r\n    }\r\n    .menu__item {\r\n        grid-template-columns: 1fr;\r\n    }\r\n\r\n    .menu__description {\r\n        padding: 1rem;\r\n    }\r\n}\r\n\r\n@media screen and (min-width: 769px){\r\n    .menu {\r\n        grid-template-columns: 1fr;\r\n        height: 100%;\r\n        margin-top: 2rem;\r\n    }\r\n    .menu__item {\r\n        grid-template-columns: 1fr 1fr;\r\n    }\r\n\r\n    .menu__description {\r\n        padding: 1rem;\r\n    }\r\n}\r\n\r\n@media screen and (min-width: 1200px){\r\n    .menu {\r\n        grid-template-columns: 1fr 1fr;\r\n        height: 100%;\r\n        margin-top: 0;\r\n        padding-top: 2rem;\r\n    }\r\n    .menu__item {\r\n        grid-template-columns: 1fr 1fr;\r\n    }\r\n\r\n    .menu__description {\r\n        padding: 1rem;\r\n    }\r\n}\r\n\r\n/**********\r\nCONTACT\r\n**********/\r\n\r\n.contact {\r\n    height: calc(100vh - 150px - 4rem);\r\n    display: grid;\r\n    place-items: center;\r\n    grid-template-columns: 1fr 1fr;\r\n    gap: 1rem;\r\n    width: 100%;\r\n}\r\n\r\n.contact__address,\r\n.contact__hours,\r\n.contact__phone {\r\n    width: 100%;\r\n    text-align: center;\r\n    padding: 2rem;\r\n    font-size: 1.5rem;\r\n}\r\n\r\n.contact__details p {\r\n    padding: 0.5rem;\r\n}\r\n\r\n@media screen and (max-width: 992px){\r\n    .contact {\r\n        grid-template-columns: 1fr;\r\n        height: auto;\r\n    }\r\n\r\n    .contact__details p {\r\n        text-align: left;\r\n    }\r\n\r\n    .contact__address,\r\n    .contact__hours,\r\n    .contact__phone {\r\n        padding: 2rem 0;\r\n    }\r\n}\r\n\r\n/**********\r\nFORM\r\n**********/\r\n.form {\r\n    display: grid;\r\n    place-items: center;\r\n    width: 500px;\r\n}\r\n\r\n.form__name,\r\n.form__email,\r\n.form__message {\r\n    width: 100%;\r\n    padding: 1rem;\r\n    margin: 1rem;\r\n    background: rgba(0,0,0,0.5);\r\n    backdrop-filter: blur(10px);\r\n    border: 1px solid snow;\r\n    border-radius: 0.5rem;\r\n    font-size: 1rem;\r\n    color: snow;\r\n}\r\n\r\n.form__message {\r\n    height: 200px;\r\n}\r\n\r\n.btn {\r\n    padding: 1rem 2rem;\r\n    border-radius: 0.5rem;\r\n    background: transparent;\r\n    color: snow;\r\n    border: 1px solid white;\r\n    letter-spacing: .125rem;\r\n    cursor: pointer;\r\n}\r\n\r\n.btn:hover {\r\n    background: snow;\r\n    color: black;\r\n}\r\n\r\n@media screen and (max-width: 768px){\r\n    .form {\r\n        width: 320px;\r\n        margin-top: 2rem;\r\n    }\r\n\r\n    .form__name,\r\n    .form__email,\r\n    .form__message {\r\n        margin: 1rem 0;\r\n    }\r\n}\r\n\r\n/**********\r\nFOOTER\r\n**********/\r\n.footer {\r\n    display: grid;\r\n    place-items: center;\r\n    height: 4rem;\r\n    text-align: center;\r\n    background: black;\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\r\n    padding: 0;\r\n    margin: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    min-height: 100vh;\r\n    width: 100vw;\r\n    background: rgba(0,0,0,0.8) url(./images/taco.png) center/cover no-repeat;\r\n    background-blend-mode: multiply;\r\n    color: white;\r\n    line-height: 1.25;\r\n}\r\n\r\nul {\r\n    list-style-type: none;\r\n}\r\n\r\na {\r\n    text-decoration: none;\r\n    color: white;\r\n    display: block;\r\n    letter-spacing: 0.125rem;\r\n}\r\n\r\na:hover{\r\n    color: red;\r\n}\r\n\r\n\r\n::placeholder {\r\n    color: snow;\r\n}\r\n\r\n/**********\r\nNAVBAR\r\n**********/\r\n\r\n.nav{\r\n    display: grid;\r\n    grid-template-rows: 1fr;\r\n    place-items: center;\r\n    height: 150px;\r\n    align-items: center;\r\n}\r\n\r\n.nav__header {\r\n    text-align: center;\r\n    padding: 1rem;\r\n    font-size: 2rem;\r\n}\r\n\r\n.nav__links {\r\n    display: grid;\r\n    grid-template-columns: 8rem 8rem 8rem;\r\n    justify-content: center;\r\n    gap: 2rem;\r\n    text-align: center;\r\n    height: 100%;\r\n    align-items: center;\r\n}\r\n\r\nli {\r\n    height: 100%;\r\n    align-items: center;\r\n    display: grid;\r\n}\r\n\r\n.active {\r\n    text-decoration: overline;\r\n    text-decoration-color: gold;\r\n}\r\n\r\n.nav__link {\r\n    display: block;\r\n    font-size: 1.25rem;\r\n    cursor: pointer;\r\n    letter-spacing: 0.1rem;\r\n    text-transform: uppercase;\r\n    \r\n}\r\n\r\n#content{\r\n    min-height: calc(100vh - 150px - 4rem); \r\n    max-width: 1400px;\r\n    width: 90vw;\r\n    margin: auto;\r\n    /* display: grid;\r\n    place-items: center; */\r\n}\r\n\r\n.img {\r\n    object-fit: cover;\r\n    width: 100%;\r\n}\r\n\r\n@media screen and (max-width: 1200px){\r\n    #content {\r\n        max-width: 90vw;\r\n        height: auto;\r\n    }\r\n\r\n    .nav {\r\n        max-width: 90vw;\r\n        margin: auto;\r\n    }\r\n\r\n    .nav__links {\r\n        height: 100%;\r\n        width: 100%;\r\n        padding: 1rem;\r\n        display:inline-flex\r\n    }\r\n}\r\n\r\n/**********\r\nHERO\r\n**********/\r\n.hero {\r\n    height: calc(100vh - 150px - 4rem); \r\n    text-align: left;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n}\r\n\r\n.hero__header {\r\n    font-size: 2rem;\r\n    padding-bottom: 2rem;\r\n}\r\n\r\n.hero__description  {\r\n    font-size: 1.5rem;\r\n}\r\n\r\n/**********\r\nMENU\r\n**********/\r\n.menu {\r\n    /* height: calc(100vh - 150px - 4rem); */\r\n    /* height: 100%; */\r\n    display: grid; \r\n    grid-template-columns: 1fr 1fr; \r\n    place-items: center;\r\n    gap: 2rem;\r\n    padding: 2rem 0;\r\n}\r\n\r\n.menu__title {\r\n    font-size: 4rem;\r\n    text-transform: uppercase;\r\n    letter-spacing: .125rem;\r\n}\r\n.menu__item {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n}\r\n\r\n.menu__description {\r\n    width: 100%;\r\n    display: grid;\r\n    place-items: center;\r\n    font-size: 1.3rem;\r\n}\r\n.menu__img {\r\n    width: 100%;\r\n}\r\n\r\n.menu__img img {\r\n    object-fit: cover;\r\n    width: 100%;\r\n    display: block;\r\n    width: 300px;\r\n    height: 200px;\r\n    border-radius: 0.5rem;\r\n}\r\n\r\n@media screen and (max-width: 768px){\r\n    .menu {\r\n        grid-template-columns: 1fr;\r\n        height: 100%;\r\n        margin-top: 2rem;\r\n    }\r\n    .menu__item {\r\n        grid-template-columns: 1fr;\r\n    }\r\n\r\n    .menu__description {\r\n        padding: 1rem;\r\n    }\r\n}\r\n\r\n@media screen and (min-width: 769px){\r\n    .menu {\r\n        grid-template-columns: 1fr;\r\n        height: 100%;\r\n        margin-top: 2rem;\r\n    }\r\n    .menu__item {\r\n        grid-template-columns: 1fr 1fr;\r\n    }\r\n\r\n    .menu__description {\r\n        padding: 1rem;\r\n    }\r\n}\r\n\r\n@media screen and (min-width: 1200px){\r\n    .menu {\r\n        grid-template-columns: 1fr 1fr;\r\n        height: 100%;\r\n        margin-top: 0;\r\n        padding-top: 2rem;\r\n    }\r\n    .menu__item {\r\n        grid-template-columns: 1fr 1fr;\r\n    }\r\n\r\n    .menu__description {\r\n        padding: 1rem;\r\n    }\r\n}\r\n\r\n/**********\r\nCONTACT\r\n**********/\r\n\r\n.contact {\r\n    height: calc(100vh - 150px - 4rem);\r\n    display: grid;\r\n    place-items: center;\r\n    grid-template-columns: 1fr 1fr;\r\n    gap: 1rem;\r\n    width: 100%;\r\n}\r\n\r\n.contact__address,\r\n.contact__hours,\r\n.contact__phone {\r\n    width: 100%;\r\n    text-align: center;\r\n    padding: 2rem;\r\n    font-size: 1.5rem;\r\n}\r\n\r\n.contact__details p {\r\n    padding: 0.5rem;\r\n}\r\n\r\n@media screen and (max-width: 992px){\r\n    .contact {\r\n        grid-template-columns: 1fr;\r\n        height: auto;\r\n    }\r\n\r\n    .contact__details p {\r\n        text-align: left;\r\n    }\r\n\r\n    .contact__address,\r\n    .contact__hours,\r\n    .contact__phone {\r\n        padding: 2rem 0;\r\n    }\r\n}\r\n\r\n/**********\r\nFORM\r\n**********/\r\n.form {\r\n    display: grid;\r\n    place-items: center;\r\n    width: 500px;\r\n}\r\n\r\n.form__name,\r\n.form__email,\r\n.form__message {\r\n    width: 100%;\r\n    padding: 1rem;\r\n    margin: 1rem;\r\n    background: rgba(0,0,0,0.5);\r\n    backdrop-filter: blur(10px);\r\n    border: 1px solid snow;\r\n    border-radius: 0.5rem;\r\n    font-size: 1rem;\r\n    color: snow;\r\n}\r\n\r\n.form__message {\r\n    height: 200px;\r\n}\r\n\r\n.btn {\r\n    padding: 1rem 2rem;\r\n    border-radius: 0.5rem;\r\n    background: transparent;\r\n    color: snow;\r\n    border: 1px solid white;\r\n    letter-spacing: .125rem;\r\n    cursor: pointer;\r\n}\r\n\r\n.btn:hover {\r\n    background: snow;\r\n    color: black;\r\n}\r\n\r\n@media screen and (max-width: 768px){\r\n    .form {\r\n        width: 320px;\r\n        margin-top: 2rem;\r\n    }\r\n\r\n    .form__name,\r\n    .form__email,\r\n    .form__message {\r\n        margin: 1rem 0;\r\n    }\r\n}\r\n\r\n/**********\r\nFOOTER\r\n**********/\r\n.footer {\r\n    display: grid;\r\n    place-items: center;\r\n    height: 4rem;\r\n    text-align: center;\r\n    background: black;\r\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUE7O1dBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ3JCcUI7QUFDckI7QUFDc0Q7QUFDckI7QUFDRztBQUNwQztBQUNBLDRDQUE0QyxzREFBVTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQix5REFBYTtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQiw4Q0FBSTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixpREFBTztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9yZW5kZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy90YWNvLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuOCkgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBjZW50ZXIvY292ZXIgbm8tcmVwZWF0O1xcclxcbiAgICBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IG11bHRpcGx5O1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjI1O1xcclxcbn1cXHJcXG5cXHJcXG51bCB7XFxyXFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuYSB7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMTI1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5hOmhvdmVye1xcclxcbiAgICBjb2xvcjogcmVkO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG46OnBsYWNlaG9sZGVyIHtcXHJcXG4gICAgY29sb3I6IHNub3c7XFxyXFxufVxcclxcblxcclxcbi8qKioqKioqKioqXFxyXFxuTkFWQkFSXFxyXFxuKioqKioqKioqKi9cXHJcXG5cXHJcXG4ubmF2e1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXHJcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgaGVpZ2h0OiAxNTBweDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdl9faGVhZGVyIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgICBmb250LXNpemU6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5uYXZfX2xpbmtzIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA4cmVtIDhyZW0gOHJlbTtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMnJlbTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmxpIHtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbn1cXHJcXG5cXHJcXG4uYWN0aXZlIHtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBvdmVybGluZTtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiBnb2xkO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2X19saW5rIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRlbnR7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxNTBweCAtIDRyZW0pOyBcXHJcXG4gICAgbWF4LXdpZHRoOiAxNDAwcHg7XFxyXFxuICAgIHdpZHRoOiA5MHZ3O1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxuICAgIC8qIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7ICovXFxyXFxufVxcclxcblxcclxcbi5pbWcge1xcclxcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCl7XFxyXFxuICAgICNjb250ZW50IHtcXHJcXG4gICAgICAgIG1heC13aWR0aDogOTB2dztcXHJcXG4gICAgICAgIGhlaWdodDogYXV0bztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubmF2IHtcXHJcXG4gICAgICAgIG1heC13aWR0aDogOTB2dztcXHJcXG4gICAgICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubmF2X19saW5rcyB7XFxyXFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICAgICAgICBkaXNwbGF5OmlubGluZS1mbGV4XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLyoqKioqKioqKipcXHJcXG5IRVJPXFxyXFxuKioqKioqKioqKi9cXHJcXG4uaGVybyB7XFxyXFxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDE1MHB4IC0gNHJlbSk7IFxcclxcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmhlcm9fX2hlYWRlciB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5oZXJvX19kZXNjcmlwdGlvbiAge1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqKioqKioqKipcXHJcXG5NRU5VXFxyXFxuKioqKioqKioqKi9cXHJcXG4ubWVudSB7XFxyXFxuICAgIC8qIGhlaWdodDogY2FsYygxMDB2aCAtIDE1MHB4IC0gNHJlbSk7ICovXFxyXFxuICAgIC8qIGhlaWdodDogMTAwJTsgKi9cXHJcXG4gICAgZGlzcGxheTogZ3JpZDsgXFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjsgXFxyXFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMnJlbTtcXHJcXG4gICAgcGFkZGluZzogMnJlbSAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudV9fdGl0bGUge1xcclxcbiAgICBmb250LXNpemU6IDRyZW07XFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAuMTI1cmVtO1xcclxcbn1cXHJcXG4ubWVudV9faXRlbSB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVfX2Rlc2NyaXB0aW9uIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbn1cXHJcXG4ubWVudV9faW1nIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5tZW51X19pbWcgaW1nIHtcXHJcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgd2lkdGg6IDMwMHB4O1xcclxcbiAgICBoZWlnaHQ6IDIwMHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KXtcXHJcXG4gICAgLm1lbnUge1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxyXFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOiAycmVtO1xcclxcbiAgICB9XFxyXFxuICAgIC5tZW51X19pdGVtIHtcXHJcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5tZW51X19kZXNjcmlwdGlvbiB7XFxyXFxuICAgICAgICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OXB4KXtcXHJcXG4gICAgLm1lbnUge1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxyXFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOiAycmVtO1xcclxcbiAgICB9XFxyXFxuICAgIC5tZW51X19pdGVtIHtcXHJcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubWVudV9fZGVzY3JpcHRpb24ge1xcclxcbiAgICAgICAgcGFkZGluZzogMXJlbTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpe1xcclxcbiAgICAubWVudSB7XFxyXFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxyXFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOiAwO1xcclxcbiAgICAgICAgcGFkZGluZy10b3A6IDJyZW07XFxyXFxuICAgIH1cXHJcXG4gICAgLm1lbnVfX2l0ZW0ge1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5tZW51X19kZXNjcmlwdGlvbiB7XFxyXFxuICAgICAgICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi8qKioqKioqKioqXFxyXFxuQ09OVEFDVFxcclxcbioqKioqKioqKiovXFxyXFxuXFxyXFxuLmNvbnRhY3Qge1xcclxcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxNTBweCAtIDRyZW0pO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0X19hZGRyZXNzLFxcclxcbi5jb250YWN0X19ob3VycyxcXHJcXG4uY29udGFjdF9fcGhvbmUge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAycmVtO1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3RfX2RldGFpbHMgcCB7XFxyXFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpe1xcclxcbiAgICAuY29udGFjdCB7XFxyXFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXHJcXG4gICAgICAgIGhlaWdodDogYXV0bztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuY29udGFjdF9fZGV0YWlscyBwIHtcXHJcXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmNvbnRhY3RfX2FkZHJlc3MsXFxyXFxuICAgIC5jb250YWN0X19ob3VycyxcXHJcXG4gICAgLmNvbnRhY3RfX3Bob25lIHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDJyZW0gMDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4vKioqKioqKioqKlxcclxcbkZPUk1cXHJcXG4qKioqKioqKioqL1xcclxcbi5mb3JtIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6IDUwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybV9fbmFtZSxcXHJcXG4uZm9ybV9fZW1haWwsXFxyXFxuLmZvcm1fX21lc3NhZ2Uge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG4gICAgbWFyZ2luOiAxcmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuNSk7XFxyXFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgc25vdztcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIGNvbG9yOiBzbm93O1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybV9fbWVzc2FnZSB7XFxyXFxuICAgIGhlaWdodDogMjAwcHg7XFxyXFxufVxcclxcblxcclxcbi5idG4ge1xcclxcbiAgICBwYWRkaW5nOiAxcmVtIDJyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXHJcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxyXFxuICAgIGNvbG9yOiBzbm93O1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IC4xMjVyZW07XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHNub3c7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpe1xcclxcbiAgICAuZm9ybSB7XFxyXFxuICAgICAgICB3aWR0aDogMzIwcHg7XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOiAycmVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5mb3JtX19uYW1lLFxcclxcbiAgICAuZm9ybV9fZW1haWwsXFxyXFxuICAgIC5mb3JtX19tZXNzYWdlIHtcXHJcXG4gICAgICAgIG1hcmdpbjogMXJlbSAwO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi8qKioqKioqKioqXFxyXFxuRk9PVEVSXFxyXFxuKioqKioqKioqKi9cXHJcXG4uZm9vdGVyIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgaGVpZ2h0OiA0cmVtO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksVUFBVTtJQUNWLFNBQVM7SUFDVCxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLDBGQUF5RTtJQUN6RSwrQkFBK0I7SUFDL0IsWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osY0FBYztJQUNkLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7O0FBR0E7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7O1VBRVU7O0FBRVY7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixlQUFl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SUFDdkIsdUJBQXVCO0lBQ3ZCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJO1FBQ0ksWUFBWTtRQUNaLGdCQUFnQjtJQUNwQjs7SUFFQTs7O1FBR0ksY0FBYztJQUNsQjtBQUNKOztBQUVBOztVQUVVO0FBQ1Y7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuOCkgdXJsKC4vaW1hZ2VzL3RhY28ucG5nKSBjZW50ZXIvY292ZXIgbm8tcmVwZWF0O1xcclxcbiAgICBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IG11bHRpcGx5O1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjI1O1xcclxcbn1cXHJcXG5cXHJcXG51bCB7XFxyXFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuYSB7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMTI1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5hOmhvdmVye1xcclxcbiAgICBjb2xvcjogcmVkO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG46OnBsYWNlaG9sZGVyIHtcXHJcXG4gICAgY29sb3I6IHNub3c7XFxyXFxufVxcclxcblxcclxcbi8qKioqKioqKioqXFxyXFxuTkFWQkFSXFxyXFxuKioqKioqKioqKi9cXHJcXG5cXHJcXG4ubmF2e1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXHJcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgaGVpZ2h0OiAxNTBweDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdl9faGVhZGVyIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgICBmb250LXNpemU6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5uYXZfX2xpbmtzIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA4cmVtIDhyZW0gOHJlbTtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMnJlbTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmxpIHtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbn1cXHJcXG5cXHJcXG4uYWN0aXZlIHtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBvdmVybGluZTtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiBnb2xkO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2X19saW5rIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRlbnR7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxNTBweCAtIDRyZW0pOyBcXHJcXG4gICAgbWF4LXdpZHRoOiAxNDAwcHg7XFxyXFxuICAgIHdpZHRoOiA5MHZ3O1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxuICAgIC8qIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7ICovXFxyXFxufVxcclxcblxcclxcbi5pbWcge1xcclxcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCl7XFxyXFxuICAgICNjb250ZW50IHtcXHJcXG4gICAgICAgIG1heC13aWR0aDogOTB2dztcXHJcXG4gICAgICAgIGhlaWdodDogYXV0bztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubmF2IHtcXHJcXG4gICAgICAgIG1heC13aWR0aDogOTB2dztcXHJcXG4gICAgICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubmF2X19saW5rcyB7XFxyXFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICAgICAgICBkaXNwbGF5OmlubGluZS1mbGV4XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLyoqKioqKioqKipcXHJcXG5IRVJPXFxyXFxuKioqKioqKioqKi9cXHJcXG4uaGVybyB7XFxyXFxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDE1MHB4IC0gNHJlbSk7IFxcclxcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmhlcm9fX2hlYWRlciB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5oZXJvX19kZXNjcmlwdGlvbiAge1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqKioqKioqKipcXHJcXG5NRU5VXFxyXFxuKioqKioqKioqKi9cXHJcXG4ubWVudSB7XFxyXFxuICAgIC8qIGhlaWdodDogY2FsYygxMDB2aCAtIDE1MHB4IC0gNHJlbSk7ICovXFxyXFxuICAgIC8qIGhlaWdodDogMTAwJTsgKi9cXHJcXG4gICAgZGlzcGxheTogZ3JpZDsgXFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjsgXFxyXFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMnJlbTtcXHJcXG4gICAgcGFkZGluZzogMnJlbSAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudV9fdGl0bGUge1xcclxcbiAgICBmb250LXNpemU6IDRyZW07XFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAuMTI1cmVtO1xcclxcbn1cXHJcXG4ubWVudV9faXRlbSB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVfX2Rlc2NyaXB0aW9uIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbn1cXHJcXG4ubWVudV9faW1nIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5tZW51X19pbWcgaW1nIHtcXHJcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgd2lkdGg6IDMwMHB4O1xcclxcbiAgICBoZWlnaHQ6IDIwMHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KXtcXHJcXG4gICAgLm1lbnUge1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxyXFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOiAycmVtO1xcclxcbiAgICB9XFxyXFxuICAgIC5tZW51X19pdGVtIHtcXHJcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5tZW51X19kZXNjcmlwdGlvbiB7XFxyXFxuICAgICAgICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OXB4KXtcXHJcXG4gICAgLm1lbnUge1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxyXFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOiAycmVtO1xcclxcbiAgICB9XFxyXFxuICAgIC5tZW51X19pdGVtIHtcXHJcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubWVudV9fZGVzY3JpcHRpb24ge1xcclxcbiAgICAgICAgcGFkZGluZzogMXJlbTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpe1xcclxcbiAgICAubWVudSB7XFxyXFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxyXFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOiAwO1xcclxcbiAgICAgICAgcGFkZGluZy10b3A6IDJyZW07XFxyXFxuICAgIH1cXHJcXG4gICAgLm1lbnVfX2l0ZW0ge1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5tZW51X19kZXNjcmlwdGlvbiB7XFxyXFxuICAgICAgICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi8qKioqKioqKioqXFxyXFxuQ09OVEFDVFxcclxcbioqKioqKioqKiovXFxyXFxuXFxyXFxuLmNvbnRhY3Qge1xcclxcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxNTBweCAtIDRyZW0pO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0X19hZGRyZXNzLFxcclxcbi5jb250YWN0X19ob3VycyxcXHJcXG4uY29udGFjdF9fcGhvbmUge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAycmVtO1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3RfX2RldGFpbHMgcCB7XFxyXFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpe1xcclxcbiAgICAuY29udGFjdCB7XFxyXFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXHJcXG4gICAgICAgIGhlaWdodDogYXV0bztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuY29udGFjdF9fZGV0YWlscyBwIHtcXHJcXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmNvbnRhY3RfX2FkZHJlc3MsXFxyXFxuICAgIC5jb250YWN0X19ob3VycyxcXHJcXG4gICAgLmNvbnRhY3RfX3Bob25lIHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDJyZW0gMDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4vKioqKioqKioqKlxcclxcbkZPUk1cXHJcXG4qKioqKioqKioqL1xcclxcbi5mb3JtIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6IDUwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybV9fbmFtZSxcXHJcXG4uZm9ybV9fZW1haWwsXFxyXFxuLmZvcm1fX21lc3NhZ2Uge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG4gICAgbWFyZ2luOiAxcmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuNSk7XFxyXFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgc25vdztcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIGNvbG9yOiBzbm93O1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybV9fbWVzc2FnZSB7XFxyXFxuICAgIGhlaWdodDogMjAwcHg7XFxyXFxufVxcclxcblxcclxcbi5idG4ge1xcclxcbiAgICBwYWRkaW5nOiAxcmVtIDJyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXHJcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxyXFxuICAgIGNvbG9yOiBzbm93O1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IC4xMjVyZW07XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHNub3c7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpe1xcclxcbiAgICAuZm9ybSB7XFxyXFxuICAgICAgICB3aWR0aDogMzIwcHg7XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOiAycmVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5mb3JtX19uYW1lLFxcclxcbiAgICAuZm9ybV9fZW1haWwsXFxyXFxuICAgIC5mb3JtX19tZXNzYWdlIHtcXHJcXG4gICAgICAgIG1hcmdpbjogMXJlbSAwO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi8qKioqKioqKioqXFxyXFxuRk9PVEVSXFxyXFxuKioqKioqKioqKi9cXHJcXG4uZm9vdGVyIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgaGVpZ2h0OiA0cmVtO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyID09IG51bGwgPyBudWxsIDogdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZSwgbm8tcGFyYW0tcmVhc3NpZ25cblxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoc3R5bGUsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGUpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoXCJtZWRpYVwiKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpIHtcbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZnVuY3Rpb24gY29udGFjdCgpIHtcclxuICAgIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcclxuICAgIGNvbnRhY3QuY2xhc3NMaXN0LmFkZChcImNvbnRhY3RcIik7XHJcbiAgICBjb25zdCBkZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFydGljbGVcIik7XHJcbiAgICBkZXRhaWxzLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0X19kZXRhaWxzXCIpO1xyXG4gICAgY29uc3QgYWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBhZGRyZXNzLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0X19hZGRyZXNzXCIpO1xyXG4gICAgY29uc3QgcDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIHAxLnRleHRDb250ZW50ID0gXCJUaGUgVGFjbyBTcG90XCI7XHJcbiAgICBjb25zdCBwMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgcDIudGV4dENvbnRlbnQgPSBcIjEzNyBXIDM5dGggU3RyZWV0XCI7XHJcbiAgICBjb25zdCBwMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgcDMudGV4dENvbnRlbnQgPSBcIlRhY292aWxsZSwgVE8gNjQ1NTFcIjtcclxuICAgIGFkZHJlc3MuYXBwZW5kKHAxLCBwMiwgcDMpO1xyXG4gICAgY29uc3QgaG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgaG91cnMuY2xhc3NMaXN0LmFkZChcImNvbnRhY3RfX2hvdXJzXCIpO1xyXG4gICAgY29uc3QgcDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIHA0LnRleHRDb250ZW50ID0gXCJNb24gLSBUaHVyczogMTE6MDBBTSAtIDEwOjAwUE1cIjtcclxuICAgIGNvbnN0IHA1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBwNS50ZXh0Q29udGVudCA9IFwiRnJpIC0gU2F0OiAxMTowMEFNIC0gMTI6MDBBTVwiO1xyXG4gICAgY29uc3QgcDYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIHA2LnRleHRDb250ZW50ID0gXCJTdW4gLSBDTE9TRURcIjtcclxuICAgIGhvdXJzLmFwcGVuZChwNCwgcDUsIHA2KTtcclxuICAgIGNvbnN0IHBob25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHBob25lLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0X19waG9uZVwiKTtcclxuICAgIGNvbnN0IHA3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcblx0cDcudGV4dENvbnRlbnQgPSBcIjI4MS0zMzAtODAwNFwiO1xyXG4gICAgcGhvbmUuYXBwZW5kQ2hpbGQocDcpO1xyXG4gICAgY29uc3QgY29udGFjdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYXJ0aWNsZVwiKTtcclxuICAgIGNvbnRhY3RGb3JtLmFwcGVuZChjcmVhdGVGb3JtKCkpO1xyXG4gICAgY29udGFjdEZvcm0uY2xhc3NMaXN0LmFkZChcImNvbnRhY3RfX2Zvcm1cIik7XHJcbiAgICBkZXRhaWxzLmFwcGVuZChhZGRyZXNzLCBob3VycywgcGhvbmUpO1xyXG4gICAgY29udGFjdC5hcHBlbmQoY29udGFjdEZvcm0sIGRldGFpbHMpO1xyXG4gICAgcmV0dXJuIGNvbnRhY3Q7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUZvcm0oKSB7XHJcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XHJcbiAgICBmb3JtLmNsYXNzTGlzdC5hZGQoXCJmb3JtXCIpO1xyXG4gICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgIG5hbWUuY2xhc3NMaXN0LmFkZChcImZvcm1fX25hbWVcIik7XHJcbiAgICBuYW1lLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xyXG4gICAgbmFtZS5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIk5hbWVcIik7XHJcbiAgICBjb25zdCBlbWFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgIGVtYWlsLmNsYXNzTGlzdC5hZGQoXCJmb3JtX19lbWFpbFwiKTtcclxuICAgIGVtYWlsLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJlbWFpbFwiKTtcclxuICAgIGVtYWlsLnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiRW1haWxcIik7XHJcbiAgICBjb25zdCBtZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xyXG4gICAgbWVzc2FnZS5jbGFzc0xpc3QuYWRkKFwiZm9ybV9fbWVzc2FnZVwiKTtcclxuICAgIG1lc3NhZ2Uuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImVtYWlsXCIpO1xyXG4gICAgbWVzc2FnZS5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIk1lc3NhZ2VcIik7XHJcbiAgICBjb25zdCBzZW5kQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIHNlbmRCdG4uY2xhc3NMaXN0LmFkZChcImJ0blwiKTtcclxuICAgIHNlbmRCdG4udGV4dENvbnRlbnQgPSBcIlNFTkRcIjtcclxuICAgIGZvcm0uYXBwZW5kKG5hbWUsIGVtYWlsLCBtZXNzYWdlLCBzZW5kQnRuKTtcclxuICAgIHJldHVybiBmb3JtO1xyXG59XHJcblxyXG5leHBvcnQgeyBjb250YWN0IH07XHJcblxyXG4iLCJpbXBvcnQgYXZvY2FkbyBmcm9tIFwiLi9pbWFnZXMvYXZvY2Fkby5qcGdcIjtcclxuaW1wb3J0IGNhcm5lYXNhZGEgZnJvbSBcIi4vaW1hZ2VzL2Nhcm5lYXNhZGEuanBnXCI7XHJcbmltcG9ydCBjaGlwcyBmcm9tIFwiLi9pbWFnZXMvY2hpcHMuanBnXCI7XHJcbmltcG9ydCBmaXNoIGZyb20gXCIuL2ltYWdlcy9maXNoLmpwZ1wiO1xyXG5pbXBvcnQgdmVnZXRhcmlhbiBmcm9tIFwiLi9pbWFnZXMvdmVnZXRhcmlhbi5qcGdcIjtcclxuXHJcbmZ1bmN0aW9uIG1lbnUoKSB7XHJcbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XHJcbiAgICBtZW51LmNsYXNzTGlzdC5hZGQoXCJtZW51XCIpO1xyXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwibWVudV9fdGl0bGVcIik7XHJcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xyXG4gICAgbWVudS5hcHBlbmRDaGlsZCh0aXRsZSk7XHJcbiAgICBjb25zdCBhdm9jYWRvSW1nID0gaW1nKGF2b2NhZG8pO1xyXG4gICAgY29uc3QgY2FybmVhc2FkYUltZyA9IGltZyhjYXJuZWFzYWRhKTtcclxuICAgIGNvbnN0IGNoaXBzSW1nID0gaW1nKGNoaXBzKTtcclxuICAgIGNvbnN0IGZpc2hJbWcgPSBpbWcoZmlzaCk7XHJcbiAgICBjb25zdCB2ZWdldGFyaWFuSW1nID0gaW1nKHZlZ2V0YXJpYW4pO1xyXG4gICAgY29uc3QgbWVudUl0ZW1JbWdzID0gW2F2b2NhZG9JbWcsIGNhcm5lYXNhZGFJbWcsIGNoaXBzSW1nLCBmaXNoSW1nLCB2ZWdldGFyaWFuSW1nXTtcclxuICAgIGNvbnN0IG1lbnVJdGVtRGVzY3JpcHRpb25zID0gW1wiQXZvY2FkbyBEaXAgJDYuOTlcIiwgXCJDYXJuZSBBc2FkYSBUYWNvcyAkMTAuOTlcIiwgXCIzIENoaXAgU2FtcGxlciBQbGF0dGVyICAkNy45OVwiLCBcIkZyaWVkIEZpc2ggVGFjb3MgICQ5Ljk5XCIsIFwiVmVnZXRhcmlhbiBUYWNvcyAkOC45OVwiXTtcclxuICAgIG1lbnVJdGVtSW1ncy5mb3JFYWNoKGZ1bmN0aW9uIChtZW51SXRlbSwgaW5kZXgpIHtcclxuXHRcdFx0bWVudS5hcHBlbmRDaGlsZChcclxuXHRcdFx0XHRjcmVhdGVNZW51SXRlbShcclxuXHRcdFx0XHRcdG1lbnVJdGVtRGVzY3JpcHRpb25zW2luZGV4XSxcclxuXHRcdFx0XHRcdFwibWVudV9faXRlbVwiLFxyXG5cdFx0XHRcdFx0XCJtZW51X19kZXNjcmlwdGlvblwiLFxyXG5cdFx0XHRcdFx0XCJtZW51X19pbWdcIixcclxuXHRcdFx0XHRcdG1lbnVJdGVtXHJcblx0XHRcdFx0KVxyXG5cdFx0XHQpO1xyXG5cdFx0fSk7XHJcbiAgICByZXR1cm4gbWVudTtcclxufVxyXG5cclxuZnVuY3Rpb24gaW1nKHNyYykge1xyXG4gICAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICBpbWcuc3JjID0gc3JjO1xyXG4gICAgcmV0dXJuIGltZztcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlTWVudUl0ZW0oZGVzY3JpcHRpb24sIGNsYXNzTmFtZTEsIGNsYXNzTmFtZTIsIGNsYXNzTmFtZTMsIGltZykge1xyXG4gICAgY29uc3QgbWVudUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcclxuICAgIG1lbnVJdGVtLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lMSk7XHJcbiAgICBjb25zdCBtZW51RGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYXJ0aWNsZVwiKTtcclxuICAgIG1lbnVEZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZTIpO1xyXG4gICAgbWVudURlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gZGVzY3JpcHRpb247XHJcbiAgICBjb25zdCBtZW51SW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFydGljbGVcIik7XHJcbiAgICBtZW51SW1nLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lMyk7XHJcbiAgICBtZW51SW1nLmFwcGVuZENoaWxkKGltZyk7XHJcbiAgICBtZW51SXRlbS5hcHBlbmQobWVudUltZywgbWVudURlc2NyaXB0aW9uKTtcclxuICAgIHJldHVybiBtZW51SXRlbTtcclxufVxyXG5cclxuZXhwb3J0IHttZW51fTsiLCJcclxuZnVuY3Rpb24gcmVuZGVySG9tZSgpIHtcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKHJlbmRlck5hdigpKTtcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKHJlbmRlckNvbnRlbnQoKSk7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChyZW5kZXJGb290ZXIoKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlck5hdigpIHtcclxuICAgIGxldCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xyXG4gICAgbmF2LmNsYXNzTGlzdC5hZGQoXCJuYXZcIik7XHJcbiAgICBsZXQgbmF2SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIG5hdkhlYWRlci5jbGFzc0xpc3QuYWRkKFwibmF2X19oZWFkZXJcIik7XHJcbiAgICBsZXQgbmF2SGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICAgIG5hdkhlYWRpbmcuY2xhc3NMaXN0LmFkZChcIm5hdl9fbG9nb1wiKTtcclxuICAgIG5hdkhlYWRpbmcudGV4dENvbnRlbnQgPSBcIlRoZSBUYWNvIFNwb3RcIjtcclxuICAgIG5hdkhlYWRlci5hcHBlbmRDaGlsZChuYXZIZWFkaW5nKTtcclxuICAgIGxldCBuYXZMaW5rcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcclxuICAgIG5hdkxpbmtzLmNsYXNzTGlzdC5hZGQoXCJuYXZfX2xpbmtzXCIpO1xyXG4gICAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgbGV0IGhvbWVMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICBob21lTGluay5jbGFzc0xpc3QuYWRkKFwibmF2X19saW5rXCIpO1xyXG4gICAgaG9tZUxpbmsuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICAgIGhvbWVMaW5rLmlkID0gXCJob21lXCI7XHJcbiAgICBob21lTGluay5ocmVmID0gXCIjXCI7XHJcbiAgICBob21lTGluay50ZXh0Q29udGVudCA9IFwiSG9tZVwiO1xyXG4gICAgbGkuYXBwZW5kQ2hpbGQoaG9tZUxpbmspO1xyXG4gICAgbGV0IGxpMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgIGxldCBtZW51TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gICAgbWVudUxpbmsuY2xhc3NMaXN0LmFkZChcIm5hdl9fbGlua1wiKTtcclxuICAgIG1lbnVMaW5rLmlkID0gXCJtZW51XCI7XHJcbiAgICBtZW51TGluay5ocmVmID0gXCIjXCI7XHJcbiAgICBtZW51TGluay50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xyXG4gICAgbGkxLmFwcGVuZENoaWxkKG1lbnVMaW5rKTtcclxuICAgIGxldCBsaTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICBsZXQgY29udGFjdExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICAgIGNvbnRhY3RMaW5rLmNsYXNzTGlzdC5hZGQoXCJuYXZfX2xpbmtcIik7XHJcbiAgICBjb250YWN0TGluay5pZCA9IFwiY29udGFjdFwiO1xyXG4gICAgY29udGFjdExpbmsuaHJlZiA9IFwiI1wiO1xyXG4gICAgY29udGFjdExpbmsudGV4dENvbnRlbnQgPSBcIkNvbnRhY3RcIjtcclxuICAgIGxpMi5hcHBlbmRDaGlsZChjb250YWN0TGluayk7XHJcbiAgICBuYXZMaW5rcy5hcHBlbmRDaGlsZChsaSk7XHJcbiAgICBuYXZMaW5rcy5hcHBlbmRDaGlsZChsaTEpO1xyXG4gICAgbmF2TGlua3MuYXBwZW5kQ2hpbGQobGkyKTtcclxuICAgIG5hdi5hcHBlbmQobmF2SGVhZGVyLCBuYXZMaW5rcyk7XHJcbiAgICByZXR1cm4gbmF2O1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW5kZXJDb250ZW50KCkge1xyXG4gICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb250YWluZXIuaWQgPSBcImNvbnRlbnRcIjtcclxuICAgIGxldCBoZXJvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XHJcbiAgICBoZXJvLmNsYXNzTGlzdC5hZGQoXCJoZXJvXCIpO1xyXG4gICAgbGV0IGhlcm9IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcclxuICAgIGhlcm9IZWFkZXIuY2xhc3NMaXN0LmFkZChcImhlcm9fX2hlYWRlclwiKTtcclxuICAgIGxldCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICAgIGgyLmNsYXNzTGlzdC5hZGQoXCJoZXJvX19oZWFkaW5nXCIpO1xyXG4gICAgaDIudGV4dENvbnRlbnQgPSBcIkV2ZXJ5ZGF5IGlzIGZvciBUYWNvcywgbm90IGp1c3QgVHVlc2RheSFcIjtcclxuICAgIGhlcm9IZWFkZXIuYXBwZW5kQ2hpbGQoaDIpO1xyXG4gICAgbGV0IGhlcm9EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhcnRpY2xlXCIpO1xyXG4gICAgaGVyb0Rlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJoZXJvX19kZXNjcmlwdGlvblwiKTtcclxuICAgIGxldCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBwLmNsYXNzTGlzdC5hZGQoXCJoZXJvX190ZXh0XCIpO1xyXG4gICAgcC50ZXh0Q29udGVudCA9IGBTZXJ2aW5nIHVwIHRoZSBiZXN0IHRhY29zIG9uIHRoZSBFYXN0IENvYXN0IHNpbmNlIDIwMTcuICBcclxuICAgIENyZWF0aXZpdHkgYW5kIGF0dGVudGlvbiB0byBkZXRhaWwgaGVscCBjcmFmdCBvdXIgbW91dGgtd2F0ZXJpbmcgcmVjaXBlcy5cclxuICAgIERvbnQgaGVzaXRhdGUsIHN0b3AgYnkgYW5kIGxldCBvbmUgb2Ygb3VyIHRhY29zIFwiaGl0IHRoZSBzcG90IVwiYDtcclxuICAgIGhlcm9EZXNjcmlwdGlvbi5hcHBlbmRDaGlsZChwKTtcclxuICAgIGhlcm8uYXBwZW5kQ2hpbGQoaGVyb0hlYWRlcik7XHJcbiAgICBoZXJvLmFwcGVuZENoaWxkKGhlcm9EZXNjcmlwdGlvbik7XHJcbiAgICBjb250YWluZXIuYXBwZW5kKGhlcm8pO1xyXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVuZGVyRm9vdGVyKCkge1xyXG4gICAgbGV0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIik7XHJcbiAgICBmb290ZXIuY2xhc3NMaXN0LmFkZChcImZvb3RlclwiKTtcclxuICAgIGxldCBzbWFsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzbWFsbFwiKTtcclxuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCk7XHJcbiAgICBzbWFsbC5pbm5lckhUTUwgPSBgJmNvcHk7ICR7ZGF0ZX0gQ29kZWQgJiBDcmVhdGVkIEJ5IE5hdGFzaGEgSm9obnNvbmA7XHJcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoc21hbGwpO1xyXG4gICAgcmV0dXJuIGZvb3RlcjtcclxufVxyXG5cclxuZXhwb3J0IHtyZW5kZXJIb21lLCByZW5kZXJOYXYsIHJlbmRlckNvbnRlbnR9O1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XHJcblxyXG5pbXBvcnQge3JlbmRlckhvbWUsIHJlbmRlckNvbnRlbnR9IGZyb20gXCIuL3JlbmRlci5qc1wiO1xyXG5pbXBvcnQgeyBtZW51IH0gZnJvbSBcIi4vbWVudS5qc1wiO1xyXG5pbXBvcnQgeyBjb250YWN0IH0gZnJvbSBcIi4vY29udGFjdFwiO1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIHJlbmRlckhvbWUoKSk7XHJcbmNvbnN0IGhvbWVUYWIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhvbWVcIik7XHJcbmNvbnN0IG1lbnVUYWIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lbnVcIik7XHJcbmNvbnN0IGNvbnRhY3RUYWIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRhY3RcIik7XHJcblxyXG5ob21lVGFiLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzd2l0Y2hUYWIpO1xyXG5tZW51VGFiLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzd2l0Y2hUYWIpO1xyXG5jb250YWN0VGFiLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzd2l0Y2hUYWIpO1xyXG5cclxuZnVuY3Rpb24gc3dpdGNoVGFiKGUpIHtcclxuICAgIGNvbnN0IG9sZENvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XHJcbiAgICBjb25zdCB0YWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uYXZfX2xpbmtcIik7XHJcbiAgICBpZiAoZS50YXJnZXQuaWQgPT09IFwiaG9tZVwiKSB7XHJcbiAgICAgICAgb2xkQ29udGVudC5maXJzdENoaWxkLnJlbW92ZSgpO1xyXG4gICAgICAgIG9sZENvbnRlbnQuYXBwZW5kKHJlbmRlckNvbnRlbnQoKSk7XHJcbiAgICAgICAgYWRkQWN0aXZlKGUudGFyZ2V0LCB0YWJzKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGUudGFyZ2V0LmlkID09PSBcIm1lbnVcIikge1xyXG4gICAgICAgIG9sZENvbnRlbnQuZmlyc3RDaGlsZC5yZW1vdmUoKTtcclxuICAgICAgICBvbGRDb250ZW50LmFwcGVuZChtZW51KCkpO1xyXG4gICAgICAgIGFkZEFjdGl2ZShlLnRhcmdldCwgdGFicyk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChlLnRhcmdldC5pZCA9PT0gXCJjb250YWN0XCIpIHtcclxuICAgICAgICBvbGRDb250ZW50LmZpcnN0Q2hpbGQucmVtb3ZlKCk7XHJcbiAgICAgICAgb2xkQ29udGVudC5hcHBlbmQoY29udGFjdCgpKTtcclxuICAgICAgICBhZGRBY3RpdmUoZS50YXJnZXQsIHRhYnMpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRBY3RpdmUodGFyZ2V0LCB0YWJzKSB7XHJcbiAgICBjb25zdCB0YWJMaW5rcyA9IEFycmF5LmZyb20odGFicyk7XHJcbiAgICB0YWJMaW5rcy5mb3JFYWNoKGZ1bmN0aW9uIChsaW5rKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2cobGluay5pZCwgdGFyZ2V0LmlkKTtcclxuICAgICAgICBpZiAobGluay5pZCA9PSB0YXJnZXQuaWQpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgIGxpbmsuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsaW5rLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibm90IGFjdGl2ZVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=