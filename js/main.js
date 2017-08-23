document.getElementById('navAlignLeft').addEventListener('click', function(){
	let el = document.getElementsByClassName('navButtonList')[0];
	el.style.animationName= 'navFlexLeft';
})

document.getElementById('navAlignRight').addEventListener('click', function(){
	let el = document.getElementsByClassName('navButtonList')[0];
	el.style.animationName= 'navFlexRight';
})
