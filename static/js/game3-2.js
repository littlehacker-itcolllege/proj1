function onClick1(){
	document.getElementById("item1").style.display="block";
	document.getElementById("button1").style.left="25%";
}
function onClick2(){
	document.getElementById("item2").style.display="block";
	document.getElementById("button2").style.left="25%";
}
function mine(a){
	if(a==1){
		document.getElementById("mine1").style.left="65%";
	}
	if(a==2){
		document.getElementById("mine2").style.left="65%";
	}
	if(a==3){
		document.getElementById("mine3").style.left="65%";
	}
}
function nat(b){
	if(b==1){
		document.getElementById("button3").style.left="65%";
	}
	if(b==2){
		document.getElementById("button4").style.left="25%";
	}
	if(b==3){
		document.getElementById("button5").style.left="25%";
	}
}
