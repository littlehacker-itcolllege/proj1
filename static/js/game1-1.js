var timer;
var attack;
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
	document.getElementById("hp").textContent=hp;
	//敵のHPが0になったときの処理//
	if(ene.value<=0){
		//メータやボタンなどの非表示//
		document.getElementById("enemy-down").style.display="block";
		document.getElementById("enemy-img").style.display="none";
		document.getElementById("meter").style.display="none";
		document.getElementById("power").style.display="none";
		document.getElementById("power").style.display="none";
		document.getElementById("str").style.display="none";
		document.getElementById("attack").style.display="none";
		document.getElementById("clear").style.display="block";
		document.getElementById("back").style.opacity="0.5";
		fin();
	}else{
		setTimeout(reload,2000);
	}
		//攻撃ボタンを押せなくする//
	document.getElementById("attack").disabled="disabled";
}

//メータ一時停止後の再開//
function reload(){
	var pus = document.getElementById('meter');
	pus.value=0;
	document.getElementById("attack").disabled="";
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


