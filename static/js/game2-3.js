document.onkeydown = typeGame;  //キー押下時に関数typeGame()を呼び出す
//文字を格納する配列
//var moji = new Array("Ａ","Ｂ","Ｃ","Ｄ","Ｅ","Ｆ","Ｇ","Ｈ","Ｉ",
//                     "Ｊ","Ｋ","Ｌ","Ｍ","Ｎ","Ｏ","Ｐ","Ｑ","Ｒ",
//                     "Ｓ","Ｔ","Ｕ","Ｖ","Ｗ","Ｘ","Ｙ","Ｚ");

//キーコードを格納する配列
var kcode = new Array(70,73,82,69);
var kcode2 = new Array(87,65,84,69,82);
var kcode3 = new Array(76,69,65,70);
//var kcode = new Array(65,66,67,68,69,70,71,72,73,
//                      74,75,76,77,78,79,80,81,82,
//                      83,84,85,86,87,88,89,90);
80,65,83,83
//0～25までの乱数を格納する配列
var rnd = new Array();
var rnd2 = new Array();
var rnd3 = new Array();

//グローバル変数群
var mondai = "";       //問題の文字列を格納
var cnt=0;             //何問目か格納
var cnt2=0;             //何問目か格納
var cnt3=0;             //何問目か格納
var que=0;
var timer1;
var dis=0;
var down=0;
var esc =1;
var main = null;
var monster=null;
var attribute=null;
var life=3;

function load(){
	document.getElementById("fire-button").disabled="disabled";
	document.getElementById("water-button").disabled="disabled";
	document.getElementById("leaf-button").disabled="disabled";
}

function start(){
	document.getElementById("back").style.opacity="1";
	document.getElementById("start").style.display="none";
	document.getElementById("fire-button").disabled="";
	document.getElementById("water-button").disabled="";
	document.getElementById("leaf-button").disabled="";
}
//0～25までの乱数を200個作成して配列rndに格納する関数
function ransu()
{
  for ( var i = 0 ; i < 4 ; i++ )
  {
    rnd[i] = i;
  }
}

function ransu2()
{
  for ( var i = 0 ; i < 5 ; i++ )
  {
    rnd2[i] = i;
  }
}

function ransu3()
{
  for ( var i = 0 ; i < 4 ; i++ )
  {
    rnd3[i] = i;
  }
}

//タイピングゲームの問題をセットする関数
function gameSet()
{
	document.getElementById("fire").style.display="inline";
	document.getElementById("water").style.display="none";
	document.getElementById("leaf").style.display="none";
	document.getElementById("keybord-fire").style.display="block";
	document.getElementById("keybord-water").style.display="none";
	document.getElementById("keybord-leaf").style.display="none";
  //カウント数をクリアする
  cnt=0;
	que=0;
  esc=1;

  //まずは問題文を作る
  ransu();
  //問題文をテーブルを使って表示。各セルはID名「word＋数字」を付す
}

function gameSet2()
{
	document.getElementById("water").style.display="inline";
	document.getElementById("fire").style.display="none";
	document.getElementById("leaf").style.display="none";
	document.getElementById("keybord-water").style.display="block";
	document.getElementById("keybord-fire").style.display="none";
	document.getElementById("keybord-leaf").style.display="none";
  //カウント数をクリアする
  cnt2=0;
  esc=1;
	que=1;
  //まずは問題文を作る
  ransu2();
}

function gameSet3()
{
	document.getElementById("leaf").style.display="inline";
	document.getElementById("fire").style.display="none";
	document.getElementById("water").style.display="none";
	document.getElementById("keybord-leaf").style.display="block";
	document.getElementById("keybord-fire").style.display="none";
	document.getElementById("keybord-water").style.display="none";
  //カウント数をクリアする
  cnt3=0;
  esc=1;
	que=2;
  //まずは問題文を作る
  ransu3();
}
//キー入力を受け取る関数
function typeGame(evt)
{
	se();
	var kc;  //入力されたキーコードを格納する変数
	if(monster!=null){
		if(que==0){
			if (document.all)//入力されたキーのキーコードを取得
			{
				kc = event.keyCode;
			}
			else
			{
				kc = evt.which;
			}
			//入力されたキーコードと、問題文のキーコードを比較
			if (kc == kcode[ rnd[cnt] ])
			{
				//以下、キーコードが一致した時の処理
				//入力されたセルの文字色を灰色にする
				var idName = "word"+cnt;
				document.getElementById(idName).style.color="#dddddd";
				document.getElementById("fire-button").disabled="disabled";
				document.getElementById("water-button").disabled="disabled";
				document.getElementById("leaf-button").disabled="disabled";
				document.getElementById("fire-gobrin").disabled="disabled";
				document.getElementById("water-gobrin").disabled="disabled";
				document.getElementById("leaf-gobrin").disabled="disabled";
				 if(esc >=1){
					document.getElementById("fire"+esc).style.display="none";
						esc++;
					if(esc <=4){
						document.getElementById("fire"+esc).style.display="block";
					}
				}
				cnt++; //カウント数を＋１にする
				//全文字入力したか確認
				if(cnt==4){
					document.getElementById("water-button").disabled="";
					document.getElementById("leaf-button").disabled="";
					document.getElementById("fire-button").disabled="";
					document.getElementById("fire-gobrin").disabled="";
					document.getElementById("water-gobrin").disabled="";
					document.getElementById("leaf-gobrin").disabled="";
					judge('leaf-');
					monster=null;
					clear();
				}
			}
		}
	}else{
			alert("敵を選択してください")
		}

	//2問目
	if(monster!=null){
		if(que == 1){
			if (document.all)
			{
				kc = event.keyCode;
			}
			else
			{
				kc = evt.which;
			}
			//入力されたキーコードと、問題文のキーコードを比較
			if (kc == kcode2[ rnd2[cnt2] ])
			{
				//以下、キーコードが一致した時の処理
				//入力されたセルの文字色を灰色にする
				var idName = "word2"+cnt2;
				document.getElementById(idName).style.color="#dddddd";
				document.getElementById("fire-button").disabled="disabled";
				document.getElementById("water-button").disabled="disabled";
				document.getElementById("leaf-button").disabled="disabled";
				document.getElementById("fire-gobrin").disabled="disabled";
				document.getElementById("water-gobrin").disabled="disabled";
				document.getElementById("leaf-gobrin").disabled="disabled";
			if(esc >=1){
				document.getElementById("water"+esc).style.display="none";
					esc++;
				if(esc <=5){
					document.getElementById("water"+esc).style.display="block";
				}
			}
				cnt2++; //カウント数を＋１にする
				//全文字入力したか確認
				if ( cnt2 == 5){
					document.getElementById("water-button").disabled="";
					document.getElementById("fire-button").disabled="";
					document.getElementById("leaf-button").disabled="";
					document.getElementById("fire-gobrin").disabled="";
					document.getElementById("water-gobrin").disabled="";
					document.getElementById("leaf-gobrin").disabled="";
					judge('fire-')
					monster=null;
					clear();
				}
			}
		}
	}

	//3問目
	if(monster!=null){
		if(que == 2){
			if (document.all)
			{
				kc = event.keyCode;
			}
			else
			{
				kc = evt.which;
			}
			//入力されたキーコードと、問題文のキーコードを比較
			if (kc == kcode3[ rnd3[cnt3] ])
			{
				//以下、キーコードが一致した時の処理
				//入力されたセルの文字色を灰色にする
				var idName = "word3"+cnt3;
				document.getElementById(idName).style.color="#dddddd";
				document.getElementById("water-button").disabled="disabled";
				document.getElementById("fire-button").disabled="disabled";
				document.getElementById("leaf-button").disabled="disabled";
				document.getElementById("fire-gobrin").disabled="disabled";
				document.getElementById("water-gobrin").disabled="disabled";
				document.getElementById("leaf-gobrin").disabled="disabled";
			if(esc >=1){
				document.getElementById("leaf"+esc).style.display="none";
					esc++;
				if(esc <=4){
					document.getElementById("leaf"+esc).style.display="block";
				}
			}
				cnt3++; //カウント数を＋１にする
				//全文字入力したか確認
				if ( cnt3 == 4){
					dis+=3;
					document.getElementById("leaf-button").disabled="";
					document.getElementById("fire-button").disabled="";
					document.getElementById("water-button").disabled="";
					document.getElementById("fire-gobrin").disabled="";
					document.getElementById("water-gobrin").disabled="";
					document.getElementById("leaf-gobrin").disabled="";
					judge('water-');
					clear();
				}
			}
		}
	}
}
function get_attribute(a){
	attribute=a;
}
var monster_attri;
function get_monster(m,n){
	monster=m;
	monster_attri=n;
	if(monster=="water"){//fire-gobrin
		document.getElementById("target").style.left="17%";
		document.getElementById("target").style.display="block";
	}
	if(monster=="leaf"){//water-gobrin
		document.getElementById("target").style.left="47%";
		document.getElementById("target").style.display="block";
	}
	if(monster=="fire"){//leaf-gobrin
		document.getElementById("target").style.left="77%";
		document.getElementById("target").style.display="block";
	}
}
function judge(j){
	var attri=j;
	if(attribute==monster){
		document.getElementById(attri+"gobrin").style.display="none";
		document.getElementById(attri+"gobrin-down").style.display="block";
		document.getElementById(attribute+"-button").style.display="none";
		document.getElementById("target").style.display="none";
		down+=1;
	}else{
		document.getElementById(monster_attri+"-gobrin").style.top="40%";
		document.getElementById(monster_attri+"-gobrin").style.left="45%";
		document.getElementById("chara").style.display="none";
		document.getElementById("damage").style.display="block";
		setTimeout('cleen()',500);
		document.getElementById("life"+life).style.display="none";
		life-=1;
		if(life==0){
			setTimeout('jump()',1000);
		}
		miss(attribute);
	}
}
function cleen(){
	if(monster_attri=="fire"){
		document.getElementById(monster_attri+"-gobrin").style.top="30%";
		document.getElementById(monster_attri+"-gobrin").style.left="14%";
		document.getElementById("chara").style.display="block";
		document.getElementById("damage").style.display="none";
	}
	if(monster_attri=="water"){
		document.getElementById(monster_attri+"-gobrin").style.top="30%";
		document.getElementById(monster_attri+"-gobrin").style.left="44%";
		document.getElementById("chara").style.display="block";
		document.getElementById("damage").style.display="none";
	}
	if(monster_attri=="leaf"){
		document.getElementById(monster_attri+"-gobrin").style.top="30%";
		document.getElementById(monster_attri+"-gobrin").style.left="74%";
		document.getElementById("chara").style.display="block";
		document.getElementById("damage").style.display="none";
	}
	document.getElementById("target").style.display="none";
}
function jump(){
	location.href="http://localhost:8080/stage2-3/gameover2-3";
}
function miss(attri){
	esc=1;
	var ene=attri;//eneにモンスターの弱点属性が入る
	console.log(ene);
	if(ene=="fire"){//火ゴブリンの場合
		gameSet();
		document.getElementById("fire-button").disabled="";
		document.getElementById("fire"+esc).style.display="block";
		for(var i=0;i<=3;i++){
			document.getElementById("word"+i).style.color="black";
		}
	}
	if(ene=="water"){//水ゴブリンの場合
		gameSet2();
		document.getElementById("water-button").disabled="";
		document.getElementById("water"+esc).style.display="block";
		for(var i=0;i<=4;i++){
			document.getElementById("word2"+i).style.color="black";
		}
	}
	if(ene=="leaf"){//草ゴブリンの場合
		gameSet3();
		document.getElementById("leaf"+esc).style.display="block";
		document.getElementById("leaf-button").disabled="";
		for(var i=0;i<=3;i++){
			document.getElementById("word3"+i).style.color="black";
		}
	}
}
function clear(){
	if(down==3){
		document.getElementById("start").style.display="none";
		document.getElementById("clear").style.display="block";
		document.getElementById("clear-window").style.display="block";
		document.getElementById("back").style.opacity="0.5";
	}
}

function se() {
	audioElem = new Audio();
	audioElem.src = "/static/gamesound/2-123typing.m4a";
	audioElem.play();
}
