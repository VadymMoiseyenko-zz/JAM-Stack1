const axios = require("axios");
require('dotenv').config();
const countries = require("./countries.json")


exports.handler = async function(event, context, callback){
   const {lat, lon} = event.queryStringParameters

      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.API_KEY_WEATHER}&units=metric`
      const response = await axios.get(url);
      
      callback(null, {
         statusCode: 200,
         body: JSON.stringify(response.data)
      })
}
