exports.id = "main";
exports.modules = {

/***/ "./src/app.tsx":
/*!*********************!*\
  !*** ./src/app.tsx ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var _nodegui_react_nodegui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nodegui/react-nodegui */ "./node_modules/@nodegui/react-nodegui/dist/index.js");
/* harmony import */ var _nodegui_react_nodegui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nodegui_react_nodegui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nodegui_nodegui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nodegui/nodegui */ "./node_modules/@nodegui/nodegui/dist/index.js");
/* harmony import */ var _nodegui_nodegui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nodegui_nodegui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_stepone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/stepone */ "./src/components/stepone.tsx");
/* harmony import */ var _components_steptwo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/steptwo */ "./src/components/steptwo.tsx");
/* harmony import */ var _assets_nodegui_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/nodegui.jpg */ "./assets/nodegui.jpg");







const minSize = {
  width: 500,
  height: 520
};
const winIcon = new _nodegui_nodegui__WEBPACK_IMPORTED_MODULE_2__["QIcon"](path__WEBPACK_IMPORTED_MODULE_3___default.a.resolve(__dirname, _assets_nodegui_jpg__WEBPACK_IMPORTED_MODULE_6__["default"]));

class App extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_nodegui_react_nodegui__WEBPACK_IMPORTED_MODULE_0__["Window"], {
      windowIcon: winIcon,
      windowTitle: "Hello \uD83D\uDC4B\uD83C\uDFFD",
      minSize: minSize,
      styleSheet: styleSheet
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_nodegui_react_nodegui__WEBPACK_IMPORTED_MODULE_0__["View"], {
      style: containerStyle
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_nodegui_react_nodegui__WEBPACK_IMPORTED_MODULE_0__["Text"], {
      id: "welcome-text"
    }, "Welcome to NodeGui \uD83D\uDC15"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_nodegui_react_nodegui__WEBPACK_IMPORTED_MODULE_0__["Text"], {
      id: "step-1"
    }, "1. Play around"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_stepone__WEBPACK_IMPORTED_MODULE_4__["StepOne"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_nodegui_react_nodegui__WEBPACK_IMPORTED_MODULE_0__["Text"], {
      id: "step-2"
    }, "2. Debug"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_steptwo__WEBPACK_IMPORTED_MODULE_5__["StepTwo"], null)));
  }

}

const containerStyle = `
  flex: 1; 
`;
const styleSheet = `
  #welcome-text {
    font-size: 24px;
    padding-top: 20px;
    qproperty-alignment: 'AlignHCenter';
    font-family: 'sans-serif';
  }

  #step-1, #step-2 {
    font-size: 18px;
    padding-top: 10px;
    padding-horizontal: 20px;
  }
`;
/* harmony default export */ __webpack_exports__["default"] = (Object(_nodegui_react_nodegui__WEBPACK_IMPORTED_MODULE_0__["hot"])(App));
/* WEBPACK VAR INJECTION */}.call(this, "src"))

/***/ })

};
//# sourceMappingURL=main.fc4dda992a021d7ecd38.hot-update.js.map