var item = 0;
function onClick1(){
	document.getElementById("item1").style.display="block";
	document.getElementById("button1").style.left="25%";
	document.getElementById("button1").disabled="disabled";
	document.getElementById("left").style.display="block";
	document.getElementById("right").style.display="none";
	document.getElementById("left").style.top="10%";
	item+=1;
	if(item==2){
		document.getElementById("next").style.display="block"
	}
}
function onClick2(){
	document.getElementById("item2").style.display="block";
	document.getElementById("button2").style.left="25%";
	document.getElementById("button2").disabled="disabled";
	document.getElementById("left").style.display="block";
	document.getElementById("right").style.display="none";
	document.getElementById("left").style.top="30%";
	item+=1;
	if(item==2){
		document.getElementById("next").style.display="block"
	}
}
function mine(a){
	if(a==1){
		document.getElementById("mine1").style.left="65%";
		document.getElementById("right").style.display="block";
		document.getElementById("left").style.display="none";
		document.getElementById("right").style.top="10%";
		setTimeout("trap()",10);
	}
	if(a==2){
		document.getElementById("mine2").style.left="65%";
		document.getElementById("right").style.display="block";
		document.getElementById("left").style.display="none";
		document.getElementById("right").style.top="50%";
		setTimeout("trap()",10);
	}
	if(a==3){
		document.getElementById("mine3").style.left="65%";
		document.getElementById("right").style.display="block";
		document.getElementById("left").style.display="none";
		document.getElementById("right").style.top="70%";
		setTimeout("trap()",10);
	}
}
function trap(){
	alert("しまった！ワナだった！")
}
url="http://localhost:8080/stage3-1/gameover3-1"
function gameover(){
	setTimeout(jump(),2000);
}
function jump(){
	location.href=url;
}
function nul(){
	alert("なにもない...")
}
function nat(b){
	if(b==1){
		document.getElementById("button3").style.left="65%";
		document.getElementById("right").style.display="block";
		document.getElementById("left").style.display="none";
		document.getElementById("right").style.top="30%";
		setTimeout("nul()",10);
	}
	if(b==2){
		document.getElementById("button4").style.left="25%";
		document.getElementById("left").style.display="block";
		document.getElementById("right").style.display="none";
		document.getElementById("left").style.top="50%";
		setTimeout("nul()",10);
		}
	if(b==3){
		document.getElementById("button5").style.left="25%";
		document.getElementById("left").style.display="block";
		document.getElementById("right").style.display="none";
		document.getElementById("left").style.top="70%";
		setTimeout("nul()",10);
	}
}
