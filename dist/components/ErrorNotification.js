"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ErrorNotification;
var _solid = require("@heroicons/react/24/solid");
var _jsxRuntime = require("react/jsx-runtime");
var ERROR_CODE_MAPPING = {
  'auth/email-already-in-use': 'That email is already in use',
  'auth/missing-email': 'Please enter an email address',
  'auth/weak-password': 'Your password must be at least 6 characters',
  'auth/wrong-password': 'Incorrect email or password',
  'auth/user-not-found': 'Incorrect email or password'
};
var getErrorMessage = function getErrorMessage(error) {
  var _ref;
  var message = ERROR_CODE_MAPPING[error.code];
  return (_ref = message !== null && message !== void 0 ? message : error.code) !== null && _ref !== void 0 ? _ref : 'An error ocurred. Please try again.';
};
function ErrorNotification(_ref2) {
  var error = _ref2.error;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "rounded-md pt-4",
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "flex",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "flex-shrink-0",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_solid.ExclamationTriangleIcon, {
          className: "h-5 w-5 text-red-500",
          "aria-hidden": "true"
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "ml-1.5",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
          className: "text-sm text-red-500",
          children: getErrorMessage(error)
        })
      })]
    })
  });
}