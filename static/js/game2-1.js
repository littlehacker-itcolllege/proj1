document.onkeydown = typeGame;  //キー押下時に関数typeGame()を呼び出す

//文字を格納する配列
//var moji = new Array("Ａ","Ｂ","Ｃ","Ｄ","Ｅ","Ｆ","Ｇ","Ｈ","Ｉ",
//                     "Ｊ","Ｋ","Ｌ","Ｍ","Ｎ","Ｏ","Ｐ","Ｑ","Ｒ",
//                     "Ｓ","Ｔ","Ｕ","Ｖ","Ｗ","Ｘ","Ｙ","Ｚ");

//キーコードを格納する配列
var kcode = new Array(69,83,67,65,80,69);
//var kcode = new Array(65,66,67,68,69,70,71,72,73,
//                      74,75,76,77,78,79,80,81,82,
//                      83,84,85,86,87,88,89,90);
80,65,83,83
//0～25までの乱数を格納する配列
var rnd = new Array();

//グローバル変数群
var mondai = "";       //問題の文字列を格納
var cnt=0;             //何問目か格納
var iki =0;
var esc =1;
var main = null;
var left =20;
var nam=10;

//0～25までの乱数を200個作成して配列rndに格納する関数
function ransu()
{
  for ( var i = 0 ; i < 6 ; i++ )
  {
    rnd[i] = i;
  }
}

function count(){
  timer = setInterval('countDown()',500);
  document.getElementById("start").style.display="none";
  document.getElementById("box").style.display="block";
  document.getElementById("key1").style.display="block";
}

function countDown(){
  iki++;
	document.getElementById("breath").textContent=iki;
	if(iki == nam){
		nam+=10;
		document.getElementById("enemy").style.left=nam+"%";
	}
  if(nam == left){
    clearInterval(timer);
  }
}

//タイピングゲームの問題をセットする関数
function gameSet()
{
  //カウント数をクリアする
  cnt=0;

  //まずは問題文を作る
  ransu();
  //問題文をテーブルを使って表示。各セルはID名「word＋数字」を付す
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
		if(esc >=1){
			document.getElementById("key"+esc).style.display="none";
			esc++;
			left+=10;
			document.getElementById("chara").style.left=left+"%";
			if(esc <=6){
				document.getElementById("key"+esc).style.display="block";
			}
			esc--;
		}
    cnt++; //カウント数を＋１にする
		esc++;
    //全文字入力したか確認
    if ( cnt == 6)
    {
			clearInterval(timer);
      //問題終了を告げる文字列を作成
    }
  }
}
