var sayHello = require('./a.js').sayHello;//require的是exports对象
sayHello('nmsl')

var marked = require('marked')
var str = marked('# hello')
console.log(str)