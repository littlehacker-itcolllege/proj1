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
	}
	if(id=="b"){
		document.getElementById("droppoint1").innerHTML="<div id=\"drop1\" class=\"drop\"><img src=\"/static/game/wepon2.png\" class=\"dragimg\" id=\"a\" draggable=\"false\" style=\"display\:block\";></div>"
	}
	if(id=="c"){
		document.getElementById("droppoint1").innerHTML="<div id=\"drop1\" class=\"drop\"><img src=\"/static/game/wepon3.png\" class=\"dragimg\" id=\"a\" draggable=\"false\" style=\"display\:block\";></div>"
	}
	if(drop1 !=null && drop2 !=null && drop3!=null){
		document.getElementById("clear").style.display="block";
		document.getElementById("back").style.opacity="0.5";
	}
}
function Drop2(event) {
	const id = event.dataTransfer.getData("text");
	const elm = document.getElementById(id);
	event.currentTarget.appendChild(elm);
	event.preventDefault();
	drop2 = "ok";
	if(id == "a"){
		document.getElementById("droppoint2").innerHTML="<div id=\"drop2\" class=\"drop\"><img src=\"/static/game/wepon1.png\" class=\"dragimg\" id=\"a\" draggable=\"false\" style=\"display\:block\";></div>"
	}
	if(id=="b"){
		document.getElementById("droppoint2").innerHTML="<div id=\"drop2\" class=\"drop\"><img src=\"/static/game/wepon2.png\" class=\"dragimg\" id=\"a\" draggable=\"false\" style=\"display\:block\";></div>"
	}
	if(id=="c"){
		document.getElementById("droppoint2").innerHTML="<div id=\"drop2\" class=\"drop\"><img src=\"/static/game/wepon3.png\" class=\"dragimg\" id=\"a\" draggable=\"false\" style=\"display\:block\";></div>"
	}
	if(drop1 !=null && drop2 !=null && drop3!=null){
		if(drop1 !=null && drop2 !=null && drop3!=null){
		document.getElementById("clear").style.display="block";
		document.getElementById("back").style.opacity="0.5";
		}
	}
}
function Drop3(event) {
	const id = event.dataTransfer.getData("text");
	const elm = document.getElementById(id);
	event.currentTarget.appendChild(elm);
	event.preventDefault();
	drop3 = "ok";
	if(id == "a"){
		document.getElementById("droppoint3").innerHTML="<div id=\"drop3\" class=\"drop\"><img src=\"/static/game/wepon1.png\" class=\"dragimg\" id=\"a\" draggable=\"false\" style=\"display\:block\";></div>"
	}
	if(id=="b"){
		document.getElementById("droppoint3").innerHTML="<div id=\"drop3\" class=\"drop\"><img src=\"/static/game/wepon2.png\" class=\"dragimg\" id=\"a\" draggable=\"false\" style=\"display\:block\";></div>"
	}
	if(id=="c"){
		document.getElementById("droppoint3").innerHTML="<div id=\"drop3\" class=\"drop\"><img src=\"/static/game/wepon3.png\" class=\"dragimg\" id=\"a\" draggable=\"false\" style=\"display\:block\";></div>"
	}
	if(drop1 !=null && drop2 !=null && drop3!=null){
		document.getElementById("clear").style.display="block";
		document.getElementById("back").style.opacity="0.5";
	}
}

// ブラウザ標準のドロップ動作をキャンセル
function DragOver(event) {
	event.preventDefault();
}

