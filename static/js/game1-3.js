position = 0;
var timer;
window.onscroll = function(){
  var a = document.documentElement.scrollTop || document.body.scrollTop;
	document.getElementById("test").textContent=a;
	position = a;
}
function onClick(){
	var ene = document.getElementById('enemy-meter');
	var next = document.getElementById("change");
	if(position > 165 && position <= 290){
		ene.value -=1;
		if(ene.value == 0){
			document.getElementById("attack").style.display="block";
			next.innerHTML = '<a href="http://localhost:8080/stage1-3/nextstory1-3" target="story1-3" ><button id="next" style="width:100px;height:50px"><font size="4">Next</font></button></a>'
		}else{
			var a = Math.floor( Math.random() * 1001 ) ;
			scrollTo(0,a);
		}
	}
}
