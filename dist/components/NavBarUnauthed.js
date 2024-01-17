"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = NavBarUnauthed;
var _link = _interopRequireDefault(require("next/link"));
var _image = _interopRequireDefault(require("next/image"));
var _TextButton = _interopRequireDefault(require("./TextButton"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function NavBarUnauthed() {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_link["default"], {
      href: "/",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_image["default"], {
        src: "/logo.png",
        width: 100,
        height: 32,
        alt: "Gems Logo",
        className: "py-6 sm:py-8"
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_TextButton["default"], {
      href: "/login",
      children: "Sign In"
    })]
  });
}