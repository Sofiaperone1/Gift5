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

/***/ "(app-pages-browser)/./src/components/sideBar/SideBar.jsx":
/*!********************************************!*\
  !*** ./src/components/sideBar/SideBar.jsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _sidebar_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebar.css */ \"(app-pages-browser)/./src/components/sideBar/sidebar.css\");\n/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/react */ \"(app-pages-browser)/./node_modules/@iconify/react/dist/iconify.mjs\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _context_apiContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../context/apiContext */ \"(app-pages-browser)/./context/apiContext.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! js-cookie */ \"(app-pages-browser)/./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* harmony import */ var clipboard_copy__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! clipboard-copy */ \"(app-pages-browser)/./node_modules/clipboard-copy/index.js\");\n/* harmony import */ var clipboard_copy__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(clipboard_copy__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _inactiveUsers_inactiveUsers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../inactiveUsers/inactiveUsers */ \"(app-pages-browser)/./src/components/inactiveUsers/inactiveUsers.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst SideBar = ()=>{\n    _s();\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_5__.usePathname)();\n    const { dataUser, setLegend } = (0,_context_apiContext__WEBPACK_IMPORTED_MODULE_6__.useApiContext)();\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false); // Cambiado a false para cerrar por defecto en pantallas pequeñas\n    const toggleSidebar = ()=>{\n        setIsOpen(!isOpen);\n    };\n    const referralLink = \"https://gift-frontend-eight.vercel.app/register?username=\".concat(dataUser.username);\n    //const referralLink = `http://localhost:3000/register?username=${dataUser.username}`;\n    const copyToClipboard = ()=>{\n        clipboard_copy__WEBPACK_IMPORTED_MODULE_8___default()(referralLink);\n        alert(\"Enlace copiado al portapales\");\n    };\n    const nonActive = ()=>{\n        alert(\"No puedes compartir el enlace porque no eres usuario activo\");\n    };\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    // Usar useEffect para manejar el cambio en isOpen cuando el ancho de la ventana cambie\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleResize = ()=>{\n            if (window.innerWidth >= 768) {\n                setIsOpen(true);\n            } else {\n                setIsOpen(false);\n            }\n        };\n        // Agregar el listener de evento\n        window.addEventListener(\"resize\", handleResize);\n        // Llamar a handleResize inicialmente para establecer isOpen\n        handleResize();\n        // Remover el listener de evento cuando el componente se desmonta\n        return ()=>{\n            window.removeEventListener(\"resize\", handleResize);\n        };\n    }, []);\n    const cerrarSession = async ()=>{\n        js_cookie__WEBPACK_IMPORTED_MODULE_7__[\"default\"].remove(\"token\");\n        router.push(\"/login\");\n        setLegend(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"sideBar \".concat(isOpen ? \"open\" : \"closed\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"sideBar__toggle-container \".concat(isOpen ? \"\" : \"closed\"),\n                onClick: toggleSidebar,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_iconify_react__WEBPACK_IMPORTED_MODULE_3__.Icon, {\n                    onClick: toggleSidebar,\n                    className: \"toggleButton\",\n                    icon: isOpen ? \"ri:arrow-left-double-line\" : \"ri:arrow-right-double-line\"\n                }, void 0, false, {\n                    fileName: \"/home/sofia/Documentos/Gift/frontend/src/components/sideBar/SideBar.jsx\",\n                    lineNumber: 72,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/sofia/Documentos/Gift/frontend/src/components/sideBar/SideBar.jsx\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: \"sideBar_bottom \".concat(!isOpen ? \"hidden\" : \"\"),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"sideBar_list\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_iconify_react__WEBPACK_IMPORTED_MODULE_3__.Icon, {\n                                    icon: \"majesticons:home-line\"\n                                }, void 0, false, {\n                                    fileName: \"/home/sofia/Documentos/Gift/frontend/src/components/sideBar/SideBar.jsx\",\n                                    lineNumber: 84,\n                                    columnNumber: 11\n                                }, undefined),\n                                \" \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                    href: \"/\",\n                                    children: \"Volver al inicio\"\n                                }, void 0, false, {\n                                    fileName: \"/home/sofia/Documentos/Gift/frontend/src/components/sideBar/SideBar.jsx\",\n                                    lineNumber: 84,\n                                    columnNumber: 49\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/sofia/Documentos/Gift/frontend/src/components/sideBar/SideBar.jsx\",\n                            lineNumber: 83,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_iconify_react__WEBPACK_IMPORTED_MODULE_3__.Icon, {\n                                    icon: \"majesticons:user-line\"\n                                }, void 0, false, {\n                                    fileName: \"/home/sofia/Documentos/Gift/frontend/src/components/sideBar/SideBar.jsx\",\n                                    lineNumber: 86,\n                                    columnNumber: 15\n                                }, undefined),\n                                dataUser.username ? dataUser.username : \"\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/sofia/Documentos/Gift/frontend/src/components/sideBar/SideBar.jsx\",\n                            lineNumber: 86,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            onClick: cerrarSession,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_iconify_react__WEBPACK_IMPORTED_MODULE_3__.Icon, {\n                                    icon: \"majesticons:logout\"\n                                }, void 0, false, {\n                                    fileName: \"/home/sofia/Documentos/Gift/frontend/src/components/sideBar/SideBar.jsx\",\n                                    lineNumber: 87,\n                                    columnNumber: 39\n                                }, undefined),\n                                \"Cerrar sesi\\xf3n\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/sofia/Documentos/Gift/frontend/src/components/sideBar/SideBar.jsx\",\n                            lineNumber: 87,\n                            columnNumber: 11\n                        }, undefined),\n                        dataUser.active ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            onClick: copyToClipboard,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_iconify_react__WEBPACK_IMPORTED_MODULE_3__.Icon, {\n                                    icon: \"fa-solid:copy\",\n                                    className: \"dashboardPage__referral-link-icon\"\n                                }, void 0, false, {\n                                    fileName: \"/home/sofia/Documentos/Gift/frontend/src/components/sideBar/SideBar.jsx\",\n                                    lineNumber: 89,\n                                    columnNumber: 61\n                                }, undefined),\n                                \" \",\n                                \"Link de invitaci\\xf3n\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/sofia/Documentos/Gift/frontend/src/components/sideBar/SideBar.jsx\",\n                            lineNumber: 89,\n                            columnNumber: 31\n                        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            onClick: nonActive,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_iconify_react__WEBPACK_IMPORTED_MODULE_3__.Icon, {\n                                    icon: \"fa-solid:copy\",\n                                    className: \"dashboardPage__referral-link-icon\"\n                                }, void 0, false, {\n                                    fileName: \"/home/sofia/Documentos/Gift/frontend/src/components/sideBar/SideBar.jsx\",\n                                    lineNumber: 92,\n                                    columnNumber: 63\n                                }, undefined),\n                                \" \",\n                                \"Link de invitaci\\xf3n\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/sofia/Documentos/Gift/frontend/src/components/sideBar/SideBar.jsx\",\n                            lineNumber: 92,\n                            columnNumber: 39\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_inactiveUsers_inactiveUsers__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                            fileName: \"/home/sofia/Documentos/Gift/frontend/src/components/sideBar/SideBar.jsx\",\n                            lineNumber: 97,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/sofia/Documentos/Gift/frontend/src/components/sideBar/SideBar.jsx\",\n                    lineNumber: 81,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/sofia/Documentos/Gift/frontend/src/components/sideBar/SideBar.jsx\",\n                lineNumber: 80,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/sofia/Documentos/Gift/frontend/src/components/sideBar/SideBar.jsx\",\n        lineNumber: 67,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SideBar, \"xd6fIeAHjyRKBAxrEdcZTqzqok8=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_5__.usePathname,\n        _context_apiContext__WEBPACK_IMPORTED_MODULE_6__.useApiContext,\n        next_navigation__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = SideBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SideBar);\nvar _c;\n$RefreshReg$(_c, \"SideBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3NpZGVCYXIvU2lkZUJhci5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDbUQ7QUFDNUI7QUFDZTtBQUNUO0FBQ2U7QUFDRTtBQUNjO0FBQzVCO0FBQ1c7QUFDZ0I7QUFFM0QsTUFBTVcsVUFBVTs7SUFFZCxNQUFNQyxXQUFXTiw0REFBV0E7SUFDNUIsTUFBTSxFQUFFTyxRQUFRLEVBQUVDLFNBQVMsRUFBRSxHQUFHUCxrRUFBYUE7SUFDN0MsTUFBTSxDQUFDUSxRQUFRQyxVQUFVLEdBQUdmLCtDQUFRQSxDQUFDLFFBQVEsaUVBQWlFO0lBRzlHLE1BQU1nQixnQkFBZ0I7UUFDcEJELFVBQVUsQ0FBQ0Q7SUFDYjtJQUVBLE1BQU1HLGVBQWUsNERBQThFLE9BQWxCTCxTQUFTTSxRQUFRO0lBQ2xHLHNGQUFzRjtJQUV0RixNQUFNQyxrQkFBa0I7UUFDdEJYLHFEQUFhQSxDQUFDUztRQUNkRyxNQUFNO0lBQ1I7SUFFQSxNQUFNQyxZQUFZO1FBQ2hCRCxNQUFPO0lBQ1Q7SUFHQSxNQUFNRSxTQUFTbEIsMERBQVNBO0lBRXhCLHVGQUF1RjtJQUN2RkgsZ0RBQVNBLENBQUM7UUFDUixNQUFNc0IsZUFBZTtZQUNuQixJQUFJQyxPQUFPQyxVQUFVLElBQUksS0FBSztnQkFDNUJWLFVBQVU7WUFDWixPQUFPO2dCQUNMQSxVQUFVO1lBQ1o7UUFDRjtRQUNBLGdDQUFnQztRQUNoQ1MsT0FBT0UsZ0JBQWdCLENBQUMsVUFBVUg7UUFDbEMsNERBQTREO1FBQzVEQTtRQUNBLGlFQUFpRTtRQUNqRSxPQUFPO1lBQ0xDLE9BQU9HLG1CQUFtQixDQUFDLFVBQVVKO1FBQ3ZDO0lBQ0YsR0FBRyxFQUFFO0lBSUwsTUFBTUssZ0JBQWdCO1FBQ25CckIsaURBQU9BLENBQUNzQixNQUFNLENBQUM7UUFDaEJQLE9BQU9RLElBQUksQ0FBQztRQUNaakIsVUFBVTtJQUNaO0lBRUEscUJBQ0UsOERBQUNrQjtRQUFJQyxXQUFXLFdBQXNDLE9BQTNCbEIsU0FBUyxTQUFTOzswQkFDM0MsOERBQUNpQjtnQkFDQ0MsV0FBVyw2QkFBb0QsT0FBdkJsQixTQUFTLEtBQUs7Z0JBQ3REbUIsU0FBU2pCOzBCQUVULDRFQUFDZCxnREFBSUE7b0JBQ0grQixTQUFTakI7b0JBQ1RnQixXQUFVO29CQUNWRSxNQUNFcEIsU0FBUyw4QkFBOEI7Ozs7Ozs7Ozs7OzBCQUk3Qyw4REFBQ3FCO2dCQUFJSCxXQUFXLGtCQUEwQyxPQUF4QixDQUFDbEIsU0FBUyxXQUFXOzBCQUNyRCw0RUFBQ3NCO29CQUFHSixXQUFVOztzQ0FFWiw4REFBQ0s7OzhDQUNELDhEQUFDbkMsZ0RBQUlBO29DQUFDZ0MsTUFBSzs7Ozs7O2dDQUEwQjs4Q0FBQyw4REFBQy9CLGtEQUFJQTtvQ0FBQ21DLE1BQU07OENBQUs7Ozs7Ozs7Ozs7OztzQ0FFdkQsOERBQUNEOzs4Q0FBRyw4REFBQ25DLGdEQUFJQTtvQ0FBQ2dDLE1BQUs7Ozs7OztnQ0FBMkJ0QixTQUFTTSxRQUFRLEdBQUdOLFNBQVNNLFFBQVEsR0FBRzs7Ozs7OztzQ0FDbEYsOERBQUNtQjs0QkFBR0osU0FBU0w7OzhDQUFlLDhEQUFDMUIsZ0RBQUlBO29DQUFDZ0MsTUFBSzs7Ozs7O2dDQUF1Qjs7Ozs7Ozt3QkFFNUR0QixTQUFTMkIsTUFBTSxpQkFBRyw4REFBQ0Y7NEJBQUdKLFNBQVNkOzs4Q0FBaUIsOERBQUNqQixnREFBSUE7b0NBQ3JEZ0MsTUFBSztvQ0FDTEYsV0FBVTs7Ozs7O2dDQUFzQztnQ0FBSTs7Ozs7O3NEQUMxQiw4REFBQ0s7NEJBQUdKLFNBQVNaOzs4Q0FBVyw4REFBQ25CLGdEQUFJQTtvQ0FDdkRnQyxNQUFLO29DQUNMRixXQUFVOzs7Ozs7Z0NBQXNDO2dDQUFJOzs7Ozs7O3NDQUdwRCw4REFBQ3ZCLG9FQUFhQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU8xQjtHQTNGTUM7O1FBRWFMLHdEQUFXQTtRQUNJQyw4REFBYUE7UUFxQjlCRixzREFBU0E7OztLQXhCcEJNO0FBNkZOLCtEQUFlQSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3NpZGVCYXIvU2lkZUJhci5qc3g/OTY3YSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFwiLi9zaWRlYmFyLmNzc1wiO1xyXG5pbXBvcnQgeyBJY29uIH0gZnJvbSBcIkBpY29uaWZ5L3JlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xyXG5pbXBvcnQgeyB1c2VQYXRobmFtZSB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcclxuaW1wb3J0IHsgdXNlQXBpQ29udGV4dCB9IGZyb20gXCIuLi8uLi8uLi9jb250ZXh0L2FwaUNvbnRleHRcIjtcclxuaW1wb3J0IENvb2tpZXMgZnJvbSBcImpzLWNvb2tpZVwiO1xyXG5pbXBvcnQgY2xpcGJvYXJkQ29weSBmcm9tIFwiY2xpcGJvYXJkLWNvcHlcIjtcclxuaW1wb3J0IEluYWN0aXZlVXNlcnMgZnJvbSBcIi4uL2luYWN0aXZlVXNlcnMvaW5hY3RpdmVVc2Vyc1wiO1xyXG5cclxuY29uc3QgU2lkZUJhciA9ICgpID0+IHtcclxuICBcclxuICBjb25zdCBwYXRobmFtZSA9IHVzZVBhdGhuYW1lKCk7XHJcbiAgY29uc3QgeyBkYXRhVXNlciwgc2V0TGVnZW5kIH0gPSB1c2VBcGlDb250ZXh0KCk7XHJcbiAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTsgLy8gQ2FtYmlhZG8gYSBmYWxzZSBwYXJhIGNlcnJhciBwb3IgZGVmZWN0byBlbiBwYW50YWxsYXMgcGVxdWXDsWFzXHJcblxyXG5cclxuICBjb25zdCB0b2dnbGVTaWRlYmFyID0gKCkgPT4ge1xyXG4gICAgc2V0SXNPcGVuKCFpc09wZW4pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlZmVycmFsTGluayA9IGBodHRwczovL2dpZnQtZnJvbnRlbmQtZWlnaHQudmVyY2VsLmFwcC9yZWdpc3Rlcj91c2VybmFtZT0ke2RhdGFVc2VyLnVzZXJuYW1lfWA7XHJcbiAgLy9jb25zdCByZWZlcnJhbExpbmsgPSBgaHR0cDovL2xvY2FsaG9zdDozMDAwL3JlZ2lzdGVyP3VzZXJuYW1lPSR7ZGF0YVVzZXIudXNlcm5hbWV9YDtcclxuXHJcbiAgY29uc3QgY29weVRvQ2xpcGJvYXJkID0gKCkgPT4ge1xyXG4gICAgY2xpcGJvYXJkQ29weShyZWZlcnJhbExpbmspO1xyXG4gICAgYWxlcnQoXCJFbmxhY2UgY29waWFkbyBhbCBwb3J0YXBhbGVzXCIpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG5vbkFjdGl2ZSA9ICgpID0+IHtcclxuICAgIGFsZXJ0IChcIk5vIHB1ZWRlcyBjb21wYXJ0aXIgZWwgZW5sYWNlIHBvcnF1ZSBubyBlcmVzIHVzdWFyaW8gYWN0aXZvXCIpXHJcbiAgfVxyXG5cclxuXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIC8vIFVzYXIgdXNlRWZmZWN0IHBhcmEgbWFuZWphciBlbCBjYW1iaW8gZW4gaXNPcGVuIGN1YW5kbyBlbCBhbmNobyBkZSBsYSB2ZW50YW5hIGNhbWJpZVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBoYW5kbGVSZXNpemUgPSAoKSA9PiB7XHJcbiAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+PSA3NjgpIHtcclxuICAgICAgICBzZXRJc09wZW4odHJ1ZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2V0SXNPcGVuKGZhbHNlKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIC8vIEFncmVnYXIgZWwgbGlzdGVuZXIgZGUgZXZlbnRvXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVSZXNpemUpO1xyXG4gICAgLy8gTGxhbWFyIGEgaGFuZGxlUmVzaXplIGluaWNpYWxtZW50ZSBwYXJhIGVzdGFibGVjZXIgaXNPcGVuXHJcbiAgICBoYW5kbGVSZXNpemUoKTtcclxuICAgIC8vIFJlbW92ZXIgZWwgbGlzdGVuZXIgZGUgZXZlbnRvIGN1YW5kbyBlbCBjb21wb25lbnRlIHNlIGRlc21vbnRhXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVSZXNpemUpO1xyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcblxyXG5cclxuXHJcbiAgY29uc3QgY2VycmFyU2Vzc2lvbiA9IGFzeW5jICgpID0+IHtcclxuICAgICBDb29raWVzLnJlbW92ZSgndG9rZW4nKTtcclxuICAgIHJvdXRlci5wdXNoKFwiL2xvZ2luXCIpXHJcbiAgICBzZXRMZWdlbmQoZmFsc2UpXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2BzaWRlQmFyICR7aXNPcGVuID8gXCJvcGVuXCIgOiBcImNsb3NlZFwifWB9PlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXtgc2lkZUJhcl9fdG9nZ2xlLWNvbnRhaW5lciAke2lzT3BlbiA/IFwiXCIgOiBcImNsb3NlZFwifWB9XHJcbiAgICAgICAgb25DbGljaz17dG9nZ2xlU2lkZWJhcn1cclxuICAgICAgPlxyXG4gICAgICAgIDxJY29uXHJcbiAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVTaWRlYmFyfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwidG9nZ2xlQnV0dG9uXCJcclxuICAgICAgICAgIGljb249e1xyXG4gICAgICAgICAgICBpc09wZW4gPyBcInJpOmFycm93LWxlZnQtZG91YmxlLWxpbmVcIiA6IFwicmk6YXJyb3ctcmlnaHQtZG91YmxlLWxpbmVcIlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8bmF2IGNsYXNzTmFtZT17YHNpZGVCYXJfYm90dG9tICR7IWlzT3BlbiA/IFwiaGlkZGVuXCIgOiBcIlwifWB9PlxyXG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJzaWRlQmFyX2xpc3RcIj5cclxuICAgICAgICBcclxuICAgICAgICAgIDxsaT4gXHJcbiAgICAgICAgICA8SWNvbiBpY29uPVwibWFqZXN0aWNvbnM6aG9tZS1saW5lXCIgLz4gPExpbmsgaHJlZj17XCIvXCJ9PlZvbHZlciBhbCBpbmljaW88L0xpbms+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpPjxJY29uIGljb249XCJtYWplc3RpY29uczp1c2VyLWxpbmVcIiAvPntkYXRhVXNlci51c2VybmFtZSA/IGRhdGFVc2VyLnVzZXJuYW1lIDogXCJcIn08L2xpPiBcclxuICAgICAgICAgIDxsaSBvbkNsaWNrPXtjZXJyYXJTZXNzaW9ufT48SWNvbiBpY29uPVwibWFqZXN0aWNvbnM6bG9nb3V0XCIgLz5DZXJyYXIgc2VzacOzbjwvbGk+XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIHsgZGF0YVVzZXIuYWN0aXZlID8gPGxpIG9uQ2xpY2s9e2NvcHlUb0NsaXBib2FyZH0+PEljb25cclxuICAgICAgICAgICAgaWNvbj1cImZhLXNvbGlkOmNvcHlcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJkYXNoYm9hcmRQYWdlX19yZWZlcnJhbC1saW5rLWljb25cIi8+e1wiIFwifVxyXG4gICAgICAgICAgICBMaW5rIGRlIGludml0YWNpw7NuPC9saT4gOiA8bGkgb25DbGljaz17bm9uQWN0aXZlfT48SWNvblxyXG4gICAgICAgICAgICBpY29uPVwiZmEtc29saWQ6Y29weVwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImRhc2hib2FyZFBhZ2VfX3JlZmVycmFsLWxpbmstaWNvblwiLz57XCIgXCJ9XHJcbiAgICAgICAgICAgIExpbmsgZGUgaW52aXRhY2nDs248L2xpPiB9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgPEluYWN0aXZlVXNlcnMvPlxyXG4gICAgICAgICAgXHJcbiAgICAgIFxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgIDwvbmF2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZGVCYXI7XHJcblxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkljb24iLCJMaW5rIiwidXNlUm91dGVyIiwidXNlUGF0aG5hbWUiLCJ1c2VBcGlDb250ZXh0IiwiQ29va2llcyIsImNsaXBib2FyZENvcHkiLCJJbmFjdGl2ZVVzZXJzIiwiU2lkZUJhciIsInBhdGhuYW1lIiwiZGF0YVVzZXIiLCJzZXRMZWdlbmQiLCJpc09wZW4iLCJzZXRJc09wZW4iLCJ0b2dnbGVTaWRlYmFyIiwicmVmZXJyYWxMaW5rIiwidXNlcm5hbWUiLCJjb3B5VG9DbGlwYm9hcmQiLCJhbGVydCIsIm5vbkFjdGl2ZSIsInJvdXRlciIsImhhbmRsZVJlc2l6ZSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNlcnJhclNlc3Npb24iLCJyZW1vdmUiLCJwdXNoIiwiZGl2IiwiY2xhc3NOYW1lIiwib25DbGljayIsImljb24iLCJuYXYiLCJ1bCIsImxpIiwiaHJlZiIsImFjdGl2ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/sideBar/SideBar.jsx\n"));

/***/ })

});