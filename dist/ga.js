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

/***/ "./src/EecUtils.js":
/*!*************************!*\
  !*** ./src/EecUtils.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "./src/config.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }



function checkObjList(obj) {
  if (_typeof(obj) !== 'object') {
    return "Error, this is not a object";
  }

  if (obj.hasOwnProperty('list')) {
    return true;
  }

  return false;
}

function impressionListIndex(imp) {
  var listMapping = new Map();
  var ls = [];

  if (imp.every(checkObjList)) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = imp[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var x = _step.value;

        if (x.hasOwnProperty('list')) {
          ls.push(x['list']);
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    var _lst = _toConsumableArray(new Set(ls)); //console.log(lst)


    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = _lst.entries()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var _step2$value = _slicedToArray(_step2.value, 2),
            i = _step2$value[0],
            v = _step2$value[1];

        listMapping.set(v, i + 1);
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
          _iterator2["return"]();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }

    listMapping.set("type", "every");
    return listMapping;
  }

  if (imp.some(checkObjList)) {
    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
      for (var _iterator3 = imp.entries()[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        var _step3$value = _slicedToArray(_step3.value, 2),
            _i2 = _step3$value[0],
            _x = _step3$value[1];

        if (_x.hasOwnProperty('list')) {
          ls.push(_x['list']);
        }

        ls.push("_not_set_");
      }
    } catch (err) {
      _didIteratorError3 = true;
      _iteratorError3 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
          _iterator3["return"]();
        }
      } finally {
        if (_didIteratorError3) {
          throw _iteratorError3;
        }
      }
    }

    var _lst2 = _toConsumableArray(new Set(ls)); //console.log(lst)


    var _iteratorNormalCompletion4 = true;
    var _didIteratorError4 = false;
    var _iteratorError4 = undefined;

    try {
      for (var _iterator4 = _lst2.entries()[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
        var _step4$value = _slicedToArray(_step4.value, 2),
            _i3 = _step4$value[0],
            _v = _step4$value[1];

        listMapping.set(_v, _i3 + 1);
      }
    } catch (err) {
      _didIteratorError4 = true;
      _iteratorError4 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion4 && _iterator4["return"] != null) {
          _iterator4["return"]();
        }
      } finally {
        if (_didIteratorError4) {
          throw _iteratorError4;
        }
      }
    }

    listMapping.set("type", "some"); //console.log(listMapping)

    return listMapping;
  }

  if (ls.length == imp.length) {
    listMapping.set('len', lst.length);
  } //console.log(ls)


  var lst = _toConsumableArray(new Set(ls)); //console.log(lst)


  var _iteratorNormalCompletion5 = true;
  var _didIteratorError5 = false;
  var _iteratorError5 = undefined;

  try {
    for (var _iterator5 = lst.entries()[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
      var _step5$value = _slicedToArray(_step5.value, 2),
          _i4 = _step5$value[0],
          _v2 = _step5$value[1];

      listMapping.set(_v2, _i4 + 1);
    }
  } catch (err) {
    _didIteratorError5 = true;
    _iteratorError5 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion5 && _iterator5["return"] != null) {
        _iterator5["return"]();
      }
    } finally {
      if (_didIteratorError5) {
        throw _iteratorError5;
      }
    }
  }

  listMapping.set("type", "none");
  return listMapping;
}

function isEmptyObj(obj) {
  if (Object.keys(obj).length === 0 && obj.constructor === Object) {
    return true;
  }

  return false;
}

var EEC =
/*#__PURE__*/
function () {
  function EEC() {
    _classCallCheck(this, EEC);

    this.objectEntriesPolyfilll();
  }

  _createClass(EEC, [{
    key: "objectEntriesPolyfilll",
    value: function objectEntriesPolyfilll() {
      if (!Object.entries) Object.entries = function (obj) {
        var ownProps = Object.keys(obj),
            i = ownProps.length,
            resArray = new Array(i); // preallocate the Array

        while (i--) {
          resArray[i] = [ownProps[i], obj[ownProps[i]]];
        }

        return resArray;
      };
    }
  }, {
    key: "impresstion",
    value: function impresstion(obj, cd, cm) {
      if (!obj.hasOwnProperty("impresstion")) return {};
      if (!Array.isArray(obj.impresstion)) throw new Error("impresstion must be a object array");

      var pcd = _objectSpread({}, _config__WEBPACK_IMPORTED_MODULE_0__["default"].productScopeCD, {}, cd);

      var pcm = _objectSpread({}, _config__WEBPACK_IMPORTED_MODULE_0__["default"].productScopeCM, {}, cm);

      var product = {};
      var ilLen = impressionListIndex(obj.impresstion).get("type");
      var ilMap = impressionListIndex(obj.impresstion);
      ilMap["delete"]("type"); //has list on the object

      if (ilLen == "every") {
        var _iteratorNormalCompletion6 = true;
        var _didIteratorError6 = false;
        var _iteratorError6 = undefined;

        try {
          for (var _iterator6 = ilMap.entries()[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
            var _step6$value = _slicedToArray(_step6.value, 2),
                id = _step6$value[0],
                ls = _step6$value[1];

            product["il".concat(ls, "nm")] = id;
          }
        } catch (err) {
          _didIteratorError6 = true;
          _iteratorError6 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion6 && _iterator6["return"] != null) {
              _iterator6["return"]();
            }
          } finally {
            if (_didIteratorError6) {
              throw _iteratorError6;
            }
          }
        }

        var _iteratorNormalCompletion7 = true;
        var _didIteratorError7 = false;
        var _iteratorError7 = undefined;

        try {
          for (var _iterator7 = obj.impresstion.entries()[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
            var _step7$value = _slicedToArray(_step7.value, 2),
                i = _step7$value[0],
                v = _step7$value[1];

            var listIndex = ilMap.get(v.list) || i + 1;

            if (v.hasOwnProperty('name')) {
              product["il".concat(listIndex, "pi").concat(i + 1, "nm")] = v['name'];
            }

            if (v.hasOwnProperty('id')) {
              product["il".concat(listIndex, "pi").concat(i + 1, "id")] = v['id'];
            }

            if (v.hasOwnProperty('category')) {
              product["il".concat(listIndex, "pi").concat(i + 1, "ca")] = v['category'];
            }

            if (v.hasOwnProperty('brand')) {
              product["il".concat(listIndex, "pi").concat(i + 1, "br")] = v['brand'];
            }

            if (v.hasOwnProperty('category')) {
              product["il".concat(listIndex, "pi").concat(i + 1, "ca")] = v['category'];
            }

            if (v.hasOwnProperty('variant')) {
              product["il".concat(listIndex, "pi").concat(i + 1, "va")] = v['variant'];
            }

            if (v.hasOwnProperty('price')) {
              product["il".concat(listIndex, "pi").concat(i + 1, "pr")] = v['price'];
            }

            if (v.hasOwnProperty('position')) {
              product["il".concat(listIndex, "pi").concat(i + 1, "ps")] = v['position'];
            }

            if (!isEmptyObj(pcd)) {
              for (var k in pcd) {
                if (!!k && pcd[k]) {
                  product["il".concat(listIndex, "pi").concat(i + 1, "cd").concat(k)] = pcd[k];
                }
              }
            }

            if (!isEmptyObj(pcm)) {
              for (var _k in pcm) {
                if (!!_k && pcm[_k]) {
                  product["il".concat(listIndex, "pi").concat(i + 1, "cm").concat(_k)] = pcm[_k];
                }
              }
            }
          }
        } catch (err) {
          _didIteratorError7 = true;
          _iteratorError7 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion7 && _iterator7["return"] != null) {
              _iterator7["return"]();
            }
          } finally {
            if (_didIteratorError7) {
              throw _iteratorError7;
            }
          }
        }

        return product;
      } else if (ilLen == "some") {
        var _iteratorNormalCompletion8 = true;
        var _didIteratorError8 = false;
        var _iteratorError8 = undefined;

        try {
          for (var _iterator8 = ilMap.entries()[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
            var _step8$value = _slicedToArray(_step8.value, 2),
                _id = _step8$value[0],
                _ls = _step8$value[1];

            if (typeof _id == "string") {
              product["il".concat(_ls, "nm")] = _id;
            }

            var _iteratorNormalCompletion9 = true;
            var _didIteratorError9 = false;
            var _iteratorError9 = undefined;

            try {
              for (var _iterator9 = obj.impresstion.entries()[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
                var _step9$value = _slicedToArray(_step9.value, 2),
                    _i5 = _step9$value[0],
                    _v3 = _step9$value[1];

                var _listIndex = ilMap.get(_v3.list) || ilMap.get("_not_set_");

                if (_v3.hasOwnProperty('name')) {
                  product["il".concat(_listIndex, "pi").concat(_i5 + 1, "nm")] = _v3['name'];
                }

                if (_v3.hasOwnProperty('id')) {
                  product["il".concat(_listIndex, "pi").concat(_i5 + 1, "id")] = _v3['id'];
                }

                if (_v3.hasOwnProperty('category')) {
                  product["il".concat(_listIndex, "pi").concat(_i5 + 1, "ca")] = _v3['category'];
                }

                if (_v3.hasOwnProperty('brand')) {
                  product["il".concat(_listIndex, "pi").concat(_i5 + 1, "br")] = _v3['brand'];
                }

                if (_v3.hasOwnProperty('category')) {
                  product["il".concat(_listIndex, "pi").concat(_i5 + 1, "ca")] = _v3['category'];
                }

                if (_v3.hasOwnProperty('variant')) {
                  product["il".concat(_listIndex, "pi").concat(_i5 + 1, "va")] = _v3['variant'];
                }

                if (_v3.hasOwnProperty('price')) {
                  product["il".concat(_listIndex, "pi").concat(_i5 + 1, "pr")] = _v3['price'];
                }

                if (_v3.hasOwnProperty('position')) {
                  product["il".concat(_listIndex, "pi").concat(_i5 + 1, "ps")] = _v3['position'];
                }

                if (!isEmptyObj(pcd)) {
                  for (var _k2 in pcd) {
                    if (!!_k2 && pcd[_k2]) {
                      product["il".concat(_listIndex, "pi").concat(_i5 + 1, "cd").concat(_k2)] = pcd[_k2];
                    }
                  }
                }

                if (!isEmptyObj(pcm)) {
                  for (var _k3 in pcm) {
                    if (!!_k3 && pcm[_k3]) {
                      product["il".concat(_listIndex, "pi").concat(_i5 + 1, "cm").concat(_k3)] = pcm[_k3];
                    }
                  }
                }
              }
            } catch (err) {
              _didIteratorError9 = true;
              _iteratorError9 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion9 && _iterator9["return"] != null) {
                  _iterator9["return"]();
                }
              } finally {
                if (_didIteratorError9) {
                  throw _iteratorError9;
                }
              }
            }
          } //console.log(product)

        } catch (err) {
          _didIteratorError8 = true;
          _iteratorError8 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion8 && _iterator8["return"] != null) {
              _iterator8["return"]();
            }
          } finally {
            if (_didIteratorError8) {
              throw _iteratorError8;
            }
          }
        }

        return product;
      } else {
        // no list on the object
        var _iteratorNormalCompletion10 = true;
        var _didIteratorError10 = false;
        var _iteratorError10 = undefined;

        try {
          for (var _iterator10 = obj.impresstion.entries()[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
            var _step10$value = _slicedToArray(_step10.value, 2),
                _i6 = _step10$value[0],
                _v4 = _step10$value[1];

            var _listIndex2 = 1;

            if (_v4.hasOwnProperty('name')) {
              product["il".concat(_listIndex2, "pi").concat(_i6 + 1, "nm")] = _v4['name'];
            }

            if (_v4.hasOwnProperty('id')) {
              product["il".concat(_listIndex2, "pi").concat(_i6 + 1, "id")] = _v4['id'];
            }

            if (_v4.hasOwnProperty('category')) {
              product["il".concat(_listIndex2, "pi").concat(_i6 + 1, "ca")] = _v4['category'];
            }

            if (_v4.hasOwnProperty('brand')) {
              product["il".concat(_listIndex2, "pi").concat(_i6 + 1, "br")] = _v4['brand'];
            }

            if (_v4.hasOwnProperty('category')) {
              product["il".concat(_listIndex2, "pi").concat(_i6 + 1, "ca")] = _v4['category'];
            }

            if (_v4.hasOwnProperty('variant')) {
              product["il".concat(_listIndex2, "pi").concat(_i6 + 1, "va")] = _v4['variant'];
            }

            if (_v4.hasOwnProperty('price')) {
              product["il".concat(_listIndex2, "pi").concat(_i6 + 1, "pr")] = _v4['price'];
            }

            if (_v4.hasOwnProperty('position')) {
              product["il".concat(_listIndex2, "pi").concat(_i6 + 1, "ps")] = _v4['position'];
            }

            if (!isEmptyObj(pcd)) {
              for (var _k4 in pcd) {
                if (!!_k4 && pcd[_k4]) {
                  product["il".concat(_listIndex2, "pi").concat(_i6 + 1, "cd").concat(_k4)] = pcd[_k4];
                }
              }
            }

            if (!isEmptyObj(pcm)) {
              for (var _k5 in pcm) {
                if (!!_k5 && pcm[_k5]) {
                  product["il".concat(_listIndex2, "pi").concat(_i6 + 1, "cm").concat(_k5)] = pcm[_k5];
                }
              }
            }
          }
        } catch (err) {
          _didIteratorError10 = true;
          _iteratorError10 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion10 && _iterator10["return"] != null) {
              _iterator10["return"]();
            }
          } finally {
            if (_didIteratorError10) {
              throw _iteratorError10;
            }
          }
        }
      }

      return product;
    }
    /*var t = {
      "promotions": [{
    "id": "bts",
    "name": "Back To School",
    "creative": "HOME banner",
    "position": "right sidebar"
    }]
    }*/

  }, {
    key: "promotions",
    value: function promotions(obj) {
      if (!obj.hasOwnProperty("promotions")) return {};
      if (!Array.isArray(obj.promotions)) throw new Error("promotion must be a object array");
      var product = {}; ///if(obj.promotions.hasOwnProperty('action')){
      //  product['promoa'] = obj.promotions.action
      //}

      var _iteratorNormalCompletion11 = true;
      var _didIteratorError11 = false;
      var _iteratorError11 = undefined;

      try {
        for (var _iterator11 = obj.promotions.entries()[Symbol.iterator](), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
          var _step11$value = _slicedToArray(_step11.value, 2),
              i = _step11$value[0],
              v = _step11$value[1];

          if (v.hasOwnProperty("id")) {
            product["promo".concat(i + 1, "id")] = v['id'];
          }

          if (v.hasOwnProperty("name")) {
            product["promo".concat(i + 1, "nm")] = v['name'];
          }

          if (v.hasOwnProperty("creative")) {
            product["promo".concat(i + 1, "cr")] = v['creative'];
          }

          if (v.hasOwnProperty("position")) {
            product["promo".concat(i + 1, "ps")] = v['position'];
          }
        }
      } catch (err) {
        _didIteratorError11 = true;
        _iteratorError11 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion11 && _iterator11["return"] != null) {
            _iterator11["return"]();
          }
        } finally {
          if (_didIteratorError11) {
            throw _iteratorError11;
          }
        }
      }

      return product;
    }
    /*promotions(t)
      var t = {"products": [{
        "id": "bc823",
        "name": "Fuelworks T-Shirt",
        "price": "92.00",
        "brand": "Fuelworks",
        "category": "T-Shirts",
        "position": "4"
      }]
    }*/

  }, {
    key: "products",
    value: function products(obj, cd, cm) {
      if (!obj.hasOwnProperty("products")) return {};
      if (!Array.isArray(obj.products)) throw new Error("products must be a object array");

      var pcd = _objectSpread({}, _config__WEBPACK_IMPORTED_MODULE_0__["default"].productScopeCD, {}, cd);

      var pcm = _objectSpread({}, _config__WEBPACK_IMPORTED_MODULE_0__["default"].productScopeCM, {}, cm);

      var product = {};
      var _iteratorNormalCompletion12 = true;
      var _didIteratorError12 = false;
      var _iteratorError12 = undefined;

      try {
        for (var _iterator12 = obj.products.entries()[Symbol.iterator](), _step12; !(_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done); _iteratorNormalCompletion12 = true) {
          var _step12$value = _slicedToArray(_step12.value, 2),
              i = _step12$value[0],
              v = _step12$value[1];

          if (v.hasOwnProperty('id')) {
            product["pr".concat(i + 1, "id")] = v['id'];
          }

          if (v.hasOwnProperty('name')) {
            product["pr".concat(i + 1, "nm")] = v['name'];
          }

          if (v.hasOwnProperty('brand')) {
            product["pr".concat(i + 1, "br")] = v['brand'];
          }

          if (v.hasOwnProperty('price')) {
            product["pr".concat(i + 1, "pr")] = v['price'];
          }

          if (v.hasOwnProperty('category')) {
            product["pr".concat(i + 1, "ca")] = v['category'];
          }

          if (v.hasOwnProperty('variant')) {
            product["pr".concat(i + 1, "va")] = v['variant'];
          }

          if (v.hasOwnProperty('quantity')) {
            product["pr".concat(i + 1, "qt")] = v['quantity'];
          }

          if (v.hasOwnProperty('coupon')) {
            product["pr".concat(i + 1, "cc")] = v['coupon'];
          }

          if (v.hasOwnProperty('position')) {
            product["pr".concat(i + 1, "ps")] = v['position'];
          }

          if (!isEmptyObj(pcd)) {
            for (var k in pcd) {
              if (!!k && pcd[k]) {
                product["pr".concat(i + 1, "cd").concat(k)] = pcd[k];
              }
            }
          }

          if (!isEmptyObj(pcm)) {
            for (var _k6 in pcm) {
              if (!!_k6 && pcm[_k6]) {
                product["pr".concat(i + 1, "cm").concat(_k6)] = pcm[_k6];
              }
            }
          }
        }
      } catch (err) {
        _didIteratorError12 = true;
        _iteratorError12 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion12 && _iterator12["return"] != null) {
            _iterator12["return"]();
          }
        } finally {
          if (_didIteratorError12) {
            throw _iteratorError12;
          }
        }
      }

      return product;
    }
  }, {
    key: "checkEEC",
    value: function checkEEC(obj, cd, cm) {
      if (obj.hasOwnProperty('impresstion')) {
        var imp = this.impresstion(obj, cd, cm);
      }

      if (obj.hasOwnProperty("promotions")) {
        var promo = this.promotions(obj, cd, cm);
      }

      if (obj.hasOwnProperty("products")) {
        var prod = this.products(obj, cd, cm);
      }

      var eecObj = _objectSpread({}, imp, {}, promo, {}, prod);

      return eecObj;
    }
  }]);

  return EEC;
}();

var eec = new EEC();
/* harmony default export */ __webpack_exports__["default"] = (eec);

/***/ }),

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
  function Store(name) {
    _classCallCheck(this, Store);

    this.GAlog = this.GAlog || this.getLog() || [];

    if (typeof name != "string") {
      throw new Error("Logger Name must be string");
    }

    this.loggerName = name || "gaLog";
  }

  _createClass(Store, [{
    key: "env",
    value: function env() {
      if ((typeof wx === "undefined" ? "undefined" : _typeof(wx)) == "object") {
        return "WECHAT";
      }

      if (!!document.URL) {
        return "WEB";
      }
    }
  }, {
    key: "add",
    value: function add(val) {
      if (this.env() == "WEB") {
        this.GAlog.push(val);
        this.GAlog = this.GAlog.reverse();
        window.localStorage.setItem(this.loggerName, JSON.stringify(this.GAlog));
        return this.getLog();
      }

      if (this.env() == "WECHAT") {
        this.GAlog.push(val);
        this.GAlog = this.GAlog.reverse();
        wx.setStorage({
          key: this.loggerName,
          data: this.GAlog
        });
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
        wx.removeStorage({
          key: this.loggerName
        });
        return this.getLog();
      } //wechat

    }
  }, {
    key: "shift",
    value: function shift() {
      if (this.env() == "WEB") {
        this.GAlog.shift();
        this.GAlog = this.GAlog.reverse();
        window.localStorage.setItem(this.loggerName, JSON.stringify(this.GAlog));
        return this.getLog();
      }

      if (this.env() == "WECHAT") {
        this.GAlog.shift();
        this.GAlog = this.GAlog;
        wx.setStorage({
          key: this.loggerName,
          data: this.GAlog
        });
        return this.getLog();
      } //wechat

    }
  }, {
    key: "size",
    value: function size() {
      var galog = this.getLog() || 0; //console.log(galog)

      return galog.length || 0; //wechat
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
        var t = wx.getStorageSync(this.loggerName);
      } //console.log(t)


      return t;

      if (this.env() == "WEB") {
        try {
          return JSON.parse(window.localStorage.getItem(this.loggerName));
        } catch (e) {
          return window.localStorage.getItem(this.loggerName);
        }

        ;
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
  validateHit: false,
  maxLogLength: 10,
  GAURL: "https://www.google-analytics.com/collect",
  method: 'POST',
  headers: {
    'X-Request-By': 'XMLHttpRequest',
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  rest: '',
  wxRequestTimeout: 2000,
  enableLogger: true,
  validateParams: true,
  LoggerName: "gaLog"
};
/* harmony default export */ __webpack_exports__["default"] = (_default);

/***/ }),

/***/ "./src/ga.js":
/*!*******************!*\
  !*** ./src/ga.js ***!
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
/* harmony import */ var _EecUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./EecUtils.js */ "./src/EecUtils.js");
/* harmony import */ var _wechatUtils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./wechatUtils */ "./src/wechatUtils.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }











var GA =
/*#__PURE__*/
function () {
  function GA() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, GA);

    this.weUtils = new _wechatUtils__WEBPACK_IMPORTED_MODULE_7__["default"]();
    this["default"] = this.create(options);
    this.interceptors = {
      request: new _Interceptor__WEBPACK_IMPORTED_MODULE_1__["default"](),
      response: new _Interceptor__WEBPACK_IMPORTED_MODULE_1__["default"]()
    };
    this.validation = new _validation__WEBPACK_IMPORTED_MODULE_3__["default"]();
  }

  _createClass(GA, [{
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

      var op = this._preprocessArgs('POST', args);

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

      if ((typeof wx === "undefined" ? "undefined" : _typeof(wx)) == "object") {
        config.data.ua = this.weUtils.generateUA();
      }

      _helper__WEBPACK_IMPORTED_MODULE_4__["default"].merge(config.data, config.defaultGaData);
      return config;
    }
  }, {
    key: "_preprocessArgs",
    value: function _preprocessArgs(method) {
      var options;

      for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        args[_key3 - 1] = arguments[_key3];
      }

      var arg = args.flat();

      if (arg.length == 0) {
        options = {
          method: method,
          url: this["default"].url
        };
      }

      if (_typeof(arg[0]) == "object") {
        options = {
          method: method,
          url: this["default"].url,
          data: arg[0]
        };
      }

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
      var optionCopy = _helper__WEBPACK_IMPORTED_MODULE_4__["default"].deepClone(options);
      options.hitID = _helper__WEBPACK_IMPORTED_MODULE_4__["default"].generateUUID(); // 合并

      var cog = options;
      var mh = optionCopy.method;
      var opData = optionCopy.data;
      cog = _helper__WEBPACK_IMPORTED_MODULE_4__["default"].merge(cog, this["default"]); //helper.merge(cog,options)

      cog.method = mh;
      cog.data = _helper__WEBPACK_IMPORTED_MODULE_4__["default"].merge(cog.data, opData);
      var cc = _helper__WEBPACK_IMPORTED_MODULE_4__["default"].deepClone(cog);

      if (cc.data.hasOwnProperty("productScopeCD")) {
        var cogCd = cc.data.productScopeCD || {};
        delete cc.data.productScopeCD;
      }

      if (cog.data.hasOwnProperty("productScopeCM")) {
        var cogCm = cc.data.productScopeCM || {};
        delete cc.data.productScopeCM;
      }

      var eecobj = _EecUtils_js__WEBPACK_IMPORTED_MODULE_6__["default"].checkEEC(cc.data, cogCd, cogCm);
      cc.data = Object.assign(cc.data, eecobj);

      if (cc.data.hasOwnProperty("products")) {
        delete cc.data.products;
      }

      if (cc.data.hasOwnProperty("promotions")) {
        delete cc.data.promotions;
      }

      if (cc.data.hasOwnProperty("impresstion")) {
        delete cc.data.impresstion;
      }

      var res = new _request__WEBPACK_IMPORTED_MODULE_2__["default"](cc);

      if (cc.validateParams) {
        this.validation.use(cc.data);
      }

      var _cc = cc,
          transferRequest = _cc.transferRequest;
      if (transferRequest) cc = transferRequest(cc); //delete cog.transferRequest
      //delete this.default.transferRequest
      //transferRequest = (cog) => cog;

      var list = this.interceptors.request.list();
      list.forEach(function (fn) {
        cc = fn(cc);
      });
      return res.send(cc);
    }
  }]);

  return GA;
}();

/* harmony default export */ __webpack_exports__["default"] = (GA);

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
      var queryString = Object.keys(obj).map(function (key) {
        return key + '=' + obj[key];
      }).join('&');
      return queryString;
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

      return dest;
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
  }, {
    key: "generateUUID",
    value: function generateUUID() {
      var d = new Date().getTime();
      var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c == 'x' ? r : r & 0x7 | 0x8).toString(16);
      });
      return uuid;
    }
  }, {
    key: "deepClone",
    value: function deepClone(obj) {
      var copy; // Handle number, boolean, string, null and undefined

      if (null == obj || "object" != _typeof(obj)) return obj; // Handle Date

      if (obj instanceof Date) {
        copy = new Date();
        copy.setTime(obj.getTime());
        return copy;
      } // Handle Array


      if (obj instanceof Array) {
        copy = [];

        for (var i = 0, len = obj.length; i < len; i++) {
          copy[i] = this.deepClone(obj[i]);
        }

        return copy;
      } // Handle Object


      if (obj instanceof Object) {
        copy = {};

        for (var attr in obj) {
          if (obj.hasOwnProperty(attr)) copy[attr] = this.deepClone(obj[attr]);
        }

        return copy;
      }

      throw new Error("Unable to copy obj! Its type isn't supported.");
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
/* harmony import */ var _ga__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ga */ "./src/ga.js");

/*
let UA=()=> "UA-71412438-1"

let config = {
  transferRequest(config){
    console.log('do something before sending the hit')
    //config.data.dp = "/test"
    return config
  },
  data:{  //common request payload
    v:1,
    cid:1234556,
    tid:UA(),
    dp:"placeholder",
    ds:"wechat",
    cd1:"custom dimension1",
    pal:'search result'
  },
  LoggerName:"we",
  transferResponse(res){
    console.log("do something for the response")
    return res
  },
  validateHit:false, // will send to the vvalidation endpoint(optional)
  //proxyURL:"YOUR_PROXY_URL"
  onSuccess(config){
    console.log("success") //your custom success function (options)
  },
  onError(config){
    console.log("Error")
  },
  //maxLogLength:10,
  enableLogger:true,
}
var t = [{
     inputRegex:"/wechat",
     outputName:"/map"
}]
let G = new GA(config)
//window.GA= GA
G.interceptors.request.use(function(config) { // push a handler function before send request
  config.data.dp  = G.weUtils.map(t, config.data.dp) // process data before send to GA
  return config;
});

G.post({
  dp:"/wechat",
  t:'event',
  ec:"test",
  ea:"wechatSDK",
  pa:"detail",
  "products": [
    {
      "id": "bc823",
      "name": "Fuelworks T-Shirt",
      "price": "92.00",
      "brand": "Fuelworks",
      "category": "T-Shirts",
      "position": "4"
    },

    {
      "id": "bc843",
      "name": " T-Shirt",
      "price": "92.00",
      "brand": "Fuelworks",
      "category": "T-Shirts",
      "position": "4"
    },
  ],
    "promotions": [{
  "id": "bts",
  "name": "Back To School",
  "creative": "HOME banner",
  "position": "right sidebar"
}],
productScopeCD:{
  '3':'cd3',
  '6' : "cd6"
},

productScopeCM:{
  '4':100,
}

})
*/

/* harmony default export */ __webpack_exports__["default"] = (_ga__WEBPACK_IMPORTED_MODULE_0__["default"]);

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

    this.log = new _common__WEBPACK_IMPORTED_MODULE_0__["default"](config.LoggerName);
    this.maxLogLength = config.maxLogLength;
    this.enableLogger = config.enableLogger;
    this.init();
  }

  _createClass(Logger, [{
    key: "init",
    value: function init() {
      if (this.size() == 0) {
        this.log.add({
          time: _helper__WEBPACK_IMPORTED_MODULE_1__["default"].formatTime(new Date()),
          Launch: "Logger Init"
        });
      }
    }
  }, {
    key: "enqueue",
    value: function enqueue(val) {
      if (!this.enableLogger) {
        console.log("debug mode paused, won't record any log right now");
        return false;
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

      console.log(this.log);
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




var Request =
/*#__PURE__*/
function () {
  function Request(option) {
    _classCallCheck(this, Request);

    this.Log = new _log__WEBPACK_IMPORTED_MODULE_0__["default"](option);
  }

  _createClass(Request, [{
    key: "webRequest",
    value: function webRequest(option) {
      //let {url,method,data} = option
      // object to params?
      var that = this;
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

      var transferResponse = option.transferResponse; //console.log(option)

      var xhr = new XMLHttpRequest();
      xhr.responseType = option.responseType || 'json';

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            if (transferResponse) {
              //console.log(xhr.response)
              that.Log.enqueue({
                type: "success",
                url: option.url ? option.url : option.getUrl,
                data: this.removeEmptyObjKey(options.data),
                res: option.validateHit ? transferResponse(xhr.response) : xhr.status,
                hitID: option.hitID //transferResponse(xhr.response)

              });

              if (!!option.onSuccess) {
                option.onSuccess(option);
              } //delete option.transferRespons
              //transferResponse = (res)=> res

            } else {
              that.Log.enqueue({
                type: "success",
                url: option.url ? option.url : option.getUrl,
                data: this.removeEmptyObjKey(options.data),
                res: option.validateHit ? xhr.response : xhr.status,
                hitID: option.hitID
              });

              if (!!option.onSuccess) {
                option.onSuccess(option);
              }
            }
          } else {
            //this.fail()
            that.Log.enqueue({
              type: "error",
              data: this.removeEmptyObjKey(options.data),
              url: option.url ? option.url : option.getUrl,
              res: option.validateHit ? xhr.response : "Error",
              hitID: option.hitID //data:option.data,
              //transferResponse(xhr.response)

            });

            if (!!option.onError) {
              option.onError(option);
            }

            return "Request Fail";
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
      var that = this;
      var transferResponse = options.transferResponse;
      wx.request({
        url: options.url,
        method: options.method,
        data: this.removeEmptyObjKey(options.data),
        header: options.headers,
        timeout: options.wxRequestTimeout,
        success: function success(res) {
          //console.log(res)
          if (transferResponse) {
            that.Log.enqueue({
              type: "success",
              url: options.url ? options.url : options.getUrl,
              data: this.removeEmptyObjKey(options.data),
              res: options.transferResponse(res),
              hitID: options.hitID
            });
          } else {
            that.Log.enqueue({
              type: "success",
              url: options.url ? options.url : options.getUrl,
              data: this.removeEmptyObjKey(options.data),
              res: res,
              hitID: options.hitID
            });
          }

          if (!!options.onSuccess) {
            options.onSuccess(options);
          }
        },
        fail: function fail(res) {
          //console.log(res)
          if (transferResponse) {
            that.Log.enqueue({
              type: "error",
              url: options.url ? options.url : options.getUrl,
              data: this.removeEmptyObjKey(options.data),
              res: options.transferResponse(res),
              hitID: options.hitID
            });
          } else {
            that.Log.enqueue({
              url: options.url ? options.url : options.getUrl,
              data: this.removeEmptyObjKey(options.data),
              res: res,
              hitID: options.hitID
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
    key: "removeEmptyObjKey",
    value: function removeEmptyObjKey(obj) {
      Object.keys(obj).forEach(function (key) {
        if (obj[key] === undefined || !obj[key]) {
          delete obj[key];
        }
      });
      return obj;
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
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var validation =
/*#__PURE__*/
function () {
  function validation() {
    _classCallCheck(this, validation);

    this.v = this.init();
    this.requireList = ['tid', 'v']; //this.anyList = [['dp','dl','dh']]

    this.regexL = {
      "tid": "UA-[0-9]*-[0-9]*"
    };
  }

  _createClass(validation, [{
    key: "add",
    value: function add(fn) {
      this.v.push(fn);
    }
  }, {
    key: "use",
    value: function use(obj) {
      var that = this;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.v[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var fn = _step.value;
          obj = fn.call(that, obj);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return obj;
    }
  }, {
    key: "checkRequire",
    value: function checkRequire(obj) {
      var that = this;
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = this.requireList[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var x = _step2.value;

          if (!obj.hasOwnProperty(x)) {
            throw new Error("".concat(x, " is required"));
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
            _iterator2["return"]();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      return obj;
    }
  }, {
    key: "addRequirelist",
    value: function addRequirelist(params) {
      return this.requireList.push(params);
    }
    /*addAnyList(params){
      return this.anyList.push(params)
    }*/

  }, {
    key: "addRegexList",
    value: function addRegexList(obj) {
      this.regexL = _objectSpread({}, this.regexL, {}, obj);
      return this.regexL;
    }
  }, {
    key: "regex",
    value: function regex(obj) {
      var that = this;

      for (var x in this.regexL) {
        if (!obj.hasOwnProperty(x)) {
          throw new Error("No ".concat(that.x, " on object"));
        }

        var re = new RegExp(this.regexL[x], 'ig');

        if (this.isString(x)) {
          if (!String(obj[x]).match(re)) {
            throw new Error("".concat(x, " do not match ").concat(that.regexL[x]));
          }
        }
      }

      return obj;
    }
  }, {
    key: "length",
    value: function length(obj) {
      function objectToParams(obj) {
        var queryString = Object.keys(obj).map(function (key) {
          return key + '=' + obj[key];
        }).join('&');
        return queryString;
      }

      var objString = this.objectToParams(obj);

      if (objString.length > 8012) {
        throw new Error("Hit was too long, hit length must under 8012");
      }

      return obj;
    }
    /*anyone(obj){
      var that = this
      for(let l of this.anyList){
        if(Object.keys(obj).filter((val)=>l.includes(val)).length == 0){
          throw new Error(`must contains anyone of ${JSON.stringify(l)}`)
        }
      }
        return obj
    }*/

  }, {
    key: "pa",
    value: function pa(obj, rule, target) {}
  }, {
    key: "checkValidateParamater",
    value: function checkValidateParamater(obj) {
      for (var x in obj) {
        //if(typeof x == 'object'{continue}
        if (this.isString(x)) {
          if (String(obj[x]).match(/@?&=/i)) {
            throw new Error("Can not contains '@?&=' in the params");
          }
        }
      }

      return obj;
    }
  }, {
    key: "objectToParams",
    value: function objectToParams(obj) {
      var queryString = Object.keys(obj).map(function (key) {
        return key + '=' + obj[key];
      }).join('&');
      return queryString;
    }
  }, {
    key: "init",
    value: function init(obj) {
      var t = [];
      t.push(this.checkRequire);
      t.push(this.regex); //t.push(this.anyone)

      t.push(this.checkValidateParamater);
      t.push(this.length);
      return t;
    }
  }, {
    key: "resetTodefault",
    value: function resetTodefault() {
      this.requireList = ['tid', 'v']; //this.anyList = [['dp','dl','dh']]

      this.regexL = {
        "tid": "UA-[0-9]*-[0-9]*"
      };
    }
  }, {
    key: "isString",
    value: function isString(s) {
      if (typeof s === 'string' || s instanceof String) {
        return true;
      }

      return false;
    }
  }]);

  return validation;
}(); //check hit payload lengtg
//check required paramters
//check if there is any unvalid paramters ? &
//check if mobile or web
//check EEC object
//check pa for EEC


/* harmony default export */ __webpack_exports__["default"] = (validation);

/***/ }),

/***/ "./src/wechatUtils.js":
/*!****************************!*\
  !*** ./src/wechatUtils.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var SceneMapping = {
  1001: "发现栏小程序主入口",
  1005: "顶部搜索框的搜索结果页",
  1006: "发现栏小程序主入口搜索框的搜索结果页",
  1007: "单人聊天会话中的小程序消息卡片",
  1008: "群聊会话中的小程序消息卡片",
  1011: "扫描二维码",
  1012: "长按图片识别二维码",
  1013: "手机相册选取二维码",
  1014: "小程序模版消息",
  1017: "前往体验版的入口页",
  1019: "微信钱包",
  1020: "公众号profile页相关小程序列表",
  1022: "聊天顶部置顶小程序入口",
  1023: "安卓系统桌面图标",
  1024: "小程序profile页",
  1025: "扫描一维码",
  1026: "附近小程序列表",
  1027: "顶部搜索框搜索结果页“使用过的小程序”列表",
  1028: "我的卡包",
  1029: "卡券详情页",
  1030: "自动化测试下打开小程序",
  1031: "长按图片识别一维码",
  1032: "手机相册选取一维码",
  1034: "微信支付完成页",
  1035: "公众号自定义菜单",
  1036: "App 分享消息卡片",
  1037: "小程序打开小程序",
  1038: "从另一个小程序返回",
  1039: "摇电视",
  1042: "添加好友搜索框的搜索结果页",
  1043: "公众号模板消息",
  1044: "带shareTicket的小程序消息卡片",
  1045: "朋友圈广告",
  1046: "朋友圈广告详情页",
  1047: "扫描小程序码",
  1048: "长按图片识别小程序码",
  1049: "手机相册选取小程序码",
  1052: "卡券的适用门店列表",
  1053: "搜一搜的结果页",
  1054: "顶部搜索框小程序快捷入口",
  1056: "音乐播放器菜单",
  1057: "钱包中的银行卡详情页",
  1058: "公众号文章",
  1059: "体验版小程序绑定邀请页",
  1064: "微信连Wifi状态栏",
  1067: "公众号文章广告",
  1068: "附近小程序列表广告",
  1069: "移动应用",
  1071: "钱包中的银行卡列表页",
  1072: "二维码收款页面",
  1073: "客服消息列表下发的小程序消息卡片",
  1074: "公众号会话下发的小程序消息卡片",
  1077: "摇周边",
  1078: "连Wi-Fi成功页",
  1079: "微信游戏中心",
  1081: "客服消息下发的文字链",
  1082: "公众号会话下发的文字链",
  1084: "朋友圈广告原生页",
  1089: "微信聊天主界面下拉",
  1090: "长按小程序右上角菜单唤出最近使用历史",
  1091: "公众号文章商品卡片",
  1092: "城市服务入口",
  1095: "小程序广告组件",
  1096: "聊天记录",
  1097: "微信支付签约页",
  1099: "页面内嵌插件",
  1102: "公众号 profile 页服务预览",
  "default": "unknow scene value"
};

var Mapping =
/*#__PURE__*/
function () {
  function Mapping() {
    _classCallCheck(this, Mapping);

    this.currentMap = {};
    this.currentOutput = "";
  }

  _createClass(Mapping, [{
    key: "getMap",
    value: function getMap() {
      return this.map;
    }
  }, {
    key: "Mapping",
    value: function Mapping(map, input) {
      var current = map.find(function (item) {
        return input.match(new RegExp(item.inputRegex, "i"));
      }) || {};
      this.currentMap = current;
      this.currentOutput = current.outputName;
      return current.outputName;
    }
  }, {
    key: "getOutput",
    value: function getOutput() {
      return this.currentOutput;
    }
  }]);

  return Mapping;
}();

var m = new Mapping();

var wechatUtils =
/*#__PURE__*/
function () {
  function wechatUtils() {
    _classCallCheck(this, wechatUtils);
  }

  _createClass(wechatUtils, [{
    key: "construct",
    value: function construct(sMapping) {
      this.onWechat = this.isOnwechat();
      this.SMapping = sMapping || SceneMapping;
    }
  }, {
    key: "map",
    value: function map(table, field) {
      return m.Mapping(table, field);
    }
  }, {
    key: "isOnwechat",
    value: function isOnwechat() {
      if ((typeof wx === "undefined" ? "undefined" : _typeof(wx)) == 'object') {
        return true;
      }

      return false;
    }
  }, {
    key: "mappingSceneToCN",
    value: function mappingSceneToCN(num) {
      if (this.onWechat) {
        return this.SMapping[num] || this.SMapping['default'];
      }

      return '';
    }
  }, {
    key: "generateUA",
    value: function generateUA() {
      if ((typeof wx === "undefined" ? "undefined" : _typeof(wx)) == 'object') {
        var res = wx.getSystemInfoSync();
        var isAndroid = res.system.toLowerCase().indexOf('android') > -1;
        var iresPad = !isAndroid && res.model.toLowerCase().indexOf('iphone') == -1;

        if (isAndroid) {
          return "Mozilla/5.0 (Linux; U; " + res.system + "; " + res.model + " Build/000000) AppleWebKit/537.36 (KHTML, like Gecko)Verreson/4.0 Chrome/49.0.0.0 Mobile Safari/537.36 MicroMessenger/" + res.version;
        } else if (!iresPad) {
          var v = res.system.replace(/^.*?([0-9.]+).*?$/, function (x, y) {
            return y;
          }).replace(/\./g, '_');
          return "Mozilla/5.0 (iPhone; CPU iPhone OS " + v + " like Mac OS X) AppleWebKit/602.3.12 (KHTML, like Gecko) Mobile/14C92 MicroMessenger/" + res.version;
        } else {
          var _v = res.system.replace(/^.*?([0-9.]+).*?$/, function (x, y) {
            return y;
          }).replace(/\./g, '_');

          return "Mozilla/5.0 (iPad; CPU OS " + _v + " like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Mobile/10A406 MicroMessenger/" + res.version;
        }
      }

      if ((typeof navigator === "undefined" ? "undefined" : _typeof(navigator)) == 'object') {
        return navigator.userAgent;
      }

      return '';
    }
  }, {
    key: "getCurrentPageUrlWithArgs",
    value: function getCurrentPageUrlWithArgs() {
      var pages = getCurrentPages();
      var currentPage = pages[pages.length - 1];
      var url = currentPage.route;
      var options = currentPage.options; //拼接url的参数

      var urlWithArgs = url + '?';

      for (var key in options) {
        var value = options[key];
        urlWithArgs += key + '=' + value + '&';
      }

      urlWithArgs = urlWithArgs.substring(0, urlWithArgs.length - 1);
      return urlWithArgs;
    }
  }, {
    key: "getCurrentPageUrl",
    value: function getCurrentPageUrl() {
      var pages = getCurrentPages();
      var currentPage = pages[pages.length - 1];
      var url = currentPage.route;
      return url;
    }
  }]);

  return wechatUtils;
}();

/* harmony default export */ __webpack_exports__["default"] = (wechatUtils);

/***/ })

/******/ });
//# sourceMappingURL=ga.map