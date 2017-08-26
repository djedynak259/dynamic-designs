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
	console.log(document.getElementById('form').elements.email.value)
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

// document.getElementById('form').elements.name.addEventListener('focus',function(e){
// 	let msg = document.getElementById('errorMsg');
// 	let errorEl = document.createElement('p')
// 	let error = document.createTextNode('must use more characters');
// 	errorEl.appendChild(error);
// 	msg.appendChild(errorEl);
// })