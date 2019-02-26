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

	// 正则
	{
	  // 修饰符： i 不区分(ignore)大小写；例如: /abc/i 可以匹配 abc、aBC、Abc  
	  // g 全局(global)匹配 
	  // 如果不带g，正则过程中字符串从左到右匹配，找到第一个符合条件的即匹配成功，返回
	  // 如果带g，则字符串从左到右，找到每个符合条件的都记录下来，知道字符串结尾位置
	  // 例如: 
	  // var str = 'aaaaaaaa'
	  // var reg1 = /a/;  str.match(reg1)  // 结果为：["a", index: 0, input: "aaaaaaaa"]
	  // var reg2 = /a/g; str.match(reg2)  // 结果为：["a", "a", "a", "a", "a", "a", "a", "a"]
	  //ES5
	  // 两个参数，第一个参数必须是字符串，第二个参数表示不区分大小写
	  var regex = new RegExp('xyz', 'i');
	  var regex2 = new RegExp(/xyz/i);

	  console.log(regex.test('xyZ123'), regex2.test('xyz123'));

	  // ES6 第二个修饰符会覆盖第一个参数指定的修饰符
	  var regex3 = new RegExp(/xyz/ig, 'i');
	  console.log(regex3.flags); //获取正则对象修饰符 i
	}

	{
	  // 修饰符 y  y与g都是全局匹配，但是g从上一次匹配的位置继续寻找知道找到匹配的位置，不强调必须是第一个匹配到。y匹配的第一个必须是紧跟着的下一个字符才成功
	  var s = 'bbb_bb_b';
	  var a1 = /b+/g;
	  var a2 = new RegExp('b+', 'y');
	  console.log(a1.exec(s), a2.exec(s));
	  console.log(a1.exec(s), a2.exec(s));
	  console.log(a1.exec(s), a2.exec(s));
	  // 判断正则对象是否开启了带y的正则模式
	  console.log(a1.sticky, a2.sticky);
	}

	{
	  //修饰符u，  此修饰符标识能够正确处理大于\uFFFF的Unicode字符。 
	  // 使用u修饰符，正则表达式能够识别大括号{}表示的Unicode字符，否则无法识别，{61}也会被解读为量词，表示61个u字符。
	  console.log('u-1', /^\uD83D/.test('\uD83D\uDC2A'));
	  console.log('u-2', /^(?:\uD83D(?![\uDC00-\uDFFF]))/.test('\uD83D\uDC2A'));
	  // \u{} 大括号里表示一个Unicode编码
	  console.log(/\u{61}/.test('a'));
	  console.log(/a/.test('a'));
	  // 不加u修饰符时.无法匹配码点大于0xFFFF的Unicode字符 另外.还不能处理换行符、回车符、行分隔符，段分隔符
	  console.log('\uD842\uDFB7');
	  var _s = '𠮷';
	  console.log('u1', /^.$/.test(_s));
	  console.log('u2', /^(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])$/.test(_s));

	  console.log('test', /𠮷{2}/.test('𠮷𠮷'));
	  console.log('test', /(?:\uD842\uDFB7){2}/.test('𠮷𠮷'));
	}

/***/ })
/******/ ]);