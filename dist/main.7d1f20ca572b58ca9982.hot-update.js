exports.id = "main";
exports.modules = {

/***/ "./src/components/stepone.tsx":
/*!************************************!*\
  !*** ./src/components/stepone.tsx ***!
  \************************************/
/*! exports provided: StepOne */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepOne", function() { return StepOne; });
/* harmony import */ var _nodegui_react_nodegui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nodegui/react-nodegui */ "./node_modules/@nodegui/react-nodegui/dist/index.js");
/* harmony import */ var _nodegui_react_nodegui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nodegui_react_nodegui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



const dogImg = __webpack_require__(/*! ./dog */ "./src/components/dog.js");

function StepOne() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_nodegui_react_nodegui__WEBPACK_IMPORTED_MODULE_0__["View"], {
    style: containerStyle
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_nodegui_react_nodegui__WEBPACK_IMPORTED_MODULE_0__["Text"], {
    wordWrap: true
  }, "Edit App.tsx to make changes to this screen. Then come back to see your changes. Changes should reflect live thanks to Hot Reloading. \uD83D\uDD25!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_nodegui_react_nodegui__WEBPACK_IMPORTED_MODULE_0__["Text"], null, `
          <p style="color: rgb(255,72,38);"> 
            <center>
              <img src="${dogImg}" alt="doggy" />  
            </center>
            <center>You can even use <i><strong>Rich Html</strong></i> text like this if you want 😎.</center>
          </p>
          <hr />
        `));
}
const containerStyle = `
    margin-horizontal: 20px;
    padding-horizontal: 10px;
`;

/***/ })

};
//# sourceMappingURL=main.7d1f20ca572b58ca9982.hot-update.js.map