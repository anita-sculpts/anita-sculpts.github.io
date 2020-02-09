webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/SculpturesList.tsx":
/*!***************************************!*\
  !*** ./components/SculpturesList.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SculpturesList; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _SculptureThumbnail__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SculptureThumbnail */ "./components/SculptureThumbnail.tsx");





var _jsxFileName = "/home/nick/Desktop/sculpture-site/components/SculpturesList.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;


var test = {
  name: "Sculpture",
  forSale: true,
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
  images: ["https://images.pexels.com/photos/3683187/pexels-photo-3683187.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", "https://images.pexels.com/photos/1021754/pexels-photo-1021754.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"]
};

var SculpturesList =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(SculpturesList, _React$Component);

  function SculpturesList() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SculpturesList);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(SculpturesList).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SculpturesList, [{
    key: "render",
    value: function render() {
      var forSale = this.props.forSale;
      var data = Array(20).fill(test);
      return __jsx("div", {
        className: "sculptures-list-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, data.filter(function (sculpture) {
        return sculpture.forSale === forSale;
      }).map(function (sculpture, i) {
        return __jsx(_SculptureThumbnail__WEBPACK_IMPORTED_MODULE_6__["default"], {
          key: i,
          forSale: sculpture.forSale,
          imageName: sculpture.images[0].imageName,
          imageUrl: sculpture.images[0].imageUrl,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          },
          __self: this
        });
      }));
    }
  }]);

  return SculpturesList;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);


;

/***/ })

})
//# sourceMappingURL=index.js.9c2bed3e6f77a881d162.hot-update.js.map