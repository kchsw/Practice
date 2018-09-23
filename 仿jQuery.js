window.jQuery = function(selector){
    var elements 
    if (typeof selector ==='string'){
        elements = document.querySelectorAll(selector);
       
    }else if(selector.length){
        elements = selector;

    }
    elements.on = function(enentType,fn){
        for (var i = 0;i<elements.length;i++){
            elements[i].addEventListener(enentType,fn)
        }
        return elements;
    }
    elements.addClass = function(className){
        for (var i = 0;i<elements.length;i++){
            elements[i].classList.add(className)
        }
        return elements;
    }
    elements.removeClass = function(className){
        for (var i = 0;i<elements.length;i++){
            elements[i].classList.add(className)
        }
        return elements;
    }
    elements.toggleClass = function(className){
        for (var i = 0;i<elements.length;i++){
            elements[i].classList.toggleClass(className)
        }
        return elements;
    }
    elements.text = function(text){
        if (text ===undefined){
            var result = [];
            for (var i = 0;i<elements.length;i++){
                result.push(elements[i].innerText);
            }
            return result;
        }else{
            for (var i = 0;i<elements.length;i++){
                elements[i].innerText = text;
            }
        }
    }
    elements.html = function(html){
        if (html ===undefined){
            var result = [];
            for (var i = 0;i<elements.length;i++){
                result.push(elements[i].innerHTML);
            }
            return result;
        }else{
            for (var i = 0;i<elements.length;i++){
                elements[i].innerHTML = html;
            }
        }
    }
    elements.find = function(selector){
    	var arrys = [];
    	for (var i = 0;i<elements.length;i++){
    		var arry = elements[i].querySelectorAll(selector);
    		for (var i = 0;i<arry.length;i++){
    			arrys.push(arry[i])
    		} 
    	}
        arrys.previousSelection = elements
    	return jQuery(arrys)
    }
    elements.end = function(){
        return elements.previousSelection;
    }
    return elements
}
window.$ = window.jQuery;