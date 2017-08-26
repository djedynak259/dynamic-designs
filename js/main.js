document.getElementById('navAlignLeft').addEventListener('click', function(){
	let el = document.getElementsByClassName('navButtonList')[0];
	el.style.animationName= 'navFlexLeft';
})

document.getElementById('navAlignRight').addEventListener('click', function(){
	let el = document.getElementsByClassName('navButtonList')[0];
	el.style.animationName= 'navFlexRight';
})

document.getElementsByClassName('navBtn')[2].addEventListener('click',function(){
	let el = document.getElementsByClassName('contentWrap')[0];
	el.scrollIntoView(true);
})

document.getElementById('form').addEventListener('submit', function(e){
	e.preventDefault();
	let el = document.getElementById('errorMsg')

	console.log(document.getElementById('form').elements)
})

document.getElementById('form').elements.name.addEventListener('blur',function(e){
	let el = document.getElementById('name');
	let msg = document.getElementById('errorMsg');
	console.log(el.value.length)
	if(el.value.length < 5 && el.value.length){
		let errorEl = document.createElement('p')
		errorEl.className='nameError';
		let error = document.createTextNode('Name must have more characters');
		errorEl.appendChild(error);
		msg.appendChild(errorEl);
	}
	else {
		while (document.getElementsByClassName('nameError')[0]) {
	    msg.removeChild(document.getElementsByClassName('nameError')[0]);
		}
	}
})

document.getElementById('form').elements.email.addEventListener('blur',function(){
	let el = document.getElementById('form').elements.email.value;
	let msg = document.getElementById('errorMsg');
	let at = 0;
	let period = 0;
	for(let i=0;i<el.length;i++){
		if(el[i] === '@'){
			at++
		}
		if(el[i] === '.'){
			period++
		}
	}
	if(el.length && (at !== 1 || period !== 1)){
		let errorEl = document.createElement('p')
		errorEl.className = 'emailError';		
		let error = document.createTextNode('Must be valid email');
		errorEl.appendChild(error);
		msg.appendChild(errorEl);
	}
	else{
		while (document.getElementsByClassName('emailError')[0]) {
	    msg.removeChild(document.getElementsByClassName('emailError')[0]);
		}	
	}
})


function get(url){
	url = 'http://fortunecookieapi.com/v1/fortunes/1'
	return new Promise(function(succeed,fail){
		var xhr = new XMLHttpRequest();
		xhr.open('open',url,true);
		xhr.addEventListener('load',function(){
			if(xhr.status < 400){
				succeed(xhr.responseText)
			} else fail(new Error('reQuest failed ' + xhr.statusText))
		})
		xhr.addEventListener('fail', function(){
			fail(new Error('Network error'))
		})
		xhr.send(null)
	})
}

function gett(){
	get().then(function(text) {
	  console.log("data.txt: " + text);
	}, function(error) {
	  console.log("Failed to fetch data.txt: " + error);
	});
}


!function(){

	var xhr = new XMLHttpRequest();
	xhr.open('get',`http://fortunecookieapi.com/v1/fortunes/1`, false);
	xhr.addEventListener('load',function(){
			console.log(JSON.parse(xhr.response), xhr.status)
	})
	xhr.send(null);

}();