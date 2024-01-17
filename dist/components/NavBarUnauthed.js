"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = NavBarUnauthed;
var _link = _interopRequireDefault(require("next/link"));
var _image = _interopRequireDefault(require("next/image"));
var _TextButton = _interopRequireDefault(require("./TextButton"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function NavBarUnauthed() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_link["default"], {
    href: "/"
  }, /*#__PURE__*/React.createElement(_image["default"], {
    src: "/logo.png",
    width: 100,
    height: 32,
    alt: "Gems Logo",
    className: "py-6 sm:py-8"
  })), /*#__PURE__*/React.createElement(_TextButton["default"], {
    href: "/login"
  }, "Sign In"));
}