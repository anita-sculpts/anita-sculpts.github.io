webpackHotUpdate("static/development/pages/p/[id].js",{

/***/ "./components/NavSideBar.tsx":
/*!***********************************!*\
  !*** ./components/NavSideBar.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NavSideBar; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Header */ "./components/Header.tsx");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);





var _jsxFileName = "/home/nick/Desktop/sculpture-site/components/NavSideBar.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;




var NavSideBar =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(NavSideBar, _React$Component);

  function NavSideBar() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, NavSideBar);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(NavSideBar).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(NavSideBar, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          currentSculpture = _this$props.currentSculpture,
          sculptures = _this$props.sculptures;
      var navHeaderText = currentSculpture.forSale ? "Available Sculptures" : "Gallery";
      var sculptureLinks = sculptures.map(function (s, i) {
        return __jsx("li", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 15
          },
          __self: this
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
          key: i,
          href: "/p/[id]",
          as: "/p/".concat(s.name),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 16
          },
          __self: this
        }, __jsx("a", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 17
          },
          __self: this
        }, s.name)));
      });
      return __jsx("nav", {
        role: "navigation",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, __jsx("div", {
        id: "menuToggle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, __jsx("input", {
        type: "checkbox",
        id: "menuCheckbox",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }), __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }), __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }), __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }), __jsx("ul", {
        id: "menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, __jsx("li", {
        key: -1,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, __jsx(_Header__WEBPACK_IMPORTED_MODULE_6__["default"], {
        color: "white",
        fontSize: "1.75em",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, navHeaderText)), sculptureLinks, __jsx("li", {
        key: -2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/",
        as: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, "Back to Home"))))));
    }
  }]);

  return NavSideBar;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);



/***/ })

})
//# sourceMappingURL=[id].js.b6c2a142fe0d39ceef96.hot-update.js.map