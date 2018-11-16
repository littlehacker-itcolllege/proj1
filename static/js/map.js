var str=1;//cookieの文字列
var num=1;//IDで使うナンバー
var cookie=null;//cookieに代入する時に使う値
var i=1;//for用
var y=1;//for用

function mapload(){
	//cookie読み込み
	 var r = document.cookie.split(';');
  r.forEach(function(value) {
      var content = value.split('=');
      str=content[1];
			str+=1;
			num=str.length;
  })
	//非表示ステージ
	if(num>=1){
		for (y=num+1;y<=20;y++){
			document.getElementById("stage"+y).style.display="none";
		}
	}else{
		//最初だけ
		for (y=2;y<=20;y++){
			document.getElementById("stage"+y).style.display="none";
		}
	}
	//表示するステージ
	for(i=1;i<=num;i++){
		document.getElementById("stage"+i).style.display="block";
	}
}
function mapclick(){
	//一番最初のcookie
var r = document.cookie.split(';');
  r.forEach(function(value) {
      var content = value.split('=');
      str=content[1];
			if(str==null){
				cookie='stage=1;path=/';
				document.cookie=cookie;
			}
  })
}
function mapclick2(n){
var stage_num=0;
var r = document.cookie.split(';');
  r.forEach(function(value) {
      var content = value.split('=');
      str=content[1];
			stage_num=str.length;
			if(stage_num < n){
				str+=1;
			}
  })
	if(n>stage_num){
		cookie='stage='+str+';path=/';
		document.cookie=cookie;
	}
}
