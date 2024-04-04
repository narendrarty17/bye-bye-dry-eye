"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/homepage/Banner.js":
/*!***************************************!*\
  !*** ./components/homepage/Banner.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _public_data_homepage_bannerList_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/public/data/homepage/bannerList.json */ \"./public/data/homepage/bannerList.json\");\n\nvar _s = $RefreshSig$();\n\n\nconst Banner = ()=>{\n    _s();\n    const [selectedBanner, setSelectedBanner] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Auto-swipe\n        let swipeInterval;\n        const handleSwipe = ()=>{\n            if (selectedBanner === _public_data_homepage_bannerList_json__WEBPACK_IMPORTED_MODULE_2__.length - 1) {\n                setSelectedBanner(0);\n            } else {\n                setSelectedBanner((prevBanner)=>prevBanner + 1);\n            }\n        };\n        swipeInterval = setInterval(handleSwipe, 4000);\n        return ()=>{\n            if (swipeInterval) {\n                clearInterval(swipeInterval);\n            }\n        };\n    }, [\n        selectedBanner\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full\",\n        children: _public_data_homepage_bannerList_json__WEBPACK_IMPORTED_MODULE_2__.filter((_, index)=>index === selectedBanner).map((banner)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                onClick: ()=>setSelectedBanner(banner.id),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    className: \"w-[100vw]\",\n                    src: \"banner.url+\".concat(_mobile, '+\".png\"')\n                }, void 0, false, {\n                    fileName: \"D:\\\\bye-bye-dry-eye_project\\\\components\\\\homepage\\\\Banner.js\",\n                    lineNumber: 34,\n                    columnNumber: 13\n                }, undefined)\n            }, banner.id, false, {\n                fileName: \"D:\\\\bye-bye-dry-eye_project\\\\components\\\\homepage\\\\Banner.js\",\n                lineNumber: 33,\n                columnNumber: 11\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"D:\\\\bye-bye-dry-eye_project\\\\components\\\\homepage\\\\Banner.js\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Banner, \"aImPBtKa8basYyxWlwKF1yuD6eU=\");\n_c = Banner;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Banner);\nvar _c;\n$RefreshReg$(_c, \"Banner\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2hvbWVwYWdlL0Jhbm5lci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFtRDtBQUNhO0FBRWhFLE1BQU1JLFNBQVM7O0lBQ2IsTUFBTSxDQUFDQyxnQkFBZ0JDLGtCQUFrQixHQUFHTCwrQ0FBUUEsQ0FBQztJQUVyREMsZ0RBQVNBLENBQUM7UUFDUixhQUFhO1FBQ2IsSUFBSUs7UUFFSixNQUFNQyxjQUFjO1lBQ2xCLElBQUlILG1CQUFtQkYseUVBQWlCLEdBQUcsR0FBRztnQkFDNUNHLGtCQUFrQjtZQUNwQixPQUFPO2dCQUNMQSxrQkFBa0IsQ0FBQ0ksYUFBZUEsYUFBYTtZQUNqRDtRQUNGO1FBRUFILGdCQUFnQkksWUFBWUgsYUFBYTtRQUV6QyxPQUFPO1lBQ0wsSUFBSUQsZUFBZTtnQkFDakJLLGNBQWNMO1lBQ2hCO1FBQ0Y7SUFDRixHQUFHO1FBQUNGO0tBQWU7SUFFbkIscUJBQ0UsOERBQUNRO1FBQUlDLFdBQVU7a0JBQ1pYLHlFQUNRLENBQUMsQ0FBQ2EsR0FBR0MsUUFBVUEsVUFBVVosZ0JBQy9CYSxHQUFHLENBQUMsQ0FBQ0MsdUJBQ0osOERBQUNOO2dCQUFvQk8sU0FBUyxJQUFNZCxrQkFBa0JhLE9BQU9FLEVBQUU7MEJBQzdELDRFQUFDQztvQkFBSVIsV0FBVTtvQkFBWVMsS0FBSyxjQUFzQixPQUFSQyxTQUFROzs7Ozs7ZUFEOUNMLE9BQU9FLEVBQUU7Ozs7Ozs7Ozs7QUFNN0I7R0FuQ01qQjtLQUFBQTtBQXFDTiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2hvbWVwYWdlL0Jhbm5lci5qcz9hYzljIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBiYW5uZXJMaXN0IGZyb20gXCJAL3B1YmxpYy9kYXRhL2hvbWVwYWdlL2Jhbm5lckxpc3QuanNvblwiO1xyXG5cclxuY29uc3QgQmFubmVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtzZWxlY3RlZEJhbm5lciwgc2V0U2VsZWN0ZWRCYW5uZXJdID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBBdXRvLXN3aXBlXHJcbiAgICBsZXQgc3dpcGVJbnRlcnZhbDtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTd2lwZSA9ICgpID0+IHtcclxuICAgICAgaWYgKHNlbGVjdGVkQmFubmVyID09PSBiYW5uZXJMaXN0Lmxlbmd0aCAtIDEpIHtcclxuICAgICAgICBzZXRTZWxlY3RlZEJhbm5lcigwKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZXRTZWxlY3RlZEJhbm5lcigocHJldkJhbm5lcikgPT4gcHJldkJhbm5lciArIDEpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHN3aXBlSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChoYW5kbGVTd2lwZSwgNDAwMCk7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgaWYgKHN3aXBlSW50ZXJ2YWwpIHtcclxuICAgICAgICBjbGVhckludGVydmFsKHN3aXBlSW50ZXJ2YWwpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH0sIFtzZWxlY3RlZEJhbm5lcl0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGxcIj5cclxuICAgICAge2Jhbm5lckxpc3RcclxuICAgICAgICAuZmlsdGVyKChfLCBpbmRleCkgPT4gaW5kZXggPT09IHNlbGVjdGVkQmFubmVyKVxyXG4gICAgICAgIC5tYXAoKGJhbm5lcikgPT4gKFxyXG4gICAgICAgICAgPGRpdiBrZXk9e2Jhbm5lci5pZH0gb25DbGljaz17KCkgPT4gc2V0U2VsZWN0ZWRCYW5uZXIoYmFubmVyLmlkKX0+XHJcbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwidy1bMTAwdnddXCIgc3JjPXtgYmFubmVyLnVybCske19tb2JpbGV9K1wiLnBuZ1wiYH0gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkpfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJhbm5lcjsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImJhbm5lckxpc3QiLCJCYW5uZXIiLCJzZWxlY3RlZEJhbm5lciIsInNldFNlbGVjdGVkQmFubmVyIiwic3dpcGVJbnRlcnZhbCIsImhhbmRsZVN3aXBlIiwibGVuZ3RoIiwicHJldkJhbm5lciIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsImRpdiIsImNsYXNzTmFtZSIsImZpbHRlciIsIl8iLCJpbmRleCIsIm1hcCIsImJhbm5lciIsIm9uQ2xpY2siLCJpZCIsImltZyIsInNyYyIsIl9tb2JpbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/homepage/Banner.js\n"));

/***/ })

});