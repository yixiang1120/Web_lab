let cityData = [
    { name: "", lat: "", lon: ""},
    { name: "目前位置", lat: "", lon: ""},
    { name: "台北", lat: 25.0856513, lon: 121.421409 },
    { name: "台中", lat: 24.1852333, lon: 120.4946381 },
    { name: "高雄", lat: 22.7000444, lon: 120.0508691 }, 
    { name: "元智", lat: 24.9703173, lon: 121.2608673 }
];

$(function(){
    for(let x=0;x<cityData.length;x++){
        $("#citySelect").append(
            `<option value='${x}'>${cityData[x].name}</option>`
        );
    }
    $("#citySelect").on("change", loadServerData);
});

function loadServerData(){
    console.log("[loadServerData] in");
    $("#result").empty();
    let selectedCityIndex = this.value;
    console.log(`selectedCityIndex: ${selectedCityIndex}`);
    if(selectedCityIndex == 1) {
        // 獲取目前位置的經緯度
        if (navigator.geolocation == undefined) {
            alert("Geolocation is not supported by this browser.");
            return;
        }
        let settings = {
            enableHighAccuracy: true,
        };
        navigator.geolocation.getCurrentPosition(
            function(position) {
                let thisCoords = position.coords;
                console.log(`Location: ${thisCoords.latitude}, ${thisCoords.longitude}`);
                // 更新目前位置的經緯度
                cityData[selectedCityIndex].lat = thisCoords.latitude;
                cityData[selectedCityIndex].lon = thisCoords.longitude;
                // 調用函數獲取天氣數據
                getWeatherData(selectedCityIndex);
            },
            function(error) {
                console.log(error);
            },
            settings
        );
    } else {
        console.log(selectedCityIndex);
        // 選擇了其他城市，直接獲取天氣數據
        getWeatherData(selectedCityIndex);
    }
}

function getWeatherData(cityIndex) {
    let weatherAPI_URL = "https://api.openweathermap.org/data/2.5/weather?";
    let weatherMapAPIKey = "b7fcb56e92d2f0dd2defb06f4f5db9db";
    $.getJSON(weatherAPI_URL,{
        lat:cityData[cityIndex].lat,
        lon:cityData[cityIndex].lon,
        appid:weatherMapAPIKey,
        units:'metric',
        lang:'zh_tw'
    })
    .done(function(data){
        console.log(data);
        $("#result").append(
            `<p>氣溫：${data.main.temp_min} ~ ${data.main.temp_max}</p>`
        );
        $("#result").append(
            `<p><img src='https://openweathermap.org/img/wn/${data.weather[0].icon}.png'>${data.weather[0].description}</p>`
        );
    })
    .fail(function(){console.log("Error")})
    .always(function(){console.log("Always")});
}
