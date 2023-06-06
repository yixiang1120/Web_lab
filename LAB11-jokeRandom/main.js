$(function() {
    $("button").on("click", loadServerData);
});

function loadServerData(){

    $.getJSON("https://api.chucknorris.io/jokes/random")
        .done(function(data){
            console.log("Success");
            $("#showData").text(data.value);
        })
        .fail(function(){
            console.log("Failed");
        })
        .always(function(){
            console.log("Always");
        });
}