var videos = [
    "LAB6/video.mp4",
    "LAB6/sample-mp4-file.mp4"
];
var currentVideoIndex = 0;

$(function(){
    $("#myVideo").attr("src", "sample-mp4-file.mp4");
    $("#playBtn").on("click", function(){
        $("#volumeDisplay").text($("#myVideo")[0].volume.toFixed(2));
        $("#progressBar")[0].max = $("#myVideo")[0].duration;
        if($("#myVideo")[0].paused){
            $("#myVideo")[0].play();
            $("#playBtn").text("停止");
        }else{
            $("#myVideo")[0].pause();
            $("#playBtn").text("播放");
        }
    });
    $("#fullBtn").on("click", function(){
        $("#myVideo")[0].webkitEnterFullscreen();
    });
    $("#lowerVloumeBtn").on("click", downVolume);
    $("#higherVloumeBtn").on("click", upVolume);
    $("#myVideo").on("timeupdate", updateProgress);
    $("#progressBar").on("change", changeProgress);

    $("#rewindBtn").on("click", rewind);
    $("#fastForwardBtn").on("click", fastForward);
    $("#nextVideoBtn").on("click", playNextVideo);

});

function playNextVideo() {
    currentVideoIndex++; 
    if (currentVideoIndex >= videos.length) {
        currentVideoIndex = 0; 
    }
    console.log(currentVideoIndex);
    if (currentVideoIndex == 0) {
        $("#myVideo").attr("src", "sample-mp4-file.mp4");
    }
    else if (currentVideoIndex == 1) {
        $("#myVideo").attr("src", "video2.mov");
    }
}

function rewind() {
    var myVideo = $("#myVideo")[0];
    myVideo.playbackRate = 0.5; // 慢轉速度為原本的一半
}

function fastForward() {
    var myVideo = $("#myVideo")[0];
    myVideo.playbackRate = 2.0; // 快轉速度為原本的兩倍
}


function downVolume(){
    var myVideo = $("#myVideo")[0];
    if(myVideo.volume == 0){
    }
    else if(myVideo.volume < 0.1){
        myVideo.volume = 0;
    }
    else{
        myVideo.volume -= 0.1;
    }
    volumeDisplay.innerHTML = myVideo.volume.toFixed(2);
}

function upVolume(){
    var myVideo = $("#myVideo")[0];
    if(myVideo.volume == 1){
    }
    else if(myVideo.volume > 0.9){
        myVideo.volume = 1;
    }else{
        myVideo.volume += 0.1;
    }
    volumeDisplay.innerHTML = myVideo.volume.toFixed(2);
}

function updateProgress(){
    $("#timeDisplay").text(Math.floor($("#myVideo")[0].currentTime));
    $("#timeDisplay").append(`/${Math.floor($("#myVideo")[0].duration)}秒`);
    $("#progressBar")[0].value = $("#myVideo")[0].currentTime;
}

function changeProgress(){
    $("#myVideo")[0].currentTime = $("#progressBar")[0].value;
}
