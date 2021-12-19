//geolocation 함수 사용

const API_KEYS = "77c69e1c05078c11a19aeb8f7b3f6d65";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEYS}`;

    console.log(url);
    //fetch를 사용해서 url에서 얻는다!
    //then : response를 받아서 response의 json을 얻는다.\
    //
    fetch(url).then((response) => response.json())
    .then((data) => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}

function onGeoError(){
   alert("can't find you. No weather for you.");
}
navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);