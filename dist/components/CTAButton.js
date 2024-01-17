"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = CTAButton;
var _link = _interopRequireDefault(require("next/link"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var customConfig = {
  textButtonColor: 'text-sky-500 hover:text-sky-400',
  ctaBgColor: 'bg-gradient-to-b to-purple-700 from-fuchsia-600 hover:to-purple-700/90 hover:from-fuchsia-600/90 disabled:from-purple-700/30 disabled:to-fuchsia-600/30'
};
function CTAButton(_ref) {
  var children = _ref.children,
    disabled = _ref.disabled,
    href = _ref.href,
    onClick = _ref.onClick;
  var className = "".concat(customConfig.ctaBgColor, " rounded-xl text-white font-semibold sm:text-lg px-20 sm:px-32 py-4");
  return href === undefined ? /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
    onClick: onClick,
    className: className,
    disabled: disabled,
    children: children
  }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_link["default"], {
    onClick: onClick,
    href: href,
    className: className,
    children: children
  });
}