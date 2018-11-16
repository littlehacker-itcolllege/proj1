var item=0;
function load(){
	for (var i=1;i!=6;i++){
		document.getElementById("button"+i).disabled="disabled"
		if(i<4){
			document.getElementById("mine"+i).disabled="disabled"
		}
	}
}
function start(){
  document.getElementById("back").style.opacity="1";
  document.getElementById("start").style.display="none";
	for (var i=1;i!=6;i++){
    document.getElementById("button"+i).disabled=""
    if(i<4){
      document.getElementById("mine"+i).disabled=""
    }
  }
}

function onClick1(){
	document.getElementById("item1").style.display="block";
	document.getElementById("button2").style.left="65%";
	document.getElementById("right").style.display="block";
	document.getElementById("left").style.display="none";
	document.getElementById("right").style.top="30%";
	document.getElementById("button2").disabled="disabled"
	item+=1;
	if(item==2){
		document.getElementById("clear").style.display="block";
		document.getElementById("back").style.opacity="0.5";
	}

}
function onClick2(){
	document.getElementById("item2").style.display="block";
	document.getElementById("button5").style.left="65%";
	document.getElementById("right").style.display="block";
	document.getElementById("left").style.display="none";
	document.getElementById("right").style.top="70%";
	document.getElementById("button5").disabled="disabled"
	item+=1;
	if(item==2){
		document.getElementById("clear").style.display="block";
		document.getElementById("back").style.opacity="0.5";
	}
}
function mine(a){
	if(a==1){
		document.getElementById("mine1").style.left="25%";
		document.getElementById("left").style.display="block";
		document.getElementById("right").style.display="none";
		document.getElementById("left").style.top="10%";
		setTimeout("trap()",10);
			}
	if(a==2){
		document.getElementById("mine2").style.left="65%";
		document.getElementById("right").style.display="block";
		document.getElementById("left").style.display="none";
		document.getElementById("right").style.top="10%";
		setTimeout("trap()",10);
	}
	if(a==3){
		document.getElementById("mine3").style.left="65%";
		document.getElementById("right").style.display="block";
		document.getElementById("left").style.display="none";
		document.getElementById("right").style.top="50%";
		setTimeout("trap()",10);
	}
}
function trap(){
	alert("しまった！ワナだった！")
}
function nul(){
	alert("なにもない...")
}
url="http://localhost:8080/stage3-2/gameover3-2"
function gameover(){
  setTimeout(jump(),2000);
}
function jump(){
  location.href=url;
}
function nat(b){
	if(b==1){
		document.getElementById("button1").style.left="25%";
		document.getElementById("left").style.display="block";
		document.getElementById("right").style.display="none";
		document.getElementById("left").style.top="30%";
		setTimeout("nul()",10);
	}
	if(b==2){
		document.getElementById("button3").style.left="25%";
		document.getElementById("left").style.display="block";
		document.getElementById("right").style.display="none";
		document.getElementById("left").style.top="50%";
		setTimeout("nul()",10);
		}
	if(b==3){
		document.getElementById("button4").style.left="25%";
		document.getElementById("left").style.display="block";
		document.getElementById("right").style.display="none";
		document.getElementById("left").style.top="70%";
		setTimeout("nul()",10);
	}
}
