"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/lists/[id]/page",{

/***/ "(app-pages-browser)/./app/context/LanguageContext.js":
/*!****************************************!*\
  !*** ./app/context/LanguageContext.js ***!
  \****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   LanguageProvider: () => (/* binding */ LanguageProvider),\n/* harmony export */   useLanguage: () => (/* binding */ useLanguage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ LanguageProvider,useLanguage auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\nconst LanguageContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst translations = {\n    en: {\n        permissionsDenied: 'Permissions Denied',\n        saveName: 'Save Name',\n        discardChanges: 'Discard Changes',\n        editName: 'Edit Name',\n        addItem: 'Add Item',\n        itemNamePlaceholder: 'Item Name',\n        itemQuantityPlaceholder: 'Quantity',\n        editItem: 'Edit Item',\n        markAsCompleted: 'Mark as Completed',\n        deleteItem: 'Delete Item',\n        unselectAll: 'Unselect All',\n        cancel: 'Cancel',\n        save: 'Save',\n        addNewMember: 'Add New Member',\n        addMember: 'Add Member',\n        removeMember: 'Remove',\n        leaveList: 'Leave List',\n        members: 'Members',\n        ownerCannotRemove: 'Owner cannot remove themselves',\n        quantity: \"Quantity\",\n        productName: \"Product Name\",\n        resolved: \"Resolved\",\n        showAllResolved: \"Show all resolved\",\n        showOnlyUnresolved: \"Show only unresolved\"\n    },\n    cs: {\n        permissionsDenied: 'Přístup odepřen',\n        saveName: 'Uložit jméno',\n        discardChanges: 'Zrušit změny',\n        editName: 'Upravit jméno',\n        addItem: 'Přidat položku',\n        itemNamePlaceholder: 'Název položky',\n        itemQuantityPlaceholder: 'Množství',\n        editItem: 'Upravit položku',\n        markAsCompleted: 'Označit jako dokončené',\n        deleteItem: 'Smazat položku',\n        unselectAll: 'Zrušit výběr',\n        cancel: 'Zrušit',\n        save: 'Uložit',\n        addNewMember: 'Přidat nového člena',\n        addMember: 'Přidat člena',\n        removeMember: 'Odstranit',\n        leaveList: 'Opustit seznam',\n        members: 'Členové',\n        ownerCannotRemove: 'Vlastník se nemůže odstranit',\n        quantity: \"Množství\",\n        productName: \"Název produktu\",\n        resolved: \"Vyřešeno\",\n        showAllResolved: \"Zobrazit vyřešené\",\n        showOnlyUnresolved: \"Zobrazit nevyřešené\"\n    }\n};\nconst LanguageProvider = (param)=>{\n    let { children } = param;\n    _s();\n    const [language, setLanguage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('en'); // Default language is English\n    const switchLanguage = (lang)=>setLanguage(lang);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LanguageContext.Provider, {\n        value: {\n            language,\n            switchLanguage,\n            translations: translations[language]\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/home/ljonak/ukoly/dom-c-kol-5-Lukynprogram/app/context/LanguageContext.js\",\n        lineNumber: 68,\n        columnNumber: 5\n    }, undefined);\n};\n_s(LanguageProvider, \"fVUtOCD1O58HgvMjnE8lxRQa0QA=\");\n_c = LanguageProvider;\nconst useLanguage = ()=>{\n    _s1();\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(LanguageContext);\n};\n_s1(useLanguage, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nvar _c;\n$RefreshReg$(_c, \"LanguageProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb250ZXh0L0xhbmd1YWdlQ29udGV4dC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRTREO0FBRTVELE1BQU1HLGdDQUFrQkgsb0RBQWFBO0FBRXJDLE1BQU1JLGVBQWU7SUFDbkJDLElBQUk7UUFDRkMsbUJBQW1CO1FBQ25CQyxVQUFVO1FBQ1ZDLGdCQUFnQjtRQUNoQkMsVUFBVTtRQUNWQyxTQUFTO1FBQ1RDLHFCQUFxQjtRQUNyQkMseUJBQXlCO1FBQ3pCQyxVQUFVO1FBQ1ZDLGlCQUFpQjtRQUNqQkMsWUFBWTtRQUNaQyxhQUFhO1FBQ2JDLFFBQVE7UUFDUkMsTUFBTTtRQUNOQyxjQUFjO1FBQ2RDLFdBQVc7UUFDWEMsY0FBYztRQUNkQyxXQUFXO1FBQ1hDLFNBQVM7UUFDVEMsbUJBQW1CO1FBQ25CQyxVQUFVO1FBQ1ZDLGFBQWE7UUFDYkMsVUFBVTtRQUNWQyxpQkFBaUI7UUFDakJDLG9CQUFvQjtJQUN0QjtJQUNBQyxJQUFJO1FBQ0Z4QixtQkFBbUI7UUFDbkJDLFVBQVU7UUFDVkMsZ0JBQWdCO1FBQ2hCQyxVQUFVO1FBQ1ZDLFNBQVM7UUFDVEMscUJBQXFCO1FBQ3JCQyx5QkFBeUI7UUFDekJDLFVBQVU7UUFDVkMsaUJBQWlCO1FBQ2pCQyxZQUFZO1FBQ1pDLGFBQWE7UUFDYkMsUUFBUTtRQUNSQyxNQUFNO1FBQ05DLGNBQWM7UUFDZEMsV0FBVztRQUNYQyxjQUFjO1FBQ2RDLFdBQVc7UUFDWEMsU0FBUztRQUNUQyxtQkFBbUI7UUFDbkJDLFVBQVU7UUFDVkMsYUFBYTtRQUNiQyxVQUFVO1FBQ1ZDLGlCQUFpQjtRQUNqQkMsb0JBQW9CO0lBQ3RCO0FBQ0Y7QUFFTyxNQUFNRSxtQkFBbUI7UUFBQyxFQUFFQyxRQUFRLEVBQUU7O0lBQzNDLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHaEMsK0NBQVFBLENBQUMsT0FBTyw4QkFBOEI7SUFFOUUsTUFBTWlDLGlCQUFpQixDQUFDQyxPQUFTRixZQUFZRTtJQUU3QyxxQkFDRSw4REFBQ2pDLGdCQUFnQmtDLFFBQVE7UUFBQ0MsT0FBTztZQUFFTDtZQUFVRTtZQUFnQi9CLGNBQWNBLFlBQVksQ0FBQzZCLFNBQVM7UUFBQztrQkFDL0ZEOzs7Ozs7QUFHUCxFQUFFO0dBVldEO0tBQUFBO0FBWU4sTUFBTVEsY0FBYzs7SUFBTXRDLE9BQUFBLGlEQUFVQSxDQUFDRTtBQUFlLEVBQUU7SUFBaERvQyIsInNvdXJjZXMiOlsiL2hvbWUvbGpvbmFrL3Vrb2x5L2RvbS1jLWtvbC01LUx1a3lucHJvZ3JhbS9hcHAvY29udGV4dC9MYW5ndWFnZUNvbnRleHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuXG5pbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgTGFuZ3VhZ2VDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xuXG5jb25zdCB0cmFuc2xhdGlvbnMgPSB7XG4gIGVuOiB7XG4gICAgcGVybWlzc2lvbnNEZW5pZWQ6ICdQZXJtaXNzaW9ucyBEZW5pZWQnLFxuICAgIHNhdmVOYW1lOiAnU2F2ZSBOYW1lJyxcbiAgICBkaXNjYXJkQ2hhbmdlczogJ0Rpc2NhcmQgQ2hhbmdlcycsXG4gICAgZWRpdE5hbWU6ICdFZGl0IE5hbWUnLFxuICAgIGFkZEl0ZW06ICdBZGQgSXRlbScsXG4gICAgaXRlbU5hbWVQbGFjZWhvbGRlcjogJ0l0ZW0gTmFtZScsXG4gICAgaXRlbVF1YW50aXR5UGxhY2Vob2xkZXI6ICdRdWFudGl0eScsXG4gICAgZWRpdEl0ZW06ICdFZGl0IEl0ZW0nLFxuICAgIG1hcmtBc0NvbXBsZXRlZDogJ01hcmsgYXMgQ29tcGxldGVkJyxcbiAgICBkZWxldGVJdGVtOiAnRGVsZXRlIEl0ZW0nLFxuICAgIHVuc2VsZWN0QWxsOiAnVW5zZWxlY3QgQWxsJyxcbiAgICBjYW5jZWw6ICdDYW5jZWwnLFxuICAgIHNhdmU6ICdTYXZlJyxcbiAgICBhZGROZXdNZW1iZXI6ICdBZGQgTmV3IE1lbWJlcicsXG4gICAgYWRkTWVtYmVyOiAnQWRkIE1lbWJlcicsXG4gICAgcmVtb3ZlTWVtYmVyOiAnUmVtb3ZlJyxcbiAgICBsZWF2ZUxpc3Q6ICdMZWF2ZSBMaXN0JyxcbiAgICBtZW1iZXJzOiAnTWVtYmVycycsXG4gICAgb3duZXJDYW5ub3RSZW1vdmU6ICdPd25lciBjYW5ub3QgcmVtb3ZlIHRoZW1zZWx2ZXMnLFxuICAgIHF1YW50aXR5OiBcIlF1YW50aXR5XCIsXG4gICAgcHJvZHVjdE5hbWU6IFwiUHJvZHVjdCBOYW1lXCIsXG4gICAgcmVzb2x2ZWQ6IFwiUmVzb2x2ZWRcIixcbiAgICBzaG93QWxsUmVzb2x2ZWQ6IFwiU2hvdyBhbGwgcmVzb2x2ZWRcIixcbiAgICBzaG93T25seVVucmVzb2x2ZWQ6IFwiU2hvdyBvbmx5IHVucmVzb2x2ZWRcIixcbiAgfSxcbiAgY3M6IHtcbiAgICBwZXJtaXNzaW9uc0RlbmllZDogJ1DFmcOtc3R1cCBvZGVwxZllbicsXG4gICAgc2F2ZU5hbWU6ICdVbG/Fvml0IGptw6lubycsXG4gICAgZGlzY2FyZENoYW5nZXM6ICdacnXFoWl0IHptxJtueScsXG4gICAgZWRpdE5hbWU6ICdVcHJhdml0IGptw6lubycsXG4gICAgYWRkSXRlbTogJ1DFmWlkYXQgcG9sb8W+a3UnLFxuICAgIGl0ZW1OYW1lUGxhY2Vob2xkZXI6ICdOw6F6ZXYgcG9sb8W+a3knLFxuICAgIGl0ZW1RdWFudGl0eVBsYWNlaG9sZGVyOiAnTW5vxb5zdHbDrScsXG4gICAgZWRpdEl0ZW06ICdVcHJhdml0IHBvbG/Fvmt1JyxcbiAgICBtYXJrQXNDb21wbGV0ZWQ6ICdPem5hxI1pdCBqYWtvIGRva29uxI1lbsOpJyxcbiAgICBkZWxldGVJdGVtOiAnU21hemF0IHBvbG/Fvmt1JyxcbiAgICB1bnNlbGVjdEFsbDogJ1pydcWhaXQgdsO9YsSbcicsXG4gICAgY2FuY2VsOiAnWnJ1xaFpdCcsXG4gICAgc2F2ZTogJ1Vsb8W+aXQnLFxuICAgIGFkZE5ld01lbWJlcjogJ1DFmWlkYXQgbm92w6lobyDEjWxlbmEnLFxuICAgIGFkZE1lbWJlcjogJ1DFmWlkYXQgxI1sZW5hJyxcbiAgICByZW1vdmVNZW1iZXI6ICdPZHN0cmFuaXQnLFxuICAgIGxlYXZlTGlzdDogJ09wdXN0aXQgc2V6bmFtJyxcbiAgICBtZW1iZXJzOiAnxIxsZW5vdsOpJyxcbiAgICBvd25lckNhbm5vdFJlbW92ZTogJ1ZsYXN0bsOtayBzZSBuZW3Fr8W+ZSBvZHN0cmFuaXQnLFxuICAgIHF1YW50aXR5OiBcIk1ub8W+c3R2w61cIixcbiAgICBwcm9kdWN0TmFtZTogXCJOw6F6ZXYgcHJvZHVrdHVcIixcbiAgICByZXNvbHZlZDogXCJWecWZZcWhZW5vXCIsXG4gICAgc2hvd0FsbFJlc29sdmVkOiBcIlpvYnJheml0IHZ5xZllxaFlbsOpXCIsXG4gICAgc2hvd09ubHlVbnJlc29sdmVkOiBcIlpvYnJheml0IG5ldnnFmWXFoWVuw6lcIixcbiAgfSxcbn07XG5cbmV4cG9ydCBjb25zdCBMYW5ndWFnZVByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBbbGFuZ3VhZ2UsIHNldExhbmd1YWdlXSA9IHVzZVN0YXRlKCdlbicpOyAvLyBEZWZhdWx0IGxhbmd1YWdlIGlzIEVuZ2xpc2hcblxuICBjb25zdCBzd2l0Y2hMYW5ndWFnZSA9IChsYW5nKSA9PiBzZXRMYW5ndWFnZShsYW5nKTtcblxuICByZXR1cm4gKFxuICAgIDxMYW5ndWFnZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgbGFuZ3VhZ2UsIHN3aXRjaExhbmd1YWdlLCB0cmFuc2xhdGlvbnM6IHRyYW5zbGF0aW9uc1tsYW5ndWFnZV0gfX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9MYW5ndWFnZUNvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgdXNlTGFuZ3VhZ2UgPSAoKSA9PiB1c2VDb250ZXh0KExhbmd1YWdlQ29udGV4dCk7Il0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJMYW5ndWFnZUNvbnRleHQiLCJ0cmFuc2xhdGlvbnMiLCJlbiIsInBlcm1pc3Npb25zRGVuaWVkIiwic2F2ZU5hbWUiLCJkaXNjYXJkQ2hhbmdlcyIsImVkaXROYW1lIiwiYWRkSXRlbSIsIml0ZW1OYW1lUGxhY2Vob2xkZXIiLCJpdGVtUXVhbnRpdHlQbGFjZWhvbGRlciIsImVkaXRJdGVtIiwibWFya0FzQ29tcGxldGVkIiwiZGVsZXRlSXRlbSIsInVuc2VsZWN0QWxsIiwiY2FuY2VsIiwic2F2ZSIsImFkZE5ld01lbWJlciIsImFkZE1lbWJlciIsInJlbW92ZU1lbWJlciIsImxlYXZlTGlzdCIsIm1lbWJlcnMiLCJvd25lckNhbm5vdFJlbW92ZSIsInF1YW50aXR5IiwicHJvZHVjdE5hbWUiLCJyZXNvbHZlZCIsInNob3dBbGxSZXNvbHZlZCIsInNob3dPbmx5VW5yZXNvbHZlZCIsImNzIiwiTGFuZ3VhZ2VQcm92aWRlciIsImNoaWxkcmVuIiwibGFuZ3VhZ2UiLCJzZXRMYW5ndWFnZSIsInN3aXRjaExhbmd1YWdlIiwibGFuZyIsIlByb3ZpZGVyIiwidmFsdWUiLCJ1c2VMYW5ndWFnZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/context/LanguageContext.js\n"));

/***/ })

});