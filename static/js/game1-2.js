drop1 = null;
drop2 = null;
drop3 = null;
function load(){
}

function start(){
 document.getElementById("back").style.opacity="1";
 document.getElementById("start").style.display="none";
 document.getElementById("a").style.display="block";
 document.getElementById("b").style.display="block";
 document.getElementById("c").style.display="block";
 document.getElementById("damy-a").style.display="none";
 document.getElementById("damy-b").style.display="none";
 document.getElementById("damy-c").style.display="none";
}

function DragStart(event) {
	event.dataTransfer.setData("text", event.target.id);
}

// ドロップ時に元のドラッグ値を取得し、現在の要素上に入れ子で保存する
function Drop1(event) {
	const id = event.dataTransfer.getData("text");
	const elm = document.getElementById(id);
	event.currentTarget.appendChild(elm);
	event.preventDefault();
	drop1 = "ok";
	if(id == "a"){
		document.getElementById("droppoint1").innerHTML="<div id=\"drop1\" class=\"drop\"><img src=\"/static/game/wepon1.png\" class=\"dragimg\" id=\"a\" draggable=\"false\" style=\"display\:block\";></div>"
		setTimeout("wepon('a')",500);
	}
	if(id=="b"){
		document.getElementById("droppoint1").innerHTML="<div id=\"drop1\" class=\"drop\"><img src=\"/static/game/wepon2.png\" class=\"dragimg\" id=\"a\" draggable=\"false\" style=\"display\:block\";></div>"
		setTimeout("wepon('b')",500);
	}
	if(id=="c"){
		document.getElementById("droppoint1").innerHTML="<div id=\"drop1\" class=\"drop\"><img src=\"/static/game/wepon3.png\" class=\"dragimg\" id=\"a\" draggable=\"false\" style=\"display\:block\";></div>"
		setTimeout("wepon('c')",500);
	}
}
var count=0;
function wepon(num){
	if(drop1!=null){
		document.getElementById("droppoint1").innerHTML="<div id=\"drop1\" class=\"drop\" ondragover=\"DragOver(event)\" ondrop=\"Drop1(event)\"></div>"
		document.getElementById("damy-"+num).style.display="block";
		document.getElementById("damy-"+num).style.top="70%";
		count+=1;
		if (count==3){
			document.getElementById("drop1").style.display="none";
			document.getElementById("comp").style.display="block";
		}
	}
}
function wepon_click(){
	document.getElementById("wepon").style.display="block";
	document.getElementById("clear").style.display="block";
	document.getElementById("comp").style.display="none";
	document.getElementById("clear-window").style.display="block";
}
function stage2clear(){
	document.getElementById("clear").disabled="disabled";
	document.getElementById("back").style.opacity="0.5";
}
// ブラウザ標準のドロップ動作をキャンセル
function DragOver(event) {
	event.preventDefault();
}

