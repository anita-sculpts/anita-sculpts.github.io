module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Header.tsx":
/*!*******************************!*\
  !*** ./components/Header.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/nick/Desktop/sculpture-site/components/Header.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

class Header extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    const {
      children,
      addTopMargin,
      color,
      useSerif
    } = this.props;
    const style = {
      marginTop: addTopMargin ? '0.5em' : '0em',
      color: color !== null && color !== void 0 ? color : '$333',
      fontFamily: useSerif ? "'Judson', serif" : "'Roboto', sans-serif"
    };
    return __jsx("h1", {
      className: "header",
      style: style,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, children);
  }

}

/***/ }),

/***/ "./components/ImageCarousal.tsx":
/*!**************************************!*\
  !*** ./components/ImageCarousal.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ImageCarousal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/nick/Desktop/sculpture-site/components/ImageCarousal.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

class ImageCarousal extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: props.images,
      index: 0
    };
    this.moveLeft = this.moveLeft.bind(this);
    this.moveRight = this.moveRight.bind(this);
  }

  moveLeft() {
    const i = this.state.index;

    if (i === 0) {
      this.setState({
        index: this.state.images.length - 1
      });
    } else {
      this.setState({
        index: i - 1
      });
    }
  }

  moveRight() {
    const i = this.state.index;

    if (i === this.state.images.length - 1) {
      this.setState({
        index: 0
      });
    } else {
      this.setState({
        index: i + 1
      });
    }
  }

  render() {
    return __jsx("div", {
      className: "sculpture-photo-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, __jsx("img", {
      className: "sculpture-photo",
      src: this.state.images[this.state.index],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }), __jsx("div", {
      className: "carousal-controls-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, __jsx("div", {
      className: "carousal-control",
      onClick: this.moveLeft,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, "\u2190"), __jsx("div", {
      className: "carousal-control",
      onClick: this.moveRight,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, "\u2192")));
  }

}
;

/***/ }),

/***/ "./pages/p/[id].tsx":
/*!**************************!*\
  !*** ./pages/p/[id].tsx ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sculpture_data_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../sculpture_data.json */ "./sculpture_data.json");
var _sculpture_data_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../sculpture_data.json */ "./sculpture_data.json", 1);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Header */ "./components/Header.tsx");
/* harmony import */ var _components_ImageCarousal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/ImageCarousal */ "./components/ImageCarousal.tsx");
var _jsxFileName = "/home/nick/Desktop/sculpture-site/pages/p/[id].tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const SculpturePage = () => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  let currentSculptureName = router.query.id;

  if (currentSculptureName === undefined) {
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: undefined
    });
  }

  let currentSculpture;
  let sculptures = [];

  if (currentSculptureName === '_forSale') {
    sculptures = _sculpture_data_json__WEBPACK_IMPORTED_MODULE_2__.filter(sculpture => sculpture.forSale === true);
    currentSculpture = sculptures[0];
  } else if (currentSculptureName === '_notForSale') {
    sculptures = _sculpture_data_json__WEBPACK_IMPORTED_MODULE_2__.filter(sculpture => sculpture.forSale === false);
    currentSculpture = sculptures[0];
  } else {
    currentSculpture = _sculpture_data_json__WEBPACK_IMPORTED_MODULE_2__.filter(sculpture => sculpture.name === router.query.id)[0];
    sculptures = _sculpture_data_json__WEBPACK_IMPORTED_MODULE_2__.filter(sculpture => sculpture.forSale === currentSculpture.forSale);
  }

  let forSaleText = null;

  if (currentSculpture.forSale) {
    forSaleText = __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: undefined
    }, "To purchase, email anita-sculpts@protonmail.com");
  }

  return __jsx("div", {
    className: "sculpture-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, __jsx(_components_ImageCarousal__WEBPACK_IMPORTED_MODULE_4__["default"], {
    images: currentSculpture.images,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }), __jsx("div", {
    className: "sculpture-text-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, currentSculpture.name), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }, currentSculpture.description), forSaleText));
};

/* harmony default export */ __webpack_exports__["default"] = (SculpturePage);

/***/ }),

/***/ "./sculpture_data.json":
/*!*****************************!*\
  !*** ./sculpture_data.json ***!
  \*****************************/
/*! exports provided: 0, 1, 2, 3, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"name\":\"Sculpture\",\"forSale\":true,\"description\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\",\"images\":[\"https://images.pexels.com/photos/1055068/pexels-photo-1055068.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940\",\"https://images.pexels.com/photos/3683187/pexels-photo-3683187.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940\",\"https://images.pexels.com/photos/1021754/pexels-photo-1021754.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260\"]},{\"name\":\"Sculpture 2\",\"forSale\":true,\"description\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\",\"images\":[\"https://images.pexels.com/photos/1021754/pexels-photo-1021754.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260\",\"https://images.pexels.com/photos/3683187/pexels-photo-3683187.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940\"]},{\"name\":\"Sculpture 3\",\"forSale\":false,\"description\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\",\"images\":[\"https://images.pexels.com/photos/1055068/pexels-photo-1055068.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940\",\"https://images.pexels.com/photos/3683187/pexels-photo-3683187.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940\",\"https://images.pexels.com/photos/1021754/pexels-photo-1021754.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260\"]},{\"name\":\"Sculpture 4\",\"forSale\":false,\"description\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\",\"images\":[\"https://images.pexels.com/photos/3683187/pexels-photo-3683187.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940\",\"https://images.pexels.com/photos/1021754/pexels-photo-1021754.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260\"]}]");

/***/ }),

/***/ 4:
/*!********************************!*\
  !*** multi ./pages/p/[id].tsx ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/nick/Desktop/sculpture-site/pages/p/[id].tsx */"./pages/p/[id].tsx");


/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=[id].js.map