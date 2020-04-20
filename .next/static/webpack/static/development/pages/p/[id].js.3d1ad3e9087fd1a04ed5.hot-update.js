webpackHotUpdate("static/development/pages/p/[id].js",{

/***/ "./components/ImageCarousal.tsx":
/*!**************************************!*\
  !*** ./components/ImageCarousal.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ImageCarousal; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);






var _jsxFileName = "/home/nick/Desktop/sculpture-site/components/ImageCarousal.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;


var ImageCarousal =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(ImageCarousal, _React$Component);

  function ImageCarousal(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ImageCarousal);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ImageCarousal).call(this, props));
    _this.state = {
      images: props.images,
      index: 0
    };
    _this.moveLeft = _this.moveLeft.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.moveRight = _this.moveRight.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ImageCarousal, [{
    key: "moveLeft",
    value: function moveLeft() {
      var i = this.state.index;

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
  }, {
    key: "moveRight",
    value: function moveRight() {
      var i = this.state.index;

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
  }, {
    key: "render",
    value: function render() {
      var carousalControls = this.state.images.length !== 0 ? null : __jsx("div", {
        className: "carousal-controls-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, __jsx("div", {
        className: "carousal-control",
        onClick: this.moveLeft,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, "\u2190"), __jsx("div", {
        className: "carousal-control",
        onClick: this.moveRight,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, "\u2192"));
      return __jsx("div", {
        className: "sculpture-photo-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, __jsx("img", {
        className: "sculpture-photo",
        src: this.state.images[this.state.index],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }), carousalControls);
    }
  }]);

  return ImageCarousal;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);


;

/***/ })

})
//# sourceMappingURL=[id].js.3d1ad3e9087fd1a04ed5.hot-update.js.map