
let thisButton = document.getElementsByTagName("button")[0];
let showData = document.getElementById("showData");

thisButton.addEventListener("click", loadServerData);

$(function() {
    $("button").on("click", loadServerData);
});

function loadServerData(){
    var currentDate = new Date();
    var year = currentDate.getFullYear();
    var month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    var day = currentDate.getDate().toString().padStart(2, '0');
    var fileName = year + month + day + ".txt";

    var request = new XMLHttpRequest();
        request.open("GET", fileName, true);
        request.onreadystatechange = function() {
            if (request.readyState === 4 && request.status === 200) {
            var jokeData = request.responseText;
            document.getElementById("showData").textContent = jokeData;
            }
        };
        request.send();
    
}