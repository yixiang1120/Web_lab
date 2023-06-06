let mapArray, ctx, currentImgMain;
let imgMountain, imgMain, imgEnemy;
var images = {};

var attack = 0;
var ch_attack = 0;
var change = 0;
var life = 3;
var score = 0;
var D = 0;
//mapArray - 決定地圖中每個格子的元素
//ctx - HTML5 Canvas用
//currentImgMainX, currentImgMainY - 決定主角所在座標
//imgMountain, imgMain, imgEnemy - 障礙物, 主角, 敵人的圖片物件
const gridLength = 30;

function loadImages(sources, callback){
    var loadedImages = 0;
    var numImages = 0;

    for(var src in sources){
        numImages++;
    }
    for(var src in sources){
        images[src] = new Image();
        images[src].onload = function(){
            if(++loadedImages>=numImages){
                callback(images);
            }
        };
        images[src].src = sources[src];
    }
}

//網頁載入完成後初始化動作
$(function(){
    mapArray = [ //0-可走,1-障礙,2-終點,3-敵人
    [0,1,1,7,1,0,3,1,1,1,0,0,0,3,1,6,1,-1,-1,-1],
    [0,0,0,6,0,0,0,0,0,0,0,0,0,0,3,6,1,-1,0,0],
    [0,1,0,10,1,1,6,1,1,0,0,0,1,1,1,6,1,-1,-1,-1],
    [1,0,0,0,0,0,1,1,0,0,0,3,0,1,1,3,1,1,1,1],
    [1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,3],
    [6,6,1,0,0,6,1,3,1,0,1,1,1,6,1,0,1,6,1,6],
    [1,3,1,1,0,0,0,0,1,0,0,1,0,0,0,0,0,1,1,6],
    [0,0,0,0,0,1,1,0,0,0,3,0,0,1,1,0,0,0,1,6],
    [3,0,0,0,3,0,0,0,0,0,0,0,1,0,0,0,1,0,1,6],
    [6,1,0,0,1,1,0,0,1,0,0,1,6,1,0,0,1,3,1,1],
    [1,0,0,3,0,1,0,0,1,0,0,0,0,0,0,3,1,0,1,0],
    [1,0,0,0,0,0,0,6,0,3,11,0,1,0,0,1,1,0,0,0],
    [1,1,0,0,1,0,0,1,1,0,0,0,0,1,0,3,1,6,1,1],
    [4,0,0,1,1,1,0,0,1,0,0,3,1,0,3,6,1,1,3,1],
    [0,1,0,0,0,0,1,0,1,1,1,0,0,3,3,0,6,3,6,1],
    [6,0,0,1,1,6,6,0,0,0,0,0,1,1,0,2,1,1,6,6],
    ];
    ctx = $("#myCanvas")[0].getContext("2d");
    imgMain = new Image();
    imgMain.src = "images/ch1.png";
    currentImgMain = {
    "x":0,
    "y":0
    };
    imgMain.onload = function(){
    ctx.drawImage(imgMain, 285,0,50,46,currentImgMain.x,currentImgMain.y,gridLength,gridLength);
    }    

    let sources = {
        Enemy:"images/Enemy.png",
        Sword2:"images/sword2.png",
        Treasure:"images/good.png",
        Clothes:"images/clothes.png",
        Hearts:"images/heart.png",
        Coin:"images/coin.png",
        Ghost:"images/ghost.png",
        second:"images/ch2.png",
        trees:"images/trees.png",
        add:"images/add.png",
        Sword3:"images/sword3.png",
        door:"images/door.png",
        door1:"images/door.png",
    };

    loadImages(sources, function(images){
        for(var x in mapArray){
            for(var y in mapArray[x]){
                if(mapArray[x][y] == 1){//數
                    ctx.drawImage(images.trees, 0,0,106,97, y*gridLength, x*gridLength, gridLength, gridLength);
                }
                else if(mapArray[x][y] == 3){//怪物
                    if(x%3 == 0)//毛毛蟲
                        ctx.drawImage(images.Ghost, 0, 2,33,34, y*gridLength, x*gridLength, gridLength, gridLength);
                    else if(x%3 == 1)//猴子
                        ctx.drawImage(images.Ghost, 0, 34,33,32, y*gridLength, x*gridLength, gridLength, gridLength);
                    else//小火龍
                        ctx.drawImage(images.Ghost, 0, 64,33,34, y*gridLength, x*gridLength, gridLength, gridLength);
                }
                else if(mapArray[x][y]==4){//武器
                    ctx.drawImage(images.Sword2, 0,0,29,30,y*gridLength,x*gridLength,gridLength,gridLength);
                }
                else if(mapArray[x][y]==2){//寶藏
                    ctx.drawImage(images.Treasure, 0,0,32,29,y*gridLength,x*gridLength,gridLength,gridLength);
                } 
                else if(mapArray[x][y]==5){//衣服
                    ctx.drawImage(images.Clothes, 0,0,40,39,y*gridLength,x*gridLength,gridLength,gridLength);
                } 
                else if(mapArray[x][y]==6){//金幣
                    ctx.drawImage(images.Coin, 0,0,30,31,y*gridLength,x*gridLength,gridLength,gridLength);
                }      
                else if(mapArray[x][y]==7){//說明角色
                    ctx.drawImage(images.second, 0,0,43,49,y*gridLength,x*gridLength,gridLength,gridLength);
                }             
                else if(mapArray[x][y]==9){//武器2
                    ctx.drawImage(images.Sword3, 0,0,30,29,y*gridLength,x*gridLength,gridLength,gridLength);
                }    
                else if(mapArray[x][y]==10){//傳送門
                    ctx.drawImage(images.door, 0,0,32,31,y*gridLength,x*gridLength,gridLength,gridLength);
                }    
                else if(mapArray[x][y]==11){//傳送門
                    ctx.drawImage(images.door, 0,0,32,31,y*gridLength,x*gridLength,gridLength,gridLength);
                }    
            }
        }   
        ctx.drawImage(images.Hearts, 0,2,33,34, gridLength*17, 0, gridLength, gridLength);
        ctx.drawImage(images.Hearts, 0,2,33,34, gridLength*18, 0, gridLength, gridLength);
        ctx.drawImage(images.Hearts, 0,2,33,34, gridLength*19, 0, gridLength, gridLength);
        ctx.drawImage(images.Coin, 0,0,30,31, 17*gridLength,1*gridLength,gridLength,gridLength);

        const fillText = ' :' + score;
        ctx.font = "20px 'PixelFont'";
        ctx.fillText(fillText, 540, 50);
    });

    //處理使用者按下按鍵
    $(document).on("keydown",function(event){
        let targetImg, targetBlock,cutImagePositionY ;
        //cutImagePositionX - 決定主角臉朝向哪個方向
        targetImg = { //主角的目標座標
        "x":-1,
        "y":-1
        };
        targetBlock = { //主角的目標(對應2維陣列)
        "x":-1,
        "y":-1
        }
        event.preventDefault();
        //避免鍵盤預設行為發生，如捲動/放大/換頁...
        //判斷使用者按下什麼並推算目標座標
        switch(event.code){
            case "ArrowLeft":
                targetImg.x = currentImgMain.x - gridLength;
                targetImg.y = currentImgMain.y;
                cutImagePositionY= 50;//臉朝左
                break;
            case "ArrowUp":
                targetImg.x = currentImgMain.x;
                targetImg.y = currentImgMain.y- gridLength;
                cutImagePositionY= 150;//臉朝上
                break;
            case "ArrowRight":
                targetImg.x = currentImgMain.x + gridLength;
                targetImg.y = currentImgMain.y;
                cutImagePositionY = 100;//臉朝右
                break;
            case "ArrowDown":
                targetImg.x = currentImgMain.x;
                targetImg.y= currentImgMain.y+ gridLength;
                cutImagePositionY=0;//臉朝下
                break;
            case "KeyA":
                ch_attack++;
                targetBlock.x=0;
                targetBlock.y=0
                if(ch_attack%3 == 1){
                    ctx.clearRect(gridLength*18, gridLength*2, gridLength*2, gridLength);
                    if(attack==1)
                        ctx.drawImage(images.Sword2, 0,0,29,30,gridLength*19,2*gridLength,30,30);
                    else if(attack == 2){
                        ctx.drawImage(images.Sword2, 0,0,29,30,gridLength*19,2*gridLength,30,30);
                        ctx.drawImage(images.Sword3, 0,0,30,29,gridLength*18,2*gridLength,20,20);
                    }
                }
                else if(ch_attack%3 == 2){
                    ctx.clearRect(gridLength*18, gridLength*2, gridLength*2, gridLength);
                    if(attack==1)
                        ctx.drawImage(images.Sword2, 0,0,29,30,gridLength*19,2*gridLength,20,20);
                    else if(attack == 2){
                        ctx.drawImage(images.Sword2, 0,0,29,30,gridLength*19,2*gridLength,20,20);
                        ctx.drawImage(images.Sword3, 0,0,30,29,gridLength*18,2*gridLength,30,30);
                    }
                }
                else{
                    ctx.clearRect(gridLength*18, gridLength*2, gridLength*2, gridLength);
                    if(attack==1)
                        ctx.drawImage(images.Sword2, 0,0,29,30,gridLength*19,2*gridLength,20,20);
                    else if(attack == 2){
                        ctx.drawImage(images.Sword2, 0,0,29,30,gridLength*19,2*gridLength,20,20);
                        ctx.drawImage(images.Sword3, 0,0,30,29,gridLength*18,2*gridLength,20,20);
                    }
                }

                return;
            default://其他按鍵不處理
                return;
        }
        //確認目標位置不會超過地圖
        if(targetImg.x<=610 && targetImg.x>=0 && targetImg.y<=450 && targetImg.y>=0){
            targetBlock.x = targetImg.y / gridLength;
            targetBlock.y = targetImg.x / gridLength;
            }else{
            targetBlock.x = -1;
            targetBlock.y = -1;
        }
        
        //清空主角原本所在的位置
        ctx.clearRect(currentImgMain.x, currentImgMain.y, gridLength, gridLength);
        if(targetBlock.x!=-1 && targetBlock.y!=-1){
            switch(mapArray[targetBlock.x][targetBlock.y]){
                case 0: // 一般道路(可移動)
                    $("#talkBox").text("");
                    currentImgMain.x = targetImg.x;
                    currentImgMain.y = targetImg.y;
                    break;
                case 1: // 有障礙物(不可移動)
                    $("#talkBox").text("This is a tree");
                    break;
                case 2: // 寶箱(可移動)
                    $("#talkBox").text("You have reached the end~");
                    currentImgMain.x = targetImg.x;
                    currentImgMain.y = targetImg.y;
                    ctx.drawImage(images.add, 0,0,27,30, gridLength*14, gridLength*15, gridLength, gridLength);
                    ctx.drawImage(images.Sword3, 0,0,30,29,gridLength*15, gridLength*14, gridLength, gridLength);
                    mapArray[targetBlock.x][targetBlock.y] = 0;
                    mapArray[14][15] = 9;
                    mapArray[15][14] = 8;
                    //alert("you win!");
                    break;
                case 3: // 敵人(不可移動)
                    if(ch_attack%3 == 1){
                        if(targetBlock.x%3 == 0 || targetBlock.x%3 == 2){
                            $("#talkBox").text("You have defeated the enemy!");
                            currentImgMain.x = targetImg.x;
                            currentImgMain.y = targetImg.y;
                            mapArray[targetBlock.x][targetBlock.y] = 0;
                            score+=30;
                        }
                        else{
                            $("#talkBox").text("you are attacked!");
                            if(life ==3)
                                ctx.clearRect(gridLength*17, 0, gridLength, gridLength);
                            else if(life == 2)
                                ctx.clearRect(gridLength*18, 0, gridLength, gridLength);
                            else if(life == 1){
                                ctx.clearRect(gridLength*19, 0, gridLength, gridLength);
                            }
                            score-=20;
                            life--;
                        }
                    }
                    else if(ch_attack%3 == 2){   
                        if(targetBlock.x%3 == 1){
                            $("#talkBox").text("You have defeated the enemy!");
                            currentImgMain.x = targetImg.x;
                            currentImgMain.y = targetImg.y;
                            mapArray[targetBlock.x][targetBlock.y] = 0;
                            score+=30;
                        }
                        else{
                            $("#talkBox").text("you are attacked!");
                            if(life ==3)
                                ctx.clearRect(gridLength*17, 0, gridLength, gridLength);
                            else if(life == 2)
                                ctx.clearRect(gridLength*18, 0, gridLength, gridLength);
                            else if(life == 1){
                                ctx.clearRect(gridLength*19, 0, gridLength, gridLength);
                            }
                            score-=20;
                            life--;
                        }
                    }
                    else{
                        $("#talkBox").text("you are attacked!");
                        if(life ==3)
                            ctx.clearRect(gridLength*17, 0, gridLength, gridLength);
                        else if(life == 2)
                            ctx.clearRect(gridLength*18, 0, gridLength, gridLength);
                        else if(life == 1){
                            ctx.clearRect(gridLength*19, 0, gridLength, gridLength);
                        }
                        score-=30;
                        life--;
                    }
                    break;
                case 4: case 9: // 武器(可移動)
                    $("#talkBox").text("get sword!");
                    currentImgMain.x = targetImg.x;
                    currentImgMain.y = targetImg.y;
                    mapArray[targetBlock.x][targetBlock.y] = 0;
                    if(targetImg.x == 0){
                        attack = 1;
                        ctx.drawImage(images.Sword2, 0,0,29,30,gridLength*19,2*gridLength,21,21);
                    }
                    else{
                        attack = 2;
                        ctx.drawImage(images.Sword3, 0,0,30,29,gridLength*18,2*gridLength,20,20);
                    }
                    break;
                case 5: // 變裝
                    $("#talkBox").text("Get clothes!");
                    currentImgMain.x = targetImg.x;
                    currentImgMain.y = targetImg.y;
                    mapArray[targetBlock.x][targetBlock.y] = 0;
                    change = 1;
                    break;
                case 6: // 分數（錢錢）
                    $("#talkBox").text("Get Coin!!");
                    currentImgMain.x = targetImg.x;
                    currentImgMain.y = targetImg.y;
                    mapArray[targetBlock.x][targetBlock.y] = 0;
                    score+=50;
                    break;
                case 7: // 起始腳色
                    $("#talkBox").text("Welcome to SHADOW KINGDOM!!\nBe careful with monsters. You can use weapons to attack!\n"+
                    "You can collect coins, change clothes, change scenes and reach the end.");
                    break;
                case 8: // 藥水（錢錢）
                    $("#talkBox").text("Get Potion!!");
                    currentImgMain.x = targetImg.x;
                    currentImgMain.y = targetImg.y;     
                    mapArray[targetBlock.x][targetBlock.y] = 0;
                    if(life == 2){
                        ctx.drawImage(images.Hearts, 0,2,33,34, gridLength*17, 0, gridLength, gridLength);
                        life++;
                    }
                    else if(life == 1){
                        ctx.drawImage(images.Hearts, 0,2,33,34, gridLength*18, 0, gridLength, gridLength);
                        life++;
                    }
                    break;
                case 10: // 傳送門
                    $("#talkBox").text("this is the door!!");
                    currentImgMain.x = gridLength*10;
                    currentImgMain.y = gridLength*10;
                    if(change == 0)
                        ctx.drawImage(imgMain, 285,cutImagePositionY,50,46,gridLength*10,gridLength*10,gridLength,gridLength);
                    else
                        ctx.drawImage(imgMain, 430,cutImagePositionY,50,46,currentImgMain.x,currentImgMain.y,gridLength,gridLength);
                    break;
                case 11: // 傳送門
                    $("#talkBox").text("this is the door!!");
                    currentImgMain.x = gridLength*3;
                    currentImgMain.y = gridLength*3;
                    if(change == 0)
                        ctx.drawImage(imgMain, 285,cutImagePositionY,50,46,gridLength*3,gridLength*3,gridLength,gridLength);
                    else
                        ctx.drawImage(imgMain, 430,cutImagePositionY,50,46,currentImgMain.x,currentImgMain.y,gridLength,gridLength);     
                    break
                default:    
                    return;
                }
                
            }
            else{
                $("#talkBox").text("this is the border");
            }
    
            ctx.clearRect(540, 30, 570, 30);
            fillText = ': ' + score;
            ctx.fillText(fillText, 540, 50);

            //重新繪製主角
            if(change == 0)
                ctx.drawImage(imgMain, 285,cutImagePositionY,50,46,currentImgMain.x,currentImgMain.y,gridLength,gridLength);
            else
                ctx.drawImage(imgMain, 430,cutImagePositionY,50,46,currentImgMain.x,currentImgMain.y,gridLength,gridLength);

            if(life == 0)
                alert("Game over!");
    });
});