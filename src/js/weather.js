
function success(pos) {
   const url = `/.netlify/functions/weatherapi?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&units=metric`
   console.log(url);
   fetch(url)
   .then(response => response.json())
   .then(data => {
      document.querySelector('#city').textContent = data.name;
      document.querySelector('#temp').textContent = data.main.temp + " C";
      document.querySelector('#main').textContent = data.weather[0].main;
      document.querySelector('#desc').textContent = data.weather[0].description;

      document.querySelector('#weather').classList.remove("hidden");
   })
   .catch(err => "sadness")



 };
 
 function error(err) {
   console.warn(`ERROR(${err.code}): ${err.message}`);
 };
 
 if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(success, error);
 }