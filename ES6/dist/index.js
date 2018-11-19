"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var a = 1;
console.log(a);

//var 全局声明 在区块内依旧起全局声明作用
{
	var a = 2;
}
console.log(a);

//let 局部声明
{
	var b = 2;
}
// console.log(b) 报错

//var 和 let 在循环中差别

//const 常量声明 变量始终不变

//解构赋值 解构默认值
{
	var _b = 0,
	    c = 1,
	    d = 2,
	    e = 3;
	var _a = "B",
	    _C = "C",
	    f = _C === undefined ? "A" : _C;
}
//对象解构赋值
{
	var _c$d = { c: "A", d: "B" },
	    _a2 = _c$d.a,
	    _b2 = _c$d.b;
}
//字符串解构赋值
{
	var _ABCD = "ABCD",
	    _ABCD2 = _slicedToArray(_ABCD, 4),
	    _a3 = _ABCD2[0],
	    _b3 = _ABCD2[1],
	    _c = _ABCD2[2],
	    _d = _ABCD2[3];
}

//扩展运算符

var arr1 = ["a", "b", "c"];
var arr2 = [].concat(arr1);
console.log(arr2);

// let obj1 = {
// 	a: 1,
// 	b: 2,
// 	c: 3
// }
// let obj2 = {...obj1}
// console.log(obj2)
//let ab = {...a,...b};
//等同于
//let ab = Object.assign({},a,b);
//rest运算符

function rest(arg1) {
	for (var _len = arguments.length, arg = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
		arg[_key - 1] = arguments[_key];
	}

	console.log(arg);
}

rest(1, 2, 3, 4);
//rest运算符 可以看做是 扩展运算符 的逆运算

//字符串模版 可以加入html标签

var date = "8102年21月21日";

var msg = "<b>\u5728\u65E5\u671F" + date + "\u7684\u8FD9\u4E00\u5929</b>";
document.write(msg);

//ES6数组
{
	//转化json数组
	var json = {
		"0": "a",
		"1": "b",
		"2": "c",
		length: 3
	};

	var arr = Array.from(json);
	console.log(arr);

	//转化数字、字符串
	var _arr = Array.of(1, 2, 3, 4);
	console.log(_arr);

	var _arr2 = Array.of("n", "i", "c");
	console.log(_arr2);

	//find()实例方法

	var arr3 = [1, 24, 54, 7, 32, 7, 3, 12];
	console.log(arr3.find(function (value, index, arr) {
		return value > 30;
	}));

	//for…of循环

	var arr4 = [1, 2, 3, 4];
	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = arr4[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var i = _step.value;

			console.log(i);
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
}

//ES6函数扩展

{
	//解构赋值
	var add = function add(_ref) {
		var x = _ref.x,
		    y = _ref.y;

		console.log(x + y);
	};

	add({ a: 1, b: 2 });

	//默认值

	var add1 = function add1(x) {
		var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
		return x + y;
	};
	console.log(add1(1));

	//主动抛出错误

	// function add2(x){
	// 	if(x == 1){
	// 		throw new Error('This is error');
	// 	}
	// }
	// console.log(add2(1));

}
//对象的key值构建
{
	var key = "a";
	var obj = _defineProperty({}, key, 1);
}
//Symbol类型 起保护作用
{
	var _a4 = Symbol();
	var _obj2 = _defineProperty({}, _a4, "a");
	console.log(_obj2.a); //undefined
	console.log(_obj2[_a4]); //a
	_obj2.a = "b";
	console.log(_obj2[_a4]); //a
	_obj2[_a4] = "b";
	console.log(_obj2[_a4]); //b
}

//set数据结构 类数组 内部不允许有重复的值
{
	var setArr = new Set(['a', 'b', 'c', 'a']);
	console.log(setArr);
	//增加
	setArr.add('d');
	console.log(setArr);
	//删除
	setArr.delete('a');
	console.log(setArr);
	//查找
	console.log(setArr.has('a'));
	//清除
	setArr.clear();
	//size 对应数组的length
}

//map数据结构 特殊键值对

{
	var _json = {
		"name": "ming",
		"age": 18
	};
	console.log(_json);

	var map = new Map();
	map.set(_json, 'json');
	console.log(map);
	map.set('json', _json);
	console.log(map);

	//取值
	console.log(map.get(_json));
	//删除
	map.delete(_json);
	console.log(map);
	//查找
	console.log(map.has(_json));
	//清除
	map.clear();
	//size
}

//Proxy预处理

{
	var pro = new Proxy({
		name: 'aab'
	}, {
		get: function get(target, key, property) {
			console.log("get时进行的操作");
			//return 'bbc' 定义get的内容
			return target[key];
		},
		set: function set(target, key, value, receiver) {
			console.log("set\u524D" + key + "-" + receiver + "-set\u540E" + key + "-" + value);
			return target[key] = value;
		}
	});
	console.log(pro.name);
	pro.name = 'bbc';
	console.log(pro.name);

	//调用方法时的处理

	var target = function target() {
		return 'ojbk';
	};
	var handler = {
		apply: function apply(target, ctx, args) {
			console.log("调用get时进行的操作");
			return Reflect.apply.apply(Reflect, arguments); //rest
		}
	};
	var pox = new Proxy(target, handler);
	console.log(pox());
}

//Promise

{
	var step1 = function step1(resolve, reject) {
		console.log('step1 开始');
		if (state == 1) {
			resolve('step1 完成');
		} else {
			reject('step1 失败');
		}
	};

	var step2 = function step2(resolve, reject) {
		console.log('step2 开始');
		if (state == 2) {
			resolve('step2 完成');
		} else {
			reject('step2 失败');
		}
	};

	var step3 = function step3(resolve, reject) {
		console.log('step3 开始');
		if (state == 3) {
			resolve('step3 完成');
		} else {
			reject('step3 失败');
		}
	};

	var state = 1;

	new Promise(step1).then(function (val) {
		console.log(val);
		state = 2;
		return new Promise(step2);
	}).then(function (val) {
		console.log(val);
		state = 3;
		return new Promise(step3);
	}).then(function (val) {
		console.log(val);
	});
}

//class类
{
	var People = function () {
		//传递参数
		function People(a, b) {
			_classCallCheck(this, People);

			this.a = a;
			this.b = b;
		}

		_createClass(People, [{
			key: "name",
			value: function name(val) {
				console.log(val);
				return val;
			}
		}, {
			key: "age",
			value: function age(val) {
				console.log(this.name('aab') + '的年龄' + val);
			}
		}, {
			key: "add",
			value: function add() {
				return this.a + this.b;
			}
		}]);

		return People;
	}();

	console.log('sss');
	var _a5 = new People(2, 4);
	_a5.name('bbc');
	_a5.age(20);
	_a5.add();
}
