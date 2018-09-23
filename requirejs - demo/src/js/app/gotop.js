define(['jquery'],function($){

	function GoTop(id){
		this.id = id ||'gotop';
		this.init();
	}

	GoTop.prototype = {
		init: function(){
			var $el = $('#' + this.id);
			if($el.length === 0 ){
				this.$el = $('<div id="' + this.id + '" style = "position: fixed; right: 10px; bottom: 10px; ">回到顶部</div>')
				$('body').append(this.$el);
			}else{
				this.$el = $el;
			}

			this.$c = $(document);	
			this.bind();		
		},

		bind: function(){
			var _this = this;
			this.$el.click(function(){
				_this.gotoTop()
			});
			this.$c.scroll(function(){
				_this.scroll();
			})
		},

		gotoTop:function(){
			this.$c.scrollTop(0);
		},
		scroll:function(){
			var scrollTop = this.$c.scrollTop();
			if(scrollTop > 100){
				this.$el.show();
			}else{
				this.$el.hide();
			}
		}

	}

	return GoTop;
})