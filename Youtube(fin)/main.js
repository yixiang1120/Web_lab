let player;
let currentPlay = 0;
let play = 0;

//YouTube API Ready
function onYouTubeIframeAPIReady(){
    player = new YT.Player("player",{
        height:"370",
        width:"620",
        videoId:playList[currentPlay],
        playerVars:{
            autoplay:0,
            controls:0,
            start:playTime[currentPlay][0],
            end:playTime[currentPlay][1],
            iv_load_policy:3
        },
        events:{
            onReady:onPlayerReady,
            onStateChange:onPlayerStateChange
        }
    });
}

//YouTube Player Ready
function onPlayerReady(event){
    $("#playButton").on("click", function(){
        if(play != 0){
            $("h2").text("您已播放本次歌曲，請回答歌詞");
        }
        else
        {
            if(currentPlay == 0){
                $("h2").text(player.getVideoData().title);
                player.playVideo();
                play = 1;   
            }
            else{
                player.loadVideoById({
                    videoId:playList[currentPlay],
                    startSeconds:playTime[currentPlay][0],
                    endSeconds:playTime[currentPlay][1],
                    suggestedQuality:"large"
                });
                $("h2").text(player.getVideoData().title);
                player.playVideo();
                play = 1;   
            }
        }
    });
}

$("#Button").on("click", function(){
    var a = document.getElementById("text").value;
    switch(currentPlay){
        /*
        "myUhffeOIOY",//那些你很冒險的夢
        "6LuDI3YP6R0",//人質
        "KOk2guG18dg",//你聽聽就好
        ///以下為版權音樂
        "DMVmj352yVw",//讓我為你唱情歌
        "VOozygJe-VI",//我愛你
        "6bCMcITI60Q",//幸福了然後ㄋ
        "uSzVM0aKxTw",//雨愛
        "VB_5o8yLaKA",//飛鳥
        "YQxfPnmmJ0M",//想見你
        "kGn4t9IeXgk",//你好不好
        */
        case 0:
            if(a == "摺紙飛機碰到雨天終究會墜落"){
                $("h2").text("恭喜答對！可繼續下一題，贏得高額獎金！");
                document.querySelector('#Button0').style = "background-image: linear-gradient(135deg, #f34079 40%, #fc894d)";
                currentPlay++;
            }
            else
                $("h2").text("QQ你答錯了，要再嘗試一次嗎？");
            break;
        case 1:
            if(a == "我不掙扎反正我也沒差"){
                $("h2").text("恭喜答對！可繼續下一題，贏得高額獎金！");
                document.querySelector('#Button1').style = "background-image: linear-gradient(135deg, #f34079 40%, #fc894d)";
                currentPlay++;
            }
            else
                $("h2").text("QQ你答錯了，要再嘗試一次嗎？");
            break;
        case 2:
            if(a == "就算我們好像真的愛了依然還是不符資格"){
                $("h2").text("恭喜答對！可繼續下一題，贏得高額獎金！");
                document.querySelector('#Button2').style = "background-image: linear-gradient(135deg, #f34079 40%, #fc894d)";
                currentPlay++;
            }
            else
                $("h2").text("QQ你答錯了，要再嘗試一次嗎？");
            break;
        case 3:
            if(a == "最真實的童話就差妳給我抱一下"){
                $("h2").text("恭喜答對！可繼續下一題，贏得高額獎金！");
                document.querySelector('#Button3').style = "background-image: linear-gradient(135deg, #f34079 40%, #fc894d)";
                currentPlay++;
            }
            else
                $("h2").text("QQ你答錯了，要再嘗試一次嗎？");
            break;
        case 4:
            if(a == "電影裡的配樂好像你的雙眼"){
                $("h2").text("恭喜答對！可繼續下一題，贏得高額獎金！");
                document.querySelector('#Button4').style = "background-image: linear-gradient(135deg, #f34079 40%, #fc894d)";
                currentPlay++;
            }
            else
                $("h2").text("QQ你答錯了，要再嘗試一次嗎？");
            break;
        case 5:
            if(a == "幸福了然後呢愛情用什麼再確認"){
                $("h2").text("恭喜答對！可繼續下一題，贏得高額獎金！");
                document.querySelector('#Button5').style = "background-image: linear-gradient(135deg, #f34079 40%, #fc894d)";
                currentPlay++;
            }
            else
                $("h2").text("QQ你答錯了，要再嘗試一次嗎？");
            break;
        case 6:
            if(a == "我相信我將會看到彩虹的美麗"){
                $("h2").text("恭喜答對！可繼續下一題，贏得高額獎金！");
                document.querySelector('#Button6').style = "background-image: linear-gradient(135deg, #f34079 40%, #fc894d)";
                currentPlay++;
            }
            else
                $("h2").text("QQ你答錯了，要再嘗試一次嗎？");
            break;   
        case 7:
            if(a == "北緯線的思念被季風吹遠"){
                $("h2").text("恭喜答對！可繼續下一題，贏得高額獎金！");
                document.querySelector('#Button7').style = "background-image: linear-gradient(135deg, #f34079 40%, #fc894d)";
                currentPlay++;
            }
            else
                $("h2").text("QQ你答錯了，要再嘗試一次嗎？");
            break;   
        case 8:
            if(a == "用盡了邏輯心機推理愛情最難解的謎"){
                $("h2").text("恭喜答對！可繼續下一題，贏得高額獎金！");
                document.querySelector('#Button8').style = "background-image: linear-gradient(135deg, #f34079 40%, #fc894d)";
                currentPlay++;
            }
            else
                $("h2").text("QQ你答錯了，要再嘗試一次嗎？");
            break;  
        case 9:
            if(a == "繼續讓我為你想為你瘋陪你老"){
                play = 0;

                $("h2").text("恭喜答對！可繼續下一題，贏得高額獎金！");
                document.querySelector('#Button9').style = "background-image: linear-gradient(135deg, #f34079 40%, #fc894d)";
                alert("WIN 300.0000!!!!!!")
            }
            else
                $("h2").text("QQ你答錯了，要再嘗試一次嗎？");
            break;       
        default:
            return;
    }
    play = 0;
});


//YouTube Stage Change
function onPlayerStateChange(event){
    if(Math.floor(player.getCurrentTime())==playTime[currentPlay][1]){
        player.stopVideo();
        $("h2").text("XXXXX");
        switch(currentPlay){
            case 0:
                $("h2").text("☆☆☆☆☆☆☆☆☆☆☆☆☆");
                break;
            case 1:
                $("h2").text("☆☆☆☆☆☆☆☆☆☆");
                break;
            case 2:
                $("h2").text("☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆");
                break;
            case 3:
                $("h2").text("☆☆☆☆☆☆☆☆☆☆☆☆☆☆");
                break;
            case 4:
                $("h2").text("☆☆☆☆☆☆☆☆☆☆☆☆");
                break;
            case 5:
                $("h2").text("☆☆☆☆☆☆☆☆☆☆☆☆☆☆");
                break;
            case 6:
                $("h2").text("☆☆☆☆☆☆☆☆☆☆☆☆☆");
                break;   
            case 7:
                $("h2").text("☆☆☆☆☆☆☆☆☆☆☆");
                break;   
            case 8:
                $("h2").text("☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆");
                break;  
            case 9:
                $("h2").text("☆☆☆☆☆☆☆☆☆☆☆☆☆");
                break;       
            default:
                return;
        }
    }
    
}

