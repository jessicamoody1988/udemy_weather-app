const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=4a89ec6b066a331b806bfcda51f520f9&query=${longitude},${latitude}&units=f`;

    request({ url, json: true }, (err, { body }) => {
        if(err) {
            callback('Unable to connect to weather services!', undefined);
        } else if (body.error) {
            callback('Unable to find location.');
        } else {
            callback(undefined, {
                description: body.current.weather_descriptions[0] + `. It is currently ${body.current.temperature} out. There is a ${body.current.precip}% chance of rain.`
            })
        }
    })
}

module.exports = forecast;