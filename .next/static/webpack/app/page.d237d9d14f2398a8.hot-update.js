"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/lists/components/ListTile.js":
/*!******************************************!*\
  !*** ./app/lists/components/ListTile.js ***!
  \******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _context_UserContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/UserContext */ \"(app-pages-browser)/./app/context/UserContext.js\");\n/* harmony import */ var _context_LanguageContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/LanguageContext */ \"(app-pages-browser)/./app/context/LanguageContext.js\");\n/* harmony import */ var _LanguageSwitcher__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LanguageSwitcher */ \"(app-pages-browser)/./app/lists/components/LanguageSwitcher.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst ListTile = (param)=>{\n    let { list, onDelete, onArchive } = param;\n    _s();\n    const { currentUser } = (0,_context_UserContext__WEBPACK_IMPORTED_MODULE_2__.useUser)();\n    const isOwner = currentUser === list.owner;\n    const { translations } = (0,_context_LanguageContext__WEBPACK_IMPORTED_MODULE_3__.useLanguage)();\n    const handleDelete = ()=>{\n        if (confirm('Are you sure you want to delete the list \"'.concat(list.name, '\"?'))) {\n            onDelete(list.id);\n        }\n    };\n    const handleArchive = ()=>{\n        if (confirm(\"Are you sure you want to \".concat(list.archived ? 'unarchive' : 'archive', ' the list \"').concat(list.name, '\"?'))) {\n            onArchive(list.id);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-4 bg-gray-800 text-white rounded shadow-lg flex flex-col hover:shadow-2xl transition-shadow\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: \"text-lg font-bold mb-2\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    href: \"/lists/\".concat(list.id),\n                    className: \"hover:underline\",\n                    children: list.name\n                }, void 0, false, {\n                    fileName: \"/home/ljonak/ukoly/dom-c-kol-5-Lukynprogram/app/lists/components/ListTile.js\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/ljonak/ukoly/dom-c-kol-5-Lukynprogram/app/lists/components/ListTile.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    translations.owner,\n                    \": \",\n                    list.owner\n                ]\n            }, void 0, true, {\n                fileName: \"/home/ljonak/ukoly/dom-c-kol-5-Lukynprogram/app/lists/components/ListTile.js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    translations.member,\n                    \": \",\n                    list.members.join(', ')\n                ]\n            }, void 0, true, {\n                fileName: \"/home/ljonak/ukoly/dom-c-kol-5-Lukynprogram/app/lists/components/ListTile.js\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"mt-2 text-sm font-semibold \".concat(list.archived ? 'text-red-500' : 'text-green-500'),\n                children: list.archived ? 'Archived' : 'Active'\n            }, void 0, false, {\n                fileName: \"/home/ljonak/ukoly/dom-c-kol-5-Lukynprogram/app/lists/components/ListTile.js\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center mt-4 gap-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"flex-1 px-4 py-2 rounded \".concat(isOwner ? 'bg-yellow-500 hover:bg-yellow-600 text-white' : 'bg-gray-500 text-gray-300 cursor-not-allowed'),\n                        onClick: isOwner ? handleArchive : null,\n                        disabled: !isOwner,\n                        children: list.archived ? translations.unarchive : 'Archive'\n                    }, void 0, false, {\n                        fileName: \"/home/ljonak/ukoly/dom-c-kol-5-Lukynprogram/app/lists/components/ListTile.js\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"flex-1 px-4 py-2 rounded \".concat(isOwner ? 'bg-red-500 hover:bg-red-600 text-white' : 'bg-gray-500 text-gray-300 cursor-not-allowed'),\n                        onClick: isOwner ? handleDelete : null,\n                        disabled: !isOwner,\n                        children: translations.delete\n                    }, void 0, false, {\n                        fileName: \"/home/ljonak/ukoly/dom-c-kol-5-Lukynprogram/app/lists/components/ListTile.js\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/ljonak/ukoly/dom-c-kol-5-Lukynprogram/app/lists/components/ListTile.js\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/ljonak/ukoly/dom-c-kol-5-Lukynprogram/app/lists/components/ListTile.js\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ListTile, \"YZdoXIt06itbGsjMTubthwPPib0=\", false, function() {\n    return [\n        _context_UserContext__WEBPACK_IMPORTED_MODULE_2__.useUser,\n        _context_LanguageContext__WEBPACK_IMPORTED_MODULE_3__.useLanguage\n    ];\n});\n_c = ListTile;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ListTile);\nvar _c;\n$RefreshReg$(_c, \"ListTile\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9saXN0cy9jb21wb25lbnRzL0xpc3RUaWxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBRTZCO0FBQ3VCO0FBQ1E7QUFDVjtBQUVsRCxNQUFNSSxXQUFXO1FBQUMsRUFBRUMsSUFBSSxFQUFFQyxRQUFRLEVBQUVDLFNBQVMsRUFBRTs7SUFDN0MsTUFBTSxFQUFFQyxXQUFXLEVBQUUsR0FBR1AsNkRBQU9BO0lBQy9CLE1BQU1RLFVBQVVELGdCQUFnQkgsS0FBS0ssS0FBSztJQUMxQyxNQUFNLEVBQUVDLFlBQVksRUFBRSxHQUFHVCxxRUFBV0E7SUFFcEMsTUFBTVUsZUFBZTtRQUNuQixJQUFJQyxRQUFRLDZDQUF1RCxPQUFWUixLQUFLUyxJQUFJLEVBQUMsUUFBTTtZQUN2RVIsU0FBU0QsS0FBS1UsRUFBRTtRQUNsQjtJQUNGO0lBRUEsTUFBTUMsZ0JBQWdCO1FBQ3BCLElBQUlILFFBQVEsNEJBQWlGUixPQUFyREEsS0FBS1ksUUFBUSxHQUFHLGNBQWMsV0FBVSxlQUF1QixPQUFWWixLQUFLUyxJQUFJLEVBQUMsUUFBTTtZQUMzR1AsVUFBVUYsS0FBS1UsRUFBRTtRQUNuQjtJQUNGO0lBRUEscUJBQ0UsOERBQUNHO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQztnQkFBR0QsV0FBVTswQkFDWiw0RUFBQ25CLGlEQUFJQTtvQkFBQ3FCLE1BQU0sVUFBa0IsT0FBUmhCLEtBQUtVLEVBQUU7b0JBQUlJLFdBQVU7OEJBQ3hDZCxLQUFLUyxJQUFJOzs7Ozs7Ozs7OzswQkFHZCw4REFBQ1E7O29CQUFHWCxhQUFhRCxLQUFLO29CQUFDO29CQUFHTCxLQUFLSyxLQUFLOzs7Ozs7OzBCQUNwQyw4REFBQ1k7O29CQUFHWCxhQUFhWSxNQUFNO29CQUFDO29CQUFHbEIsS0FBS21CLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDOzs7Ozs7OzBCQUM3Qyw4REFBQ0g7Z0JBQUVILFdBQVcsOEJBQWdGLE9BQWxEZCxLQUFLWSxRQUFRLEdBQUcsaUJBQWlCOzBCQUMxRVosS0FBS1ksUUFBUSxHQUFHLGFBQWE7Ozs7OzswQkFFaEMsOERBQUNDO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ087d0JBQ0NQLFdBQVcsNEJBQXNJLE9BQTFHVixVQUFVLGlEQUFpRDt3QkFDbEdrQixTQUFTbEIsVUFBVU8sZ0JBQWdCO3dCQUNuQ1ksVUFBVSxDQUFDbkI7a0NBRVZKLEtBQUtZLFFBQVEsR0FBR04sYUFBYWtCLFNBQVMsR0FBRzs7Ozs7O2tDQUU1Qyw4REFBQ0g7d0JBQ0NQLFdBQVcsNEJBQWdJLE9BQXBHVixVQUFVLDJDQUEyQzt3QkFDNUZrQixTQUFTbEIsVUFBVUcsZUFBZTt3QkFDbENnQixVQUFVLENBQUNuQjtrQ0FFVkUsYUFBYW1CLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUs5QjtHQS9DTTFCOztRQUNvQkgseURBQU9BO1FBRU5DLGlFQUFXQTs7O0tBSGhDRTtBQWlETixpRUFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsiL2hvbWUvbGpvbmFrL3Vrb2x5L2RvbS1jLWtvbC01LUx1a3lucHJvZ3JhbS9hcHAvbGlzdHMvY29tcG9uZW50cy9MaXN0VGlsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5cbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyB1c2VVc2VyIH0gZnJvbSAnLi4vLi4vY29udGV4dC9Vc2VyQ29udGV4dCc7XG5pbXBvcnQgeyB1c2VMYW5ndWFnZSB9IGZyb20gJy4uLy4uL2NvbnRleHQvTGFuZ3VhZ2VDb250ZXh0JztcbmltcG9ydCBMYW5ndWFnZVN3aXRjaGVyIGZyb20gJy4vTGFuZ3VhZ2VTd2l0Y2hlcic7XG5cbmNvbnN0IExpc3RUaWxlID0gKHsgbGlzdCwgb25EZWxldGUsIG9uQXJjaGl2ZSB9KSA9PiB7XG4gIGNvbnN0IHsgY3VycmVudFVzZXIgfSA9IHVzZVVzZXIoKTtcbiAgY29uc3QgaXNPd25lciA9IGN1cnJlbnRVc2VyID09PSBsaXN0Lm93bmVyO1xuICBjb25zdCB7IHRyYW5zbGF0aW9ucyB9ID0gdXNlTGFuZ3VhZ2UoKTtcblxuICBjb25zdCBoYW5kbGVEZWxldGUgPSAoKSA9PiB7XG4gICAgaWYgKGNvbmZpcm0oYEFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhlIGxpc3QgXCIke2xpc3QubmFtZX1cIj9gKSkge1xuICAgICAgb25EZWxldGUobGlzdC5pZCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUFyY2hpdmUgPSAoKSA9PiB7XG4gICAgaWYgKGNvbmZpcm0oYEFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byAke2xpc3QuYXJjaGl2ZWQgPyAndW5hcmNoaXZlJyA6ICdhcmNoaXZlJ30gdGhlIGxpc3QgXCIke2xpc3QubmFtZX1cIj9gKSkge1xuICAgICAgb25BcmNoaXZlKGxpc3QuaWQpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicC00IGJnLWdyYXktODAwIHRleHQtd2hpdGUgcm91bmRlZCBzaGFkb3ctbGcgZmxleCBmbGV4LWNvbCBob3ZlcjpzaGFkb3ctMnhsIHRyYW5zaXRpb24tc2hhZG93XCI+XG4gICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LWJvbGQgbWItMlwiPlxuICAgICAgICA8TGluayBocmVmPXtgL2xpc3RzLyR7bGlzdC5pZH1gfSBjbGFzc05hbWU9XCJob3Zlcjp1bmRlcmxpbmVcIj5cbiAgICAgICAgICB7bGlzdC5uYW1lfVxuICAgICAgICA8L0xpbms+XG4gICAgICA8L2gzPlxuICAgICAgPHA+e3RyYW5zbGF0aW9ucy5vd25lcn06IHtsaXN0Lm93bmVyfTwvcD5cbiAgICAgIDxwPnt0cmFuc2xhdGlvbnMubWVtYmVyfToge2xpc3QubWVtYmVycy5qb2luKCcsICcpfTwvcD5cbiAgICAgIDxwIGNsYXNzTmFtZT17YG10LTIgdGV4dC1zbSBmb250LXNlbWlib2xkICR7bGlzdC5hcmNoaXZlZCA/ICd0ZXh0LXJlZC01MDAnIDogJ3RleHQtZ3JlZW4tNTAwJ31gfT5cbiAgICAgICAge2xpc3QuYXJjaGl2ZWQgPyAnQXJjaGl2ZWQnIDogJ0FjdGl2ZSd9XG4gICAgICA8L3A+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgbXQtNCBnYXAtNFwiPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPXtgZmxleC0xIHB4LTQgcHktMiByb3VuZGVkICR7aXNPd25lciA/ICdiZy15ZWxsb3ctNTAwIGhvdmVyOmJnLXllbGxvdy02MDAgdGV4dC13aGl0ZScgOiAnYmctZ3JheS01MDAgdGV4dC1ncmF5LTMwMCBjdXJzb3Itbm90LWFsbG93ZWQnfWB9XG4gICAgICAgICAgb25DbGljaz17aXNPd25lciA/IGhhbmRsZUFyY2hpdmUgOiBudWxsfVxuICAgICAgICAgIGRpc2FibGVkPXshaXNPd25lcn1cbiAgICAgICAgPlxuICAgICAgICAgIHtsaXN0LmFyY2hpdmVkID8gdHJhbnNsYXRpb25zLnVuYXJjaGl2ZSA6ICdBcmNoaXZlJ31cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBjbGFzc05hbWU9e2BmbGV4LTEgcHgtNCBweS0yIHJvdW5kZWQgJHtpc093bmVyID8gJ2JnLXJlZC01MDAgaG92ZXI6YmctcmVkLTYwMCB0ZXh0LXdoaXRlJyA6ICdiZy1ncmF5LTUwMCB0ZXh0LWdyYXktMzAwIGN1cnNvci1ub3QtYWxsb3dlZCd9YH1cbiAgICAgICAgICBvbkNsaWNrPXtpc093bmVyID8gaGFuZGxlRGVsZXRlIDogbnVsbH1cbiAgICAgICAgICBkaXNhYmxlZD17IWlzT3duZXJ9XG4gICAgICAgID5cbiAgICAgICAgICB7dHJhbnNsYXRpb25zLmRlbGV0ZX1cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExpc3RUaWxlO1xuIl0sIm5hbWVzIjpbIkxpbmsiLCJ1c2VVc2VyIiwidXNlTGFuZ3VhZ2UiLCJMYW5ndWFnZVN3aXRjaGVyIiwiTGlzdFRpbGUiLCJsaXN0Iiwib25EZWxldGUiLCJvbkFyY2hpdmUiLCJjdXJyZW50VXNlciIsImlzT3duZXIiLCJvd25lciIsInRyYW5zbGF0aW9ucyIsImhhbmRsZURlbGV0ZSIsImNvbmZpcm0iLCJuYW1lIiwiaWQiLCJoYW5kbGVBcmNoaXZlIiwiYXJjaGl2ZWQiLCJkaXYiLCJjbGFzc05hbWUiLCJoMyIsImhyZWYiLCJwIiwibWVtYmVyIiwibWVtYmVycyIsImpvaW4iLCJidXR0b24iLCJvbkNsaWNrIiwiZGlzYWJsZWQiLCJ1bmFyY2hpdmUiLCJkZWxldGUiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/lists/components/ListTile.js\n"));

/***/ })

});