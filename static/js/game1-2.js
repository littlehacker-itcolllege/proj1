drop1 = null;
drop2 = null;
drop3 = null;

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
	if(drop1 !=null && drop2 !=null && drop3!=null){
		document.getElementById("next").style.display="block";
	}
}
function Drop2(event) {
	const id = event.dataTransfer.getData("text");
	const elm = document.getElementById(id);
	event.currentTarget.appendChild(elm);
	event.preventDefault();
	drop2 = "ok";
	if(drop1 !=null && drop2 !=null && drop3!=null){
		if(drop1 !=null && drop2 !=null && drop3!=null){
		document.getElementById("next").style.display="block";
		}
	}
}
function Drop3(event) {
	const id = event.dataTransfer.getData("text");
	const elm = document.getElementById(id);
	event.currentTarget.appendChild(elm);
	event.preventDefault();
	drop3 = "ok";
	if(drop1 !=null && drop2 !=null && drop3!=null){
		document.getElementById("next").style.display="block";
	}
}

// ブラウザ標準のドロップ動作をキャンセル
function DragOver(event) {
	event.preventDefault();
}

