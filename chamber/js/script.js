const daynames = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday"
];
const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December"
];
const d = new Date();
const dayName = daynames[d.getDay()];
const monthName = months[d.getMonth()];
const year = d.getFullYear();
//const fulldate = dayName + ", " + monthName + " " + d.getDate() +", " + year;
const fulldate = `${dayName}, ${d.getDate()} ${monthName} ${year}`;
// using getElementById
const modified = document.lastModified;
document.getElementById("currentdate").textContent = fulldate;
document.getElementById("currentyear").textContent = year;
document.getElementById("modified").textContent = modified;
// ****************************
// using querySelector
const date2 = document.querySelector('#currentdate2');

// try {
//   const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
//   date2.textContent = new Date().toLocaleDateString('en-UK', options);
// } catch (e) {
//   alert('Error with code or your browser does not support Locale');
// }

const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

// To solve the mid resizing issue with responsive class on
window.onresize = () => {if (window.innerWidth > 900) mainnav.classList.remove('responsive')};

// Solving for weather
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

// Visitor's visiting time
let dateControl = document.querySelector('#visit');
dateControl.value = d;
