function Wopen(){
    window.open('http://www.imooc.com','_blank','width=600,height=400,top=100,left=0')  

  } 
function rec(){
	var score; //score变量，用来存储用户输入的成绩值。
	score =prompt("请输入您的成绩");
	if(score>=90)
	{
	   alert("那你很你很棒棒哦!");
	}
	else if(score>=75)
    {
	   alert("不错吆!");
	}
	else if(score>=60)
    {
	   alert("要加油!");
    }
    else
	{
       alert("要努力了!");
	}
  }
 function Myname(){
 	var myname=prompt("请输入你的姓名:");
if(myname!=null)
  {   alert("你好"+myname); }
else
  {  alert("你好 my friend.");  }
 }
 function openWindow(){
    var sure=confirm("是否新窗口打开")
        if(sure==true){
        	var url=prompt("输入网址","http://www.imooc.com")
        	if(url!=null){
        		window.open(url,'_blank','width=600,height=400,top=100,left=0')  
        	}
        	else{
        		alert("滚nmlgb")
        	}
        }
        else{
        	alert("滚nmlgb")
        }

 }
 function hidetext(){
  var mytext = document.getElementById("txt");
  mytext.style.display="none";
 }
 function showtext(){
  var mytext = document.getElementById("txt");
  mytext.style.display="block";
 }
 function chcolor(){
  var mytext = document.getElementById("txt");
  mytext.style.color="red";
 }
 function chwandh(){
  var mytext = document.getElementById("txt");
  mytext.style.width="500px";
  mytext.style.height="300px";
 }
 function resrt(){
  var sure=confirm("是否取消设置")
  if (sure==true){
    var mytext = document.getElementById("txt");
    mytext.style.color="";
    mytext.style.width="";
    mytext.style.height="";
    mytext.style.display="";
  }
  else{

  }
 }
