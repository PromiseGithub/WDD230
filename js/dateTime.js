let d = new Date();
let month = d.getMonth() + 1;
let year = month + "/" + d.getDate() + "/" + d.getFullYear();
let year1 = d.getFullYear();
let time = document.lastModified;
console.log(time);

document.getElementById("currentyear").textContent = year1;
document.getElementById("currentyear1").textContent = time;