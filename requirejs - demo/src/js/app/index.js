define(['jquery','carousel','event','gotop','exposure'],function($,Carousel,Event,GoTop,Exposure){


    new GoTop();

	Carousel.init($('.carousel'))
    
    var colors = ['#dfdfdc', '#142829', '#2b2e41', '#172838']
    var msgs = ['兴趣很重要', '踏实很重要', '思考很重要', '动手很重要']

	Event.on('carousel:play',function(idx){
		$('body').css('background-color',colors[idx])
		$('.intro p').text(msgs[idx])
	});

	Exposure.one($('.img-cells img'), function(){
		var $this = $(this);
		$this.attr('src', $this.attr('data-scr'));
	})
})