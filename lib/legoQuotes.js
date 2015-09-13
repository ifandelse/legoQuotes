/*!
 * 
 * 	legoQuotes - Example project for 'Writing Next Generation JavaScript Libraries' blog series
 * 	Author: Jim Cowart
 * 	Version: v1.0.0
 * 	Url: https://github.com/ifandelse/legoQuotes
 * 	License(s): MIT
 * 
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("lodash"));
	else if(typeof define === 'function' && define.amd)
		define(["lodash"], factory);
	else if(typeof exports === 'object')
		exports["legoQuotes"] = factory(require("lodash"));
	else
		root["legoQuotes"] = factory(root["_"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var marked0$0 = [randomQuote].map(regeneratorRuntime.mark);
	
	var _lodash = __webpack_require__(1);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _emmet = __webpack_require__(2);
	
	var _emmet2 = _interopRequireDefault(_emmet);
	
	var _wyldstyle = __webpack_require__(5);
	
	var _wyldstyle2 = _interopRequireDefault(_wyldstyle);
	
	var _benny = __webpack_require__(6);
	
	var _benny2 = _interopRequireDefault(_benny);
	
	var _utils = __webpack_require__(4);
	
	var emmet = new _emmet2["default"]();
	var wyldstyle = new _wyldstyle2["default"]();
	var benny = new _benny2["default"]();
	var characters = { emmet: emmet, wyldstyle: wyldstyle, benny: benny };
	
	function randomQuote() {
		var chars, character;
		return regeneratorRuntime.wrap(function randomQuote$(context$1$0) {
			while (1) switch (context$1$0.prev = context$1$0.next) {
				case 0:
					chars = _lodash2["default"].values(characters);
					character = chars[(0, _utils.getRandom)(0, chars.length - 1)];
					context$1$0.next = 4;
					return character.name + ": " + character.saySomething();
	
				case 4:
				case "end":
					return context$1$0.stop();
			}
		}, marked0$0[0], this);
	}
	
	exports["default"] = {
		characters: characters,
		getRandomQuote: function getRandomQuote() {
			return randomQuote().next().value;
		}
	};
	module.exports = exports["default"];

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _LegoCharacter2 = __webpack_require__(3);
	
	var _LegoCharacter3 = _interopRequireDefault(_LegoCharacter2);
	
	var Emmet = (function (_LegoCharacter) {
		_inherits(Emmet, _LegoCharacter);
	
		function Emmet() {
			_classCallCheck(this, Emmet);
	
			_get(Object.getPrototypeOf(Emmet.prototype), "constructor", this).call(this, { actor: "Chris Pratt", character: "Emmet" });
			this.sayings = ["Introducing the double-decker couch!", "So everyone can watch TV together and be buddies!", "We're going to crash into the sun!", "Hey, Abraham Lincoln, you bring your space chair right back!", "Overpriced coffee! Yes!"];
		}
	
		return Emmet;
	})(_LegoCharacter3["default"]);
	
	exports["default"] = Emmet;
	module.exports = exports["default"];

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	// Let's import only the getRandom method from utils.js
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var _utils = __webpack_require__(4);
	
	// the LegoCharacter class is the default export of the module, similar
	// in concept to how many node module authors would export a single value
	
	var LegoCharacter = (function () {
		// We use destructuring to match properties on the object
		// passed into separate variables for character and actor
	
		function LegoCharacter(_ref) {
			var character = _ref.character;
			var actor = _ref.actor;
	
			_classCallCheck(this, LegoCharacter);
	
			this.actor = actor;
			this.name = character;
			this.sayings = ["I haven't been given any funny quotes yet."];
		}
	
		// shorthand method syntax, FOR THE WIN
		// I've been making this typo for years, it's finally valid syntax :-)
	
		_createClass(LegoCharacter, [{
			key: "saySomething",
			value: function saySomething() {
				return this.sayings[(0, _utils.getRandom)(0, this.sayings.length - 1)];
			}
		}]);
	
		return LegoCharacter;
	})();
	
	exports["default"] = LegoCharacter;
	module.exports = exports["default"];

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.getRandom = getRandom;
	
	function getRandom(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _LegoCharacter2 = __webpack_require__(3);
	
	var _LegoCharacter3 = _interopRequireDefault(_LegoCharacter2);
	
	var Wyldstyle = (function (_LegoCharacter) {
		_inherits(Wyldstyle, _LegoCharacter);
	
		function Wyldstyle() {
			_classCallCheck(this, Wyldstyle);
	
			_get(Object.getPrototypeOf(Wyldstyle.prototype), "constructor", this).call(this, { actor: "Elizabeth Banks", character: "Wyldstyle" });
			this.sayings = ["Come with me if you want to not die.", "That is literally the dumbest thing I have ever seen.", "Today shall now be known as Freedom Friday... But on a Tuesday", "Found your pants, series is over!"];
		}
	
		return Wyldstyle;
	})(_LegoCharacter3["default"]);
	
	exports["default"] = Wyldstyle;
	module.exports = exports["default"];

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _LegoCharacter2 = __webpack_require__(3);
	
	var _LegoCharacter3 = _interopRequireDefault(_LegoCharacter2);
	
	var Benny = (function (_LegoCharacter) {
		_inherits(Benny, _LegoCharacter);
	
		function Benny() {
			_classCallCheck(this, Benny);
	
			_get(Object.getPrototypeOf(Benny.prototype), "constructor", this).call(this, { actor: "Charlie Day", character: "Benny" });
			this.sayings = ["Spaceship!", "Underwater spaceship!", "You're really letting the oxygen out of my tank here!"];
		}
	
		return Benny;
	})(_LegoCharacter3["default"]);
	
	exports["default"] = Benny;
	module.exports = exports["default"];

/***/ }
/******/ ])
});
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA1MGJjM2NhYjJkZGVjZTMxOWMwZCIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInJvb3RcIjpcIl9cIixcImNvbW1vbmpzXCI6XCJsb2Rhc2hcIixcImNvbW1vbmpzMlwiOlwibG9kYXNoXCIsXCJhbWRcIjpcImxvZGFzaFwifSIsIndlYnBhY2s6Ly8vLi9zcmMvZW1tZXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0xlZ29DaGFyYWN0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy93eWxkc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jlbm55LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O2tCQzNCVSxXQUFXOzttQ0FYUCxDQUFROzs7O2tDQUNKLENBQVM7Ozs7c0NBQ0wsQ0FBYTs7OztrQ0FDakIsQ0FBUzs7OztrQ0FDRCxDQUFTOztBQUVuQyxLQUFNLEtBQUssR0FBRyx3QkFBVyxDQUFDO0FBQzFCLEtBQU0sU0FBUyxHQUFHLDRCQUFlLENBQUM7QUFDbEMsS0FBTSxLQUFLLEdBQUcsd0JBQVcsQ0FBQztBQUMxQixLQUFNLFVBQVUsR0FBRyxFQUFFLEtBQUssRUFBTCxLQUFLLEVBQUUs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Q0Y7O1NBUm1CLEtBQUs7OztzQkFBTCxLQUFLIiwiZmlsZSI6ImxlZ29RdW90ZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJsb2Rhc2hcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wibG9kYXNoXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImxlZ29RdW90ZXNcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJsb2Rhc2hcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImxlZ29RdW90ZXNcIl0gPSBmYWN0b3J5KHJvb3RbXCJfXCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMV9fKSB7XG5yZXR1cm4gXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uXG4gKiovIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCA1MGJjM2NhYjJkZGVjZTMxOWMwZFxuICoqLyIsImltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCBFbW1ldCBmcm9tIFwiLi9lbW1ldFwiO1xuaW1wb3J0IFd5bGRzdHlsZSBmcm9tIFwiLi93eWxkc3R5bGVcIjtcbmltcG9ydCBCZW5ueSBmcm9tIFwiLi9iZW5ueVwiO1xuaW1wb3J0IHsgZ2V0UmFuZG9tIH0gZnJvbSBcIi4vdXRpbHNcIjtcblxuY29uc3QgZW1tZXQgPSBuZXcgRW1tZXQoKTtcbmNvbnN0IHd5bGRzdHlsZSA9IG5ldyBXeWxkc3R5bGUoKTtcbmNvbnN0IGJlbm55ID0gbmV3IEJlbm55KCk7XG5jb25zdCBjaGFyYWN0ZXJzID0geyBlbW1ldCwgd3lsZHN0eWxlLCBiZW5ueSB9O1xuXG5mdW5jdGlvbiogcmFuZG9tUXVvdGUoKSB7XG5cdGNvbnN0IGNoYXJzID0gXy52YWx1ZXMoIGNoYXJhY3RlcnMgKTtcblx0Y29uc3QgY2hhcmFjdGVyID0gY2hhcnNbIGdldFJhbmRvbSggMCwgY2hhcnMubGVuZ3RoIC0gMSApIF07XG5cdHlpZWxkIGAke2NoYXJhY3Rlci5uYW1lfTogJHtjaGFyYWN0ZXIuc2F5U29tZXRoaW5nKCl9YDtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuXHRjaGFyYWN0ZXJzLFxuXHRnZXRSYW5kb21RdW90ZSgpIHtcblx0XHRyZXR1cm4gcmFuZG9tUXVvdGUoKS5uZXh0KCkudmFsdWU7XG5cdH1cbn07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9pbmRleC5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xX187XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCB7XCJyb290XCI6XCJfXCIsXCJjb21tb25qc1wiOlwibG9kYXNoXCIsXCJjb21tb25qczJcIjpcImxvZGFzaFwiLFwiYW1kXCI6XCJsb2Rhc2hcIn1cbiAqKiBtb2R1bGUgaWQgPSAxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgTGVnb0NoYXJhY3RlciBmcm9tIFwiLi9MZWdvQ2hhcmFjdGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVtbWV0IGV4dGVuZHMgTGVnb0NoYXJhY3RlciB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCB7IGFjdG9yOiBcIkNocmlzIFByYXR0XCIsIGNoYXJhY3RlcjogXCJFbW1ldFwiIH0gKTtcblx0XHR0aGlzLnNheWluZ3MgPSBbXG5cdFx0XHRcIkludHJvZHVjaW5nIHRoZSBkb3VibGUtZGVja2VyIGNvdWNoIVwiLFxuXHRcdFx0XCJTbyBldmVyeW9uZSBjYW4gd2F0Y2ggVFYgdG9nZXRoZXIgYW5kIGJlIGJ1ZGRpZXMhXCIsXG5cdFx0XHRcIldlJ3JlIGdvaW5nIHRvIGNyYXNoIGludG8gdGhlIHN1biFcIixcblx0XHRcdFwiSGV5LCBBYnJhaGFtIExpbmNvbG4sIHlvdSBicmluZyB5b3VyIHNwYWNlIGNoYWlyIHJpZ2h0IGJhY2shXCIsXG5cdFx0XHRcIk92ZXJwcmljZWQgY29mZmVlISBZZXMhXCJcblx0XHRdO1xuXHR9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9lbW1ldC5qc1xuICoqLyIsIi8vIExldCdzIGltcG9ydCBvbmx5IHRoZSBnZXRSYW5kb20gbWV0aG9kIGZyb20gdXRpbHMuanNcbmltcG9ydCB7IGdldFJhbmRvbSB9IGZyb20gXCIuL3V0aWxzXCI7XG5cbi8vIHRoZSBMZWdvQ2hhcmFjdGVyIGNsYXNzIGlzIHRoZSBkZWZhdWx0IGV4cG9ydCBvZiB0aGUgbW9kdWxlLCBzaW1pbGFyXG4vLyBpbiBjb25jZXB0IHRvIGhvdyBtYW55IG5vZGUgbW9kdWxlIGF1dGhvcnMgd291bGQgZXhwb3J0IGEgc2luZ2xlIHZhbHVlXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMZWdvQ2hhcmFjdGVyIHtcblx0Ly8gV2UgdXNlIGRlc3RydWN0dXJpbmcgdG8gbWF0Y2ggcHJvcGVydGllcyBvbiB0aGUgb2JqZWN0XG5cdC8vIHBhc3NlZCBpbnRvIHNlcGFyYXRlIHZhcmlhYmxlcyBmb3IgY2hhcmFjdGVyIGFuZCBhY3RvclxuXHRjb25zdHJ1Y3RvciggeyBjaGFyYWN0ZXIsIGFjdG9yIH0gKSB7XG5cdFx0dGhpcy5hY3RvciA9IGFjdG9yO1xuXHRcdHRoaXMubmFtZSA9IGNoYXJhY3Rlcjtcblx0XHR0aGlzLnNheWluZ3MgPSBbXG5cdFx0XHRcIkkgaGF2ZW4ndCBiZWVuIGdpdmVuIGFueSBmdW5ueSBxdW90ZXMgeWV0LlwiXG5cdFx0XTtcblx0fVxuXHQvLyBzaG9ydGhhbmQgbWV0aG9kIHN5bnRheCwgRk9SIFRIRSBXSU5cblx0Ly8gSSd2ZSBiZWVuIG1ha2luZyB0aGlzIHR5cG8gZm9yIHllYXJzLCBpdCdzIGZpbmFsbHkgdmFsaWQgc3ludGF4IDotKVxuXHRzYXlTb21ldGhpbmcoKSB7XG5cdFx0cmV0dXJuIHRoaXMuc2F5aW5nc1sgZ2V0UmFuZG9tKCAwLCB0aGlzLnNheWluZ3MubGVuZ3RoIC0gMSApIF07XG5cdH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL0xlZ29DaGFyYWN0ZXIuanNcbiAqKi8iLCJleHBvcnQgZnVuY3Rpb24gZ2V0UmFuZG9tKCBtaW4sIG1heCApIHtcblx0cmV0dXJuIE1hdGguZmxvb3IoIE1hdGgucmFuZG9tKCkgKiAoIG1heCAtIG1pbiArIDEgKSApICsgbWluO1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdXRpbHMuanNcbiAqKi8iLCJpbXBvcnQgTGVnb0NoYXJhY3RlciBmcm9tIFwiLi9MZWdvQ2hhcmFjdGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFd5bGRzdHlsZSBleHRlbmRzIExlZ29DaGFyYWN0ZXIge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlciggeyBhY3RvcjogXCJFbGl6YWJldGggQmFua3NcIiwgY2hhcmFjdGVyOiBcIld5bGRzdHlsZVwiIH0gKTtcblx0XHR0aGlzLnNheWluZ3MgPSBbXG5cdFx0XHRcIkNvbWUgd2l0aCBtZSBpZiB5b3Ugd2FudCB0byBub3QgZGllLlwiLFxuXHRcdFx0XCJUaGF0IGlzIGxpdGVyYWxseSB0aGUgZHVtYmVzdCB0aGluZyBJIGhhdmUgZXZlciBzZWVuLlwiLFxuXHRcdFx0XCJUb2RheSBzaGFsbCBub3cgYmUga25vd24gYXMgRnJlZWRvbSBGcmlkYXkuLi4gQnV0IG9uIGEgVHVlc2RheVwiLFxuXHRcdFx0XCJGb3VuZCB5b3VyIHBhbnRzLCBzZXJpZXMgaXMgb3ZlciFcIlxuXHRcdF07XG5cdH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3d5bGRzdHlsZS5qc1xuICoqLyIsImltcG9ydCBMZWdvQ2hhcmFjdGVyIGZyb20gXCIuL0xlZ29DaGFyYWN0ZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmVubnkgZXh0ZW5kcyBMZWdvQ2hhcmFjdGVyIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoIHsgYWN0b3I6IFwiQ2hhcmxpZSBEYXlcIiwgY2hhcmFjdGVyOiBcIkJlbm55XCIgfSApO1xuXHRcdHRoaXMuc2F5aW5ncyA9IFtcblx0XHRcdFwiU3BhY2VzaGlwIVwiLFxuXHRcdFx0XCJVbmRlcndhdGVyIHNwYWNlc2hpcCFcIixcblx0XHRcdFwiWW91J3JlIHJlYWxseSBsZXR0aW5nIHRoZSBveHlnZW4gb3V0IG9mIG15IHRhbmsgaGVyZSFcIlxuXHRcdF07XG5cdH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2Jlbm55LmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==