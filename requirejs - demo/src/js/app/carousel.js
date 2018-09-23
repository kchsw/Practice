define(function(require){

	var $ = require('jquery');

	var Event = require('event');

	var Carousel = (function(){
			function _Carousel($node) {
				this.$ct = $node;
				this.init();
				this.autoPlay();
				this.bind();

			}
			_Carousel.prototype.init = function(){

				var $imgCt = this.$imgCt = this.$ct.find('.img-ct');
				var $imgs = this.$imgs = this.$ct.find('.img-ct >li');
				$imgs.width($(window).width());
				var $preBtn = this.$preBtn = this.$ct.find('.pre');
				var $nextBtn = this.$nextBtn = this.$ct.find('.next');
				var $bullets = this.$bullets = this.$ct.find('.bullet li');
	            var imgCount = this.imgCount = $imgs.length;
	            var imgWidth = this.imgWidth = $imgs.find('img').width();
	            console.log(imgWidth)
	            //var pageIndex = 
	            this.pageIndex = 0;
	            //var isAnimate = 
	            this.isAnimate = false;
	            //var clock = '
	            this.clock;
	            $imgCt.append($imgs.first().clone());
				$imgCt.prepend($imgs.last().clone());
				
				$imgCt.width((imgCount+2)*imgWidth);
				$imgCt.css({left: -imgWidth});			
			}

			_Carousel.prototype.play = function(len){
				if (this.isAnimate){
	        		return
	        	}
	        	this.isAnimate = true;
	        	var _this = this;
	        	this.$imgCt.animate({
	        		left: '-='+this.imgWidth*len
	        	},1000,function(){
	        		_this.pageIndex+=len;
	        		if(_this.pageIndex === _this.imgCount){
	        			_this.pageIndex = 0;
	        			_this.$imgCt.css({left: -_this.imgWidth})
	        		}else if(_this.pageIndex === -1){
	        			_this.pageIndex = 3;
	        			_this.$imgCt.css({left: -_this.imgWidth * _this.imgCount})
	        		}
	        		_this.setBullet();
	        		_this.isAnimate = false;
	        		Event.fire('carousel:play',_this.pageIndex)
	        	})

			}

			_Carousel.prototype.setBullet = function(){
				this.$bullets.removeClass('active')
	        	        .eq(this.pageIndex).addClass('active');
			}

			_Carousel.prototype.stopAuto = function(){
				clearInterval(this.clock);
			}
			_Carousel.prototype.autoPlay = function(){
				var _this = this;
				clearInterval(this.clock);
				this.clock = setInterval(function(){
	        		_this.play(1);
	        	},3000)
			}
			_Carousel.prototype.bind = function(){
				var _this = this;
				this.$ct.hover(function(){
		        	_this.stopAuto();
		        },function(){
		        	_this.autoPlay();
		        })

		        this.$nextBtn.click(function(e){
		        	
		        	e.preventDefault();
		        	//playNext(1);
		        	_this.play(1);
		        })

		        this.$preBtn.click(function(e){
		        	
		        	e.preventDefault();
		        	//playPre(1);
		        	_this.play(-1);
		        })


		        this.$bullets.click(function(){
		        	var index = $(this).index();
		        	_this.play(index - _this.pageIndex);
		        })
			}


			return {
				init:function($node){
					$node.each(function(idx,nod){
						new _Carousel($(nod));
					})
				}
			}

		})()


    return Carousel;

})