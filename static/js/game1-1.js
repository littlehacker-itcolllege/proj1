var timer;
var attack;
var posi=50;
var stop=0;
var deg=0;
//読み込み時実行//
function firstscript(){
	document.getElementById("attack").disabled="disabled";
}
function restart(){
	timer = setInterval('meterUp()',10);
}
function start(){
	document.getElementById("attack").disabled="";
	document.getElementById("back").style.opacity="1";
	document.getElementById("start").style.display="none";
	document.getElementById("left_click").style.display="none";
	timer = setInterval('meterUp()',10);
}
//メータを1ずつ増やす//
function meterUp(){
	var pus = document.getElementById('meter');
	pus.value++;
	attack = pus.value;
	document.getElementById("power").textContent=attack;
	if(pus.value == 100){
		attack=100;
		pus.value=0;
	}
}
//クリック時//
function onClick(){

	var ene = document.getElementById('enemy-meter');
	clearInterval(timer);
	ene.value -= attack ;
	var hp = ene.value;
	stone_timer=setInterval('stone()',25);
	document.getElementById("hp").textContent=hp;
	//敵のHPが0になったときの処理//
	if(ene.value<=0){
		//メータやボタンなどの非表示//
		setTimeout('clear()',500);
		fin();
	}else{
		setTimeout(reload,1000);
	}
		//攻撃ボタンを押せなくする//
	document.getElementById("attack").disabled="disabled";
}
function clear(){
	document.getElementById("enemy-damage").style.display="none";
	document.getElementById("enemy-down").style.display="block";
	document.getElementById("enemy-img").style.display="none";
	document.getElementById("meter").style.display="none";
	document.getElementById("power").style.display="none";
	document.getElementById("power").style.display="none";
	document.getElementById("str").style.display="none";
	document.getElementById("attack").style.display="none";
	document.getElementById("clear").style.display="block";
	document.getElementById("back").style.opacity="0.5";
	document.getElementById("clear-window").style.display="block";
	document.getElementById("stone").style.display="none";
	document.getElementById("enemy-meter").style.display="none";
	document.getElementById("hp").style.display="none";
}
function stone(){
	stop+=1.5;
	deg = Math.random()*361;
	document.getElementById("stone").style.top=posi-stop+"%";
	document.getElementById("stone").style.transform="rotate("+deg+"deg)";
	if(stop==30){
		clearInterval(stone_timer);
		document.getElementById("enemy-img").style.display="none";
		document.getElementById("enemy-damage").style.display="block";
		document.getElementById("stone").style.top="50%";
		posi=50;
		stop=0;
		document.getElementById("stone").style.transform="rotate(0deg)";
		deg=0;
	}
}
//メータ一時停止後の再開//
function reload(){
	var pus = document.getElementById('meter');
	pus.value=0;
	document.getElementById("attack").disabled="";
	document.getElementById("enemy-img").style.display="block";
	document.getElementById("enemy-damage").style.display="none";
	restart();
}
function fin(){
	clearInterval(timer);
}

//ヒット音//
function se() {
	audioElem = new Audio();
	audioElem.src = "/static/gamesound/1-1button.m4a";
	audioElem.play();
}

//Sound//
roop();
function roop(){
	document.getElementById("music").src="{% static 'sound/map.m4a' %    }";
	setTimeout(roop, 131000);
}
