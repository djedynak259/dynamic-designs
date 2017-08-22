document.getElementById('navAlignLeft').addEventListener('click', function(){
	let el = document.getElementsByClassName('navButtonList')[0];
	el.setAttribute('style', 'animation-name: navFlexLeft;');
})

document.getElementById('navAlignRight').addEventListener('click', function(){
	let el = document.getElementsByClassName('navButtonList')[0];
	el.setAttribute('style', 'animation-name: navFlexRight;');
})
