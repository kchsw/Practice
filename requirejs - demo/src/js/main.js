require.config({
	baseUrl:"src/js/app",//相对于index.html的地址
	paths:{
		'jquery':"../lib/bower_components/jquery/jquery-3.3.1.min"//相对于baseUrl的地址
	}
})

require(['index']);