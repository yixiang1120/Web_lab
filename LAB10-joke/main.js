$(function() {
    $("#go").on("click", loadServerData);
});

function loadServerData(){
    var keyword = $("#keywordInput").val();
    $.getJSON("https://api.chucknorris.io/jokes/search?query=" + keyword)
        .done(function(data){
            console.log("Success");
            displayJokes(data.result);
            //$("#showData").text(data.value);
        })
        .fail(function(){
            alert("Failed to load data from server");
            console.log("Failed");
        })
        .always(function(){
            console.log("Always");
        });
}

function displayJokes(jokes) {
    var jokeList = $("#showData");
    jokeList.empty();

    if (jokes && jokes.length > 0) {
        jokes.forEach(function(joke){
            jokeList.append("<li>" + joke.value + "</li>");
        });
    } else {
        jokeList.append("<li>no jokes found, please try again</li>");
    }
}