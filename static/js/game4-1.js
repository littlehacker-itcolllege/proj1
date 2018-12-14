//canvasの設定
var canvas = document.getElementById( 'canvas' );
canvas.width = 640;     //canvasの横幅（よこはば）
canvas.height = 416;    //canvasの縦幅（たてはば）


//コンテキストを取得
var ctx = canvas.getContext( '2d' );
var zy = 0;
var zx = 0;
enemy_move_now = 0;
no_wall_top=0;
no_wall_down=0;
no_wall_right=0;
no_wall_left=0;
enemy_dir = 0;
found = 0;

//heroのオブジェクトを作成
var hero = new Object();
hero.img = new Image();
hero.img.src =('../../static/game/character/bottom.gif');
hero.x = 32;
hero.y = 0;
hero.move = 0;

//enemyのオブジェクトを作成
var enemy = new Object();
enemy.img = new Image();
enemy.img.src =('../../static/game/character/enemytop.gif');
enemy.x = 18*32;
enemy.y = 1*32;
enemy.move = 0;
var enemylook = 3;

//マップチップのImageオブジェクトを作る
var mapchip = new Image();
mapchip.src = '../../static/game/wall.png';
var doorchip = new Image();
doorchip.src = '../../static/game/door1.png';
var pcchip = new Image();
pcchip.src = '../../static/game/pc.png';



//キーボードのオブジェクトを作成
var key = new Object();
key.up = false;
key.down = false;
key.right = false;
key.left = false;
key.push = '';

//マップの作成
var map = [
    [1, 0, 1, 1, 1, 1, 1, 1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,3 ,1],
    [1, 0, 0, 0, 1, 0, 0, 0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,1],
    [1, 1, 1, 0, 1, 0, 0, 0 ,0 ,0 ,0 ,1 ,1 ,1 ,0 ,0 ,0 ,0 ,0 ,1],
    [1, 1, 1, 0, 1, 0, 0, 0 ,0 ,0 ,0 ,1 ,1 ,1 ,0 ,0 ,0 ,0 ,0 ,1],
    [1, 0, 0, 0, 0, 0, 0, 0 ,0 ,0 ,0 ,1 ,1 ,1 ,0 ,0 ,0 ,0 ,0 ,1],
    [1, 0, 0, 0, 0, 0, 0, 0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,1],
    [1, 0, 1, 1, 1, 0, 0, 0 ,0 ,0 ,0 ,0 ,0 ,1 ,1 ,1 ,0 ,0 ,0 ,1],
    [1, 0, 1, 1, 1, 0, 0, 0 ,0 ,0 ,0 ,0 ,0 ,1 ,1 ,1 ,0 ,0 ,0 ,1],
    [1, 0, 1, 1, 1, 0, 0, 0 ,0 ,0 ,0 ,0 ,0 ,1 ,1 ,1 ,0 ,0 ,0 ,1],
    [1, 0, 0, 0, 0, 0, 1, 0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,1],
    [1, 0, 0, 0, 0, 0, 1, 0 ,0 ,0 ,0 ,0 ,1 ,0 ,0 ,0 ,0 ,0 ,0 ,1],
    [1, 0, 0, 0, 0, 0, 1, 0 ,0 ,0 ,0 ,0 ,1 ,0 ,0 ,0 ,0 ,0 ,0 ,1],
    [1, 2, 1, 1, 1, 1, 1, 1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1]
]

function main(){
    //enemyに見つかったらリロード
    if(found == 1){location.reload();}
    move();
    //塗りつぶす色を指定
    ctx.fillStyle = "rgb( 97, 97, 97 )";
    //塗りつぶす
    ctx.fillRect(0, 0, 640, 640);

    //enemyの視野を表示する
    for (var y=0; y<map.length; y++) {
        for (var x=0; x<map[y].length; x++) {
            if(enemy.img.src.split('/')[6]=='enemytop.gif'){ctx.fillStyle = "rgb( 225, 0, 0 )";ctx.fillRect(enemy.x,enemy.y,32,-enemylook*32)};
            if(enemy.img.src.split('/')[6]=='enemyright.gif'){ctx.fillStyle = "rgb( 225, 0, 0 )";ctx.fillRect(enemy.x+32,enemy.y,enemylook*32,32)};
            if(enemy.img.src.split('/')[6]=='enemybottom.gif'){ctx.fillStyle = "rgb( 225, 0, 0 )";ctx.fillRect(enemy.x,enemy.y+32,32,enemylook*32)};
            if(enemy.img.src.split('/')[6]=='enemyleft.gif'){ctx.fillStyle = "rgb( 225, 0, 0 )";ctx.fillRect(enemy.x,enemy.y,-enemylook*32,32)};
        }
    }
    //マップチップを表示する
    for (var y=0; y<map.length; y++) {
        for (var x=0; x<map[y].length; x++) {
            if ( map[y][x] === 1) ctx.drawImage( mapchip, 0, 0, 32, 32, 32*x, 32*y, 32, 32 );
            if ( map[y][x] === 2) ctx.drawImage( doorchip, 0, 0, 32, 32, 32*x, 32*y, 32, 32 );
            if ( map[y][x] === 3) ctx.drawImage( pcchip, 0, 0, 32, 32, 32*x, 32*y, 32, 32 );

        }
    }

    //enemyの行動壁に当たるまで
    if( enemy_move_now == 0  && Number.isInteger(enemy.y/32) && Number.isInteger(enemy.x/32)){
        var  enemy_dir=(Math.floor( Math.random() * 4 )+1);
        (map[enemy.y/32-1][enemy.x/32]==0)? no_wall_top=0:no_wall_top=1;//enemyの上
        (map[enemy.y/32][enemy.x/32-1]==0)? no_wall_left=0:no_wall_left=1;//enemyの左
        (map[enemy.y/32+1][enemy.x/32]==0)? no_wall_down=0:no_wall_down=1;//enemyの下
        (map[enemy.y/32][enemy.x/32+1]==0)? no_wall_right=0:no_wall_right=1;//enemyの右
        //enemy_dir=(Math.floor( Math.random() * 4 )+1);
        (enemy_dir==1 && no_wall_top==0)?   enemy_move_now=1:(enemy_dir==2 && no_wall_right==0)? enemy_move_now=2:
            (enemy_dir==3 && no_wall_down==0)?  enemy_move_now=3:(enemy_dir==4 && no_wall_left==0)?  enemy_move_now=4:enemy_move_now=0;
    }
    //画像を表示
    ctx.drawImage( enemy.img, enemy.x, enemy.y );
    ctx.drawImage( hero.img, hero.x, hero.y );


    if(hero.y/32==11 && hero.x/32 == 1&&hero.img.src.split('/')[6]=='bottom.gif'){
        $("#action2").prop("disabled", false);
    }
    if(hero.y/32==1 && hero.x/32 == 18&&hero.img.src.split('/')[6]=='top.gif'){
        $("#action").prop("disabled", false);
    }


    addEventListener("keydown", keydownfunc, false);
    addEventListener("keyup", keyupfunc, false);

    if ( hero.move === 0 ) {
        if ( key.left === true) {
            var x = hero.x/32;
            var y = hero.y/32;
            x--;
            if(hero.img.src.split('/')[6]!="left.gif"){hero.img.src = '../../static/game/character/left.gif';}
            if ( map[y][x] === 0 ) {
                hero.move = 32;
                key.push = 'left';
            }
        }
        if ( key.up === true) {
            var x = hero.x/32;
            var y = hero.y/32;
            if(hero.img.src.split('/')[6]!="top.gif"){hero.img.src = '../../static/game/character/top.gif';}
            if ( y > 0) {
                y--;
                if ( map[y][x] === 0 ) {
                    hero.move = 32;
                    key.push = 'up';
                }
            }
        }
        if ( key.right === true) {
            var x = hero.x/32;
            var y = hero.y/32;
            x++;
            if(hero.img.src.split('/')[6]!="right.gif"){hero.img.src = '../../static/game/character/right.gif';}
            if ( map[y][x] === 0 ) {
                hero.move = 32;
                key.push = 'right';
            }
        }
        if ( key.down === true) {
            var x = hero.x/32;
            var y = hero.y/32;
            y++;
            if(hero.img.src.split('/')[6]!="bottom.gif"){hero.img.src = '../../static/game/character/bottom.gif';}
            if ( map[y][x] === 0 ) {
                hero.move = 32;
                key.push = 'down';
            }
        }
    }
    console.log(hero.y/32,hero.x/32)
    requestAnimationFrame( main );
}
//ページと依存している全てのデータが読み込まれたら、メインループ開始
addEventListener('load', main(), false);
//キーボードが押されたときに呼び出される関数
function keydownfunc( event ) {
    var key_code = event.keyCode;
    if( key_code === 37 ) key.left = true;
    if( key_code === 38 ) key.up = true;
    if( key_code === 39 ) key.right = true;
    if( key_code === 40 ) key.down = true;
    event.preventDefault();
}
//キーボードが放されたときに呼び出される関数
function keyupfunc( event ) {
    var key_code = event.keyCode;
    if( key_code === 37 ) key.left = false;
    if( key_code === 38 ) key.up = false;
    if( key_code === 39 ) key.right = false;
    if( key_code === 40 ) key.down = false;
}



//hero.moveが0より大きい場は、4pxずつ移動を続ける
function move(){
    if (hero.move > 0&&enemy_move_now != 0) {
        if(enemy_move_now==1&&enemy.img.src.split('/')[6]!='enemytop.gif'){enemy.img.src =('../../static/game/character/enemytop.gif')}; 
        if(enemy_move_now==2&&enemy.img.src.split('/')[6]!='enemyright.gif'){enemy.img.src =('../../static/game/character/enemyright.gif')};
        if(enemy_move_now==3&&enemy.img.src.split('/')[6]!='enemybottom.gif'){enemy.img.src =('../../static/game/character/enemybottom.gif')};
        if(enemy_move_now==4&&enemy.img.src.split('/')[6]!='enemyleft.gif'){enemy.img.src =('../../static/game/character/enemyleft.gif')};
        if(hero.move == 32){map[enemy.y/32][enemy.x/32] = 0;map[hero.y/32][hero.x/32] = 0}
        if ( key.push === 'left' ) hero.x -= 4;;
        if ( key.push === 'up' ) hero.y -= 4;;
        if ( key.push === 'right' ) hero.x += 4;;
        if ( key.push === 'down' ) hero.y += 4;;

        if(enemy_move_now==1) enemy.y -= 4;;
        if(enemy_move_now==2) enemy.x += 4;;
        if(enemy_move_now==3) enemy.y += 4;;
        if(enemy_move_now==4) enemy.x -= 4;;
        hero.move -= 4;
        if(hero.move === 0){map[enemy.y/32][enemy.x/32] = 1;map[hero.y/32][hero.x/32] = 4;
            if(enemy_move_now==1){ if(map[enemy.y/32-1][enemy.x/32]!=0){enemy_move_now = 0;enemylook=0}else if(map[enemy.y/32-2][enemy.x/32]!=0){enemylook=1}else if(map[enemy.y/32-3][enemy.x/32]!=0){enemylook=2}else{enemylook=3}};
            if(enemy_move_now==2){if(map[enemy.y/32][enemy.x/32+1]!=0){enemy_move_now = 0;enemylook=0}else if(map[enemy.y/32][enemy.x/32+2]!=0){enemylook=1}else if(map[enemy.y/32][enemy.x/32+3]!=0){enemylook=2}else{enemylook=3}};
            if(enemy_move_now==3){if(map[enemy.y/32+1][enemy.x/32]!=0){enemy_move_now = 0;enemylook=0}else if(map[enemy.y/32+2][enemy.x/32]!=0){enemylook=1}else if(map[enemy.y/32+3][enemy.x/32]!=0){enemylook=2}else{enemylook=3}};
            if(enemy_move_now==4){if(map[enemy.y/32][enemy.x/32-1]!=0){enemy_move_now = 0;enemylook=0}else if(map[enemy.y/32][enemy.x/32-2]!=0){enemylook=1}else if(map[enemy.y/32][enemy.x/32-3]!=0){enemylook=2}else{enemylook=3}};


            if(enemy_move_now==2){
                if(map[enemy.y/32][enemy.x/32]==4){found=1}
                if(enemy.x/32+1 < 20 ){if(map[enemy.y/32][enemy.x/32+1]==4){found=1}}
                if(enemy.x/32+1 < 20 ){if(map[enemy.y/32][enemy.x/32+2]==4){found=1}}
                if(enemy.x/32+1 < 20 ){if(map[enemy.y/32][enemy.x/32+3]==4){found=1}}};

            if(enemy_move_now==4){
                if(map[enemy.y/32][enemy.x/32]==4){found=1}
                if(enemy.x/32-1 > 0 ){if(map[enemy.y/32][enemy.x/32-1]==4){found=1}}
                if(enemy.x/32-2 > 0 ){if(map[enemy.y/32][enemy.x/32-2]==4){found=1}}
                if(enemy.x/32-3 > 0 ){if(map[enemy.y/32][enemy.x/32-3]==4){found=1}}};


            if(enemy_move_now==1){
                if(map[enemy.y/32][enemy.x/32]==4){found=1}
                if(enemy.y/32-1 > 0 ){if(map[enemy.y/32-1][enemy.x/32]==4){found=1}}
                if(enemy.y/32-2 > 0 ){if(map[enemy.y/32-2][enemy.x/32]==4){found=1}}
                if(enemy.y/32-3 > 0 ){if(map[enemy.y/32-3][enemy.x/32]==4){found=1}}};

            if(enemy_move_now==3){
                if(map[enemy.y/32][enemy.x/32]==4){found=1}
                if(enemy.y/32+1 < map.length){if(map[enemy.y/32+1][enemy.x/32]==4){found=1}}
                if(enemy.y/32+2 < map.length){if(map[enemy.y/32+2][enemy.x/32]==4){found=1}}
                if(enemy.y/32+3 < map.length){if(map[enemy.y/32+3][enemy.x/32]==4){found=1}}};
        };
    }
}
   var $left = document.getElementById( "left" );
    var $right = document.getElementById( "right" );
    var $top = document.getElementById( "top" );
    var $bottom = document.getElementById( "bottom" );

    $top.onmousedown = function ( $event ) {
        if( $event.button == 0 ){$intervalID = setInterval(function(){key.up = true;},20);}}
    $top.onmouseup = function ( $event ) {
        if( $event.button == 0 ){key.up = false;clearInterval( $intervalID );}}

    $right.onmousedown = function ( $event ) {
        if( $event.button == 0 ){$intervalID = setInterval(function(){key.right = true;},20);}}
    $right.onmouseup = function ( $event ) {
        if( $event.button == 0 ){key.right = false;clearInterval( $intervalID );}}

    $bottom.onmousedown = function ( $event ) {
        if( $event.button == 0 ){$intervalID = setInterval(function(){key.down = true;},20);}}
    $bottom.onmouseup = function ( $event ) {
        if( $event.button == 0 ){key.down = false;clearInterval( $intervalID );}}

    $left.onmousedown = function ( $event ) {
        if( $event.button == 0 ){$intervalID = setInterval(function(){key.left = true;},20);}}
    $left.onmouseup = function ( $event ) {
        if( $event.button == 0 ){key.left = false;clearInterval( $intervalID );}}
var w1;
var w2;
function win_open(){
    if(!w1||w1.closed){
        w1 = window.open("http://localhost:8080/stage4-1/see4-1","","width=700,height=650");
        w2.close();
    }else{
        w1.close();
    }
}
function input(){
    if(!w2||w2.closed){
        w2 = window.open("http://localhost:8080/stage4-1/input4-1","","width=600,height=600");
        w1.close();
    }else{
        w2.close();
    }
}
