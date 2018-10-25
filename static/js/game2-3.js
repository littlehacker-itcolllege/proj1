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

var esc =1;
var main = null;
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
		document.getElementById("fire-button").disabled="disabled";
		document.getElementById("water-button").disabled="disabled";
		document.getElementById("leaf-button").disabled="disabled";
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
			dis+=1;
			document.getElementById("fire-button").disabled="disabled";
			document.getElementById("water-button").disabled="";
			document.getElementById("leaf-button").disabled="";
			if(dis==3){
					document.getElementById("water-button").disabled="disabled";
				}else if(dis==4){
					document.getElementById("leaf-button").disabled="disabled";
				}else if(dis==6){
					document.getElementById("water-button").disabled="disabled";
					document.getElementById("leaf-button").disabled="disabled";
				}
			document.getElementById("leaf-gobrin").style.display="none";
			document.getElementById("leaf-gobrin-down").style.display="block";
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
			document.getElementById("fire-button").disabled="disabled";
			document.getElementById("water-button").disabled="disabled";
			document.getElementById("leaf-button").disabled="disabled";
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
				dis+=2;
				document.getElementById("water-button").disabled="disabled";
				document.getElementById("fire-button").disabled="";
				document.getElementById("leaf-button").disabled="";
				if(dis==3){
					document.getElementById("fire-button").disabled="disabled";
				}else if(dis==5){
					document.getElementById("leaf-button").disabled="disabled";
				}else if(dis==6){
					document.getElementById("fire-button").disabled="disabled";
					document.getElementById("leaf-button").disabled="disabled";
				}
				document.getElementById("fire-gobrin").style.display="none";
				document.getElementById("fire-gobrin-down").style.display="block";
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
			document.getElementById("water-button").disabled="disabled";
			document.getElementById("fire-button").disabled="disabled";
			document.getElementById("leaf-button").disabled="disabled";
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
				document.getElementById("leaf-button").disabled="sisabled";
				document.getElementById("fire-button").disabled="";
				document.getElementById("water-button").disabled="";
				if(dis==4){
					document.getElementById("fire-button").disabled="disabled";
				}else if(dis==5){
					document.getElementById("water-button").disabled="disabled";
				}else if(dis==6){
					document.getElementById("fire-button").disabled="disabled";
					document.getElementById("water-button").disabled="disabled";
				}
				document.getElementById("water-gobrin").style.display="none";
				document.getElementById("water-gobrin-down").style.display="block";
			}
		}
	}
}
