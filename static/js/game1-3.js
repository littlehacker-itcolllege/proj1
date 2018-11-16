position = 0;
var timer;
window.onscroll = function(){
  var a = document.documentElement.scrollTop || document.body.scrollTop;
	document.getElementById("test").textContent=a;
	position = a;
}
function load(){
	document.getElementById("attack").disabled="disabled";
}
function start(){
	document.getElementById("back").style.opacity="1";
	document.getElementById("attack").disabled="";
	document.getElementById("start").style.display="none";
}
function onClick(){
	var ene = document.getElementById('enemy-meter');
	if(position > 165 && position <= 290){
		ene.value -=1;
		if(ene.value == 0){
			document.getElementById("clear").style.display="block";
			document.getElementById("back").style.opacity="0.5";
		}else{
			var a = Math.floor( Math.random() * 1001 ) ;
			scrollTo(0,a);
		}
	}
}
