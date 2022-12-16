function modal(target, callback){
	var _this = this;
	var pop = document.querySelector(target);
    this.els = {
        submit: pop.querySelector('.submit'),
        close : pop.querySelector('.closeBtn'),
    };
    this.fade = {
    	intervalID : 0,
    	opacity : 0,
    };

    this.open = function(){
    	_this.fade.intervalID = setInterval(_this.show,50);
    }

    this.close = function(){
    	_this.fade.intervalID = setInterval(_this.hide,50);
    }

    this.hide = function(){
		_this.fade.opacity = Number(window.getComputedStyle(pop).getPropertyValue("opacity"));
		
		if(_this.fade.opacity>0){
            //Fade out 핵심 부분
			_this.fade.opacity = _this.fade.opacity-0.1;
			pop.style.opacity = _this.fade.opacity;
			//img.style.opacity=opacity;
		}
		else{
			pop.style.display = "none";
			clearInterval(_this.fade.intervalID);
		}
	}
	
	this.show = function(){
		_this.fade.opacity = Number(window.getComputedStyle(pop).getPropertyValue("opacity"));
		pop.style.display = "block";
		if(_this.fade.opacity<1){
            //Fade out 핵심 부분
			_this.fade.opacity = _this.fade.opacity+0.1;
			pop.style.opacity = _this.fade.opacity;
			//img.style.opacity=opacity;
		}
		else{
			clearInterval(_this.fade.intervalID);
		}
	}	

    this.ready = function() {
        _this.els.submit.addEventListener('click', function(e) {
        	e.preventDefault();
			callback();
        });
        _this.els.close.addEventListener('click', function(e) {
        	e.preventDefault();
			_this.close();
        });
    };
    this.ready();
}

