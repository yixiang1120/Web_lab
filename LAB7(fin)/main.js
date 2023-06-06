var ctx, thisImage;
$(function () {
    $("[type='date']").on("change", showDate);
    ctx = $("#myCanvas")[0].getContext("2d");
});
function showDate() {
    var thisDate = this.value;
    thisDate = thisDate.replace(/-/g, "");
    thisImage = new Image();
    thisImage.src = "flipClockNumbers.png";
    thisImage.onload = function () {
        for (var x = 0; x < thisDate.length; x++) {
            ctx.drawImage(thisImage, thisDate[x] * 80, 0, 90, 130, 60 * x, 0, 60, 100);
        }
    };
}
$("#color").on("change",function(){
    document.body.style.backgroundColor = $(this).val();
});