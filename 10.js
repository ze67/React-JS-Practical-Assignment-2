$(document).ready(function() {
    const weatherData = {
        "Surat": {
            temperature: 25,
            description: "Sunny",
            icon: "☀️"
        },
        "Mumbai": {
            temperature: 15,
            description: "Cloudy",
            icon: "☁️"
        },
        "Goa": {
            temperature: 20,
            description: "Partly Cloudy",
            icon: "⛅"
        },
        "Delhi": {
            temperature: 18,
            description: "Rainy",
            icon: "🌧️"
        },
        "Kolkata": {
            temperature: 28,
            description: "Sunny",
            icon: "☀️"
        }
    };

    function displayWeather(city) {
        let weather = weatherData[city];

        if (weather) {
            $('#weather-info').html(`
                <div>Temperature: ${weather.temperature}°C</div>
                <div>Description: ${weather.description}</div>
                <div class="weather-icon">${weather.icon}</div>
            `);
        } else {
            $('#weather-info').html('<div>City not found. Try another one.</div>');
        }
    }

    $('#get-weather-btn').on('click', function() {
        let city = $('#city-input').val().trim();
        if (city !== '') {
            displayWeather(city);
        }
    });

    $('#city-input').on('keypress', function(e) {
        if (e.which === 13) {
            $('#get-weather-btn').click();
        }
    });
});