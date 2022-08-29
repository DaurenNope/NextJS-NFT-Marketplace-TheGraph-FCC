"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/graphExample";
exports.ids = ["pages/graphExample"];
exports.modules = {

/***/ "./pages/graphExample.js":
/*!*******************************!*\
  !*** ./pages/graphExample.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ GraphExample)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst GET_ACTIVE_ITEMS = _apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql`\r\n    {\r\n        activeItems(first: 5, where: { buyer: \"0x0000000000000000000000000000000000000000\" }) {\r\n            id\r\n            buyer\r\n            seller\r\n            nftAddress\r\n            tokenId\r\n            price\r\n        }\r\n    }\r\n`;\nfunction GraphExample() {\n    const { loading , error , data  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useQuery)(GET_ACTIVE_ITEMS);\n    console.log(data);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"hi\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\zxcpr\\\\Development\\\\nextjs-nft-marketplace-thegraph-fcc\\\\nextjs-nft-marketplace-fcc\\\\pages\\\\graphExample.js\",\n        lineNumber: 19,\n        columnNumber: 12\n    }, this);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ncmFwaEV4YW1wbGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUE4QztBQUU5QyxNQUFNRSxnQkFBZ0IsR0FBR0QsK0NBQUcsQ0FBQztBQWE3QjtJQUNJLE1BQU0sRUFBRUcsT0FBTyxHQUFFQyxLQUFLLEdBQUVDLElBQUksR0FBRSxHQUFHTixRQUFRLENBQUNFLGdCQUFnQixDQUFDO0lBQzNESyxPQUFPLENBQUNDLEdBQUc7SUFDWDtrQkFBWTs7Ozs7O0NBQ2YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtbmZ0LW1hcmtldHBsYWNlLWZjYy8uL3BhZ2VzL2dyYXBoRXhhbXBsZS5qcz85NGY2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVF1ZXJ5LCBncWwgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIlxyXG5cclxuY29uc3QgR0VUX0FDVElWRV9JVEVNUyA9IGdxbGBcclxuICAgIHtcclxuICAgICAgICBhY3RpdmVJdGVtcyhmaXJzdDogNSwgd2hlcmU6IHsgYnV5ZXI6IFwiMHgwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwXCIgfSkge1xyXG4gICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICBidXllclxyXG4gICAgICAgICAgICBzZWxsZXJcclxuICAgICAgICAgICAgbmZ0QWRkcmVzc1xyXG4gICAgICAgICAgICB0b2tlbklkXHJcbiAgICAgICAgICAgIHByaWNlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5gXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHcmFwaEV4YW1wbGUoKSB7XHJcbiAgICBjb25zdCB7IGxvYWRpbmcsIGVycm9yLCBkYXRhIH0gPSB1c2VRdWVyeShHRVRfQUNUSVZFX0lURU1TKVxyXG4gICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgIHJldHVybiA8ZGl2PmhpPC9kaXY+XHJcbn0iXSwibmFtZXMiOlsidXNlUXVlcnkiLCJncWwiLCJHRVRfQUNUSVZFX0lURU1TIiwiR3JhcGhFeGFtcGxlIiwibG9hZGluZyIsImVycm9yIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/graphExample.js\n");

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@apollo/client");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/graphExample.js"));
module.exports = __webpack_exports__;

})();