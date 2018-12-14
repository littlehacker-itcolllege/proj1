function load(){
	document.getElementById("in").disabled="disabled";
}
function start(){
	document.getElementById("back").style.opacity="1";
	document.getElementById("start").style.display="none";
	document.getElementById("right").style.display="none";
	document.getElementById("in").disabled="";
}
function check(){
	if (document.getElementById("jumon").value=="fire"){
		document.getElementById("enemy-down").style.display="block";
		document.getElementById("enemy").style.display="none";
		document.getElementById("clear").style.display="block";
		document.getElementById("clear-window").style.display="block";
	document.getElementById("back").style.opacity="0.5";
	}else{
		setTimeout('miss()',100);
	}
}
function miss(){
 alert("呪文が違うよ...");
}
//hitsound//
function se() {
	audioElem = new Audio();
	audioElem.src = "/static/gamesound/1-4magic.m4a";
	audioElem.play();
}
