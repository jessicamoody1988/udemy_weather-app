const request = require('request');

const url = 'http://api.weatherstack.com/current?access_key=4a89ec6b066a331b806bfcda51f520f9&query=37.8267,-122.4233&units=f';

request({ url: url, json: true }, (err, res) => {
    if (err) {
        console.error('Unable to connect to weather service!');
    } else if (res.body.error) {
        console.error('Unable to find location');
    } else {
        console.log(res.body.current.weather_descriptions[0] + `. It is currently ${res.body.current.temperature} out. There is a ${res.body.current.precip}% chance of rain.`);
    }
});

const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiY29zbW90dXJ0bGVwdWZmIiwiYSI6ImNrdHlrdDRkbDM0amoyb28ycnN2bm02MGwifQ.OH-IOdZOTyp1f6ddbtK_RA&limit=1';

request({ url: geocodeURL, json: true }, (err, res) => {
    if (err) {
        console.error('Internal System Error');
    } else if (res.body.message === 'Not Found') {
        console.error('Location Not Found')
    } else {
        const [lat, long] = res.body.features[0].center;
        console.log(`Latitude: ${lat}, 'Longitude: ${long}`);
    }
});