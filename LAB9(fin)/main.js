$(function(){
    getLocation();
});

function getLocation() {
    if (navigator.geolocation == undefined) {
        alert("Geolocation is not supported by this browser.");
        return;
    }
    let settings = {
        enableHighAccuracy: true,
    };
    navigator.geolocation.getCurrentPosition(result, error, settings);
}

function result(position) {
    let thisCoords = position.coords;
    console.log(`Location: ${thisCoords.latitude}, ${thisCoords.longitude}`);
    window.location.href = `https://maps.google.com.tw?q=${thisCoords.latitude},${thisCoords.longitude}`;
}

function error(error) {
    console.log("Error occurred:", error);
}