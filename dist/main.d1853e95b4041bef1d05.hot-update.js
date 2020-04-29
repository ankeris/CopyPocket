exports.id = "main";
exports.modules = {

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nodegui_react_nodegui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nodegui/react-nodegui */ "./node_modules/@nodegui/react-nodegui/dist/index.js");
/* harmony import */ var _nodegui_react_nodegui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nodegui_react_nodegui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app */ "./src/app.tsx");
/* harmony import */ var _nodegui_nodegui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nodegui/nodegui */ "./node_modules/@nodegui/nodegui/dist/index.js");
/* harmony import */ var _nodegui_nodegui__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_nodegui_nodegui__WEBPACK_IMPORTED_MODULE_4__);





process.title = "CopyPocket";
_nodegui_react_nodegui__WEBPACK_IMPORTED_MODULE_1__["Renderer"].render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_app__WEBPACK_IMPORTED_MODULE_3__["default"], null));
const win = new _nodegui_nodegui__WEBPACK_IMPORTED_MODULE_4__["QMainWindow"]();
win.setWindowTitle("Meme Search");
const label = new _nodegui_nodegui__WEBPACK_IMPORTED_MODULE_4__["QLabel"]();
label.setText("Hello World");
win.setCentralWidget(label);
systemTrayIcon(win);
win.hide();
global.win = win; // This is for hot reloading (this will be stripped off in production by webpack)

if (true) {
  module.hot.accept([/*! ./app */ "./src/app.tsx"], function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app */ "./src/app.tsx");
(function () {
    _nodegui_react_nodegui__WEBPACK_IMPORTED_MODULE_1__["Renderer"].forceUpdate();
  })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this));
}

function systemTrayIcon(win) {
  const iconImg = __webpack_require__(/*! ../assets/logo.png */ "./assets/logo.png").default;

  const icon = new _nodegui_nodegui__WEBPACK_IMPORTED_MODULE_4__["QIcon"](path__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(__dirname, iconImg));
  const tray = new _nodegui_nodegui__WEBPACK_IMPORTED_MODULE_4__["QSystemTrayIcon"]();
  tray.setIcon(icon);
  tray.show(); // Menu that should pop up when clicking on systray icon.

  const menu = new _nodegui_nodegui__WEBPACK_IMPORTED_MODULE_4__["QMenu"]();
  tray.setContextMenu(menu); //Each item in the menu is called an action

  const visibleAction = new _nodegui_nodegui__WEBPACK_IMPORTED_MODULE_4__["QAction"]();
  menu.addAction(visibleAction);
  visibleAction.setText("Show/Hide");
  visibleAction.addEventListener("triggered", () => {
    if (win.isVisible()) {
      win.hide();
    } else {
      win.show();
    }
  });
  global.tray = tray;
}

/***/ })

};
//# sourceMappingURL=main.d1853e95b4041bef1d05.hot-update.js.map