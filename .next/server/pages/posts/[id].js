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
exports.id = "pages/posts/[id]";
exports.ids = ["pages/posts/[id]"];
exports.modules = {

/***/ "./pages/posts/[id].js":
/*!*****************************!*\
  !*** ./pages/posts/[id].js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PostDetail),\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction PostDetail({ post  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"ml-10 mt-10\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-2xl font-bold\",\n                children: post.title\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\msali\\\\Desktop\\\\website\\\\front-end development\\\\next.js\\\\3\\\\my-app\\\\pages\\\\posts\\\\[id].js\",\n                lineNumber: 4,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-lg w-1/4\",\n                children: post.body\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\msali\\\\Desktop\\\\website\\\\front-end development\\\\next.js\\\\3\\\\my-app\\\\pages\\\\posts\\\\[id].js\",\n                lineNumber: 7,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\msali\\\\Desktop\\\\website\\\\front-end development\\\\next.js\\\\3\\\\my-app\\\\pages\\\\posts\\\\[id].js\",\n        lineNumber: 3,\n        columnNumber: 9\n    }, this);\n};\nasync function getStaticPaths({ params  }) {\n    try {\n        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`);\n        const posts = await res.json();\n        const paths = posts.map((post)=>({\n                params: {\n                    id: post.id.toString()\n                }\n            })\n        );\n        return {\n            paths,\n            fallback: false\n        };\n    } catch (e) {\n        console.log(e);\n    }\n}\nasync function getStaticProps({ params  }) {\n    const id = params.id.toString();\n    try {\n        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);\n        const post = await res.json();\n        console.log(post.title);\n        return {\n            props: {\n                post\n            }\n        };\n    } catch (err) {\n        console.log(err);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0cy9baWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFlLFFBQVEsQ0FBQ0EsVUFBVSxDQUFDLENBQUNDLENBQUFBLElBQUksR0FBQyxFQUFFLENBQUM7SUFDeEMsTUFBTSw2RUFDREMsQ0FBRztRQUFDQyxTQUFTLEVBQUMsQ0FBYTs7d0ZBQ3ZCQyxDQUFFO2dCQUFDRCxTQUFTLEVBQUMsQ0FBb0I7MEJBQzdCRixJQUFJLENBQUNJLEtBQUs7Ozs7Ozt3RkFFZEMsQ0FBQztnQkFBQ0gsU0FBUyxFQUFDLENBQWU7MEJBQ3ZCRixJQUFJLENBQUNNLElBQUk7Ozs7Ozs7Ozs7OztBQUkxQixDQUFDO0FBRU0sZUFBZUMsY0FBYyxDQUFDLENBQUNDLENBQUFBLE1BQU0sR0FBQyxFQUFFLENBQUM7SUFDNUMsR0FBRyxDQUFDLENBQUM7UUFDRCxLQUFLLENBQUNDLEdBQUcsR0FBRyxLQUFLLENBQUNDLEtBQUssRUFBRSwyQ0FBMkM7UUFDcEUsS0FBSyxDQUFDQyxLQUFLLEdBQUcsS0FBSyxDQUFDRixHQUFHLENBQUNHLElBQUk7UUFDNUIsS0FBSyxDQUFDQyxLQUFLLEdBQUdGLEtBQUssQ0FBQ0csR0FBRyxFQUFDZCxJQUFJLElBQ3hCLENBQUNRO2dCQUFBQSxNQUFNLEVBQUUsQ0FBQ087b0JBQUFBLEVBQUUsRUFBRWYsSUFBSSxDQUFDZSxFQUFFLENBQUNDLFFBQVE7Z0JBQUUsQ0FBQztZQUFBLENBQUM7O1FBRXRDLE1BQU0sQ0FBQyxDQUFDO1lBQ0pILEtBQUs7WUFDTEksUUFBUSxFQUFFLEtBQUs7UUFDbkIsQ0FBQztJQUNMLENBQUMsQ0FDRCxLQUFLLEVBQUVDLENBQUMsRUFBRSxDQUFDO1FBQ1BDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixDQUFDO0lBQ2pCLENBQUM7QUFDTCxDQUFDO0FBRU0sZUFBZUcsY0FBYyxDQUFDLENBQUNiLENBQUFBLE1BQU0sR0FBQyxFQUFFLENBQUM7SUFDNUMsS0FBSyxDQUFDTyxFQUFFLEdBQUdQLE1BQU0sQ0FBQ08sRUFBRSxDQUFDQyxRQUFRO0lBQzdCLEdBQUcsQ0FBQyxDQUFDO1FBQ0QsS0FBSyxDQUFDUCxHQUFHLEdBQUcsS0FBSyxDQUFDQyxLQUFLLEVBQUUsMkNBQTJDLEVBQUVLLEVBQUU7UUFDeEUsS0FBSyxDQUFDZixJQUFJLEdBQUcsS0FBSyxDQUFDUyxHQUFHLENBQUNHLElBQUk7UUFDM0JPLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDcEIsSUFBSSxDQUFDSSxLQUFLO1FBQ3RCLE1BQU0sQ0FBQyxDQUFDO1lBQ0prQixLQUFLLEVBQUUsQ0FBQztnQkFDSnRCLElBQUk7WUFDUixDQUFDO1FBQ0wsQ0FBQztJQUNMLENBQUMsQ0FDRCxLQUFLLEVBQUN1QixHQUFHLEVBQUUsQ0FBQztRQUNSSixPQUFPLENBQUNDLEdBQUcsQ0FBQ0csR0FBRztJQUNuQixDQUFDO0FBQ0wsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL215LWFwcC8uL3BhZ2VzL3Bvc3RzL1tpZF0uanM/Nzk2NiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3N0RGV0YWlsKHtwb3N0fSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWwtMTAgbXQtMTAnPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPSd0ZXh0LTJ4bCBmb250LWJvbGQnPlxyXG4gICAgICAgICAgICAgICAge3Bvc3QudGl0bGV9XHJcbiAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0ndGV4dC1sZyB3LTEvNCc+XHJcbiAgICAgICAgICAgICAgICB7cG9zdC5ib2R5fVxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocyh7cGFyYW1zfSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzL2ApXHJcbiAgICAgICAgY29uc3QgcG9zdHMgPSBhd2FpdCByZXMuanNvbigpXHJcbiAgICAgICAgY29uc3QgcGF0aHMgPSBwb3N0cy5tYXAocG9zdCA9PiAoXHJcbiAgICAgICAgICAgIHtwYXJhbXM6IHtpZDogcG9zdC5pZC50b1N0cmluZygpfX1cclxuICAgICAgICApKVxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHBhdGhzLFxyXG4gICAgICAgICAgICBmYWxsYmFjazogZmFsc2VcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUpXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7cGFyYW1zfSkge1xyXG4gICAgY29uc3QgaWQgPSBwYXJhbXMuaWQudG9TdHJpbmcoKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzLyR7aWR9YClcclxuICAgICAgICBjb25zdCBwb3N0ID0gYXdhaXQgcmVzLmpzb24oKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHBvc3QudGl0bGUpXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgICAgIHBvc3RcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycilcclxuICAgIH1cclxufVxyXG4iXSwibmFtZXMiOlsiUG9zdERldGFpbCIsInBvc3QiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsInRpdGxlIiwicCIsImJvZHkiLCJnZXRTdGF0aWNQYXRocyIsInBhcmFtcyIsInJlcyIsImZldGNoIiwicG9zdHMiLCJqc29uIiwicGF0aHMiLCJtYXAiLCJpZCIsInRvU3RyaW5nIiwiZmFsbGJhY2siLCJlIiwiY29uc29sZSIsImxvZyIsImdldFN0YXRpY1Byb3BzIiwicHJvcHMiLCJlcnIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/posts/[id].js\n");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/posts/[id].js"));
module.exports = __webpack_exports__;

})();