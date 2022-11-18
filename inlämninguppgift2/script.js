let APIkey = '5075d36c231e7facbda06812845f3d10';// declare a  valid APIkey as global variable
// create aglobal variables
let latt;
let long;
let temprature;
let country;
let city;

async function binrgLocalinfo() {
  // grape geo location for Stockholm city, AJAX med fetch ,

  const result = await  fetch(`http://api.openweathermap.org/geo/1.0/direct?q=Stockholm&limit=1&appid=${APIkey}`) // to get latitude longitude for the local city
  const data = await result.json();// convert the data to json
  console.log(data);// print the data in the console
  console.log(data[0].name);
  console.log(data[0].lat);
  console.log(data[0].lon);
    let country = data[0].country;// save the json data to avariable 
    let latt = data[0].lat;
    let long = data[0].lon;
    let city = data[0].name;

  const resultt = await  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latt}&lon=${long}&limit=1&appid=${APIkey}`)// set the result of the fetch fun to avariable 
  const datajson = await resultt.json();// convert the data to json
  console.log(datajson);

 // take the data and display it on the webpage
   function bringLocalweather(){

       let temprature = datajson.main.temp;
	   let condition = datajson.weather[0].description;
	   let icon = datajson.weather[0].icon;
	   console.log(condition);
	   var celcius = Math.round(parseFloat(temprature)-273.15);
       console.log(temprature);
	   let time = new Date(datajson.dt * 1000);
	   let hrs = time.getHours();
	   let mins = time.getMinutes();
	   let str =`${hrs}:${mins}`;
       //Dom//
       document.getElementById('town').innerHTML = city;// display stockholm on the webpage
       document.getElementById('count').innerHTML = country;// display se on webpage
	   document.getElementById('tempr').innerHTML = celcius + '&deg;';// display temprture
	   document.getElementById('cond').innerHTML = condition;// display condition of the weather
	   document.getElementById('icn').innerHTML = icon;
	   document.getElementById('time').innerHTML =str;

   }
    bringLocalweather(); // call the second func"bringLocalweather" after "binrgLocalinfo"
}
binrgLocalinfo(); // call the function binrgLocalinfo when the page loads 

 

 
