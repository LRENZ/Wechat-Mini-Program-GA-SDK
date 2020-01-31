(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Interceptor.js":
/*!****************************!*\
  !*** ./src/Interceptor.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Interceptor =
/*#__PURE__*/
function () {
  function Interceptor() {
    _classCallCheck(this, Interceptor);

    this._list = [];
    this.use = this.u;
    this.list = this.l;
    this.remove = this.clear;
  }

  _createClass(Interceptor, [{
    key: "u",
    value: function u(fn) {
      this._list.push(fn);
    }
  }, {
    key: "l",
    value: function l() {
      return this._list;
    }
  }, {
    key: "clear",
    value: function clear() {
      this._list = [];
    }
  }]);

  return Interceptor;
}();

/* harmony default export */ __webpack_exports__["default"] = (Interceptor);

/***/ }),

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var _default = {
  debug: true,
  proxyURL: '',
  GAdebugURL: "https://www.google-analytics.com/debug/collect",
  KeepTransferRequest: false,
  KeepTransferReponse: false,
  validateHit: false,
  GAURL: "https://www.google-analytics.com/collect",
  method: 'get',
  headers: {
    common: {
      'X-Request-By': 'XMLHttpRequest'
    }
  },
  data: {},
  rest: ''
};
/* harmony default export */ __webpack_exports__["default"] = (_default);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mp */ "./src/mp.js");

var t = {
  transferRequest: function transferRequest(config) {
    config.test = "new tt";
    return config;
  },
  transferResponse: function transferResponse(res) {
    res.test = "test";
    console.log(res);
    return res;
  },
  validateHit: true
};
var a = new _mp__WEBPACK_IMPORTED_MODULE_0__["default"](t);
a.interceptors.request.use(function (config) {
  config.rest = 'true'; //alert('tt')

  return config;
});
window.test = new _mp__WEBPACK_IMPORTED_MODULE_0__["default"]();
a.get("/debug/collect", {
  data: {
    test: 1
  }
});
a.post("/debug/collect", {
  data: {
    test: 2
  }
}); //console.log(a.Interceptor)

console.log(a);

/***/ }),

/***/ "./src/mp.js":
/*!*******************!*\
  !*** ./src/mp.js ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "./src/config.js");
/* harmony import */ var _Interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Interceptor */ "./src/Interceptor.js");
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./request */ "./src/request.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





function request() {}

var MP =
/*#__PURE__*/
function () {
  function MP() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, MP);

    this["default"] = this.create(options);
    this.interceptors = {
      request: new _Interceptor__WEBPACK_IMPORTED_MODULE_1__["default"](),
      response: new _Interceptor__WEBPACK_IMPORTED_MODULE_1__["default"]()
    };
  }

  _createClass(MP, [{
    key: "get",
    value: function get() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var op = this._preprocessArgs("GET", args);

      if (!op) {}

      return this.request(op);
    }
  }, {
    key: "post",
    value: function post() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      var op = this._preprocessArgs('POST', args);

      console.log(op);

      if (!op) {
        return op;
      }

      return this.request(op);
    }
  }, {
    key: "create",
    value: function create() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var config = _objectSpread({}, JSON.parse(JSON.stringify(_config__WEBPACK_IMPORTED_MODULE_0__["default"])), {}, options);

      return config;
    }
  }, {
    key: "_preprocessArgs",
    value: function _preprocessArgs(method) {
      var options; //

      for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        args[_key3 - 1] = arguments[_key3];
      }

      var arg = args.flat(); //console.log(arg)

      if (arg.length == 1 && typeof arg[0] == 'string') {
        options = {
          method: method,
          url: arg[0]
        };
      } else if (arg.length != 1 && arg[1].constructor == Object) {
        options = _objectSpread({}, arg[1], {
          method: method,
          url: arg[0]
        });
      } else {
        return undefined;
      }

      return options;
    }
  }, {
    key: "preSent",
    value: function preSent(fn) {}
  }, {
    key: "onSuccess",
    value: function onSuccess(fn) {
      console.log('res');
    }
  }, {
    key: "onError",
    value: function onError(fn) {
      console.log("error");
    }
  }, {
    key: "getEnvURL",
    value: function getEnvURL(config) {
      if (config.debug && config.validateHit) {
        return config.GAdebugURL;
      }

      if (config.debug) {
        return config.GAURL;
      }

      if (!config.debug) {
        return config.proxyURL;
      }
    }
  }, {
    key: "request",
    value: function request(options) {
      var res = new _request__WEBPACK_IMPORTED_MODULE_2__["default"](); // 合并

      var cog = _objectSpread({}, this["default"], {}, options);

      console.log(cog); // 检验参数
      //替换 baseURL

      cog.url = this.getEnvURL(cog); //console.log(cog)
      // 变换下请求

      var _cog = cog,
          transferRequest = _cog.transferRequest;
      if (!cog.KeepTransferRequest) delete cog.transferRequest;
      if (transferRequest) cog = transferRequest(cog);
      console.log(cog);
      var list = this.interceptors.request.list();
      list.forEach(function (fn) {
        cog = fn(cog);
      });
      console.log(cog);
      window.cog = cog;
      window.res = res;
      cog.success = this.onSuccess;
      cog.fail = this.onError; // 正式请求

      return res.send(cog);
    }
  }]);

  return MP;
}();

/* harmony default export */ __webpack_exports__["default"] = (MP);

/***/ }),

/***/ "./src/request.js":
/*!************************!*\
  !*** ./src/request.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Request =
/*#__PURE__*/
function () {
  function Request() {
    _classCallCheck(this, Request);
  }

  _createClass(Request, [{
    key: "ajax",
    value: function ajax(options) {
      this.request(options);
    }
  }, {
    key: "request",
    value: function request(option) {
      //let {url,method,data} = option
      // object to params?
      if (String(option) !== '[object Object]') return undefined;
      option.method = option.method ? option.method.toUpperCase() : 'GET';
      option.data = option.data || {};
      var formData = [];

      for (var key in option.data) {
        formData.push(''.concat(key, '=', option.data[key]));
      }

      option.data = formData.join('&');

      if (option.method === 'GET') {
        option.getUrl = option.url;
      }

      var transferResponse = option.transferResponse;
      if (!option.KeepTransferReponse) delete option.transferRespons;
      console.log(option);
      var xhr = new XMLHttpRequest();
      xhr.responseType = option.responseType || 'json';

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            if (transferResponse) {
              option.success(transferResponse(xhr.response));
            } else {
              option.success(xhr.response);
            }
          } else {
            //this.fail()
            option.fail();
          }
        }
      };

      if (option.method == "GET") {
        xhr.open(option.method, option.getUrl, true);
        xhr.send();
      }

      if (option.method === 'POST') {
        xhr.open(option.method, option.url, true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send(option.data);
      } //console.loh(t)

    }
  }, {
    key: "weRequest",
    value: function weRequest(options) {
      if (!!wx) {}
    }
  }, {
    key: "isonWechat",
    value: function isonWechat() {
      return false;
    }
  }, {
    key: "send",
    value: function send(options) {
      if (this.isonWechat()) {
        return this.weRequest(options);
      }

      return this.ajax(options);
    }
  }]);

  return Request;
}();

/* harmony default export */ __webpack_exports__["default"] = (Request);

/***/ })

/******/ });
});
//# sourceMappingURL=mp.map