webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./lib/apollo.js":
false,

/***/ "./node_modules/babel-runtime/core-js/object/assign.js":
false,

/***/ "./node_modules/babel-runtime/core-js/object/create.js":
false,

/***/ "./node_modules/babel-runtime/core-js/object/define-property.js":
false,

/***/ "./node_modules/babel-runtime/core-js/object/get-prototype-of.js":
false,

/***/ "./node_modules/babel-runtime/core-js/object/set-prototype-of.js":
false,

/***/ "./node_modules/babel-runtime/core-js/promise.js":
false,

/***/ "./node_modules/babel-runtime/core-js/symbol.js":
false,

/***/ "./node_modules/babel-runtime/core-js/symbol/iterator.js":
false,

/***/ "./node_modules/babel-runtime/helpers/asyncToGenerator.js":
false,

/***/ "./node_modules/babel-runtime/helpers/classCallCheck.js":
false,

/***/ "./node_modules/babel-runtime/helpers/createClass.js":
false,

/***/ "./node_modules/babel-runtime/helpers/extends.js":
false,

/***/ "./node_modules/babel-runtime/helpers/inherits.js":
false,

/***/ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js":
false,

/***/ "./node_modules/babel-runtime/helpers/typeof.js":
false,

/***/ "./node_modules/babel-runtime/node_modules/regenerator-runtime/runtime-module.js":
false,

/***/ "./node_modules/babel-runtime/node_modules/regenerator-runtime/runtime.js":
false,

/***/ "./node_modules/babel-runtime/regenerator/index.js":
false,

/***/ "./node_modules/fbjs/lib/emptyFunction.js":
false,

/***/ "./node_modules/fbjs/lib/invariant.js":
false,

/***/ "./node_modules/fbjs/lib/warning.js":
false,

/***/ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js":
false,

/***/ "./node_modules/lodash.isfunction/index.js":
false,

/***/ "./node_modules/next-apollo/dist/index.js":
false,

/***/ "./node_modules/next-apollo/dist/initApollo.js":
false,

/***/ "./node_modules/next-apollo/dist/withData.js":
false,

/***/ "./node_modules/next-apollo/node_modules/prop-types/checkPropTypes.js":
false,

/***/ "./node_modules/next-apollo/node_modules/prop-types/factoryWithTypeCheckers.js":
false,

/***/ "./node_modules/next-apollo/node_modules/prop-types/index.js":
false,

/***/ "./node_modules/next-apollo/node_modules/prop-types/lib/ReactPropTypesSecret.js":
false,

/***/ "./node_modules/whatwg-fetch/fetch.js":
false,

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_Booklist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Booklist */ "./components/Booklist.js");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/index.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "F:\\WebDevFolder\\react\\nextjs\\pages\\index.js";




 //import withData from "../lib/apollo";

var client = new apollo_boost__WEBPACK_IMPORTED_MODULE_3__["default"]({
  uri: "https://graph-back.herokuapp.com/"
});

var Index = function Index(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_4__["ApolloProvider"], {
    client: client,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "Welcome to Books"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Booklist__WEBPACK_IMPORTED_MODULE_2__["default"], {
    props: props,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.1625ae5ee4428e4496ec.hot-update.js.map