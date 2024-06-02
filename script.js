const apiKey = "2411475f436ba94e5ff12d3c4ecd05d2";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchInput = document.querySelector('.search input')
const searchBtn = document.querySelector('.search button')
const weatherIcon = document.querySelector('.weather-icon')

async function checkWeather(city){
    const response = await fetch(apiUrl+city+`&appid=${apiKey}`)
    const data = await response.json();
    console.log(data);
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp)+" °c";
    document.querySelector('.wind').innerHTML = data.wind.speed+" km/hr";
    document.querySelector('.humidity').innerHTML = data.main.humidity+" %";
    document.querySelector('.city').innerHTML = city;


    if(data.weather[0].main ==="Clear"){
        weatherIcon.src = "clear.png"
    }
    else if(data.weather[0].main ==="Drizzle"){
        weatherIcon.src = "drizzle.png"
    }
    else if(data.weather[0].main ==="Clouds"){
        weatherIcon.src = "clouds.png"
    }
    else if(data.weather[0].main ==="Rain"){
        weatherIcon.src = "rain.png"
    }
    else if(data.weather[0].main ==="Mist"){
        weatherIcon.src = "mist.png"
    }
    else if(data.weather[0].main ==="Snow"){
        weatherIcon.src = "snow.png"
    }
}

searchBtn.addEventListener('click',(e)=>{
    let city_name = searchInput.value;
    checkWeather(city_name)
})

searchInput.addEventListener('keydown',(e)=>{
    if(e.key ==="Enter"){
        checkWeather(searchInput.value);
    }


})

function currentWeather(city){
    checkWeather(city);
}

currentWeather(document.querySelector('.reloadCity').innerHTML)