"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = LoadingSpinner;
var _jsxRuntime = require("react/jsx-runtime");
function LoadingSpinner() {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "flex items-center justify-center",
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      style: {
        borderTopColor: 'transparent'
      },
      className: "w-5 h-5 border-2 border-white border-solid rounded-full animate-spin"
    })
  });
}