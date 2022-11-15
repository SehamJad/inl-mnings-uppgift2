//let APIkey = '5075d36c231e7facbda06812845f3d10';
let latitude;
let long;
var temp = document.querySelector("#Weather Temp")

// grape geo location for Stockholm city
async function binrgLocalinfo() {
  
 const result = await  fetch(`http://api.openweathermap.org/geo/1.0/direct?q=Helsingborg&limit=1&appid=${APIkey}`) // to get latitude longitude for the local city
  const data = await result.json();
  console.log(data);
    console.log(data[0].name);
    console.log(data[0].lat);
    console.log(data[0].lon);
    let country = data[0].country;
    let latitude = data[0].lat;
    let long = data[0].lon;

 }
 binrgLocalinfo();

 async function localWeatherinfo() {
    binrgLocalinfo();
      
 const resultt = await  fetch(`http://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${long}&limit=1&appid=${APIkey}`)
 const datajson = await resultt.json();
 console.log(datajson);


 }
 localWeatherinfo();

 
     
