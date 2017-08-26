var myVar;

function myFunction() {
    myVar = setTimeout(showPage, 2000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("allWrap").style.display = "block";
}




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



!function(){

	function get(url){
		return new Promise(function(succeed,fail){
			var xhr = new XMLHttpRequest();
			xhr.open('get',url,true);
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

	let url = 'http://api.giphy.com/v1/gifs/search?q=ryan&api_key=a5c163ee9c29473580e365c6cc226a99&limit=6';

	get(url).then(function(text) {
		  console.log(JSON.parse(text));
		}, function(error) {
		  console.log("Failed to fetch data.txt: " + error);
		})


	// var xhr = new XMLHttpRequest();
	// xhr.open('get',`http://api.giphy.com/v1/gifs/search?q=ryan&api_key=a5c163ee9c29473580e365c6cc226a99&limit=6`, false);
	// xhr.addEventListener('load',function(){
	// 		console.log(JSON.parse(xhr.response), xhr.status)
	// })
	// xhr.send(null);

}();