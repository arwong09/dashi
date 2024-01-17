"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = LoadingSpinner;
function LoadingSpinner() {
  return /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-center"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderTopColor: 'transparent'
    },
    className: "w-5 h-5 border-2 border-white border-solid rounded-full animate-spin"
  }));
}