const getWeather = async () => {
    const input = document.getElementById('input-city');
    const value = input.value;
    const key = 'b5fdb6b7a1f17a1b21c17231101e373e';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${value} &appid=${key}`;
    input.value = '';
    
    const res = await fetch(url);
    const data = await res.json();
    displayWeather(data);
}

const displayWeather = weather => {
    document.getElementById('name').innerText = weather.name;
    document.getElementById('temperature').innerText = weather.main.temp;
    document.getElementById('sky').innerText = weather.weather[0].main;
    if (weather.weather[0].main == 'Thunderstorm') {
        
    }
}