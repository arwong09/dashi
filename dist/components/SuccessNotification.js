"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = SuccessNotification;
var _solid = require("@heroicons/react/24/solid");
function SuccessNotification(_ref) {
  var message = _ref.message;
  return /*#__PURE__*/React.createElement("div", {
    className: "rounded-md bg-green-50 p-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex-shrink-0"
  }, /*#__PURE__*/React.createElement(_solid.CheckCircleIcon, {
    className: "h-5 w-5 text-green-400",
    "aria-hidden": "true"
  })), /*#__PURE__*/React.createElement("div", {
    className: "ml-2"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-sm font-medium text-green-700"
  }, message))));
}