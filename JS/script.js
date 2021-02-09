//console.log(document)
// console.info("CIAO, SONO JS!!!")
// console.warn("CIAO, SONO JS!!!")
// console.error("CIAO, SONO JS!!!")

// var container = document.getElementById("container");
// console.log(container);

// var nav = document.getElementsByTagName("nav");
// console.log(nav);

// var classeA = document.getElementsByClassName("classeA");
// console.log(classeA);

// var h1Homepage = document.querySelector("#container h1");
// console.log(h1Homepage);

// var h1Homepages = document.querySelectorAll("#container h1");
// console.log(h1Homepages);



// C# function without parameters
// public void Test() {

// }

// JS function without parameters
function Test() {
}

// JS arrow function without parameters
var Test = () => { }

// C# function with parameters
// public void Test_2(string par1, string par2) {

// }

// JS function with parameters
function Test_2(par1, par2) {
}

// JS arrow function with parameters
var Test_2 = (par1, par2) => { }

function SetContainerStyle() {
    var container = document.getElementById("container");
    container.style.border = "5px solid #000000";
    container.style.backgroundColor = "#FF0000";
    container.innerHTML += "<p>CIAO SONO UN P MESSO DA JS</p>";
}

function SetClockTime() {
    var clock = document.getElementById("clock");
    clock.textContent = new Date();
    //clock.innerHTML = '<h1>' + new Date() + '</h1>';
}

setTimeout(SetContainerStyle, 5000);
setInterval(SetClockTime, 1000);