console.log("I got here");
function addV() {
    console.log("got here 1");
    let li = document.createElement("LI");
    let bu = document.createElement("button");
    bu.textContent = "❌";
    bu.setAttribute("id", "button1");
    let text = document.getElementById("favchap").value;
    li.innerText = text;
    li.appendChild(bu);
    document.querySelector("ul").appendChild(li);
    console.log("Got here 2");
}
document.querySelector("button").addEventListener("click", addV);
document.querySelector("#button1").addEventListener("click", ()=> {
    
})