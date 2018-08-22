var $countA = 0;
function countUpA() {
    document.getElementById( "sampleOutputA" ).innerHTML = ++$countA;
    // カウントが20になったら画像の入れ替え
        if ($countA % 2 == 0) {
            document.getElementById("img1").src = "../../static/game/sample1.gif";
        } else{
            document.getElementById("img1").src = "../../static/game/sample2.gif";
        }
}
