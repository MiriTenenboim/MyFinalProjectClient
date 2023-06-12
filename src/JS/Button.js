// import React, { Fragment } from 'https://cdn.skypack.dev/react';
// // import { createRoot } from 'https://cdn.skypack.dev/react-dom';
// import createRoot from 'react';

// const ROOT_NODE = document.querySelector('#app');

// const _extends = Object.assign || function (target) {
//   for (var i = 1; i < arguments.length; i++) {
//     if (window.CP.shouldStopExecution(0)) break;
//     var source = arguments[i];
//     for (var key in source) {
//       if (Object.prototype.hasOwnProperty.call(source, key)) {
//         target[key] = source[key];
//       }
//     }
//     window.CP.exitedLoop(0);
//     return target;
//   }
// };

// const Button = ({ as, children, filled, secondary, ...rest }) => {
//   const that = { as };

//   return /*#__PURE__*/(
//     React.createElement(that.as, _extends({ className: `dir-control ${secondary ? 'dir-control--secondary' : ''} ${filled ? 'dir-control--filled' : ''}` }, rest),
//       children, /*#__PURE__*/
//       React.createElement("span", null), /*#__PURE__*/
//       React.createElement("span", null), /*#__PURE__*/
//       React.createElement("span", null), /*#__PURE__*/
//       React.createElement("span", null), /*#__PURE__*/
//       React.createElement("b", { "aria-hidden": "true" }, children), /*#__PURE__*/
//       React.createElement("b", { "aria-hidden": "true" }, children), /*#__PURE__*/
//       React.createElement("b", { "aria-hidden": "true" }, children), /*#__PURE__*/
//       React.createElement("b", { "aria-hidden": "true" }, children)
//     )
//   );
// };

// Button.defaultProps = {
//   as: 'button'
// };

// const App = () => /*#__PURE__*/
// React.createElement(Fragment, null, /*#__PURE__*/
// React.createElement(Button, { role: "button" }, "Click Me!"), /*#__PURE__*/
// React.createElement(Button, { as: "a", href: "#" }, "Link Me!"), /*#__PURE__*/
// React.createElement(Button, { role: "button", secondary: true }, "Click Me!"), /*#__PURE__*/
// React.createElement(Button, { as: "a", href: "#", secondary: true }, "Link Me!"), /*#__PURE__*/
// React.createElement(Button, { role: "button", filled: true }, "Click Me!"), /*#__PURE__*/
// React.createElement(Button, { as: "a", href: "#", filled: true }, "Link Me!")
// );

// export default function () {
//   return /*#__PURE__*/React.createElement(App, null);
// }

// createRoot(ROOT_NODE).render( /*#__PURE__*/React.createElement(App, null));
