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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Header */ "./components/Header.tsx");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);






var _jsxFileName = "/home/nick/Desktop/sculpture-site/components/NavSideBar.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;




var NavSideBar =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(NavSideBar, _React$Component);

  function NavSideBar(props) {
    var _this$props$expanded;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, NavSideBar);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(NavSideBar).call(this, props));
    _this.state = {
      expanded: (_this$props$expanded = _this.props.expanded) !== null && _this$props$expanded !== void 0 ? _this$props$expanded : false
    };
    _this.onCheck = _this.onCheck.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(NavSideBar, [{
    key: "onCheck",
    value: function onCheck() {
      this.setState({
        expanded: !this.state.expanded
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          currentSculpture = _this$props.currentSculpture,
          sculptures = _this$props.sculptures;
      var navHeaderText = currentSculpture.forSale ? "Available Sculptures" : "Gallery";
      var tmp = [];

      for (var i = 0; i < 22; i++) {
        tmp.push(__jsx("li", {
          key: i,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          },
          __self: this
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
          href: "/p/[id]",
          as: "/p/".concat(sculptures[i % 2].name),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          },
          __self: this
        }, __jsx("a", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          },
          __self: this
        }, sculptures[i % 2].name))));
      }

      var sculptureLinks = __jsx("div", {
        className: "sculpture-nav-list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, // sculptures.map((s, i) => (
      //     <li key={i}>
      //         <Link href="/p/[id]" as={`/p/${s.name}`}>
      //             <a>{s.name}</a>
      //         </Link>
      //     </li>
      // ))
      tmp);

      return __jsx("nav", {
        role: "navigation",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, __jsx("div", {
        id: "menuToggle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, __jsx("input", {
        checked: this.state.expanded,
        type: "checkbox",
        id: "menuCheckbox",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }), __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }), __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }), __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }), __jsx("ul", {
        id: "menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, __jsx(_Header__WEBPACK_IMPORTED_MODULE_7__["default"], {
        color: "white",
        fontSize: "2.5em",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, navHeaderText)), sculptureLinks, __jsx("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/",
        as: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, "Back to Home"))))));
    }
  }]);

  return NavSideBar;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);



/***/ })

})
//# sourceMappingURL=[id].js.880b5d45a72f57e1b21c.hot-update.js.map