webpackHotUpdate("static/development/pages/p/[id].js",{

/***/ "./components/NavSideBar.tsx":
/*!***********************************!*\
  !*** ./components/NavSideBar.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);





var _jsxFileName = "/home/nick/Desktop/sculpture-site/components/NavSideBar.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;


var Header =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Header, _React$Component);

  function Header() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Header);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Header).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Header, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          addTopMargin = _this$props.addTopMargin,
          color = _this$props.color,
          useSerif = _this$props.useSerif;
      var style = {
        marginTop: addTopMargin ? '0.5em' : '0em',
        color: color !== null && color !== void 0 ? color : '$333',
        fontFamily: useSerif ? "'Judson', serif" : "'Roboto', sans-serif"
      };
      return __jsx("h1", {
        className: "header",
        style: style,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, children);
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);



/***/ }),

/***/ "./pages/p/[id].tsx":
/*!**************************!*\
  !*** ./pages/p/[id].tsx ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sculpture_data_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../sculpture_data.json */ "./sculpture_data.json");
var _sculpture_data_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../sculpture_data.json */ "./sculpture_data.json", 1);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Header */ "./components/Header.tsx");
/* harmony import */ var _components_ImageCarousal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/ImageCarousal */ "./components/ImageCarousal.tsx");
/* harmony import */ var _components_NavSideBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/NavSideBar */ "./components/NavSideBar.tsx");
var _jsxFileName = "/home/nick/Desktop/sculpture-site/pages/p/[id].tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var SculpturePage = function SculpturePage() {
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  var currentSculptureName = router.query.id;

  if (currentSculptureName === undefined) {
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    });
  }

  var currentSculpture;
  var sculptures = [];

  if (currentSculptureName === '_forSale') {
    sculptures = _sculpture_data_json__WEBPACK_IMPORTED_MODULE_2__.filter(function (sculpture) {
      return sculpture.forSale === true;
    });
    currentSculpture = sculptures[0];
  } else if (currentSculptureName === '_notForSale') {
    sculptures = _sculpture_data_json__WEBPACK_IMPORTED_MODULE_2__.filter(function (sculpture) {
      return sculpture.forSale === false;
    });
    currentSculpture = sculptures[0];
  } else {
    currentSculpture = _sculpture_data_json__WEBPACK_IMPORTED_MODULE_2__.filter(function (sculpture) {
      return sculpture.name === router.query.id;
    })[0];
    sculptures = _sculpture_data_json__WEBPACK_IMPORTED_MODULE_2__.filter(function (sculpture) {
      return sculpture.forSale === currentSculpture.forSale;
    });
  }

  var forSaleText = null;

  if (currentSculpture.forSale) {
    forSaleText = __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, "To purchase, email anita-sculpts@protonmail.com");
  }

  return __jsx("div", {
    className: "sculpture-page-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx(_components_NavSideBar__WEBPACK_IMPORTED_MODULE_6__["default"], {
    currentSculptureName: currentSculptureName,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }), __jsx("div", {
    className: "sculpture-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx(_components_ImageCarousal__WEBPACK_IMPORTED_MODULE_4__["default"], {
    images: currentSculpture.images,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }), __jsx("div", {
    className: "sculpture-text-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, currentSculpture.name), __jsx("div", {
    className: "sculpture-body-text-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, currentSculpture.description), forSaleText))));
};

/* harmony default export */ __webpack_exports__["default"] = (SculpturePage);

/***/ })

})
//# sourceMappingURL=[id].js.a1ee1cae56de19976863.hot-update.js.map