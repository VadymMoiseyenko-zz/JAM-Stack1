const axios = require("axios");
require('dotenv').config();
const countries = require("./countries.json")


 async function getNews(country){
   try{
      const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${process.env.NEWS_API_KEY}&pageSize=5`);
      return {
         country,
         articles: response.data.articles,
      }
   } catch(e){
      console.log(e);
      return {}
   }
}

module.exports = async function(){
   let newsPromises = countries.map(getNews);
   return Promise.all(newsPromises).then(newsObject => {
      console.log(newsObject)
       return [].concat.apply([], newsObject)
   } )
}