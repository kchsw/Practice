var a = 1;
console.log(a);

//var 全局声明 在区块内依旧起全局声明作用
{
	var a = 2;
}
console.log(a);

//let 局部声明
{
	let b = 2;
}
// console.log(b) 报错

//var 和 let 在循环中差别

//const 常量声明 变量始终不变

//解构赋值 解构默认值
{
	let [b, [c, d], e] = [0, [1, 2], 3];

	let[a, f="A"] = ["B", "C"];
}
//对象解构赋值
{
	let {a, b} = {c:"A", d:"B"};
}
//字符串解构赋值
{
	const [a, b, c, d] = "ABCD";
}

//扩展运算符

let arr1 = ["a", "b", "c"];
let arr2 = [...arr1];
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

function rest(arg1,...arg){
	console.log(arg);
}

rest(1,2,3,4);
//rest运算符 可以看做是 扩展运算符 的逆运算

//字符串模版 可以加入html标签

let date = "8102年21月21日";

let msg = `<b>在日期${date}的这一天</b>`;
document.write(msg);

//ES6数组
{
	//转化json数组
	let json = {
		"0": "a",
		"1": "b",
		"2": "c",
		length: 3
	}

	let arr=Array.from(json);
	console.log(arr);

    //转化数字、字符串
    let arr1 = Array.of(1,2,3,4);
    console.log(arr1);

    let arr2 = Array.of("n","i","c");
    console.log(arr2);

    //find()实例方法

    let arr3 = [1,24,54,7,32,7,3,12];
    console.log(arr3.find((value,index,arr)=>{
    	return value > 30;
    }))

    //for…of循环 与 for…in循环的 差别
 
    let arr4 = [1,2,3,4]
    for (let i of arr4){
    	console.log(i);
    }
}

//ES6函数扩展

{   
	//解构赋值
	function add({x,y}){
		console.log(x + y);
	}
	add({a:1,b:2});

	//默认值

	var add1 = (x,y=2) => x + y
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
	let key = "a";
	let obj = {
		[key]:1
	};
}
//Symbol类型 起保护作用
{
    let a = Symbol();
    let obj = {
    	[a]:"a"
    }
    console.log(obj.a); //undefined
    console.log(obj[a]); //a
    obj.a = "b";
    console.log(obj[a]); //a
    obj[a] = "b";
    console.log(obj[a]);//b
}

//set数据结构 类数组 内部不允许有重复的值
{
	let setArr = new Set(['a','b','c','a']);
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
	let json = {
		"name": "ming",
		"age" : 18
	}
	console.log(json);

	let map = new Map();
	map.set(json,'json');
	console.log(map);
	map.set('json',json);
	console.log(map);

	//取值
	console.log(map.get(json));
	//删除
	map.delete(json);
	console.log(map);
	//查找
	console.log(map.has(json));
	//清除
	map.clear();
	//size
}

//Proxy预处理

{
	let pro = new Proxy({
		name: 'aab'
	},{
		get:function(target,key,property){
			console.log("get时进行的操作");
			//return 'bbc' 定义get的内容
			return target[key];
		},
		set:function(target,key,value,receiver){
			console.log(`set前${key}-${receiver}-set后${key}-${value}`);
			return target[key] = value;
		}
	});
	console.log(pro.name);
	pro.name = 'bbc';
	console.log(pro.name);

	//调用方法时的处理

	var target = function(){
		return 'ojbk'
	};
	var handler = {
		apply(target,ctx,args){
			console.log("调用get时进行的操作");
			return Reflect.apply(...arguments) //rest
		}
	}
	var pox = new Proxy(target,handler);
	console.log(pox());
}

//Promise

{
	let state = 1;

	function step1(resolve,reject){
		console.log('step1 开始');
		if(state == 1){
			resolve('step1 完成');
		}else{
			reject('step1 失败');
		}
	}

	function step2(resolve,reject){
		console.log('step2 开始');
		if(state == 2){
			resolve('step2 完成');
		}else{
			reject('step2 失败');
		}
	}

	function step3(resolve,reject){
		console.log('step3 开始');
		if(state == 3){
			resolve('step3 完成');
		}else{
			reject('step3 失败');
		}
	}

	new Promise(step1).then((val)=>{
		console.log(val);
		state = 2;
		return new Promise(step2);
	}).then((val)=>{
		console.log(val);
		state = 3;
		return new Promise(step3);
	}).then((val)=>{
		console.log(val);
	})
}

//class类
{
	class People{
		//传递参数
		constructor(a,b){
			this.a = a;
			this.b = b;
		}
		name(val){
			console.log(val);
			return val;
		}
		age(val){
			console.log(this.name('aab') + '的年龄' + val);
		}
		add(){
			return this.a + this.b;
		}
	}
    console.log('sss')
	let a = new People(2,4);
	a.name('bbc');
	a.age(20);
	a.add();
}