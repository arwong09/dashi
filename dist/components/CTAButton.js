"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = CTAButton;
var _link = _interopRequireDefault(require("next/link"));
var _tailwind = require("@/tailwind.config");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function CTAButton(_ref) {
  var children = _ref.children,
    disabled = _ref.disabled,
    href = _ref.href,
    onClick = _ref.onClick;
  var className = "".concat(_tailwind.customConfig.ctaBgColor, " rounded-xl text-white font-semibold sm:text-lg px-20 sm:px-32 py-4");
  return href === undefined ? /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    className: className,
    disabled: disabled
  }, children) : /*#__PURE__*/React.createElement(_link["default"], {
    onClick: onClick,
    href: href,
    className: className
  }, children);
}