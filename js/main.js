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
	if(el.value.length < 5){
		let errorEl = document.createElement('p')
		let error = document.createTextNode('must use more characters');
		errorEl.appendChild(error);
		msg.appendChild(errorEl);
	}
	else {
		while (msg.hasChildNodes()) {
    msg.removeChild(msg.lastChild);
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