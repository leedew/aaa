// let vh = window.innerHeight * 0.01;
// document.documentElement.style.setProperty('--vh', vh + 'px');
// window.addEventListener('resize', function () {
//     let vh = window.innerHeight * 0.01;
//     document.documentElement.style.setProperty('--vh', vh + 'px');
// });


/* file reader */
function fileReader(target){
	var _this = this;
	var target = document.querySelector(target);
	this.els = {
        input: target.querySelector('.fileInp'),
        output: target.querySelector('.fileOutput'),
        button : target.querySelector('.uploadBtn'),
    };
	console.log(this.els);
    this.changeFile = function(event){
    	event.preventDefault(); //submit 할때 새로고침 되는것을 방지
        var files = this.files[0];
        if(files){
			var reader = new FileReader();  	
			reader.onload = function() { 		
				_this.els.output.className += ' checked';
				_this.fileText(files.name);
			} 	 	
			reader.readAsText(this.files[0]);
        } else {
        	_this.els.output.className = 'fileOutput';
        	_this.fileText('파일 선택');
        }
    }

    this.fileText = function(text) {
        _this.els.output.textContent = text;
    }

    this.ready = function() {
        _this.els.input.addEventListener('change',_this.changeFile);
        _this.els.button.addEventListener('click', function(e) {
        	e.preventDefault();
			_this.els.input.click();
        });
    };
    this.ready();
}

function SelectItem(target){
	var _this = this;
	this.els = {
	    select: document.querySelector(target),
	    button : document.querySelector('.selectBtn'),
	};

	this.createSelect = function(){
		var length = this.els.select.length;
		var select = document.createElement('div');
		var selected = document.createElement('div');
		var optionlist = document.createElement('ul');
		var placeholder = this.placeholder();

		select.className = 'selectBox';
		selected.className = 'selectValue';
		optionlist.className = 'selectOptions';

		if(placeholder){
			selected.className += ' placeholder';
			selected.innerHTML = this.placeholder();
		}

		this.placeholder();
		for(var i = 0; i < length; i++){
			var option = document.createElement('li');
			option.className = 'option';
			option.innerHTML = this.els.select.options[i].value;
			optionlist.append(option);
		}
		select.append(selected, optionlist);
		this.els.select.after(select);
		this.els.addSelect = select;
		this.els.addOption = optionlist.querySelectorAll('.option');
		// this.els.select.style.display = 'none';
	}

	this.placeholder = function(){
		var text = this.els.select.dataset['holder'];
		return text;
	}

	this.open = function(){
		var target = _this.els.addSelect.querySelector('.selectOptions');
		aside.classList.toggle('on');
	}

	this.select = function(e){
		var selected = _this.els.addSelect.querySelector('.selectValue');
		for (const option of _this.els.addOption) {
		  option.className = ' option';
		}
		selected.className = 'selectValue';
		e.target.className += ' selected';
		selected.innerHTML = e.target.textContent;
	}

	this.ready = function() {
	    _this.createSelect();

	    _this.els.addSelect.addEventListener('click', function(e) {
	    	e.preventDefault();
			_this.open();
	    });

	    _this.els.button.addEventListener('click', function(e) {
	    	e.preventDefault();
			_this.els.addSelect.click();
	    });

	    for (const option of _this.els.addOption) {
		  option.addEventListener('click', function(e) {
	    	e.preventDefault();
			_this.select(e);
		    //...
		  });
		}
	};
	this.ready();
}


function asideShow(){
	var aside = document.querySelector('.aside-container');
	aside.classList.toggle('active');
}
document.addEventListener('DOMContentLoaded', function(){
	var asideBtn = document.querySelector('.asideBtn');
	asideBtn.addEventListener('click', function(e) {
    	e.preventDefault();
		asideShow();
    });
});

const fieldValues = document.querySelectorAll(".modal-body .field-value:not(:first-child)");
fieldValues.forEach((item)=>{
	// console.log(item);
	const input = item.querySelector("input")
	input.addEventListener("focusout",(e)=>{
		// value 값이 빈문자열이 아닐때
		if(e.target.value !== ""){
			// input의 클래스네임으로 input-focusout을 준다
			e.target.classList= "input-focusout";
		}else {
			// 빈문자열 일때는 클래스네임 없애기
			e.target.classList.remove("input-focusout");
		}
	})
})