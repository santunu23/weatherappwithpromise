
// var getweatherdata=new getWeatherdata();
// document.querySelector('.btn').addEventListener('click',getData);

// function getData(e){
// var content='';
// const formdata=document.querySelector('#getdata');
// if(formdata!==""){
// getweatherdata.get(`http://api.openweathermap.org/data/2.5/weather?appid=40ae24753b1fbf9b0bcb99a5b02c6d0a&q=${formdata.value}`,function(posts,err){
// if(posts){
// 	content+=`<tr><td><strong>City</strong>: ${posts.name}</td></tr>
// 			  <tr><td><strong>Icon </strong>:<img src="http://openweathermap.org/img/w/${posts.weather[0].icon}.png"></td></tr>
// 			  <tr><td><strong>Temperature</strong>: ${parseInt(posts.main.temp-273.15)}°C</td></tr>
// 			  <tr><td><strong>Pressures</strong>: ${posts.main.pressure}</td></tr>
// 			  <tr><td><strong>Humidity</strong>: ${posts.main.humidity}%</td></tr>
// 			  <tr><td><strong>Min.Temperature</strong>: ${parseInt(posts.main.temp_min-273.15)}°C</td></tr>
// 			  <tr><td><strong>Max.Temperature</strong>: ${parseInt(posts.main.temp_max-273.15)}°C</td></tr>
// 			  <tr><td><strong>Wind Speeds</strong>: ${posts.wind.speed}meter/sec</td></tr>
// 			  <tr><td><strong>Clouds </strong>: ${posts.clouds.all}%</td></tr>
// 			`;
// 	document.getElementById('table').innerHTML=content;
// }else{
// 	console.log(err);
// }
// });	
// }else{
// 	console.log('Field can\'t be empty');
// }	
// formdata.value='';
// e.preventDefault();
// }




const weatherdata=new getWeatherdata;
document.querySelector('.btn').addEventListener('click',getData);

function getData(e){
const formdata=document.querySelector('#getdata');
if(formdata!==""){
weatherdata.get(`http://api.openweathermap.org/data/2.5/weather?appid=40ae24753b1fbf9b0bcb99a5b02c6d0a&q=${formdata.value}`)
.then(data=>displaydata(data))
.catch(err=>console.log(err))
}else{
	console.log('Field can\'t be empty');
}	
formdata.value='';
e.preventDefault();
}



var displaydata=function(data){
	var content='';
	content+=`<tr><td><strong>City</strong>: ${data.name}</td></tr>
			  <tr><td><strong>Icon </strong>:<img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png"></td></tr>
			  <tr><td><strong>Temperature</strong>: ${parseInt(data.main.temp-273.15)}°C</td></tr>
			  <tr><td><strong>Pressures</strong>: ${data.main.pressure}</td></tr>
			  <tr><td><strong>Humidity</strong>: ${data.main.humidity}%</td></tr>
			  <tr><td><strong>Min. Temperature</strong>: ${parseInt(data.main.temp_min-273.15)}°C</td></tr>
			  <tr><td><strong>Max. Temperature</strong>: ${parseInt(data.main.temp_max-273.15)}°C</td></tr>
			  <tr><td><strong>Wind Speeds</strong>: ${data.wind.speed}meter/sec</td></tr>
			  <tr><td><strong>Clouds </strong>: ${data.clouds.all}%</td></tr>
			`;
	document.getElementById('table').innerHTML=content;
} 