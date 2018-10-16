document.onkeydown = typeGame;  //キー押下時に関数typeGame()を呼び出す
var timer;
//文字を格納する配列
//var moji = new Array("Ａ","Ｂ","Ｃ","Ｄ","Ｅ","Ｆ","Ｇ","Ｈ","Ｉ",
//                     "Ｊ","Ｋ","Ｌ","Ｍ","Ｎ","Ｏ","Ｐ","Ｑ","Ｒ",
//                     "Ｓ","Ｔ","Ｕ","Ｖ","Ｗ","Ｘ","Ｙ","Ｚ");

//キーコードを格納する配列
var kcode = new Array(84,82,69,65,83,85,82,69);
var kcode2 = new Array(75,69,89);
var kcode3 = new Array(80,65,83,83);
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
var iki=30;

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

function ransu3()
{
  for ( var i = 0 ; i < 4 ; i++ )
  {
    rnd3[i] = i;
  }
}

function countDown(){
	iki--;
	document.getElementById("breath").textContent=iki;
	if(iki ==0){
		clearInterval(timer);
		var fin="GAME終了";
		//問題枠にゲーム終了を表示
		document.getElementById("waku").innerHTML = fin;
	}
}
function count(){
	timer = setInterval('countDown()',1000);
	document.getElementById("start").style.display="none";
}
//タイピングゲームの問題をセットする関数
function gameSet()
{
	document.getElementById("waku").style.display="block";
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

  //まずは問題文を作る
  ransu2();
}

function gameSet3()
{
  //カウント数をクリアする
  cnt3=0;

  //まずは問題文を作る
  ransu3();
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
    document.getElementById(idName).style.color="#dddddd";
    cnt++; //カウント数を＋１にする
    //全文字入力したか確認
    if ( cnt == 8)
    {
			document.getElementById("key").style.display="table";
			document.getElementById("treasure").style.display="none";
			que =1;
			gameSet2();
		}
  }
	//2問目
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
			cnt2++; //カウント数を＋１にする
			//全文字入力したか確認
			if ( cnt2 == 3){
			document.getElementById("pass").style.display="table";
			document.getElementById("key").style.display="none";
			que =2;
			gameSet3();

			}
		}
	}
	//3問目
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
			cnt3++; //カウント数を＋１にする
			//全文字入力したか確認
			if ( cnt3 == 4){
				//問題終了を告げる文字列を作成
				clearInterval(timer);
				var fin="GAME終了";

				//問題枠にゲーム終了を表示
				document.getElementById("waku").innerHTML = fin;
			}
		}
	}
}
