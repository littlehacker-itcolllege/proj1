var time=30;
var count;
function load(){
	document.getElementById("in").disabled="disaled";
}
function start(){
	document.getElementById("back").style.opacity="1";
	document.getElementById("box").style.display="block";
	document.getElementById("start").style.display="none";
	document.getElementById("C").style.display="none";
	document.getElementById("V").style.display="none";
	document.getElementById("in").disabled="";
	count=setInterval("timer()",1000);
}
function check(){
	if (document.getElementById("jumon").value=="aHR0cDovL2xvY2FsaG9zdDo4MDgwL29tYWtlLw=="){
		document.getElementById("pice1").style.top="17.5%";
		document.getElementById("pice2").style.top="17.5%";
		document.getElementById("pice3").style.top="22%";
		document.getElementById("pice4").style.top="22%";
		document.getElementById("input").style.display="none";
		document.getElementById("input2").style.display="block";
	}else{
		alert("呪文が違うよ...")	}
}
function check2(){
	if (document.getElementById("jumon2").value=="44GZ44GU44GEIeOCiOOBj+OCj+OBi+OBo+OBn+OBrQ=="){
		document.getElementById("pice1").style.left="41%";
		document.getElementById("pice2").style.left="44.5%";
		document.getElementById("pice3").style.left="41%";
		document.getElementById("pice4").style.left="45%";
		document.getElementById("clear").style.display="block";
		document.getElementById("clear-window").style.display="block";
		document.getElementById("back").style.opacity="0.5";
		cler();
		clearInterval(count);
	}else{
		alert("呪文が違うよ...")	}
}
function timer(){
	time--;
	document.getElementById("timer").textContent=time;
	if(time==0){
		location.href="http://localhost:8080//stage3-3/gameover3-3"
	}
}

function se() {
	audioElem = new Audio();
	audioElem.src = "/static/gamesound/1-4magic.m4a";
	audioElem.play();
}

function cler() {
	audioElem = new Audio();
	audioElem.src = "/static/gamesound/cler.m4a";
	audioElem.play();
}
