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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"background\": \"Home_background__I_nYJ\",\n\t\"homepage\": \"Home_homepage__o_ei3\",\n\t\"title\": \"Home_title__T09hD\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpby8uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3M/NzEyNyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJiYWNrZ3JvdW5kXCI6IFwiSG9tZV9iYWNrZ3JvdW5kX19JX25ZSlwiLFxuXHRcImhvbWVwYWdlXCI6IFwiSG9tZV9ob21lcGFnZV9fb19laTNcIixcblx0XCJ0aXRsZVwiOiBcIkhvbWVfdGl0bGVfX1QwOWhEXCJcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./styles/Home.module.css\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n// import NavBar from '..components/NavBar';\n//accepts time to delay a function in ms\nfunction delay(time) {\n    return new Promise((resolve)=>setTimeout(resolve, time));\n}\nconst Home = ()=>{\n    const welcomes = [\n        \"Welcome\",\n        \"欢迎\",\n        \"bienvenidas\",\n        \"willkomen\"\n    ];\n    const { 0: welcomeMessage , 1: setWelcomeMessage  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"Welcome\");\n    for(var i = 0; i < welcomes.length; i++){\n        setWelcomeMessage(welcomes[i]);\n        delay(1000);\n        if (i == welcomes.length - 1) {\n            i = -1;\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Akash's Portfolio\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\My Projects\\\\portfolio\\\\pages\\\\index.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Akash Atapattu Professional Portfolio\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\My Projects\\\\portfolio\\\\pages\\\\index.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\My Projects\\\\portfolio\\\\pages\\\\index.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\My Projects\\\\portfolio\\\\pages\\\\index.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().background),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().homepage),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().title),\n                            children: welcomeMessage\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\My Projects\\\\portfolio\\\\pages\\\\index.tsx\",\n                            lineNumber: 43,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\My Projects\\\\portfolio\\\\pages\\\\index.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\My Projects\\\\portfolio\\\\pages\\\\index.tsx\",\n                    lineNumber: 41,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\My Projects\\\\portfolio\\\\pages\\\\index.tsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\My Projects\\\\portfolio\\\\pages\\\\index.tsx\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDNEI7QUFFa0I7QUFFZjtBQUMvQiw0Q0FBNEM7QUFFNUMsd0NBQXdDO0FBRXhDLFNBQVNHLEtBQUssQ0FBQ0MsSUFBWSxFQUFDO0lBQzFCLE9BQU8sSUFBSUMsT0FBTyxDQUFDQyxDQUFBQSxPQUFPLEdBQUlDLFVBQVUsQ0FBQ0QsT0FBTyxFQUFFRixJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQzNELENBQUM7QUFFRCxNQUFNSSxJQUFJLEdBQWEsSUFBTTtJQUMzQixNQUFNQyxRQUFRLEdBQUc7UUFDZixTQUFTO1FBQ1QsSUFBSTtRQUNKLGFBQWE7UUFDYixXQUFXO0tBQ1o7SUFDRCxNQUFNLEtBQUNDLGNBQWMsTUFBRUMsaUJBQWlCLE1BQUlULCtDQUFRLENBQUMsU0FBUyxDQUFDO0lBRS9ELElBQUksSUFBSVUsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHSCxRQUFRLENBQUNJLE1BQU0sRUFBRUQsQ0FBQyxFQUFFLENBQUM7UUFDdENELGlCQUFpQixDQUFDRixRQUFRLENBQUNHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDL0JULEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNaLElBQUdTLENBQUMsSUFBSUgsUUFBUSxDQUFDSSxNQUFNLEdBQUcsQ0FBQyxFQUFDO1lBQzFCRCxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDVCxDQUFDO0lBQ0gsQ0FBQztJQUVELHFCQUNFLDhEQUFDRSxLQUFHO1FBQUNDLFNBQVMsRUFBRWQsMEVBQWdCOzswQkFDOUIsOERBQUNELGtEQUFJOztrQ0FDSCw4REFBQ2lCLE9BQUs7a0NBQUMsbUJBQWlCOzs7OztpQ0FBUTtrQ0FDaEMsOERBQUNDLE1BQUk7d0JBQUNDLElBQUksRUFBQyxhQUFhO3dCQUFDQyxPQUFPLEVBQUMsdUNBQXVDOzs7OztpQ0FBRztrQ0FDM0UsOERBQUNDLE1BQUk7d0JBQUNDLEdBQUcsRUFBQyxNQUFNO3dCQUFDQyxJQUFJLEVBQUMsY0FBYzs7Ozs7aUNBQUc7Ozs7Ozt5QkFDbEM7MEJBRVAsOERBQUNDLE1BQUk7MEJBQ0gsNEVBQUNWLEtBQUc7b0JBQUNDLFNBQVMsRUFBRWQsMkVBQWlCOzhCQUMvQiw0RUFBQ2EsS0FBRzt3QkFBQ0MsU0FBUyxFQUFFZCx5RUFBZTtrQ0FDN0IsNEVBQUMwQixHQUFDOzRCQUFDWixTQUFTLEVBQUVkLHNFQUFZO3NDQUFHUyxjQUFjOzs7OztxQ0FBSzs7Ozs7aUNBQzVDOzs7Ozs2QkFDRjs7Ozs7eUJBQ0Q7Ozs7OztpQkFFSCxDQUNQO0FBQ0gsQ0FBQztBQUVELGlFQUFlRixJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG4vLyBpbXBvcnQgTmF2QmFyIGZyb20gJy4uY29tcG9uZW50cy9OYXZCYXInO1xyXG5cclxuLy9hY2NlcHRzIHRpbWUgdG8gZGVsYXkgYSBmdW5jdGlvbiBpbiBtc1xyXG5cclxuZnVuY3Rpb24gZGVsYXkodGltZTogbnVtYmVyKXtcclxuICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIHRpbWUpKTtcclxufVxyXG5cclxuY29uc3QgSG9tZTogTmV4dFBhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3Qgd2VsY29tZXMgPSBbXHJcbiAgICBcIldlbGNvbWVcIixcclxuICAgIFwi5qyi6L+OXCIsXHJcbiAgICBcImJpZW52ZW5pZGFzXCIsXHJcbiAgICBcIndpbGxrb21lblwiXHJcbiAgXVxyXG4gIGNvbnN0IFt3ZWxjb21lTWVzc2FnZSwgc2V0V2VsY29tZU1lc3NhZ2VdID0gdXNlU3RhdGUoXCJXZWxjb21lXCIpO1xyXG5cclxuICBmb3IodmFyIGkgPSAwOyBpIDwgd2VsY29tZXMubGVuZ3RoOyBpKyspe1xyXG4gICAgc2V0V2VsY29tZU1lc3NhZ2Uod2VsY29tZXNbaV0pO1xyXG4gICAgZGVsYXkoMTAwMCk7XHJcbiAgICBpZihpID09IHdlbGNvbWVzLmxlbmd0aCAtIDEpe1xyXG4gICAgICBpID0gLTE7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+QWthc2gncyBQb3J0Zm9saW88L3RpdGxlPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJBa2FzaCBBdGFwYXR0dSBQcm9mZXNzaW9uYWwgUG9ydGZvbGlvXCIgLz5cclxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuXHJcbiAgICAgIDxtYWluPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmFja2dyb3VuZH0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhvbWVwYWdlfT5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9Pnt3ZWxjb21lTWVzc2FnZX08L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9tYWluPlxyXG5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZVxyXG4iXSwibmFtZXMiOlsiSGVhZCIsInN0eWxlcyIsInVzZVN0YXRlIiwiZGVsYXkiLCJ0aW1lIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0IiwiSG9tZSIsIndlbGNvbWVzIiwid2VsY29tZU1lc3NhZ2UiLCJzZXRXZWxjb21lTWVzc2FnZSIsImkiLCJsZW5ndGgiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIiwibWFpbiIsImJhY2tncm91bmQiLCJob21lcGFnZSIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();