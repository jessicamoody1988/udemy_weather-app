const forecast = require('./utils/forecast');
const geocode = require('./utils/geocode');

const address = process.argv[2];

if (!address) {
    console.error('Please provide an address!');
} else {
    geocode(address, (err, { latitude, longitude, location }) => {
        if(err) {
            return console.error(err);
        } 
    
        forecast(longitude, latitude, (error, forecastData) => {
            if (error) {
                return console.error(error)
            }
    
            console.log(location);
            console.log(forecastData.description);
        });
    });
}