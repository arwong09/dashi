"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = require("react");
var CurrentUserContext = /*#__PURE__*/(0, _react.createContext)({
  currentUser: undefined,
  user: undefined
});
CurrentUserContext.displayName = 'CurrentUserContext';
var _default = exports["default"] = CurrentUserContext;