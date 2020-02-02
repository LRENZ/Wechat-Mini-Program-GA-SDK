module.exports =
/******/ (function(modules) { // webpackBootstrap
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

/***/ "./src/common.js":
/*!***********************!*\
  !*** ./src/common.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Store =
/*#__PURE__*/
function () {
  function Store() {
    _classCallCheck(this, Store);

    this.GAlog = [];
  }

  _createClass(Store, [{
    key: "env",
    value: function env() {
      if ((typeof wx === "undefined" ? "undefined" : _typeof(wx)) == "object") {
        console.log("on wechat");
        return "WECHAT";
      }

      if (!!document.URL) {
        console.log("on Web");
        return "WEB";
      }
    }
  }, {
    key: "add",
    value: function add(val) {
      if (this.env() == "WEB") {
        this.GAlog.push(val);
        this.GAlog = this.GAlog.reverse();
        window.localStorage.setItem("gaLog", JSON.stringify(this.GAlog));
        return this.getLog();
      }

      if (this.env() == "WECHAT") {
        this.GAlog.push(val);
        this.GAlog = this.GAlog;
        wx.setStorageSync("gaLog", this.GAlog);
        return this.getLog();
      }
    }
  }, {
    key: "remove",
    value: function remove() {
      if (this.env() == "WEB") {
        this.GAlog = [];
        window.localStorage.clear();
        return this.getLog();
      }

      if (this.env() == 'WECHAT') {
        this.GAlog = [];
        wx.setStorageSync("gaLog", this.GAlog);
        return this.getLog();
      } //wechat

    }
  }, {
    key: "shift",
    value: function shift() {
      if (this.env() == "WEB") {
        this.GAlog.shift();
        this.GAlog = this.GAlog.reverse();
        window.localStorage.setItem("gaLog", JSON.stringify(this.GAlog));
        return this.getLog();
      }

      if (this.env() == "WECHAT") {
        this.GAlog.shift();
        this.GAlog = this.GAlog;
        wx.setStorageSync("gaLog", this.GAlog);
        return this.getLog();
      } //wechat

    }
  }, {
    key: "size",
    value: function size() {
      if (this.env() == "WEB") {
        return this.GAlog.length;
      }

      if (this.env() == "WECHAT") {
        return this.GAlog.length;
      } //wechat

    }
  }, {
    key: "sortByTime",
    value: function sortByTime(a, b) {
      return new Date(a.time) - new Date(b.time);
    }
  }, {
    key: "getLog",
    value: function getLog() {
      if (this.env() == "WECHAT") {
        return wx.getStorageSync("gaLog");
      }

      if (this.env() == "WEB") {
        return window.localStorage.getItem("gaLog");
      }
    }
  }]);

  return Store;
}();

/* harmony default export */ __webpack_exports__["default"] = (Store);

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
  maxLogLength: 20,
  GAURL: "https://www.google-analytics.com/collect",
  method: 'POST',
  headers: {
    'X-Request-By': 'XMLHttpRequest',
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  rest: '',
  wxRequestTimeout: 2000
};
/* harmony default export */ __webpack_exports__["default"] = (_default);

/***/ }),

/***/ "./src/helper.js":
/*!***********************!*\
  !*** ./src/helper.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var helpers =
/*#__PURE__*/
function () {
  function helpers() {
    _classCallCheck(this, helpers);
  }

  _createClass(helpers, [{
    key: "objectToParams",
    value: function objectToParams(obj) {
      Object.keys(obj).map(function (key) {
        return key + '=' + obj[key];
      }).join('&');
    }
  }, {
    key: "Error",
    value: function (_Error) {
      function Error(_x) {
        return _Error.apply(this, arguments);
      }

      Error.toString = function () {
        return _Error.toString();
      };

      return Error;
    }(function (msg) {
      if (msg) {
        throw new Error(msg);
      }
    })
  }, {
    key: "merge",
    value: function merge(dest, src) {
      if (JSON.stringify(src) === '{}') return dest;

      for (var name in src) {
        if (_typeof(src[name]) == 'object') {
          if (!dest[name]) {
            dest[name] = {};
          }

          this.merge(dest[name], src[name]);
        } else {
          dest[name] = src[name];
        }
      }
    }
  }, {
    key: "formatTime",
    value: function formatTime(date) {
      var year = date.getFullYear();
      var month = date.getMonth() + 1;
      var day = date.getDate();
      var hour = date.getHours();
      var minute = date.getMinutes();
      var second = date.getSeconds();
      return [year, month, day].map(this.formatNumber).join('/') + ' ' + [hour, minute, second].map(this.formatNumber).join(':');
    }
  }, {
    key: "formatNumber",
    value: function formatNumber(n) {
      n = n.toString();
      return n[1] ? n : '0' + n;
    }
  }]);

  return helpers;
}();

var helper = new helpers();
/* harmony default export */ __webpack_exports__["default"] = (helper);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mp */ "./src/mp.js");

/*let t = {

  transferRequest(config){
    config.data.dp = "/test"
    return config
  },
  data:{
    cid:1,
    ua:"test_ua",
    ul:"zh_cn",

  },

  transferResponse(res){
    res.test = "test"
    console.log(res)
    return res
  },
  validateHit:false,

  onSuccess(config){
    console.log("success")
  },
  onError(config){
    console.log("Error")
  }
}


let a = new MP(t)

a.interceptors.request.use(function(config) {
  config.rest = 'true';
  //alert('tt')
  return config;
});


//let s = {
  //debug:true,
  //validateHit:true,
  //proxyURL:"https://linpiner.com/",
//}
//let b = new MP(s)
//window.test = new MP()
//a.get("/debug/collect",{data:{test:1}})
//a.post("/debug/collect",{data:{test:2}})
a.post({data:{tid:"UA-123456",v:"1"}})
a.get({data:{"cd1":"test"}})
//a.post({data:{tid:"UA-987654"}})
//b.post({data:{'test':1}})
//console.log(a.Interceptor)
*/
//window.a = a

/* harmony default export */ __webpack_exports__["default"] = (_mp__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/log.js":
/*!********************!*\
  !*** ./src/log.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ "./src/common.js");
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helper */ "./src/helper.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var Logger =
/*#__PURE__*/
function () {
  function Logger(config) {
    _classCallCheck(this, Logger);

    this.log = new _common__WEBPACK_IMPORTED_MODULE_0__["default"]();
    this.maxLogLength = config.maxLogLength;
    this.debug = config.debug;
  }

  _createClass(Logger, [{
    key: "enqueue",
    value: function enqueue(val) {
      if (!this.debug) {
        console.log("debug mode paused, won't record any log right now");
      }

      if (this.size() < this.maxLogLength) {
        this.log.add(_objectSpread({
          time: _helper__WEBPACK_IMPORTED_MODULE_1__["default"].formatTime(new Date())
        }, val));
      }

      if (this.size() >= this.maxLogLength) {
        this.log.shift();
        this.log.add(_objectSpread({
          time: _helper__WEBPACK_IMPORTED_MODULE_1__["default"].formatTime(new Date())
        }, val));
      }

      return this.log;
    }
  }, {
    key: "dequeue",
    value: function dequeue() {
      var de = this.log.shift();
      return de;
    }
  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return this.log.length === 0;
    }
  }, {
    key: "clear",
    value: function clear() {
      this.log.remove();
      return this.log;
    }
  }, {
    key: "size",
    value: function size() {
      return this.log.size();
    }
  }, {
    key: "getlog",
    value: function getlog() {
      return this.log;
    }
  }]);

  return Logger;
}();

/* harmony default export */ __webpack_exports__["default"] = (Logger);

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
/* harmony import */ var _validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./validation */ "./src/validation.js");
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helper */ "./src/helper.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common */ "./src/common.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }








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
    key: "getLog",
    value: function getLog() {
      var log = new _common__WEBPACK_IMPORTED_MODULE_5__["default"]();
      return log.getLog();
    }
  }, {
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

      var op = this._preprocessArgs('POST', args); //console.log(op)


      if (!op) {
        return op;
      }

      return this.request(op);
    }
  }, {
    key: "create",
    value: function create() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      if (JSON.stringify(options) === '{}') throw new Error("Error : config could not empty!");

      var config = _objectSpread({}, JSON.parse(JSON.stringify(_config__WEBPACK_IMPORTED_MODULE_0__["default"])), {}, options);

      config.url = this.getEnvURL(config);
      _helper__WEBPACK_IMPORTED_MODULE_4__["default"].merge(config.data, config.defaultGaData);
      console.log(config);
      return config;
    }
  }, {
    key: "_preprocessArgs",
    value: function _preprocessArgs(method) {
      var options; //

      for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        args[_key3 - 1] = arguments[_key3];
      }

      var arg = args.flat(); //window.arg = arg

      if (_typeof(arg[0]) == "object") {
        options = _objectSpread({
          method: method,
          url: this["default"].url
        }, arg[0]);
      }

      console.log('aeg'); //let { error, value } = schema.validate(options.data);
      //console.log(error)
      //helper.Error(error)

      console.log(options); //console.log(arg)

      /*if (arg.length == 1 && typeof arg[0] == 'string') {
        options = { method, url: arg[0] };
      } else if (arg.length != 1 && arg[1].constructor == Object) {
        options = {
          ...arg[1],
          method,
          url:arg[0],
        };
      } else if(arg[0].constructor == Object) {
        options = {method, url:this.getEnvURL()}
        return options;
      }else{
        return undefined;
      }*/

      return options;
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

      var cog = options;
      var mh = options.method; //delete options.data
      //let cog = {
      //...this.default,
      //...options
      //}
      //console.log(this.default)

      _helper__WEBPACK_IMPORTED_MODULE_4__["default"].merge(cog, this["default"]);
      cog.method = mh; // 检验参数
      //替换 baseURL
      //cog.url = this.getEnvURL(cog)
      //console.log(cog)
      // 变换下请求

      var _cog = cog,
          transferRequest = _cog.transferRequest;
      if (transferRequest) cog = transferRequest(cog); //delete cog.transferRequest
      //delete this.default.transferRequest
      //transferRequest = (cog) => cog;

      var list = this.interceptors.request.list();
      list.forEach(function (fn) {
        cog = fn(cog);
      }); //window.cog = cog
      //window.cog = cog
      //window.res= res
      //cog.success = this.onSuccess
      //cog.fail = this.onError
      // 正式请求

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
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./log */ "./src/log.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ "./src/config.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Log = new _log__WEBPACK_IMPORTED_MODULE_0__["default"](_config__WEBPACK_IMPORTED_MODULE_1__["default"]);

var Request =
/*#__PURE__*/
function () {
  function Request() {
    _classCallCheck(this, Request);
  }

  _createClass(Request, [{
    key: "webRequest",
    value: function webRequest(option) {
      //let {url,method,data} = option
      // object to params?
      window.option = option;
      if (String(option) !== '[object Object]') return undefined;
      option.method = option.method ? option.method.toUpperCase() : 'POST';
      option.data = option.data || {};
      var formData = [];

      for (var key in option.data) {
        formData.push(''.concat(key, '=', option.data[key]));
      }

      option.data = formData.join('&');

      if (option.method === 'GET') {
        option.getUrl = option.url + "?" + option.data;
      }

      var transferResponse = option.transferResponse;
      console.log(option);
      var xhr = new XMLHttpRequest();
      xhr.responseType = option.responseType || 'json';

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            if (transferResponse) {
              console.log(xhr.response);
              Log.enqueue({
                url: option.url ? option.url : option.getUrl,
                data: option.data,
                res: option.validateHit ? transferResponse(xhr.response) : xhr.status //transferResponse(xhr.response)

              });

              if (!!option.onSuccess) {
                option.onSuccess(option);
              } //delete option.transferRespons
              //transferResponse = (res)=> res

            } else {
              Log.enqueue({
                url: option.url ? option.url : option.getUrl,
                data: option.data,
                res: option.validateHit ? xhr.response : xhr.status
              });

              if (!!option.onSuccess) {
                option.onSuccess(option);
              }
            }
          } else {
            //this.fail()
            Log.enqueue({
              error: "Error",
              url: option.url ? option.url : option.getUrl,
              res: option.validateHit ? xhr.response : "Error" //data:option.data,
              //transferResponse(xhr.response)

            });

            if (!!option.onError) {
              option.onError(option);
            }
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
      console.log("test on wechat");
      var transferResponse = options.transferResponse;
      wx.request({
        url: options.url,
        method: options.method,
        data: options.data,
        header: options.headers,
        timeout: options.wxRequestTimeout,
        success: function success(res) {
          console.log(res);

          if (transferResponse) {
            Log.enqueue({
              url: options.url ? options.url : options.getUrl,
              data: options.data,
              res: options.transferResponse(res)
            });
          } else {
            Log.enqueue({
              url: options.url ? options.url : options.getUrl,
              data: options.data,
              res: res
            });
          }

          if (!!options.onSuccess) {
            options.onSuccess(options);
          }
        },
        fail: function fail(res) {
          console.log(res);

          if (transferResponse) {
            Log.enqueue({
              url: options.url ? options.url : options.getUrl,
              data: options.data,
              res: options.transferResponse(res)
            });
          } else {
            Log.enqueue({
              url: options.url ? options.url : options.getUrl,
              data: options.data,
              res: res
            });
          }

          if (!!options.onError) {
            options.onError(options);
          }
        }
      });
    }
  }, {
    key: "isonWechat",
    value: function isonWechat() {
      return (typeof wx === "undefined" ? "undefined" : _typeof(wx)) == 'object' ? true : false;
    }
  }, {
    key: "send",
    value: function send(options) {
      if (this.isonWechat()) {
        return this.weRequest(options);
      }

      return this.webRequest(options);
    }
  }]);

  return Request;
}();

/* harmony default export */ __webpack_exports__["default"] = (Request);

/***/ }),

/***/ "./src/validation.js":
/*!***************************!*\
  !*** ./src/validation.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//const Joi = require('@hapi/joi');
var schema = {};
/* harmony default export */ __webpack_exports__["default"] = (schema);

/***/ })

/******/ });
//# sourceMappingURL=mp.map