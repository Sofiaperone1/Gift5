"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/dashboard/page",{

/***/ "(app-pages-browser)/./src/components/mandala/mandala.jsx":
/*!********************************************!*\
  !*** ./src/components/mandala/mandala.jsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _userPoint_userPoint__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../userPoint/userPoint */ \"(app-pages-browser)/./src/components/userPoint/userPoint.jsx\");\n/* harmony import */ var _mandala_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mandala.css */ \"(app-pages-browser)/./src/components/mandala/mandala.css\");\n/* harmony import */ var _context_apiContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../context/apiContext */ \"(app-pages-browser)/./context/apiContext.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Mandala = ()=>{\n    var _dataCuadro, _dataCuadro_lado_derecho, _dataCuadro1, _dataCuadro_lado_izquierdo, _dataCuadro2, _dataCuadro_lado_izquierdo_builders1, _dataCuadro_lado_izquierdo1, _dataCuadro3, _dataCuadro_lado_izquierdo_builders2, _dataCuadro_lado_izquierdo2, _dataCuadro4, _dataCuadro_lado_derecho_builders1, _dataCuadro_lado_derecho1, _dataCuadro5, _dataCuadro_lado_derecho_builders2, _dataCuadro_lado_derecho2, _dataCuadro6, _dataCuadro7, _dataCuadro_lado_derecho3, _dataCuadro8, _dataCuadro_lado_izquierdo3, _dataCuadro9, _dataCuadro_lado_izquierdo_builders11, _dataCuadro_lado_izquierdo4, _dataCuadro10, _dataCuadro_lado_izquierdo_builders21, _dataCuadro_lado_izquierdo5, _dataCuadro11, _dataCuadro_lado_derecho_builders11, _dataCuadro_lado_derecho4, _dataCuadro12, _dataCuadro_lado_derecho_builders21, _dataCuadro_lado_derecho5, _dataCuadro13;\n    _s();\n    const { dataUser, dataCuadro } = (0,_context_apiContext__WEBPACK_IMPORTED_MODULE_4__.useApiContext)();\n    const puntos = window.innerWidth <= 767 ? [\n        {\n            x: 28,\n            y: 50,\n            propiedadUsuario: (_dataCuadro = dataCuadro) === null || _dataCuadro === void 0 ? void 0 : _dataCuadro.legend,\n            active: true\n        },\n        {\n            x: 45,\n            y: 50,\n            propiedadUsuario: (_dataCuadro1 = dataCuadro) === null || _dataCuadro1 === void 0 ? void 0 : (_dataCuadro_lado_derecho = _dataCuadro1.lado_derecho) === null || _dataCuadro_lado_derecho === void 0 ? void 0 : _dataCuadro_lado_derecho.guide,\n            active: true\n        },\n        {\n            x: -29,\n            y: 50,\n            propiedadUsuario: (_dataCuadro2 = dataCuadro) === null || _dataCuadro2 === void 0 ? void 0 : (_dataCuadro_lado_izquierdo = _dataCuadro2.lado_izquierdo) === null || _dataCuadro_lado_izquierdo === void 0 ? void 0 : _dataCuadro_lado_izquierdo.guide,\n            active: true\n        },\n        {\n            x: -59,\n            y: 5,\n            propiedadUsuario: (_dataCuadro3 = dataCuadro) === null || _dataCuadro3 === void 0 ? void 0 : (_dataCuadro_lado_izquierdo1 = _dataCuadro3.lado_izquierdo) === null || _dataCuadro_lado_izquierdo1 === void 0 ? void 0 : (_dataCuadro_lado_izquierdo_builders1 = _dataCuadro_lado_izquierdo1.builders1) === null || _dataCuadro_lado_izquierdo_builders1 === void 0 ? void 0 : _dataCuadro_lado_izquierdo_builders1.username,\n            active: true\n        },\n        {\n            x: -59,\n            y: 85,\n            propiedadUsuario: (_dataCuadro4 = dataCuadro) === null || _dataCuadro4 === void 0 ? void 0 : (_dataCuadro_lado_izquierdo2 = _dataCuadro4.lado_izquierdo) === null || _dataCuadro_lado_izquierdo2 === void 0 ? void 0 : (_dataCuadro_lado_izquierdo_builders2 = _dataCuadro_lado_izquierdo2.builders2) === null || _dataCuadro_lado_izquierdo_builders2 === void 0 ? void 0 : _dataCuadro_lado_izquierdo_builders2.username,\n            active: true\n        },\n        {\n            x: 115,\n            y: 5,\n            propiedadUsuario: (_dataCuadro5 = dataCuadro) === null || _dataCuadro5 === void 0 ? void 0 : (_dataCuadro_lado_derecho1 = _dataCuadro5.lado_derecho) === null || _dataCuadro_lado_derecho1 === void 0 ? void 0 : (_dataCuadro_lado_derecho_builders1 = _dataCuadro_lado_derecho1.builders1) === null || _dataCuadro_lado_derecho_builders1 === void 0 ? void 0 : _dataCuadro_lado_derecho_builders1.username,\n            active: true\n        },\n        {\n            x: 115,\n            y: 85,\n            propiedadUsuario: (_dataCuadro6 = dataCuadro) === null || _dataCuadro6 === void 0 ? void 0 : (_dataCuadro_lado_derecho2 = _dataCuadro6.lado_derecho) === null || _dataCuadro_lado_derecho2 === void 0 ? void 0 : (_dataCuadro_lado_derecho_builders2 = _dataCuadro_lado_derecho2.builders2) === null || _dataCuadro_lado_derecho_builders2 === void 0 ? void 0 : _dataCuadro_lado_derecho_builders2.username,\n            active: false\n        }\n    ] : [\n        {\n            x: 28,\n            y: 45,\n            propiedadUsuario: (_dataCuadro7 = dataCuadro) === null || _dataCuadro7 === void 0 ? void 0 : _dataCuadro7.legend,\n            active: true\n        },\n        {\n            x: 85,\n            y: 45,\n            propiedadUsuario: (_dataCuadro8 = dataCuadro) === null || _dataCuadro8 === void 0 ? void 0 : (_dataCuadro_lado_derecho3 = _dataCuadro8.lado_derecho) === null || _dataCuadro_lado_derecho3 === void 0 ? void 0 : _dataCuadro_lado_derecho3.guide,\n            active: true\n        },\n        {\n            x: -29,\n            y: 45,\n            propiedadUsuario: (_dataCuadro9 = dataCuadro) === null || _dataCuadro9 === void 0 ? void 0 : (_dataCuadro_lado_izquierdo3 = _dataCuadro9.lado_izquierdo) === null || _dataCuadro_lado_izquierdo3 === void 0 ? void 0 : _dataCuadro_lado_izquierdo3.guide,\n            active: true\n        },\n        {\n            x: -59,\n            y: 5,\n            propiedadUsuario: (_dataCuadro10 = dataCuadro) === null || _dataCuadro10 === void 0 ? void 0 : (_dataCuadro_lado_izquierdo4 = _dataCuadro10.lado_izquierdo) === null || _dataCuadro_lado_izquierdo4 === void 0 ? void 0 : (_dataCuadro_lado_izquierdo_builders11 = _dataCuadro_lado_izquierdo4.builders1) === null || _dataCuadro_lado_izquierdo_builders11 === void 0 ? void 0 : _dataCuadro_lado_izquierdo_builders11.username,\n            active: true\n        },\n        {\n            x: -59,\n            y: 85,\n            propiedadUsuario: (_dataCuadro11 = dataCuadro) === null || _dataCuadro11 === void 0 ? void 0 : (_dataCuadro_lado_izquierdo5 = _dataCuadro11.lado_izquierdo) === null || _dataCuadro_lado_izquierdo5 === void 0 ? void 0 : (_dataCuadro_lado_izquierdo_builders21 = _dataCuadro_lado_izquierdo5.builders2) === null || _dataCuadro_lado_izquierdo_builders21 === void 0 ? void 0 : _dataCuadro_lado_izquierdo_builders21.username,\n            active: true\n        },\n        {\n            x: 115,\n            y: 5,\n            propiedadUsuario: (_dataCuadro12 = dataCuadro) === null || _dataCuadro12 === void 0 ? void 0 : (_dataCuadro_lado_derecho4 = _dataCuadro12.lado_derecho) === null || _dataCuadro_lado_derecho4 === void 0 ? void 0 : (_dataCuadro_lado_derecho_builders11 = _dataCuadro_lado_derecho4.builders1) === null || _dataCuadro_lado_derecho_builders11 === void 0 ? void 0 : _dataCuadro_lado_derecho_builders11.username,\n            active: true\n        },\n        {\n            x: 115,\n            y: 85,\n            propiedadUsuario: (_dataCuadro13 = dataCuadro) === null || _dataCuadro13 === void 0 ? void 0 : (_dataCuadro_lado_derecho5 = _dataCuadro13.lado_derecho) === null || _dataCuadro_lado_derecho5 === void 0 ? void 0 : (_dataCuadro_lado_derecho_builders21 = _dataCuadro_lado_derecho5.builders2) === null || _dataCuadro_lado_derecho_builders21 === void 0 ? void 0 : _dataCuadro_lado_derecho_builders21.username,\n            active: false\n        }\n    ];\n    var _coordenada_propiedadUsuario;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mandala-container\",\n        children: dataCuadro && dataCuadro.lado_izquierdo && puntos.map((coordenada, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_userPoint_userPoint__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                x: coordenada.x,\n                y: coordenada.y,\n                active: coordenada.active,\n                propiedadUsuario: (_coordenada_propiedadUsuario = coordenada.propiedadUsuario) !== null && _coordenada_propiedadUsuario !== void 0 ? _coordenada_propiedadUsuario : \"\"\n            }, index, false, {\n                fileName: \"/home/sofia/Documentos/Gift/frontend/src/components/mandala/mandala.jsx\",\n                lineNumber: 36,\n                columnNumber: 9\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"/home/sofia/Documentos/Gift/frontend/src/components/mandala/mandala.jsx\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Mandala, \"4T7rFiuWeLe8W+EIJis5owJfQ/8=\", false, function() {\n    return [\n        _context_apiContext__WEBPACK_IMPORTED_MODULE_4__.useApiContext\n    ];\n});\n_c = Mandala;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Mandala);\nvar _c;\n$RefreshReg$(_c, \"Mandala\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL21hbmRhbGEvbWFuZGFsYS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXlCO0FBQ3FCO0FBQ3hCO0FBQ3NDO0FBRzVELE1BQU1HLFVBQVU7UUFNd0JDLGFBQ0FBLDBCQUFBQSxjQUNDQSw0QkFBQUEsY0FDREEsc0NBQUFBLDZCQUFBQSxjQUNDQSxzQ0FBQUEsNkJBQUFBLGNBQ0RBLG9DQUFBQSwyQkFBQUEsY0FDQ0Esb0NBQUFBLDJCQUFBQSxjQUVEQSxjQUNBQSwyQkFBQUEsY0FDQ0EsNkJBQUFBLGNBQ0RBLHVDQUFBQSw2QkFBQUEsZUFDQ0EsdUNBQUFBLDZCQUFBQSxlQUNEQSxxQ0FBQUEsMkJBQUFBLGVBQ0NBLHFDQUFBQSwyQkFBQUE7O0lBbEJyQyxNQUFNLEVBQUVDLFFBQVEsRUFBRUQsVUFBVSxFQUFFLEdBQUdGLGtFQUFhQTtJQUdoRCxNQUFNSSxTQUFTQyxPQUFPQyxVQUFVLElBQUksTUFBTTtRQUN0QztZQUFFQyxHQUFHO1lBQUlDLEdBQUc7WUFBSUMsZ0JBQWdCLEdBQUVQLGNBQUFBLHdCQUFBQSxrQ0FBQUEsWUFBWVEsTUFBTTtZQUFFQyxRQUFRO1FBQUs7UUFDbkU7WUFBRUosR0FBRztZQUFJQyxHQUFHO1lBQUlDLGdCQUFnQixHQUFFUCxlQUFBQSx3QkFBQUEsb0NBQUFBLDJCQUFBQSxhQUFZVSxZQUFZLGNBQXhCViwrQ0FBQUEseUJBQTBCVyxLQUFLO1lBQUVGLFFBQVE7UUFBSztRQUNoRjtZQUFFSixHQUFHLENBQUM7WUFBSUMsR0FBRztZQUFJQyxnQkFBZ0IsR0FBRVAsZUFBQUEsd0JBQUFBLG9DQUFBQSw2QkFBQUEsYUFBWVksY0FBYyxjQUExQlosaURBQUFBLDJCQUE0QlcsS0FBSztZQUFFRixRQUFRO1FBQUs7UUFDbkY7WUFBRUosR0FBRyxDQUFDO1lBQUlDLEdBQUc7WUFBR0MsZ0JBQWdCLEdBQUVQLGVBQUFBLHdCQUFBQSxvQ0FBQUEsOEJBQUFBLGFBQVlZLGNB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ekJGLGtCQUFrQlMsQ0FBQUEsK0JBQUFBLFdBQVdULGdCQUFnQixjQUEzQlMsMENBQUFBLCtCQUErQjtlQUo1Q0k7Ozs7Ozs7Ozs7QUFVZjtHQXhDTXJCOztRQUUrQkQsOERBQWFBOzs7S0FGNUNDO0FBMENOLCtEQUFlQSxPQUFPQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL21hbmRhbGEvbWFuZGFsYS5qc3g/OGIwOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgVXNlclBvaW50IGZyb20gXCIuLi91c2VyUG9pbnQvdXNlclBvaW50XCJcbmltcG9ydCBcIi4vbWFuZGFsYS5jc3NcIlxuaW1wb3J0IHsgdXNlQXBpQ29udGV4dCB9IGZyb20gXCIuLi8uLi8uLi9jb250ZXh0L2FwaUNvbnRleHRcIjtcblxuXG5jb25zdCBNYW5kYWxhID0gKCkgPT4ge1xuXG4gICAgY29uc3QgeyBkYXRhVXNlciwgZGF0YUN1YWRybyB9ID0gdXNlQXBpQ29udGV4dCgpO1xuXG4gIFxuICBjb25zdCBwdW50b3MgPSB3aW5kb3cuaW5uZXJXaWR0aCA8PSA3NjcgPyBbXG4gICAgICB7IHg6IDI4LCB5OiA1MCwgcHJvcGllZGFkVXN1YXJpbzogZGF0YUN1YWRybz8ubGVnZW5kLCBhY3RpdmU6IHRydWUgfSxcbiAgICAgIHsgeDogNDUsIHk6IDUwLCBwcm9waWVkYWRVc3VhcmlvOiBkYXRhQ3VhZHJvPy5sYWRvX2RlcmVjaG8/Lmd1aWRlLCBhY3RpdmU6IHRydWUgfSxcbiAgICAgIHsgeDogLTI5LCB5OiA1MCwgcHJvcGllZGFkVXN1YXJpbzogZGF0YUN1YWRybz8ubGFkb19penF1aWVyZG8/Lmd1aWRlLCBhY3RpdmU6IHRydWUgfSxcbiAgICAgIHsgeDogLTU5LCB5OiA1LCBwcm9waWVkYWRVc3VhcmlvOiBkYXRhQ3VhZHJvPy5sYWRvX2l6cXVpZXJkbz8uYnVpbGRlcnMxPy51c2VybmFtZSwgYWN0aXZlOiB0cnVlIH0sXG4gICAgICB7IHg6IC01OSwgeTogODUsIHByb3BpZWRhZFVzdWFyaW86IGRhdGFDdWFkcm8/LmxhZG9faXpxdWllcmRvPy5idWlsZGVyczI/LnVzZXJuYW1lLCBhY3RpdmU6IHRydWUgfSxcbiAgICAgIHsgeDogMTE1LCB5OiA1LCBwcm9waWVkYWRVc3VhcmlvOiBkYXRhQ3VhZHJvPy5sYWRvX2RlcmVjaG8/LmJ1aWxkZXJzMT8udXNlcm5hbWUsIGFjdGl2ZTogdHJ1ZSB9LFxuICAgICAgeyB4OiAxMTUsIHk6IDg1LCBwcm9waWVkYWRVc3VhcmlvOiBkYXRhQ3VhZHJvPy5sYWRvX2RlcmVjaG8/LmJ1aWxkZXJzMj8udXNlcm5hbWUsIGFjdGl2ZTogZmFsc2UgfSxcbiAgXTogW1xuICAgICAgeyB4OiAyOCwgeTogNDUsIHByb3BpZWRhZFVzdWFyaW86IGRhdGFDdWFkcm8/LmxlZ2VuZCwgYWN0aXZlOiB0cnVlIH0sXG4gICAgICB7IHg6IDg1LCB5OiA0NSwgcHJvcGllZGFkVXN1YXJpbzogZGF0YUN1YWRybz8ubGFkb19kZXJlY2hvPy5ndWlkZSwgYWN0aXZlOiB0cnVlIH0sXG4gICAgICB7IHg6IC0yOSwgeTogNDUsIHByb3BpZWRhZFVzdWFyaW86IGRhdGFDdWFkcm8/LmxhZG9faXpxdWllcmRvPy5ndWlkZSwgYWN0aXZlOiB0cnVlIH0sXG4gICAgICB7IHg6IC01OSwgeTogNSwgcHJvcGllZGFkVXN1YXJpbzogZGF0YUN1YWRybz8ubGFkb19penF1aWVyZG8/LmJ1aWxkZXJzMT8udXNlcm5hbWUsIGFjdGl2ZTogdHJ1ZSB9LFxuICAgICAgeyB4OiAtNTksIHk6IDg1LCBwcm9waWVkYWRVc3VhcmlvOiBkYXRhQ3VhZHJvPy5sYWRvX2l6cXVpZXJkbz8uYnVpbGRlcnMyPy51c2VybmFtZSwgYWN0aXZlOiB0cnVlIH0sXG4gICAgICB7IHg6IDExNSwgeTogNSwgcHJvcGllZGFkVXN1YXJpbzogZGF0YUN1YWRybz8ubGFkb19kZXJlY2hvPy5idWlsZGVyczE/LnVzZXJuYW1lLCBhY3RpdmU6IHRydWUgfSxcbiAgICAgIHsgeDogMTE1LCB5OiA4NSwgcHJvcGllZGFkVXN1YXJpbzogZGF0YUN1YWRybz8ubGFkb19kZXJlY2hvPy5idWlsZGVyczI/LnVzZXJuYW1lLCBhY3RpdmU6IGZhbHNlIH0sXG4gICAgICAvLyAuLi4gQWdyZWdhIG3DoXMgY29vcmRlbmFkYXMgc2Vnw7puIHR1IGRpc2XDsW9cbiAgXTtcbiAgXG5cbiAgIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYW5kYWxhLWNvbnRhaW5lclwiPlxuICAgIHtkYXRhQ3VhZHJvICYmIGRhdGFDdWFkcm8ubGFkb19penF1aWVyZG8gJiZcbiAgICAgIHB1bnRvcy5tYXAoKGNvb3JkZW5hZGEsIGluZGV4KSA9PiAoXG4gICAgICAgIDxVc2VyUG9pbnRcbiAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgIHg9e2Nvb3JkZW5hZGEueH1cbiAgICAgICAgICB5PXtjb29yZGVuYWRhLnl9XG4gICAgICAgICAgYWN0aXZlPXtjb29yZGVuYWRhLmFjdGl2ZX1cbiAgICAgICAgICBwcm9waWVkYWRVc3VhcmlvPXtjb29yZGVuYWRhLnByb3BpZWRhZFVzdWFyaW8gPz8gXCJcIn1cbiAgICAgICAgLz5cbiAgICAgICkpfVxuICA8L2Rpdj5cblxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNYW5kYWxhIl0sIm5hbWVzIjpbIlJlYWN0IiwiVXNlclBvaW50IiwidXNlQXBpQ29udGV4dCIsIk1hbmRhbGEiLCJkYXRhQ3VhZHJvIiwiZGF0YVVzZXIiLCJwdW50b3MiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwieCIsInkiLCJwcm9waWVkYWRVc3VhcmlvIiwibGVnZW5kIiwiYWN0aXZlIiwibGFkb19kZXJlY2hvIiwiZ3VpZGUiLCJsYWRvX2l6cXVpZXJkbyIsImJ1aWxkZXJzMSIsInVzZXJuYW1lIiwiYnVpbGRlcnMyIiwiY29vcmRlbmFkYSIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsImluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/mandala/mandala.jsx\n"));

/***/ })

});