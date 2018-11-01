function check(){
	if (document.getElementById("jumon").value=="pass"){
		document.getElementById("button").style.display="block";
		document.getElementById("enemy-down").style.display="block";
		document.getElementById("enemy").style.display="none";
	}else{
		alert("呪文が違うよ...")	}
}
