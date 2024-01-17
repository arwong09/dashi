"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = HeaderLayout;
var _MaxWidthLayout = _interopRequireDefault(require("./MaxWidthLayout"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function HeaderLayout(_ref) {
  var children = _ref.children,
    header = _ref.header;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_MaxWidthLayout["default"], null, /*#__PURE__*/React.createElement("header", {
    className: "text-neutral-800 flex justify-between items-center"
  }, header)), /*#__PURE__*/React.createElement("main", {
    className: "flex flex-col"
  }, children));
}