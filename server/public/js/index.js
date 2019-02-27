/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(2);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	'use strict';

	// ES6中的函数
	{
	  // 函数默认值 会被传入值覆盖.有默认值的后面不能再有没有默认值的形参
	  var test = function test() {
	    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
	    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'world';

	    console.log('默认值', x, y);
	  };

	  test();
	  test('hello', '123');
	}

	{
	  var test2 = function test2(x) {
	    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : x;

	    console.log('作用域', x, y);
	  };

	  var test3 = function test3(c) {
	    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : x;

	    console.log('作用域', x, y);
	  };

	  var x = 'test';

	  test2('kill');
	  test3('kill');
	}

	{
	  // res参数 ...后面紧跟一个变量。把一系列的参数转成了数组   res参数之后不能再有其他参数了
	  var test4 = function test4() {
	    for (var _len = arguments.length, arg = Array(_len), _key = 0; _key < _len; _key++) {
	      arg[_key] = arguments[_key];
	    }

	    var _iteratorNormalCompletion = true;
	    var _didIteratorError = false;
	    var _iteratorError = undefined;

	    try {
	      for (var _iterator = arg[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	        var v = _step.value;

	        console.log('rest', v);
	      }
	    } catch (err) {
	      _didIteratorError = true;
	      _iteratorError = err;
	    } finally {
	      try {
	        if (!_iteratorNormalCompletion && _iterator.return) {
	          _iterator.return();
	        }
	      } finally {
	        if (_didIteratorError) {
	          throw _iteratorError;
	        }
	      }
	    }
	  };

	  test4(1, 2, 3, 4, 5, 'a', [2, 3]);
	}

	{
	  var _console;

	  // 把数组拆成离散的值
	  (_console = console).log.apply(_console, [1, 2, 4]);
	}

	{
	  // 箭头函数 arrow函数名，v参数（没有参数时用一个空的圆括号），v*2函数体，函数返回至
	  var arrow = function arrow(v) {
	    return v * 2;
	  };
	  console.log('arrow', arrow(3));

	  var arrow2 = function arrow2() {
	    return 5;
	  };
	  console.log('arrow2', arrow2());
	}

	{
	  // 尾调用 函数的最后一句话是不是一个函数  提升性能
	  var tail = function tail(x) {
	    console.log('tail', x);
	  };

	  var fx = function fx(x) {
	    return tail(x); // 尾调用 
	  };

	  fx(123);
	}

/***/ })
/******/ ]);