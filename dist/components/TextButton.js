"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = TextButton;
var _tailwind = require("@/tailwind.config");
var _link = _interopRequireDefault(require("next/link"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function TextButton(_ref) {
  var children = _ref.children,
    href = _ref.href;
  return /*#__PURE__*/React.createElement(_link["default"], {
    href: href,
    className: _tailwind.customConfig.textButtonColor
  }, children);
}