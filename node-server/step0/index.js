var http = require('http');
var path = require('path');
var url = require('url')
var server = http.createServer(function(req,res){
	var pathObj = url.parse(req.url, true)
    console.log(pathObj)
	console.log(req.url);
	//console.log(path.join(__dirname, 'static'));
    //res.setHeader('Content-Type','text/html; charset=gbk')
	//res.write('<h1>jirengu</h1>');
	//res.end();
	setTimeout(function(){
		res.setHeader('Content-Type','text/html; charset=utf-8');
		res.writeHead(200,'ok');
		res.write('<html><head><meta charset="gbk"/></head>');
		res.write('<body>');
		res.write('<h1>你好</h1>');
		res.write('</body>')
		res.write('</html>')
        res.end();
	},2000)
})
server.listen(9000);