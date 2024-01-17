"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = NavBarAuthed;
var _firebase = require("@/src/utils/firebase");
var _link = _interopRequireDefault(require("next/link"));
var _router = require("next/router");
var _image = _interopRequireDefault(require("next/image"));
var _TextButton = _interopRequireDefault(require("./TextButton"));
var _SecondaryButton = _interopRequireDefault(require("./SecondaryButton"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function NavBarAuthed() {
  var router = (0, _router.useRouter)();
  var signOut = function signOut() {
    _firebase.auth.signOut().then(function () {
      router.push('/');
    });
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_link["default"], {
    href: "/"
  }, /*#__PURE__*/React.createElement(_image["default"], {
    src: "/logo.png",
    width: 100,
    height: 32,
    alt: "Gems Logo",
    className: "py-6 sm:py-8"
  })), /*#__PURE__*/React.createElement(_TextButton["default"], {
    href: "/dashboard"
  }, "Dashboard"), /*#__PURE__*/React.createElement(_SecondaryButton["default"], {
    onClick: signOut
  }, "Sign out"));
}