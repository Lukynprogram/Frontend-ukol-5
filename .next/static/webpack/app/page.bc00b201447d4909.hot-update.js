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

/***/ "(app-pages-browser)/./app/context/LanguageContext.js":
/*!****************************************!*\
  !*** ./app/context/LanguageContext.js ***!
  \****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   LanguageProvider: () => (/* binding */ LanguageProvider),\n/* harmony export */   useLanguage: () => (/* binding */ useLanguage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mockData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mockData */ \"(app-pages-browser)/./app/mockData.js\");\n/* __next_internal_client_entry_do_not_use__ LanguageProvider,useLanguage auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\nconst LanguageContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst translations = {\n    en: {\n        permissionsDenied: 'Permissions Denied',\n        saveName: 'Save Name',\n        discardChanges: 'Discard Changes',\n        editName: 'Edit Name',\n        addItem: 'Add Item',\n        itemNamePlaceholder: 'Item Name',\n        itemQuantityPlaceholder: 'Quantity',\n        editItem: 'Edit Item',\n        markAsCompleted: 'Mark as Completed',\n        deleteItem: 'Delete Item',\n        unselectAll: 'Unselect All',\n        cancel: 'Cancel',\n        save: 'Save',\n        addNewMember: 'Add New Member',\n        addMember: 'Add Member',\n        removeMember: 'Remove',\n        leaveList: 'Leave List',\n        members: 'Members',\n        ownerCannotRemove: 'Owner cannot remove themselves',\n        quantity: \"Quantity\",\n        productName: \"Product Name\",\n        resolved: \"Resolved\",\n        showAllResolved: \"Show all resolved\",\n        showOnlyUnresolved: \"Show only unresolved\",\n        items: \"Items\",\n        name: \"Name\",\n        role: \"Role\",\n        actions: \"Actions\",\n        owner: \"Owner\",\n        member: \"Member\",\n        ownerdelete: \"Owner cannot remove themselves\",\n        leavelist: \"Leave List\",\n        membername: \"Member Name\",\n        shoppingLists: \"Shopping Lists\",\n        addNewList: \"Add New List\",\n        showAll: \"Show All\",\n        hideArchived: \"Hide Archived\"\n    },\n    cs: {\n        permissionsDenied: 'Přístup odepřen',\n        saveName: 'Uložit jméno',\n        discardChanges: 'Zrušit změny',\n        editName: 'Upravit jméno',\n        addItem: 'Přidat položku',\n        itemNamePlaceholder: 'Název položky',\n        itemQuantityPlaceholder: 'Množství',\n        editItem: 'Upravit položku',\n        markAsCompleted: 'Označit jako dokončené',\n        deleteItem: 'Smazat položku',\n        unselectAll: 'Zrušit výběr',\n        cancel: 'Zrušit',\n        save: 'Uložit',\n        addNewMember: 'Přidat nového člena',\n        addMember: 'Přidat člena',\n        removeMember: 'Odstranit',\n        leaveList: 'Opustit seznam',\n        members: 'Členové',\n        ownerCannotRemove: 'Vlastník se nemůže odstranit',\n        quantity: \"Množství\",\n        productName: \"Název produktu\",\n        resolved: \"Vyřešeno\",\n        showAllResolved: \"Zobrazit vyřešené\",\n        showOnlyUnresolved: \"Zobrazit nevyřešené\",\n        items: \"Položky\",\n        name: \"Jméno\",\n        role: \"Role\",\n        actions: \"Akce\",\n        owner: \"Vlastník\",\n        member: \"Člen\",\n        ownerdelete: \"Vlastník se nemůže odstranit\",\n        leavelist: \"Opustit seznam\",\n        membername: \"Jméno člena\",\n        shoppingLists: \"Nákupní seznamy\",\n        addNewList: \"Přidat nový seznam\",\n        showAll: \"Zobrazit vše\",\n        hideArchived: \"Skrýt archivované\"\n    }\n};\nconst LanguageProvider = (param)=>{\n    let { children } = param;\n    _s();\n    const [language, setLanguage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('en'); // Default language is English\n    const switchLanguage = (lang)=>setLanguage(lang);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LanguageContext.Provider, {\n        value: {\n            language,\n            switchLanguage,\n            translations: translations[language]\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/home/ljonak/ukoly/dom-c-kol-5-Lukynprogram/app/context/LanguageContext.js\",\n        lineNumber: 95,\n        columnNumber: 5\n    }, undefined);\n};\n_s(LanguageProvider, \"fVUtOCD1O58HgvMjnE8lxRQa0QA=\");\n_c = LanguageProvider;\nconst useLanguage = ()=>{\n    _s1();\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(LanguageContext);\n};\n_s1(useLanguage, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nvar _c;\n$RefreshReg$(_c, \"LanguageProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb250ZXh0L0xhbmd1YWdlQ29udGV4dC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUU0RDtBQUNKO0FBRXhELE1BQU1LLGdDQUFrQkwsb0RBQWFBO0FBRXJDLE1BQU1NLGVBQWU7SUFDbkJDLElBQUk7UUFDRkMsbUJBQW1CO1FBQ25CQyxVQUFVO1FBQ1ZDLGdCQUFnQjtRQUNoQkMsVUFBVTtRQUNWQyxTQUFTO1FBQ1RDLHFCQUFxQjtRQUNyQkMseUJBQXlCO1FBQ3pCQyxVQUFVO1FBQ1ZDLGlCQUFpQjtRQUNqQkMsWUFBWTtRQUNaQyxhQUFhO1FBQ2JDLFFBQVE7UUFDUkMsTUFBTTtRQUNOQyxjQUFjO1FBQ2RDLFdBQVc7UUFDWEMsY0FBYztRQUNkQyxXQUFXO1FBQ1hDLFNBQVM7UUFDVEMsbUJBQW1CO1FBQ25CQyxVQUFVO1FBQ1ZDLGFBQWE7UUFDYkMsVUFBVTtRQUNWQyxpQkFBaUI7UUFDakJDLG9CQUFvQjtRQUNwQkMsT0FBTztRQUNQQyxNQUFNO1FBQ05DLE1BQU07UUFDTkMsU0FBUztRQUNUQyxPQUFPO1FBQ1BDLFFBQVE7UUFDUkMsYUFBYTtRQUNiQyxXQUFXO1FBQ1hDLFlBQVk7UUFDWnBDLGVBQWU7UUFDZkQsWUFBWTtRQUNac0MsU0FBUztRQUNUQyxjQUFjO0lBQ2hCO0lBQ0FDLElBQUk7UUFDRm5DLG1CQUFtQjtRQUNuQkMsVUFBVTtRQUNWQyxnQkFBZ0I7UUFDaEJDLFVBQVU7UUFDVkMsU0FBUztRQUNUQyxxQkFBcUI7UUFDckJDLHlCQUF5QjtRQUN6QkMsVUFBVTtRQUNWQyxpQkFBaUI7UUFDakJDLFlBQVk7UUFDWkMsYUFBYTtRQUNiQyxRQUFRO1FBQ1JDLE1BQU07UUFDTkMsY0FBYztRQUNkQyxXQUFXO1FBQ1hDLGNBQWM7UUFDZEMsV0FBVztRQUNYQyxTQUFTO1FBQ1RDLG1CQUFtQjtRQUNuQkMsVUFBVTtRQUNWQyxhQUFhO1FBQ2JDLFVBQVU7UUFDVkMsaUJBQWlCO1FBQ2pCQyxvQkFBb0I7UUFDcEJDLE9BQU87UUFDUEMsTUFBTTtRQUNOQyxNQUFNO1FBQ05DLFNBQVM7UUFDVEMsT0FBTztRQUNQQyxRQUFRO1FBQ1JDLGFBQWE7UUFDYkMsV0FBVztRQUNYQyxZQUFZO1FBQ1pwQyxlQUFlO1FBQ2ZELFlBQVk7UUFDWnNDLFNBQVM7UUFDVEMsY0FBYztJQUNoQjtBQUNGO0FBRU8sTUFBTUUsbUJBQW1CO1FBQUMsRUFBRUMsUUFBUSxFQUFFOztJQUMzQyxNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBRzdDLCtDQUFRQSxDQUFDLE9BQU8sOEJBQThCO0lBRTlFLE1BQU04QyxpQkFBaUIsQ0FBQ0MsT0FBU0YsWUFBWUU7SUFFN0MscUJBQ0UsOERBQUM1QyxnQkFBZ0I2QyxRQUFRO1FBQUNDLE9BQU87WUFBRUw7WUFBVUU7WUFBZ0IxQyxjQUFjQSxZQUFZLENBQUN3QyxTQUFTO1FBQUM7a0JBQy9GRDs7Ozs7O0FBR1AsRUFBRTtHQVZXRDtLQUFBQTtBQVlOLE1BQU1RLGNBQWM7O0lBQU1uRCxPQUFBQSxpREFBVUEsQ0FBQ0k7QUFBZSxFQUFFO0lBQWhEK0MiLCJzb3VyY2VzIjpbIi9ob21lL2xqb25hay91a29seS9kb20tYy1rb2wtNS1MdWt5bnByb2dyYW0vYXBwL2NvbnRleHQvTGFuZ3VhZ2VDb250ZXh0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcblxuaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBhZGROZXdMaXN0LCBzaG9wcGluZ0xpc3RzIH0gZnJvbSAnLi4vbW9ja0RhdGEnO1xuXG5jb25zdCBMYW5ndWFnZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XG5cbmNvbnN0IHRyYW5zbGF0aW9ucyA9IHtcbiAgZW46IHtcbiAgICBwZXJtaXNzaW9uc0RlbmllZDogJ1Blcm1pc3Npb25zIERlbmllZCcsXG4gICAgc2F2ZU5hbWU6ICdTYXZlIE5hbWUnLFxuICAgIGRpc2NhcmRDaGFuZ2VzOiAnRGlzY2FyZCBDaGFuZ2VzJyxcbiAgICBlZGl0TmFtZTogJ0VkaXQgTmFtZScsXG4gICAgYWRkSXRlbTogJ0FkZCBJdGVtJyxcbiAgICBpdGVtTmFtZVBsYWNlaG9sZGVyOiAnSXRlbSBOYW1lJyxcbiAgICBpdGVtUXVhbnRpdHlQbGFjZWhvbGRlcjogJ1F1YW50aXR5JyxcbiAgICBlZGl0SXRlbTogJ0VkaXQgSXRlbScsXG4gICAgbWFya0FzQ29tcGxldGVkOiAnTWFyayBhcyBDb21wbGV0ZWQnLFxuICAgIGRlbGV0ZUl0ZW06ICdEZWxldGUgSXRlbScsXG4gICAgdW5zZWxlY3RBbGw6ICdVbnNlbGVjdCBBbGwnLFxuICAgIGNhbmNlbDogJ0NhbmNlbCcsXG4gICAgc2F2ZTogJ1NhdmUnLFxuICAgIGFkZE5ld01lbWJlcjogJ0FkZCBOZXcgTWVtYmVyJyxcbiAgICBhZGRNZW1iZXI6ICdBZGQgTWVtYmVyJyxcbiAgICByZW1vdmVNZW1iZXI6ICdSZW1vdmUnLFxuICAgIGxlYXZlTGlzdDogJ0xlYXZlIExpc3QnLFxuICAgIG1lbWJlcnM6ICdNZW1iZXJzJyxcbiAgICBvd25lckNhbm5vdFJlbW92ZTogJ093bmVyIGNhbm5vdCByZW1vdmUgdGhlbXNlbHZlcycsXG4gICAgcXVhbnRpdHk6IFwiUXVhbnRpdHlcIixcbiAgICBwcm9kdWN0TmFtZTogXCJQcm9kdWN0IE5hbWVcIixcbiAgICByZXNvbHZlZDogXCJSZXNvbHZlZFwiLFxuICAgIHNob3dBbGxSZXNvbHZlZDogXCJTaG93IGFsbCByZXNvbHZlZFwiLFxuICAgIHNob3dPbmx5VW5yZXNvbHZlZDogXCJTaG93IG9ubHkgdW5yZXNvbHZlZFwiLFxuICAgIGl0ZW1zOiBcIkl0ZW1zXCIsXG4gICAgbmFtZTogXCJOYW1lXCIsXG4gICAgcm9sZTogXCJSb2xlXCIsXG4gICAgYWN0aW9uczogXCJBY3Rpb25zXCIsXG4gICAgb3duZXI6IFwiT3duZXJcIixcbiAgICBtZW1iZXI6IFwiTWVtYmVyXCIsXG4gICAgb3duZXJkZWxldGU6IFwiT3duZXIgY2Fubm90IHJlbW92ZSB0aGVtc2VsdmVzXCIsXG4gICAgbGVhdmVsaXN0OiBcIkxlYXZlIExpc3RcIixcbiAgICBtZW1iZXJuYW1lOiBcIk1lbWJlciBOYW1lXCIsXG4gICAgc2hvcHBpbmdMaXN0czogXCJTaG9wcGluZyBMaXN0c1wiLFxuICAgIGFkZE5ld0xpc3Q6IFwiQWRkIE5ldyBMaXN0XCIsXG4gICAgc2hvd0FsbDogXCJTaG93IEFsbFwiLFxuICAgIGhpZGVBcmNoaXZlZDogXCJIaWRlIEFyY2hpdmVkXCIsXG4gIH0sXG4gIGNzOiB7XG4gICAgcGVybWlzc2lvbnNEZW5pZWQ6ICdQxZnDrXN0dXAgb2RlcMWZZW4nLFxuICAgIHNhdmVOYW1lOiAnVWxvxb5pdCBqbcOpbm8nLFxuICAgIGRpc2NhcmRDaGFuZ2VzOiAnWnJ1xaFpdCB6bcSbbnknLFxuICAgIGVkaXROYW1lOiAnVXByYXZpdCBqbcOpbm8nLFxuICAgIGFkZEl0ZW06ICdQxZlpZGF0IHBvbG/Fvmt1JyxcbiAgICBpdGVtTmFtZVBsYWNlaG9sZGVyOiAnTsOhemV2IHBvbG/Fvmt5JyxcbiAgICBpdGVtUXVhbnRpdHlQbGFjZWhvbGRlcjogJ01ub8W+c3R2w60nLFxuICAgIGVkaXRJdGVtOiAnVXByYXZpdCBwb2xvxb5rdScsXG4gICAgbWFya0FzQ29tcGxldGVkOiAnT3puYcSNaXQgamFrbyBkb2tvbsSNZW7DqScsXG4gICAgZGVsZXRlSXRlbTogJ1NtYXphdCBwb2xvxb5rdScsXG4gICAgdW5zZWxlY3RBbGw6ICdacnXFoWl0IHbDvWLEm3InLFxuICAgIGNhbmNlbDogJ1pydcWhaXQnLFxuICAgIHNhdmU6ICdVbG/Fvml0JyxcbiAgICBhZGROZXdNZW1iZXI6ICdQxZlpZGF0IG5vdsOpaG8gxI1sZW5hJyxcbiAgICBhZGRNZW1iZXI6ICdQxZlpZGF0IMSNbGVuYScsXG4gICAgcmVtb3ZlTWVtYmVyOiAnT2RzdHJhbml0JyxcbiAgICBsZWF2ZUxpc3Q6ICdPcHVzdGl0IHNlem5hbScsXG4gICAgbWVtYmVyczogJ8SMbGVub3bDqScsXG4gICAgb3duZXJDYW5ub3RSZW1vdmU6ICdWbGFzdG7DrWsgc2UgbmVtxa/FvmUgb2RzdHJhbml0JyxcbiAgICBxdWFudGl0eTogXCJNbm/FvnN0dsOtXCIsXG4gICAgcHJvZHVjdE5hbWU6IFwiTsOhemV2IHByb2R1a3R1XCIsXG4gICAgcmVzb2x2ZWQ6IFwiVnnFmWXFoWVub1wiLFxuICAgIHNob3dBbGxSZXNvbHZlZDogXCJab2JyYXppdCB2ecWZZcWhZW7DqVwiLFxuICAgIHNob3dPbmx5VW5yZXNvbHZlZDogXCJab2JyYXppdCBuZXZ5xZllxaFlbsOpXCIsXG4gICAgaXRlbXM6IFwiUG9sb8W+a3lcIixcbiAgICBuYW1lOiBcIkptw6lub1wiLFxuICAgIHJvbGU6IFwiUm9sZVwiLFxuICAgIGFjdGlvbnM6IFwiQWtjZVwiLFxuICAgIG93bmVyOiBcIlZsYXN0bsOta1wiLFxuICAgIG1lbWJlcjogXCLEjGxlblwiLFxuICAgIG93bmVyZGVsZXRlOiBcIlZsYXN0bsOtayBzZSBuZW3Fr8W+ZSBvZHN0cmFuaXRcIixcbiAgICBsZWF2ZWxpc3Q6IFwiT3B1c3RpdCBzZXpuYW1cIixcbiAgICBtZW1iZXJuYW1lOiBcIkptw6lubyDEjWxlbmFcIixcbiAgICBzaG9wcGluZ0xpc3RzOiBcIk7DoWt1cG7DrSBzZXpuYW15XCIsXG4gICAgYWRkTmV3TGlzdDogXCJQxZlpZGF0IG5vdsO9IHNlem5hbVwiLFxuICAgIHNob3dBbGw6IFwiWm9icmF6aXQgdsWhZVwiLFxuICAgIGhpZGVBcmNoaXZlZDogXCJTa3LDvXQgYXJjaGl2b3ZhbsOpXCIsXG4gIH0sXG59O1xuXG5leHBvcnQgY29uc3QgTGFuZ3VhZ2VQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgW2xhbmd1YWdlLCBzZXRMYW5ndWFnZV0gPSB1c2VTdGF0ZSgnZW4nKTsgLy8gRGVmYXVsdCBsYW5ndWFnZSBpcyBFbmdsaXNoXG5cbiAgY29uc3Qgc3dpdGNoTGFuZ3VhZ2UgPSAobGFuZykgPT4gc2V0TGFuZ3VhZ2UobGFuZyk7XG5cbiAgcmV0dXJuIChcbiAgICA8TGFuZ3VhZ2VDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IGxhbmd1YWdlLCBzd2l0Y2hMYW5ndWFnZSwgdHJhbnNsYXRpb25zOiB0cmFuc2xhdGlvbnNbbGFuZ3VhZ2VdIH19PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvTGFuZ3VhZ2VDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IHVzZUxhbmd1YWdlID0gKCkgPT4gdXNlQ29udGV4dChMYW5ndWFnZUNvbnRleHQpOyJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZVN0YXRlIiwiYWRkTmV3TGlzdCIsInNob3BwaW5nTGlzdHMiLCJMYW5ndWFnZUNvbnRleHQiLCJ0cmFuc2xhdGlvbnMiLCJlbiIsInBlcm1pc3Npb25zRGVuaWVkIiwic2F2ZU5hbWUiLCJkaXNjYXJkQ2hhbmdlcyIsImVkaXROYW1lIiwiYWRkSXRlbSIsIml0ZW1OYW1lUGxhY2Vob2xkZXIiLCJpdGVtUXVhbnRpdHlQbGFjZWhvbGRlciIsImVkaXRJdGVtIiwibWFya0FzQ29tcGxldGVkIiwiZGVsZXRlSXRlbSIsInVuc2VsZWN0QWxsIiwiY2FuY2VsIiwic2F2ZSIsImFkZE5ld01lbWJlciIsImFkZE1lbWJlciIsInJlbW92ZU1lbWJlciIsImxlYXZlTGlzdCIsIm1lbWJlcnMiLCJvd25lckNhbm5vdFJlbW92ZSIsInF1YW50aXR5IiwicHJvZHVjdE5hbWUiLCJyZXNvbHZlZCIsInNob3dBbGxSZXNvbHZlZCIsInNob3dPbmx5VW5yZXNvbHZlZCIsIml0ZW1zIiwibmFtZSIsInJvbGUiLCJhY3Rpb25zIiwib3duZXIiLCJtZW1iZXIiLCJvd25lcmRlbGV0ZSIsImxlYXZlbGlzdCIsIm1lbWJlcm5hbWUiLCJzaG93QWxsIiwiaGlkZUFyY2hpdmVkIiwiY3MiLCJMYW5ndWFnZVByb3ZpZGVyIiwiY2hpbGRyZW4iLCJsYW5ndWFnZSIsInNldExhbmd1YWdlIiwic3dpdGNoTGFuZ3VhZ2UiLCJsYW5nIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsInVzZUxhbmd1YWdlIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/context/LanguageContext.js\n"));

/***/ })

});