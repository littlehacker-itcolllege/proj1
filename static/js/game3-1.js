function onClick1(){
	document.getElementById("item1").style.display="block";
	document.getElementById("button1").style.left="25%";
	document.getElementById("left").style.display="block";
	document.getElementById("right").style.display="none";
	document.getElementById("left").style.top="10%";
}
function onClick2(){
	document.getElementById("item2").style.display="block";
	document.getElementById("button2").style.left="25%";
	document.getElementById("left").style.display="block";
	document.getElementById("right").style.display="none";
	document.getElementById("left").style.top="30%";
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
