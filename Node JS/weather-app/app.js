const yargs = require('yargs');
const weather = require('./weather/weather.js');
const geocode = require('./geocode/geocode.js');

const argv = yargs
  .options({
    a: {
      demand:true,
      alias:'address',
      describe:'Address to fetch weather for',
      string:true
    }
  })
  .help()
  .alias('help','h')
  .argv;

  geocode.geocodeAddress(argv.a , (errorMessage, results) =>{
    if(errorMessage){
      console.log(errorMessage);
    } else {
      console.log(JSON.stringify(results, undefined, 2));
      weather.getWeather(results.Latitude, results.Longitude, (errorMessage, weatherResults) => {
        if (errorMessage) {
          console.log(errorMessage);
        } else {
          console.log(`It's currently ${weatherResults.temperature}. It feels like ${weatherResults.apparentTemperature}`);
        }
      });
    }
  });
