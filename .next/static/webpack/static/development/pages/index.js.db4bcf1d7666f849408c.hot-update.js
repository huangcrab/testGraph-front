webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Booklist.js":
/*!********************************!*\
  !*** ./components/Booklist.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/index.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/huangcrab/Documents/GitHub/testGraph-front/components/Booklist.js";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  {\n    books {\n      name\n      id\n      genre\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var getBooksQuery = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"])(_templateObject());

var Booklist =
/*#__PURE__*/
function () {
  function Booklist() {
    _classCallCheck(this, Booklist);
  }

  _createClass(Booklist, [{
    key: "render",
    value: function render() {
      var data = this.props.data;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "list-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, data.loading ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, "Loading books...") : data.books.map(function (book) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          className: "list-group-item d-flex justify-content-between align-items-center",
          key: book.id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          },
          __self: this
        }, book.name, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "badge badge-primary badge-pill",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          },
          __self: this
        }, book.genre));
      })));
    }
  }]);

  return Booklist;
}();

/* harmony default export */ __webpack_exports__["default"] = (Object(react_apollo__WEBPACK_IMPORTED_MODULE_2__["graphql"])(getBooksQuery)(Booklist));

/***/ })

})
//# sourceMappingURL=index.js.db4bcf1d7666f849408c.hot-update.js.map