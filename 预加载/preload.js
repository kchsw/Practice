(function($){
	function PreLoad(imgs,options){
		this.imgs = (typeof imgs === 'string') ? [imgs] : imgs;
		this.opts = $.extend({},PreLoad.DEFAULTS,options);

		this._unordered()
	}
	PreLoad.DEFAULTS = {
		each: null,
		all: null
	}

	PreLoad.prototype._unordered = function(){
		var imgs = this.imgs,
		    opts = this.opts,
		    count = 0,
		    len = imgs.length;


		$.each(imgs,function(i,src){
			if(typeof src != 'string') return;

        	var imgobj = new Image();
        	imgobj.src = src;

        	$(imgobj).on("load error",function(){
        		count++;

        		opts.each && opts.each(count);
        		// $('.progress').html(Math.round((count) / len * 100) + '%')

        		if(count == len){
	        		// $('.loading').hide();
	        		// $('.box').show()
	        		// document.title = '1'/len

	        		opts.all && opts.all();
	        	}
	        	
        	})
        })
	}

	$.extend({
		preload:function(imgs,options){
			new PreLoad(imgs,options)
		}
	});
})(jQuery);