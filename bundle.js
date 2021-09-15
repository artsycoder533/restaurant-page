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
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n    padding: 0;\r\n    margin: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    min-height: 100vh;\r\n    background: rgba(0,0,0,0.7) url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n    background-blend-mode: multiply;\r\n    color: white;\r\n    line-height: 1.25;\r\n}\r\n\r\nul {\r\n    list-style-type: none;\r\n}\r\n\r\na {\r\n    text-decoration: none;\r\n    color: white;\r\n    display: block;\r\n    letter-spacing: 0.125rem;\r\n}\r\n\r\na:hover{\r\n    color: red;\r\n}\r\n\r\n\r\n::placeholder {\r\n    color: snow;\r\n}\r\n\r\n/**********\r\nNAVBAR\r\n**********/\r\n\r\n.nav{\r\n    display: grid;\r\n    grid-template-rows: 1fr;\r\n    place-items: center;\r\n    height: 150px;\r\n    align-items: center;\r\n}\r\n\r\n.nav__header {\r\n    text-align: center;\r\n    padding: 1rem;\r\n    font-size: 2rem;\r\n}\r\n\r\n.nav__links {\r\n    display: grid;\r\n    grid-template-columns: 8rem 8rem 8rem;\r\n    justify-content: center;\r\n    gap: 2rem;\r\n    text-align: center;\r\n    height: 100%;\r\n    align-items: center;\r\n}\r\n\r\nli {\r\n    height: 100%;\r\n    align-items: center;\r\n    display: grid;\r\n}\r\n\r\n.active {\r\n    text-decoration: overline;\r\n    text-decoration-color: gold;\r\n}\r\n\r\n.nav__link {\r\n    display: block;\r\n    font-size: 1.25rem;\r\n    cursor: pointer;\r\n    letter-spacing: 0.1rem;\r\n    text-transform: uppercase;\r\n    \r\n}\r\n\r\n#content{\r\n    height: calc(100vh - 150px - 4rem); \r\n    max-width: 1400px;\r\n    width: 90vw;\r\n    margin: auto;\r\n}\r\n\r\n.img {\r\n    object-fit: cover;\r\n    width: 100%;\r\n}\r\n\r\n@media screen and (max-width: 768px){\r\n    #content {\r\n        max-width: 90vw;\r\n        height: auto;\r\n    }\r\n\r\n    .nav {\r\n        max-width: 90vw;\r\n        margin: auto;\r\n    }\r\n\r\n    .nav__links {\r\n        height: 100%;\r\n        width: 100%;\r\n        padding: 1rem;\r\n        display:inline-flex\r\n    }\r\n}\r\n\r\n/**********\r\nHERO\r\n**********/\r\n.hero {\r\n    height: calc(100vh - 150px - 4rem); \r\n    text-align: left;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n}\r\n\r\n.hero__header {\r\n    font-size: 2rem;\r\n    padding-bottom: 2rem;\r\n}\r\n\r\n.hero__description  {\r\n    font-size: 1.5rem;\r\n}\r\n\r\n/**********\r\nMENU\r\n**********/\r\n.menu {\r\n    /* height: calc(100vh - 150px - 4rem); */\r\n    height: 100%;\r\n    display: grid; \r\n    grid-template-columns: 1fr 1fr; \r\n    place-items: center;\r\n    gap: 2rem;\r\n    padding: 2rem 0;\r\n}\r\n\r\n.menu__title {\r\n    font-size: 4rem;\r\n    text-transform: uppercase;\r\n    letter-spacing: .125rem;\r\n}\r\n.menu__item {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n}\r\n\r\n.menu__description {\r\n    width: 100%;\r\n    display: grid;\r\n    place-items: center;\r\n    font-size: 1.3rem;\r\n}\r\n.menu__img {\r\n    width: 100%;\r\n}\r\n\r\n.menu__img img {\r\n    object-fit: cover;\r\n    width: 100%;\r\n    display: block;\r\n    width: 300px;\r\n    height: 200px;\r\n    border-radius: 0.5rem;\r\n}\r\n\r\n@media screen and (max-width: 768px){\r\n    .menu {\r\n        grid-template-columns: 1fr;\r\n        height: 100%;\r\n        margin-top: 2rem;\r\n    }\r\n    .menu__item {\r\n        grid-template-columns: 1fr;\r\n    }\r\n\r\n    .menu__description {\r\n        padding: 1rem;\r\n    }\r\n}\r\n\r\n@media screen and (min-width: 769px){\r\n    .menu {\r\n        grid-template-columns: 1fr;\r\n        height: 100%;\r\n        margin-top: 2rem;\r\n    }\r\n    .menu__item {\r\n        grid-template-columns: 1fr 1fr;\r\n    }\r\n\r\n    .menu__description {\r\n        padding: 1rem;\r\n    }\r\n}\r\n\r\n@media screen and (min-width: 1200px){\r\n    .menu {\r\n        grid-template-columns: 1fr 1fr;\r\n        height: 100%;\r\n        margin-top: 2rem;\r\n    }\r\n    .menu__item {\r\n        grid-template-columns: 1fr 1fr;\r\n    }\r\n\r\n    .menu__description {\r\n        padding: 1rem;\r\n    }\r\n}\r\n\r\n/**********\r\nCONTACT\r\n**********/\r\n\r\n.contact {\r\n    height: calc(100vh - 150px - 4rem);\r\n    display: grid;\r\n    place-items: center;\r\n    grid-template-columns: 1fr 1fr;\r\n    gap: 1rem;\r\n    width: 100%;\r\n}\r\n\r\n.contact__address,\r\n.contact__hours,\r\n.contact__phone {\r\n    width: 100%;\r\n    text-align: center;\r\n    padding: 2rem;\r\n    font-size: 1.5rem;\r\n}\r\n\r\n.contact__details p {\r\n    padding: 0.5rem;\r\n}\r\n\r\n@media screen and (max-width: 992px){\r\n    .contact {\r\n        grid-template-columns: 1fr;\r\n        height: auto;\r\n    }\r\n\r\n    .contact__details p {\r\n        text-align: left;\r\n    }\r\n\r\n    .contact__address,\r\n    .contact__hours,\r\n    .contact__phone {\r\n        padding: 2rem 0;\r\n    }\r\n}\r\n\r\n/**********\r\nFORM\r\n**********/\r\n.form {\r\n    display: grid;\r\n    place-items: center;\r\n    width: 500px;\r\n}\r\n\r\n.form__name,\r\n.form__email,\r\n.form__message {\r\n    width: 100%;\r\n    padding: 1rem;\r\n    margin: 1rem;\r\n    background: rgba(0,0,0,0.5);\r\n    backdrop-filter: blur(10px);\r\n    border: 1px solid snow;\r\n    border-radius: 0.5rem;\r\n    font-size: 1rem;\r\n    color: snow;\r\n}\r\n\r\n.form__message {\r\n    height: 200px;\r\n}\r\n\r\n.btn {\r\n    padding: 1rem 2rem;\r\n    border-radius: 0.5rem;\r\n    background: transparent;\r\n    color: snow;\r\n    border: 1px solid white;\r\n    letter-spacing: .125rem;\r\n    cursor: pointer;\r\n}\r\n\r\n.btn:hover {\r\n    background: snow;\r\n    color: black;\r\n}\r\n\r\n@media screen and (max-width: 768px){\r\n    .form {\r\n        width: 320px;\r\n        margin-top: 2rem;\r\n    }\r\n\r\n    .form__name,\r\n    .form__email,\r\n    .form__message {\r\n        margin: 1rem 0;\r\n    }\r\n}\r\n\r\n/**********\r\nFOOTER\r\n**********/\r\n.footer {\r\n    display: grid;\r\n    place-items: center;\r\n    height: 4rem;\r\n    text-align: center;\r\n    background: black;\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,UAAU;IACV,SAAS;IACT,sBAAsB;AAC1B;;AAEA;IACI,iBAAiB;IACjB,mEAAkD;IAClD,+BAA+B;IAC/B,YAAY;IACZ,iBAAiB;AACrB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,qBAAqB;IACrB,YAAY;IACZ,cAAc;IACd,wBAAwB;AAC5B;;AAEA;IACI,UAAU;AACd;;;AAGA;IACI,WAAW;AACf;;AAEA;;UAEU;;AAEV;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,qCAAqC;IACrC,uBAAuB;IACvB,SAAS;IACT,kBAAkB;IAClB,YAAY;IACZ,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,mBAAmB;IACnB,aAAa;AACjB;;AAEA;IACI,yBAAyB;IACzB,2BAA2B;AAC/B;;AAEA;IACI,cAAc;IACd,kBAAkB;IAClB,eAAe;IACf,sBAAsB;IACtB,yBAAyB;;AAE7B;;AAEA;IACI,kCAAkC;IAClC,iBAAiB;IACjB,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,iBAAiB;IACjB,WAAW;AACf;;AAEA;IACI;QACI,eAAe;QACf,YAAY;IAChB;;IAEA;QACI,eAAe;QACf,YAAY;IAChB;;IAEA;QACI,YAAY;QACZ,WAAW;QACX,aAAa;QACb;IACJ;AACJ;;AAEA;;UAEU;AACV;IACI,kCAAkC;IAClC,gBAAgB;IAChB,aAAa;IACb,sBAAsB;IACtB,uBAAuB;AAC3B;;AAEA;IACI,eAAe;IACf,oBAAoB;AACxB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;;UAEU;AACV;IACI,wCAAwC;IACxC,YAAY;IACZ,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,SAAS;IACT,eAAe;AACnB;;AAEA;IACI,eAAe;IACf,yBAAyB;IACzB,uBAAuB;AAC3B;AACA;IACI,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,WAAW;IACX,aAAa;IACb,mBAAmB;IACnB,iBAAiB;AACrB;AACA;IACI,WAAW;AACf;;AAEA;IACI,iBAAiB;IACjB,WAAW;IACX,cAAc;IACd,YAAY;IACZ,aAAa;IACb,qBAAqB;AACzB;;AAEA;IACI;QACI,0BAA0B;QAC1B,YAAY;QACZ,gBAAgB;IACpB;IACA;QACI,0BAA0B;IAC9B;;IAEA;QACI,aAAa;IACjB;AACJ;;AAEA;IACI;QACI,0BAA0B;QAC1B,YAAY;QACZ,gBAAgB;IACpB;IACA;QACI,8BAA8B;IAClC;;IAEA;QACI,aAAa;IACjB;AACJ;;AAEA;IACI;QACI,8BAA8B;QAC9B,YAAY;QACZ,gBAAgB;IACpB;IACA;QACI,8BAA8B;IAClC;;IAEA;QACI,aAAa;IACjB;AACJ;;AAEA;;UAEU;;AAEV;IACI,kCAAkC;IAClC,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,SAAS;IACT,WAAW;AACf;;AAEA;;;IAGI,WAAW;IACX,kBAAkB;IAClB,aAAa;IACb,iBAAiB;AACrB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI;QACI,0BAA0B;QAC1B,YAAY;IAChB;;IAEA;QACI,gBAAgB;IACpB;;IAEA;;;QAGI,eAAe;IACnB;AACJ;;AAEA;;UAEU;AACV;IACI,aAAa;IACb,mBAAmB;IACnB,YAAY;AAChB;;AAEA;;;IAGI,WAAW;IACX,aAAa;IACb,YAAY;IACZ,2BAA2B;IAC3B,2BAA2B;IAC3B,sBAAsB;IACtB,qBAAqB;IACrB,eAAe;IACf,WAAW;AACf;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,qBAAqB;IACrB,uBAAuB;IACvB,WAAW;IACX,uBAAuB;IACvB,uBAAuB;IACvB,eAAe;AACnB;;AAEA;IACI,gBAAgB;IAChB,YAAY;AAChB;;AAEA;IACI;QACI,YAAY;QACZ,gBAAgB;IACpB;;IAEA;;;QAGI,cAAc;IAClB;AACJ;;AAEA;;UAEU;AACV;IACI,aAAa;IACb,mBAAmB;IACnB,YAAY;IACZ,kBAAkB;IAClB,iBAAiB;AACrB","sourcesContent":["* {\r\n    padding: 0;\r\n    margin: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    min-height: 100vh;\r\n    background: rgba(0,0,0,0.7) url(./images/taco.png);\r\n    background-blend-mode: multiply;\r\n    color: white;\r\n    line-height: 1.25;\r\n}\r\n\r\nul {\r\n    list-style-type: none;\r\n}\r\n\r\na {\r\n    text-decoration: none;\r\n    color: white;\r\n    display: block;\r\n    letter-spacing: 0.125rem;\r\n}\r\n\r\na:hover{\r\n    color: red;\r\n}\r\n\r\n\r\n::placeholder {\r\n    color: snow;\r\n}\r\n\r\n/**********\r\nNAVBAR\r\n**********/\r\n\r\n.nav{\r\n    display: grid;\r\n    grid-template-rows: 1fr;\r\n    place-items: center;\r\n    height: 150px;\r\n    align-items: center;\r\n}\r\n\r\n.nav__header {\r\n    text-align: center;\r\n    padding: 1rem;\r\n    font-size: 2rem;\r\n}\r\n\r\n.nav__links {\r\n    display: grid;\r\n    grid-template-columns: 8rem 8rem 8rem;\r\n    justify-content: center;\r\n    gap: 2rem;\r\n    text-align: center;\r\n    height: 100%;\r\n    align-items: center;\r\n}\r\n\r\nli {\r\n    height: 100%;\r\n    align-items: center;\r\n    display: grid;\r\n}\r\n\r\n.active {\r\n    text-decoration: overline;\r\n    text-decoration-color: gold;\r\n}\r\n\r\n.nav__link {\r\n    display: block;\r\n    font-size: 1.25rem;\r\n    cursor: pointer;\r\n    letter-spacing: 0.1rem;\r\n    text-transform: uppercase;\r\n    \r\n}\r\n\r\n#content{\r\n    height: calc(100vh - 150px - 4rem); \r\n    max-width: 1400px;\r\n    width: 90vw;\r\n    margin: auto;\r\n}\r\n\r\n.img {\r\n    object-fit: cover;\r\n    width: 100%;\r\n}\r\n\r\n@media screen and (max-width: 768px){\r\n    #content {\r\n        max-width: 90vw;\r\n        height: auto;\r\n    }\r\n\r\n    .nav {\r\n        max-width: 90vw;\r\n        margin: auto;\r\n    }\r\n\r\n    .nav__links {\r\n        height: 100%;\r\n        width: 100%;\r\n        padding: 1rem;\r\n        display:inline-flex\r\n    }\r\n}\r\n\r\n/**********\r\nHERO\r\n**********/\r\n.hero {\r\n    height: calc(100vh - 150px - 4rem); \r\n    text-align: left;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n}\r\n\r\n.hero__header {\r\n    font-size: 2rem;\r\n    padding-bottom: 2rem;\r\n}\r\n\r\n.hero__description  {\r\n    font-size: 1.5rem;\r\n}\r\n\r\n/**********\r\nMENU\r\n**********/\r\n.menu {\r\n    /* height: calc(100vh - 150px - 4rem); */\r\n    height: 100%;\r\n    display: grid; \r\n    grid-template-columns: 1fr 1fr; \r\n    place-items: center;\r\n    gap: 2rem;\r\n    padding: 2rem 0;\r\n}\r\n\r\n.menu__title {\r\n    font-size: 4rem;\r\n    text-transform: uppercase;\r\n    letter-spacing: .125rem;\r\n}\r\n.menu__item {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n}\r\n\r\n.menu__description {\r\n    width: 100%;\r\n    display: grid;\r\n    place-items: center;\r\n    font-size: 1.3rem;\r\n}\r\n.menu__img {\r\n    width: 100%;\r\n}\r\n\r\n.menu__img img {\r\n    object-fit: cover;\r\n    width: 100%;\r\n    display: block;\r\n    width: 300px;\r\n    height: 200px;\r\n    border-radius: 0.5rem;\r\n}\r\n\r\n@media screen and (max-width: 768px){\r\n    .menu {\r\n        grid-template-columns: 1fr;\r\n        height: 100%;\r\n        margin-top: 2rem;\r\n    }\r\n    .menu__item {\r\n        grid-template-columns: 1fr;\r\n    }\r\n\r\n    .menu__description {\r\n        padding: 1rem;\r\n    }\r\n}\r\n\r\n@media screen and (min-width: 769px){\r\n    .menu {\r\n        grid-template-columns: 1fr;\r\n        height: 100%;\r\n        margin-top: 2rem;\r\n    }\r\n    .menu__item {\r\n        grid-template-columns: 1fr 1fr;\r\n    }\r\n\r\n    .menu__description {\r\n        padding: 1rem;\r\n    }\r\n}\r\n\r\n@media screen and (min-width: 1200px){\r\n    .menu {\r\n        grid-template-columns: 1fr 1fr;\r\n        height: 100%;\r\n        margin-top: 2rem;\r\n    }\r\n    .menu__item {\r\n        grid-template-columns: 1fr 1fr;\r\n    }\r\n\r\n    .menu__description {\r\n        padding: 1rem;\r\n    }\r\n}\r\n\r\n/**********\r\nCONTACT\r\n**********/\r\n\r\n.contact {\r\n    height: calc(100vh - 150px - 4rem);\r\n    display: grid;\r\n    place-items: center;\r\n    grid-template-columns: 1fr 1fr;\r\n    gap: 1rem;\r\n    width: 100%;\r\n}\r\n\r\n.contact__address,\r\n.contact__hours,\r\n.contact__phone {\r\n    width: 100%;\r\n    text-align: center;\r\n    padding: 2rem;\r\n    font-size: 1.5rem;\r\n}\r\n\r\n.contact__details p {\r\n    padding: 0.5rem;\r\n}\r\n\r\n@media screen and (max-width: 992px){\r\n    .contact {\r\n        grid-template-columns: 1fr;\r\n        height: auto;\r\n    }\r\n\r\n    .contact__details p {\r\n        text-align: left;\r\n    }\r\n\r\n    .contact__address,\r\n    .contact__hours,\r\n    .contact__phone {\r\n        padding: 2rem 0;\r\n    }\r\n}\r\n\r\n/**********\r\nFORM\r\n**********/\r\n.form {\r\n    display: grid;\r\n    place-items: center;\r\n    width: 500px;\r\n}\r\n\r\n.form__name,\r\n.form__email,\r\n.form__message {\r\n    width: 100%;\r\n    padding: 1rem;\r\n    margin: 1rem;\r\n    background: rgba(0,0,0,0.5);\r\n    backdrop-filter: blur(10px);\r\n    border: 1px solid snow;\r\n    border-radius: 0.5rem;\r\n    font-size: 1rem;\r\n    color: snow;\r\n}\r\n\r\n.form__message {\r\n    height: 200px;\r\n}\r\n\r\n.btn {\r\n    padding: 1rem 2rem;\r\n    border-radius: 0.5rem;\r\n    background: transparent;\r\n    color: snow;\r\n    border: 1px solid white;\r\n    letter-spacing: .125rem;\r\n    cursor: pointer;\r\n}\r\n\r\n.btn:hover {\r\n    background: snow;\r\n    color: black;\r\n}\r\n\r\n@media screen and (max-width: 768px){\r\n    .form {\r\n        width: 320px;\r\n        margin-top: 2rem;\r\n    }\r\n\r\n    .form__name,\r\n    .form__email,\r\n    .form__message {\r\n        margin: 1rem 0;\r\n    }\r\n}\r\n\r\n/**********\r\nFOOTER\r\n**********/\r\n.footer {\r\n    display: grid;\r\n    place-items: center;\r\n    height: 4rem;\r\n    text-align: center;\r\n    background: black;\r\n}"],"sourceRoot":""}]);
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
    const menuItemDescriptions = ["Avocado Dip 6.99", "Carne Asada Tacos $10.99", "3 Chip Sampler Platter  $7.99", "Fried Fish Tacos  $9.99", "Vegetarian Tacos $8.99"];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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MkJBQTJCLDBCQUEwQixLQUFLLE9BQU8sZ0ZBQWdGLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxNQUFNLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGNBQWMsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsS0FBSyxLQUFLLE1BQU0sTUFBTSxLQUFLLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLEtBQUssS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssS0FBSyxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLE1BQU0sS0FBSyxLQUFLLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sTUFBTSxLQUFLLEtBQUssWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxNQUFNLE1BQU0sTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sT0FBTyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLE9BQU8sVUFBVSxNQUFNLE1BQU0sTUFBTSxLQUFLLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxPQUFPLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLEtBQUssVUFBVSxZQUFZLE9BQU8sT0FBTyxVQUFVLE1BQU0sTUFBTSxNQUFNLEtBQUssS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsNkJBQTZCLG1CQUFtQixrQkFBa0IsK0JBQStCLEtBQUssY0FBYywwQkFBMEIsMkRBQTJELHdDQUF3QyxxQkFBcUIsMEJBQTBCLEtBQUssWUFBWSw4QkFBOEIsS0FBSyxXQUFXLDhCQUE4QixxQkFBcUIsdUJBQXVCLGlDQUFpQyxLQUFLLGdCQUFnQixtQkFBbUIsS0FBSywyQkFBMkIsb0JBQW9CLEtBQUsseURBQXlELHNCQUFzQixnQ0FBZ0MsNEJBQTRCLHNCQUFzQiw0QkFBNEIsS0FBSyxzQkFBc0IsMkJBQTJCLHNCQUFzQix3QkFBd0IsS0FBSyxxQkFBcUIsc0JBQXNCLDhDQUE4QyxnQ0FBZ0Msa0JBQWtCLDJCQUEyQixxQkFBcUIsNEJBQTRCLEtBQUssWUFBWSxxQkFBcUIsNEJBQTRCLHNCQUFzQixLQUFLLGlCQUFpQixrQ0FBa0Msb0NBQW9DLEtBQUssb0JBQW9CLHVCQUF1QiwyQkFBMkIsd0JBQXdCLCtCQUErQixrQ0FBa0MsYUFBYSxpQkFBaUIsNENBQTRDLDBCQUEwQixvQkFBb0IscUJBQXFCLEtBQUssY0FBYywwQkFBMEIsb0JBQW9CLEtBQUssNkNBQTZDLGtCQUFrQiw0QkFBNEIseUJBQXlCLFNBQVMsa0JBQWtCLDRCQUE0Qix5QkFBeUIsU0FBUyx5QkFBeUIseUJBQXlCLHdCQUF3QiwwQkFBMEIsd0NBQXdDLEtBQUsscURBQXFELDRDQUE0Qyx5QkFBeUIsc0JBQXNCLCtCQUErQixnQ0FBZ0MsS0FBSyx1QkFBdUIsd0JBQXdCLDZCQUE2QixLQUFLLDZCQUE2QiwwQkFBMEIsS0FBSyxxREFBcUQsK0NBQStDLHVCQUF1Qix1QkFBdUIsd0NBQXdDLDRCQUE0QixrQkFBa0Isd0JBQXdCLEtBQUssc0JBQXNCLHdCQUF3QixrQ0FBa0MsZ0NBQWdDLEtBQUssaUJBQWlCLHNCQUFzQix1Q0FBdUMsS0FBSyw0QkFBNEIsb0JBQW9CLHNCQUFzQiw0QkFBNEIsMEJBQTBCLEtBQUssZ0JBQWdCLG9CQUFvQixLQUFLLHdCQUF3QiwwQkFBMEIsb0JBQW9CLHVCQUF1QixxQkFBcUIsc0JBQXNCLDhCQUE4QixLQUFLLDZDQUE2QyxlQUFlLHVDQUF1Qyx5QkFBeUIsNkJBQTZCLFNBQVMscUJBQXFCLHVDQUF1QyxTQUFTLGdDQUFnQywwQkFBMEIsU0FBUyxLQUFLLDZDQUE2QyxlQUFlLHVDQUF1Qyx5QkFBeUIsNkJBQTZCLFNBQVMscUJBQXFCLDJDQUEyQyxTQUFTLGdDQUFnQywwQkFBMEIsU0FBUyxLQUFLLDhDQUE4QyxlQUFlLDJDQUEyQyx5QkFBeUIsNkJBQTZCLFNBQVMscUJBQXFCLDJDQUEyQyxTQUFTLGdDQUFnQywwQkFBMEIsU0FBUyxLQUFLLCtEQUErRCwyQ0FBMkMsc0JBQXNCLDRCQUE0Qix1Q0FBdUMsa0JBQWtCLG9CQUFvQixLQUFLLG1FQUFtRSxvQkFBb0IsMkJBQTJCLHNCQUFzQiwwQkFBMEIsS0FBSyw2QkFBNkIsd0JBQXdCLEtBQUssNkNBQTZDLGtCQUFrQix1Q0FBdUMseUJBQXlCLFNBQVMsaUNBQWlDLDZCQUE2QixTQUFTLCtFQUErRSw0QkFBNEIsU0FBUyxLQUFLLHFEQUFxRCxzQkFBc0IsNEJBQTRCLHFCQUFxQixLQUFLLHlEQUF5RCxvQkFBb0Isc0JBQXNCLHFCQUFxQixvQ0FBb0Msb0NBQW9DLCtCQUErQiw4QkFBOEIsd0JBQXdCLG9CQUFvQixLQUFLLHdCQUF3QixzQkFBc0IsS0FBSyxjQUFjLDJCQUEyQiw4QkFBOEIsZ0NBQWdDLG9CQUFvQixnQ0FBZ0MsZ0NBQWdDLHdCQUF3QixLQUFLLG9CQUFvQix5QkFBeUIscUJBQXFCLEtBQUssNkNBQTZDLGVBQWUseUJBQXlCLDZCQUE2QixTQUFTLHFFQUFxRSwyQkFBMkIsU0FBUyxLQUFLLHlEQUF5RCxzQkFBc0IsNEJBQTRCLHFCQUFxQiwyQkFBMkIsMEJBQTBCLEtBQUssbUJBQW1CO0FBQ3ZzYztBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ1YxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNENBQTRDLHFCQUFxQjtBQUNqRTs7QUFFQTtBQUNBLEtBQUs7QUFDTCxLQUFLO0FBQ0w7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIscUJBQXFCO0FBQzFDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUNqRWE7O0FBRWIsa0NBQWtDOztBQUVsQyw4QkFBOEI7O0FBRTlCLGtEQUFrRCxnQkFBZ0IsZ0VBQWdFLHdEQUF3RCw2REFBNkQsc0RBQXNEOztBQUU3Uyx1Q0FBdUMsdURBQXVELHVDQUF1QyxTQUFTLE9BQU8sb0JBQW9COztBQUV6Syx5Q0FBeUMsMEdBQTBHLHdCQUF3QixlQUFlLGVBQWUsZ0JBQWdCLFlBQVksTUFBTSx3QkFBd0IsK0JBQStCLGFBQWEscUJBQXFCLHVDQUF1QyxjQUFjLFdBQVcsWUFBWSxVQUFVLE1BQU0sbURBQW1ELFVBQVUsc0JBQXNCOztBQUVuZixnQ0FBZ0M7O0FBRWhDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDbkNhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7OztBQUdKLG9EQUFvRDs7QUFFcEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9CQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFtRztBQUNuRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSTZDO0FBQ3JFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSw2RkFBYyxHQUFHLDZGQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViOztBQUVBO0FBQ0E7O0FBRUEsa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEscUJBQXFCLDZCQUE2QjtBQUNsRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNoR2E7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDdENhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDVmE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJOztBQUVqRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1hhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQy9DYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ21CO0FBQ25COzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNEMkM7QUFDTTtBQUNWO0FBQ0Y7QUFDWTtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGdEQUFPO0FBQ2xDLDhCQUE4QixtREFBVTtBQUN4Qyx5QkFBeUIsOENBQUs7QUFDOUIsd0JBQXdCLDZDQUFJO0FBQzVCLDhCQUE4QixtREFBVTtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsRUFBRSxNQUFNO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQzhDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbEY5QztVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7Ozs7Ozs7Ozs7O0FDckJxQjtBQUNyQjtBQUNzRDtBQUNyQjtBQUNHO0FBQ3BDO0FBQ0EsNENBQTRDLHNEQUFVO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLHlEQUFhO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLDhDQUFJO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLGlEQUFPO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3JlbmRlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vaW1hZ2VzL3RhY28ucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuNykgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXHJcXG4gICAgYmFja2dyb3VuZC1ibGVuZC1tb2RlOiBtdWx0aXBseTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBsaW5lLWhlaWdodDogMS4yNTtcXHJcXG59XFxyXFxuXFxyXFxudWwge1xcclxcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmEge1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjEyNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuYTpob3ZlcntcXHJcXG4gICAgY29sb3I6IHJlZDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuOjpwbGFjZWhvbGRlciB7XFxyXFxuICAgIGNvbG9yOiBzbm93O1xcclxcbn1cXHJcXG5cXHJcXG4vKioqKioqKioqKlxcclxcbk5BVkJBUlxcclxcbioqKioqKioqKiovXFxyXFxuXFxyXFxuLm5hdntcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxyXFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGhlaWdodDogMTUwcHg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5uYXZfX2hlYWRlciB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG4gICAgZm9udC1zaXplOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2X19saW5rcyB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogOHJlbSA4cmVtIDhyZW07XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBnYXA6IDJyZW07XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5saSB7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG59XFxyXFxuXFxyXFxuLmFjdGl2ZSB7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogb3ZlcmxpbmU7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogZ29sZDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdl9fbGluayB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMXJlbTtcXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbiNjb250ZW50e1xcclxcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxNTBweCAtIDRyZW0pOyBcXHJcXG4gICAgbWF4LXdpZHRoOiAxNDAwcHg7XFxyXFxuICAgIHdpZHRoOiA5MHZ3O1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5pbWcge1xcclxcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KXtcXHJcXG4gICAgI2NvbnRlbnQge1xcclxcbiAgICAgICAgbWF4LXdpZHRoOiA5MHZ3O1xcclxcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5uYXYge1xcclxcbiAgICAgICAgbWF4LXdpZHRoOiA5MHZ3O1xcclxcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5uYXZfX2xpbmtzIHtcXHJcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgcGFkZGluZzogMXJlbTtcXHJcXG4gICAgICAgIGRpc3BsYXk6aW5saW5lLWZsZXhcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4vKioqKioqKioqKlxcclxcbkhFUk9cXHJcXG4qKioqKioqKioqL1xcclxcbi5oZXJvIHtcXHJcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTUwcHggLSA0cmVtKTsgXFxyXFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVyb19faGVhZGVyIHtcXHJcXG4gICAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlcm9fX2Rlc2NyaXB0aW9uICB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKioqKioqKioqKlxcclxcbk1FTlVcXHJcXG4qKioqKioqKioqL1xcclxcbi5tZW51IHtcXHJcXG4gICAgLyogaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTUwcHggLSA0cmVtKTsgKi9cXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBncmlkOyBcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyOyBcXHJcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAycmVtO1xcclxcbiAgICBwYWRkaW5nOiAycmVtIDA7XFxyXFxufVxcclxcblxcclxcbi5tZW51X190aXRsZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogNHJlbTtcXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IC4xMjVyZW07XFxyXFxufVxcclxcbi5tZW51X19pdGVtIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudV9fZGVzY3JpcHRpb24ge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxufVxcclxcbi5tZW51X19pbWcge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVfX2ltZyBpbWcge1xcclxcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICB3aWR0aDogMzAwcHg7XFxyXFxuICAgIGhlaWdodDogMjAwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpe1xcclxcbiAgICAubWVudSB7XFxyXFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXHJcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IDJyZW07XFxyXFxuICAgIH1cXHJcXG4gICAgLm1lbnVfX2l0ZW0ge1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLm1lbnVfX2Rlc2NyaXB0aW9uIHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY5cHgpe1xcclxcbiAgICAubWVudSB7XFxyXFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXHJcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IDJyZW07XFxyXFxuICAgIH1cXHJcXG4gICAgLm1lbnVfX2l0ZW0ge1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5tZW51X19kZXNjcmlwdGlvbiB7XFxyXFxuICAgICAgICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCl7XFxyXFxuICAgIC5tZW51IHtcXHJcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXHJcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IDJyZW07XFxyXFxuICAgIH1cXHJcXG4gICAgLm1lbnVfX2l0ZW0ge1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5tZW51X19kZXNjcmlwdGlvbiB7XFxyXFxuICAgICAgICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi8qKioqKioqKioqXFxyXFxuQ09OVEFDVFxcclxcbioqKioqKioqKiovXFxyXFxuXFxyXFxuLmNvbnRhY3Qge1xcclxcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxNTBweCAtIDRyZW0pO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0X19hZGRyZXNzLFxcclxcbi5jb250YWN0X19ob3VycyxcXHJcXG4uY29udGFjdF9fcGhvbmUge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAycmVtO1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3RfX2RldGFpbHMgcCB7XFxyXFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpe1xcclxcbiAgICAuY29udGFjdCB7XFxyXFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXHJcXG4gICAgICAgIGhlaWdodDogYXV0bztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuY29udGFjdF9fZGV0YWlscyBwIHtcXHJcXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmNvbnRhY3RfX2FkZHJlc3MsXFxyXFxuICAgIC5jb250YWN0X19ob3VycyxcXHJcXG4gICAgLmNvbnRhY3RfX3Bob25lIHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDJyZW0gMDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4vKioqKioqKioqKlxcclxcbkZPUk1cXHJcXG4qKioqKioqKioqL1xcclxcbi5mb3JtIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6IDUwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybV9fbmFtZSxcXHJcXG4uZm9ybV9fZW1haWwsXFxyXFxuLmZvcm1fX21lc3NhZ2Uge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG4gICAgbWFyZ2luOiAxcmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuNSk7XFxyXFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgc25vdztcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIGNvbG9yOiBzbm93O1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybV9fbWVzc2FnZSB7XFxyXFxuICAgIGhlaWdodDogMjAwcHg7XFxyXFxufVxcclxcblxcclxcbi5idG4ge1xcclxcbiAgICBwYWRkaW5nOiAxcmVtIDJyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXHJcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxyXFxuICAgIGNvbG9yOiBzbm93O1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IC4xMjVyZW07XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHNub3c7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpe1xcclxcbiAgICAuZm9ybSB7XFxyXFxuICAgICAgICB3aWR0aDogMzIwcHg7XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOiAycmVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5mb3JtX19uYW1lLFxcclxcbiAgICAuZm9ybV9fZW1haWwsXFxyXFxuICAgIC5mb3JtX19tZXNzYWdlIHtcXHJcXG4gICAgICAgIG1hcmdpbjogMXJlbSAwO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi8qKioqKioqKioqXFxyXFxuRk9PVEVSXFxyXFxuKioqKioqKioqKi9cXHJcXG4uZm9vdGVyIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgaGVpZ2h0OiA0cmVtO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksVUFBVTtJQUNWLFNBQVM7SUFDVCxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsbUVBQWtEO0lBQ2xELCtCQUErQjtJQUMvQixZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixjQUFjO0lBQ2Qsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOzs7QUFHQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTs7VUFFVTs7QUFFVjtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IscUNBQXFDO0lBQ3JDLHVCQUF1QjtJQUN2QixTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGFBQWE7QUFDakI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Ysc0JBQXNC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ZzogMDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC43KSB1cmwoLi9pbWFnZXMvdGFjby5wbmcpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IG11bHRpcGx5O1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjI1O1xcclxcbn1cXHJcXG5cXHJcXG51bCB7XFxyXFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuYSB7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMTI1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5hOmhvdmVye1xcclxcbiAgICBjb2xvcjogcmVkO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG46OnBsYWNlaG9sZGVyIHtcXHJcXG4gICAgY29sb3I6IHNub3c7XFxyXFxufVxcclxcblxcclxcbi8qKioqKioqKioqXFxyXFxuTkFWQkFSXFxyXFxuKioqKioqKioqKi9cXHJcXG5cXHJcXG4ubmF2e1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXHJcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgaGVpZ2h0OiAxNTBweDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdl9faGVhZGVyIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgICBmb250LXNpemU6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5uYXZfX2xpbmtzIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA4cmVtIDhyZW0gOHJlbTtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMnJlbTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmxpIHtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbn1cXHJcXG5cXHJcXG4uYWN0aXZlIHtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBvdmVybGluZTtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiBnb2xkO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2X19saW5rIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRlbnR7XFxyXFxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDE1MHB4IC0gNHJlbSk7IFxcclxcbiAgICBtYXgtd2lkdGg6IDE0MDBweDtcXHJcXG4gICAgd2lkdGg6IDkwdnc7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmltZyB7XFxyXFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpe1xcclxcbiAgICAjY29udGVudCB7XFxyXFxuICAgICAgICBtYXgtd2lkdGg6IDkwdnc7XFxyXFxuICAgICAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLm5hdiB7XFxyXFxuICAgICAgICBtYXgtd2lkdGg6IDkwdnc7XFxyXFxuICAgICAgICBtYXJnaW46IGF1dG87XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLm5hdl9fbGlua3Mge1xcclxcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgICAgICAgZGlzcGxheTppbmxpbmUtZmxleFxcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi8qKioqKioqKioqXFxyXFxuSEVST1xcclxcbioqKioqKioqKiovXFxyXFxuLmhlcm8ge1xcclxcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxNTBweCAtIDRyZW0pOyBcXHJcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5oZXJvX19oZWFkZXIge1xcclxcbiAgICBmb250LXNpemU6IDJyZW07XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVyb19fZGVzY3JpcHRpb24gIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbi8qKioqKioqKioqXFxyXFxuTUVOVVxcclxcbioqKioqKioqKiovXFxyXFxuLm1lbnUge1xcclxcbiAgICAvKiBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxNTBweCAtIDRyZW0pOyAqL1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7IFxcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7IFxcclxcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDJyZW07XFxyXFxuICAgIHBhZGRpbmc6IDJyZW0gMDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVfX3RpdGxlIHtcXHJcXG4gICAgZm9udC1zaXplOiA0cmVtO1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogLjEyNXJlbTtcXHJcXG59XFxyXFxuLm1lbnVfX2l0ZW0ge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxyXFxufVxcclxcblxcclxcbi5tZW51X19kZXNjcmlwdGlvbiB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXHJcXG59XFxyXFxuLm1lbnVfX2ltZyB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudV9faW1nIGltZyB7XFxyXFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIHdpZHRoOiAzMDBweDtcXHJcXG4gICAgaGVpZ2h0OiAyMDBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCl7XFxyXFxuICAgIC5tZW51IHtcXHJcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcclxcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogMnJlbTtcXHJcXG4gICAgfVxcclxcbiAgICAubWVudV9faXRlbSB7XFxyXFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubWVudV9fZGVzY3JpcHRpb24ge1xcclxcbiAgICAgICAgcGFkZGluZzogMXJlbTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjlweCl7XFxyXFxuICAgIC5tZW51IHtcXHJcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcclxcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogMnJlbTtcXHJcXG4gICAgfVxcclxcbiAgICAubWVudV9faXRlbSB7XFxyXFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLm1lbnVfX2Rlc2NyaXB0aW9uIHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KXtcXHJcXG4gICAgLm1lbnUge1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcclxcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogMnJlbTtcXHJcXG4gICAgfVxcclxcbiAgICAubWVudV9faXRlbSB7XFxyXFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLm1lbnVfX2Rlc2NyaXB0aW9uIHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLyoqKioqKioqKipcXHJcXG5DT05UQUNUXFxyXFxuKioqKioqKioqKi9cXHJcXG5cXHJcXG4uY29udGFjdCB7XFxyXFxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDE1MHB4IC0gNHJlbSk7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3RfX2FkZHJlc3MsXFxyXFxuLmNvbnRhY3RfX2hvdXJzLFxcclxcbi5jb250YWN0X19waG9uZSB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDJyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdF9fZGV0YWlscyBwIHtcXHJcXG4gICAgcGFkZGluZzogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCl7XFxyXFxuICAgIC5jb250YWN0IHtcXHJcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcclxcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5jb250YWN0X19kZXRhaWxzIHAge1xcclxcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuY29udGFjdF9fYWRkcmVzcyxcXHJcXG4gICAgLmNvbnRhY3RfX2hvdXJzLFxcclxcbiAgICAuY29udGFjdF9fcGhvbmUge1xcclxcbiAgICAgICAgcGFkZGluZzogMnJlbSAwO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi8qKioqKioqKioqXFxyXFxuRk9STVxcclxcbioqKioqKioqKiovXFxyXFxuLmZvcm0ge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcclxcbiAgICB3aWR0aDogNTAwcHg7XFxyXFxufVxcclxcblxcclxcbi5mb3JtX19uYW1lLFxcclxcbi5mb3JtX19lbWFpbCxcXHJcXG4uZm9ybV9fbWVzc2FnZSB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgICBtYXJnaW46IDFyZW07XFxyXFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC41KTtcXHJcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBzbm93O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgY29sb3I6IHNub3c7XFxyXFxufVxcclxcblxcclxcbi5mb3JtX19tZXNzYWdlIHtcXHJcXG4gICAgaGVpZ2h0OiAyMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0biB7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW0gMnJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgY29sb3I6IHNub3c7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogLjEyNXJlbTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZDogc25vdztcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCl7XFxyXFxuICAgIC5mb3JtIHtcXHJcXG4gICAgICAgIHdpZHRoOiAzMjBweDtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IDJyZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmZvcm1fX25hbWUsXFxyXFxuICAgIC5mb3JtX19lbWFpbCxcXHJcXG4gICAgLmZvcm1fX21lc3NhZ2Uge1xcclxcbiAgICAgICAgbWFyZ2luOiAxcmVtIDA7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLyoqKioqKioqKipcXHJcXG5GT09URVJcXHJcXG4qKioqKioqKioqL1xcclxcbi5mb290ZXIge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcclxcbiAgICBoZWlnaHQ6IDRyZW07XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZDogYmxhY2s7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgPT0gbnVsbCA/IG51bGwgOiB0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl07IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlLCBuby1wYXJhbS1yZWFzc2lnblxuXG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhzdHlsZSwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICByZXR1cm4gc3R5bGU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZSkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZShcIm1lZGlhXCIpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSkge1xuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJmdW5jdGlvbiBjb250YWN0KCkge1xyXG4gICAgY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xyXG4gICAgY29udGFjdC5jbGFzc0xpc3QuYWRkKFwiY29udGFjdFwiKTtcclxuICAgIGNvbnN0IGRldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYXJ0aWNsZVwiKTtcclxuICAgIGRldGFpbHMuY2xhc3NMaXN0LmFkZChcImNvbnRhY3RfX2RldGFpbHNcIik7XHJcbiAgICBjb25zdCBhZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGFkZHJlc3MuY2xhc3NMaXN0LmFkZChcImNvbnRhY3RfX2FkZHJlc3NcIik7XHJcbiAgICBjb25zdCBwMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgcDEudGV4dENvbnRlbnQgPSBcIlRoZSBUYWNvIFNwb3RcIjtcclxuICAgIGNvbnN0IHAyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBwMi50ZXh0Q29udGVudCA9IFwiMTM3IFcgMzl0aCBTdHJlZXRcIjtcclxuICAgIGNvbnN0IHAzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBwMy50ZXh0Q29udGVudCA9IFwiVGFjb3ZpbGxlLCBUTyA2NDU1MVwiO1xyXG4gICAgYWRkcmVzcy5hcHBlbmQocDEsIHAyLCBwMyk7XHJcbiAgICBjb25zdCBob3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBob3Vycy5jbGFzc0xpc3QuYWRkKFwiY29udGFjdF9faG91cnNcIik7XHJcbiAgICBjb25zdCBwNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgcDQudGV4dENvbnRlbnQgPSBcIk1vbiAtIFRodXJzOiAxMTowMEFNIC0gMTA6MDBQTVwiO1xyXG4gICAgY29uc3QgcDUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIHA1LnRleHRDb250ZW50ID0gXCJGcmkgLSBTYXQ6IDExOjAwQU0gLSAxMjowMEFNXCI7XHJcbiAgICBjb25zdCBwNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgcDYudGV4dENvbnRlbnQgPSBcIlN1biAtIENMT1NFRFwiO1xyXG4gICAgaG91cnMuYXBwZW5kKHA0LCBwNSwgcDYpO1xyXG4gICAgY29uc3QgcGhvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgcGhvbmUuY2xhc3NMaXN0LmFkZChcImNvbnRhY3RfX3Bob25lXCIpO1xyXG4gICAgY29uc3QgcDcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuXHRwNy50ZXh0Q29udGVudCA9IFwiMjgxLTMzMC04MDA0XCI7XHJcbiAgICBwaG9uZS5hcHBlbmRDaGlsZChwNyk7XHJcbiAgICBjb25zdCBjb250YWN0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhcnRpY2xlXCIpO1xyXG4gICAgY29udGFjdEZvcm0uYXBwZW5kKGNyZWF0ZUZvcm0oKSk7XHJcbiAgICBjb250YWN0Rm9ybS5jbGFzc0xpc3QuYWRkKFwiY29udGFjdF9fZm9ybVwiKTtcclxuICAgIGRldGFpbHMuYXBwZW5kKGFkZHJlc3MsIGhvdXJzLCBwaG9uZSk7XHJcbiAgICBjb250YWN0LmFwcGVuZChjb250YWN0Rm9ybSwgZGV0YWlscyk7XHJcbiAgICByZXR1cm4gY29udGFjdDtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlRm9ybSgpIHtcclxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcclxuICAgIGZvcm0uY2xhc3NMaXN0LmFkZChcImZvcm1cIik7XHJcbiAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgbmFtZS5jbGFzc0xpc3QuYWRkKFwiZm9ybV9fbmFtZVwiKTtcclxuICAgIG5hbWUuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XHJcbiAgICBuYW1lLnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiTmFtZVwiKTtcclxuICAgIGNvbnN0IGVtYWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgZW1haWwuY2xhc3NMaXN0LmFkZChcImZvcm1fX2VtYWlsXCIpO1xyXG4gICAgZW1haWwuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImVtYWlsXCIpO1xyXG4gICAgZW1haWwuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJFbWFpbFwiKTtcclxuICAgIGNvbnN0IG1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XHJcbiAgICBtZXNzYWdlLmNsYXNzTGlzdC5hZGQoXCJmb3JtX19tZXNzYWdlXCIpO1xyXG4gICAgbWVzc2FnZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiZW1haWxcIik7XHJcbiAgICBtZXNzYWdlLnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiTWVzc2FnZVwiKTtcclxuICAgIGNvbnN0IHNlbmRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgc2VuZEJ0bi5jbGFzc0xpc3QuYWRkKFwiYnRuXCIpO1xyXG4gICAgc2VuZEJ0bi50ZXh0Q29udGVudCA9IFwiU0VORFwiO1xyXG4gICAgZm9ybS5hcHBlbmQobmFtZSwgZW1haWwsIG1lc3NhZ2UsIHNlbmRCdG4pO1xyXG4gICAgcmV0dXJuIGZvcm07XHJcbn1cclxuXHJcbmV4cG9ydCB7IGNvbnRhY3QgfTtcclxuXHJcbiIsImltcG9ydCBhdm9jYWRvIGZyb20gXCIuL2ltYWdlcy9hdm9jYWRvLmpwZ1wiO1xyXG5pbXBvcnQgY2FybmVhc2FkYSBmcm9tIFwiLi9pbWFnZXMvY2FybmVhc2FkYS5qcGdcIjtcclxuaW1wb3J0IGNoaXBzIGZyb20gXCIuL2ltYWdlcy9jaGlwcy5qcGdcIjtcclxuaW1wb3J0IGZpc2ggZnJvbSBcIi4vaW1hZ2VzL2Zpc2guanBnXCI7XHJcbmltcG9ydCB2ZWdldGFyaWFuIGZyb20gXCIuL2ltYWdlcy92ZWdldGFyaWFuLmpwZ1wiO1xyXG5cclxuZnVuY3Rpb24gbWVudSgpIHtcclxuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcclxuICAgIG1lbnUuY2xhc3NMaXN0LmFkZChcIm1lbnVcIik7XHJcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJtZW51X190aXRsZVwiKTtcclxuICAgIHRpdGxlLnRleHRDb250ZW50ID0gXCJNZW51XCI7XHJcbiAgICBtZW51LmFwcGVuZENoaWxkKHRpdGxlKTtcclxuICAgIGNvbnN0IGF2b2NhZG9JbWcgPSBpbWcoYXZvY2Fkbyk7XHJcbiAgICBjb25zdCBjYXJuZWFzYWRhSW1nID0gaW1nKGNhcm5lYXNhZGEpO1xyXG4gICAgY29uc3QgY2hpcHNJbWcgPSBpbWcoY2hpcHMpO1xyXG4gICAgY29uc3QgZmlzaEltZyA9IGltZyhmaXNoKTtcclxuICAgIGNvbnN0IHZlZ2V0YXJpYW5JbWcgPSBpbWcodmVnZXRhcmlhbik7XHJcbiAgICBjb25zdCBtZW51SXRlbUltZ3MgPSBbYXZvY2Fkb0ltZywgY2FybmVhc2FkYUltZywgY2hpcHNJbWcsIGZpc2hJbWcsIHZlZ2V0YXJpYW5JbWddO1xyXG4gICAgY29uc3QgbWVudUl0ZW1EZXNjcmlwdGlvbnMgPSBbXCJBdm9jYWRvIERpcCA2Ljk5XCIsIFwiQ2FybmUgQXNhZGEgVGFjb3MgJDEwLjk5XCIsIFwiMyBDaGlwIFNhbXBsZXIgUGxhdHRlciAgJDcuOTlcIiwgXCJGcmllZCBGaXNoIFRhY29zICAkOS45OVwiLCBcIlZlZ2V0YXJpYW4gVGFjb3MgJDguOTlcIl07XHJcbiAgICBtZW51SXRlbUltZ3MuZm9yRWFjaChmdW5jdGlvbiAobWVudUl0ZW0sIGluZGV4KSB7XHJcblx0XHRcdG1lbnUuYXBwZW5kQ2hpbGQoXHJcblx0XHRcdFx0Y3JlYXRlTWVudUl0ZW0oXHJcblx0XHRcdFx0XHRtZW51SXRlbURlc2NyaXB0aW9uc1tpbmRleF0sXHJcblx0XHRcdFx0XHRcIm1lbnVfX2l0ZW1cIixcclxuXHRcdFx0XHRcdFwibWVudV9fZGVzY3JpcHRpb25cIixcclxuXHRcdFx0XHRcdFwibWVudV9faW1nXCIsXHJcblx0XHRcdFx0XHRtZW51SXRlbVxyXG5cdFx0XHRcdClcclxuXHRcdFx0KTtcclxuXHRcdH0pO1xyXG4gICAgcmV0dXJuIG1lbnU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGltZyhzcmMpIHtcclxuICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgaW1nLnNyYyA9IHNyYztcclxuICAgIHJldHVybiBpbWc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZU1lbnVJdGVtKGRlc2NyaXB0aW9uLCBjbGFzc05hbWUxLCBjbGFzc05hbWUyLCBjbGFzc05hbWUzLCBpbWcpIHtcclxuICAgIGNvbnN0IG1lbnVJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XHJcbiAgICBtZW51SXRlbS5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZTEpO1xyXG4gICAgY29uc3QgbWVudURlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFydGljbGVcIik7XHJcbiAgICBtZW51RGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChjbGFzc05hbWUyKTtcclxuICAgIG1lbnVEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGRlc2NyaXB0aW9uO1xyXG4gICAgY29uc3QgbWVudUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhcnRpY2xlXCIpO1xyXG4gICAgbWVudUltZy5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZTMpO1xyXG4gICAgbWVudUltZy5hcHBlbmRDaGlsZChpbWcpO1xyXG4gICAgbWVudUl0ZW0uYXBwZW5kKG1lbnVJbWcsIG1lbnVEZXNjcmlwdGlvbik7XHJcbiAgICByZXR1cm4gbWVudUl0ZW07XHJcbn1cclxuXHJcbmV4cG9ydCB7bWVudX07IiwiXHJcbmZ1bmN0aW9uIHJlbmRlckhvbWUoKSB7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChyZW5kZXJOYXYoKSk7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChyZW5kZXJDb250ZW50KCkpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmQocmVuZGVyRm9vdGVyKCkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW5kZXJOYXYoKSB7XHJcbiAgICBsZXQgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcclxuICAgIG5hdi5jbGFzc0xpc3QuYWRkKFwibmF2XCIpO1xyXG4gICAgbGV0IG5hdkhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBuYXZIZWFkZXIuY2xhc3NMaXN0LmFkZChcIm5hdl9faGVhZGVyXCIpO1xyXG4gICAgbGV0IG5hdkhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcbiAgICBuYXZIZWFkaW5nLmNsYXNzTGlzdC5hZGQoXCJuYXZfX2xvZ29cIik7XHJcbiAgICBuYXZIZWFkaW5nLnRleHRDb250ZW50ID0gXCJUaGUgVGFjbyBTcG90XCI7XHJcbiAgICBuYXZIZWFkZXIuYXBwZW5kQ2hpbGQobmF2SGVhZGluZyk7XHJcbiAgICBsZXQgbmF2TGlua3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XHJcbiAgICBuYXZMaW5rcy5jbGFzc0xpc3QuYWRkKFwibmF2X19saW5rc1wiKTtcclxuICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgIGxldCBob21lTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gICAgaG9tZUxpbmsuY2xhc3NMaXN0LmFkZChcIm5hdl9fbGlua1wiKTtcclxuICAgIGhvbWVMaW5rLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgICBob21lTGluay5pZCA9IFwiaG9tZVwiO1xyXG4gICAgaG9tZUxpbmsuaHJlZiA9IFwiI1wiO1xyXG4gICAgaG9tZUxpbmsudGV4dENvbnRlbnQgPSBcIkhvbWVcIjtcclxuICAgIGxpLmFwcGVuZENoaWxkKGhvbWVMaW5rKTtcclxuICAgIGxldCBsaTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICBsZXQgbWVudUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICAgIG1lbnVMaW5rLmNsYXNzTGlzdC5hZGQoXCJuYXZfX2xpbmtcIik7XHJcbiAgICBtZW51TGluay5pZCA9IFwibWVudVwiO1xyXG4gICAgbWVudUxpbmsuaHJlZiA9IFwiI1wiO1xyXG4gICAgbWVudUxpbmsudGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcclxuICAgIGxpMS5hcHBlbmRDaGlsZChtZW51TGluayk7XHJcbiAgICBsZXQgbGkyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgbGV0IGNvbnRhY3RMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICBjb250YWN0TGluay5jbGFzc0xpc3QuYWRkKFwibmF2X19saW5rXCIpO1xyXG4gICAgY29udGFjdExpbmsuaWQgPSBcImNvbnRhY3RcIjtcclxuICAgIGNvbnRhY3RMaW5rLmhyZWYgPSBcIiNcIjtcclxuICAgIGNvbnRhY3RMaW5rLnRleHRDb250ZW50ID0gXCJDb250YWN0XCI7XHJcbiAgICBsaTIuYXBwZW5kQ2hpbGQoY29udGFjdExpbmspO1xyXG4gICAgbmF2TGlua3MuYXBwZW5kQ2hpbGQobGkpO1xyXG4gICAgbmF2TGlua3MuYXBwZW5kQ2hpbGQobGkxKTtcclxuICAgIG5hdkxpbmtzLmFwcGVuZENoaWxkKGxpMik7XHJcbiAgICBuYXYuYXBwZW5kKG5hdkhlYWRlciwgbmF2TGlua3MpO1xyXG4gICAgcmV0dXJuIG5hdjtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVuZGVyQ29udGVudCgpIHtcclxuICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29udGFpbmVyLmlkID0gXCJjb250ZW50XCI7XHJcbiAgICBsZXQgaGVybyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xyXG4gICAgaGVyby5jbGFzc0xpc3QuYWRkKFwiaGVyb1wiKTtcclxuICAgIGxldCBoZXJvSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XHJcbiAgICBoZXJvSGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJoZXJvX19oZWFkZXJcIik7XHJcbiAgICBsZXQgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcbiAgICBoMi5jbGFzc0xpc3QuYWRkKFwiaGVyb19faGVhZGluZ1wiKTtcclxuICAgIGgyLnRleHRDb250ZW50ID0gXCJFdmVyeWRheSBpcyBmb3IgVGFjb3MsIG5vdCBqdXN0IFR1ZXNkYXkhXCI7XHJcbiAgICBoZXJvSGVhZGVyLmFwcGVuZENoaWxkKGgyKTtcclxuICAgIGxldCBoZXJvRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYXJ0aWNsZVwiKTtcclxuICAgIGhlcm9EZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwiaGVyb19fZGVzY3JpcHRpb25cIik7XHJcbiAgICBsZXQgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgcC5jbGFzc0xpc3QuYWRkKFwiaGVyb19fdGV4dFwiKTtcclxuICAgIHAudGV4dENvbnRlbnQgPSBgU2VydmluZyB1cCB0aGUgYmVzdCB0YWNvcyBvbiB0aGUgRWFzdCBDb2FzdCBzaW5jZSAyMDE3LiAgXHJcbiAgICBDcmVhdGl2aXR5IGFuZCBhdHRlbnRpb24gdG8gZGV0YWlsIGhlbHAgY3JhZnQgb3VyIG1vdXRoLXdhdGVyaW5nIHJlY2lwZXMuXHJcbiAgICBEb250IGhlc2l0YXRlLCBzdG9wIGJ5IGFuZCBsZXQgb25lIG9mIG91ciB0YWNvcyBcImhpdCB0aGUgc3BvdCFcImA7XHJcbiAgICBoZXJvRGVzY3JpcHRpb24uYXBwZW5kQ2hpbGQocCk7XHJcbiAgICBoZXJvLmFwcGVuZENoaWxkKGhlcm9IZWFkZXIpO1xyXG4gICAgaGVyby5hcHBlbmRDaGlsZChoZXJvRGVzY3JpcHRpb24pO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZChoZXJvKTtcclxuICAgIHJldHVybiBjb250YWluZXI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlckZvb3RlcigpIHtcclxuICAgIGxldCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpO1xyXG4gICAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoXCJmb290ZXJcIik7XHJcbiAgICBsZXQgc21hbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic21hbGxcIik7XHJcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpO1xyXG4gICAgc21hbGwuaW5uZXJIVE1MID0gYCZjb3B5OyAke2RhdGV9IENvZGVkICYgQ3JlYXRlZCBCeSBOYXRhc2hhIEpvaG5zb25gO1xyXG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKHNtYWxsKTtcclxuICAgIHJldHVybiBmb290ZXI7XHJcbn1cclxuXHJcbmV4cG9ydCB7cmVuZGVySG9tZSwgcmVuZGVyTmF2LCByZW5kZXJDb250ZW50fTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xyXG5cclxuaW1wb3J0IHtyZW5kZXJIb21lLCByZW5kZXJDb250ZW50fSBmcm9tIFwiLi9yZW5kZXIuanNcIjtcclxuaW1wb3J0IHsgbWVudSB9IGZyb20gXCIuL21lbnUuanNcIjtcclxuaW1wb3J0IHsgY29udGFjdCB9IGZyb20gXCIuL2NvbnRhY3RcIjtcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCByZW5kZXJIb21lKCkpO1xyXG5jb25zdCBob21lVGFiID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJob21lXCIpO1xyXG5jb25zdCBtZW51VGFiID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZW51XCIpO1xyXG5jb25zdCBjb250YWN0VGFiID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250YWN0XCIpO1xyXG5cclxuaG9tZVRhYi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc3dpdGNoVGFiKTtcclxubWVudVRhYi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc3dpdGNoVGFiKTtcclxuY29udGFjdFRhYi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc3dpdGNoVGFiKTtcclxuXHJcbmZ1bmN0aW9uIHN3aXRjaFRhYihlKSB7XHJcbiAgICBjb25zdCBvbGRDb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xyXG4gICAgY29uc3QgdGFicyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmF2X19saW5rXCIpO1xyXG4gICAgaWYgKGUudGFyZ2V0LmlkID09PSBcImhvbWVcIikge1xyXG4gICAgICAgIG9sZENvbnRlbnQuZmlyc3RDaGlsZC5yZW1vdmUoKTtcclxuICAgICAgICBvbGRDb250ZW50LmFwcGVuZChyZW5kZXJDb250ZW50KCkpO1xyXG4gICAgICAgIGFkZEFjdGl2ZShlLnRhcmdldCwgdGFicyk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChlLnRhcmdldC5pZCA9PT0gXCJtZW51XCIpIHtcclxuICAgICAgICBvbGRDb250ZW50LmZpcnN0Q2hpbGQucmVtb3ZlKCk7XHJcbiAgICAgICAgb2xkQ29udGVudC5hcHBlbmQobWVudSgpKTtcclxuICAgICAgICBhZGRBY3RpdmUoZS50YXJnZXQsIHRhYnMpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoZS50YXJnZXQuaWQgPT09IFwiY29udGFjdFwiKSB7XHJcbiAgICAgICAgb2xkQ29udGVudC5maXJzdENoaWxkLnJlbW92ZSgpO1xyXG4gICAgICAgIG9sZENvbnRlbnQuYXBwZW5kKGNvbnRhY3QoKSk7XHJcbiAgICAgICAgYWRkQWN0aXZlKGUudGFyZ2V0LCB0YWJzKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gYWRkQWN0aXZlKHRhcmdldCwgdGFicykge1xyXG4gICAgY29uc3QgdGFiTGlua3MgPSBBcnJheS5mcm9tKHRhYnMpO1xyXG4gICAgdGFiTGlua3MuZm9yRWFjaChmdW5jdGlvbiAobGluaykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGxpbmsuaWQsIHRhcmdldC5pZCk7XHJcbiAgICAgICAgaWYgKGxpbmsuaWQgPT0gdGFyZ2V0LmlkKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICBsaW5rLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGluay5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIm5vdCBhY3RpdmVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9