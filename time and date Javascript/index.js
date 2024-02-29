let today = new Date();
let day = today.getDate();
let month = today.getMonth() + 1;

function theTime() {
    let d = new Date();
    document.getElementById("time").innerHTML = d.toLocaleTimeString("en-US");
}
today = day + "/" + month + "/" + today.getFullYear();

document.getElementById("date").innerHTML = today;

let mylet = setInterval(function () {
    theTime();
});