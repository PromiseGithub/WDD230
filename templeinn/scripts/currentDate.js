
let d = new Date();
let weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

let month = new Array(12);
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";

let x = d.getDate();
let y = d.getFullYear();
let m = month[d.getMonth()];

document.getElementById("currentDate").innerHTML = m + " " + x + ", " + y;

// current waether

const url = "https://api.openweathermap.org/data/2.5/weather?id=5605242&appid=901fd2bc31eca7e962727acbae06da9f&units=imperial"

fetch(url).then(response => response.json()).then(data => {
	console.log(data)
	let currenttemp = data.main.temp;
	let currcond = data.weather[0].description;
	let icon = data.weather[0].icon;
	let speed = data.wind.speed;
	let chill = Math.round(35.74 + (0.6215 * currenttemp) - Math.pow(35.75 * speed, 0.16) + Math.pow(0.4275 * currenttemp * speed, 0.16));
	console.log(speed);
	
	document.querySelector("#curr-temp").innerText = currenttemp;
	document.querySelector("#curr-cond").innerText = currcond;
	document.querySelector("#windspeed").innerText = speed;
	document.querySelector("#windchill").innerText = chill;

	let iconSource = `http://openweathermap.org/img/wn/${icon}@2x.png`
	document.querySelector("#icon").setAttribute('src', iconSource);
})