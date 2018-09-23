var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');

var news = [
		"第11日前瞻：中国冲击4金 博尔特再战200米羽球",
		"正直播柴飚/洪炜出战 男双力争会师决赛",
		"女排将死磕巴西！郎平安排男陪练模仿对方核心",
		"没有中国选手和巨星的110米栏 我们还看吗？",
		"中英上演奥运金牌大战",
		"博彩赔率挺中国夺回第二纽约时报：中国因对手服禁药而丢失的奖牌最多",
		"最“出柜”奥运？同性之爱闪耀里约",
		"下跪拜谢与洪荒之力一样 都是真情流露",
		"台媒:美军2架B52轰炸机前往南海附近执行训练任务",
		"外交部：澳方希望改善中澳关系 先解决认识问题",
		"中国800万吨牛肉消费缺口 让欧盟农场主按捺不住了",
		"应急管理部党组书记黄明：从源头上减少自然灾害发生",
		"男子误入传销组织被殴打身亡埋尸三年 司法频道",
		"中国女游客在泰国遭同胞绑架 丈夫付百万无果报警",
		"美国副总统彭斯：特朗普愿意放弃朝美领导人会晤"
	];

var index = [];
var data = [];


http.createServer(function(req,res){
	var pathObj = url.parse(req.url,true)
	switch(pathObj.pathname){
		case '/getNews':
		for (var i = 0;;i++){
			if (index.length < 3){
				random(15)
			}else{
				break
			}
		}
		function random(count){
		    var rand = parseInt(Math.random()*count)
		    for (var i = 0;i < index.length;i++){
		    	if (index[i] == rand){
		    		return false         
		    	}
		    }
		    index.push(rand)
		}
		//笨笨的方法 arr.splice(index,1)删除掉生成的index不会重复了
		//理解的问题，发送一次请求执行一次函数所以函数内部的 news 并没有变化

		data = [news[index[0]],news[index[1]],news[index[2]]];
		res.end(JSON.stringify(data));
		console.log(data)
		index = []
		break;


		default:
		fs.readFile(path.join(__dirname,pathObj.pathname),function(err,data){
			if(err){
				res.statusCode = 404;
				res.end('Not Found')
			}else{
				res.end(data);
			}
		})	

	}

}).listen(8080)












/*for (var i = 0;;i++){
	if (index.length < 3){
		random(8)
	}else{
		break
	}
}
function random(count){
    var rand = parseInt(Math.random()*count)
    for (var i = 0;i < index.length;i++){
    	if (index[i] == rand){
    		return false         
    	}
    }
    index.push(rand)
}

data = [news[index[0]],news[index[1]],news[index[2]]];*/