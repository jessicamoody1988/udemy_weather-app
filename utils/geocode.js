const request = require('request');

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiY29zbW90dXJ0bGVwdWZmIiwiYSI6ImNrdHlrdDRkbDM0amoyb28ycnN2bm02MGwifQ.OH-IOdZOTyp1f6ddbtK_RA&limit=1';

    request({ url, json: true }, (err, { body }) => {
        if (err) {
            callback('Unable to connect to location services!', undefined);
        } else if (body.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined);
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode;