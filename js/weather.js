const getWeather = async () => {
    const input = document.getElementById('input-city');
    const value = input.value;
    const key = 'b5fdb6b7a1f17a1b21c17231101e373e';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${value} &appid=${key}`;
    input.value = '';
    if (value != '' && value != 'number') {
        try {
            const res = await fetch(url);
            const data = await res.json();
            displayWeather(data);
        }
        catch (error) {
        }
    }
}

const displayWeather = weather => {
    document.getElementById('name').innerText = `Country : ${weather.sys.country} 
    City : ${weather.name}`;
    document.getElementById('temperature').innerText = (weather.main.temp - 273.15).toFixed(1);
    document.getElementById('sky').innerText = weather.weather[0].main;
    if (weather.weather[0].main.toLowerCase() == 'thunderstorm') {
        document.getElementById('storm').removeAttribute('hidden');
        document.getElementById('sun-cloud').setAttribute('hidden', true);
        document.getElementById('rain').setAttributeI('hidden', true);
        document.getElementById('clear').setAttribute('hidden', true);
    }
    else if (weather.weather[0].main.toLowerCase() == 'clouds') {
        document.getElementById('sun-cloud').removeAttribute('hidden');
        document.getElementById('storm').setAttribute('hidden', true);
        document.getElementById("rain").setAttributeI("hidden", true);
        document.getElementById("clear").setAttribute("hidden", true);
    }
    else if (weather.weather[0].main.toLowerCase() == 'rain') {
        document.getElementById('rain').removeAttribute('hidden');
        document.getElementById("sun-cloud").setAttribute("hidden", true);
        document.getElementById("storm").setAttribute("hidden", true);
        document.getElementById("clear").setAttribute("hidden", true);
    }
    else if (weather.weather[0].main.toLowerCase() == 'clear') {
        document.getElementById('clear').removeAttribute('hidden');
        document.getElementById("rain").setAttribute("hidden", true);
        document.getElementById("sun-cloud").setAttribute("hidden", true);
        document.getElementById("storm").setAttribute("hidden", true);
    }    
}