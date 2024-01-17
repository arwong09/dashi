"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = HeaderLayout;
var _MaxWidthLayout = _interopRequireDefault(require("./MaxWidthLayout"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function HeaderLayout(_ref) {
  var children = _ref.children,
    header = _ref.header;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_MaxWidthLayout["default"], {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("header", {
        className: "text-neutral-800 flex justify-between items-center",
        children: header
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("main", {
      className: "flex flex-col",
      children: children
    })]
  });
}