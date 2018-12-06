document.onkeydown = typeGame;  //キー押下時に関数typeGame()を呼び出す
var timer;
//文字を格納する配列
//var moji = new Array("Ａ","Ｂ","Ｃ","Ｄ","Ｅ","Ｆ","Ｇ","Ｈ","Ｉ",
//                     "Ｊ","Ｋ","Ｌ","Ｍ","Ｎ","Ｏ","Ｐ","Ｑ","Ｒ",
//                     "Ｓ","Ｔ","Ｕ","Ｖ","Ｗ","Ｘ","Ｙ","Ｚ");

//キーコードを格納する配列
var kcode = new Array(84,82,69,65,83,85,82,69);
var kcode2 = new Array(75,69,89);
//var kcode = new Array(65,66,67,68,69,70,71,72,73,
//                      74,75,76,77,78,79,80,81,82,
//                      83,84,85,86,87,88,89,90);
80,65,83,83
//0～25までの乱数を格納する配列
var rnd = new Array();
var rnd2 = new Array();

//グローバル変数群
var mondai = "";       //問題の文字列を格納
var cnt=0;             //何問目か格納
var cnt2=0;             //何問目か格納
var que=0;
var timer1;
var iki=30;
var chara=10;

var esc =1;
var main = null;
//0～25までの乱数を200個作成して配列rndに格納する関数
function ransu()
{
  for ( var i = 0 ; i < 8 ; i++ )
  {
    rnd[i] = i;
  }
}

function ransu2()
{
  for ( var i = 0 ; i < 3 ; i++ )
  {
    rnd2[i] = i;
  }
}
function countDown(){
	iki--;
	document.getElementById("breath").textContent=iki;
	if(iki ==0){
		setTimeout("jump()",10)
		alert("ブクブクブク...");
	}
}
function jump(){
	location.href="http://localhost:8080/stage2-2/gameover2-2";
}
function count(){
	timer = setInterval('countDown()',1000);
	document.getElementById("start").style.display="none";
	document.getElementById("key1").style.display="block";
}
//タイピングゲームの問題をセットする関数
function gameSet()
{
	document.getElementById("back").style.opacity="1";
  //カウント数をクリアする
  cnt=0;

  //まずは問題文を作る
  ransu();
  //問題文をテーブルを使って表示。各セルはID名「word＋数字」を付す
}

function gameSet2()
{
  //カウント数をクリアする
  cnt2=0;
	esc=1;
  //まずは問題文を作る
  ransu2();
}

//キー入力を受け取る関数
function typeGame(evt)
{
  var kc;  //入力されたキーコードを格納する変数
  //入力されたキーのキーコードを取得
  if (document.all)
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
    document.getElementById(idName).style.color="gray";
		document.getElementById("chara").style.left=chara+"%";
			if(esc >=1){
				document.getElementById("key"+esc).style.display="none";
				esc++;
				if(esc <=8){
					document.getElementById("key"+esc).style.display="block";
				}
			}
		chara+=10;
    cnt++; //カウント数を＋１にする
    //全文字入力したか確認
    if ( cnt == 8)
    {
			document.getElementById("key").style.display="table";
			document.getElementById("treasure").style.display="none";
			document.getElementById("chara").style.display="none";
			document.getElementById("water-back").style.display="none";
			document.getElementById("chest").style.display="block";
			document.getElementById("key21").style.display="block";
			que =1;
			gameSet2();
		}
  }
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
			document.getElementById(idName).style.color="gray";
			if(esc >=1){
				document.getElementById("key2"+esc).style.display="none";
				esc++;
				if(esc <=3){
					document.getElementById("key2"+esc).style.display="block";
				}
			}
			cnt2++; //カウント数を＋１にする
			//全文字入力したか確認
			if ( cnt2 == 3){
				//問題終了を告げる文字列を作成
				clearInterval(timer);
			document.getElementById("start").style.display="none";
      document.getElementById("clear").style.display="block";
      document.getElementById("clear-window").style.display="block";
      document.getElementById("back").style.opacity="0.5";
			}
		}
	}
}
