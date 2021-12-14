const apiKey = '1e8b02941a753fb6d511aef5b10a358c';
const apiBase = 'http://api.openweathermap.org/data/2.5/weather';


function getWeatherDate(city){
    const url = `${apiBase}?q=${city}&units=metric&appid=${apiKey}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            document.getElementById('city-name').innerText = data.name || 'UnKnown Location';
            document.getElementById('weather-temp').innerText = data.main.temp;
            document.getElementById('weather-name').innerText = data.weather[0].main;
            document.getElementById('icon').getAttribute('url', `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
            document.getElementById('city-value').value = '';
        })
}


document.getElementById('search_button').addEventListener('click', function(){
    const cityValue = document.getElementById('city-value').value;
    getWeatherDate(cityValue);
});

getWeatherDate('Dhaka');



