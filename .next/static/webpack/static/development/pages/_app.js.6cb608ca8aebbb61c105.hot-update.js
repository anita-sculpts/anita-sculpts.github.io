webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./styles/nav.css":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??__nextjs_postcss!./styles/nav.css ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, "/*\nCredits: https://codepen.io/erikterwan/pen/EVzeRP\nMIT License\nCopyright 2020 Anita Sculpts\nPermission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the \"Software\"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\nThe above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n*/\n\n #menuToggle\n {\n   display: block;\n   position: absolute;\n   top: 12px;\n   left: 12px;\n   \n   z-index: 1;\n   \n   -webkit-user-select: none;\n   \n      -moz-user-select: none;\n   \n       -ms-user-select: none;\n   \n           user-select: none;\n }\n \n #menuToggle a\n {\n   text-decoration: none;\n   color: #999;\n   \n   -webkit-transition: color 0.3s ease;\n   \n   transition: color 0.3s ease;\n }\n \n #menuToggle a:hover\n {\n   color: white;\n }\n \n \n #menuToggle input\n {\n   display: block;\n   width: 40px;\n   height: 32px;\n   position: absolute;\n   top: -7px;\n   left: -5px;\n   \n   cursor: pointer;\n   \n   opacity: 0; /* hide this */\n   z-index: 2; /* and place it over the hamburger */\n   \n   -webkit-touch-callout: none;\n }\n \n /*\n  * Create hamburger\n  */\n #menuToggle span\n {\n   display: block;\n   width: 33px;\n   height: 4px;\n   margin-bottom: 5px;\n   position: relative;\n   \n   background: #333;\n   border-radius: 3px;\n   \n   z-index: 1;\n   \n   -webkit-transform-origin: 4px 0px;\n   \n           transform-origin: 4px 0px;\n   \n   -webkit-transition: background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),\n               opacity 0.55s ease,\n               -webkit-transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);\n   \n   transition: background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),\n               opacity 0.55s ease,\n               -webkit-transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);\n   \n   transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),\n               background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),\n               opacity 0.55s ease;\n   \n   transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),\n               background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),\n               opacity 0.55s ease,\n               -webkit-transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);\n }\n\n #menuToggle input:hover ~ span {\n   background: white;\n }\n \n #menuToggle span:first-child\n {\n   -webkit-transform-origin: 0% 0%;\n           transform-origin: 0% 0%;\n }\n \n #menuToggle span:nth-last-child(2)\n {\n   -webkit-transform-origin: 0% 100%;\n           transform-origin: 0% 100%;\n }\n \n /* \n  * Transform all the slices of hamburger\n  * into a crossmark.\n  */\n #menuToggle input:checked ~ span\n {\n   opacity: 1;\n   -webkit-transform: rotate(45deg) translate(-2px, -1px);\n           transform: rotate(45deg) translate(-2px, -1px);\n   background: #7c7c7c;\n }\n\n #menuToggle input:checked:hover ~ span\n {\n   background: white;\n }\n \n #menuToggle input:checked ~ span:nth-last-child(3)\n {\n   opacity: 0;\n   -webkit-transform: rotate(0deg) scale(0.2, 0.2);\n           transform: rotate(0deg) scale(0.2, 0.2);\n }\n \n\n #menuToggle input:checked ~ span:nth-last-child(2)\n {\n   -webkit-transform: rotate(-45deg) translate(0, -1px);\n           transform: rotate(-45deg) translate(0, -1px);\n }\n \n #menu\n {\n   position: absolute;\n   width: 200px;\n   height: 95vh;\n   margin: -100px 0 0 -50px;\n   padding: 50px;\n   padding-top: 125px;\n   \n   background: #333;\n   list-style-type: none;\n   -webkit-font-smoothing: antialiased;\n   /* to stop flickering of text in safari */\n   \n   -webkit-transform-origin: 0% 0%;\n   \n           transform-origin: 0% 0%;\n   -webkit-transform: translate(-100%, 0);\n           transform: translate(-100%, 0);\n   \n   -webkit-transition: -webkit-transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);\n   \n   transition: -webkit-transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);\n   \n   transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);\n   \n   transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0), -webkit-transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);\n }\n \n #menu li\n {\n   padding: 10px 0;\n   font-size: 22px;\n }\n \n /*\n  * Slide in from left\n  */\n #menuToggle input:checked ~ ul\n {\n   -webkit-transform: none;\n           transform: none;\n }", "",{"version":3,"sources":["nav.css"],"names":[],"mappings":"AAAA;;;;;;;CAOC;;CAEA;;GAEE,cAAc;GACd,kBAAkB;GAClB,SAAS;GACT,UAAU;;GAEV,UAAU;;GAEV,yBAAiB;;MAAjB,sBAAiB;;OAAjB,qBAAiB;;WAAjB,iBAAiB;CACnB;;CAEA;;GAEE,qBAAqB;GACrB,WAAW;;GAEX,mCAA2B;;GAA3B,2BAA2B;CAC7B;;CAEA;;GAEE,YAAY;CACd;;;CAGA;;GAEE,cAAc;GACd,WAAW;GACX,YAAY;GACZ,kBAAkB;GAClB,SAAS;GACT,UAAU;;GAEV,eAAe;;GAEf,UAAU,EAAE,cAAc;GAC1B,UAAU,EAAE,oCAAoC;;GAEhD,2BAA2B;CAC7B;;CAEA;;GAEE;CACF;;GAEE,cAAc;GACd,WAAW;GACX,WAAW;GACX,kBAAkB;GAClB,kBAAkB;;GAElB,gBAAgB;GAChB,kBAAkB;;GAElB,UAAU;;GAEV,iCAAyB;;WAAzB,yBAAyB;;GAEzB;;qEAE8B;;GAF9B;;qEAE8B;;GAF9B;;iCAE8B;;GAF9B;;;qEAE8B;CAChC;;CAEA;GACE,iBAAiB;CACnB;;CAEA;;GAEE,+BAAuB;WAAvB,uBAAuB;CACzB;;CAEA;;GAEE,iCAAyB;WAAzB,yBAAyB;CAC3B;;CAEA;;;GAGE;CACF;;GAEE,UAAU;GACV,sDAA8C;WAA9C,8CAA8C;GAC9C,mBAAmB;CACrB;;CAEA;;GAEE,iBAAiB;CACnB;;CAEA;;GAEE,UAAU;GACV,+CAAuC;WAAvC,uCAAuC;CACzC;;;CAGA;;GAEE,oDAA4C;WAA5C,4CAA4C;CAC9C;;CAEA;;GAEE,kBAAkB;GAClB,YAAY;GACZ,YAAY;GACZ,wBAAwB;GACxB,aAAa;GACb,kBAAkB;;GAElB,gBAAgB;GAChB,qBAAqB;GACrB,mCAAmC;GACnC,yCAAyC;;GAEzC,+BAAuB;;WAAvB,uBAAuB;GACvB,sCAA8B;WAA9B,8BAA8B;;GAE9B,0EAA0D;;GAA1D,kEAA0D;;GAA1D,0DAA0D;;GAA1D,kHAA0D;CAC5D;;CAEA;;GAEE,eAAe;GACf,eAAe;CACjB;;CAEA;;GAEE;CACF;;GAEE,uBAAe;WAAf,eAAe;CACjB","file":"nav.css","sourcesContent":["/*\nCredits: https://codepen.io/erikterwan/pen/EVzeRP\nMIT License\nCopyright 2020 Anita Sculpts\nPermission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the \"Software\"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\nThe above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n*/\n\n #menuToggle\n {\n   display: block;\n   position: absolute;\n   top: 12px;\n   left: 12px;\n   \n   z-index: 1;\n   \n   user-select: none;\n }\n \n #menuToggle a\n {\n   text-decoration: none;\n   color: #999;\n   \n   transition: color 0.3s ease;\n }\n \n #menuToggle a:hover\n {\n   color: white;\n }\n \n \n #menuToggle input\n {\n   display: block;\n   width: 40px;\n   height: 32px;\n   position: absolute;\n   top: -7px;\n   left: -5px;\n   \n   cursor: pointer;\n   \n   opacity: 0; /* hide this */\n   z-index: 2; /* and place it over the hamburger */\n   \n   -webkit-touch-callout: none;\n }\n \n /*\n  * Create hamburger\n  */\n #menuToggle span\n {\n   display: block;\n   width: 33px;\n   height: 4px;\n   margin-bottom: 5px;\n   position: relative;\n   \n   background: #333;\n   border-radius: 3px;\n   \n   z-index: 1;\n   \n   transform-origin: 4px 0px;\n   \n   transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),\n               background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),\n               opacity 0.55s ease;\n }\n\n #menuToggle input:hover ~ span {\n   background: white;\n }\n \n #menuToggle span:first-child\n {\n   transform-origin: 0% 0%;\n }\n \n #menuToggle span:nth-last-child(2)\n {\n   transform-origin: 0% 100%;\n }\n \n /* \n  * Transform all the slices of hamburger\n  * into a crossmark.\n  */\n #menuToggle input:checked ~ span\n {\n   opacity: 1;\n   transform: rotate(45deg) translate(-2px, -1px);\n   background: #7c7c7c;\n }\n\n #menuToggle input:checked:hover ~ span\n {\n   background: white;\n }\n \n #menuToggle input:checked ~ span:nth-last-child(3)\n {\n   opacity: 0;\n   transform: rotate(0deg) scale(0.2, 0.2);\n }\n \n\n #menuToggle input:checked ~ span:nth-last-child(2)\n {\n   transform: rotate(-45deg) translate(0, -1px);\n }\n \n #menu\n {\n   position: absolute;\n   width: 200px;\n   height: 95vh;\n   margin: -100px 0 0 -50px;\n   padding: 50px;\n   padding-top: 125px;\n   \n   background: #333;\n   list-style-type: none;\n   -webkit-font-smoothing: antialiased;\n   /* to stop flickering of text in safari */\n   \n   transform-origin: 0% 0%;\n   transform: translate(-100%, 0);\n   \n   transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);\n }\n \n #menu li\n {\n   padding: 10px 0;\n   font-size: 22px;\n }\n \n /*\n  * Slide in from left\n  */\n #menuToggle input:checked ~ ul\n {\n   transform: none;\n }"]}]);


/***/ })

})
//# sourceMappingURL=_app.js.6cb608ca8aebbb61c105.hot-update.js.map