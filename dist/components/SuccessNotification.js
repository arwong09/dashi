"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = SuccessNotification;
var _solid = require("@heroicons/react/24/solid");
var _jsxRuntime = require("react/jsx-runtime");
function SuccessNotification(_ref) {
  var message = _ref.message;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "rounded-md bg-green-50 p-4",
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "flex",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "flex-shrink-0",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_solid.CheckCircleIcon, {
          className: "h-5 w-5 text-green-400",
          "aria-hidden": "true"
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "ml-2",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
          className: "text-sm font-medium text-green-700",
          children: message
        })
      })]
    })
  });
}