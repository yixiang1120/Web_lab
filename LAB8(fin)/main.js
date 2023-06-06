$(function(){
    $("[type='checkbox']").on("change", updateProgress);
    $("[type='checkbox']").on("change", updateMeter);

});

function updateProgress() {
    let hasChecked = 0;
    for(let x=0; x<$("[type='checkbox']").length; x++) {
        if($("[type='checkbox']")[x].checked) {
            hasChecked++;
            $("[type='checkbox']").eq(x).addClass("checked");
        }
        else{
            $("[type='checkbox']").eq(x).removeClass("checked");
        }
    }
    $("progress").attr("max", $("[type='checkbox']").length);
    $("progress").attr("value", hasChecked);
}

function updateMeter() {
    let hasChecked = $("[type='checkbox']:checked").length;
    
    $("meter").attr("max", $("[type='checkbox']").length);
    $("meter").attr("value", hasChecked);
}