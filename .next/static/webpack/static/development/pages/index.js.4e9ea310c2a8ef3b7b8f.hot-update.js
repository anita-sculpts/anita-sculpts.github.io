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
/* harmony import */ var _sculpture_data_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../sculpture_data.json */ "./sculpture_data.json");
var _sculpture_data_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../sculpture_data.json */ "./sculpture_data.json", 1);





var _jsxFileName = "/home/nick/Desktop/sculpture-site/components/SculpturesList.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;




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
      var sculptures = [];

      if (forSale) {
        sculptures = _sculpture_data_json__WEBPACK_IMPORTED_MODULE_7__.filter(function (sculpture) {
          return sculpture.price !== null;
        });
      } else {
        sculptures = _sculpture_data_json__WEBPACK_IMPORTED_MODULE_7__.filter(function (sculptures) {
          return sculptures.price === null;
        });
      }

      return __jsx("div", {
        className: "sculptures-list-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, sculptures.map(function (sculpture, i) {
        return __jsx(_SculptureThumbnail__WEBPACK_IMPORTED_MODULE_6__["default"], {
          key: i,
          imageName: sculpture.title,
          imageUrl: sculpture.images[0],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          },
          __self: this
        });
      }));
    }
  }]);

  return SculpturesList;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);


;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
false,

/***/ "./node_modules/core-js/library/fn/object/define-properties.js":
false,

/***/ "./node_modules/core-js/library/fn/object/get-own-property-descriptors.js":
false,

/***/ "./node_modules/core-js/library/fn/object/get-own-property-symbols.js":
false,

/***/ "./node_modules/core-js/library/modules/_create-property.js":
false,

/***/ "./node_modules/core-js/library/modules/_own-keys.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.object.define-properties.js":
false,

/***/ "./node_modules/core-js/library/modules/es7.object.get-own-property-descriptors.js":
false

})
//# sourceMappingURL=index.js.4e9ea310c2a8ef3b7b8f.hot-update.js.map