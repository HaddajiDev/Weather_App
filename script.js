
function getRandomValue(min, max) {
    return Math.random() * (max - min) + min;
  }

async function Get_City_Pic() {
    
    var city = document.getElementById('search').value;
    var apiKey = 'pxlmlb-GuT3JdOD07V4YMfG3OjQZQ8ursRI-Nge3_Mc';
    var apiUrl = `https://api.unsplash.com/search/photos?query=${city}&client_id=${apiKey}`;    
    var im = document.getElementById('city_img');       
    const response = await fetch(apiUrl, {
        method: "GET"});
    const data = await response.json();    
    im.src = data.results[parseInt(getRandomValue(0, data.results.length), 10)].urls.regular;    
}

async function Get_Weather(){
    var city = document.getElementById('search').value;
    var api_Weather_Key = "b4a62e4d11eb279eaf9826b580d72057";
    var api_Weather_url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${api_Weather_Key}`;
    var api_timeZone = `https://api.api-ninjas.com/v1/worldtime?city=${city}`;
    var Name = document.getElementById("city_Name");
    var temp = document.getElementById("Temp");
    var time = document.getElementById("day");
    var stat = document.getElementById("stat");
    var wind = document.getElementById("wind");
    var humidity = document.getElementById("humidity");
    var pressure = document.getElementById("pressure");
    var icon = document.getElementById("weather_icon");

    const Weather_response = await fetch(api_Weather_url);
    const weather_data = await Weather_response.json();

    const time_resopnse = await fetch(api_timeZone, {
        method: "GET",
        headers:{
            'X-Api-Key': 'GQximPejH7sNYrogtE2fug==Zx4nFXQXNeeWOE8g'
        }
    });
    const time_data = await time_resopnse.json();
    


    temp.innerHTML = Math.round(weather_data.main.temp) + " °C";
    Name.innerHTML = weather_data.name;
    stat.innerHTML = String(weather_data.weather[0].description).replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
    time.innerHTML = time_data.day_of_week + ", " + time_data.hour + ":" + time_data.minute;
    wind.innerHTML = weather_data.wind.speed + " Km/h"
    humidity.innerHTML = weather_data.main.humidity + "%";
    pressure.innerHTML = weather_data.main.pressure + " Pa";

    switch(weather_data.weather[0].main){
        case "Clouds":
            icon.src = "./cloud.png";            
            break;
        case "Clear":
            icon.src = "./Clear.png";            
            break;
        case "Rain":
            icon.src = "./rain.png";
            break;
        case "Drizzle":
            icon.src = "./drizzle.png";
            break;
        case "Mist":
            icon.src = "./Mist.png";
            break;
        case "Snow":
            icon.src = "./snow.png";
            break;
        default:
            icon.src = "./Logo.png";
            break;
    }
    
    Get_City_Pic();    
}

