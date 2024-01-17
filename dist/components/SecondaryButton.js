"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = SecondaryButton;
function SecondaryButton(_ref) {
  var children = _ref.children,
    onClick = _ref.onClick;
  return /*#__PURE__*/React.createElement("button", {
    className: "text-neutral-400 hover:text-neutral-500 border hover:bg-neutral-50 border-neutral-200 hover:border-neutral-300 rounded-md px-3 py-2 text-sm",
    onClick: onClick
  }, children);
}