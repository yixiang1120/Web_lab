setTable();  

function setTable(){
    $("#courseTable").empty();
    $("#courseTable").append("<tr><th>場次</th><th>時間</th><th>主題</th></tr>");
    var topicCount = topic.length;
    //一秒有1000毫秒
    //每分鐘60秒、每小時60min、每天24h
    var millisecsPerDay = 24*60*60*1000;
    var x=0;
    for(x;x<topicCount;x++){
        if (topic[x] == "尚未開學" || topic[x] == "國定假日") {
            if(x%2!=0){
                $("#courseTable").append("<tr>"
                +`<td style="color:rgb(230, 106, 106); background-color: rgb(228, 232, 245);">${x+1}</td>`
                +`<td style="color:rgb(230, 106, 106); background-color: rgb(228, 232, 245);">${(new Date(startDate.getTime()+7*x*millisecsPerDay)).toLocaleDateString().slice(5)}</td>`
                +`<td style="color:rgb(230, 106, 106); background-color: rgb(228, 232, 245);">${topic[x]}</td>`
                +"</tr>");
            }
            else{
                $("#courseTable").append("<tr>"
                +`<td style="color:rgb(200, 106, 106)">${x+1}</td>`
                +`<td style="color:rgb(200, 106, 106)">${(new Date(startDate.getTime()+7*x*millisecsPerDay)).toLocaleDateString().slice(5)}</td>`
                +`<td style="color:rgb(200, 106, 106)">${topic[x]}</td>`
                +"</tr>");
            }   
        }
        else{
            if(x%2!=0){
                $("#courseTable").append("<tr>"
                +`<td style="color:gray; background-color: rgb(228, 232, 245);">${x+1}</td>`
                +`<td style="color:gray; background-color: rgb(228, 232, 245);">${(new Date(startDate.getTime()+7*x*millisecsPerDay)).toLocaleDateString().slice(5)}</td>`
                +`<td style="color:gray; background-color: rgb(228, 232, 245);">${topic[x]}</td>`
                +"</tr>");
            }
            else{
                $("#courseTable").append("<tr>"
                +`<td style="color:gray">${x+1}</td>`
                +`<td style="color:gray">${(new Date(startDate.getTime()+7*x*millisecsPerDay)).toLocaleDateString().slice(5)}</td>`
                +`<td style="color:gray">${topic[x]}</td>`
                +"</tr>");
            }   
        }
    }
}




$(function(){
    $("#Date").on("change",function(){
        var NewDate = document.getElementById("Date").value.split('-');
        setMonthAndDay(NewDate[1],NewDate[2]);
        setTable();  
    });

    $("button").on("click",function(){
        var checked = 0;   
        if($(".add").val()){
            if($(".num").val() && $(".num").val()<=topic.length+1){
                topic.splice($(".num").val()-1, 0, $(".add").val());
                checked = 1;  
            } 
            else{
                checked=0;
                alert("請輸入正確場次"); 
            }
        }
        else if($(".delete").val()){
            if($(".delete").val()<=topic.length){    
                topic.splice($(".delete").val()-1,1);
                checked = 1;  
            }
            else{
                checked=0;
                alert("請輸入正確場次");
            }
        }
        else
            alert("請輸入以上資訊");
        if(checked == 1) 
            setTable();  
    });
});
